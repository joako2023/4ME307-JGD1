import { Injectable } from '@nestjs/common';
import { mails } from './entities/mail.entity';
//import nodemailer, { SendMailOptions } from "nodemailer";
import * as nodemailer from 'nodemailer'
@Injectable()
export class MailsService {
  
  getHello(): string {
    return 'Hello World!';
  }

  async execute( mail:any){
    try {

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "sdnutriciontest@gmail.com", // generated ethereal user
          pass: "evdddomwbofrdkvw", // generated ethereal password
        },
      });
// sdnutricion123456

      // send mail with defined transport object
      let info = await transporter.sendMail({ ...mail });
      console.log(mail)
     
    } catch (error) {
      console.log(error)

    }
   

  }


}
