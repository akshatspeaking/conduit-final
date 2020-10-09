import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

export default function Login(props) {
  const [activeTab, setActiveTab] = useState("login");

  function loginUser(user) {
    localStorage.setItem("token", JSON.stringify(user.token));
    props.setIsLoggedIn(true);
    console.log("logged in");
    return props.BrowserRouterProps.history.push("/");
  }

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").max(15, "Too Long!"),
  });

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").max(15, "Too Long!"),
  });

  return (
    <div className="my-5">
      <div className="menu flex max-w-md mx-auto my-5">
        <button
          className={
            activeTab === "login"
              ? "border-b-2 border-blue-500 mx-2 p-1"
              : "mx-2 p-1"
          }
          onClick={(e) => {
            setActiveTab("login");
          }}
        >
          LogIn
        </button>
        <button
          className={
            activeTab === "signup"
              ? "border-b-2 border-blue-500 mx-2 p-1 "
              : "mx-2 p-1"
          }
          onClick={(e) => {
            setActiveTab("signup");
          }}
        >
          SignUp
        </button>
      </div>
      {activeTab === "login" ? (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            fetch("https://mighty-oasis-08080.herokuapp.com/api/users/login", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user: values }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.user.token) {
                  loginUser(data.user);
                }
              });
            console.log(values, actions);
          }}
        >
          <Form className="flex flex-col max-w-md mx-auto">
            {/* <small>{this.state.loginFlashText}</small> */}
            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="loginEmail"
              name="email"
              placeholder="Email@example.com"
            />
            <ErrorMessage name="email" />

            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="loginPassword"
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password" />

            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5"
              type="submit"
            >
              LogIn
            </button>
          </Form>
        </Formik>
      ) : (
        <Formik
          initialValues={{
            email: "",
            password1: "",
            password: "",
            username: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            let user = {
              username: values.username,
              email: values.email,
              password: values.password,
            };
            fetch("https://mighty-oasis-08080.herokuapp.com/api/users", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ user }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.token) {
                  loginUser(data);
                }
              })
              .catch((err) => console.log(err));
            console.log(values);
          }}
        >
          <Form className="flex flex-col max-w-md mx-auto">
            {/* <small>{this.state.loginFlashText}</small> */}
            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="signupEmail"
              name="email"
              type="email"
              placeholder="Email@example.com"
            />
            <ErrorMessage name="email" />

            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="signupUsername"
              name="username"
              placeholder="Username"
            />
            <ErrorMessage name="username" />

            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="signUpPassword1"
              name="password1"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage name="password1" />

            <Field
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-2"
              id="signUpPassword2"
              name="password"
              type="password"
              placeholder="Repeat Password"
            />
            <ErrorMessage name="password" />
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
}
