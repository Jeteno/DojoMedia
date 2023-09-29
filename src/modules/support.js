export function support() {
   const supportContent = [
      {
         image: '../img/support/Цай.png',
         alt: 'Цай',
         title: 'Андрей Цай',
         subtitle: 'Директор по работе с ключевыми клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '414',
         email: 'Tsay-AY@rostatus.ru'
      },
      {
         image: '../img/support/WEB_dzhiva.png',
         alt: 'Юлия Федотова',
         title: 'Юлия Федотова',
         subtitle: 'Директор по работе с клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '424',
         email: 'fedotova-jb@rostatus.ru'
      },
      {
         image: '../img/support/Матвеев.png',
         alt: 'Никита Матвеев',
         title: 'Никита Матвеев',
         subtitle: 'Начальник управления по работе с ключевыми клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '279',
         email: 'Matveev-NS@rostatus.ru'
      },
      {
         image: '../img/support/Орлов.png',
         alt: 'Артем Орлов',
         title: 'Артем Орлов',
         subtitle: 'Менеджер управления по работе с ключевыми клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '419',
         email: 'Orlov-AR@rostatus.ru'
      },
      {
         image: '../img/support/Алексеенкова.png',
         alt: 'Наталья Алексеенкова',
         title: 'Наталья Алексеенкова',
         subtitle: 'Ведущий специалист отдела по работе с корпоративными клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '209',
         email: 'Alekseenkova-NA@rostatus.ru'
      },
      {
         image: '../img/support/Коновалова.png',
         alt: 'Ольга Коновалова',
         title: 'Ольга Коновалова',
         subtitle: 'Начальник отдела по работе с зарегистрированными лицами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '225',
         email: 'Konovalova-ON@rostatus.ru'
      },
      {
         image: '../img/support/Цыганков.png',
         alt: 'Александр Цыганков',
         title: 'Александр Цыганков',
         subtitle: 'Ведущий специалист отдела по работе с корпоративными клиентами',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '224',
         email: 'Tsigankov-AS@rostatus.ru'
      },
      {
         image: '../img/support/Зернова.png',
         alt: 'Екатерина Зернова',
         title: 'Екатерина Зернова',
         subtitle: 'Начальник контакт-центра',
         tel: '+7 (495) 280-04-87',
         telLink: '+74952800487',
         dob: '418',
         email: 'Zernova-EY@rostatus.ru'
      },
   ];

   const supportConteiner = document.querySelector('.support__cards');

   function renderCard(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <div class="support__card">
            <div class="support__card-content">
               <div class="support__card-image">
                  <img src="${item.image}" alt="${item.alt}" class="support__card-img">
               </div>
               <div class="support__card-title">
                  <h3 class="support__card-title-h">
                     ${item.title}
                  </h3>
               </div>
               <div class="support__card-subtitle">
                  <p class="support__card-subtitle-p">
                     ${item.subtitle}
                  </p>
               </div>
            </div>
            <div class="support__card-connection">
               <a href="tel:${item.telLink}" class="support__card-connection-link connection-tel" >
                  ${item.tel} доб. ${item.dob}
               </a>
               <a href="mailto:${item.email}" class="support__card-connection-link connection-email">
                  ${item.email}
               </a>
            </div>
         </div>
        `;
    
        cards += cardBlock;
      });
    
      supportConteiner.innerHTML = cards;
   };

   renderCard(supportContent);
}
