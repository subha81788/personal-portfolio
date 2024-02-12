import { useEffect, useRef, useState } from 'react'
import Theme from './theme/Theme';
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
//import Testimonials from './sections/testimonials/Testimonials';
//import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import { useThemeContext } from './context/theme-context';
//import CV from "../src/assets/cv.pdf"
import CV from "../src/assets/Subhashis Nath_Nagarro_Resume.docx"

const cvFileNameAfterDownload = "Subhashis-Nath-Resume-Fullstack-Java-8Yrs";

const App = () => {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  useEffect(() => {

    // check if floating nav should be shown or hidden
    const floatingNavToggleHandler = () => {

      // check if we scrolled up or down at least 20px
      const pixelsMovementToDetectScrolling = 20;
      if (
        siteYPostion <
          mainRef?.current?.getBoundingClientRect().y -
            pixelsMovementToDetectScrolling ||
        siteYPostion >
          mainRef?.current?.getBoundingClientRect().y +
            pixelsMovementToDetectScrolling
      ) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }

      setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };

    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Theme />
      <Navbar />
      <Header />
      <About cv={CV} downloadAs={cvFileNameAfterDownload}/>
      <Services />
      <Portfolio />
      {/* <Testimonials/>
        <FAQs/> */}
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App