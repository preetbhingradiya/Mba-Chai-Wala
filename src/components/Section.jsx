import React from "react";
import {motion} from 'framer-motion'

const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {


  //Animation
  const headingOption={
    initial:{
      y:"100%",
      opacity:0,
    },
    whileInView:{
      y:0,
      opacity:1,
    }
  }

  const textOption={
    ...headingOption,
    transition:{
      delay:0.3,
    }
  }

  const buttonOption={
    ...headingOption,
    transition:{
      delay:0.3,
      easy:"easIn"
    }
  }

  const imgOption={
    initial:{
      scale:0.1,
      opacity:0,
    },
    whileInView:{
      scale:1,
      opacity:1,
    },
    transition:{
      delay:0.3,
    }
  }


  return (
    <section className="section" style={{ backgroundColor: backgroundColor }}>
      <div>
        <motion.h3 style={{ color: headingColor }} data-cursorPointer  {...headingOption} >
          {h3}
        </motion.h3>
        <motion.p style={{ color: textColor }} data-cursorPointer {...textOption}>
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{ color: btnColor, backgroundColor: btnBgColor }}
            data-cursorPointer {...buttonOption}
          >
            {btnTxt}
          </motion.button>
        )}
        <motion.div {...imgOption}>
          <img src={imgSrc} alt="imgsrc" style={{ width: imgSize }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
