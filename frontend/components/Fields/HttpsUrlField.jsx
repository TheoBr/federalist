import React from 'react';
import { Field } from 'redux-form';
import { isURL } from 'validator';

import InputWithErrorField from './InputWithErrorField';

export const isHttpsUrlWithoutPath = (value) => {
  if (value && value.length) {
    if (!isURL(value, { protocols: ['https'] }) || value.lastIndexOf('/') !== 7) {
      return 'Please enter a URL that starts with "https://" and has no trailing path';
    }
  }

  return undefined;
};

const HttpsUrlField = ({ ...props }) => (
  <Field
    component={InputWithErrorField}
    validate={[isHttpsUrlWithoutPath]}
    {...props}
  />
);

export default HttpsUrlField;
