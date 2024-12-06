import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

const numTickets = 100;
const etherPrice = 0.0001;

function App() {
  // state variables for all the four input fields
  const [buyTicketInputValue, setBuyTicketInputValue] = useState("");
  const [getTicketIdInputValue, setGetTicketIdInputValue] = useState("");
  const [offerSwapInputValue, setOfferSwapInputValue] = useState("");
  const [acceptSwapInputValue, setAcceptSwapInputValue] = useState("");

  // Handle form submissions and connect to etherscan respectively
  const handleBuyTicket = (event) => {
    event.preventDefault();
    console.log("Buy Ticket ID: ", buyTicketInputValue);
  };

  const handleGetTicketId = (event) => {
    event.preventDefault();
    console.log("Wallet Address: ", getTicketIdInputValue);
  };

  const handleOfferSwap = (event) => {
    event.preventDefault();
    console.log("Offer Swap Ticket ID/Address: ", offerSwapInputValue);
  };

  const handleAcceptSwap = (event) => {
    event.preventDefault();
    console.log("Accept Swap Ticket ID/Address: ", acceptSwapInputValue);
  };

  return (
    <>
      <div className="items-center p-5 flex flex-col">
        <p>There are total {numTickets} tickets.</p>
        <p>The price of each ether is {etherPrice} ether.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 p-5 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-lg items-center justify-center ">
          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleBuyTicket}
          >
            <div className="relative">
              <input
                className="w-full border border-teal-500 rounded-lg p-4 text-md text-slate-500 shadow-md"
                placeholder="Enter Ticket Id"
                value={buyTicketInputValue}
                onChange={(e) => setBuyTicketInputValue(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white"
              >
                Buy Ticket
              </button>
            </div>
          </form>
        </div>
        <div className="h-32 rounded-lg ">
          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleGetTicketId}
          >
            <div className="relative">
              <input
                className="w-full border border-blue-500 rounded-lg p-4 text-md text-slate-500 shadow-md"
                placeholder="Enter wallet address"
                value={getTicketIdInputValue}
                onChange={(e) => setGetTicketIdInputValue(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Get Ticket Id
              </button>
            </div>
          </form>
        </div>
        <div className="h-32 rounded-lg ">
          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleOfferSwap}
          >
            <div className="relative">
              <input
                className="w-full border border-orange-500 rounded-lg p-4 text-md text-slate-500 shadow-md"
                placeholder="Enter Ticket Id/Address"
                value={offerSwapInputValue}
                onChange={(e) => setOfferSwapInputValue(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white"
              >
                Offer Swap
              </button>
            </div>
          </form>
        </div>
        <div className="h-32 rounded-lg ">
          <form
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            onSubmit={handleAcceptSwap}
          >
            <div className="relative">
              <input
                className="w-full border border-violet-500 rounded-lg p-4 text-md text-slate-500 shadow-md"
                placeholder="Enter Ticket Id/Address"
                value={acceptSwapInputValue}
                onChange={(e) => setAcceptSwapInputValue(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="inline-block rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white"
              >
                Accept Swap
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;