import styles from "../styles/Footer.module.css";
import Image from "next/image";
import linkedinIcon from "../public/linkedin-icon.svg";
import gmail from "../public/google-gmail.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div>Designed & Built by Marcos Olguin</div>
      <div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/marcos-olguin-fullstack/"
          className={styles.iconContainer}
        >
          <Image src={linkedinIcon} width={20} height={20} />
          <span>Linkedin</span>
        </a>
      </div>

      <div>
        <a className={styles.iconContainer}>
          <Image src={gmail} width={20} height={20} />
          <span>marcosaolguin@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
