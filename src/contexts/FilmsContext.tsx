import React, { createContext, useState } from "react";
import { IFilm, IFilms } from "../containers/Films/types";
import data from "../data/data.json";

interface IFilmsContext {
  films: IFilms;
  acceptedFilms: IFilms;
  updateFilms: (id: number, action: "accept" | "reject") => void;
}

const defaultState = {
  films: [],
  acceptedFilms: [],
  updateFilms: () => {},
};

export const FilmsContext = createContext<IFilmsContext>(defaultState);

const FilmsProvider: React.FC = ({ children }) => {
  // films from API
  const [films, setFilms] = useState<IFilms>(data);

  // films accepted by user
  const [acceptedFilms, setAcceptedFilms] = useState<IFilms>([]);

  /**
   *
   * @param id film id
   * @param action type of action
   * Method that updates films according to decision
   */
  const updateFilms = (id: number, action: string) => {
    switch (action) {
      case "accept": {
        const findedFilm = films.find((film: IFilm) => film.id === id);
        if (findedFilm) {
          setAcceptedFilms([...acceptedFilms, findedFilm]);
        }
        setFilms(films.filter((film) => film.id !== id));

        break;
      }

      case "reject": {
        setFilms(films.filter((film) => film.id !== id));

        break;
      }
    }
  };

  return (
    <FilmsContext.Provider value={{ films, updateFilms, acceptedFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
