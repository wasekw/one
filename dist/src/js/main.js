window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabsContent() {
        tabsContent.forEach(el => {
            el.style.display = 'none';
            // el.classList.add('hide');
            // el.classList.remove('show', 'fade');
        });

        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        })
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        // tabsContent[i].classList.add('show', 'fade');
        // tabsContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((el, ind) => {
                if (target == el) {
                    hideTabsContent();
                    showTabsContent(ind);
                }
            })
        }
    })

})