import React, { useState, useEffect, useRef } from 'react';
import SearchInputWhere from './SearchInputWhere';
import SearchTo from './SearchTo';
import Searchpage from './SearchPage/Searchpage';
function SearchWhere() {
  const [fromGo, setFromGo] = useState('Ankara');
  const [FromGoId, setFromGoId] = useState([]);

  const [results, setResults] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [fromGo]);

  const fetchData = () => {
    fetch('https://tatilde.diji.app/api/flight/airport/?keyword=' + fromGo)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setResults(data.results);
        } else {
          console.error('Veri bir dizi değil:', data);
        }
      })
      .catch((error) => {
        console.log('Veri çekme hatası:' + error);
      });
  };

  const handleInputChange = (e, setter) => {
    const text = e.target.value;
    setter(text);
  };

  const handleSelect = (selectedValue) => {
    setFromGo(selectedValue.name);
    setFromGoId({name :selectedValue.name , id: selectedValue.id, city:selectedValue.city , code: selectedValue.code , country:selectedValue.country , country_code : selectedValue.country_code })
  };

  const focusInput = () => {
    setIsListVisible(true);
    inputRef.current.focus();
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex where'>
      <div>
        <div className='search-minitext'>Nereden</div>
        <div className='relative'>
          <div className='input-icon'>
            <img
              src='https://tatilde.diji.app/assets/icons/searchbar-departure-flight.svg'
              alt='Uçak'
            />
          </div>
        </div>
        <input
          type='text'
          onClick={focusInput}
          value={fromGo}
          id={FromGoId}
          onChange={(e) => handleInputChange(e, setFromGo)}
          ref={inputRef}
        />
        {isListVisible && <SearchInputWhere results={results} onSelect={handleSelect} />}
        {isListVisible && <Searchpage results={results} selectedValues={FromGoId} />}
      </div>
      <SearchTo />
    </div>
  );
}

export default SearchWhere;
