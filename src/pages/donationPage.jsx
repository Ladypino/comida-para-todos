import React, { Fragment,useEffect } from 'react';
import Footer from '../components/landing/footer';
import Header from '../components/landing/header';
import BecomePart from '../components/donation/becomePart'
import ArchiveButtons from '../components/donation/archiveButtons';
import BannerDonation from '../components/donation/bannerdonation';

const DonationPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <Fragment>
      <Header />
      <BannerDonation/> 
      <BecomePart />
      <ArchiveButtons />
      <Footer />
    </Fragment>
    
  );
}

export default DonationPage;