import React from 'react';

function Search({ logo }) {
  // Eğer logo null ise veya logo[0] boş ise, boş bir div döndür
  if (!logo || !logo[0]) {
    return <div>Loading...</div>; // veya hata mesajı veya başka bir şey
  }

  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat h-96 pt-20" style={{ backgroundImage: `url(${logo[0].searchbackground})` }}>
        <div className='container'>
          <div className='text-4xl font-normal text-black'>
            {logo[0].description} <br /> <b> {logo[0].title} </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
