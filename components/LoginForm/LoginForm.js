import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { currentUserState } from "../../lib/recoil-atoms";

export const LoginForm = () => {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(currentUserState);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  let baseURL = "http://localhost:3001";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const user = {
      email: data.get("loginEmail"),
      password: data.get("loginPassword"),
    };

    fetch(`${baseURL}/users?email=${user.email}&password=${user.password}`)
      .then((res) => res.json())
      .then((user) => {
        if (Object.getOwnPropertyNames(user).length === 0) {
          return;
        }
        setUserState(user);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("Credentials Did not match");
      });
  };

  const toggleLoginSignup = (e) => {
    var buttonText = e.target.innerText;
    setIsLoginFormVisible(isLoginFormVisible ? false : true);
  };

  function setUserDetailsToLocal(userDetails) {
    localStorage.setItem("userDetails", JSON.stringify({ userDetails }));
    router.push("/");
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl mb-5">Furnimart</h1>
      <div className="bg-white rounded-xl shadow-xl py-8">
        <h2 className="text-gray-700 text-3xl text-center">
          {isLoginFormVisible ? "Login" : "Signup"}
        </h2>
        <span className="flex flex-col items-center justify-between">
          <form
            id="loginSignupForm"
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start py-8 px-8 w-80 max-h-60"
          >
            {/* Login Inputs */}
            <input
              className={`${
                isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-blue-700`}
              name="loginEmail"
              type="text"
              placeholder="Email"
            />
            <input
              className={`${
                isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-blue-700`}
              name="loginPassword"
              type="password"
              placeholder="Password"
            />

            {/* SignUp Inputs */}
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-blue-700`}
              name="userName"
              type="text"
              placeholder="Name"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-1 outline-none focus:border-blue-700`}
              name="signupEmail"
              type="text"
              placeholder="Email"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-blue-700`}
              name="signupPassword"
              type="password"
              placeholder="Password"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-blue-700`}
              name="signupConfirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </form>
          <span className="flex flex-col w-full items-center justify-center">
            {/* <span className={`${isRequestSent ? "block" : "hidden"} mt-10`}>
                <Image src="/spinner.gif" width={32} height={32} />
              </span> */}
            <button
              form="loginSignupForm"
              className={`${
                !isRequestSent ? "block" : "hidden"
              } w-1/2 h-10 bg-indigo-500 rounded text-white mt-10`}
              type="submit"
            >
              {isLoginFormVisible ? "Login" : "Signup"}
            </button>
            <button
              type="button"
              className="text-blue-500 cursor-pointer my-5"
              onClick={toggleLoginSignup}
            >
              {isLoginFormVisible ? "Create account" : "Already have account"}
            </button>
          </span>
        </span>
      </div>
    </main>
  );
};
