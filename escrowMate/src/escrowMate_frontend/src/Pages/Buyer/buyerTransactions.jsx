import React from "react";
import BottomNav from "../../Assests/Components/BottomNav";

const Transactions = [
  {
    name: "John Doe",
    Number: "0973456271",
    item: "Shoes",
    amount: "k657",
    status: "Completed",
  },
  {
    name: "Jane Phiri",
    Number: "0973456271",
    item: "Laptop",
    amount: "k237",
    status: "In Dispute",
  },
  {
    name: "Silvester Banda",
    Number: "0973456271",
    item: "Phone",
    amount: "k1257",
    status: "Pending",
  },
];

const BuyerTransactions = () => {
  return (
    <div className="p-2">
      <h3 className="text-xl font-bold mt-2 leading-6 text-blue-900">
        Transactions
      </h3>
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
      <button
        type="submit"
        // onClick={handleTransact}
        className="flex w-full justify-center w-3/5 mt-4 rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Create Smart Contract
      </button>

      <h5 className="text-xl font-bold mt-8 leading-6 text-blue-900">
        Previous Transactions
      </h5>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
        {Transactions.map((transaction) => (
          <div
            key={transaction.name}
            className="overflow-hidden rounded-lg grid grid-cols-3 bg-slate-100 px-4 py-5 shadow sm:p-6"
          >
            <div className="col-span-2">
              <p className="truncate text-sm font-medium text-gray-500">
                Name: {transaction.name}
              </p>
              <p className="truncate text-sm font-medium text-gray-500">
                Phone: {transaction.Number}
              </p>
              <p className="truncate text-sm font-medium text-gray-500">
                Item: {transaction.item}
              </p>
              <p className="truncate text-sm font-medium text-gray-500">
                Email: {transaction.amount}
              </p>
              <p className="truncate text-sm font-medium text-gray-500">
                Status: {transaction.status}
              </p>
            </div>
          </div>
        ))}
      </dl>

      <BottomNav />
    </div>
  );
};

export default BuyerTransactions;
