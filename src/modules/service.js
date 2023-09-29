export function service() {
   const serviceContent = [
      {
         image: '../img/serviceContent/team.svg',
         hoverImage: '../img/serviceContent/team-hover.svg',
         alt: 'Team',
         title: 'Без очереди',
         subtitle: ['Обслуживание в выделенной зоне', 'Предоставление отдельного кабинета для переговоров']
       },
       {
         image: '../img/serviceContent/Person.svg',
         hoverImage: '../img/serviceContent/Group-hover.svg',
         alt: 'Person',
         title: 'Персональный менеджер',
         subtitle: ['Индивидуальный подход к решению Ваших задач', 'Информационная поддержка']
       },
       {
         image: '../img/serviceContent/chat-bubble.svg',
         hoverImage: '../img/serviceContent/chat-bubble-hover.svg',
         alt: 'Chat',
         title: 'Экспертное консультирование',
         subtitle: ['Предварительная экспертиза', 'Подготовка необходимых документов']
       },
       {
         image: '../img/serviceContent/clock.svg',
         hoverImage: '../img/serviceContent/clock-hover.svg',
         alt: 'Clock',
         title: 'Исполнение операций в срок',
         subtitle: ['Исполнение операций в день предоставления документов', 'Выезд к клиенту', 'Доставка документов курьером']
       }
   ];

   const serviceConteiner = document.querySelector('.service__cards');

   function changeImage(event) {
      const card = event.target.closest('.service__card');
      const imgElement = card.querySelector('.service__card-img');
      const hoverImage = card.dataset.hoverImage;
      imgElement.src = hoverImage;
      card.removeEventListener('mouseover', changeImage);
      card.addEventListener('mouseout', restoreImage);
   }
   
   function restoreImage(event) {
      const card = event.target.closest('.service__card');
      const imgElement = card.querySelector('.service__card-img');
      const originalImage = card.dataset.originalImage;
      imgElement.src = originalImage;
      card.removeEventListener('mouseout', restoreImage);
      card.addEventListener('mouseover', changeImage);
   }

   function renderCard(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
         const subtitles = item.subtitle
         .map((sub) => `<p class="content__subtitle">${sub}</p>`)
         .join("");
    
        const cardBlock = `
         <div class="service__card" data-original-image="${item.image}" data-hover-image="${item.hoverImage}">            
            <div class="service__card-image">
              <img src="${item.image}" alt="${item.alt}" class="service__card-img">
            </div>
            <div class="service__card-content-title">
               <h3 class="content__title">${item.title}</h3>
            </div>
            <div class="service__card-content-subtitle">
               ${subtitles}
            </div>
          </div>
        `;
    
        cards += cardBlock;
      });
    
      serviceConteiner.innerHTML = cards;

      const cardsElements = serviceConteiner.getElementsByClassName('service__card');
      Array.from(cardsElements).forEach(card => {
         card.addEventListener('mouseenter', changeImage);
         card.addEventListener('mouseleave', restoreImage);
      });
   };

   renderCard(serviceContent);
}
