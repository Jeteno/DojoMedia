export function popup() {
   const buttons = document.querySelectorAll('.form-btn');
   const title = document.querySelector('.popup__tile');

   buttons.forEach(function(button) {
       button.addEventListener('click', function(event) {
           event.preventDefault();
       });
   });

   const popup = document.querySelector('.popup__container');
   const openButton = document.getElementById('openButton');
   const openButtonInstruction = document.getElementById('openButtonInstruction');
   const closeButton = document.getElementById('closeButton');
   const exampleInputTextInstruction = document.getElementById('exampleInputTextInstruction');
   const exampleInputTelInstruction = document.getElementById('exampleInputTelInstruction');

   function openPopup() {
       if (popup.classList.contains('none-popup')) {
           popup.classList.remove('none-popup');
       }
   }

   openButton.addEventListener('click', function() {
      title.textContent = 'Пожалуйста, проверьте данные, произошла ошибка ввода данных';
      openPopup();
    });
   openButtonInstruction.addEventListener('click', function() {
      if (exampleInputTextInstruction.value !== '' && exampleInputTelInstruction.value !== '') {
         title.textContent = 'Спасибо, Ваши данные отправлены, в ближайшее время с Вами свяжется менеджер';
         openPopup();
      }
    });

   function closePopup() {
       if (!popup.classList.contains('none-popup')) {
           popup.classList.add('none-popup');
       }
   }   

   closeButton.addEventListener('click', closePopup);
}