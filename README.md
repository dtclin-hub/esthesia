# Esthesia static website

This is a static HTML/CSS/JavaScript extraction of the publicly accessible Esthesia website. It retains the captured rendered page markup and original Astro-generated CSS/runtime assets, while removing the Cloudflare analytics beacon.

## Files
- `index.html`, `products.html`, `about.html`, `contact.html`: captured pages
- `products/`, `about/`, `contact/`: extensionless route aliases for the original public URLs
- `_astro-1732517316264/`: original stylesheet and runtime JavaScript required by the captured layout
- `assets.zyrosite.com/`, `videos.pexels.com/`: locally captured assets
- `js/static-site.js`: static contact/newsletter form fallback

## Before publishing
1. Open `js/static-site.js`. Replace `REPLACE_WITH_ESTHESIA_CONTACT_EMAIL` with the correct monitored business email address. The form fallback opens the visitor's email application; it does not send mail in the background. For a fully hosted form, configure a provider such as Formspree and replace the mailto handler.
2. Some original images are loaded from Unsplash and fonts from Zyro's Google Fonts endpoint. Those references remain external because the HTTrack archive did not contain local copies of them. Download and self-host them if you require a fully offline/self-contained copy.
3. Check the social media links and contact details before going live.

## Deploy to GitHub Pages
1. Create a GitHub repository (for example `esthesia-website`).
2. Upload the contents of this folder to the repository root.
3. In repository Settings → Pages, select deploy from branch `main`, folder `/ (root)`.
4. Add `esthesia.com.au` as the custom domain in Pages settings. Configure the DNS records GitHub provides, and enable HTTPS after DNS verification.

## Important scope note
This archive contained four main pages, not a WordPress export. The captured website assets identify an Astro/Zyro-generated frontend. This is therefore a static-site packaging and dependency-cleanup exercise, not a migration of a WordPress database. The ZIP may not include every unlinked or dynamically loaded page/asset.
