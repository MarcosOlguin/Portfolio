import Image from "next/image";
import firebaseIcon from "../public/firebase.svg";
import gitIcon from "../public/git-icon.svg";
import githubIcon from "../public/github-icon.svg";
import htmlIcon from "../public/html-5.svg";
import jsIcon from "../public/javascript.svg";
import nextIcon from "../public/nextjs-icon.svg";
import reactIcon from "../public/react.svg";
import tailwindIcon from "../public/tailwindcss-icon.svg";
import cssIcon from "../public/css-3.svg";
import reduxIcon from "../public/redux.svg";
import reactqueryIcon from "../public/react-query-icon.svg";
import { motion } from "framer-motion";
import styles from "../styles/Skillsicons.module.css";
import routerIcon from "../public/router.svg";
import tsIcon from "../public/typescript-icon.svg";
import bootstrapIcon from "../public/bootstrap.svg";
import nodejs from "../public/nodejs-icon.svg";
import mongo from "../public/mongodb-icon.svg";

const array = [
  { img: reactIcon, url: "https://es.reactjs.org/" },
  { img: nextIcon, url: "https://nextjs.org/" },
  { img: reduxIcon, url: "https://es.redux.js.org/" },
  { img: tsIcon, url: "https://www.typescriptlang.org/" },
  { img: jsIcon, url: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
  { img: htmlIcon, url: "https://lenguajehtml.com/html/" },
  { img: tailwindIcon, url: "https://tailwindcss.com/" },
  { img: bootstrapIcon, url: "https://getbootstrap.com/" },
  { img: cssIcon, url: "https://developer.mozilla.org/es/docs/Web/CSS" },
  { img: firebaseIcon, url: "https://firebase.google.com/" },
  { img: gitIcon, url: "https://git-scm.com/" },
  { img: githubIcon, url: "https://github.com/" },
  { img: nodejs, url: "https://nodejs.org/en/" },
  { img: reactqueryIcon, url: "https://react-query-v3.tanstack.com/" },
  { img: routerIcon, url: "https://reactrouter.com/en/main" },
  { img: mongo, url: "https://www.mongodb.com" },
];

function SkillsIcons() {
  return (
    <>
      <div className={styles.skillsIcon}>
        {array.map((icon, i) => (
          <motion.a
            target="_blank"
            href={icon.url}
            key={i}
            rel="noreferrer"
            initial={{ opacity: 0, color: "grey" }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.5,
              },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Image
              className={styles.img}
              src={icon.img}
              width={120}
              height={100}
              alt={"img"}
            />
          </motion.a>
        ))}
      </div>
    </>
  );
}

export default SkillsIcons;
