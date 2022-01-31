import { useContext, useEffect, useState } from "react";
import styles from "./Films.module.scss";
import { FilmsContext } from "../../contexts/FilmsContext";
import { IFilm } from "./types";
import Film from "../../components/Film/Film";
import DecideButton from "../../components/DecideButton/DecideButton";

const Films = () => {
  const { films, updateFilms } = useContext(FilmsContext);

  const [currentFilm, setCurrentFilm] = useState<Partial<IFilm>>({});

  useEffect(() => {
    if (films.length) {
      const randomIndex = Math.floor(Math.random() * films.length);

      setCurrentFilm(films[randomIndex]);
    }
  }, [films]);

  return (
    <div className={styles.Films}>
      <Film film={currentFilm} />
      <div className={styles.Films__buttons}>
        <DecideButton text="Accept" type="accept" />
        <DecideButton text="Reject" type="reject" />
      </div>
    </div>
  );
};

export default Films;
