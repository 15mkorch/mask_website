import nodemailer from 'nodemailer';

export default async (req, res) => {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        host: "pop1.maximtech.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'mary.korch@theglobalu.org', // generated ethereal user
            pass: 'Star!8539' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Test Email" <mary.korch@theglobalu.org>', // sender address
        to: "15mary@gmail.com", // list of receivers
        subject: "GU Mask Operation✔", // Subject line
        text: `
            firstName: ${req.body.firstName}
            lastName:${req.body.lastName}
            phoneNumber:${req.body.phoneNumber}
            email:${req.boy.email}
            zipCode:${req.body.zipCode}
            purchasingMask:${req.body.purchasingMask}
            sewing:${req.body.sewing}
            donatingMaterials:${req.body.donatingMaterials}
        `, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
