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
  const btnModalClose = document.querySelector('[data-close]');

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

  btnModalClose.addEventListener('click', () => {
    // modal.style.display = 'none';

    // modal.classList.add('hide');
    // modal.classList.remove('show', 'fade');

    // modal.classList.toggle('show');
    // document.body.style.overflow = '';

    closeModal();
  });

  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modal) {
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

  const modalTimerId = setTimeout(showModal, 3000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      showModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

});