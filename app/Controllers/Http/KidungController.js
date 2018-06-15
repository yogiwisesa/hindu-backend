'use strict'

const Database = use('Database')

class KidungController {

    async postKidung({ request }) {
        const { nama_kidung, kidung, sound_url, submitted_by, status } = request.all()

        if (status == "accepted") {
            return {
                status: "err",
                message: `Status can't be "accepted".`
            }
        }

        try {
            await Database.table('kidungs')
                .insert({
                    nama_kidung, kidung, sound_url, submitted_by, status
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


    async getKidungs({ request }) {
        const page = request.header('page')
        try {
            const result = await Database.table('kidungs')
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

    async getAcceptedKidungs({ request }) {
        const page = request.header('page')
        try {
            const result = await Database.table('kidungs')
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



module.exports = KidungController
