import nodemailer from 'nodemailer';

export default async function PartnerMail(firstName, websiteName,chooseType, email, message){
     try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
            auth: {
                user: "customerdashboardpro@gmail.com",
                pass: "ibce swyq kcgq oxkr"
            }
        })
        const mainOption = {
            from: "customerdashboardpro@gmail.com",
            to: "swathi@mandasa.in",
            subject: `Become a partner request`,
            html: `<table style="text-align:left;width: 100%; margin: auto;  max-width:700px;background-color:#f8f8f8;border-radius:3px;font-family:helvetica;" cellpadding="10">
            <tr><td colspan="2" style="text-align:center;font-weight: bold; font-size: 20px; color: #000;padding-top:30px;" align="center">Become a partner request</td>  </tr>
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Name:</th>
                <td style="display:block; padding:5px 10px;">${firstName}</td>
             </tr>
             <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Website:</th>
                <td style="display:block; padding:5px 10px;">${websiteName}</td>
             </tr>
             <tr style="display:block; margin:1rem 0rem;">
             <th style="display:block; padding:5px 10px;">Choose Type:</th>
             <td style="display:block; padding:5px 10px;">${chooseType}</td>
          </tr>
           
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Email:</th>
                <td style="display:block; padding:5px 10px;">${email}</td>
            </tr>
            <tr style="display:block; margin:1rem 0rem;">
                <th style="display:block; padding:5px 10px;">Additional Info:</th>
                <td style="display:block; padding:5px 10px;">${message}</td>
             </tr>
        
            </table>`
        }
        transporter.sendMail(mainOption,(error, info) =>{
          if (error) {
            console.log("Error",error);
          }else {
            console.log("EMail Sent Succsesfully"+ info.response);
            return  info
          }
        } )
    } catch (error) {
        console.log(error);
    }
}