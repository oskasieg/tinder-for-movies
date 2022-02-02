import { IFilmProps } from "./types";
import styles from "./Film.module.scss";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FilmsContext } from "../../contexts/FilmsContext";
import DecideButton from "../DecideButton/DecideButton";

const Film = ({ film }: IFilmProps) => {
  const { updateFilms, films } = useContext(FilmsContext);
  const { theme } = useContext(ThemeContext);

  let swipeStart: number;
  let swipeEnd: number;

  // swipe action
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    swipeStart = e.touches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    swipeEnd = e.touches[0].screenX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (swipeStart - swipeEnd > 150) {
      updateFilms(film.id, "accept");
    } else if (swipeStart - swipeEnd < -150) {
      updateFilms(film.id, "reject");
    }
  };
  //

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      className={`${styles.Film} ${theme === "dark" ? styles.dark : ""}`}
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

      {/* desktop view */}
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
