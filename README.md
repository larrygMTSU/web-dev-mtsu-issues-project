# MTSU DEI Support Project

Multi‑page static site providing resources, ethical framing, and support content related to DEI changes at Middle Tennessee State University.

## Structure
- `index.html` – Landing page (GitHub Pages entry point)
- `vision-mission-values.html` – Vision, Mission, Values narrative
- `ethical-practices.html` – Ethical approach & principles
- `contact.html` – Contact form (Formspree placeholder)
- `centers-programs.html` / `educational-toolkit.html` / `training.html` – Resource hub placeholders
- `css/style.css` – Shared styling (flattened)
- `js/main.js` – Client-side enhancements (form submission logic)
- `images/` – Local image assets

## Flattening Rationale
Originally assets lived in `web-dev-mtsu-issues-project/` which contained its own `.git`, causing GitHub Pages 404s for CSS/JS. Flattening removed nested paths, enabling direct references like `css/style.css`.

## Accessibility Features
- Skip link (`.skip-link`) for keyboard users
- Focus-visible outlines on interactive elements
- Semantic landmarks: `<main>` for primary content
- Descriptive alt text and consistent heading hierarchy

## Contact Form Setup (Formspree)
1. Create a form at https://formspree.io/
2. Copy endpoint (`https://formspree.io/f/xxxxxxx`)
3. Replace `https://formspree.io/f/yourFormID` in `contact.html` form `action`
4. Optional hidden input: `<input type="hidden" name="form-name" value="mtsu-dei-contact" />`
5. Submit test; confirm success message

## Local Development
```powershell
python -m http.server 8000
# or
npx serve .
```
Visit `http://localhost:8000` (adjust port as needed).

## Deployment: GitHub Pages
1. `git add .`  /  `git commit -m "Site"`
2. `git remote add origin https://github.com/<USERNAME>/<REPO>.git`
3. `git push -u origin main`
4. Enable Pages: Settings → Pages → Branch: `main` / root
5. Wait for publish at `https://<USERNAME>.github.io/<REPO>/`

## Updating the Site
Commit + push; Pages rebuild applies changes (usually under 2 minutes).

## Custom Domain (Optional)
1. Create `CNAME` file with domain
2. Configure DNS per GitHub docs

## Image & Asset Guidance
- Use optimized Unsplash query params (`w=` & `q=`)
- Prefer local copies for critical hero images

## Future Enhancements
- Replace placeholder resource descriptions with real data
- Add privacy‑friendly analytics (Plausible/Matomo)
- Update log on `ethical-practices.html`
- Add ARIA roles to complex components if needed
- Consider EmailJS if Formspree limits exceed needs

## Maintenance Checklist
- [ ] Index reachable
- [ ] Form endpoint valid
- [ ] No broken nav links
- [ ] No 404 assets (CSS/JS/images)
- [ ] Skip link works
- [ ] Contrast sufficient

## Quick Verification After Changes
Open DevTools Network; confirm `style.css` 200 and no red 404 entries.

## License / Attribution
Internal institutional use; add formal license if distribution planned.

## Cleanup Note
Remove the old `web-dev-mtsu-issues-project/` folder if still present (after verifying nothing unique remains) to avoid confusion.