import { IFilmProps } from "./types";
import styles from "./Film.module.scss";

const Film = ({ film }: IFilmProps) => {
  return (
    <div className={styles.Film}>
      <p className={styles.Film__title}>
        <span>{film.title}</span> ({film.rating}/10)
      </p>
      <div className={styles.Film__image}>
        <img src={film.imageUrl} alt="filmImage" />
      </div>
      <p className={styles.Film__summary}>{film.summary}</p>
    </div>
  );
};

export default Film;
