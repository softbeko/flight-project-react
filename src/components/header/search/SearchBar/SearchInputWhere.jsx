import React from 'react';
import { FaPlane } from 'react-icons/fa';

function SearchInputWhere({ results, onSelect }) {
  return (
    <div>
      <div style={{ filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.16))' }} className='list'>
        <ul className='absolute bg-white w-[498px] z-10 h-auto max-h-64 overflow-y-scroll top-[12px] left-[20px] '>
          <li className=' h-[43px] p-2 pl-4 flex items-center border-b text-[15px] color-[#b5b5b5] font-[600]' onClick={() => onSelect('')}>
            Select City or Airport
          </li>
          {results.map((result, index) => (
            <li
              className='grid px-4 items-center h-14 hover:bg-[#f5f5f5] cursor-pointer'
              key={index}
              onClick={() => onSelect({name :result.name , id: result.id, city:result.city , code: result.code , country:result.country , country_code : result.country_code})} // result.code'u iletiyoruz
            >
              <div className='flex items-center'>
                <div className='pr-3'>
                  <FaPlane style={{ color: '#fdb23d', width: "20px", height: "20px" }} />
                </div>
                <div>
                  <div id={result.id} className='color-[#a1a1a1] text-[11px]'>
                    {result.city} , {result.country}
                  </div>
                  <span className='text-black text-[14px] font-[600]'>
                    {result.name}
                  </span>
                </div>
                <div className='ml-auto text-black text-[14px] font-[600]'>
                  {result.code}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchInputWhere;
