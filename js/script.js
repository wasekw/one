window.addEventListener('DOMContentLoaded', function() {

  // Tabs
  
    let tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
          
          tabsContent.forEach(item => {
              item.classList.add('hide');
              item.classList.remove('show', 'fade');
          });

          tabs.forEach(item => {
              item.classList.remove('tabheader__item_active');
          });
    }

    function showTabContent(i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
      }
      
      hideTabContent();
      showTabContent();

    tabsParent.addEventListener('click', function(event) {
      const target = event.target;
      if(target && target.classList.contains('tabheader__item')) {
              tabs.forEach((item, i) => {
                  if (target == item) {
                      hideTabContent();
                      showTabContent(i);
                  }
              });
      }
      });
      
      // Timer

      const deadLine = '2023-04-12';

      function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endTime) - Date.parse(new Date());
        if (t < 0) {
          days = 0;
          hours = 0;
          minutes = 0;
          seconds = 0;
        } else {
          days = Math.floor(t / (1000 * 60 * 60 * 24));
          hours = Math.floor((t / (1000 * 60 * 60) % 24));
          minutes = Math.floor((t / (1000 * 60) % 60));
          seconds = Math.floor((t / 1000) % 60);
        }
      
        // console.log(t);
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        }
      };

      function getZero(num) {
        if (num >= 0 && num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      }

      function setTimer(selector, endTime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);
      
        function updateClock() {
          const t = getTimeRemaining(endTime);
          // console.log(t);

          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        }
        updateClock()
      }
      setTimer('.timer', deadLine);

      // Modal

      const btnModal = document.querySelectorAll('[data-modal]');
      const modal = document.querySelector('.modal');
      // const btnModalClose = document.querySelector('[data-close]');

      function showModal() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'
        clearTimeout(modalTimerId);
      }

      btnModal.forEach(el => {
        el.addEventListener('click', showModal
        // () => {
          // modal.style.display = 'block';

          // modal.classList.add('show', 'fade');
          // modal.classList.remove('hide');

          // modal.classList.toggle('show');
          // document.body.style.overflow = 'hidden';
        // }
        );
      });

      function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
      }

      // btnModalClose.addEventListener('click', () => {
        // modal.style.display = 'none';

        // modal.classList.add('hide');
        // modal.classList.remove('show', 'fade');

        // modal.classList.toggle('show');
        // document.body.style.overflow = '';

        // closeModal();
      // });

      modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target === modal || target.getAttribute('data-close') == '') {
          // modal.classList.toggle('show');
          // document.body.style.overflow = '';

          closeModal();
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
          closeModal();
        }
      });

      const modalTimerId = setTimeout(showModal, 50000);

      function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
          showModal();
          window.removeEventListener('scroll', showModalByScroll);
        }
      }

      window.addEventListener('scroll', showModalByScroll);

      // Use CLASS

      class MenuCard {
        constructor(src, alt, title, descrip, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descrip = descrip;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 38;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price *= this.transfer;
        }

        render() {
          const element = document.createElement('div');
          this.classes.forEach(className => element.classList.add(className));
          element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descrip}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
                `;

          this.parent.append(element);

        }
      }

      // const div = new MenuCard();
      // div.render();

      new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
      ).render();

      new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        29,
        ".menu .container"
      ).render();

      new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
        21,
        ".menu .container"
      ).render();

      //    Forms

      const forms = document.querySelectorAll('form');

      const message = {
        loading: 'img/form/spinner.svg',
        success: 'Загрузка успешно завершена!',
        failure: 'О-п-с Что-то пошло не так...'
      }

      forms.forEach(el => {
        postData(el);
      })

      function postData(form) {
          form.addEventListener('submit', (e) => {
              e.preventDefault();

              const statusMessage = document.createElement('img');
              statusMessage.src = message.loading;
              statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
              `;
              // form.append(statusMessage);
              form.insertAdjacentElement('afterend', statusMessage);
              

              const request = new XMLHttpRequest();
              request.open('POST', 'server.php');
              // request.setRequestHeader('Content-type', 'multipart/form-data');
              request.setRequestHeader('Content-type', 'application/json');
              const formData = new FormData(form);
              const object = {};

              formData.forEach(function(value, key) {
                object[key] = value;
              });

              const json = JSON.stringify(object);

              console.log(json)
              request.send(json);

              request.addEventListener('load', () => {
                if (request.status === 200) {
                  console.log(request.response);
                  showThanksModal(message.success);
                  form.reset();
                  // const inputForm = form.querySelectorAll('input');
                  // inputForm.forEach(el => {
                  //   el.value = '';
                  // });
                  statusMessage.remove();
                } else {
                  showThanksModal(message.failure);
                }
              });
          });
      }

      function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        showModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
              <div data-close class="modal__close">x</div>
              <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add('show');
          prevModalDialog.classList.remove('hide');
          closeModal();
        }, 4000)
      }
});


