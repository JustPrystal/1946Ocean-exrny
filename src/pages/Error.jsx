import { useRouteError } from "react-router-dom";
import Hero from '../components/Hero';
import bannerImage from '../assets/images/home/banner.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

let heroData = {
  backgroundImage : bannerImage,
  heading : "404",
  description: "This page doesn't exists.",
  buttonUrl: "/",
  buttonText: "Back to Home"
}

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <Hero data={heroData} />
      <Footer />
    </>
  );
}