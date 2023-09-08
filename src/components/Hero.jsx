import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { eurogif, dolar,dolargif, Poundgif, euro, Pound } from "../assets";


const MyServiceCard = ({ index, buying, seling, icon, currencyPair }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[180px] md:px-2 flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="Currency" className="w-16 h-16 object-contain" />
        <div className=" w-full flex flex-row items-center justify-center gap">
          <h1>{currencyPair}</h1>
        </div>
        <div className="text-white w-full text-[15px] font-bold flex flex-row text-center md:gap-0 gap-3 justify-around items-center ">
          <span className="text-green-400 ">ALIŞ</span>{" "}
          <span className="text-red-600 ">SATIŞ</span>
        </div>
        <div className="text-white w-full text-[20px] font-bold flex flex-row text-center md:gap-0 gap-3 justify-around items-center ">
          <span className="text-green-400">{buying}</span>{" "}
          <span className="text-red-600">{seling}</span>
        </div>
      </div>
    </motion.div>
  </div>
);
const Hero = () => {
  const [exchangeRates, setExchangeRates] = useState({
    USDtoTL: 0,
    EURtoTL: 0,
    GBPtoTL: 0,
    USDtoTLs: 0,
    EURtoTLs: 0,
    GBPtoTLs: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://95.0.125.26:8008/api/exchangeratestoday/"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);

        // Update state with the fetched data
        setExchangeRates({
          USDtoTL: data[0].selling_price,
          EURtoTL: data[1].selling_price,
          GBPtoTL: data[2].selling_price,
          USDtoTLs: data[0].buying_price,
          EURtoTLs: data[1].buying_price,
          GBPtoTLs: data[2].buying_price,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Now you can access exchangeRates in your component
  const { USDtoTL, EURtoTL, GBPtoTL, USDtoTLs, EURtoTLs, GBPtoTLs } = exchangeRates;


  return (
    //<>
      <div className={`relative w-full h-fill md:h-screen  mx-auto`} id="hero">
        <div className="flex items-center justify-center flex-col pt-20">
          <div className="mt-20 px-2">
            <h1
              className={`${styles.heroHeadText} pt-[4rem] text-white font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
            >
              Musmer <span className="text-[rgb(255,112,13)]">Exchange</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              En iyi oranlar,En hızlı kolay ve{" "}
              <br className="sm:block hidden" />
              Güvenilir Doviz İşlemleri.
            </p>
          </div>
          <div className="md:mt-20 sm:mt-[2rem] gap-[2rem] flex font-bold md:gap-10 flex-col md:flex-row justify-center md:items-center">
            <MyServiceCard
              icon={dolargif}
              buying={USDtoTL}
              seling={USDtoTLs}
              currencyPair="USD / TL"
            />
            <MyServiceCard
              icon={eurogif}
              buying={EURtoTL}
              seling={EURtoTLs}
              currencyPair="EURO / TL"
            />
            <MyServiceCard
              icon={Poundgif}
              buying={GBPtoTL}
              seling={GBPtoTLs}
              currencyPair="GBP / TL"
            />
          </div>
        </div>
      </div>
    //</>
  );
};

export default Hero;
