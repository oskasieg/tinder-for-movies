import { IFilmProps } from "./types";
import styles from "./Film.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FilmsContext } from "../../contexts/FilmsContext";
import DecideButton from "../DecideButton/DecideButton";

const Film = ({ film, key }: IFilmProps) => {
  const { updateFilms, films } = useContext(FilmsContext);
  const { theme } = useContext(ThemeContext);

  let swipeStart: number;
  let swipeEnd: number;

  const onTouchStart = (e: any) => {
    swipeStart = e.touches[0].screenX;
  };

  const onTouchMove = (e: any) => {
    swipeEnd = e.touches[0].screenX;
  };

  const onTouchEnd = (e: any) => {
    if (swipeStart - swipeEnd > 150) {
      updateFilms(film.id, "accept");
    } else if (swipeStart - swipeEnd < -150) {
      updateFilms(film.id, "reject");
    }
  };

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      className={`${styles.Film} ${theme === "dark" ? styles.dark : ""}`}
      key={key}
    >
      <p className={styles.Film__title}>
        <span>{film.title}</span> ({film.rating}/10)
      </p>

      <div className={styles.Film__image}>
        <img
          onMouseMove={(e) => e.preventDefault()}
          src={film.imageUrl}
          alt="filmImage"
        />
      </div>

      <p className={styles.Film__summary}>{film.summary}</p>

      {window.innerWidth >= 1500 && films.length !== 0 && (
        <div className={styles.Film__buttons}>
          <DecideButton filmId={film.id} text="Accept" type="accept" />
          <DecideButton filmId={film.id} text="Reject" type="reject" />
        </div>
      )}
    </div>
  );
};

export default Film;
