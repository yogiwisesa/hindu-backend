'use strict'

const Database = use('Database')

class MantraController {

    // OK
    async postMantra({ request }) {
        const { nama_mantra, mantra, translated_mantra, sound_url, submitted_by, status } = request.all()


        if (status == "accepted") {
            return {
                status: "err",
                message: `Status can't be "accepted".`
            }
        }

        try {
            await Database.table('mantras')
                .insert({
                    nama_mantra, mantra, translated_mantra, sound_url, submitted_by, status
                })
            return {
                status: "ok"
            }
        } catch (e) {
            return {
                status: "err",
                message: e
            }
        }
    }

    // OK
    async getMantras({ request }) {
        const page = request.header('page')
        try {
            const result = await Database.table('mantras')
                .select("*")
                .paginate(page, 10)
            return {
                status: "ok",
                result: result
            }
        } catch (e) {
            return {
                status: "err",
                message: e
            }
        }
    }

    // OK
    async getAcceptedMantras({ request }) {
        const page = request.header('page')
        try {
            const result = await Database.table('mantras')
                .select("*")
                .where("status", "accepted")
                .paginate(page, 10)

            return {
                status: "ok",
                result: result
            }
        } catch (e) {
            return {
                status: "err",
                message: e
            }
        }
    }
}

module.exports = MantraController
