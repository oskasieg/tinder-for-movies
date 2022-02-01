import { useContext } from "react";
import { IFilm } from "../../containers/Films/types";
import { FilmsContext } from "../../contexts/FilmsContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Film from "../Film/Film";
import styles from "./AcceptedFilms.module.scss";

const AcceptedFilms = () => {
  const { acceptedFilms } = useContext(FilmsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.AcceptedFilms} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <p className={styles.AcceptedFilms__text}>No new suggestions :(</p>
      <p className={styles.AcceptedFilms__text}>
        {acceptedFilms.length > 0 && (
          <>
            Your accepted movies <span>({acceptedFilms.length})</span>:
          </>
        )}
        {acceptedFilms.length === 0 && <>You aren't accepted any films!</>}
      </p>

      <div className={styles.AcceptedFilms__container}>
        {acceptedFilms.map((film: IFilm, index: number) => (
          <Film film={film} key={index} />
        ))}
      </div>
    </div>
  );
};

export default AcceptedFilms;
