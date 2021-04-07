import React from "react";

import { Formik } from "formik";
import { contactFormValidationSchema } from "./validation";

import { useHelper } from "./helper";
import { FORMIK_CONSTANTS } from "./constants";



const EmailForm = () => {

  const {
    sendEmail,
  } = useHelper()

  return (
    <Formik
      {...{
        initialValues: { email: "", message: "" },
        validateOnChange: true,
        validateOnMount: false,
        // validationSchema: contactFormValidationSchema,
        onSubmit: (values) => {
          sendEmail(values);
        },

      }}
    >
      {({ values, errors, isValid, touched, handleSubmit, handleChange }) => (
        <section className="emailJS">
          <div className="form-group">
            <label htmlFor="name">YOUR NAME / COMPANY</label>
            <input
              autoComplete="off"
              id="name"
              type="text"
              value={values[FORMIK_CONSTANTS.NAME]}
              onChange={handleChange}
            />
            {errors[FORMIK_CONSTANTS.NAME] && (
              <p className="validation-error">{errors[FORMIK_CONSTANTS.NAME]}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">YOUR EMAIL</label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              onChange={handleChange}
              value={values[FORMIK_CONSTANTS.EMAIL]}
            />
            {errors[FORMIK_CONSTANTS.EMAIL] && (
              <p className="validation-error">{errors[FORMIK_CONSTANTS.EMAIL]}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              autoComplete="off"
              value={values[FORMIK_CONSTANTS.MESSAGE]}
              onChange={handleChange}
              rows="4"
            />
            {errors[FORMIK_CONSTANTS.MESSAGE] && (
              <p className="validation-error">{errors[FORMIK_CONSTANTS.MESSAGE]}</p>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="orange-btn"
            type="submit"
            disabled={!isValid}
          >
            SEND
          </button>
        </section>
      )}
    </Formik>
  );
};

export default EmailForm;
