import React from 'react';

function SearchPassenger() {


  return (
    <div className='flex'> 
     <div>
        <div className='search-minitext'>
            Yolcu / Sınıf
        </div>
        <div className='relative'>
                    <div className='input-icon'>
                        <img
                            src="https://www.nereyebilet.com/assets/icons/personally.svg"
                            alt="Personaly"
                        />
                    </div>
                </div>
        <input className='w-[170px]' type="text" />
     </div>
    </div>
  );
}

export default SearchPassenger;
