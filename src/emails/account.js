const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chrisbennett09@gmail.com',
        subject: 'Thanks for joining.',
        text: `Welcome to the app, ${name}.  Let me know how you like the app.`,
    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chrisbennett09@gmail.com',
        subject: 'Sorry to see you leave',
        text: `${name}, please let us know if we can do anything to get you back.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}