import { useContext } from "react";
import styles from "./Films.module.scss";
import { FilmsContext } from "../../contexts/FilmsContext";
import Film from "../../components/Film/Film";
import DecideButton from "../../components/DecideButton/DecideButton";
import AcceptedFilms from "../../components/AcceptedFilms/AcceptedFilms";

const Films = () => {
  const { films, currentFilm } = useContext(FilmsContext);

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
