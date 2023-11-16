import { React, useEffect, useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import detectEthereumProvider from "@metamask/detect-provider";
import { setWallet } from "../../common/common";

export const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (toggleNav) {
      document.body.className = "";
    } else {
      document.body.className = "open-class";
    }
  }, [toggleNav]);

  let str = localStorage.getItem("token");

  const navigate = useNavigate();

  const Logouthandle = () => {
    navigate("/login");
    localStorage.clear();
  };

  const handleConnect = async () => {
    console.log("clickeddd");
    try {
      const provider = await detectEthereumProvider();
      console.log(provider, "providerr");
      if (provider) {
        // Prompt the user to connect their Metamask
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        const userAddress = accounts[0];
        // setAddress(userAddress);
        // localStorage.setItem("metaAddress", `${userAddress}`);
        setWallet(`${userAddress}`);
        // setIsConnected(true);
      } else {
        console.error("Metamask not found");
      }
    } catch (error) {
      console.error("Error connecting Metamask:", error);
    }
  };

  return (
    <div>
      <section class="dasboard-all top-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-flex">
                <ul>
                  <li>
                    <button class="tog-bt" onClick={() => setToggleNav(!toggleNav)}>
                      <i class="fa-solid fa-bars"></i>
                      <i class="fa-solid fa-caret-left"></i>
                    </button>
                  </li>
                  <li>
                    <button class="log-out-bt" onClick={handleConnect}>
                      Meta Mask Wallet
                    </button>
                    <button class="log-out-bt mx-2" onClick={Logouthandle}>
                      {str ? "logout" : "login"}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
