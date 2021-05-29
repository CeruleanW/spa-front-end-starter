// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import PageTemplate from '../../template/PageTemplate';
import { Nav } from '../../organism/Nav';

const HomePage = () => {
  return <PageTemplate header={<Nav />}>Hello World</PageTemplate>;
};

export default HomePage;
