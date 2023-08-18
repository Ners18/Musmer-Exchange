import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";

function Calculator() {
  const [inputCurrency, setInputCurrency] = useState("TRY");
  const [inputAmount, setInputAmount] = useState("0");
  const [outputCurrency, setOutputCurrency] = useState("USD");
  const [outputAmount, setOutputAmount] = useState("0");
  const [exchangeRate, setExchangeRate] = useState(null);

  // Function to calculate the exchange amount
  const calculateExchange = () => {
    if (!exchangeRate) return;

    const calculatedAmount = parseFloat(inputAmount) * exchangeRate;
    setOutputAmount(calculatedAmount.toFixed(2));
  };

  useEffect(() => {
    calculateExchange();
  }, [inputAmount]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${inputCurrency}`
        );
        setExchangeRate(response.data.rates[outputCurrency]);
      } catch (error) {
        console.log("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [inputCurrency, outputCurrency]);

  useEffect(() => {
    const calculateExchange = () => {
      if (!exchangeRate) return;

      const calculatedAmount = parseFloat(inputAmount) * exchangeRate;
      setOutputAmount(calculatedAmount.toFixed(2));
    };

    calculateExchange();
  }, [inputAmount, exchangeRate]);

  return (
    <div className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card  flex-grow">
      <div className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col flex-grow">
        <div className="  p-[10px] rounded-[20px] ">
          <div className="flex gap-4  rounded-[20px] ">
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
              <select
                value={inputCurrency}
                onChange={(e) => setInputCurrency(e.target.value)}
                className="font-bold text-1.5rem p-1 bg-white  text-black rounded-md"
                name=""
                id="input_currency"
              >
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="TRY">TRY</option>
              </select>
            </div>
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
              <input
                type="text"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                className="color-zinc-950  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
          <div className="flex w-full text-center items-center  justify-center p-5  ">
            <button
              onClick={() => {
                setInputCurrency(outputCurrency);
                setOutputCurrency(inputCurrency);
              }}
              className="flex items-center justify-center bg-slate-800 rounded-full p-2 w-[4rem] h-[4rem] text-[2rem]  font-bold border-solid border-2 border-sky-500 active:translate-y-0 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 active:shadow-md active:translate-y-[-2px] p-4 "
              id="exchange"
            >
              <HiMiniArrowPathRoundedSquare className="" />
            </button>
          </div>
          <div className="flex gap-4">
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
              <select
                className="font-bold  p-1 bg-white text-black rounded-md"
                id="output_currency"
                value={outputCurrency}
                onChange={(e) => setOutputCurrency(e.target.value)}
              >
                <option value="EUR">EUR</option>
                <option value="TRY">TRY</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
              <input
                value={outputAmount}
                readOnly
                type="text"
                className="color-zinc-950  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
          <div className=" w-full flex text-center justify-center p-3 flex-grow ">
            <p>
              Changing From{" "}
              <span className="text-[#00cea8]">{inputCurrency} </span>
              to <span className="text-[#bf61ff]">{outputCurrency}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
