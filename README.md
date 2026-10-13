# Academic website (al-folio style)

A plain HTML/CSS site in the style of the al-folio Jekyll theme. There's no build step, so GitHub Pages serves it as-is.

```
index.html              about page: bio, photo, news, social icons
papers/index.html       preprints & publications, grouped by year
talks/index.html        talks given + conferences/schools attended
organising/index.html   seminars, workshops, events
personal/index.html     hobbies, reading, tidbits
assets/style.css        all styling (change --theme to recolour)
assets/site.js          dark-mode toggle, mobile menu, abstract toggles
```

## Publish on GitHub Pages
1. Create a public repo named `yourusername.github.io`.
2. Upload **everything in this folder** (keep the folder structure) to the repo root.
3. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. Your site goes live at `https://yourusername.github.io` within a couple of minutes.

## Editing
- Replace `Your Name`, `University Name`, emails and links. Each page has its own copy of the navbar, so update the name in all five files.
- **Photo:** add `assets/img/prof_pic.jpg` and swap the `<div class="placeholder">∂</div>` in `index.html` for `<img src="assets/img/prof_pic.jpg" alt="Your Name">`.
- **CV:** add `assets/cv.pdf`.
- **New paper:** copy an `<li>…</li>` in `papers/index.html`. Give each abstract a unique id (`abs-3` etc.) and match it in its `data-abstract` button.
- **News:** add a `<tr>` at the top of the news table on the about page.
- **Maths:** write `$...$` anywhere and MathJax will render it.
- **Colours:** `--theme` at the top of `style.css` (purple in light mode, blue in dark).
- Don't want a section? Delete it, and remove its link from the navbar in every page.
