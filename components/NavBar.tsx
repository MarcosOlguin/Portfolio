import styles from "../styles/NavBar.module.css";
import { motion } from "framer-motion";

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
