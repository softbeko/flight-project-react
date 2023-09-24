import React from 'react';
import SearchDate from './SearchBar/SearchDate';
import SearchWhere from './SearchBar/SearchWhere';
import SearchPassenger from './SearchBar/SearchPassenger';
import SearchButton from './SearchBar/SearchButton';
function Searchbar() {


  return (
    <div>
      <div>
        <div className='px-15 p-[16px]  rounded-tl-lg rounded-tr-lg w-[96px] text-base font-semibold h-[40px] flex justify-around items-center bg-white'>
          <div> <img src="https://tatilde.diji.app/assets/icons/black-plane.svg"/> </div>
          <div className='text-black'> Uçuş </div>

        </div>
      </div>
    <div className='flex search h-36 bg-white items-center justify-around rounded-b-lg rounded-r-lg px-6'>

    <div>
    <SearchWhere />
    </div>
    <div>
    <SearchDate />
    </div>
    <div>
    <SearchPassenger />
    </div>
    <div>
      <SearchButton />
    </div>
    </div>
    
    </div>
  );
}

export default Searchbar;
