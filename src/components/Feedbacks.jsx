import React from "react";
import { motion } from "framer-motion";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import  "../index.css";
const FeedbackCard = ({
  index,
 
}) => (

  <motion.div

    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full items-center justify-center '
  >
      <div className="None">
            <div className="flex gap-4">
                <select className="font-bold text-1.5rem p-1 bg-white text-black rounded-md" name="" id="input_currency">
                                <option value="EUR" >EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="USD">USD</option>
                                <option value="TRY" selected>TRY</option>               
                </select>
                <input type="text"  className="color-zinc-950 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </div>
            <div className="flex w-full text-center items-center justify-center p-5  ">
              <button className="flex items-center justify-center bg-slate-800 rounded-full p-2 w-[4rem] h-[4rem] text-[2rem] font-bold" id="exchange">
                      <HiMiniArrowPathRoundedSquare className=""/>   
                  </button>
            </div>
            <div className="flex gap-4">
                <select className="font-bold  p-1 bg-white text-black rounded-md"  id="output_currency">
                        <option value="EUR">EUR</option>
                        <option value="TRY">TRY</option>
                        <option value="GBP">GBP</option>
                        <option value="USD" selected>USD</option>
                </select>
                <input type="text"  className="color-zinc-950 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"/>
            </div>
            <div class="result">
                    <div class="rate" id="rate"></div>

            </div>
            
        </div>
{/*
 <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
*/}
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] items-center flex flex-col justify-center`}>
      <div
        className={`bg-black-100 rounded-2xl ${styles.padding} min-h-[300px] items-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Canlı </p>
          <h2 className={styles.sectionHeadText}>Doviz kuru hesaplayıcı</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center	`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "calculator");
