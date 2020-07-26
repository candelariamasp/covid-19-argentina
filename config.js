var config = {    
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    style: 'mapbox://styles/candelariamasp/ckcwhpbke09ex1io49t31cgew',
    theme: 'light',
    byline: "Revisor: David Smiley",
    alignment: 'left',
    toptitle: "<a href='https://www.linkedin.com/in/candelariamasp/' target='_blank'>Candelaria Mas Pohmajevic</a> | Julio 2020",
    title: 'Pobreza y Pandemia en Latinoamérica: el caso de Buenos Aires',
    description: '<p>B - Al inicio de la pandemia del coronavirus, algunos presidentes latinoamericanos lo llamaron despectivamente "el virus de los ricos." Sin embargo, el COVID-19 no distingue sexo, religión o nacionalidad, y se propaga a tasas letales en comunidades donde el acceso a condiciones de vida y sanidad dignas no existen. Es por ello que en Latinoamérica los casos de contagios han "explotado" en los asentamientos informales como villas miseria o favelas donde el hacinamiento y la carencia de espacios públicos son moneda corriente. <br /><br />La Latinoamérica post-pandemia debe enfocarse en desarrollar ciudades resilientes soportadas por estructuras de comunidad partícipes de la creación y evolución del espacio que habitan, el modelo de gobernanza usual "desde arriba" es obsoleto y pone en riesgo a toda la población.</p>',
    footer: 'Esta historia se basa en datos de <a https://recursos-gis-covid-19-aeroterra.hub.arcgis.com/pages/datos-abiertos">Aeroterra</a>, Mapas de Vulnerabilidad del <http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?showData=true">Censo de 2010 del INDEC</a> y datos de casos de COVID-19 <a href="https://www.lanacion.com.ar/sociedad/provincia-provincia-mapa-del-coronavirus-argentina-nid2344407" target="_blank">en Argentina</a> y <a href="https://www.lanacion.com.ar/sociedad/municipio-municipio-mapa-del-coronavirus-provincia-buenos-nid2358970">en la Provincia de Buenos Aires</a> por Diario La Nación.</a>',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.linkedin.com/in/candelariamasp/" target="_blank">Candelaria Mas Pohmajevic</a> | <a>Architect and Urban Designer, Columbia GSAPP</a>',
    chapters: [
        {//2 Latinoamérica epicentro 
            id: 'chapter1',
            title: '<span> Latinoamérica, el nuevo epicentro global de COVID-19',
            image: 'images/1-Covid Mundo.png',
            description: "El virus invisible ha matado casi 600.000 personas en el mundo, con epicentros de casos originalmente en China, Italia, España, Reino Unido y Estados Unidos (con más de 135.000 muertes alrededor del área metropolitana de Nueva York). Sin embargo, con la creciente atención de los medios y autoridades enfocada en la situación del Norte global, el Sur global quedó inadvertido hasta que Brasil se estableció como el segundo país con más casos de coronavirus luego de Estados Unidos. Otros países latinoamericanos siguen los mismos pasos.<span class='credit'> Fuente de datos: <a href='https://coronavirus.jhu.edu/map.html' target='_blank'>John Hopkins CSSE</a></span>",
            location: {
                center: [-98, 10],
                mobileCenter: [-85, 10],
                zoom: 1.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'worldCovid',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {//3 Densidad Urbana
            id: 'picture2',
            type: 'pic',
            title: "La densidad urbana, un falso culpable",
            description: "La forma en la que el virus se ha propagado en cada lugar del mundo está directamente relacionada con las características demográficas e inequidades presentes en ellos. Inicialmente en Nueva York se había responsabilizado erróneamente a la densidad (habitantes por metro cuadrado) de la ciudad por la gran cantidad de casos y muertes por coronavirus.<span class='credit'>Crédito de Imagen: <a href='https://ny.curbed.com/2020/6/18/21295554/new-york-city-apartments-home-for-sale-plummet' target='_blank'>Curbed</a></span>",
            /*quote: "<span class='below'>'“I heard it’s the most toxic waterway in all of United States”, highlighted a neighbor.</span>",*/
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {//4 Conectividad y Contagio Areas Metro
            id: 'picture3',
            type: 'pic',
            title: "La alta conectividad en Áreas Metropolitanas incrementa el contagio",
            description: "La propagación del virus no depende de un único factor. Culpar exclusivamente a la densidad sería un error grave que apuntaría directamente contra los esfuerzos del desarrollo sostenible a futuro en las ciudades, cita <a href='https://www.tandfonline.com/doi/full/10.1080/01944363.2020.1777891' target='_blank'>un estudio reciente</a>. Las Áreas Metropolitanas de ciudades grandes como Nueva York ofrecen tanto ventajas como desventajas cuando se trata de una pandemia. La alta conectividad de los habitantes a través de los medios de transporte locales e internacionales permite una transmisión del virus más rápida. A mayor conectividad, mayor tasa de infectados.<span class='credit'></a>Crédito de Imagen: <a href='https://www.thestar.com/news/gta/2020/06/18/covid-19-and-transit-what-we-think-we-know-may-be-wrong.html' target='_blank'>The Star</a></span>",
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};