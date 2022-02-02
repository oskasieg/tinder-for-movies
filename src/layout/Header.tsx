import styles from "./Header.module.scss";
import tinderLogo from "../assets/tinder.png";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FilmsContext } from "../contexts/FilmsContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { resetFilms } = useContext(FilmsContext);

  return (
    <header className={styles.Header}>
      <div className={styles.Header__name} onClick={resetFilms}>
        <img className={styles.Header__logo} src={tinderLogo} alt="logo" />
        <p className={styles.Header__text}>
          Tinder for <span>movies</span>
        </p>
      </div>
      <button className={styles.Header__themeButton} onClick={toggleTheme}>
        <img src={theme === "light" ? moon : sun} alt="changeTheme" />
      </button>
    </header>
  );
};

export default Header;
