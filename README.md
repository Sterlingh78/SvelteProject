# DGM3790 Svelte Project

Here you will find my personal project for learning Svelte in DGM3790. Below I have specified where certain features can be found within the app.
(Note: I had to make a new Repo for this project at the beginning of October due to issues I was having with the original)

## onMount Lifecycle Function

Added onMount function to the cards route, making an API call and passing data to the page to display. No longer needed the page.js file after this change [Cards onMount](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

## Writable Stores

Sign up route sends form data to named action and commits the data to a store for retrieval [Sign Up](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/auth/signup/%2Bpage.svelte)

Header conditionally renders links and displays welcome message based upon user credentials store [Header](https://github.com/Sterlingh78/SvelteProject/blob/master/src/lib/components/header/Header.svelte)

Profile page displays basic information given by user. Room for future updates for adding a bio, etc. [Profile](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/profile/%2Bpage.svelte)
