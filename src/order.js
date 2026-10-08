export const money = n => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
export const validWhatsAppNumber = number => /^[1-9]\d{6,14}$/.test(String(number||''));
export function buildOrderLink(config, items, cart, details) {
 if(!validWhatsAppNumber(config.whatsappNumber)) throw new Error('Configure a valid store WhatsApp number');
 if(!items.length) throw new Error('Cart is empty');
 const value=k=>String(details[k]||'').trim();
 if(['name','phone','address','city','country'].some(k=>!value(k))) throw new Error('Missing delivery details');
 const total=items.reduce((sum,p)=>sum+p.price*cart[p.id],0);
 const message=[`Hello ${config.storeName||'Otaku Parcel'}, I’d like to order:`, '', ...items.flatMap(p=>[`• ${p.name} × ${cart[p.id]} — ${money(p.price)} each = ${money(p.price*cart[p.id])}`,...(config.storefrontUrl?[`${config.storefrontUrl.split('#')[0]}#product-${p.id}`]:[])]),'',`Subtotal: ${money(total)} USD`,'Delivery fee: please confirm','',`Name: ${value('name')}`,`Phone: ${value('phone')}`,...(value('email')?[`Email: ${value('email')}`]:[]),`Address: ${value('address')}`,`City: ${value('city')}`,`Country: ${value('country')}`,...(value('notes')?[`Notes: ${value('notes')}`]:[]),'','Please confirm availability, delivery costs and the final total.'].join('\n');
 return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
