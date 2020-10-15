import React, { Fragment } from 'react';
import HeaderIntranet from '../components/intranetData/headerIntra';
import GetData from '../components/intranetData/getData';
import BannerIntra from '../components/intranetData/banner';

import Logint from '../components/intranetData/Logint';
const IntranetPage = () => {

  return (
    <Fragment>
      <HeaderIntranet/>
      <BannerIntra/>
      <GetData />
      <Logint/>
    </Fragment>
   
  );
}

export default IntranetPage;