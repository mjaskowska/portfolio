import * as yup from "yup";

import {FORMIK_CONSTANTS} from './constants'

export const contactFormValidationSchema = yup.object().shape({
    [FORMIK_CONSTANTS.NAME]: yup.string(),
    [FORMIK_CONSTANTS.EMAIL]: yup.string().email("Inalid email.").required("Required."),
    [FORMIK_CONSTANTS.MESSAGE]: yup.string().required("Required"),
})