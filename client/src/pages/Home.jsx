import React from 'react';
import { DiscountOffersSection } from '../components/Home/DiscountOffersSection';
import SliderHome from '../components/Home/SliderHome';
import SectionRecomendados from '../components/Home/SectionRecomendados';
import { CategoriesSection } from '../components/Home/CategoriesSection';
import { SecondCategories } from '../components/Home/SecondCategories';
import { SellerInformationPanel } from '../components/SellerInformationPanel/SellerInformationPanel';

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col gap-5">
      <DiscountOffersSection />
      <SectionRecomendados />
      <SellerInformationPanel />
      <CategoriesSection />
      <SecondCategories />
      <SliderHome />
      <SectionRecomendados />
    </div>
  );
};

export default Home;
