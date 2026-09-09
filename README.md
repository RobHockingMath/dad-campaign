# Jasper website — start here

A complete static website about Jasper, a Bernese Mountain Dog, adapted from the structure and styling of https://jenmccutcheon.wordpress.com/.

The site uses ordinary HTML, CSS, and JavaScript. There is no installation, WordPress account, database, package manager, or build step. All fonts and placeholder images are included locally. The stories are invented sample content.

## Put it on your existing GitHub repository

1. Extract `jasper-website.zip` on your computer.
2. Open the extracted folder. You should see `index.html`, `about.html`, `assets`, `posts`, `archives`, and the other website files.
3. Visit https://github.com/RobHockingMath/dad-campaign and choose **Code → Add file → Upload files**. If the repository is still empty, use its **uploading an existing file** link.
4. Drag the **contents** of the extracted folder into the upload area. Include the `assets`, `posts`, `archives`, and `downloads` folders. Do not upload the ZIP itself or an extra outer `jasper-website` folder. `index.html` must end up directly at the top level of the repository.
5. Commit the files to the `main` branch. Replace the temporary `index.html` if you created one earlier.
6. Open **Settings → Pages**. Set **Source** to **Deploy from a branch**, **Branch** to **main**, and the folder to **/ (root)**. Click **Save**. If those settings are already selected, your new commit is enough.
7. Allow up to ten minutes, refresh **Settings → Pages**, and click **Visit site**.

The default address is https://robhockingmath.github.io/dad-campaign/.
If your existing personal GitHub Pages site has a custom domain, GitHub may serve this project under that domain followed by `/dad-campaign/`; the **Visit site** link is authoritative. A separate custom domain can also be attached to this repository later.

The ZIP contains fewer than 100 files, and every file is below GitHub's 25 MiB browser-upload limit. The empty `.nojekyll` file is included; keep it if visible. The site also works without it because the public asset folders do not begin with underscores.

## Preview on your computer

Double-click `index.html` after extracting the entire ZIP. The navigation, fonts, image placeholders, menu, and search work locally. Browser handling of downloads and RSS files can differ from hosting; final publishing uses GitHub Pages.

## Add Jasper's photographs

1. Put your JPG, PNG, or WebP photographs in `assets/images/`.
2. Open `assets/site-config.js` in a text editor.
3. Change the relevant image paths, for example:

```javascript
images: {
  portrait: "assets/images/jasper-portrait.jpg",
  about: "assets/images/jasper-about.jpg",
  adventure: "assets/images/jasper-adventure.jpg",
  neighbourhood: "assets/images/jasper-neighbourhood.jpg"
}
```

4. Upload the new photographs and the updated settings file to GitHub, preserving their folder locations.

Use a 4:3 image for the small header portrait and the About photograph. The adventure and neighbourhood images use a 16:9 space. Other proportions work but will be cropped to fit. Use exact filename case: `Jasper.JPG` and `jasper.jpg` are different names on GitHub Pages.

The images automatically update on every page that uses the corresponding photo slot. When adding real images, also update the relevant `alt` descriptions in the HTML if needed and remove any “photo coming soon” captions. You can change an individual image directly in the HTML instead: remove its `data-photo` attribute and update `src` and `alt`.

## Change words, colours, and contact details

- **Page text:** open the appropriate `.html` file. The main content is between `PAGE CONTENT` and `END PAGE CONTENT` comments. Edit it and upload that file again.
- **Shared site title and tagline:** edit `assets/site-config.js`. These settings update the visible header on every page. The HTML also contains fallback text for visitors with JavaScript disabled; use your editor's find-and-replace across the HTML files if changing the identity permanently. Update each HTML `<title>` and description as appropriate.
- **Email address:** set `email` in `assets/site-config.js` to a real address. This enables the email link in the top strip and on the About page. The default is blank, so no email is sent to a made-up address.
- **Colours:** edit the variables at the beginning of `assets/styles.css`.
- **Text downloads:** edit the `.txt` files in `downloads/`. You can replace them with PDFs; update both links and the `Download TXT` label in the corresponding HTML to match.
- **Search:** edit `assets/search-index.js` when changing page text or adding pages. Each record has a page `title`, its relative `path`, and searchable plain `text`. Search matches all words in the query and does not send queries to a server.
- **Menu and footer:** these are ordinary HTML repeated on each page so the site remains navigable without JavaScript. Apply common changes across the `.html` files with your editor's find-and-replace.
- **RSS feed:** `feed.xml` contains the six sample stories. If you change domains or rename the repository, replace `https://robhockingmath.github.io/dad-campaign/` in that file with the real site URL. Update the entries when publishing new stories.

All local links are relative, so the site works at a GitHub project URL, at a custom-domain root, and when opened from a local folder. Do not change asset paths to start with `/`; that would bypass the `/dad-campaign/` portion of the GitHub URL.

## Included pages

| File | Page |
| --- | --- |
| `index.html` | Newsletters and Bulletins — five sample issues |
| `about.html` | About Jasper |
| `neighbourhood.html` | What is Jasper's neighbourhood? |
| `issues.html` | Jasper's Approach to Key Issues |
| `resources.html` | Resources, with three downloadable notes |
| `help.html` | How You Can Help |
| `clarifications.html` | A Clarification About the Missing Biscuit |
| `stories.html` | All Jasper stories |
| `search.html` | Working site search |
| `posts/*.html` | Six individual story pages |
| `archives/*.html` | Five monthly archive pages |

## What this recreation includes

The reference site's five primary navigation pages, dark teal palette, large serif masthead, small portrait, italic tagline, bordered central articles, newsletter download rows, recent-post and archive widgets, and narrow-screen menu are recreated with independent code. Additional help and clarification pages mirror the supporting links. The original long archive is represented by five sample months and six Jasper stories rather than copies of the original political articles and attachments.

The original WordPress login, account creation, advertising, tracking, comments, likes, and subscription service are not part of this static site. There are no pretend forms or fake success messages. Email contact works once configured; an actual newsletter mailing list or comment service would require a separate integration. The newsletter downloads provided here are usable plain-text samples.

## Fonts and attribution

Headings use Alegreya; body text uses Libre Baskerville, matching the font families identified in the reference site's source. Both are bundled with their SIL Open Font Licenses under `assets/fonts/` and require no external font connection.

Font sources:
- https://github.com/google/fonts/tree/main/ofl/alegreya
- https://github.com/google/fonts/tree/main/ofl/librebaskerville

Reference inspected: https://jenmccutcheon.wordpress.com/ and its About, Electoral Area, Issues, and Resources pages. This is a Jasper adaptation, not an affiliation with or endorsement by the reference site's owner. No original photographs, political copy, or newsletter documents are included.

GitHub publishing instructions:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
