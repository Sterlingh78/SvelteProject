# DGM3790 Svelte Project

Here you will find my personal project for learning Svelte in DGM3790. Below I have specified where certain features can be found within the app.
(Note: I had to make a new Repo for this project at the beginning of October due to issues I was having with the original)

## Conditional Logic

Rendering Cards from scryfall API [cards](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

Rendering news articles [news](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/news/%2Bpage.svelte)

Rendering NBA player data [players](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/players/%2Bpage.svelte)

## Routes

Auth Sign up and Log In routes [auth](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/auth)

Cards route [cards](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/cards)

Dashboard route [dashboard](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/dashboard)

News route [news](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/news)

Players route [players](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/players)

Profile route [profile](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/profile)

## Components

Header component [header](https://github.com/Sterlingh78/SvelteProject/tree/master/src/lib/components/header)

Polar graph component [polar](https://github.com/Sterlingh78/SvelteProject/tree/master/src/lib/components/polar)

Radar graph component [radar](https://github.com/Sterlingh78/SvelteProject/tree/master/src/lib/components/Radar)

Scatter graph component [scatter](https://github.com/Sterlingh78/SvelteProject/tree/master/src/lib/components/scatter)

## User Events

Form validation from events in signup [signup](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/auth/signup)

Tween card from user click event [cards](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/cards)

Populate page content based on selected article [news](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/news)

## Forms

Sign Up form with validation for email, name, and password confirmation [signup](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/auth/signup)

Login form [login](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/auth/login)

## Lifestyle functions and stores

onMount function in cards to display cards [cards](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/cards)

Using stores for site theme and user credentials [header](https://github.com/Sterlingh78/SvelteProject/tree/master/src/lib/components/header)

Theme and credentials stores are used in these additional pages:

[layout](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/%2Blayout.svelte)

[auth routes](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/auth)

[profile](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/profile/%2Bpage.svelte)

## Animations and Transitions

Tween card when clicked [cards](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/cards/%2Bpage.svelte)

Submit button transitions in/out based on page form validation [signup](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/auth/signup/%2Bpage.svelte)

Added loading functionality to transition an animation in/out if page is loading [Loading](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/%2Blayout.svelte)

## API

Scryfall API for card data [cards](https://github.com/Sterlingh78/SvelteProject/tree/master/src/routes/cards)

NASA API for satellite images [dashboard](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/dashboard/%2Bpage.server.js)

Balldontlie NBA Player API [players](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/players/%2Bpage.server.js)

News API for articles [news](https://github.com/Sterlingh78/SvelteProject/blob/master/src/routes/news/%2Bpage.server.js)
