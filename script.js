
 // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
        const hamburgerbutton = document.querySelector('.hamburger-button');
        const mobileMenu = document.querySelector('.mobile-menu');

        hamburgerbutton.addEventListener('click', () => 
            mobileMenu.classList.toggle('active')
        );
        });
      // Select all FAQ headers
const faqHeaders = document.querySelectorAll('.faq-main-h');

faqHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const faqItem = header.parentElement;
    const icon = header.querySelector('i');

    // Collapse all other FAQs
    document.querySelectorAll('.faq-main').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('open');
        item.querySelector('.faq-main-b').style.display = 'none';
        const icon = item.querySelector('.faq-main-h i');
        if (icon) {
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus');
        }
      }
    });

    // Toggle current FAQ
    const content = faqItem.querySelector('.faq-main-b');
    const isOpen = faqItem.classList.contains('open');

    if (isOpen) {
      content.style.display = 'none';
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
      faqItem.classList.remove('open');
    } else {
      content.style.display = 'block';
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
      faqItem.classList.add('open');
    }
  });
});
