import React, { useState } from "react";
import { LlamadaPokemons } from "../../../helper/LlamadaPokemons";
import './SearchBar.css'
import { PokeDataContext } from "./Context/PokeDataContext";
import { useContext, useEffect } from "react";


export const SearchBar = () => {
  const { setShowSinglePokemon } = useContext( PokeDataContext )

  const [values, setValues] = useState('');
  const [inputValues, setInputValues] = useState('');
  const [textError, setTextError] = useState('textErrorDisabled')

  const handleInputChange = (e) => {
    setInputValues(e.target.value.toLowerCase())
    textError === 'textError' && setError(false)
    };

  const [pokeName, setPokeName] = useState('')
  const { singlePokeData, error, setError } = LlamadaPokemons(pokeName);

  const handleSearch = (e) => {
    e.preventDefault()
    inputValues !== '' ? setValues(inputValues) : setShowSinglePokemon(null)
    error && setError(false)
  }

  useEffect(() => {
    if (values) {
      setPokeName(inputValues)
    } 
    if (error) {
       setTextError('textError')
       setValues('')
      } else {
        setTextError('textErrorDisabled')
      }
  }, [values, error, inputValues])

  useEffect(() => {
      setShowSinglePokemon(singlePokeData)
      setValues('')
      setInputValues('')
  }, [singlePokeData, setShowSinglePokemon])

  return (
    <>
      <div>
        <div>
          <form className="searchForm" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar por Nombre"
              className="form-control"
              name={inputValues}
              autoComplete="off"
              value={inputValues}
              onChange={handleInputChange}
            />

            <button className="searchButton" onClick={handleSearch}>Search</button>
          </form>
            <p className={textError}>Este pokemon no existe o el nombre esta mal escrito.</p>
        </div>
        <div>
        </div>
        </div>
    </>
  );
};

export default SearchBar;
