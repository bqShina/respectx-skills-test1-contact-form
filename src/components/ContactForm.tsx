import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
  agreement: boolean;
};

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [submitting, setSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const onSubmit = (data: FormValues) => {
    setSubmitting(true);
    setTimeout(() => {
      console.log("Submitted Data", data);
      setSubmitting(false);
      setShowSuccessMessage(true);
      reset();
    }, 1000);
  };
  return (
    <>
      <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name *
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.firstName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              id="first-name"
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name *
            </label>
            <input
              id="last-name"
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.lastName ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email *
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="topic"
            >
              Topic *
            </label>
            <div className="relative">
              <select
                id="topic"
                className={`block appearance-none w-full bg-gray-200 border ${
                  errors.topic ? "border-red-500" : "border-gray-200"
                } text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white`}
                {...register("topic", { required: "Please select a topic" })}
                defaultValue=""
              >
                <option>General Enquiry</option>
                <option>Technical Support</option>
                <option>Sales Request</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
              {errors.topic && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.topic.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message *
            </label>
            <textarea
              id="message"
              placeholder="Message..."
              className={`appearance-none block w-full h-32 bg-gray-200 text-gray-700 border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                {...register("agreement", {
                  required: "You must accept the privacy policy",
                })}
              />
              <span className="text-sm italic">
                By selecting this you agree to our privacy policy *
              </span>
            </label>
            {errors.agreement && (
              <p className="text-red-500 text-xs italic">
                {errors.agreement.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <button
              className="shadow w-full bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
              type="submit"
            >
              {submitting ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 inline"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <span>Submit</span>
              )}
            </button>
            {showSuccessMessage && (
              <div
                className="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Message sent successfully!</span>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
