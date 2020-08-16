document.addEventListener('DOMContentLoaded', () => {

   const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

   function hideTabContent() {
      tabsContent.forEach(item => {
         // item.style.display = 'none';
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      })
      tabs.forEach(item => {
         item.classList.remove('tabheader__item_active');
      })
   }

   function showTabContent(i = 0) {
      // tabsContent[i].style.display = 'block'
      tabs[i].classList.add('tabheader__item_active')
      tabsContent[i].classList.remove('hide');
      tabsContent[i].classList.add('show','fade');

   }

   hideTabContent();
   showTabContent();

   tabsParent.addEventListener('click', (e)=> {
      const target = e.target
      if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
         if (target == item) {
            hideTabContent();
            showTabContent(i);
         }
      })
      }
   })

   console.log('hello');
})