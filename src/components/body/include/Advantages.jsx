import React from 'react';

const advantagesData = [
  {
    title: "Kredi Kartsız Rezervasyon Yapan Oteller",
    imageUrl: "https://tatilde.diji.app/assets/icons/no-card.svg",
  },
  {
    title: "Her şey Dahil Otellerde Avantajlı Fiyatlar!",
    imageUrl: "https://tatilde.diji.app/assets/icons/sale.svg",
  },
  {
    title: "Erken Rezervasyon Otelleri",
    imageUrl: "https://tatilde.diji.app/assets/icons/earn-hotel.svg",
  },
  {
    title: "Yurtiçi Uçuşlarda Avantajlı Fırsatları Yakala!",
    imageUrl: "https://tatilde.diji.app/assets/icons/plane.svg",
  },
];

function Advantages() {
  return (
    <div className='container my-10'>
      <div className='gap-4 grid sm:grid-cols-2 xl:grid-cols-4'>
        {advantagesData.map((advantage, index) => (
          <div key={index} className='advantages-card'>
            <div className="grid grid-cols-3 gap-4 flex items-center">
              <div className="col-span-2 ml-5 text-[#b5b5b5] ">{advantage.title}</div>
              <div className="ml-auto mr-5">
                <img src={advantage.imageUrl} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Advantages;
