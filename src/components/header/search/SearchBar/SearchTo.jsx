import React, { useState, useEffect, useRef } from 'react';
import SearchInputWhere from './SearchInputWhere';

function SearchTo() {
  const [fromGo, setFromGo] = useState('İstanbul');

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
          onChange={(e) => handleInputChange(e, setFromGo)}
          ref={inputRef}
        />
        {isListVisible && <SearchInputWhere results={results} onSelect={handleSelect} />}
      </div>
    </div>
  );
}

export default SearchTo;
