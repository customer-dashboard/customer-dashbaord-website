import nodemailer from 'nodemailer';

export default function SendEmailApi(newUser){
    const {firstName, lastName, email, message} = newUser;
     try {
    console.log("1 step");
        const transporter = nodemailer.createTransport({
          service: "gmail",
            auth: {
                user: "customerdashboardpro@gmail.com",
                pass: "ibce swyq kcgq oxkr"
            }
        })
       console.log("2 step");
        const mainOption = {
            from: "customerdashboardpro@gmail.com",
            to: "support@customerdashboard.pro",
            subject: `New partner integration message on`,
            html: `<table style="text-align:left;width: 100%; margin: auto;  max-width:700px;background-color:#f8f8f8;border-radius:3px;font-family:helvetica;" cellpadding="10">
            <tr><td colspan="2" style="text-align:center;font-weight: bold; font-size: 20px; color: #000;padding-top:30px;" align="center">New Integration Request</td>  </tr>
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">FirstName:</th>
                <td style="display:block; padding:5px 10px;">${firstName}</td>
             </tr>
             <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">LastName:</th>
                <td style="display:block; padding:5px 10px;">${lastName}</td>
             </tr>
           
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Email:</th>
                <td style="display:block; padding:5px 10px;">${email}</td>
            </tr>
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Message:</th>
                <td style="display:block; padding:5px 10px;">${message}</td>
             </tr>
        
            </table>`
        }
        transporter.sendMail(mainOption,(error, info) =>{
          if (error) {
            console.log("Error",error);
          }else {
            console.log("EMail Sent Succsesfully"+ info.response);
            // return json({Ok:yes},200)
          }
        } )
    } catch (error) {
        console.log(error);
    }
}