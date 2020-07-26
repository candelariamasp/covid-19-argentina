var config = {
    style: 'mapbox://styles/candelariamasp/ckcwhpbke09ex1io49t31cgew',
    accessToken: 'pk.eyJ1IjoiY2FuZGVsYXJpYW1hc3AiLCJhIjoiY2s4OHRpenVuMGNmeDNqbzF1ZmNnN2FwciJ9.e6kBICzbQ_RPjMFy5SgBtw',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Pobreza y Pandemia en Latinoamérica',
    subtitle: 'El caso de Buenos Aires',
    byline: '',
    footer: 'Esta historia se basa en datos de <a https://recursos-gis-covid-19-aeroterra.hub.arcgis.com/pages/datos-abiertos">Aeroterra</a>, Mapas de Vulnerabilidad del <http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?showData=true">Censo de 2010 del INDEC</a> y datos de casos de COVID-19 <a href="https://www.lanacion.com.ar/sociedad/provincia-provincia-mapa-del-coronavirus-argentina-nid2344407" target="_blank">en Argentina</a> y <a href="https://www.lanacion.com.ar/sociedad/municipio-municipio-mapa-del-coronavirus-provincia-buenos-nid2358970">en la Provincia de Buenos Aires</a> por Diario La Nación.</a>',
    chapters: [
        {//3 Densidad Urbana
            id: 'intro',
            title: "Pobreza y Pandemia en Latinoamérica: El caso de Buenos Aires",
            description: "Al inicio de la pandemia del coronavirus, algunos presidentes latinoamericanos lo llamaron despectivamente \"el virus de los ricos.\" Sin embargo, el COVID-19 no distingue sexo, religión o nacionalidad, y se propaga a tasas letales en comunidades donde el acceso a condiciones de vida y sanidad dignas no existen. Es por ello que en Latinoamérica los casos de contagios han \"explotado\" en los asentamientos informales como villas miseria o favelas donde el hacinamiento y la carencia de espacios públicos son moneda corriente. <br /><br />La Latinoamérica post-pandemia debe enfocarse en desarrollar ciudades resilientes soportadas por estructuras de comunidad partícipes de la creación y evolución del espacio que habitan, el modelo de gobernanza usual \"desde arriba\" es obsoleto y pone en riesgo a toda la población.",
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
        {//2 Latinoamérica epicentro 
            id: 'chapter1',
            title: 'Latinoamérica, el nuevo epicentro global de COVID-19',
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
        },
        {//5 Mejor Información y Servicios en Áreas Metropolitanas
            id: 'picture4',
            type: 'pic',
            title: 'Las Áreas Metropolitanas están mejor preparadas para contener el virus',
            description: "Por otro lado, las Áreas Metropolitanas están mejor preparadas para contener una situación de esta envergadura creando medidas ágiles y efectivas que puedan frenar el contagio entre sus habitantes. Además los servicios de salud, infraestructura y profesionales concentrados en estas áreas ofrecen mejores servicios a la comunidad en una pandemia.<span class='credit'>Crédito de Imagen: <a href='http://observatorioamba.org/noticias-y-agenda/noticia/coronavirus-en-la-argentina-como-cambiaran-las-ciudades-con-el-distanciamiento-social' target='_blank'>El Observatorio Metropolitano</a></span>",
            location: {},
            onChapterEnter: [
                {
                    layer: 'argCovid',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },{//6 zoom 1 - BACasos
            id: 'BACasos',
            title: 'Buenos Aires: el foco del COVID-19 en Argentina',
            image: 'images/2-Argentina Covid.png',
            description: 'Buenos Aires es el epicentro de contagios por coronavirus en Argentina que a pesar de los más de 100 días de cuarentena obligatoria todavía no logra disminuirlos. La situación en sus aproximadamente 2.000 villas miseria o barrios populares es aún peor. Allí se concentran la mitad de dichos asentamientos populares de todo el país.',
            source: '<a href="https://www.lanacion.com.ar/sociedad/provincia-provincia-mapa-del-coronavirus-argentina-nid2344407" target="_blank">Diario La Nación</a>',
            location: {
                center: [-78.560250, -40.096309],
                mobileCenter: [-67.560250, -40.096309],
                zoom: 3.5,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'worldCovid',
                    opacity: 0
                },
                {
                    layer: 'argCovid',
                    opacity: 1
                },
                /*{
                    layer: 'villasMiseriaName',
                    opacity: 0
                },
                {
                    layer: 'villasMiseria',
                    opacity: 0
                },
                {
                    layer: 'ambaCovid',
                    opacity: 0
                },
                {
                    layer: 'ponderacion',
                    opacity: 0
                }*/
            ],
            onChapterExit: [
                /*{
                    layer: 'villasMiseria',
                    opacity: 0
                },
                {
                    layer: 'ponderacion',
                    opacity: 0
                },
                {
                    layer: 'villasMiseriaName',
                    opacity: 0
                },
                {
                    layer: 'villasMiseriaPerimetros',
                    opacity: 0 
                }*/
            ]
        },/*
        {//7 BAVillas
            id: 'BAVillas',
            title: 'Barrios populares, alta vulnerabilidad ',
            image: 'images/4-Vulnerabilidad.png',
            description: 'Los habitantes más vulnerables de Buenos Aires viven en asentamientos informales ubicados principalmente en el Área Metropolitana de Buenos Aires, en la periferia de la Ciudad Autónoma de Buenos Aires (CABA), la capital de Argentina. La combinación de factores de bajos niveles de acceso a la salud, a la educación y a los servicios básicos, junto con el hacinamiento determinan dicha vulnerabilidad y el riesgo de contraer enfermedades está directamente relacionado con ellos.',
            source: '<a href="http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?geometry=148.828%2C-59.791%2C83.964%2C-13.392&showData=true" target="_blank">Aeroterra, ESRI</a>',
            location: {
                center: [-58.695696, -34.619016],
                mobileCenter: [-58.5, -34.619016],
                zoom: 9.8,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'villasMiseria',
                    opacity: 0
                },
                {
                    layer: 'ambaCovid',
                    opacity: 0
                },
                {
                    layer: 'villasMiseriaPerimetros',
                    opacity: 1
                },
                {
                    layer: 'ponderacion',
                    opacity: 1
                },
                {
                    layer: 'villasMiseriaPeriBold',
                    opacity: 0
                },
                {
                    layer: 'argCovid',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//8 Condiciones Precarias
            id: 'picture6',
            type: 'pic',
            title: 'Pobreza y precarias condiciones de habitabilidad',
            description: "Las comunidades más pobres han sido las más afectadas alrededor del mundo. En Buenos Aires, los habitantes de asentamientos informales padecen en mayor medida afecciones como <a href='https://blogs.iadb.org/ideas-matter/en/poor-health-poverty-and-the-challenges-of-covid-19-in-latin-america-and-the-caribbean/' target='_blank'>diabetes, obesidad, hipertensión y malnutrición</a>, convirtiéndolos en grupo de riesgo de contraer el coronavirus. Además, la precariedad de las viviendas y barrios que habitan los residentes de estos asentamientos informales ha sido un factor central en el contagio del COVID-19.<span class='credit'>Crédito de Imagen: <a href='https://www.lanacion.com.ar/sociedad/coronavirus-argentina-temor-vecinos-villa-itati-casos-nid2370454' target='_blank'>Diario La Nación</a></span>",
            location: {},
            onChapterEnter: [
                {
                    layer: 'ambaCovid',
                    opacity: 0
                },
                {
                    layer: 'villasMiseria',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },

        {//9 AMBA Covid
            id: 'ambaCovid',
            title: 'Área Metropolitana de Buenos Aires: villas miseria y coronavirus',
            image: 'images/3-AMBA Covid.png',
            description: "Los distritos donde se concentra una mayor cantidad de barrios populares son los más afectados por el coronavirus. Aunque los casos habían comenzado en la CABA, la situación allí ha mejorado y el foco de infección actualmente se encuentra en los barrios populares, donde los habitantes viven en condiciones de precariedad y pobreza. Las zonas más afectadas son Avellaneda, Quilmes y La Matanza. La falta de acceso al agua imposibilita a los habitantes ejercer prácticas mínimas de sanidad para combatir el virus y su transmisión. Sus viviendas son de bajísima calidad material y constructiva y viven hacinados (más de 1 persona por habitación), incrementando la posibilidad de exposición al virus y posterior contagio. El espacio público, que ha demostrado ser <a href='https://gehlpeople.com/blog/public-space-plays-vital-role-in-pandemic/' target='_blank'>un aliado en la pelea contra la propagación del virus en ciudades globales</a>, es casi inexistente en los asentamientos informales. La vulnerabilidad de los residentes de villas miseria ya era evidente y se exacerbó desde que apareció el coronavirus." ,
            source: '<a href="https://www.lanacion.com.ar/sociedad/municipio-municipio-mapa-del-coronavirus-provincia-buenos-nid2358970" target="_blank">Diario La Nación</a>',
            location: {
                center: [-58.695696, -34.619016],
                mobileCenter: [-58.5, -34.619016],
                zoom: 9.8,
                //pitch: 40,
                //bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'villasMiseria',
                    opacity: 1
                },
                {
                    layer: 'ambaCovid',
                    opacity: 1
                },
                {
                    layer: 'villasMiseriaPeriBold',
                    opacity: 0
                },
                {
                    layer: 'ponderacion',
                    opacity: 0
                },
                {
                    layer: 'villasMiseriaPerimetros',
                    opacity: 0
                },
                {
                    layer: 'villasMiseriaName',
                    opacity: 0
                }
            ],
            onChapterExit: []
                
        },
        {//10 El Caso de Itati y Azul
            id: 'ItatiAzulPobreza',
            title: 'Villas Itatí y Azul, vulnerabilidad extrema y foco del COVID-19',
            image: 'images/5-Vilnerabilidad Villa.png',
            description: "Las Villas Itatí y Azul son asentamientos extremadamente pobres que se formaron entre los años 1950 y el 1970 en Avellaneda y Quilmes. En ellas viven 20.000 personas en las peores condiciones de habitabilidad, su índice de vulnerabilidad es extremo, distinguiéndose en el mapa como una isla dentro de la ciudad. Los límites de estas villas fueron reforzados por la propagación del virus concentrándose dentro de los límites de la inequidad y la pobreza.",
            source: '<a href="http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?geometry=148.828%2C-59.791%2C83.964%2C-13.392&showData=true" target="_blank">Aeroterra, ESRI</a>', 
            location: {
                center: [-58.311234, -34.707846],
                mobileCenter: [-58.304797, -34.703829],
                zoom: 14.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'villasMiseriaPeriBold',
                    opacity: 1
                },
                {
                    layer: 'villasMiseriaName',
                    opacity: 1
                },
                {
                    layer: 'ponderacion',
                    opacity: .75
                },
                {
                    layer: 'ambaCovid',
                    opacity: 0
                },
                {
                    layer: 'villasMiseria',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {//11 Aislacion impuesta
            id: 'picture8',
            type: 'pic',
            title: 'Villas miseria, aislación impuesta',
            description: 'En un atropello a las libertades individuales y colectivas, sumado a las deudas sostenidas con las villas miseria, las autoridades locales, regionales y nacionales decidieron acordonar las Villas Itatí y Azul del resto de la ciudad, enfatizando todavía más su evidente segregación urbana y social. Por medio de una aislación obligatoria reforzada por la policía, ambos asentamientos fueron "desconectados" de su entorno por 14 días suscitando una reacción crítica por parte de los mismos habitantes y organizaciones de derechos humanos que reclamaron que dichas medidas empeorarían la innegable situación de aislamiento socio-económico, espacial y de salud ya existentes en las villas miseria. El gobernador de la Provincia de Buenos Aires Kiciloff retrucó diciendo que hubiera tomado la misma medida extremista de aislamiento en caso de tratarse de un pico de casos en un barrio privado. Preocupa la soltura con la que aboga por disminuir las libertades de los habitantes que representa y su falta de coherencia al creer que fuera posible un pico de casos de COVID-19 en un afluente barrio privado donde los recursos, el espacio y la información abundan en calidad y cantidad para evitar los contagios.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'hacinamientoCritico',
                    opacity: 0
                },
            ],
            onChapterExit: []
        },
        {//12 Mapa Hacinamiento Critico 
            id: 'hacinamientoCritico',
            title: 'Villas Itatí y Azul, hacinamiento crítico',
            image: 'images/6-Hacinamiento.png',
            description: "Son casi 5.000 familias las que viven hacinadas en Itatí y Azul, con más de tres personas por habitación, según indican los datos del INDEC de 2010, reforzados por dos relevamientos en <a href='http://www.estadistica.ec.gba.gov.ar/dpe/images/Informe_Censo_Villa_Itat%C3%AD_-_Villa_Azul_1.pdf' target='_blank'>2018</a> y <a href='http://documents1.worldbank.org/curated/en/778971550482375521/pdf/Evaluaci-n-Social.pdf' target='_blank'>2019</a> realizados por las más recientes gestiones de gobierno de la Provincia de Buenos Aires. Las probabilidades de contagio aumentan en espacios hacinados ya que las personas no pueden aislarse de sus familiares que han contraído el virus. En este caso, a falta de testeos y servicios médicos en la zona aumentaron los contagios.", 
            source: '<a href="http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?showData=true" target="_blank">Aeroterra, ESRI</a>', 
            location: {
                center: [-58.311234, -34.707846],
                mobileCenter: [-58.304797, -34.703829],
                zoom: 14.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'villasMiseriaPeriBold',
                    opacity: 1
                },
                {
                    layer: 'villasMiseriaName',
                    opacity: 1
                },
                {
                    layer: 'ponderacion',
                    opacity: 0
                },
                {
                    layer: 'hacinamientoCritico',
                    opacity: 1
                },
            ],
            onChapterExit: []
        },

        {//13 Itati y Azul Precariedad
            id: 'picture9',
            type: 'pic',
            title: 'Villas Itatí y Azul, precariedad extrema',
            description: "En 2018, el 70% de las viviendas en estos asentamientos fueron catalogadas como inestables y precarias, indicando que en 8 años las condiciones calamitosas de habitabilidad no habían cambiado. Casas de chapa, lona, plástico, cartón, entre otros, conforman la paleta constructiva en esta zona. Los materiales reciclables no son el problema, sino la desidia y la falta de voluntad para reintegrar esta isla urbana en un marco de desarrollo sostenible que provea oportunidades de trabajo y movilidad social a los más vulnerables de la sociedad.",
            location: {},
            onChapterEnter: [{
                layer: 'servInsuf',
                opacity: 0
            }],
            onChapterExit: []
        },

        {//14 Mapa Falta de Baños 
            id: 'servInsuf',
            title: 'Villas Itatí y Azul, servicios insuficientes',
            image: 'images/7-Servicios Insuficientes.png',
            description: "En Villa Azul, el 10% de las casas no cuenta con un baño y el 70% de los baños de ambas villas no tienen cloacas, desembocando a excavaciones en la tierra o a cielo abierto. Estos asentamientos informales son una isla donde ni los servicios, ni la salud existen, pero la pobreza sostenida y el atropello a los derechos proliferan.", 
            source: '<a href="http://datosabiertos.aeroterra.com/datasets/8ecd8e8d4703446781fcf8703473a56b_0?geometry=148.828%2C-59.791%2C83.964%2C-13.392&showData=true" target="_blank">Aeroterra, ESRI</a>', 
            location: {
                center: [-58.311234, -34.707846],
                mobileCenter: [-58.304797, -34.703829],
                zoom: 14.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'villasMiseriaName',
                    opacity: 1
                },
                {
                    layer: 'ponderacion',
                    opacity: 0
                },
                {
                    layer: 'servInsuf',
                    opacity: 1
                },
                {
                    layer: 'hacinamientoCritico',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },

        {//15 Itati y Azul sin Agua ni Servicios
            id: 'picture10',
            type: 'pic',
            title: 'Villas Itatí y Azul, sin agua',
            description: 'La falta de agua en Itatí y Azul ha sido clave en la propagación del coronavirus junto con el hacinamiento crítico, las enfermedades crónicas y la falta de acceso a los servicios de sanidad. Todos ellos componen cada uno de los ejes del índice de vulnerabilidad que desprotege a las personas del virus y los convierte en víctimas aseguradas de la pandemia.<br /><br />La Organización Mundial de la Salud indica que los sistemas de higiene y saneamiento son fundamentales para proteger a las personas durante el brote del COVID-19. La práctica continua de medidas de higiene, lavado y desinfección de manos y tratamiento de basura correspondientes en las comunidades logran prevenir en gran medida la transmisión del virus entre personas.',
            location: {},
            onChapterEnter: [{
                layer: 'servInsuf',
                opacity: 0
            }],
            onChapterExit: []
        },

        {//16 Futuro sostenible y equitativo
            id: 'picture7',
            type: 'pic',
            title: '¿Un futuro equitativo, sostenible y con mayor oportunidades?',
            description: 'El manejo improvisado de los gobernantes y la decisión extremista de aislar comunidades por el brote de COVID-19 ha dejado expuesta la corrupción y falta de planificación sostenible en los países latinoamericanos, exacerbando la pobreza e insalubridad de los grupos más vulnerables de la población causando efectos adversos e irreversibles en la economía y acechando la salud pública de las ciudades. La implementación de la <a href="https://www.onu.org.ar/agenda-post-2015/" target="_blank">Agenda de Desarrollo Sostenible</a> es más necesaria que nunca y debe hacerse posible con participación de todas las comunidades. Además de viviendas y servicios dignos, las familias que habitan asentamientos precarios como Villa Itatí y Azul deben poder tener una voz y participación en el proceso de reconstrucción a corto y largo plazo, así proveyendo de oportunidades de trabajo a los residentes y no exclusivamente de espacios para habitar. El espacio público, muchas veces ausente en los barrios populares, se debe considerar como intrínseco y central en la generación de ciudad equitativa y resiliente para todos.<span class="credit">Crédito de Imagen: <a href="https://earth.google.com/web/@-34.70971363,-58.30417164,8.08277571a,5194.29804593d,35y,-0h,0t,0r" target="_blank">Google Earth</a>',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }*/
    ]
};
