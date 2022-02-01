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

  useEffect(() => {
    if (films.length) {
      const randomIndex = Math.floor(Math.random() * films.length);
      console.log(films[randomIndex]);
      setCurrentFilm(films[randomIndex]);
    }
  }, [films]);

  return (
    <div className={styles.Films}>
      {films.length !== 0 && (
        <>
          <Film film={currentFilm} />
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
      {!films.length && <AcceptedFilms />}
    </div>
  );
};

export default Films;
