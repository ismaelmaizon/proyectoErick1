import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.NODEMAILER,
    },
});



const sendEmail = async ( to, subject, html ) => {
    try{
        const result = await transporter.sendMail({
            from: process.env.EMAIL, // el mail desde donde se envia
            to: to, // mail a quien va dirigido
            subject: subject, // asunto del mail
            html: html // el texto del mismo
        })
        console.log( result );
        return { ok: true, message: 'mail enviado con exito' }
    }catch(err){
        console.log(err);
        return { ok: false, message: 'hubo un error con el envio del mail', err: err }
    }
}

export default sendEmail