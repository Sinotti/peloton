const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Peloton',
  tagline: 'O guia definitivo do guerreiro da luz',
  url: 'https://www.ffxivpeloton.com.br',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon3.png',
  organizationName: 'Sinotti', // Usually your GitHub org/user name.
  trailingSlash: true,
  projectName: 'peloton', // Usually your repo name.
  
  themeConfig: {
    
    
    navbar: {
      
      title: 'Peloton',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon.png',   
      },
      
      items: [

        {
          type: 'doc',
        docId: 'novatos/introducaoNv',
        position: 'left',
        label: ' 🔥 Novatos 🔥'
        },

        {
          type: 'doc',
        docId: 'montarias',
        position: 'right',
        label: 'Montarias'
        },

        {
          type: 'doc',
        docId: 'profissoes',
        position: 'right',
        label: 'Profissões'
        },  

        {to: '/sobreNos', label: 'Sobre', position: 'right'},
        

        {
          type: 'doc',
        docId: 'jobs/informativo',
        position: 'left',
        label: 'Classes'
        },

        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Doações',
        },

        {
          type: 'doc',
        docId: 'jobs/habilidades',
        position: 'left',
        label: 'Habilidades'
        },

        {to: '/blog', label: '⚠️ Notícias ⚠️', position: 'right'},

        

      ],
      
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/ffxivpeloton',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Repositório',
              href: 'https://github.com/Sinotti/peloton',
            },
            
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Peloton`,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
     
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true, 
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
