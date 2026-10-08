# Otaku Parcel

A simple guest-shopping storefront built with React, Bootstrap and custom CSS. Located at `/Users/user/Documents/anime`, in its own Git repository.

## Run

`npm install`

`npm run dev -- --port 5173`

`npm run build` creates the production website in `dist/`.

## Catalog and galleries

120 concept listings across 12 anime franchises, Rain World and a collector archive: T-shirts, shorts, jorts, matching clothing sets, blankets, floor/foot mats, lamps, framed art, seven varied hoodies (including My Hero Academia and Rain World Slugcats), eight phone-model-specific $10–$20 cases, mugs, keychains, pens, a figure, a manga collector listing and a tote.

Every listing has two distinct gallery views. Clothing shows front/back; home goods show alternate angles or folded views. Product reference links use `#product-ID`, open the corresponding gallery directly, and work after a refresh. Search, category and anime filters combine. The grid initially shows 24 items, with more loaded on request. The default order deliberately mixes franchises and categories, with no same-franchise neighbors, and stays stable across renders. Actual image backdrops vary across concrete, wood, linen, slate and colored studio surfaces.

All imagery is AI-generated concept merchandise photography, not supplier photos or evidence of actual inventory. This is disclosed once above the collection and again in the product gallery. No supplier catalog, licensing information, stock, sizing/material specifications, authentic signed books or customer reviews were supplied. Phone case listings specify iPhone 15 or iPhone 16 in the product name and cart/order text; concept images are not a fit guarantee. Reviews show “No reviews yet”; no ratings, purchase counts or customer quotes are fabricated. The signed-edition concept contains no claimed genuine signature or authentication.

Edit `src/catalog.js` to replace concepts with actual products. Gallery images use shared WebP contact sheets and CSS tile positions. See `public/images/catalog/provenance.json`. Lazy image loading and a 24-item initial grid limit initial downloads and rendering. Original early shirt mockups remain in `public/images/` but are not requested by the current catalog.

## WhatsApp setup

In `public/config.js`, set `whatsappNumber` to your store's international number using digits only (country code included, no `+` or spaces). The supplied store number is configured as `12016202320`. Checkout opens a prepared message to that destination; the shopper must press send.

Optional: set `storefrontUrl` to the public website address after hosting. Otherwise product links use the current storefront origin. Localhost links only work on the device running the preview; public sharing requires a hosted URL. No deployment is included.

Guests review cart items, quantities, unit/line prices and subtotal, then enter name, phone, delivery address, city and country. Email and notes are optional. Checkout opens a WhatsApp chat with complete text details and product-gallery links. The shopper reviews and presses send. The store confirms stock, delivery and final costs manually. There is no account, automatic order submission, payment processor or backend.

The bag persists locally on the shopper's device; delivery/contact details are not saved. Google Fonts are optional external resources with system fallbacks.
