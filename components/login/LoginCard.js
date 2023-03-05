import {
  UserCircleIcon,
  LockClosedIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef, useState} from "react";
import { signUp } from "../../lib/db-utils";

export default function LoginCard({todo, notification}) {
  
  const formInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const emailInputRef = useRef();


  const [isSuccess, setSuccess] = useState(notification);


  let buttonText;
  let askText;
  let actionText;
  let link;
  if (todo === "signin") {
    buttonText = "Sign in";
    askText = "Don't have a account ?"
    actionText = "Signup Here"
    link = "http://localhost:3000/login?todo=signup"
  } else {
    buttonText = "Sign Up";
    askText = "You have an account ?"
    actionText = "Login Here"
    link = "http://localhost:3000/login?todo=signin"
  }

 async function sendData(emailEntered, passwordEntered){
  const result = await signUp(emailEntered, passwordEntered);
  setSuccess(result);
  formInputRef.current.reset();
 }

  const submitHandler = (event) => {
    event.preventDefault();
    if(todo === "signin"){
      const emailEntered = emailInputRef.current.value;
      const passwordEntered = passwordInputRef.current.value;
    }else{
      const emailEntered = emailInputRef.current.value;
      const passwordEntered = passwordInputRef.current.value;
      sendData(emailEntered, passwordEntered).then(() => {
        setTimeout(() => {
          setSuccess(false)
        }, 1000);
          }
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join Us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter Your credential get access account
        </div>

        <div className="mt-10">
          <form onSubmit={submitHandler} ref={formInputRef}>
            {todo === "signup" && (
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="username"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                >
                  Name :
                </label>
                <div className="relative">
                  <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                    <i>
                      <UserCircleIcon className="h-6 text-red-400" />
                    </i>
                  </div>
                  <input
                    id="username"
                    type="text"
                    name="email"
                    className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-red-400"
                    placeholder="Enter your name"
                    ref={nameInputRef}
                  />
                </div>
              </div>
            )}
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-Mail Address :
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i>
                    <AtSymbolIcon className="h-6 text-red-400" />
                  </i>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-red-400"
                  placeholder="Enter your E-Mail"
                  ref={emailInputRef}
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="password"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Password :
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i>
                    <LockClosedIcon className="h-6 text-red-400" />
                  </i>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-red-400"
                  placeholder="Enter your password"
                  ref={passwordInputRef}
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
              >
                <span className="mr-2 uppercase">{buttonText}</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
            {isSuccess && todo === "signup" && <p className="text-green-500 text-center font-semibold mt-4">Sign up success</p>}
            {isSuccess && todo === "signin" && <p className="text-green-500 text-center font-semibold mt-4">Sign in success</p>}
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-xs font-medium">
          {askText}
          <Link href={link} className="text-xs ml-2 text-red-500 font-semibold hover:cursor-pointer">
            {actionText}
          </Link>
        </span>
      </div>
    </div>
  );
}
