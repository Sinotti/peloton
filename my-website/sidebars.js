/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  


  classes: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['jobs/informativo',]  
    },
    {
    type: 'category',
      label: 'Tanks',
      items: ["jobs/darkKnight", "jobs/warrior", "jobs/paladin", "jobs/gunbreaker"]
    },
    {
      type: 'category',
        label: 'Healers',
        items: ["jobs/scholar", "jobs/whiteMage", "jobs/astrologian", "jobs/sage"]
      },
      {
        type: 'category',
          label: 'Danos corpo a corpo',
          items: ["jobs/monk", "jobs/dragoon", "jobs/ninja", "jobs/samurai", "jobs/reaper"]
        },
        {
          type: 'category',
            label: 'Danos físicos a distância',
            items: ["jobs/machinist", "jobs/bard", "jobs/dancer"]
          },
          {
            type: 'category',
              label: 'Danos mágicos a distância',
              items: ["jobs/blackMage","jobs/redMage","jobs/blueMage", "jobs/summoner" ]
            },
  ],
  profissoes: [
    {  
        type: 'category',
        label: 'Profissões',
        items: ['profissoes', 'ishgard']       
  }
],

montarias: [
  {  
      type: 'category',
      label: 'Montarias',
      items: ['montarias']       
}
],
artefatos: [
  {
    type: 'category',
      label: 'Relíquias',
      items: ['reliquias/artefatosIn', 'reliquias/reArr', 'reliquias/reHW', 'reliquias/reSB', 'reliquias/reShb', 'reliquias/reEW'] 
  }
],

novatos: [
  {
    type: 'category',
      label: 'Introdução',
      items: ['novatos/introducaoNv', 'novatos/custos', 'novatos/termosIcones', 'novatos/grandCompany', 'novatos/glamour', 'novatos/freeCompany', 'novatos/traducao', 'novatos/Dungeons', 'novatos/DutyFinder', 'novatos/WondrousTails'] 
  },

  
],


};
