import { writable } from "svelte/store"

export const credentials = writable({
    firstName: '',
    lastName: '',
    email: ''
})