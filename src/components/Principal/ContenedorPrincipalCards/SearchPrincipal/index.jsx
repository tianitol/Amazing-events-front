/* eslint-disable react/prop-types */
import "./styles/searchprincipal.css";

import CheckboxSearch from "./CheckboxSearch";
import InputSearch from "./inputSearch";
import { useState } from "react";

const SearchPrincipal = (props) => {
  let [searchText, setSearchText] = useState("");

  const handleSearchText = (text) => {
    setSearchText(text);
    props.filtrarEventos(text);
  };

  return (
    <div className="div-search-principal">
      <CheckboxSearch
        filtrarEventos={props.filtrarEventos}
        searchText={searchText}
        obtenerCategoriasChecked={props.obtenerCategoriasChecked}
      />
      <InputSearch filtrarEventos={handleSearchText} />
    </div>
  );
};

export default SearchPrincipal;
