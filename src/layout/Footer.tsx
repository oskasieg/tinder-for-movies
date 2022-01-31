import styles from "./Footer.module.scss";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import gitlab from "../assets/gitlab.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__links}>
        <a
          className={styles.Footer__link}
          href="https://www.linkedin.com/in/krzysztof-sieg-195733174/"
        >
          <img src={linkedin} alt="linkedin" />
        </a>

        <a className={styles.Footer__link} href="https://github.com/oskasieg">
          <img src={github} alt="linkedin" />
        </a>

        <a className={styles.Footer__link} href="https://gitlab.com/">
          <img src={gitlab} alt="linkedin" />
        </a>
      </div>
      <div className={styles.Footer__text}>Created by Krzysztof Sieg</div>
    </footer>
  );
};

export default Footer;
