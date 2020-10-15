import React, { Fragment} from "react";
import Header from '../components/landing/header';
import Banner from '../components/aboutUs/banner';
import History from '../components/aboutUs/sectionHistory';
import Team from '../components/aboutUs/team';
import WhatWeDo from '../components/aboutUs/whatWeDo';
import WhatWeArchived from '../components/aboutUs/whatWeArchived';
import Transparency from '../components/aboutUs/transparency';
import Footer from '../components/landing/footer';


const AboutUs = () => {

  return (
    <Fragment>
      <Header/>
      <Banner/>
      <History/>
      <Team/>
      
       <GaleryPhoto />
      <WhatWeDo/>
      <WhatWeArchived/>
      <Transparency/>
      <Footer/>
    </Fragment>
  );
}

export default AboutUs;