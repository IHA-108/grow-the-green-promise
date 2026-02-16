

## Embed Google Form Directly on Page

Replace the current "Sign the Petition" button (which opens a new tab) with an embedded Google Form iframe, so users can sign without leaving the page.

### Changes

**File: `src/components/PetitionForm.tsx`**
- Remove the button and external link approach
- Add an `<iframe>` pointing to the Google Form URL with `?embedded=true` parameter (Google's embed mode)
- Style the iframe container with rounded corners, border, and appropriate height (~600px) for comfortable form filling
- Keep the descriptive text above the form

### Technical Details
- Google Forms supports embedding via the `?embedded=true` query parameter, which strips the Google chrome/header
- The iframe will use `width="100%"` and a fixed height of ~600px
- Add `frameBorder="0"` and proper styling to blend with the site design
- Increase the container max-width from `max-w-md` to `max-w-2xl` so the form has more room

