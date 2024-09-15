import React from "react";
import BottomNav from "../../Assests/Components/BottomNav";
import { Link } from "react-router-dom";

const BuyerHome = () => {
  return (
    <div className="min-h-screen p-2">
      <h3 className="text-2xl font-bold mt-2 leading-6 text-yellow-400">
        EscrowMate
      </h3>

      <p className="font-semibold leading-6 mt-4">
        Welcome <span className="text-2xl">Faith!</span>
      </p>

      <div className="mt-5 flex flex-wrap ">
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Pending
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-red-500">
              3
            </dd>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Completed
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-green-500">
              18
            </dd>
          </div>
        </div>
        <div className="sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">
              Disputes
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-blue-500">
              0
            </dd>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-md p-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-800 mt-6"
        >
          Start a transaction:
        </label>
        <div className="mt-2">
          <input
            id="phone"
            name="phone"
            autoComplete="phone"
            type="text"
            placeholder="Enter phone number"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            required
            className="block p-2 w-full bg-blue-100 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
        </div>
        <Link
          type="submit"
          to="/smart-contract"
          className="flex w-full justify-center w-3/5 mt-4 mb-4 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Create Smart Contract
        </Link>
      </div>

      <Link
        type="submit"
        to="/buyer-transactions"
        className="flex w-full justify-center w-3/5 mt-4 mb-4 rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        See transactions
      </Link>
      <BottomNav />
    </div>
  );
};

export default BuyerHome;
