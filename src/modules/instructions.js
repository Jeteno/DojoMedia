export function instruction() {
   const instructionContent = [
      {
         number: '../img/instructions/01.svg',
         altNumber: '01',
         image: '../img/instructions/paper.svg',
         alt: 'Paper',
         subtitle: 'Закажите звонок или заполните заявку'
       },
       {
         number: '../img/instructions/02.svg',
         altNumber: '02',
         image: '../img/instructions/smartphone.svg',
         alt: 'Smartphone',
         subtitle: 'Мы перезвоним Вам в течение 5 минут'
       },
       {
         number: '../img/instructions/03.svg',
         altNumber: '03',
         image: '../img/instructions/support.svg',
         alt: 'Support',
         subtitle: 'Персональный менеджер предложит набор услуг согласно Вашим задачам'
       },
   ];

   const instructionsConteiner = document.querySelector('.instructions__cards');

   function renderCard(apiData) {
      let cards = '';
      let result = apiData;
    
      result.forEach(item => {
        const cardBlock = `
         <div class="instructions__card">
            <div class="instructions__image">
               <img src="${item.number}" alt="${item.altNumber}" class="instructions-img">
            </div>
            <div class="instructions__content">
               <div class="instructions__content-image">
                  <img src="${item.image}" alt="Paper" class="instructions__content-img">
               </div>
               <div class="instructions__content-text">
                  <p class="instructions__content-text-p">
                     ${item.subtitle}
                  </p>
               </div>
            </div>
         </div>
        `;
    
        cards += cardBlock;
      });
    
      instructionsConteiner.innerHTML = cards;
   };

   renderCard(instructionContent);
}
