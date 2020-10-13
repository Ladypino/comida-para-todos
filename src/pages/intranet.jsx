import React, { Fragment } from 'react';
import HeaderIntranet from '../components/intranetData/headerIntra';
import GetData from '../components/intranetData/getData';

const IntranetPage = () => {

  return (
    <Fragment>
      <HeaderIntranet />
      <GetData />
    </Fragment>
  );
}

export default IntranetPage;