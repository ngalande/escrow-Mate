import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Both/Login";
import SignUp from "./Pages/Both/SignUp";
import BuyerHome from "./Pages/Buyer/buyerHome";
import SellerHome from "./Pages/Seller/sellerHome";
import BuyerTransactions from "./Pages/Buyer/buyerTransactions";
import SellerTransactions from "./Pages/Seller/sellerTransactions";
import Users from "./Pages/Seller/Users";
import SmartContract from "./Pages/Seller/SmartContract";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/buyer-home" element={<BuyerHome />} />
          <Route path="/seller-home" element={<SellerHome />} />
          <Route path="/buyer-transactions" element={<BuyerTransactions />} />
          <Route path="/seller-transactions" element={<SellerTransactions />} />
          <Route path="/users" element={<Users />} />
          <Route path="/smart-contract" element={<SmartContract />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
