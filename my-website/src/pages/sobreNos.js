import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import Sobre from '../components/sobre';
import Referencias from '../components/referencias';
import Parceria from '../components/parceria';
import FimPg from '../components/fimPg';
import Barra from '../components/barra';






export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      
   >
      <Barra/>
      <HomepageFeatures />
      <Sobre/>
      <Referencias/> 
      <Parceria/>
      <FimPg/>
      <Barra/>
      
    </Layout>
    
  );
  
}



