# GitHub Actions Workflows

## update-applet-index.yml

This workflow automatically updates `things.html` when a new applet is added to the repository.

### How it works

1. **Triggers**: Runs when HTML files are pushed to the main/master branch
2. **Detection**: Identifies new HTML files containing the `<!-- APPLET_INDEX_ENTRY -->` marker
3. **Extraction**: Pulls the title from the `<title>` tag
4. **Update**: Adds a new card to `things.html` between the markers
5. **Commit**: Automatically commits and pushes the changes

### Excluded files

The workflow skips these files:
- `things.html` (the index itself)
- `blog.html`, `index.html`, `series.html`, `tags.html`, `tag-dynamic.html` (Jekyll template pages)

### Adding custom descriptions

By default, new applets get a generic description: "A new tool or applet. Click to explore!"

To customize the description:
1. After the workflow runs, manually edit `things.html`
2. Replace the placeholder description with a meaningful one
3. Commit the change

Alternatively, you can manually add the applet entry to `things.html` before pushing, and the workflow will skip it.

### Manual override

If you prefer to manually add an applet to `things.html`:
1. Add the `<!-- APPLET_INDEX_ENTRY -->` marker to your HTML file
2. Add the card entry to `things.html` between `APPLET_INDEX_START` and `APPLET_INDEX_END`
3. Commit both files together

The workflow will detect that the applet is already in the index and skip it.
