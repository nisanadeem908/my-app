import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select';
import './Login.css';

const LoginForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [multiSelectedOptions, setMultiSelectedOptions] = useState([]);
  const navigate = useNavigate();


  const isAuthenticated = sessionStorage.getItem('token');

  if (isAuthenticated) {
    navigate('/'); 
    return null;
  }

  const singleSelectOptions = [
    { value: 'option1', label: 'Student' },
    { value: 'option2', label: 'Teacher' },
    { value: 'option3', label: 'Employee' }
  ];

  const multiSelectOptions = [
    { value: 'option1', label: 'C++' },
    { value: 'option2', label: 'Java' },
    { value: 'option3', label: 'Python' }
  ];

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <Formik
        initialValues={{
          email: 'user@xy.com',
          password: '1234567'
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters long')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (values.email === 'user@xy.com' && values.password === '1234567') {
              
              sessionStorage.setItem('token', '123456987');
              
              navigate('/');
            } else {
              alert('Invalid email or password');
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <Field type="email" name="email" className="form-input" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <Field type="password" name="password" className="form-input" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <ReactSelect
              options={singleSelectOptions}
              value={selectedOption}
              onChange={setSelectedOption}
              placeholder="Select an option"
            />

            <ReactSelect
              options={multiSelectOptions}
              isMulti
              value={multiSelectedOptions}
              onChange={setMultiSelectedOptions}
              placeholder="Select multiple options"
            />

            <button type="submit" disabled={isSubmitting} className="submit-btn">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
