import { redirect } from '@sveltejs/kit'

export const actions = {
    signup: async ({request}) => {
        const data = await request.formData()
        const fname = data.get('fname')
        const lname = data.get('lname')
        const email = data.get('email')
        const password = data.get('confirmPassword')
        console.log(fname,lname,email,password)

        throw redirect(303, '/dashboard')
    }
}