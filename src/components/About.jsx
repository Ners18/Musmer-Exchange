import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    
    <>
    <div className="pt-[5.5rem] ">
      <motion.div variants={textVariant()}>
        <div className="pt-10">
        <h2 className={styles.sectionHeadText}>Bizim <span className='text-[rgb(255,112,13)]'>Hikayemiz</span></h2>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Musmer Exchange, KKTC Döviz piyasasındaki ihtiyaçları görüp bu ihtiyaçları karşılamak için yola çıkan bir döviz bürosudur. 
        Bir Musmer Limited kuruluşu olan Musmer Exchange, ticari yaşamındaki iş yaptığı farklı sektörlerde, yıllarca edinilen 
        tecrübelerin ve gözlemlerin sonucunda alınmış bir kararla kurulmuştur. Musmer Exchange diğer sektörlerde olduğu gibi bu 
        sektörde de müşteri memnuniyetini ön planda tutarak liderliğe 
        ulaşmak için durmadan çalışmaktadır.
      </motion.p>

      </div>
    </>
    
  );
};


export default SectionWrapper(About, "about");
