import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  CurrencyDollarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const SellerBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-950 text-white shadow-lg">
      <div className="flex justify-between mx-auto max-w-screen-lg">
        <Link
          to="/seller-home"
          className="flex items-center justify-center w-1/2 py-3"
        >
          <HomeIcon className="h-6" />
          Home
        </Link>
        <Link
          to="/seller-transactions"
          className="flex items-center justify-center w-1/2 py-3"
        >
          <CurrencyDollarIcon className="h-6" />
          Transactions
        </Link>
        <Link
          to="/users"
          className="flex items-center justify-center w-1/2 py-3"
        >
          <UserIcon className="h-6" />
          Users
        </Link>
      </div>
    </nav>
  );
};

export default SellerBottomNav;
