
// Consolidated script initialization
let isInitialized = false;

export const initializeAllScripts = () => {
  if (isInitialized) return;
  
  // Prevent multiple initializations
  isInitialized = true;
  
  // Initialize header navigation
  initializeHeaderNavigation();
  
  // Initialize carousel
  initializeCarousel();
  
  // Initialize service tabs
  initializeServiceTabs();
  
  // Initialize sliders
  initializeSliders();
};

const initializeHeaderNavigation = () => {
  const dropdownItems = document.querySelectorAll(".nav-item.dropdown");

  dropdownItems.forEach(item => {
    const link = item.querySelector(".nav-link");
    if (!link) return;

    // Mobile click toggle
    const handleClick = (e) => {
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
    };

    // Remove existing listeners to prevent duplicates
    link.removeEventListener("click", handleClick);
    link.addEventListener("click", handleClick);
  });
};

const initializeServiceTabs = () => {
  const serviceLinks = document.querySelectorAll('.services_title_main .nav li button');
  
  serviceLinks.forEach((link, index) => {
    if (!link.hasAttribute('data-number')) {
      const number = (index + 1).toString().padStart(2, '0');
      link.classList.add('numbered');
      link.setAttribute('data-number', number);
    }
  });

  const navLinks = document.querySelectorAll('.services_title_main .nav-pills .nav-link');
  
  navLinks.forEach(navLink => {
    const handleMouseOver = () => navLink.classList.add('hovered');
    const handleMouseOut = () => navLink.classList.remove('hovered');
    
    // Remove existing listeners
    navLink.removeEventListener('mouseover', handleMouseOver);
    navLink.removeEventListener('mouseout', handleMouseOut);
    
    // Add new listeners
    navLink.addEventListener('mouseover', handleMouseOver);
    navLink.addEventListener('mouseout', handleMouseOut);
  });
};

const initializeCarousel = () => {
  const carouselElement = document.getElementById('carouselExampleAutoplaying');
  if (carouselElement && typeof window !== 'undefined' && window.bootstrap) {
    // Check if carousel is already initialized
    if (!carouselElement.hasAttribute('data-carousel-initialized')) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true,
        ride: 'carousel'
      });
      carouselElement.setAttribute('data-carousel-initialized', 'true');
    }
  }
};

export const initializeSliders = () => {
  // Slider initialization logic here
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    if (!slider.hasAttribute('data-slider-initialized')) {
      // Initialize slider
      slider.setAttribute('data-slider-initialized', 'true');
    }
  });
};

export const reinitializeSliders = () => {
  // Reset initialization flag for sliders
  const sliders = document.querySelectorAll('.slider');
  sliders.forEach(slider => {
    slider.removeAttribute('data-slider-initialized');
  });
  initializeSliders();
};

// Reset initialization on page change
export const resetScriptInitialization = () => {
  isInitialized = false;
};
