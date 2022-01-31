import React, { createContext, useState } from "react";
import { IFilms } from "../containers/Films/types";
import data from "../data/data.json";

interface IFilmsContext {
  films: IFilms;
  updateFilms: (id: string) => void;
}

const defaultState = {
  films: [],
  updateFilms: () => {},
};

export const FilmsContext = createContext<IFilmsContext>(defaultState);

const FilmsProvider: React.FC = ({ children }) => {
  const [films, setFilms] = useState<IFilms>(data);

  const updateFilms = (id: string) => {
    console.log(id);
  };

  return (
    <FilmsContext.Provider value={{ films, updateFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
