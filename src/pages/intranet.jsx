import React, { Fragment } from 'react';
import HeaderIntranet from '../components/intranetData/headerIntra';
import GetData from '../components/intranetData/getData';
import BannerIntra from '../components/intranetData/banner';
import Login from '../components/intranetData/Login';
const IntranetPage = () => {

  return (
    <Fragment>
      <HeaderIntranet/>
      <BannerIntra/>
      <GetData />
      <Login/>
    </Fragment>
   
  );
}

export default IntranetPage;