'use strict'

const User = use('App/Models/User')

class AuthController {


    // OK
    async postRegister({ request }){
        const { email, password } = request.all()
        const user = new User();

        user.email = email
        user.password = password

        try {
            const result = await user.save()
            return {
                status: "ok"
            }
        } catch(e) {
            return {
                status: "err",
                message: e
            }
        }

    }

    // OK
    async postLogin({ request, auth }) {
        const { email, password } = request.all()
        const result = await auth.attempt(email, password)

        return result 
    }

    async postLogout({ auth }) {
        return await auth.logout() 
    }
}

module.exports = AuthController
