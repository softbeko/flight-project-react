import React, { useState, useEffect, useRef } from 'react';
import SearchInput from './SearchInput';

function SearchWhere() {
  const [fromGo, setFromGo] = useState('Ankara');
  const [toGo, setToGo] = useState('');
  const [results, setResults] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
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
  }, [fromGo]);

  const handleFromInputChange = (e) => {
    const text = e.target.value;
    setFromGo(text);
  };

  const handleToInputChange = (e) => {
    const text = e.target.value;
    setToGo(text);
  };

  const handleFromSelect = (selectedValue) => {
    setFromGo(selectedValue);
  };

  const handleToSelect = (selectedValue) => {
    setToGo(selectedValue);
  };

  const focusInput = () => {
    setIsListVisible(true);
    setFromGo("")
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
          onChange={handleFromInputChange}
          ref={inputRef}
        />
        {isListVisible && <SearchInput results={results} onSelect={handleFromSelect} />}
      </div>
      <div>
        <div className='search-minitext'>Nereye</div>
        <div className='relative'>
          <div className='input-icon'>
            <img
              src='https://tatilde.diji.app/assets/icons/searchbar-arrival-flight.svg'
              alt='Uçak'
            />
          </div>
        </div>
        <input
          type='text'
          value={toGo}
          onChange={handleToInputChange}
        />
      </div>
    </div>
  );
}

export default SearchWhere;
