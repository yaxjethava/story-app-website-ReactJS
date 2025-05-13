import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './WriteStory.css';
import { useNavigate } from 'react-router-dom';

const WriteStory = () => {

    const navigate = useNavigate()
    const initialValues = {
        title: '',
        category: '',
        image: '',
        excerpt: '',
        fullStory: ''
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Title is required'),
        category: Yup.string().required('Category is required'),
        image: Yup.string().url('Enter a valid URL').required('Image URL is required'),
        excerpt: Yup.string().required('Excerpt is required'),
        fullStory: Yup.string().required('Full story is required')
    });

    const onSubmit = (values, { resetForm }) => {
        const existingStories = JSON.parse(localStorage.getItem("stories")) || [];

        const newStory = {
            id: Date.now(),
            ...values
        };

        const updatedStories = [newStory, ...existingStories];
        localStorage.setItem("stories", JSON.stringify(updatedStories));

        alert("🎉 Your story has been submitted successfully!");
        resetForm();
        navigate("/");
    };
    return (
        <div className="container write-story-page my-5">
            <h2 className="text-center mb-4">📝 Write Your Own Story</h2>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="form-box shadow-lg p-4 bg-white rounded">

                    <div className="form-floating mb-3">
                        <Field type="text" className="form-control" name="title" id="title" placeholder="Story Title" />
                        <label htmlFor="title">Story Title</label>
                        <ErrorMessage name="title" component="div" className="text-danger small mt-1" />
                    </div>

                    <div className="form-floating mb-3">
                        <Field as="select" className="form-select" name="category" id="category">
                            <option value="">Select category</option>
                            <option>Adventure</option>
                            <option>Mystery</option>
                            <option>Life Lessons</option>
                            <option>Romance</option>
                            <option>Fantasy</option>
                            <option>Motivational</option>
                        </Field>
                        <label htmlFor="category">Category</label>
                        <ErrorMessage name="category" component="div" className="text-danger small mt-1" />
                    </div>

                    <div className="form-floating mb-3">
                        <Field type="url" className="form-control" name="image" id="image" placeholder="Image URL" />
                        <label htmlFor="image">Image URL</label>
                        <ErrorMessage name="image" component="div" className="text-danger small mt-1" />
                    </div>

                    <div className="form-floating mb-3">
                        <Field as="textarea" className="form-control" name="excerpt" id="excerpt" placeholder="Short excerpt" style={{ height: '80px' }} />
                        <label htmlFor="excerpt">Excerpt</label>
                        <ErrorMessage name="excerpt" component="div" className="text-danger small mt-1" />
                    </div>

                    <div className="form-floating mb-4">
                        <Field as="textarea" className="form-control" name="fullStory" id="fullStory" placeholder="Your full story here" style={{ height: '150px' }} />
                        <label htmlFor="fullStory">Full Story</label>
                        <ErrorMessage name="fullStory" component="div" className="text-danger small mt-1" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">📤 Submit Story</button>
                </Form>
            </Formik>
        </div>
    );
};

export default WriteStory;
