import { useContext, useEffect, useState } from "react";
import styles from "./Films.module.scss";
import { FilmsContext } from "../../contexts/FilmsContext";
import { IFilm } from "./types";
import Film from "../../components/Film/Film";
import DecideButton from "../../components/DecideButton/DecideButton";
import AcceptedFilms from "../../components/AcceptedFilms/AcceptedFilms";

const Films = () => {
  const { films } = useContext(FilmsContext);

  const [currentFilm, setCurrentFilm] = useState<IFilm>({
    id: -1,
    imageUrl: "",
    rating: -1,
    summary: "",
    title: "",
  });

  // calculate random suggestion from all suggestions
  useEffect(() => {
    if (films.length) {
      const randomIndex = Math.floor(Math.random() * films.length);
      setCurrentFilm(films[randomIndex]);
    }
  }, [films]);

  return (
    <div className={styles.Films}>
      {/* if they are new suggestions from API */}
      {films.length !== 0 && (
        <>
          <Film film={currentFilm} />

          {/* mobile view */}
          {window.innerWidth < 1500 && (
            <div className={styles.Films__buttons}>
              <DecideButton
                text="Accept"
                type="accept"
                filmId={currentFilm.id}
              />
              <DecideButton
                text="Reject"
                type="reject"
                filmId={currentFilm.id}
              />
            </div>
          )}
        </>
      )}
      {/* if no more film suggestions from API render accepted suggestions */}
      {!films.length && <AcceptedFilms />}
    </div>
  );
};

export default Films;
