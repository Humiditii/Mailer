import Util from '../Utils/Utility';

class SenderController {

    static sendToOne (req, res, next){
        const {mail, message, subject, from  } = req.body;

        Util.mailer().sendMail({
            to: mail,
            from: from,
            subject: subject,
            html: `<b> ${message} </b>`
        }).then( sent => {
            return res.status(200).json({
                message:`Message sent to ${message}`,
                object: sent
            })
        } ).catch( err => {
            return Util.appError(err, next)
        } )

    }

    static async sendToMany(req, res, next){
        const {mails, message, subject, from } = req.body;

        const sentMsg = []

        for (const mail of mails) {
            try {
                const sendMails = await Util.mailer().sendMail({
                    to: mail,
                    from: from,
                    subject: subject,
                    html: `<b> ${message} </b>`
                })

                sentMsg.push(`message sent to ${mail}`)

            } catch (error) {
                return Util.appError(error, next)
            }
        }

        return res.status(200).json({
            message: sentMsg
        })


    }
}

export default SenderController;