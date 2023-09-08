import React from 'react';

function Navbar() {
    return (
        <div className='container h-20'>
            <nav className="p-4 flex justify-between items-center">
                <img src="https://tatilde.diji.app/assets/app/logo.svg" alt="Logo" width="103px" height="auto" />
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="btn-primary text-primary-color">Online İşlemler</a>
                    </li>
                    <li>
                        <a href="#">TR - ₺</a>
                    </li>
                    <li className='flex space-x-3' >
                        <div>
                            <a className='text-secondary-color' href="#">Üye ol</a>
                        </div>
                        <div>
                            <a className='btn-primary bg-primary-color text-white border-0 px-11 rounded ' href="#"> Giriş </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
