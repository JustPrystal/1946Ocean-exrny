import Hero from '../components/Hero';
import bannerImage from '../assets/images/home/banner.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

let heroData = {
  backgroundImage : bannerImage,
  heading : "404",
  description: "This page doesn't exist.",
  buttonUrl: "/",
  buttonText: "Back to Home"
}

export default function ErrorPage() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <Hero data={heroData} />
      <Footer />
    </>
  );
}