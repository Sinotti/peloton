import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Patch from '../components/patchAtual';
import BarraInicio from '../components/barraInicio';
import Barra from '../components/barra';
import Header from '../components/header';
import Agradecimento from '../components/agradecimento';
import Novidade from '../components/novidade1';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
          
    <header className={clsx('hero-image', styles.heroBanner)}>
      
      <div className="container">

        
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
    
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      
      title={`${siteConfig.title}`}
      description="O guia definitivo para o guerreiro da luz">
      
      <Header />
  
      <main>
        <BarraInicio/>
     
        <Patch/>
        <Novidade/>
    
        <Agradecimento/>
        
      </main>
      
      <Barra/>
      
    </Layout>
    
  );
  
}



