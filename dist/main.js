/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/instructions.js":
/*!*************************************!*\
  !*** ./src/modules/instructions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instruction: () => (/* binding */ instruction)
/* harmony export */ });
function instruction() {
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


/***/ }),

/***/ "./src/modules/mainScreen.js":
/*!***********************************!*\
  !*** ./src/modules/mainScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scroll: () => (/* binding */ scroll)
/* harmony export */ });
function scroll() {
   const scrollButton = document.getElementById('scrollButton');
   const instructions = document.querySelector('.instructions__page');

   scrollButton.addEventListener('click', () => {
      instructions.scrollIntoView({ behavior: 'smooth' });
   });
}

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popup: () => (/* binding */ popup)
/* harmony export */ });
function popup() {
   const popup = document.querySelector('.popup__page');
   const openButton = document.getElementById('openButton');
   const closeButton = document.getElementById('closeButton');

   function openPopup() {
      if (!popup.classList.contains('none-popup')) {
         popup.classList.add('none-popup');
      }
   }

   openButton.addEventListener('click', openPopup);
   
   function closePopup() {
      if (popup.classList.contains('none-popup')) {
         popup.classList.remove('none-popup');
      }
   }

   closeButton.addEventListener('click', closePopup);
}

/***/ }),

/***/ "./src/modules/service.js":
/*!********************************!*\
  !*** ./src/modules/service.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   service: () => (/* binding */ service)
/* harmony export */ });
function service() {
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


/***/ }),

/***/ "./src/modules/support.js":
/*!********************************!*\
  !*** ./src/modules/support.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   support: () => (/* binding */ support)
/* harmony export */ });
function support() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _src_modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/modules/popup */ "./src/modules/popup.js");
/* harmony import */ var _src_modules_mainScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/modules/mainScreen */ "./src/modules/mainScreen.js");
/* harmony import */ var _src_modules_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/modules/service */ "./src/modules/service.js");
/* harmony import */ var _src_modules_support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/modules/support */ "./src/modules/support.js");
/* harmony import */ var _src_modules_instructions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/modules/instructions */ "./src/modules/instructions.js");







(0,_src_modules_popup__WEBPACK_IMPORTED_MODULE_1__.popup)();
(0,_src_modules_mainScreen__WEBPACK_IMPORTED_MODULE_2__.scroll)();
(0,_src_modules_service__WEBPACK_IMPORTED_MODULE_3__.service)();
(0,_src_modules_support__WEBPACK_IMPORTED_MODULE_4__.support)();
(0,_src_modules_instructions__WEBPACK_IMPORTED_MODULE_5__.instruction)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map