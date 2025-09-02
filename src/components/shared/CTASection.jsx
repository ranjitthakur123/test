
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CTASection = ({
  title = "If Your Message Crosses Borders, So Does Your Business",
  showStats = true,
  ctaText = "Start Now",
  ctaLink = "https://account.devnagri.com/register",
  stats = [
    { value: 60, suffix: "%", label: "Improvement in sales" },
    { value: 5, suffix: "x", label: "Faster Operations", isDecimal: true },
    { value: 45, suffix: "%", label: "Reduction In Operational Costs" },
    { value: 75, suffix: "%", label: "Increase in CSAT" }
  ]
}) => {
  useEffect(() => {
    if (!showStats) return;

    const counters = document.querySelectorAll(".custom-counter");
    const counterSection = document.querySelector(".custom-stats-row");

    if (counters.length && counterSection) {
      let hasCounted = false;

      function animateCounter(counter) {
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
      }

      function onScroll() {
        if (counterSection) {
          const rect = counterSection.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

          if (isVisible && !hasCounted) {
            counters.forEach(counter => animateCounter(counter));
            hasCounted = true;
            window.removeEventListener("scroll", onScroll);
          }
        }
      }

      window.addEventListener("scroll", onScroll);
      onScroll();

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [showStats]);

  return (
    <section className="get-strated bg-img">
      <div className="container">
        <h2 className="text-center f-40 f-600 white pe-4 ps-4 pb-3 pt-3 wow fadeInUp">
          {title}
        </h2>
        
        {showStats && (
          <div className="row mt-5 text-center custom-stats-row">
            {stats.map((stat, index) => (
              <div key={index} className={`col-6 col-md-${12/stats.length} custom-stats-col wow fadeInUp`}>
                <div
                  className="custom-counter f-48 f-600 pb-3"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                  data-decimal={stat.isDecimal}
                >
                  0{stat.suffix}
                </div>
                <p className="custom-label f-400 m-0">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center wow fadeInUp mt-5">
          <Link to={ctaLink} className="white">
            <button type="button" className="devnagri-btn">
              {ctaText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
