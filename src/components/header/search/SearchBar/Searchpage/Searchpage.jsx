import React, { useEffect } from 'react';

function Searchpage({ results, selectedValues }) {
  useEffect(() => {
    if (selectedValues.id && selectedValues.city !== "") {
      // İlk istek: Ankara havaalanını ara ve sonucu konsola yazdır
      fetch("https://tatilde.diji.app/api/flight/airport/?keyword=" + selectedValues.city)
        .then(response => response.json())
        .then(() => {

          // İkinci istek: Istanbul havaalanını ara ve sonucu konsola yazdır
          fetch("https://tatilde.diji.app/api/flight/airport/?keyword=Istanbul")
            .then(response => response.json())
            .then(result2 => {

              // Üçüncü istek: Uçuş aramasını yap ve sonucu konsola yazdır
              fetch("https://tatilde.diji.app/api/flight/gateway/search/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  fly_type: "OW",
                  adult_count: "1",
                  child_count: "0",
                  infant_count: "0",
                  senior_count: "0",
                  flight_class: "EC",
                  departure_airport: selectedValues.id,
                  arrival_airport: result2.results[0].id,
                  departure_date: "2023-10-01",
                  return_date: null,
                }),
              })
                .then(response => response.json())
                .then(data => {
                  console.log("Uçuş Arama Sonucu:", data);

                  // Dördüncü istek: Oturum benzersizliği ile uçuş aramasını tekrar yap ve sonucu konsola yazdır
                  const session_unique = data.session_unique;
                  fetch(`https://tatilde.diji.app/api/flight/gateway/search/?session_unique=${session_unique}`)
                    .then(response => response.json())
                    .then(data => {
                      console.log("Tekrarlanan Uçuş Arama Sonucu:", data);
                    })
                    .catch(error => {
                      console.error("Tekrarlanan Uçuş Arama Hatası:", error);
                    });
                })
                .catch(error => {
                  console.error("Uçuş Arama Hatası:", error);
                });
            })
            .catch(error => {
              console.error("Istanbul Havaalanı Hatası:", error);
            });
        })
        .catch(error => {
          console.error("Ankara Havaalanı Hatası:", error);
        });
    } else {
      console.log("BOŞ");
    }

  }, [selectedValues]);

  return (
    <div>

    </div>
  );
}

export default Searchpage;
