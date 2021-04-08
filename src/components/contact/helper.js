
import {useState} from "react"
import emailjs from "emailjs-com";
import {EMAILJS_CONSTANTS} from "./constants"

export const useHelper = () => {
    const [error, setError] = useState("")
    const [response, setResponse] = useState("")


  const sendEmail = (values) => {
    const templateParams = {
      ...values,
    };
    try {
        emailjs.send(EMAILJS_CONSTANTS.SERVICE_ID, EMAILJS_CONSTANTS.TEMPLATE_ID, templateParams, EMAILJS_CONSTANTS.USER_ID)
        .then( setResponse(EMAILJS_CONSTANTS.SUCCESS_MESSAGE))
    } catch (error) {
        setError(EMAILJS_CONSTANTS.ERROR_MESSAGE)
    }
  };

  return {
    sendEmail,
    error,
    response,
  };
};
