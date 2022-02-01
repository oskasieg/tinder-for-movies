import { IDecideButtonProps } from "./types";
import styles from "./DecideButton.module.scss";
import { useContext } from "react";
import { FilmsContext } from "../../contexts/FilmsContext";

const DecideButton = ({ text, type, filmId }: IDecideButtonProps) => {
  const { updateFilms } = useContext(FilmsContext);

  const acceptSuggestion = () => {
    // const response = await fetch(
    //   `http://localhost/recommendations/${filmId}/accept`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   }
    // );

    // const json = await response.json();

    updateFilms(filmId, type);
  };

  const rejectSuggestion = () => {
    updateFilms(filmId, type);
  };

  return (
    <button
      className={`${styles.DecideButton} ${
        type === "accept"
          ? `${styles.DecideButton__accept}`
          : `${styles.DecideButton__reject}`
      } `}
      onClick={type === "accept" ? acceptSuggestion : rejectSuggestion}
    >
      {text}
    </button>
  );
};

export default DecideButton;
