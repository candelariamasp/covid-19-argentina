/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');
// Create new div element - NEW
var wrapper = document.createElement('div');
// Set attribute id with value "wrapper" to this element - NEW
wrapper.setAttribute("id", "wrapper");
// Make wrapper div a child of header - NEW
header.appendChild(wrapper);

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerHTML = config.toptitle;
    wrapper.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    wrapper.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('h4');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    wrapper.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('div');
    descriptionText.innerHTML = config.description;
    wrapper.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerHTML = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = 'Datos: ' + record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the credit for the vignette
    if (record.source) {
        var source = document.createElement('p');
        source.classList.add('Fuente');
        source.innerHTML = 'Fuente: ' + record.source;
        chapter.appendChild(source);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Creates the quote for the image
    if (record.quote) {
        var story = document.createElement('p');
        story.innerHTML = record.quote;
        chapter.appendChild(story);
    }
    // Creates the audio 
    if (record.audio) {
        var story = document.createElement('p');
        story.innerHTML = record.audio;
        chapter.appendChild(story);
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    if (record.type) {
        container.setAttribute('class', record.type);
    }
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement('div');
// This assigns all the content to the footer element
if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer + '<br>' + config.footerAttribution;
    footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

if (window.innerWidth < 550) {
    config.chapters[0].location.center = config.chapters[0].location.mobileCenter;
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
//var scroller = scrollama();

map.scrollZoom.disable();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function () {
    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    //Add the World COVID-19 07/07/2020
    map.addLayer({
        'id': 'worldCovid',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/world-covid-19-1807020.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'global_covid19_live_update_Confirmed'],
                '#ffffff',
                0, '#E0E0E0',
                960, '#EAE2B7',
                18421, '#FCBF49',
                66226, '#F77F00',
                217108, '#D62828',
                2948397, '#003049',],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

     //Add the Agentina COVID-19 10/07/2020
     map.addLayer({
        'id': 'argCovid',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/arg-prov-covid-19.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get','arg-casos-covid-19_casos-covid-19-10072020'],
                '#ffffff',
                0,'#FFE8AD',
                89, '#FFCB45',
                263, '#FFC632',
                485, '#FAA307',
                854, '#F48C06',
                2446, '#E85D04',
                95182, '#D62828',],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

     //Add the AMBA covid cases 
     map.addLayer({
        'id': 'ambaCovid',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/amba-covid-19-10072020.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get','casos-covid-19'],
                '#f7f7f7',
                54, '#FFF3D6', 
                66, '#FFF3D6', 
                75, '#FFF3D6', 
                100,'#FFF3D6', 
                157,'#FFF3D6', 
                184,'#FFF3D6', 
                345, '#FFF3D6', 
                410, '#FFF3D6', 
                549,'#FFE8AD',
                1339, '#FAA307',
                2228, '#DC2F02',
                4454, '#D61801',
                7293, '#D00000',],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

    //Add the Villas Miseria Layer
    map.addLayer({
        'id': 'villasMiseria',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/villas-miseria.geojson'
        },
        'paint': {
          'fill-color': '#000000',
          'fill-opacity': 0
        }
    }, firstSymbolId);

    //Add the Villas Miseria Perimetros
    map.addLayer({
        'id': 'villasMiseriaPerimetros',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/villas-miseria.geojson'
        },
        'paint': {
          'line-color': '#D62828',
          'line-width': 0.8
        }
    }, firstSymbolId);

     //Add the Villas Miseria Perimetros bolder
     map.addLayer({
        'id': 'villasMiseriaPeriBold',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/villas-miseria.geojson'
        },
        'paint': {
          'line-color': '#D62828',
          'line-width': 3
        }
    }, firstSymbolId);

    // Add the labels layer
    map.addLayer({
        'id': 'villasMiseriaName',
        'type': 'symbol',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/villas-miseria.geojson'
        },
        'layout': {
            'text-field': ['get', 'Listado Nacional de Barrios 2018_Nombre Barrio 2'],
            'text-allow-overlap': true,
            'text-offset': [0, 0.8],
            'text-anchor': 'center',
            'text-size': 15
        },
        'paint': {
            'text-color': "#000"
        }
    }, firstSymbolId);
    
    // Add the Ponderación map 
    map.addLayer({
        'id': 'ponderacion',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/gba_caba_ponderacion.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'Ponderacio'],
                '#ffffff',
                0.03, '#f7f7f7',
                0.1161, '#cccccc',
                0.1381, '#969696',
                0.1611, '#636363',
                0.1981, '#252525'],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

    // Add the Hacinamiento map 
    map.addLayer({
        'id': 'hacinamientoCritico',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/gba_caba_hacinamiento_critico.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'porc_hog_1'],
                '#ffffff',
                0, '#e5e5e5',
                0.03, '#eae2b7',
                0.07, '#fcbf49',
                0.13, '#dc2f02',
                0.31, '#dc2f02'],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

     // Add the falta de baños map 
     map.addLayer({
        'id': 'servInsuf',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': 'data/geojson/gba-serv-insuf.geojson'
        },
        'paint': {
            'fill-color': ['step', ['get', 'ccsb_insuf'],
                '#ffffff',
                0, '#e5e5e5',
                2, '#e5e5e5',
                5, '#e5e5e5',
                10, '#FFF9EB',
                30, '#FFF9EB',
                90, '#FFF9EB',
                122, '#FFD465',
                217, '#FFD465',
                224, '#DC2F02',
                309, '#DC2F02',
                340, '#DC2F02',
                456, '#DC2F02',
                997, '#DC2F02'],
            'fill-opacity': 0
        }
    }, 'waterway-shadow');

    // Setup the instance, pass callback functions
    /*scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            if (window.innerWidth < 550) {
                chapter.location.center = chapter.location.mobileCenter;
            }
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');

            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });*/
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
//window.addEventListener('resize', scroller.resize);