import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import favicon from "../public/favicon.ico";
import Fontlink from "../components/FontLink";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Proyects from "../components/Proyects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcos Olguin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicongod1.png" />
      </Head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Fontlink />
      <div className={styles.div}>
        <section id="home" style={{ height: "100vh" }}>
          <Hero />
        </section>
        <NavBar />
        <section id="about">
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section id="proyects">
          <Proyects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
