import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Campaigns() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Splide
        options={{
          type: 'loop',
          perPage: 4, // Her sayfada 4 slayt görünecek
          gap: '1rem', // Slaytlar arasında boşluk ekler
          autoplay: true,
        }}
      >
        <SplideSlide>
          <img src="https://www.nereyebilet.com/assets/gallery/webp/2x/anadolujet-kampanya.webp" alt="Image 1" className="rounded-lg w-full " />
        </SplideSlide>
        <SplideSlide>
          <img src="https://www.nereyebilet.com/assets/gallery/webp/2x/yurtdisi-kampanya.webp" alt="Image 2" className="rounded-lg w-full " />
        </SplideSlide>
        <SplideSlide>
          <img src="https://www.nereyebilet.com/assets/gallery/webp/2x/yurtdisi-kampanya.webp" alt="Image 3" className="rounded-lg w-full " />
        </SplideSlide>
        <SplideSlide>
          <img src="https://www.nereyebilet.com/assets/gallery/webp/2x/rectangle-2960_kMTMAYQ.webp" alt="Image 4" className="rounded-lg w-full " />
        </SplideSlide>
        <SplideSlide>
          <img src="https://www.nereyebilet.com/assets/gallery/webp/2x/rectangle-2960_kMTMAYQ.webp" alt="Image 4" className="rounded-lg w-full " />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Campaigns;
