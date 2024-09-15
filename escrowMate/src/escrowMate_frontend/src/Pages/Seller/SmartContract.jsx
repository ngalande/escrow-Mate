import React from "react";
import SellerBottomNav from "../../Assests/Components/SellerBottomNav";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const SmartContract = () => {
  return (
    <div className="p-2 min-h-screen bg-purple-500">
      {/* <Link
        className=" bg-blue-950 flex w-16 rounded-md p-1 text-white"
        to="/buyer-home"
      >
        <ArrowLeftIcon className="h-4" /> Back
      </Link> */}
      <label
        htmlFor="phone"
        className="block text-xl font-medium leading-6 text-gray-800 mt-8"
      >
        Enter contract terms:
      </label>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Product/Service Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                autoComplete="name"
                type="text"
                //   value={phone}
                //   onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Product/Service Name"
                className="block p-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-white"
              >
                Amount Payable in ZMW
              </label>
            </div>
            <div className="mt-2">
              <input
                id="amount"
                name="amount"
                type="text"
                autoComplete="578.34"
                placeholder="578.54"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="delivery"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="delivery"
                name="delivery"
                type="text"
                placeholder="Delivery duration in days"
                autoComplete="current-password"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-white"
              >
                Delivery Location
              </label>
            </div>
            <div className="mt-2">
              <input
                id="location"
                name="location"
                type="password"
                autoComplete="location"
                placeholder="Delivery Location"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full p-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="quality"
                className="block text-sm font-medium leading-6 text-white"
              >
                Quality
              </label>
            </div>
            <div className="mt-2">
              <select
                id="quality"
                name="quality"
                type="text"
                autoComplete="quality"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                placeholder="Quality"
                required
                className="block w-full p-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              >
                <option className="text-blue-950">Buyer</option>
                <option className="text-blue-950">Seller</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="additional-terms"
                className="block text-sm font-medium leading-6 text-white"
              >
                Any additional terms
              </label>
            </div>
            <div className="mt-2">
              <input
                id="additional-terms"
                name="additional-terms"
                type="text"
                autoComplete="additional-terms"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                placeholder="Additional terms"
                required
                className="block w-full p-2 rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              // onClick={handleLogin}
              className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Create Smart Contract
            </button>
          </div>
        </form>
      </div>
      <SellerBottomNav />
    </div>
  );
};

export default SmartContract;
