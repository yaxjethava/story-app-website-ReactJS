import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AuthForm.css"; // Reusing same CSS for consistency
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: (values, { resetForm }) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        alert("Login successful!");
        // Redirect as needed (e.g., home page)
      } else {
        alert("Invalid email or password");
      }

      resetForm();
      navigate('/')
    }
  });

  return (
    <div className="auth-form-container">
      <h2 className="form-title">Login to Your Account</h2>
      <form onSubmit={formik.handleSubmit} className="auth-form">
        <div className="form-group mb-3">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? "is-invalid" : ""}`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group mb-4">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="btn btn-warning fw-bold w-100">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
