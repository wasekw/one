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

      const getResource = async (url) => {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error(`Could not fetch ${url}, error status ${result.status}`);
        }

        return await result.json();
      };

      // getResource('http://localhost:3000/menu')
      // .then(data => createCart(data));


      // function  createCart(data) {
      //   data.forEach(({img, altimg, title, descr, price}) => {
      //     const element = document.createElement('div');

      //     element.classList.add('menu__item');

      //     element.innerHTML = `
      //             <img src=${img} alt=${altimg}>
      //             <h3 class="menu__item-subtitle">${title}</h3>
      //             <div class="menu__item-descr">${descr}</div>
      //             <div class="menu__item-divider"></div>
      //             <div class="menu__item-price">
      //                 <div class="menu__item-cost">Цена:</div>
      //                 <div class="menu__item-total"><span>${price * 37}</span> грн/день</div>
      //             </div>
      //     `;

      //     document.querySelector('.menu .container').append(element);
      //   });

      // };


      // getResource('http://localhost:3000/menu')
      // .then(data => {
      //   data.forEach(({img, altimg, title, descr, price}) => {
      //     new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      //   });
      // });

      axios.get('http://localhost:3000/menu')
      .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
      });

      // new MenuCard(
      //   "img/tabs/vegy.jpg",
      //   "vegy",
      //   'Меню "Фитнес"',
      //   'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      //   9,
      //   ".menu .container"
      // ).render();

      // new MenuCard(
      //   "img/tabs/elite.jpg",
      //   "elite",
      //   'Меню “Премиум”',
      //   'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
      //   29,
      //   ".menu .container"
      // ).render();

      // new MenuCard(
      //   "img/tabs/post.jpg",
      //   "post",
      //   'Меню "Постное"',
      //   'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
      //   21,
      //   ".menu .container"
      // ).render();

      //    Forms

      const forms = document.querySelectorAll('form');

      const message = {
        loading: 'img/form/spinner.svg',
        success: 'Загрузка успешно завершена!',
        failure: 'О-п-с Что-то пошло не так...'
      }

      forms.forEach(el => {
        bindPostData(el);
      })

      const postData = async (url, data) => {
        const result = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: data
        });

        return await result.json();
      };

      function bindPostData(form) {
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
              
              const formData = new FormData(form);

              const json = JSON.stringify(Object.fromEntries(formData.entries()));

              // const object = {};

              // formData.forEach(function(value, key) {
              //   object[key] = value;
              // });

             
              // fetch('server.php', {
              //   method: "POST",
              //   headers: {
              //     'Content-type': 'application/json'
              //   },
              //   body: JSON.stringify(object)
              // })

              postData('http://localhost:3000/requests', json)
              .then(data =>  {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
              }).catch(() => {
                showThanksModal(message.failure);
              }).finally(() => {
                form.reset();
              })

              // const request = new XMLHttpRequest();
              // request.open('POST', 'server.php');
              // // request.setRequestHeader('Content-type', 'multipart/form-data');
              // request.setRequestHeader('Content-type', 'application/json');
              // const formData = new FormData(form);
              // const object = {};

              // formData.forEach(function(value, key) {
              //   object[key] = value;
              // });

              // const json = JSON.stringify(object);

              // console.log(json)
              // request.send(json);

              // request.addEventListener('load', () => {
              //   if (request.status === 200) {
              //     console.log(request.response);
              //     showThanksModal(message.success);
              //     form.reset();
              //     // const inputForm = form.querySelectorAll('input');
              //     // inputForm.forEach(el => {
              //     //   el.value = '';
              //     // });
              //     statusMessage.remove();
              //   } else {
              //     showThanksModal(message.failure);
              //   }
              // });

              //       USING FETCH
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

      fetch('db.json')
      .then(data => data.json())
      .then(res => console.log(res));


      // SLIDER

      // const currentSlide = document.querySelector('#current');
      // const totalSlide = document.querySelector('#total');
      // const prevArrow = document.querySelector('.offer__slider-prev');
      // const nextArrow = document.querySelector('.offer__slider-next');
      // const slides = document.querySelectorAll('.offer__slide');

      //   // INICIALISATION

      // let slideIndex = 1;
      // showSlides(slideIndex);
     
      // if (slides.length < 10) {
      //   totalSlide.textContent = `0${slides.length}`;
      // } else {
      //   totalSlide.textContent = slides.length;
      // }


      // function showSlides(index) {
      //   if (index > slides.length) {
      //     slideIndex = 1;
      //   }

      //   if (index < 1) {
      //     slideIndex = slides.length;
      //   }

      //   slides.forEach(slide => slide.style.display = 'none');
      //   slides[slideIndex - 1].style.display = 'block';

      //   if (slides.length < 10) {
      //     currentSlide.textContent = `0${slideIndex}`
      //   } else {
      //     currentSlide.textContent = slideIndex;
      //   }
      // }

      // function slidePlus(index) {
      //   showSlides(slideIndex += index)
      // }

      // prevArrow.addEventListener('click', () => {
      //   slidePlus(-1);
      //   // currentSlide.textContent = `0${slideIndex}`;
      // });

      // nextArrow.addEventListener('click', () => {
      //   slidePlus(1);
      //   // currentSlide.textContent = `0${slideIndex}`;
      // });

      // SLIDER II

      const sliderWrapper = document.querySelector('.offer__slider-wrapper');
      const slidesField = document.querySelector('.offer__slider-inner');
      const currentSlide = document.querySelector('#current');
      const totalSlide = document.querySelector('#total');
      const prevArrow = document.querySelector('.offer__slider-prev');
      const nextArrow = document.querySelector('.offer__slider-next');
      const slides = document.querySelectorAll('.offer__slide');
      const widthSlide = window.getComputedStyle(sliderWrapper).width;

      const slider = document.querySelector('.offer__slider');

      let slideIndex = 1;
      let offset = 0;

      if (slides.length < 10) {
        totalSlide.textContent = `0${slides.length}`;
        currentSlide.textContent = `0${slideIndex}`
      } else {
        totalSlide.textContent = slides.length;
        currentSlide.textContent = slideIndex;
      }

      slidesField.style.width = 100 * slides.length + '%';
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all';

      sliderWrapper.style.overflow = 'hidden';
      slides.forEach(slide => {
        slide.style.width = widthSlide;

      });

      slider.style.position = 'relative';

      const indicators = document.createElement('ol');
      const dots = [];

      // function dots(arr) {
      //   arr.forEach(dot => dot.style.opacity = .5);
      //   arr[slideIndex - 1].style.opacity = 1;
      // }

      

      indicators.classList.add('carousel-indicators');
      indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
      `;

      slider.append(indicators);

      for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i === 0) {
          dot.style.opacity = 1
        }

        indicators.append(dot);
        dots.push(dot);
      }

      nextArrow.addEventListener('click', () => {
      
        if (offset == (+widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1))) {  // '555px'
          offset = 0;
        } else {
          offset += +widthSlide.slice(0, widthSlide.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
          slideIndex = 1;
        } else {
          slideIndex++;
        }

        if (slides.length < 10) {
          currentSlide.textContent = `0${slideIndex}`;
        } else {
          currentSlide.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = .5);
        dots[slideIndex - 1].style.opacity = 1;

      });


    prevArrow.addEventListener('click', () => {
      if (offset == 0) {  // '555px'
        offset = (+widthSlide.slice(0, widthSlide.length - 2) * (slides.length - 1));
      } else {
        offset -= +widthSlide.slice(0, widthSlide.length - 2);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex === 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }

      if (slides.length < 10) {
        currentSlide.textContent = `0${slideIndex}`;
      } else {
        currentSlide.textContent = `${slideIndex}`;
      }

      dots.forEach(dot => dot.style.opacity = .5);
      dots[slideIndex - 1].style.opacity = 1;

      
    });

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = (+widthSlide.slice(0, widthSlide.length - 2) * (slideTo - 1));

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
          currentSlide.textContent = `0${slideIndex}`;
        } else {
          currentSlide.textContent = `${slideIndex}`;
        }

        dots.forEach(dot => dot.style.opacity = .5);
        dots[slideIndex - 1].style.opacity = 1;
    });
  });
});


