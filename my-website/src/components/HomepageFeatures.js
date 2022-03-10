import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ARR, HW e SB',
    
    Svg: require('../../static/img/logoARR.svg').default,
    description: (
      <>
        Guias de conteúdo do jogo base e expansões passadas
      </>
    ),
  },
  {
    title: 'Endwalker',
    Svg: require('../../static/img/Endwalker.svg').default,
    description: (
      <>
        Guias e noticias da expansão atual
      </>
    ),
  },
  {
    title: 'Futuras expansões',
    Svg: require('../../static/img/Futuro.svg').default,
    description: (
      <>
        Novidades acerca de futuros lançamentos 
      </>
    ),
  },

 
  
  
];




function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section> 
  );
}
