"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6115],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),l=function(e){var a=r.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=l(e.components);return r.createElement(m.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,v=p["".concat(m,".").concat(u)]||p[u]||c[u]||n;return t?r.createElement(v,i(i({ref:a},d),{},{components:t})):r.createElement(v,i({ref:a},d))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,a,t){var r=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(7294),o=t(9443);var n=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),s="tabItem_1uMI",m="tabItemActive_2DSg";var l=37,d=39;var c=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,c=e.values,p=e.groupId,u=e.className,v=n(),f=v.tabGroupChoices,g=v.setTabGroupChoices,h=(0,r.useState)(o),b=h[0],k=h[1],y=r.Children.toArray(e.children),N=[];if(null!=p){var w=f[p];null!=w&&w!==b&&c.some((function(e){return e.value===w}))&&k(w)}var x=function(e){var a=e.currentTarget,t=N.indexOf(a),r=c[t].value;k(r),null!=p&&(g(p,r),setTimeout((function(){var e,t,r,o,n,i,s,l;(e=a.getBoundingClientRect(),t=e.top,r=e.left,o=e.bottom,n=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&n<=l&&o<=s&&r>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(m),setTimeout((function(){return a.classList.remove(m)}),2e3))}),150))},O=function(e){var a,t;switch(e.keyCode){case d:var r=N.indexOf(e.target)+1;t=N[r]||N[0];break;case l:var o=N.indexOf(e.target)-1;t=N[o]||N[N.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},u)},c.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:b===a?0:-1,"aria-selected":b===a,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},t)}))),a?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==b})}))))}},9443:function(e,a,t){var r=(0,t(7294).createContext)(void 0);a.Z=r},1700:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return v}});var r=t(7462),o=t(3366),n=(t(7294),t(3905)),i=t(5064),s=t(8215),m=["components"],l={id:"grandCompany",title:"Grand Company",sidebar_label:"Grand Company"},d=void 0,c={unversionedId:"novatos/grandCompany",id:"novatos/grandCompany",isDocsHomePage:!1,title:"Grand Company",description:"O que \xe9?",source:"@site/docs/novatos/grandCompany.mdx",sourceDirName:"novatos",slug:"/novatos/grandCompany",permalink:"/peloton/docs/novatos/grandCompany",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/novatos/grandCompany.mdx",version:"current",frontMatter:{id:"grandCompany",title:"Grand Company",sidebar_label:"Grand Company"},sidebar:"novatos",previous:{title:"D\xedcion\xe1rio de termos e \xedcones",permalink:"/peloton/docs/novatos/termosIcones"},next:{title:"Apar\xeancias",permalink:"/peloton/docs/novatos/glamour"}},p=[{value:"O que \xe9?",id:"o-que-\xe9",children:[]},{value:"Hist\xf3ria",id:"hist\xf3ria",children:[]}],u={toc:p};function v(e){var a=e.components,t=(0,o.Z)(e,m);return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"o-que-\xe9"},"O que \xe9?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}),"Grand Company ou as Grandes Companhias de Eorzea consistem em uma especie de fac\xe7\xe3o que o jogador poder\xe1 escolher em certo momento da hist\xf3ria.",(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/7EU3hSb.jpg",alt:"GrandCompanyFlags"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}),"N\xe3o existe rivalidade entre elas e voc\xea poder\xe1 trocar a hora que quiser.",(0,n.kt)("img",{parentName:"li",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"})," ",(0,n.kt)("br",null)," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}),"Ao escolher a sua voc\xea receber\xe1 um cargo\nem hierarquia militar e baseado nesse cargo ir desbloqueando novos itens, sem contar a disposi\xe7\xe3o de certos conte\xfados tamb\xe9m exclusivos.",(0,n.kt)("img",{parentName:"li",src:"https://ffxiv.gamerescape.com/w/images/e/e4/Player24_Icon.png",alt:"Sprout"}))),(0,n.kt)("h2",{id:"hist\xf3ria"},"Hist\xf3ria"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/9/93/061812.png",alt:"GcIcon"})," \u201cPor milhares de anos, Eorzea tem sido v\xedtima de um ciclo catastr\xf3fico de destrui\xe7\xe3o e renascimento que envolve periodicamente o reino e amea\xe7a todos os que vivem sobre seu solo; cada vez enfrontado uma trag\xe9dia aparentemente pior do que a \xfaltima, no entanto, os povos de Eorzea tem encontrado uma forma de se perseverar. Um m\xe9todo, aparentemente voltando centenas de gera\xe7\xf5es, a cria\xe7\xe3o de centros de comando abrangentes que combinem os militares, os recursos econ\xf4micos e tecnol\xf3gicos de um cidade-estado, a fim de prepar\xe1-lo para o seu pr\xf3ximo destino.\n",(0,n.kt)("img",{parentName:"p",src:"https://img.finalfantasyxiv.com/lds/h/R/ie9yzPWPiNVaZecpAaFODyYLxw.jpg?_ga=2.39405355.946879970.1636069729-393786976.1617142872",alt:"GrandCompany"})," ",(0,n.kt)("br",null),"\n",(0,n.kt)("img",{parentName:"p",src:"https://ffxiv.gamerescape.com/w/images/9/93/061812.png",alt:"GcIcon"})," A \xfaltima surgimento registrado delas foi h\xe1 cerca de 1.500 anos atr\xe1s, no final da Quinta Era Astral e com a chegada do grande dil\xfavio que desencadeou o per\xedodo escuro conhecida como Sexta Era Umbral. Foi atrav\xe9s dessas empresas que, em seguida, as beligerantes cidades-estado foram capazes de p\xf4r de lado as suas diverg\xeancias amargas e se juntam para formar uma alian\xe7a e garantir o dom\xednio da sobreviv\xeancia.\nCom os recentes ataques do Imp\xe9rio Garlean vistos como uma amea\xe7a iminente para o reino, houve conversas de restaurar as Grandes Companhias para sua antiga gl\xf3ria.\u201d"),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Hist\xf3ria especifica de cada Grand Company ")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)(i.Z,{defaultValue:"GC",values:[{label:"Maelstrom",value:"MA"},{label:"Order of the Twin Adder",value:"OFTTA"},{label:"Immortal Flames",value:"IF"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"MA",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/08Rh6oE.png",alt:"MaelstromBanner"})),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No cora\xe7\xe3o da Marinha Thalassocratic reside o Lominsan Armada, composta por nove esquadr\xf5es independentes, a primeira atrav\xe9s da Nona. O Maelstrom \xe9 uma extens\xe3o do Primeiro Esquadr\xe3o, expandindo seu papel como carro-chefe e concedendo-lhe poder de administrar n\xe3o s\xf3 os restantes oito esquadr\xf5es, mas as v\xe1rias frotas mercantes que navegam pelo mar perto de Vylbrand.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Com o restabelecimento do Maelstrom, o Almirante tamb\xe9m come\xe7ou o movimento para invocar o antigo direito mar\xedtimo, por que ele iria promover-se a chefe Almirante, ampliando sua autoridade para cobrir n\xe3o apenas rela\xe7\xf5es estaduais e militares, mas conceder-lhe o poder para diretamente ordenar a todos os navios nas \xe1guas de Lominsa, e livremente punir qualquer um que desobedecer. Escusado ser\xe1 dizer que os piratas da cidade-estado est\xe3o prestes a tomar esta invas\xe3o de sua liberdade sem lutar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"O Maelstrom \xe9 liderado pela almirante Merlwyb Bloefhiswyn e Grande Storm Marshal Eynzahr Slafyrsyn. Aventureiros podem se juntar ao Levy Exterior, sob o Comandante R'ashaht Rhiki. Uniformes Maelstrom se distinguem pela sua cor vermelha profunda."))),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Almirante Merlwyb Bloefhiswyn")),(0,n.kt)("p",{parentName:"div"},"\u201cA vit\xf3ria \xe9 uma costa distante. Marque os c\xe9us, respeite a mar\xe9, confie em sua tripula\xe7\xe3o e ela ser\xe1 sua. \u201d"),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/BCfJ6W0.jpg",alt:"Merlwyb"}))),(0,n.kt)(s.Z,{value:"OFTTA",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/zle2azp.png",alt:"OFFTABanner"})),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Order of the Twin Adder estabelece um meio a partir do qual os Seedseers podem retornar de suas andan\xe7as no fundo do Black Shroud e supervisionar diretamente n\xe3o s\xf3 a seguran\xe7a dos cidad\xe3os da Gridania, mas o funcionamento da guarda local, Ambos do deus Quiver, que defende a floresta de amea\xe7as externas, e o Wood Wailers, que o protege de conflitos internos, manifestaram o seu apoio a esta medida tempor\xe1ria.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"H\xe1, no entanto, aqueles dentro de Gridania que v\xe3o questionar a capacidade dos Seedseers, cujas fun\xe7\xf5es at\xe9 agora t\xeam sido limitadas a v\xe1rios processos ritual\xedsticos, e duvida se eles s\xe3o aptos para liderar uma na\xe7\xe3o em guerra.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Order of the Twin Adder \xe9 liderada pela \xc9lder Seedseer Kan-E-Senna. Uniformes s\xe3o distinguidos pelo seu pigmento amarelo brilhante."))),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Kan-E-Senna")),(0,n.kt)("p",{parentName:"div"},"\u201cOs filhos de Eorzea s\xe3o como \xe1rvores em um bosque, curvando-se ao vento como o salgueiro, ou carregando-o como o carvalho. No entanto, ainda que vivamos como gostar\xedamos, o vento soprar\xe1.\u201d"),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/iTgOx55.jpg",alt:"KanESenna"}))),(0,n.kt)(s.Z,{value:"IF",mdxType:"TabItem"},(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/pWmVLxO.png",alt:"IfBanner"})),(0,n.kt)("ul",{parentName:"div"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Atualmente, a maior parte da for\xe7a militar de Ul'dah vem de seu ex\xe9rcito de mercen\xe1rios e o pequeno contingente da guarda do pal\xe1cio conhecido como o Sultansworn. Para supervisionar o treinamento de guerra adicional, o Sultana considerou ressuscitar o Immortal Flames uma for\xe7a de elite de veteranos endurecidos pela batalha que uma vez disseminou o medo em na\xe7\xf5es vizinhas da cidade-estado durante eras passadas.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Esta unidade age como um aspecto central do ex\xe9rcito, essencialmente, refor\xe7ar o seu poder, e, com efeito conceder mais autoridade ao Sultana e seus assessores..")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Immortal Flames \xe9 liderada pelo Raubahn Aldynn e Eline Roaille. Aventureiros podem se juntar a Brigada gratuita, sob o comando de Swift. Uniformes se distinguem pela sua paleta de cinzas de carv\xe3o vegetal."))),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"Raubahn Aldynn")),(0,n.kt)("p",{parentName:"div"},'"Bwahaha! O campo de batalha \xe9 o melhor e o pior dos lugares. Onde mais o inimigo de um homem pode se tornar seu mentor, ou um aliado, seu inimigo?"'),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/UvWNhCr.png",alt:"RaubahnAldynn"})))))))}v.isMDXComponent=!0},6010:function(e,a,t){function r(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=r(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function o(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=r(e))&&(o&&(o+=" "),o+=a);return o}t.d(a,{Z:function(){return o}})}}]);