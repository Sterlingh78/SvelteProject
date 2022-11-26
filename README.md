# DGM3790 Svelte Project

Here you will find my personal project for learning Svelte in DGM3790. Below I have specified where certain features can be found within the app.
(Note: I had to make a new Repo for this project at the beginning of October due to issues I was having with the original)

## Tween

Individual cards in my cards page rotate slightly when selected for the detail page [cards tween](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

## Transitions

Submit button transitions in/out based on page form validation [Submit tween](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/auth/signup/%2Bpage.svelte)

Added loading functionality to transition an animation in/out if page is loading [Loading](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/%2Blayout.svelte)

## Animate Directive

Added button to sort cards A-Z and use the flip animation when moving [Cards Sort](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

## onMount Lifecycle Function

Added onMount function to the cards route, making an API call and passing data to the page to display. No longer needed the page.js file after this change [Cards onMount](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

## Writable Stores

Sign up route sets the credential store values to the user inputed values [Sign Up](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/auth/signup/%2Bpage.svelte)

Header conditionally renders links and displays welcome message based upon user credentials store [Header](https://github.com/Sterlingh78/SvelteProject/blob/master/src/lib/components/header/Header.svelte)

Profile page displays basic information given by user. Room for future updates for adding a bio, etc. [Profile](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/profile/%2Bpage.svelte)
