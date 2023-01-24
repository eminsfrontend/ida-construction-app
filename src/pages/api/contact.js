const nodemailer = require('nodemailer')
require('dotenv').config()
const PASSWORD = process.env.password


export default (req, res) => {

  const body = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'partner.office168@gmail.com',
      pass: PASSWORD,
    },
    secure: true,
  })

  const mailData = {
    from: 'partner.office168@gmail.com',
    to: 'pogosbekovemin@gmail.com',
    subject: `Message from ${body.firstName}`,
    text: `Phone number is: ${body.mobileNumber}, message is: ${body.custMessage}.`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
      res.status(400).json({message: 'Ошибка отправки. Попробуйте снова'})
    }
    else
      console.log(info)
      res.status(200).json({ message: 'Сообщение успешно отправлено' })
  })
  
}