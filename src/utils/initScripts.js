
// Unified script initialization - consolidated from all duplicate scripts
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize all sliders using jQuery/Slick
export const initializeSliders = () => {
  if (window.$ && typeof window.$.fn.slick === 'function') {
    // Brand slider
    if ($('.brand-slider-wrapper').length && !$('.brand-slider-wrapper').hasClass('slick-initialized')) {
      $('.brand-slider-wrapper').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        buttons: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        swipe: false,
        draggable: false,
        variableWidth: true
      });
    }

    // Testimonial slider
    if ($('.testimonial-slider1').length && !$('.testimonial-slider1').hasClass('slick-initialized')) {
      $('.testimonial-slider1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    }

    // Resources blogs slider
    if ($('.resources-blogs-slider').length && !$('.resources-blogs-slider').hasClass('slick-initialized')) {
      $('.resources-blogs-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    }

    // Team slider
    if ($('.team-slider').length && !$('.team-slider').hasClass('slick-initialized')) {
      $('.team-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1399.99,
            settings: { slidesToShow: 3 }
          },
          {
            breakpoint: 1080,
            settings: { slidesToShow: 2 }
          },
          {
            breakpoint: 768.99,
            settings: { slidesToShow: 1 }
          }
        ]
      });
    }
  }
};

// Reinitialize sliders (destroy and recreate)
export const reinitializeSliders = () => {
  if (window.$ && typeof window.$.fn.slick === 'function') {
    // Destroy existing sliders
    const sliders = ['.brand-slider-wrapper', '.testimonial-slider1', '.resources-blogs-slider', '.team-slider'];
    sliders.forEach(selector => {
      if ($(selector).hasClass('slick-initialized')) {
        $(selector).slick('unslick');
      }
    });
  }
  
  // Reinitialize after a short delay
  setTimeout(initializeSliders, 100);
};

// Initialize counters with proper formatting
export const initializeCounters = () => {
  if (typeof window === 'undefined') return;

  const formatShortNumber = (number) => {
    if (number >= 1_000_000_000) return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
    if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
    return number.toLocaleString();
  };

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const format = counter.getAttribute("data-format");
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);

      if (format === "short" && target >= 1_000_000) {
        counter.textContent = formatShortNumber(current) + suffix;
      } else {
        counter.textContent = current.toLocaleString() + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (format === "short" && target >= 1_000_000) {
          counter.textContent = formatShortNumber(target) + suffix;
        } else {
          counter.textContent = target.toLocaleString() + suffix;
        }
      }
    }

    requestAnimationFrame(update);
  };

  // Main counters
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));

  // Custom footer counters
  const customCounters = document.querySelectorAll(".custom-counter");
  const counterSection = document.querySelector(".custom-stats-row");
  
  if (customCounters.length && counterSection) {
    let hasCounted = false;

    const animateCustomCounter = (counter) => {
      const target = parseFloat(counter.getAttribute("data-target"));
      const isDecimal = counter.getAttribute("data-decimal") === "true";
      const suffix = counter.getAttribute("data-suffix") || '';
      const duration = 2000;
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;

      const count = () => {
        frame++;
        let progress = frame / totalFrames;
        let current = target * progress;

        if (isDecimal) {
          counter.innerText = current.toFixed(1) + suffix;
        } else {
          counter.innerText = Math.floor(current) + suffix;
        }

        if (frame < totalFrames) {
          requestAnimationFrame(count);
        } else {
          counter.innerText = isDecimal ? target.toFixed(1) + suffix : target + suffix;
        }
      };

      requestAnimationFrame(count);
    };

    const onScroll = () => {
      if (counterSection) {
        const rect = counterSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !hasCounted) {
          customCounters.forEach(counter => animateCustomCounter(counter));
          hasCounted = true;
          window.removeEventListener("scroll", onScroll);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initial check
  }
};

// Initialize dropdown navigation
export const initializeNavigation = () => {
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

  dropdownItems.forEach(item => {
    const link = item.querySelector(".nav-link");

    // Mobile click toggle
    link?.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        item.classList.toggle("active");

        // Close others
        dropdownItems.forEach(other => {
          if (other !== item) {
            other.classList.remove("active");
          }
        });
      }
    });
  });

  // Add numbered services
  const links = document.querySelectorAll('.services_title_main .nav li button');
  links.forEach((link, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    link.classList.add('numbered');
    link.setAttribute('data-number', number);
  });

  // Handle nav pills hover
  document.querySelectorAll('.services_title_main .nav-pills .nav-link').forEach(navLink => {
    navLink.addEventListener('mouseover', () => navLink.classList.add('hovered'));
    navLink.addEventListener('mouseout', () => navLink.classList.remove('hovered'));
  });
};

// Initialize mobile menu handling
export const initializeMobileMenu = () => {
  if (window.innerWidth < 992) {
    // Handle main dropdown toggles
    const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close other main dropdowns
        const parent = this.closest('.nav-item');
        const siblings = parent.parentElement.querySelectorAll('.nav-item');
        siblings.forEach(sibling => {
          if (sibling !== parent) {
            const dropdownMenu = sibling.querySelector('.dropdown-menu');
            const dropdownToggle = sibling.querySelector('.dropdown-toggle');
            if (dropdownMenu) dropdownMenu.classList.remove('show');
            if (dropdownToggle) dropdownToggle.classList.remove('show');
          }
        });
        
        // Toggle current dropdown
        const dropdownMenu = this.nextElementSibling;
        if (dropdownMenu) {
          dropdownMenu.classList.toggle('show');
          this.classList.toggle('show');
        }
      });
    });

    // Handle submenu toggles
    const submenuToggles = document.querySelectorAll('.dropdown-submenu .dropdown-item');
    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close sibling submenus
        const parent = this.closest('.dropdown-submenu');
        const siblings = parent.parentElement.querySelectorAll('.dropdown-submenu');
        siblings.forEach(sibling => {
          if (sibling !== parent) {
            const submenu = sibling.querySelector('.dropdown-menu');
            if (submenu) submenu.classList.remove('show');
          }
        });
        
        // Toggle current submenu
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('dropdown-menu')) {
          submenu.classList.toggle('show');
          this.classList.toggle('show');
        }
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth < 992) {
      const mobileMenu = document.querySelector('.mobile-menu-overlay');
      const isClickInside = mobileMenu?.contains(e.target);
      const isHamburger = e.target.closest('.navbar-toggler');
      
      if (!isClickInside && !isHamburger && mobileMenu?.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(mobileMenu);
        bsCollapse.hide();
        
        // Close all dropdowns when closing mobile menu
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
          menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-toggle.show').forEach(toggle => {
          toggle.classList.remove('show');
        });
      }
    }
  });
};

// Initialize responsive handling
export const initializeResponsive = () => {
  const handleResponsive = () => {
    const isMobile = window.innerWidth < 768;
    
    // Handle Devnagri Offer section
    const offerTabs = document.querySelector('#offerTabs');
    const offerAccordion = document.querySelector('#offerAccordion');
    if (offerTabs && offerAccordion) {
      offerTabs.style.display = isMobile ? 'none' : 'flex';
      offerAccordion.style.display = isMobile ? 'block' : 'none';
    }
    
    // Handle Case Study section
    const caseStudyCarousel = document.querySelector('#carouselExampleAutoplaying');
    const caseStudyAccordion = document.querySelector('#caseStudyAccordion');
    if (caseStudyCarousel && caseStudyAccordion) {
      caseStudyCarousel.style.display = isMobile ? 'none' : 'block';
      caseStudyAccordion.style.display = isMobile ? 'block' : 'none';
    }
  };

  // Initial check
  handleResponsive();

  // Listen for window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResponsive, 250);
  });

  // Handle accordion image loading
  const accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const accordionBody = this.closest('.accordion-item').querySelector('.accordion-body');
      if (accordionBody) {
        const images = accordionBody.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          img.setAttribute('loading', 'eager');
        });
      }
    });
  });
};

// Initialize Bootstrap carousel
export const initializeCarousel = () => {
  const carouselElement = document.getElementById('fadeCarousel');
  if (carouselElement && typeof window !== 'undefined' && window.bootstrap) {
    new window.bootstrap.Carousel(carouselElement, {
      interval: 3000,
      wrap: true,
      ride: 'carousel'
    });
  }
};

// Master initialization function
export const initializeAllScripts = () => {
  try {
    initializeNavigation();
    initializeMobileMenu();
    initializeResponsive();
    initializeCounters();
    initializeSliders();
    initializeCarousel();
  } catch (error) {
    console.error('Error initializing scripts:', error);
  }
};
