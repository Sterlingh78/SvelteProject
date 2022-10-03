import { error } from '@sveltejs/kit'

// @ts-ignore
export async function load({ fetch }) {
    const res = await fetch('/api/cards')

    if (res.ok) return res.json()
    throw error(400, 'Movie not Found')
}