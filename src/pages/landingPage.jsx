import React, { Fragment, useEffect } from "react";
import Header from '../components/landing/header';
import Video from '../components/landing/video';
import Footer from '../components/landing/footer';
import DonateSection from '../components/landing/donateSection';
import MotivationSectionF from '../components/landing/motivationSection'
import ActivitySectionF from '../components/landing/activitySection'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <Fragment>
      <Header />
      <Video />
      <DonateSection />
      <MotivationSectionF />
      <ActivitySectionF />
      <Footer />
    </Fragment>
  );
}

export default LandingPage;