import React from "react";
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/Animation";
const bgStyle={
    backgroundImage:`url(${BannerPng})`,
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
}

const Banner3 = () => {
  return (
    <section className="">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* blank div */}
            <div></div>
        {/* <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div> */}
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sed
              tenetur est sunt fugit natus ab perferendis quisquam autem quam,
              quod praesentium cum. Esse accusantium sed error. Aperiam,
              repellendus itaque.
            </motion.p>

            

            {/* button section */}
            <motion.div
              variants={FadeLeft(0.9)}
              initial="hidden"
              animate="visible"
            >
              <button className="primary-btn">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
