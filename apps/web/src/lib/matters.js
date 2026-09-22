// Asuntos en los que ha intervenido el despacho, tal como los recogió la prensa.
// `headline` puede ser un texto o { es, en } si se traduce; `lang` es el idioma de la noticia enlazada.
// `image: null` oculta la foto de esa tarjeta.
export const matters = [
  {
    id: 'estafa-finca',
    date: '2024-08-28',
    scope: 'national',
    headline: 'Dos detenidos en Manilva y Cádiz por venta fraudulenta mediante estafa de una finca valorada en más de 1,2 millones',
    lang: 'es',
    source: 'Europa Press',
    url: 'https://www.europapress.es/andalucia/malaga-00356/noticia-dos-detenidos-manilva-cadiz-venta-fraudulenta-estafa-finca-valorada-mas-12-millones-20240828144521.html',
    image: '/press/estafa-finca.jpg',
  },
  {
    id: 'extradicion-turkmenistan',
    date: '2023-03-24',
    scope: 'international',
    headline: 'Detenido en Vélez-Málaga un terrorista de Turkmenistán que animó a la población a tomar el poder en los medios',
    lang: 'es',
    source: 'ABC',
    url: 'https://www.abc.es/espana/andalucia/malaga/detenido-velezmalaga-terrorista-turkmenistan-animo-poblacion-tomar-20230324120842-nts.html',
    image: '/press/extradicion-turkmenistan.jpg',
  },
  {
    id: 'extradicion-finlandia',
    date: '2019-11-21',
    scope: 'eu',
    headline: {
      es: 'Habla el abogado de Janne Tranberg: "Nacci" pasaba sus días de jubilación en España y en el proceso de extradición se han cometido errores',
      en: 'Janne Tranberg\'s lawyer speaks: "Nacci" was spending his retirement in Spain and mistakes were made in the extradition process',
    },
    lang: 'fi', // idioma original de la noticia (el enlace lleva al artículo en finés)
    source: 'MTV Uutiset',
    url: 'https://www.mtvuutiset.fi/artikkeli/nyt-puhuu-janne-tranbergin-asianajaja-nacci-vietti-espanjassa-elakepaiviaan-luovutusprosessissa-on-tehty-virheita-haluamme-varmistaa-etta-han-saa-oikeudenmukaisen-oikeudenkaynnin-suomessa/7633000',
    image: '/press/extradicion-finlandia.jpg',
  },
];
