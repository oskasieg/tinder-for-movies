import styles from "./Header.module.scss";
import tinderLogo from "../assets/tinder.png";

interface IHeaderProps {
  appName: string;
}

const Header = ({ appName }: IHeaderProps) => {
  return (
    <header className={styles.Header}>
      <img className={styles.Header__logo} src={tinderLogo} alt="logo" />
      <p className={styles.Header__text}>{appName}</p>
    </header>
  );
};

export default Header;
