import React, { useEffect } from "react";

import { useState } from "react";

import CryptoJS from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { AddWalletAddress, getAllWalletAddress } from "../../../redux/auth/authslice";
import { getWallet } from "../../../common/common";
import "../../modal/addwalletform/Addaddressmodal.css";

function AddWalletAddressform() {
  const [addaddress, setAddaddress] = useState({
    private_key: "",
    wallet_address: "",
  });
  const walletAddress = getWallet();
  console.log(walletAddress, "walletAddress");
  useEffect(() => {
    setAddaddress({
      wallet_address: walletAddress,
    });
  }, [walletAddress]);

  console.log(addaddress, "adsdffjffj");

  const dispatch = useDispatch();

  const { allWalletAddress } = useSelector((state) => state.slice);
  console.log(allWalletAddress, "allwalletaddress");

  let dcy = !allWalletAddress.body ? "" : allWalletAddress?.body?.enc;
  console.log(dcy, "dcy");

  let bytes =
    CryptoJS?.AES?.decrypt(dcy, "c6aca80c7ca6fafb8bbb2105203e3b830a4d1c42bfbda28525c7b22e2f5e075a").length === 0
      ? ""
      : CryptoJS.AES.decrypt(dcy, "c6aca80c7ca6fafb8bbb2105203e3b830a4d1c42bfbda28525c7b22e2f5e075a");
  console.log(bytes.words, "bytes");

  // var decryptedData = JSON?.parse(bytes?.toString(CryptoJS?.enc?.Utf8)).length===0 ? "" :JSON?.parse(bytes?.toString(CryptoJS?.enc?.Utf8));
  if (bytes.words.length === 0) {
    console.log("error");
  } else {
    var decryptedData = JSON?.parse(bytes?.toString(CryptoJS?.enc?.Utf8)).length === 0 ? "" : JSON?.parse(bytes?.toString(CryptoJS?.enc?.Utf8));
    console.log(decryptedData, "decrypteddsataaaa");
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
    dispatch(AddWalletAddress(ciphertext));
  };

  return (
    <div className="modal show" style={{ display: "block", position: "initial", backgroundColor: "#000000de", height: "100vh" }}>
      <form className="addwalllet_form_css" onSubmit={submit}>
        <div className=" text-center">
          <h3>Add Wallet Address</h3>
        </div>

        <div class="mb-3 my-3">
          <label for="exampleInputEmail1" class="form-label">
            Private Key:
          </label>
          <input type="text" class="form-control" name="private_key" placeholder="Enter Your Private Key" autoComplete="off" onChange={handleChange} />
        </div>
        <div class="mb-3 my-4">
          <label for="exampleInputPassword1" class="form-label">
            Wallet Address:
          </label>
          <input type="text" class="form-control" name="wallet_address" autoComplete="off" value={walletAddress} placeholder="Enter Your Wallet Address" onChange={handleChange} />
        </div>
        <div className="d-flex justify-content-center " style={{ marginTop: "40px" }}>
          <button type="submit" class="btn btn-primary log-out-bt ">
            Add Wallet Address
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddWalletAddressform;
