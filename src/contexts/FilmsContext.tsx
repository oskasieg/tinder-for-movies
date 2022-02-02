import React, { createContext, useEffect, useState } from "react";
import { IFilm, IFilms } from "../containers/Films/types";
import data from "../data/data.json";
import { showNotification } from "../utils/Notification";

interface IFilmsContext {
  films: IFilms;
  acceptedFilms: IFilms;
  currentFilm: IFilm;
  updateFilms: (id: number, action: "accept" | "reject") => void;
  resetFilms: () => void;
}

const defaultState = {
  films: [],
  acceptedFilms: [],
  currentFilm: {
    id: -1,
    imageUrl: "",
    rating: -1,
    summary: "",
    title: "",
  },
  updateFilms: () => {},
  resetFilms: () => {},
};

export const FilmsContext = createContext<IFilmsContext>(defaultState);

// commented lines are for fetching and updating data from API (these methods must be async)

const FilmsProvider: React.FC = ({ children }) => {
  // films from API
  const [films, setFilms] = useState<IFilms>(data);

  // films accepted by user
  const [acceptedFilms, setAcceptedFilms] = useState<IFilms>([]);

  // current film
  const [currentFilm, setCurrentFilm] = useState<IFilm>({
    id: -1,
    imageUrl: "",
    rating: -1,
    summary: "",
    title: "",
  });

  const resetFilms = () => {
    // const response = await fetch("https://localhost/recommendations")

    // const json = await response.json()

    // setFilms(json)

    setFilms(data);
    setAcceptedFilms([]);
    showNotification({
      title: "Reset",
      message: "You have reset an application",
      type: "default",
      container: "bottom-center",
    });
  };

  // calculate random suggestion from all suggestions
  useEffect(() => {
    if (films.length) {
      const randomIndex = Math.floor(Math.random() * films.length);
      setCurrentFilm(films[randomIndex]);
    } else {
      showNotification({
        title: "Info",
        message: "No new suggestions",
        type: "default",
        container: "bottom-center",
      });
    }
  }, [films]);

  /**
   *
   * @param id film id
   * @param action type of action
   * Method that updates films according to decision
   */
  const updateFilms = (id: number, action: string) => {
    switch (action) {
      case "accept": {
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

        const findedFilm = films.find((film: IFilm) => film.id === id);
        if (findedFilm) {
          setAcceptedFilms([...acceptedFilms, findedFilm]);
        }
        setFilms(films.filter((film) => film.id !== id));

        showNotification({
          title: "Success",
          message: "You accepted a suggestion",
          type: "success",
          container: "bottom-left",
        });

        break;
      }

      case "reject": {
        // const response = await fetch(
        //   `http://localhost/recommendations/${filmId}/reject`,
        //   {
        //     method: "PUT",
        //     headers: {
        //       "Content-type": "application/json",
        //     },
        //   }
        // );

        // const json = await response.json();

        setFilms(films.filter((film) => film.id !== id));

        showNotification({
          title: "Success",
          message: "You rejected a suggestion",
          type: "danger",
          container: "bottom-right",
        });

        break;
      }
    }
  };

  return (
    <FilmsContext.Provider
      value={{ films, updateFilms, acceptedFilms, resetFilms, currentFilm }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
