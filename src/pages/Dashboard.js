import React from "react";
import Layout from "../Layout";
import crypto1 from "../../src/Assets/home/crypto1.avif";
import crypto2 from "../../src/Assets/home/crypto2.avif";
import crypto3 from "../../src/Assets/home/crypto3.avif";
import crypto4 from "../../src/Assets/home/stack-coins-with-b-it_886336-883.avif";
const Dashboard = () => {
  return (
    <Layout>
      <div>
        <section class="dasboard-all pages" style={{ backgroundColor: "#1a1717" }}>
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="content-dasboard" style={{ color: "white" }}>
                  <div className="col-12">
                    <div className="crypto-website d-flex">
                      <div className="content col-6 ">
                        <header className="header">
                          <h1 className="fs-2">Welcome to My Crypto Website</h1>
                          <p>Your one-stop source for cryptocurrency information and news.</p>
                        </header>

                        <section className="crypto-list p-2">
                          <h2>Top Cryptocurrencies</h2>
                          <ul>
                            <li className="my-3">
                              <img src={crypto1} alt="Bitcoin" width="50" />
                              <span className="mx-3">Bitcoin (BTC)</span>
                              <span>$63,000</span>
                            </li>
                            <li className="my-3">
                              <img src={crypto2} alt="Ethereum" width="50" />
                              <span className="mx-3">Ethereum (ETH)</span>
                              <span>$2,500</span>
                            </li>
                          </ul>
                        </section>

                        <section className="news-feed">
                          <h2>Crypto News</h2>
                          <div className="news-article">
                            <h3>Bitcoin Hits New All-Time High</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                          <div className="news-article">
                            <h3>Ethereum 2.0 Upgrade Announced</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                        </section>
                      </div>

                      <div className="image col-6">
                        <img src={crypto4} alt="Crypto Image" width="100%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
