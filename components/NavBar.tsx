import styles from "../styles/NavBar.module.css";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import linkedinIcon from "../public/linkedin-icon.svg";
import githubIcon from "../public/github-icon.svg";

function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: "0%" }}
      viewport={{ once: false }}
      className={styles.navBar}
    >
      <a className={styles.a} href="#about">
        About
      </a>
      <a className={styles.a} href="#proyects">
        Projects
      </a>
      <a className={styles.a} href="#contact">
        Contact
      </a>
    </motion.div>
  );
}

export default NavBar;
