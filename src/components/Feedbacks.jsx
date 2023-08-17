import React from "react";
import { motion } from "framer-motion";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import  "../index.css";
import Calculator from "./calculator";
const FeedbackCard = ({
  index,
 
}) => (

  <motion.div

    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className=' xfqrt  p-10 rounded-3xl xs:w-[320px] w-full items-center justify-center '
    
  >
      <Calculator />

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
      <div className={` mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center	`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "calculator");
