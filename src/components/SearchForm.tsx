import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//Components
import Button from './Button';
import { QUERY_MIN_CHARS } from '../services/urlService';

export interface ISearchForm {
  parentCallback: Function;
  initialValue: string;
}

const validationSchema = Yup.object({
  query: Yup.string()
    .min(QUERY_MIN_CHARS, 'Must be 2 characters or more')
    .required('Type something to start'),
});

// TODO implementar typescript.
const SearchForm: React.FC<ISearchForm> = ({
  parentCallback,
  initialValue,
}) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    if (query && query !== initialValue) {
      parentCallback(query);
    }
  }, [parentCallback, query, initialValue]);

  return (
    <Formik
      initialValues={{ query: initialValue }}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setQuery(values.query);
        setSubmitting(false);
      }}
    >
      {({ touched, errors, isSubmitting, isValid }) => (
        <Form className="form-inline mb-4 d-block">
          <div className="input-group w-100 position-relative">
            <Field
              name="query"
              type="text"
              autoComplete="off"
              className={`form-control form-control-lg flex-fill border-white ${
                touched.query && errors.query ? 'is-invalid' : ''
              }`}
            />
             <ErrorMessage
              name="query"
              component="div"
              className="invalid-feedback position-absolute top-1-2 right-117 d-inline-block z-index-10 translate-y--1-2 mt-0 w-auto"
            />
            <div className="input-group-append">
              <Button
                className={`btn btn-outline-light ${
                  !isValid || isSubmitting
                } ? "disabled" : ""}`}
              >
                Search
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
