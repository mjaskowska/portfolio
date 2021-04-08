import React from "react";

import { Formik, Form } from "formik";
import { contactFormValidationSchema } from "./validation";

import { useHelper } from "./helper";
import { FORMIK_CONSTANTS } from "./constants";



const EmailForm = () => {

  const {
    sendEmail, error, response
  } = useHelper()

  return (
    <Formik
      {...{
        initialValues: {name: "", email: "", message: "" },
        validateOnChange: true,
        validateOnMount: false,
        validationSchema: contactFormValidationSchema,
        onSubmit: (values, {resetForm}) => {
          sendEmail(values);
          resetForm({values: ""})
        },

      }}
    >
      {({ values, errors, isValid, handleSubmit, handleChange }) => (
        <Form className="emailJS" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">YOUR NAME / COMPANY</label>
            <input
              autoComplete="off"
              id="name"
              type="text"
              required
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
          <div className="response">
            {error && <p className="error">{error}</p>}
            {response && <p>{response}</p>}
          </div>
          <button
            className="orange-btn"
            type="submit"
            disabled={!isValid}
          >
            SEND
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
