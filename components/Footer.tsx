import styles from "../styles/Footer.module.css";
import Image from "next/image";
import linkedinIcon from "../public/linkedin-icon.svg";
import githubIcon from "../public/icon-github.svg";
import gmail from "../public/google-gmail.svg";

function Footer() {
  return (
    <div className={styles.container}>
      <div>Designed & Built by Marcos Olguin</div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/marcos-olguin-fullstack/"
          className={styles.iconContainer}
        >
          <Image src={linkedinIcon} width={20} height={20} alt={"img"} />
          <span>Linkedin</span>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MarcosOlguin"
          className={styles.iconContainer}
        >
          <Image src={githubIcon} width={25} height={20} alt={"img"} />
          <span>GitHub</span>
        </a>
      </div>
      <div>
        <a className={styles.iconContainer}>
          <Image src={gmail} width={20} height={20} alt={"img"} />
          <span>marcosaolguin@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
