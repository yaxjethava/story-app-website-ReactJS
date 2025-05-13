import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AuthForm.css"; // shared UI styles
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const nav = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Name too short").required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm your password")
        }),
        onSubmit: (values, { resetForm }) => {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const isAlreadyRegistered = users.find((u) => u.email === values.email);

            if (isAlreadyRegistered) {
                alert("Email already registered!");
            } else {
                users.push({
                    name: values.name,
                    email: values.email,
                    password: values.password
                });
                localStorage.setItem("users", JSON.stringify(users));
                alert("Registration Successful!");
                resetForm();
                nav('/login')
            }
        }
    });

    return (
        <div className="auth-form-container">
            <h2 className="form-title">Create Your Account</h2>
            <form onSubmit={formik.handleSubmit} className="auth-form">
                <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your name"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    )}
                </div>

                <div className="form-group mb-3">
                    <label>Email</label>
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

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? "is-invalid" : ""}`}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Create a password"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                </div>

                <div className="form-group mb-4">
                    <label>Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        className={`form-control ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "is-invalid" : ""}`}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Re-enter your password"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-warning fw-bold w-100">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage;
