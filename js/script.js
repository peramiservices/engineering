let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
};

 

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

window.addEventListener('DOMContentLoaded', () => {
   const sendMessageBtn = document.querySelector('#send-message-btn');
   if (sendMessageBtn) {
      sendMessageBtn.addEventListener('click', () => {
         const name = document.querySelector('#name').value;
         const email = document.querySelector('#email').value;
         const phone = document.querySelector('#phone').value;
         const message = document.querySelector('#message').value;

         // Use your PHP script to send the email
         const formData = new FormData();
         formData.append('name', name);
         formData.append('email', email);
         formData.append('phone', phone);
         formData.append('message', message);

         fetch('php/send-email.php', {
            method: 'POST',
            body: formData
         })
         .then(response => {
            if (response.ok) {
               console.log('Email sent successfully');
            } else {
               console.error('Error sending email');
            }
         })
         .catch(error => {
            console.error('Error sending email:', error);
         });
      });
   }
});
