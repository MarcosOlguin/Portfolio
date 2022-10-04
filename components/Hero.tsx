import styles from "../styles/Hero.module.css";
import Router, { useRouter } from "next/router";
import svg from "../public/prueba3.svg";
import { motion } from "framer-motion";
import svgBackground from "../public/cvundraw.svg";
import Link from "next/link";

console.log(svg);

function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleDecriptionContainer}>
          <div>
            <motion.div className={styles.h1Container}>
              <span className={styles.span}>{"<"}</span>
              <div className={styles.titleSubtitleContainer}>
                <h1 className={styles.h1}>Marcos Olguin</h1>
                <h2 className={styles.subtitle}>Front-End Developer</h2>
              </div>

              <span className={styles.span}>{"/>"}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  repeat: Infinity,

                  duration: 1,
                }}
                className={styles.span}
              >
                {"|"}
              </motion.span>
            </motion.div>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={styles.description}
          >
            I am a web developer focused on the Front End, I develop all kinds
            of web applications, e-commerce, mobile, crypto tracking, and
            more...
          </motion.p>
        </div>
        <div>
          <motion.img
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1.5 }}
            animate={{
              x: 0,
              opacity: 0.6,
            }}
            className={styles.svgContainer}
            src={svg.src}
            alt="img"
          />
        </div>

        <a href="#home" className={styles.mo}>
          {"<MO/>"}
        </a>
      </div>
      <motion.a
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className={styles.materialIcons}
        href="/#about"
      >
        keyboard_arrow_down
      </motion.a>
    </>
  );
}

export default Hero;
