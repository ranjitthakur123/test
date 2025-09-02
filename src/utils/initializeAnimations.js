
import WOW from 'wow.js';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CountUp as CountUpJs } from 'countup.js';

// Initialize WOW.js animations
export const initializeWow = () => {
  if (typeof window !== 'undefined') {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
  }
};

// Initialize Swiper sliders
export const initializeSwiperSliders = () => {
  if (typeof window === 'undefined') return;

  // Campaign/Hero slider
  const campaignSwiperElement = document.querySelector('.campaignSwiper');
  if (campaignSwiperElement && !campaignSwiperElement.swiper) {
    new Swiper(campaignSwiperElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  // How we help slider
  const howWeHelpSwiper = document.querySelector('#howwe-help-swiper');
  if (howWeHelpSwiper && !howWeHelpSwiper.swiper) {
    const swiper = new Swiper(howWeHelpSwiper, {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1.2 },
        576: { slidesPerView: 2.2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
        1281: { slidesPerView: 4 }
      },
      on: {
        init: function () {
          updateNavigationState(this);
        },
        slideChange: function () {
          updateNavigationState(this);
        }
      }
    });

    function updateNavigationState(swiper) {
      const prevButton = document.querySelector('.slider-button-prev');
      const nextButton = document.querySelector('.slider-button-next');

      if (prevButton) {
        prevButton.disabled = swiper.isBeginning;
      }
      if (nextButton) {
        nextButton.disabled = swiper.isEnd;
      }
    }
  }

  // Industries slider
  const industrySwiperElement = document.querySelector('.industrySwiper');
  if (industrySwiperElement && !industrySwiperElement.swiper) {
    new Swiper(industrySwiperElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
};

// Initialize CountUp.js counters
export const initializeCountUpCounters = () => {
  if (typeof window === 'undefined') return;

  const counterElements = document.querySelectorAll('.counter[data-countup="true"]');
  
  counterElements.forEach(counter => {
    if (!counter || counter.hasAttribute('data-initialized')) return;

    try {
      const value = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(value)) return;

      const suffix = counter.getAttribute('data-suffix') || '';
      
      const formattingFn = (num) => {
        if (suffix === 'M+') {
          return `${num}M+`;
        } else {
          return `${num.toLocaleString('en-US')}${suffix}`;
        }
      };

      const countUp = new CountUpJs(counter, value, {
        duration: 2.5,
        separator: ',',
        suffix: '',
        enableScrollSpy: true,
        scrollSpyOnce: true,
        formattingFn: formattingFn
      });
      
      if (!countUp.error) {
        countUp.start();
        counter.setAttribute('data-initialized', 'true');
      } else {
        console.error('CountUp error:', countUp.error);
      }
    } catch (error) {
      console.error('Error initializing counter:', error);
    }
  });
};

// Initialize FAQs
export const initializeFAQs = () => {
  if (typeof window === 'undefined') return;

  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(button => {
    if (!button || button.hasAttribute('data-initialized')) return;

    const handleClick = () => {
      try {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const targetId = button.getAttribute('data-bs-target');
        if (!targetId) return;

        const content = document.querySelector(targetId);
        
        // Close all other accordions
        accordionButtons.forEach(otherButton => {
          if (otherButton && otherButton !== button) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherButton.classList.add('collapsed');
            const otherId = otherButton.getAttribute('data-bs-target');
            if (otherId) {
              const otherContent = document.querySelector(otherId);
              if (otherContent) {
                otherContent.classList.remove('show');
              }
            }
          }
        });
        
        // Toggle current accordion
        button.setAttribute('aria-expanded', !isExpanded);
        button.classList.toggle('collapsed', isExpanded);
        if (content) {
          content.classList.toggle('show', !isExpanded);
        }
      } catch (error) {
        console.error('Error handling accordion click:', error);
      }
    };

    button.addEventListener('click', handleClick);
    button.setAttribute('data-initialized', 'true');
  });
};

// Master animation initialization
export const initializeAllAnimations = () => {
  try {
    initializeWow();
    initializeSwiperSliders();
    initializeCountUpCounters();
    initializeFAQs();
  } catch (error) {
    console.error('Error initializing animations:', error);
  }
};
