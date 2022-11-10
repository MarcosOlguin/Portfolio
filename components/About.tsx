import { request } from "http";
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";
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
import SkillsIcons from "./SkillsIcons";
import svgBackground from "../public/cvundraw.svg";
import cv from "../public/hello.svg";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutTitle}>
          <h2 className={styles.title}>About Me</h2>
        </div>

        <div>
          <p className={styles.about}>
            Hi! My name is Marcos and I like to create web applications, I focus
            on learning everything related to this, I always try to use new
            technologies to expand my knowledge. I started to dedicate myself to
            web programming at the beginning of 2022, although since 2015 I have
            been in contact with it when I went to a technical institute.
            <br />I am currently developing projects on a freelance basis while
            I am in search of a professional team to join.
          </p>
        </div>
        <div style={{ marginTop: 0 }}>
          <a
            className={styles.resumeBtn}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1h0EyJXZhr_rRwrwSwFgNez4PFPilhxr8/view?usp=sharing"
          >
            {"Resume >"}
          </a>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={cv} width={750} height={400} alt={"img"} />
      </div>
    </div>
  );
}

export default About;
