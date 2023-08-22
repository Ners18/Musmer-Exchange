import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [message, SetMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/756373fb-6475-4606-845c-826dde825404",
        data
      )
      .then((response) => {
        console.log(response);
        SetName("");
        SetEmail("");
        SetMessage("");
        setSent(true);
        setLoading(false);
        setTimeout(()=>{
          setSent(false);
        },3000);
      })
      .catch((error) => {
        console.error(error);
        setFailed(true); // Set failed status to true
        setLoading(false);
        setTimeout(() => {
          setFailed(false);
        }, 3000);
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Bize</p>
        <h3 className={styles.sectionHeadText}>Ulaşın.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">İsminiz</span>
            <input
              type="text"
              name="name"
              onChange={(e) => SetName(e.target.value)}
              value={name}
              placeholder="Buraya giriniz"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              E-mail'iniz veya telefon numaranız
            </span>
            <input
              type="email"
              name="email"
              onChange={(e) => SetEmail(e.target.value)}
              value={email}
              placeholder="Buraya giriniz"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              İletmek isdediğiniz mesaj
            </span>
            <textarea
              rows={7}
              name="message"
              onChange={(e) => SetMessage(e.target.value)}
              value={message}
              placeholder="Buraya yazınız"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className={`bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary  ease-in-out hover:bg-blue-500 ease-in-out duration-300 delay-150 ${
              loading ? "cursor-not-allowed" : ""
            } ${sent ? "bg-green-500" : ""} ${failed ? "bg-red-500" : ""}`}
            disabled={loading}
            
          >
            {loading
          ? "Gönderiliyor..."
          : sent
          ? "Gönderildi"
          :failed
          ?"Gönderilemedi"
          : "Gönder"} 
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
