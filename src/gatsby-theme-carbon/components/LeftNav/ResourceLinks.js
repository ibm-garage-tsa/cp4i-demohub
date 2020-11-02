import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Cloud Pak Home',
    href: 'https://www.ibm.com/cloud/cloud-pak-for-integration',
  },
  {
    title: 'Virtual Saleskit - Seismic',
    href: 'https://ibm.seismic.com/Link/Content/DCgWId6Bmb_0GHYHLhF0EJvg',
  },
  {
    title: 'Activation - DTE 2.0',
    href: 'https://dte2.us1a.cirrus.ibm.com/collection/cloud-pak-for-integration-activation-kit',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
