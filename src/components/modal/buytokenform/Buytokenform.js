


import React, { useEffect } from "react";

import { useState } from "react";

import CryptoJS from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { AddWalletAddress, buyToken, getAllWalletAddress } from "../../../redux/auth/authslice";
import { getWallet } from "../../../common/common";
import '../../modal/buytokenform/Buytokenform.css'

function Buytokenform() {
  const [addaddress, setAddaddress] = useState({
    wallet_id: "",
    tokenAddress: "",
    ethAmount:"",
    tokenAmount:""
  });
  // const walletAddress = getWallet();

  console.log(addaddress, "adsdffjffj");

  const dispatch = useDispatch();
  const { allWalletAddress } = useSelector((state) => state.slice);
  console.log(allWalletAddress,"allwalletaddress")

  let dcy = !allWalletAddress.body ? "" : allWalletAddress?.body?.enc;
  console.log(dcy, "dcy");

  let bytes = CryptoJS?.AES?.decrypt(dcy, "c6aca80c7ca6fafb8bbb2105203e3b830a4d1c42bfbda28525c7b22e2f5e075a");

  if (bytes.length === 0) {
    console.log("Decrypted data is empty");
  } else {
    try {
      var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (decryptedData && typeof decryptedData === 'object') {
        console.log(decryptedData, "decrypted data");
      } else {
        console.log("Decrypted data is not a valid JSON object");
      }
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
  }
  
  console.log(decryptedData);


  useEffect(() => {
    dispatch(getAllWalletAddress());
  }, []);

  const handleChange = (e) => {
    setAddaddress({
      ...addaddress,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    let data = addaddress;
    console.log(data, "dsjgadvajssavj");
    console.log("clickedd");
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), "c6aca80c7ca6fafb8bbb2105203e3b830a4d1c42bfbda28525c7b22e2f5e075a").toString();
    console.log(ciphertext, "ciphertext");
    dispatch(buyToken(ciphertext));
  };

  return (
    <div className="modal show" style={{ display: "block", position: "initial", backgroundColor: "#000000de", height: "100vh" }}>
      <form className="buytoken_form_css" onSubmit={submit}>
        <div className=" text-center">
          <h3>Buy Token</h3>
        </div>

        <div class="mb-3 my-2">
          <label for="exampleInputEmail1" class="form-label">
            Wallet Address:
          </label>
          <select className="address_select" name="wallet_id" onChange={handleChange}>
            <option value="">Select Your Address</option>
            {decryptedData?.map((wallet, index) => (
                        <option key={index} value={wallet.id}>
                          {wallet.wallet_address}
                        </option>
                      ))}
          </select>
        </div>
        <div class="mb-3 my-2">
          <label for="exampleInputPassword1" class="form-label">
           Token Address:
          </label>
          <input type="text" class="form-control" name="tokenAddress" autoComplete="off"  placeholder="Enter Your Token Address" onChange={handleChange} />
        </div>
         <div class="mb-3 my-2">
          <label for="exampleInputPassword1" class="form-label">
          Eth Amount:
          </label>
          <input type="text" class="form-control" name="ethAmount" autoComplete="off"  placeholder="Enter Your Eth Address" onChange={handleChange} />
        </div>
         <div class="mb-3 my-2">
          <label for="exampleInputPassword1" class="form-label">
           Token Amount:
          </label>
          <input type="text" class="form-control" name="tokenAmount" autoComplete="off" placeholder="Enter Your Token Address" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-center " style={{ marginTop: "40px" }}>
          <button type="submit" class="btn btn-primary log-out-bt ">
        Buy Token
          </button>
        </div>
      </form>
    </div>
  );
}

export default Buytokenform;
