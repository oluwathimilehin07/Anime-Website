const worlds = [
 ['naruto','Naruto','Shinobi'], ['one-piece','One Piece','Straw Hat'],
 ['bleach','Bleach','Soul Reaper'], ['demon-slayer','Demon Slayer','Demon Hunter'],
 ['jujutsu-kaisen','Jujutsu Kaisen','Cursed Energy'], ['attack-on-titan','Attack on Titan','Scout'],
 ['dragon-ball','Dragon Ball','Saiyan'], ['hunter-x-hunter','Hunter × Hunter','Hunter'],
 ['fullmetal-alchemist','Fullmetal Alchemist','Alchemist'], ['sailor-moon','Sailor Moon','Moon Guardian'],
 ['my-hero-academia','My Hero Academia','Hero Academy'], ['chainsaw-man','Chainsaw Man','Chainsaw']
];
const objects = [
 ['Graphic T-shirt','T-shirts',50,'tee','Front','Back'],
 ['Training Shorts','Shorts',60,'shorts','Front','Back'],
 ['Denim Jorts','Jorts',100,'jorts','Front','Back'],
 ['Matching Clothing Set','Clothing sets',150,'set','Front','Back'],
 ['Fleece Throw Blanket','Blankets',100,'blanket','Full view','Folded view'],
 ['Floor & Foot Mat','Mats',50,'mat','Top view','Angled view'],
 ['Acrylic Glow Lamp','Lamps',60,'lamp','Front view','Side view'],
 ['Framed Art Print','Art & prints',100,'print','Front view','Angled view']
];
const revisedBackdrops=new Set(['naruto','one-piece','jujutsu-kaisen','sailor-moon']);
const panel=(slug,tile,label,cols=4,rows=4)=>({src:`/images/catalog/${revisedBackdrops.has(slug)?slug+'-varied':slug}.webp`,tile,label,cols,rows});
export const products = worlds.flatMap(([slug,franchise,prefix],w)=>objects.map(([name,category,price,type,front,back],t)=>({
 id:101+w*8+t, name:`${prefix} ${name}`, franchise, series:`${franchise}-inspired`,category,price,type,
 gallery:[panel(slug,t*2,front),panel(slug,t*2+1,back)],
 description:`A ${franchise}-inspired ${name.toLowerCase()} concept, with coordinated character artwork and a considered everyday design.`,
 badge:w===0&&t===0?'NEW COLLECTION':null
})));
products.push(
 {id:1,name:'Shinobi Heavyweight Hoodie',franchise:'Naruto',series:'Naruto-inspired',category:'Hoodies',price:100,type:'hoodie',gallery:[panel('specials',0,'Front',4,2),panel('specials',1,'Back',4,2)],description:'A heavyweight hoodie concept with orange shinobi artwork and a complementary back print.'},
 {id:2,name:'Straw Hat Collector Figure',franchise:'One Piece',series:'One Piece-inspired',category:'Figures',price:150,type:'figure',gallery:[panel('specials',2,'Front',4,2),panel('specials',3,'Rear',4,2)],description:'A character figure concept for your shelf, shown from the front and rear.'},
 {id:18,name:'Collector Signed-edition Manga',franchise:'Anime archive',series:'Collector concept',category:'Manga',price:200,type:'manga',gallery:[panel('specials',4,'Stack view',4,2),panel('specials',5,'Cover view',4,2)],description:'A signed-edition collector listing concept. Images show imagined manga covers. No signature or authentication has been supplied; this does not represent an authenticated signed book.'},
 {id:4,name:'Scout Canvas Tote',franchise:'Attack on Titan',series:'Attack on Titan-inspired',category:'Accessories',price:60,type:'tote',gallery:[panel('specials',6,'Front',4,2),panel('specials',7,'Back',4,2)],description:'A canvas tote concept with scout-inspired artwork and a quieter complementary back.'}
);
const phoneSpecs=[
 ['Naruto','Shinobi','iPhone 15',10],['One Piece','Straw Hat','iPhone 16',15],
 ['Jujutsu Kaisen','Cursed Energy','iPhone 16',20],['Demon Slayer','Demon Hunter','iPhone 15',15],
 ['Dragon Ball','Saiyan','iPhone 16',10],['Sailor Moon','Moon Guardian','iPhone 16',20],
 ['Bleach','Soul Reaper','iPhone 15',15],['Chainsaw Man','Pochita','iPhone 16',10]
];
const phoneCases=phoneSpecs.map(([franchise,prefix,model,price],i)=>({id:201+i,name:`${prefix} ${model} Case`,franchise,series:`${franchise}-inspired`,category:'Phone cases',price,type:'case',compatibility:model,gallery:[panel('phone-cases',i*2,'Back design'),panel('phone-cases',i*2+1,'Angled view')],description:`An anime-print phone case concept made for the ${model} only. Camera cutouts and dimensions are model-specific; confirm the exact model and fit with the store before ordering.`}));
const smallSpecs=[
 ['Naruto','Shinobi Crest Hoodie','Hoodies',100,'hoodie','Front','Back'],
 ['One Piece','Straw Hat Zip Hoodie','Hoodies',100,'hoodie','Front','Back'],
 ['Jujutsu Kaisen','Cursed Energy Lavender Hoodie','Hoodies',100,'hoodie','Front','Back'],
 ['Sailor Moon','Moon Guardian Cropped Hoodie','Hoodies',100,'hoodie','Front','Back'],
 ['Naruto','Shinobi Ceramic Mug','Mugs',20,'mug','Front','Reverse'],
 ['Dragon Ball','Saiyan Cobalt Mug','Mugs',20,'mug','Front','Reverse'],
 ['One Piece','Straw Hat Enamel Keychain','Keychains',10,'keychain','Front','Back'],
 ['Chainsaw Man','Pochita Rubber Keychain','Keychains',10,'keychain','Front','Back'],
 ['Demon Slayer','Demon Hunter Charm Pen','Pens',10,'pen','Front view','Reverse view'],
 ['Sailor Moon','Moon Guardian Pearl Pen','Pens',15,'pen','Front view','Reverse view']
];
const smallMerch=smallSpecs.map(([franchise,name,category,price,type,front,back],i)=>({id:221+i,name,franchise,series:`${franchise}-inspired`,category,price,type,gallery:[panel('accessories-hoodies',i*2,front,4,5),panel('accessories-hoodies',i*2+1,back,4,5)],description:`A ${franchise}-inspired ${name.toLowerCase()} concept with its own palette, graphic arrangement and material finish. Confirm availability and specifications with the store.`}));
products.push(
 {id:231,name:'Hero Academy Deku Hoodie',franchise:'My Hero Academia',series:'My Hero Academia-inspired',category:'Hoodies',price:100,type:'hoodie',gallery:[panel('hero-slugcat-hoodies',0,'Front',2,2),panel('hero-slugcat-hoodies',1,'Back',2,2)],description:'A forest-green hoodie concept with a small Deku chest motif and a complementary manga-panel back print.'},
 {id:232,name:'Rain World Slugcat Hoodie',franchise:'Rain World',series:'Rain World-inspired',category:'Hoodies',price:150,type:'hoodie',gallery:[panel('hero-slugcat-hoodies',2,'Front',2,2),panel('hero-slugcat-hoodies',3,'Back',2,2)],description:'A plum-gray hoodie concept featuring Survivor and Monk Slugcats, with an atmospheric industrial-rain scene on the back.'}
);
// Stable merchandising order: mix worlds AND categories, preserving all product IDs.
const core=products.splice(0,96),specials=products.splice(0);
const worldOrder=[0,4,1,8,3,10,6,2,5,11,7,9];
const mixedCore=[];
for(let round=0;round<8;round++) for(let column=0;column<12;column++){
 const world=worldOrder[(column+round*3)%12];
 const type=(round+world)%8;
 mixedCore.push(core.find(p=>p.id===101+world*8+type));
}
const extras=[phoneCases[0],smallMerch[0],smallMerch[4],smallMerch[6],smallMerch[8],...phoneCases.slice(1),...smallMerch.filter((_,i)=>![0,4,6,8].includes(i)),...specials];
const insertAt=new Set([3,7,11,15,19,23,29,35,41,47,53,59,65,71,77,83,89,95,101,107,113,117,118,119]);
while(mixedCore.length||extras.length){
 if(extras.length&&(insertAt.has(products.length)||!mixedCore.length)){
  const previous=products.at(-1),next=mixedCore[0];
  let index=extras.findIndex(p=>p.franchise!==previous?.franchise&&p.franchise!==next?.franchise&&p.category!==previous?.category);
  if(index<0)index=0;
  products.push(extras.splice(index,1)[0]);
 } else products.push(mixedCore.shift());
}
// Repair any final insertion boundary without introducing a new matching neighbor.
for(let i=1;i<products.length;i++) if(products[i].franchise===products[i-1].franchise){
 for(let j=i-2;j>=0;j--){const a=products[i],b=products[j];if(b.franchise!==products[i-1].franchise&&b.franchise!==products[i+1]?.franchise&&a.franchise!==products[j-1]?.franchise&&a.franchise!==products[j+1]?.franchise){[products[i],products[j]]=[b,a];break;}}
}
export const categories=['All objects','T-shirts','Hoodies','Shorts','Jorts','Clothing sets','Phone cases','Keychains','Mugs','Pens','Blankets','Mats','Lamps','Art & prints','Figures','Manga','Accessories'];
export const franchises=['All anime',...worlds.map(w=>w[1]),'Rain World','Anime archive'];
export function imageStyle(view){
 const col=view.tile%view.cols,row=Math.floor(view.tile/view.cols);
 return {backgroundImage:`url("${view.src}")`,backgroundSize:`${view.cols*100}% ${view.rows*100}%`,backgroundPosition:`${col/(view.cols-1)*100}% ${row/(view.rows-1)*100}%`};
}
