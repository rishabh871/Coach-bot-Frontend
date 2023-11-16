import React from "react";
import Layout from "../../Layout";
import AddWalletAddressform from "../modal/addwalletform/Addaddressmodal";


const AddWallet = () => {
  return (
    <>
      <Layout>
        <div>
          <AddWalletAddressform />
        </div>
      </Layout>
    </>
  );
};

export default AddWallet;
