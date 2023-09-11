import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
function Campaigns() {
  const [campaigns, setCampaigns] = useState(null); // Başlangıçta null değeri kullanın
  const [loading, setLoading] = useState(true); // Veriler yüklenene kadar true olarak ayarla
  const local = "http://127.0.0.1:8000/flight/api"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${local}/campaigns/`);
        if (!response.ok) {
          throw new Error('API isteği başarısız');
        }
        const data = await response.json();
        setCampaigns(data); // Veriler geldiğinde campaigns verisini güncelle

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
      <div className="container">
        <div>
          <div className='title-primary'>
            Kampanyalar
          </div>
          <div className='title-secondary'>
            En avantajlı kampalarda bizde
          </div>
        </div>
        <Splide
          options={{
            type: 'loop',
            perPage: 4, // Her sayfada 4 slayt görünecek
            gap: '1rem', // Slaytlar arasında boşluk ekler
            autoplay: true,
          }}>
          {campaigns.map((item, index) => (
            <SplideSlide key={index}>
              <div className='border rounded-lg'>
                <img src={item.CampaingsPhoto} alt={item.title} className="rounded-lg h-[185px] w-full " />
                <div className='h-[106px] grid items-center ps-5 pt-2 pb-2'>
                  <div className='text-[16px] text-black' >
                    {item.title}
                  </div>
                  <div className='text-[14px] text-secondary-color font-[400]'>
                    Kampanyayı İncele
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div >
  );
}

export default Campaigns;
