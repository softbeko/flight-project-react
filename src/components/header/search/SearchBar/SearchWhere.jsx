import React from 'react';


function SearchWhere() {


  return (
    <div className='flex where'> 
     <div><div className='search-minitext'>
        Nereden
     </div>
     <div className='relative'>
        <div className='input-icon'>
        <img
        src="https://tatilde.diji.app/assets/icons/searchbar-departure-flight.svg"
        alt="Uçak "
      />
        </div>
    
     </div>
        <input type="text" />
     </div>
     <div><div className='search-minitext'>
        Nereye
     </div>
     <div className='relative'>
     <div className='input-icon'>
     <img
        src="https://tatilde.diji.app/assets/icons/searchbar-arrival-flight.svg"
        alt="Uçak "
      />
     </div>
     </div>
        <input type="text" />
     </div>
    </div>
  );
}

export default SearchWhere;
