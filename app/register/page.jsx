"use client";
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const RegisterPage = () => {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const router = useRouter();
  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .email("Email must be Valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be greater than 6 characters")
      .required("Password is required"),
  });

  const initialValue = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  };

  const onSubmitHandler = async (e, { resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", e);
      const data = await response.data;
      toast.success(data.msg);
      resetForm();
      router.push("/login");
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-[80vh] w-full flex item-center justify-center">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValue}
          onSubmit={onSubmitHandler}
        >
          <Form className="w-1/2 mx-auto">
            <div className="relative mb-3">
              <label htmlFor="name">Name</label>
              <div className="relative">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full py-2 px-10 ring-2 ring-indigo-400 outline-none border-none "
                />
                <FaUser
                  size={18}
                  className="absolute top-0.5 left-3 mt-2 text-green-500 cursor-pointer"
                />
              </div>
              <ErrorMessage
                name="name"
                component={"p"}
                className="text-red-500"
              />
            </div>
            <div className="relative mb-3">
              <label htmlFor="email">Email</label>
              <div className="relative">
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full py-2 px-10 ring-2 ring-indigo-400 outline-none border-none "
                />
                <IoMdMail
                  size={22}
                  className="absolute top-0 left-3 mt-2 text-green-500 cursor-pointer"
                />
              </div>
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-red-500"
              />
            </div>
            <div className="relative mb-3">
              <label htmlFor="phoneNumber">phoneNumber</label>
              <div className="relative">
                <Field
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter Your phoneNumber"
                  className="w-full py-2 px-10 ring-2 ring-indigo-400 outline-none border-none "
                />
                <IoMdMail
                  size={22}
                  className="absolute top-0 left-3 mt-2 text-green-500 cursor-pointer"
                />
              </div>
              <ErrorMessage
                name="email"
                component={"p"}
                className="text-red-500"
              />
            </div>
            <div className="relative mb-3">
              <label htmlFor="password">Password</label>
              <div className="relative">
                <Field
                  type={!showPassword ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="w-full py-2 px-10 ring-2 ring-indigo-400 outline-none border-none "
                />
                <FaLock
                  size={18}
                  className="absolute top-0 left-3 mt-2 text-green-500"
                />
                {showPassword ? (
                  <div onClick={() => setShowPassword(!showPassword)}>
                    <IoEye
                      size={25}
                      className="absolute top-0 right-3 mt-2 text-gray-500 cursor-pointer"
                    />
                  </div>
                ) : (
                  <div onClick={() => setShowPassword(!showPassword)}>
                    <IoEyeOff
                      size={25}
                      className="absolute top-0 right-3 mt-2 text-gray-500 cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <ErrorMessage
                name="password"
                component={"p"}
                className="text-red-500"
              />
            </div>
            <div className="mb-3">
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-green-500 rounded disabled:bg-green-200 text-white py-3 font-bold"
              >
                {loading ? "loading..." : "Register"}
              </button>
            </div>
            <div className="mb-3">
              <p className="text-center ">
                Already Have An Account ?{" "}
                <Link href={"/login"} className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RegisterPage;
