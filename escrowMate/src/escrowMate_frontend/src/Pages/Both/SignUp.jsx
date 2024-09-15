import React from "react";
import logo from "../../Assests/Images/logomml.svg";

const SignUp = () => {
  return (
    <div className="flex min-h-screen   bg-cover bg-center bg-gradient-to-r from-blue-950 to-blue-950 flex-1 flex-col justify-center px-6 py-2 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-40 w-auto" src={logo} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
          EscrowMate
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" /*action="#" method="POST"*/>
          <div className="">
            <input
              id="name"
              name="name"
              autoComplete="John Doe"
              placeholder="Full Name"
              type="text"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              autoComplete="phone"
              type="text"
              placeholder="Phone Number"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="email"
              name="email"
              autoComplete="johndoe@example.com"
              type="text"
              placeholder="Email adress"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="address"
              name="address"
              autoComplete="DMI SEU, 9 Miles, Chibombo"
              type="text"
              placeholder="Residential address"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="password"
              name="password"
              autoComplete="*************"
              type="password"
              placeholder="Password"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="*************"
              type="password"
              placeholder="Confirm Password"
              //   value={phone}
              //   onChange={(e) => setPhone(e.target.value)}
              required
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <select
              id="userType"
              name="userType"
              autoComplete="Buyer / seller"
              className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            >
              <option className="text-blue-950">Buyer</option>
              <option className="text-blue-950">Seller</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              // onClick={
              //   handleLogin
              // }
              className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Register
              {/* {loading ? 'Signing in...' : 'Sign in'} */}
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
