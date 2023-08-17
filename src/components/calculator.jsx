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
    <div className="None">
      <div className="flex gap-4">
        <select
          value={inputCurrency}
          onChange={(e) => setInputCurrency(e.target.value)}
          className="font-bold text-1.5rem p-1 bg-white text-black rounded-md"
          name=""
          id="input_currency"
        >
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="USD">USD</option>
          <option value="TRY" selected>
            TRY
          </option>
        </select>
        <input
          type="text"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          className="color-zinc-950 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
      <div className="flex w-full text-center items-center justify-center p-5  ">
        <button
          onClick={() => {
            setInputCurrency(outputCurrency);
            setOutputCurrency(inputCurrency);
          }}
          className="flex items-center justify-center bg-slate-800 rounded-full p-2 w-[4rem] h-[4rem] text-[2rem] font-bold border-solid border-2 border-sky-500 active:translate-y-0 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 active:shadow-md active:translate-y-[-2px] p-4 "
          id="exchange"
        >
          <HiMiniArrowPathRoundedSquare className="" />
        </button>
      </div>
      <div className="flex gap-4">
        <select
          className="font-bold  p-1 bg-white text-black rounded-md"
          id="output_currency"
          value={outputCurrency}
          onChange={(e) => setOutputCurrency(e.target.value)}
        >
        
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
          <option value="GBP">GBP</option>
          <option value="USD" selected>
            USD
          </option>
        </select>
        <input
          value={outputAmount}
          readOnly
          type="text"
          className="color-zinc-950 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        />
      </div>
      <div className="text-center justify-center" class="result">
        <div className="p-3" class="rate" id="rate"></div>
        {exchangeRate &&`Changing from ${inputCurrency} to ${outputCurrency}`}
      </div>
    </div>
  );
}

export default Calculator;
