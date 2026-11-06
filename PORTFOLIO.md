# Portfolio site — GitHub Pages

The `docs/` directory contains the static portfolio. The profile README introduces the work and links to the portfolio.

## Preview

From this directory, run `python3 -m http.server 8000 --directory docs`, then open `http://localhost:8000/`.

## Publish in the existing profile repository

1. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
2. Push the repository changes to `main`. The workflow in `.github/workflows/pages.yml` uploads `docs/` and deploys it to GitHub Pages. It also supports manual runs from the Actions tab.
3. Check the workflow run and the URL in **Settings → Pages**. The expected project-site address is `https://iaugustomz.github.io/IAugustoMZ/`.

After setup, pushes to `main` trigger another deployment. The workflow does not require a site build step because the site is static.

Pages is public. The repository is a profile repository; it is not named for a root user site. A root URL requires a separate `iaugustomz.github.io` repository.

The site is static and uses relative asset paths. Fonts load from Google Fonts, with local system fallbacks. Kairon screenshots and the Indusyn plot were supplied by the owner; the Indusyn chart is from the demonstration report and represents synthetic data.

## Portrait

The site displays `docs/assets/portrait.png` in the About section, cropped to a portrait frame. Replace that file to update the photo; the initials placeholder appears if the image is unavailable.
