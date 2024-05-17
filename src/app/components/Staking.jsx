"use client";
import React from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NFTs = [
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "1.47 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "2.35 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "0.95 ETH",
  },
];

const StakedNFTs = [
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "3.21 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "4.76 ETH",
  },
  {
    image: "/assets/pic.png",
    name: "NFT ITEM VRS_01",
    price: "2.89 ETH",
  },
];

const Staking = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Image
        src="/assets/staking.png"
        height={306}
        width={868}
        alt=""
        className="mb-4 w-5/6 h-full md:w-[868px] md:h-[306px]"
      />
      <div className="mb-12">
        <p className="poppins-medium text-[25px] md:text-[40px]">
          Staking NFT and Rewards
        </p>
      </div>

      {/*claimable rewards section */}
      <div className="w-10/12 h-[301px] p-4 text-center bg-[#FFBA00] border border-[3.5px] border-black rounded-[25px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-20">
        <h5 className="mb-2 poppins-bold text-[25px] text-black md:text-[40px] dark:text-white mb-4">
          Your Tokens
        </h5>
        <div className="flex justify-center items-center">
          <div className="w-[545px] h-[120px] p-4 flex flex-col justify-end text-center bg-[#5591DA] border border-[2.5px] border-black rounded-[10px] shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-20">
            <div className="space-y-[-0.5]">
              <hr className="h-[1px] w-full bg-black border-none" />
              <p className="text-md md:text-xl poppins-medium">
                Claimable Rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*NFTs section */}
      <div className="flex justify-center p-4">
        <div className="flex flex-col items-center p-4 md:p-10 gap-8 mb-8 bg-[#FAF0D5] h-auto w-full md:h-[674px] md:w-[1233px]  border border-[3.5px] border-black rounded-[35px] md:mb-12 dark:bg-gray-800">
          <h1 className="text-2xl md:text-[40px] poppins-bold mb-4 md:mb-8">
            Your NFTs
          </h1>
          <div className="grid gap-8 md:gap-20 md:grid-cols-3">
            {NFTs.map((card, index) => (
              <div
                key={index}
                className="w-full h-auto md:h-[469px] bg-[#5591DA] p-5 border border-2 border-black rounded-[35px] shadow dark:bg-gray-800"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl poppins-semibold text-black dark:text-white">
                      {card.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <i
                      className="fab fa-ethereum"
                      style={{ fontSize: "24px", marginRight: "8px" }}
                    ></i>
                    {card.price}
                  </p>
                  <button
                    type="button"
                    className="tracking-wide md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 h-10 w-full md:h-[53px] md:w-[159px] transition-all duration-300 rounded-2xl overflow-hidden z-10 montserrat-bold text-sm md:text-[20px] bg-[#e63b51] border-4 border-black custom-button"
                  >
                    Stake NFT
                    <style jsx>{`
                      .custom-button::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #ffba00;
                        z-index: -2;
                      }
                      .custom-button::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0%;
                        height: 100%;
                        background-color: #e63b51;
                        transition: all 0.3s;
                        z-index: -1;
                      }
                      .custom-button:hover::before {
                        width: 100%;
                      }
                    `}</style>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
          </div>
          

      {/*Staked NFTs section */}
      <div className="flex justify-center p-4">
        <div className="flex flex-col items-center p-4 md:p-10 gap-8 mb-8 bg-[#FAF0D5] h-auto w-full md:h-[674px] md:w-[1233px]  border border-[3.5px] border-black rounded-[35px] md:mb-12 dark:bg-gray-800">
          <h1 className="text-2xl md:text-[40px] poppins-bold mb-4 md:mb-8">
            Your Staked NFTs
          </h1>
          <div className="grid gap-8 md:gap-20 md:grid-cols-3">
            {StakedNFTs.map((card, index) => (
              <div
                key={index}
                className="w-full h-auto md:h-[469px] bg-[#5591DA] p-5 border border-2 border-black rounded-[35px] shadow dark:bg-gray-800"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full"
                    src={card.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl poppins-semibold text-black dark:text-white">
                      {card.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <i
                      className="fab fa-ethereum"
                      style={{ fontSize: "24px", marginRight: "8px" }}
                    ></i>
                    {card.price}
                  </p>
                  <button
                    type="button"
                    className="tracking-wide md:tracking-wider relative inline-block px-4 md:px-0 md:leading-4 h-10 w-full md:h-[53px] md:w-[159px] transition-all duration-300 rounded-2xl overflow-hidden z-10 montserrat-bold text-sm md:text-[20px] bg-[#e63b51] border-4 border-black custom-button"
                  >
                    Withdraw
                    <style jsx>{`
                      .custom-button::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background-color: #ffba00;
                        z-index: -2;
                      }
                      .custom-button::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0%;
                        height: 100%;
                        background-color: #e63b51;
                        transition: all 0.3s;
                        z-index: -1;
                      }
                      .custom-button:hover::before {
                        width: 100%;
                      }
                    `}</style>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Staking;
