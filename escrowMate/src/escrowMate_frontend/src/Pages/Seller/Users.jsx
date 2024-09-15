import React from "react";
import SellerBottomNav from "../../Assests/Components/SellerBottomNav";
import { Link } from "react-router-dom";

const stats = [
  {
    name: "Rose",
    adress: "9 miles, Chibombo",
    phone: "0960000002",
    email: "test@email.com",
    role: "buyer",
  },
  {
    name: " Faith",
    adress: "9 miles, Chibombo",
    phone: "0960000002",
    email: "test@email.com",
    role: "buyer",
  },
  {
    name: "Grace",
    adress: "9 miles, Chibombo",
    phone: "0960000002",
    email: "test@email.com",
    role: "buyer",
  },
  {
    name: "Chipo",
    adress: "9 miles, Chibombo",
    phone: "0960000002",
    email: "test@email.com",
    role: "buyer",
  },
  {
    name: "Sheryl",
    adress: "9 miles, Chibombo",
    phone: "0960000002",
    email: "test@email.com",
    role: "buyer",
  },
];

const Transactions = [
  {
    name: "John Doe",
    Number: "0973456271",
    Address: "Ndola",
    amount: "k657",
    status: "Pending",
  },
  {
    name: "Jane Phiri",
    Number: "0973456271",
    Address: "Lusaka",
    amount: "k237",
    status: "Completed",
  },
  {
    name: "Silvester Banda",
    Number: "0973456271",
    Address: "Kitwe",
    amount: "k1257",
    status: "Pending",
  },
];

const Users = () => {
  return (
    <div>
      <div className="px-4">
        <h3 className="text-xl font-bold leading-6 text-gray-900 mt-2">
          Users
        </h3>

        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-800 mt-8"
        >
          Who do you want to transact with:
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
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-gray-800 mt-8"
        >
          Frequents transactions:
        </label>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg grid grid-cols-3 bg-slate-100 px-4 py-5 shadow sm:p-6"
            >
              <div className="col-span-2">
                <p className="truncate text-sm font-medium text-gray-500">
                  Name: {item.name}
                </p>
                <p className="truncate text-sm font-medium text-gray-500">
                  Phone: {item.phone}
                </p>
                <p className="truncate text-sm font-medium text-gray-500">
                  Address: {item.adress}
                </p>
                <p className="truncate text-sm font-medium text-gray-500">
                  Email: {item.email}
                </p>
                <p className="truncate text-sm font-medium text-gray-500">
                  Role: {item.role}
                </p>
              </div>
              <div className="cols-span-1">
                <Link
                  to="/smart-contract"
                  // onClick={handleTransact}
                  className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Transact
                </Link>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <SellerBottomNav />
    </div>
  );
};

export default Users;
