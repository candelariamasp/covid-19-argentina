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
        {
            id: 'harrison1998',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park. Compared to many of the vanishing glaciers in Glacier National Park, Harrison Glacier has a much higher altitude accumulation zone (approximately 9,000 feet (2,700 m)) which has allowed it to maintain some equilibrium in its glacier mass balance.',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'harrison2015',
            title: 'Harrison Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).',
            location: {
                center: [-113.72917, 48.58938],
                zoom: 12.92,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            title: 'Blackfoot Glacier, 1998',
            image: '',
            description: 'Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.',
            location: {
                center: [-113.66573, 48.59181],
                zoom: 12.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            title: 'Blackfoot Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
            location: {
                center: [-113.66573, 48.59181],
                zoom: 12.92,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz1998',
            title: 'Agassiz Glacier, 1998',
            image: '',
            description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
            location: {
                center: [-114.15881, 48.93439],
                zoom: 13.51,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            title: 'Agassiz Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
            location: {
                center: [-114.15881, 48.93439],
                zoom: 13.51,
                pitch: 41.00,
                bearing: 78.33
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow1998',
            title: 'Rainbow Glacier, 1998',
            image: '',
            description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainbow2015',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};
