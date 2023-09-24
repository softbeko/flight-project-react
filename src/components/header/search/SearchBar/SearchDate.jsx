import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

function SearchDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [arrivalDate, setArrivalDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = format(date, 'dd/MM/yyyy');
        console.log("Kalkış Tarihi:", formattedDate);
    };

    const arrivalDateChange = (date) => {
        setArrivalDate(date);
        const formattedDate = format(date, 'dd/MM/yyyy');
        console.log("Kalkış Tarihi:", formattedDate);
    };

    return (
        <div className='flex '>
            <div>
                <div className='search-minitext'>
                    Kalkış Tarihi
                </div>
                <div className='relative z-10'>
                    <div className='input-icon'>
                        <img
                            src="https://tatilde.diji.app/assets/icons/searchbar-date.svg"
                            alt="Date"
                        />
                    </div>

                </div>
                <DatePicker
                    className='w-5/6'
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Tarih Seçiniz"
                />
            </div>
            <div >
                <div className='search-minitext'>
                    Dönüş Tarihi
                </div>
                <div className='relative z-10'>
                    <div className='input-icon'>
                        <img
                            src="https://tatilde.diji.app/assets/icons/searchbar-date.svg"
                            alt="Date"
                        />
                    </div>
                </div>
                <DatePicker
                    className='w-5/6'
                    selected={arrivalDate}
                    onChange={arrivalDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Tarih Seçiniz"
                />
            </div>

        </div>
    );
}

export default SearchDate;
