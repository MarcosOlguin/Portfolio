import styles from "../styles/Skills.module.css";
import SkillsIcons from "./SkillsIcons";

function Skills() {
  return (
    <>
      <div className={styles.container}>
        <h2 style={{ fontSize: 50, marginBottom: 0 }}>Skills</h2>
        <p className={styles.p}>
          These are the technologies in which I have knowledge
        </p>
        <div>
          <SkillsIcons />
        </div>
      </div>
    </>
  );
}

export default Skills;
