
import React from 'react';
import { getImagePath } from '../utils/imageUtils';

const BrandSlider = ({ brands = [] }) => {
  const defaultBrands = [
    { name: 'Meesho', image: 'brand-meesho.png' },
    { name: 'ICICI Bank', image: 'brand-icici-bank.png' },
    { name: 'IDFC', image: 'brand-idfc.png' },
    { name: 'Yes Bank', image: 'brand-yes-bank.png' },
    { name: 'SBI Mutual', image: 'brand-sbi-mutual.png' },
    { name: 'Tata AIA', image: 'brand-tataia.png' },
    { name: 'Nestle', image: 'brand-nestle.png' },
    { name: 'MyGov', image: 'brand-my-gov.png' },
    { name: 'Niti Aayog', image: 'brand-nitiayog.png' }
  ];

  const brandList = brands.length > 0 ? brands : defaultBrands;

  return (
    <div className="swiper brand-slider">
      <div className="brand-slider-wrapper">
        {brandList.map((brand, index) => (
          <div className="brand-item-slide" key={index}>
            <img
              src={getImagePath(brand.image)}
              alt={brand.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
