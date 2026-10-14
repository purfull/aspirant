import './Industries.scss';
import CardsCarousel from '../CardsCarousel/CardsCarousel';
import IndustryCTA from '../IndustryCTA/IndustryCTA';

const Industries = () => {
  return (
    <section className="industries" id="industries">
      <div className="industries-container">
        {/* Modern Interactive Services / What We Do Cards Carousel with Lucide Icons */}
        <CardsCarousel />

        {/* Not Seeing Your Industry Here? Banner Card with drifting particles & border beam */}
        <IndustryCTA />
      </div>
    </section>
  );
};

export default Industries;
