import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Patch from '../components/patchAtual';
import Sobre from '../components/sobre';
import Referencias from '../components/referencias';
import Parceria from '../components/parceria';
import FimPg from '../components/fimPg';
import Tabela from '../components/darkKnightT';
const astrologian = require('../../docs/skillsTraduzidas/astrologian.json')
console.log(astrologian)

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero-image', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/jobs/informativo">
            Classes
          </Link>

          <Link
            className="button button--secondary button--lg"
            
            to="/docs/profissoes">
            Profissões
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/mountO">
            Montarias 
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/reliquias/artefatosIn">
            Relíquias
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/docs/guildHall">
            Salão das guildas
          </Link>
        
          <Link
            className="button button--secondary button--lg"
            to="/docs/novatos/introducaoNv">
            Guia dos novatos
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Patch/>
       
      </main>
      <HomepageFeatures />
      <Sobre/>
      <Referencias/> 
      <Parceria/>
      <FimPg/>
      <Tabela/>
    </Layout>
    
  );
  
}



