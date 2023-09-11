import React, { useState, useEffect } from 'react';
import Navbar from './components/header/navbar/navbar';
import Search from './components/header/search/search';
import Body from './components/body/body';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function App() {
  const [logo, setLogo] = useState(null); // Başlangıçta null değeri kullanın
  const [loading, setLoading] = useState(true); // Veriler yüklenene kadar true olarak ayarla

  const local = "http://127.0.0.1:8000/flight/api"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${local}/logo/`);
        if (!response.ok) {
          throw new Error('API isteği başarısız');
        }
        const data = await response.json();
        setLogo(data); // Veriler geldiğinde logo verisini güncelle
        setLoading(false); // Veriler başarıyla yüklendikten sonra yüklemeyi durdur
      } catch (error) {
        setLoading(false); // Hata durumunda da yükleme işlemini durdur
      }
    };

    fetchData();
  }, []);

  // Veriler yüklenirken kullanıcıya bir yükleniyor göstergesi göstermek için kullanılabilir
  if (loading) {
    return;
  }

  return (
    <div>
      <Navbar logo={logo} />
      <Search logo={logo} />
      <Body />
    </div>
  );
}

export default App;
