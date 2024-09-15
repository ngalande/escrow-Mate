import React from "react";
import SellerBottomNav from "../../Assests/Components/SellerBottomNav";

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

const SellerTransactions = () => {
  return (
    <div className="p-2">
      <h3 className="text-xl font-bold mt-2 leading-6 text-blue-900">
        Transactions
      </h3>
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

export default SellerTransactions;
