# aakritip23.github.io

Personal portfolio of Aakriti Prajapati: final-year B.Tech, Mechanical Engineering, IIT Kanpur.
Live at https://aakritip23.github.io/

## Stack

Plain HTML, CSS and vanilla JS, served directly by GitHub Pages from `main` (root). There is no build step:
edit a file, push, and the site updates in about a minute. `.nojekyll` turns off Jekyll processing.

## Structure

```
index.html                  Single page with a sidebar (photo, contacts) and four tabs:
                            About · Resume · Portfolio · Contact (switched by JS, linkable via #about etc.)
projects/<slug>.html        One case-study page per project (shared layout, same stylesheet)
404.html                    Not-found page
assets/css/style.css        All styles (tokens on :root)
assets/js/main.js           Contacts toggle, tab switching, portfolio filter, mailto contact form
assets/img/profile.png      Profile photo (cropped to a head-and-shoulders view in CSS)
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

### Phase 1: Content and links (done)
- [x] Content drawn from the resume, every link wired to GitHub, Figma or LinkedIn, and link-checked

### Phase 2: Redesign as a real portfolio (done)
- [x] Layout inspired by a sidebar-and-tabs portfolio: sidebar with photo and contacts; About, Resume, Portfolio and Contact tabs
- [x] All copy rewritten in the first person as short stories, with numbers only where they help
- [x] About: story, "What I do" cards, Highlights
- [x] Resume: Experience, Leadership and Education timelines in prose, skills, PDF download
- [x] Portfolio: one list filtered by Product, Data, AI and Design; design work merged in
- [x] Contact: a form that opens the visitor's email app (GitHub Pages has no backend)

### Phase 3: Next
- [ ] Aakriti to review the copy for voice and accuracy
- [ ] Screenshots or cover images for projects (`assets/img/projects/<slug>/`)
- [ ] Optional detail pages for 2 or 3 flagship projects (`projects/<slug>.html`)
- [ ] Favicon, `sitemap.xml`, `robots.txt`, 404 page
- [ ] Optional light-mode toggle
- [ ] Check on a real phone, then on the live site
