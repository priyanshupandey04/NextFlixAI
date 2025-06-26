import { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BG_LOGIN_URL } from "../utils/constants";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const validateData = () => {
    console.log("Validating");
    const success = validate({
      email: email.current.value,
      password: password.current.value,
      username: username.current?.value,
    });
    if (!success) {
      setErrorMsg("");
      return;
    }

    setErrorMsg(success.errors[0].message);
  };

  return (
    <div className="relative h-screen bg-slate-500">
      <Header />
      <div className="absolute object-contain w-screen h-full">
        <img
          className="w-full h-full"
          alt="Netflix Background"
          src={NETFLIX_BG_LOGIN_URL}
        />
      </div>
      <div className="absolute z-10 flex items-center justify-center w-full h-full bg-black/50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateData();
          }}
          className="flex flex-col items-center justify-center p-10 rounded-md bg-black/70"
        >
          <h1 className="mb-5 text-4xl font-bold text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {/** Full name only for sign-up */}
          {!isSignIn && (
            <input
              ref={username}
              type="text"
              placeholder="Full Name"
              className="px-2 m-2 w-72 h-14 bg-[#121211] text-white border-2 border-white font-semibold"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Enter your email"
            className="px-2 m-2 w-72 h-14 bg-[#121211] text-white border-2 border-white font-semibold"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-2 m-2 w-72 h-14 bg-[#121211] text-white border-2 border-white font-semibold"
          />
          <h2 className="text-sm text-red-600">{errorMsg}</h2>
          <button
            type="submit"
            className="w-[95%] m-2 py-2 text-xl bg-[#C11119] text-white rounded-md"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="m-2 text-white">
            {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
