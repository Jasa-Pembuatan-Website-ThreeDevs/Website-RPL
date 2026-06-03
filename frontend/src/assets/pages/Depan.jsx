import Hero from "../../components/landing/Hero";
import Philosophy from "../../components/landing/Philosophy";
import TechStack from "../../components/landing/TechStack";
import Portfolio from "../../components/landing/Portfolio";
import Alumni from "../../components/landing/Alumni";
import Cta from "../../components/landing/Cta";
import LandingLayout from "../../layouts/LandingLayout";

const Depan = () => {
  return (
    <LandingLayout afterMain={<Cta />}>
      <Hero />
      <Philosophy />
      <TechStack />
      <Portfolio />
      <Alumni />
    </LandingLayout>
  );
};

export default Depan;
