# aakritip23.github.io

Personal portfolio of Aakriti Prajapati: final-year B.Tech, Mechanical Engineering, IIT Kanpur.
Live at https://aakritip23.github.io/

## Stack

Plain HTML, CSS and vanilla JS, served directly by GitHub Pages from `main` (root). There is no build step:
edit a file, push, and the site updates in about a minute. `.nojekyll` turns off Jekyll processing.

## Structure

```
index.html                  Home: hero, now, experience, projects, design work, leadership, skills, contact
projects/<slug>.html        One case-study page per project (shared layout, same stylesheet)
404.html                    Not-found page
assets/css/style.css        All styles (tokens on :root)
assets/js/main.js           Nav, scroll reveal, project filter
assets/img/profile.png      Hero photo
assets/img/projects/<slug>/ Cover image + screenshots per project
assets/resume/              Downloadable resume PDF(s)
```

## Run locally

```
python -m http.server 8000   # then open http://localhost:8000
```

## Task list

### Phase 0: Infrastructure (done)
- [x] Clone the repo and move files into `assets/{css,js,img,resume}` and `projects/`
- [x] Fix the missing hero photo (the HTML pointed at `assets/profile.png`, but the file was at the root)
- [x] Add `main.js` hook, `.nojekyll` and this README

### Phase 1: Content and positioning (from resume)
- [ ] Change the hero from "UI/UX designer" to product, data and AI, with design as one strength
- [ ] "Now" strip: the latest work (LeadGen engine, Aug to Sep 2026; Medetronix internship, May to Aug 2026)
- [ ] Experience timeline: Medetronix Labs (AI/ML), Ashok Leyland (ML research), Stash AI (PM), with impact numbers
- [ ] Projects grid with filters (AI/ML · Data · Product/Strategy · Design):
      LeadGen Outbound Engine, CauseIQ (Accenture), Customer Churn, E-Commerce SQL, Reinforce GT,
      Weed/Crop CNN, Sharechat expansion, Cura Devices (Solve the Biz)
- [ ] Keep the design work section: Jeenius, Antaragni, Product Club, Vegan Books, CA Portal, Events, Pride, Battle Underground
- [ ] Leadership: E-Cell Manager, Product Club Secretary, TEDxIITK
- [ ] Achievements: Accenture top 4%, GDSC × Return Journey finalist, Solve the Biz gold, Ideation Insomnia gold
- [ ] Skills grouped as Product / Data / ML & GenAI / Programming
- [ ] Real contact links: email, LinkedIn, GitHub, Figma, plus a resume download

### Phase 2: Make every link work
- [ ] Each card links to a GitHub repo, a Figma or live link, or a `projects/<slug>.html` case study. No `#` placeholders.
- [ ] Case-study template: problem, role, approach, outcome (numbers), stack, links, images
- [ ] Cover images for each project in `assets/img/projects/<slug>/`

### Phase 3: Polish
- [ ] Responsive check at 360, 768 and 1280 px. Mobile nav.
- [ ] Optimise the photo (WebP plus a PNG fallback, explicit size), lazy-load images
- [ ] SEO and sharing: title and meta, Open Graph image, favicon, `sitemap.xml`, `robots.txt`
- [ ] Accessibility: alt text, focus states, contrast, `prefers-reduced-motion`
- [ ] 404 page, then a link check across the whole site
- [ ] Push, then verify the live site
