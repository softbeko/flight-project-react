import React from 'react';

const backgroundurl = "https://tatilde.diji.app/assets/homepage/Group_2888_eNDAedp.jpg"

function Search() {
    return (
        <div>
            <div className="bg-cover bg-center bg-no-repeat h-96 pt-20" style={{ backgroundImage: `url('${backgroundurl}')` }}>
                <div className='container'>
                    <div className='text-4xl font-normal text-black'>
                        For your travel plans <br /> <b>Tatilde.com</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
