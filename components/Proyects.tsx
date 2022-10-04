import styles from "../styles/Proyects.module.css";
import Image from "next/image";
import img1 from "../public/ecommerce2.png";
import img2 from "../public/markoscap.png";
import Link from "next/link";

function Proyects() {
  return (
    <div style={{ display: "grid", placeContent: "center", paddingTop: 400 }}>
      <h2 className={styles.mainTitle}>My Proyects</h2>
      <p style={{ textAlign: "center", fontSize: 20 }}>
        These are some of the projects that I have developed
      </p>
      <div className={styles.container}>
        <div className={styles.pageContainer}>
          <div className={styles.proyect}>
            <Image className={styles.img} src={img1} />
            <div>
              <Link href={"https://e-commerce-coderhouse-b0e54.web.app/"}>
                <a target="_blank" className={styles.btn}>
                  {"Visit Website >"}
                </a>
              </Link>
            </div>
          </div>
          <h2>Furniture E-commerce</h2>
          <p>
            An e-commerce for the sale of furniture, you can make the purchase
            of several products and it is registered in the database
          </p>
        </div>

        <div className={styles.pageContainer}>
          <div className={styles.proyect}>
            <Image className={styles.img} src={img2}></Image>
            <div>
              <Link href={"https://markoscap.netlify.app/"}>
                <a target="_blank" className={styles.btn}>
                  {"Visit Website >"}
                </a>
              </Link>
            </div>
          </div>
          <h2>Cripto Tracking App</h2>
          <p>
            A single page website to track the top cryptocurrencies in the
            market and their capitalizations
          </p>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
