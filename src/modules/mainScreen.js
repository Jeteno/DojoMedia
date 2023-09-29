export function scroll() {
   const scrollButton = document.getElementById('scrollButton');
   const instructions = document.querySelector('.instructions__page');

   scrollButton.addEventListener('click', () => {
      instructions.scrollIntoView({ behavior: 'smooth' });
   });
}