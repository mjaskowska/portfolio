import { useState, useEffect } from "react";

import emailjs from 'emailjs-com';

export const useHelper = () => {

    const sendEmail = ({name, email, message}) => {
        console.log(name)
        console.log(email)
        console.log(message)        

        emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      }

    const templateParams = {
    }


    return {
        sendEmail,
    }
}