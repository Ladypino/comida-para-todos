import React, { Fragment } from 'react';
import HeaderIntranet from '../components/intranetData/headerIntra';
import GetData from '../components/intranetData/getData';
import BannerIntra from '../components/intranetData/banner';

const IntranetPage = () => {

  return (
    <Fragment>
      <HeaderIntranet/>
      <BannerIntra/>
      <GetData />
    </Fragment>
  );
}

export default IntranetPage;