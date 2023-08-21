import React from "react";
import { motion } from "framer-motion";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import "../index.css";
import Calculator from "./calculator";
const FeedbackCard = ({ index }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="p-10 rounded-[2rem] flex-grow items-center justify-center "
  >
    <Calculator />
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
      <div
        className={`mt-0.1 bg-black-100 rounded-[20px] items-center flex flex-col justify-center`}
      >
        <div
          className={`bg-black-100 rounded-2xl sm:px-16 px-6 mt-2 sm:py-12 py-10 min-h-[160px] items-center`}
        >
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Doviz kuru hesaplayıcı</h2>
          </motion.div>
        </div>
        <div
          className={` pb-14 ${styles.paddingX} flex flex-wrap gap-7 items-center	`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "calculator");
