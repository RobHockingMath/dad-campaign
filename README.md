# Jasper website — upload-ready edition

This edition contains **43 files in one folder, with no subfolders**. It replaces the earlier package. All stylesheet, script, image, font, story, archive, search, and download paths have been updated to work from the repository's top level.

## Fix the currently unstyled site

1. Download the updated `jasper-website.zip` and extract it into a **new, empty folder**. Do not mix it with the earlier download.
2. Open that folder. You should see `index.html`, `styles.css`, `site.js`, `site-config.js`, `.ttf` font files, `.svg` image placeholders, and the other files together.
3. Optionally double-click `index.html`. It should display a dark teal page with a small portrait placeholder and large serif headings, rather than a white page with a huge envelope.
4. Open https://github.com/RobHockingMath/dad-campaign and select **Code → Add file → Upload files**.
5. Click **choose your files**, navigate into the newly extracted folder, select **all its files**, and upload them. Alternatively drag all the files into the upload area. Do not select the ZIP or the outer folder.
6. Commit to `main`. The upload replaces matching files such as `index.html` and adds the missing files. You do not need to delete the old files first.
7. Your existing **Settings → Pages → main → / (root)** configuration will publish the new commit automatically. There is no need to change it or click Save again.
8. Wait for the latest **pages build and deployment** run in the repository's **Actions** tab to show success. Then open the website and refresh. If the old unstyled page remains, use **Ctrl+Shift+R** on Windows/Linux or **Command+Shift+R** on macOS.

Expected site address: https://robhockingmath.github.io/dad-campaign/.
The **Visit site** link under Settings → Pages is authoritative if a custom domain is configured.

To check that the stylesheet was published, open https://robhockingmath.github.io/dad-campaign/styles.css. You should see CSS text, not a 404 error.

## Why the earlier upload looked broken

The published HTML requested `assets/styles.css`, but the repository contained only the top-level files. The `assets`, `posts`, `archives`, and `downloads` folders had not been uploaded. Without CSS, the browser displayed default text and the envelope icon at a huge size.

This package removes the need to upload folders. It also gives the small inline icons explicit dimensions so they remain small even if a stylesheet fails to load.

## Adding photos

Place your JPG, PNG, or WebP photographs alongside `index.html`, then edit `site-config.js`:

```javascript
images: {
  portrait: "jasper-portrait.jpg",
  about: "jasper-about.jpg",
  adventure: "jasper-adventure.jpg",
  neighbourhood: "jasper-neighbourhood.jpg"
}
```

Upload the photographs and changed `site-config.js` to the same repository folder. Keep filename capitalization exact. A 4:3 photo fits the portrait and About image; a 16:9 photo fits the adventure and neighbourhood images. Other proportions are cropped to fit.

The settings update the corresponding photo on every page. Update HTML `alt` descriptions and remove “photo coming soon” captions once real images are supplied. To change an individual image independently, remove its `data-photo` attribute and edit its `src` and `alt` directly.

## Editing the site

- **Text:** edit the relevant HTML file between the `PAGE CONTENT` and `END PAGE CONTENT` comments.
- **Shared title and tagline:** edit `site-config.js`. For permanent identity changes, also find-and-replace the fallback header text in all HTML files and update their `<title>` and description metadata.
- **Email:** add a real address to the `email` setting in `site-config.js`. It activates the contact links. The default blank value sends no email anywhere.
- **Colours and layout:** edit `styles.css`.
- **Search:** update the title, path, and plain text records in `search-index.js` when changing content. Search stays entirely in the visitor's browser.
- **Menu and footer:** these are repeated HTML so they work without JavaScript. Apply common edits across the HTML files using your editor's find-and-replace.
- **Downloadable notes:** edit the `.txt` files. To provide PDFs instead, upload your PDF and update both corresponding HTML links and the `Download TXT` label.
- **RSS:** update `feed.xml` when adding stories or changing the site's address. It currently uses `https://robhockingmath.github.io/dad-campaign/`.

All filenames and local links are relative to the same folder. Avoid introducing leading `/` characters, which would skip the `/dad-campaign/` portion of a GitHub project URL.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Five sample newsletters |
| `about.html` | About Jasper |
| `neighbourhood.html` | Jasper's neighbourhood |
| `issues.html` | Position on issues |
| `resources.html` | Downloadable resources |
| `help.html` | How you can help |
| `clarifications.html` | A clarification about a biscuit |
| `stories.html` | All six stories |
| `search.html` | Working site search |
| `the-doorbell-alert-system.html` | A new doorbell alert system |
| `the-great-sofa-debate.html` | The great sofa debate |
| `thank-you-for-the-belly-rubs.html` | Thank-you story |
| `choosing-the-next-walk.html` | Walking story |
| `a-stick-worth-carrying.html` | Stick-carrying story |
| `the-may-garden-inspection.html` | Garden story |
| `2026-05.html` through `2026-09.html` | Five monthly archives |

## Scope and sources

This is a static Jasper adaptation of https://jenmccutcheon.wordpress.com/ and its main subpages, with independently written code and invented sample stories. It recreates the dark teal palette, serif fonts, masthead, navigation, bordered articles, newsletter rows, recent posts, archives, and footer widgets. The original long archive is represented by five sample months and six Jasper stories.

No original political text, photographs, or newsletter documents are included. WordPress accounts, advertising, tracking, comments, likes, and mailing-list subscriptions are not part of this static package. Contact links work after configuration; actual comments or email subscriptions would need a separate service. Download buttons provide real text files.

There is no installation, database, package manager, or build step. The site works with free GitHub Pages hosting. All fonts and placeholders are local; the site makes no external asset requests.

Fonts are Alegreya and Libre Baskerville, each distributed under the included SIL Open Font License:
- `alegreya-LICENSE.txt`: https://github.com/google/fonts/tree/main/ofl/alegreya
- `libre-baskerville-LICENSE.txt`: https://github.com/google/fonts/tree/main/ofl/librebaskerville

GitHub documentation:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
