import React, { useEffect, useState } from "react";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";

function Calculator() {
  const [inputCurrency, setInputCurrency] = useState("USD");
  const [inputAmount, setInputAmount] = useState("0");  
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [outputAmount, setOutputAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);

  const handleInputAmountChange = (value) => {
    setInputAmount(value);
  };

  

  useEffect(() => {
    setOutputAmount(calculateExchange());
  }, [inputAmount, exchangeRate]);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch(
          "http://95.0.125.26:8008/api/exchangeratestoday/"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        switch (`${inputCurrency}-${outputCurrency}`) {
          case 'TRY-USD':
            console.log("TRY-USD : ", data[0].buying_price);
            setExchangeRate(data[0].buying_price);
            break;
          case 'TRY-EUR':
            console.log("TRY-EUR : ", data[1].buying_price);
            setExchangeRate(data[1].buying_price);
            break;
          case 'TRY-GBP':
            console.log("TRY-GBP : ", data[2].buying_price);
            setExchangeRate(data[2].buying_price);
            break;
          case 'USD-TRY':
            console.log("USD-TRY : ", data[0].selling_price);
            setExchangeRate(data[0].selling_price);
            break;
          case 'EUR-TRY':
            console.log("EUR-TRY : ", data[1].selling_price);
            setExchangeRate(data[1].selling_price);
            break;
          case 'GBP-TRY':
            console.log("GBP-TRY : ", data[2].selling_price);
            setExchangeRate(data[2].selling_price);
            break;
          // between usd currencies
          case 'USD-EUR':
            const usdToTl = data[0].buying_price
            const tlToEur= data[1].selling_price
            const usdToEuro = usdToTl/tlToEur
            setExchangeRate(usdToEuro.toFixed(2))
            break;
          case 'EUR-USD':
            const eurToTl = data[1].buying_price
            const tlToUsd= data[0].selling_price
            const eurToUsd = eurToTl*tlToUsd
            setExchangeRate(eurToUsd.toFixed(2))
            break;
          case 'USD-GBP':
            const usdToTlp = data[0].buying_price
            const tlToGbp= data[2].selling_price
            const usdToGbp = usdToTlp/tlToGbp
            setExchangeRate(usdToGbp.toFixed(2))
            break;
          case 'GBP-USD':
            const gbpToTl = data[2].buying_price
            const tlToUsdp= data[0].selling_price
            const gbpToUsd = gbpToTl*tlToUsdp
            setExchangeRate(gbpToUsd.toFixed(2))
          break;
          // change between euro and other currencies
          case 'EUR-USD':
            const tlToEure = data[1].buying_price
            const usdToTle = data[0].selling_price
            const eurToUsde = tlToEure/usdToTle
            setExchangeRate(eurToUsde.toFixed(2))
          break;
          
          default:
            // Handle the default case if the currency pair is not recognized
            break;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    
    };

    fetchExchangeRate();
  }, []);

  useEffect(() => {
    calculateExchange();
  }, [exchangeRate]);
  
  const calculateExchange = () => {
    if (!exchangeRate) return;

    const inputAmountValue = parseFloat(inputAmount);
    let calculatedAmount = 0;

    
    switch (`${inputCurrency}-${outputCurrency}`) {
      case 'TRY-USD':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      case 'TRY-EUR':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      case 'TRY-GBP':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      case 'USD-TRY':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'EUR-TRY':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'GBP-TRY':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      // change between usd and other currencies
      case 'USD-EUR':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'EUR-USD':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      case 'USD-GBP':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'GBP-USD':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      // change between usd and other currencies
      case 'EUR-USD':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'USD-EUR':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
      case 'EUR-GBP':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue * exchangeRate;
        break;
      case 'GBP-EUR':
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue / exchangeRate;
        break;
        
      default:
        calculatedAmount = isNaN(inputAmountValue) ? 0 : inputAmountValue;
        break;
    }
  
    return calculatedAmount.toFixed(2);

  };

  return (
    <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card flex-grow">
      <div className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col flex-grow">
        <div className="p-[10px] rounded-[20px] ">
          <div className="flex gap-4 rounded-[20px] ">
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
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
                <option value="TRY">TRY</option>
              </select>
            </div>
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min w-[5rem] md:w-[7.5rem]">
              <input
                type="text"
                value={inputAmount}
                onChange={(e) => handleInputAmountChange(e.target.value)}
                className="color-zinc-950 px-2 py-[0.35rem] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
            </div>
          </div>
          <div className="flex w-full text-center items-center justify-center p-5 ">
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
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min">
              <select
                className="font-bold p-1 bg-white text-black rounded-md"
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
            <div className="green-pink-gradient p-[1px] rounded-[10px] shadow-card h-min w-[5rem] md:w-[7.5rem]">
              <span
                
                readOnly
                type="text"
                className="color-zinc-950 px-2 py-[0.35rem] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                {outputAmount}
              </span>
            </div>
          </div>
          <div className="w-full flex text-center justify-center p-3 flex-grow ">
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
