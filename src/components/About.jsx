import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Bizim <span className='text-[rgb(255,112,13)]'>Hikayemiz</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] sm:mt-40px'
      >
        Musmer Exchange, KKTC Döviz piyasasındaki ihtiyaçları görüp bu ihtiyaçları karşılamak için yola çıkan bir döviz bürosudur. 
        Bir Musmer Limited kuruluşu olan Musmer Exchange, ticari yaşamındaki iş yaptığı farklı sektörlerde, yıllarca edinilen 
        tecrübelerin ve gözlemlerin sonucunda alınmış bir kararla kurulmuştur. Musmer Exchange diğer sektörlerde olduğu gibi bu 
        sektörde de müşteri memnuniyetini ön planda tutarak liderliğe 
        ulaşmak için durmadan çalışmaktadır.
      </motion.p>

      
    </>
  );
};


export default SectionWrapper(About, "about");
