import React, { useState, useEffect } from "react";
import SellerBottomNav from "../../Assests/Components/SellerBottomNav";
import transactionsData from "../../Assests/db.json"; // Importing the JSON file

const stats = [
  { name: "Escrow Balance", stat: "71,897" },
  { name: "Transacted last month", stat: "58.16%" },
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
const SellerHome = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Load transactions from the imported JSON file when the component mounts
    setTransactions(transactionsData.transactions);
  }, []);

  return (
    <div className="p-2">
      <h3 className="text-2xl font-bold mt-2 leading-6 text-yellow-400">
        EscrowMate
      </h3>
      <div className="mt-5 flex flex-wrap ">
        {stats.map((item) => (
          <div
            key={item.name}
            className="sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/5 px-2 mb-4"
          >
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          </div>
        ))}
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 shadow-lg z-10">
        <h3 className="text-xl font-bold mt-2 leading-6 text-blue-900">
          Transactions
        </h3>
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
                Address: {transaction.Address}
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

      <SellerBottomNav />
    </div>
  );
};

export default SellerHome;
