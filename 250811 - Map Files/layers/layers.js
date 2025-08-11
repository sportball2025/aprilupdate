var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Feb25ManualWebsiteTraffic_1 = new ol.format.GeoJSON();
var features_Feb25ManualWebsiteTraffic_1 = format_Feb25ManualWebsiteTraffic_1.readFeatures(json_Feb25ManualWebsiteTraffic_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feb25ManualWebsiteTraffic_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feb25ManualWebsiteTraffic_1.addFeatures(features_Feb25ManualWebsiteTraffic_1);
var lyr_Feb25ManualWebsiteTraffic_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feb25ManualWebsiteTraffic_1, 
                style: style_Feb25ManualWebsiteTraffic_1,
                popuplayertitle: 'Feb-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Feb25ManualWebsiteTraffic_1.png" /> Feb-25 Manual Website Traffic'
            });
var format_Feb25AutoWebsiteTraffic_2 = new ol.format.GeoJSON();
var features_Feb25AutoWebsiteTraffic_2 = format_Feb25AutoWebsiteTraffic_2.readFeatures(json_Feb25AutoWebsiteTraffic_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Feb25AutoWebsiteTraffic_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Feb25AutoWebsiteTraffic_2.addFeatures(features_Feb25AutoWebsiteTraffic_2);
var lyr_Feb25AutoWebsiteTraffic_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Feb25AutoWebsiteTraffic_2, 
                style: style_Feb25AutoWebsiteTraffic_2,
                popuplayertitle: 'Feb-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Feb25AutoWebsiteTraffic_2.png" /> Feb-25 Auto Website Traffic'
            });
var format_Mar25ManualWebsiteTraffic_3 = new ol.format.GeoJSON();
var features_Mar25ManualWebsiteTraffic_3 = format_Mar25ManualWebsiteTraffic_3.readFeatures(json_Mar25ManualWebsiteTraffic_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mar25ManualWebsiteTraffic_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mar25ManualWebsiteTraffic_3.addFeatures(features_Mar25ManualWebsiteTraffic_3);
var lyr_Mar25ManualWebsiteTraffic_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mar25ManualWebsiteTraffic_3, 
                style: style_Mar25ManualWebsiteTraffic_3,
                popuplayertitle: 'Mar-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Mar25ManualWebsiteTraffic_3.png" /> Mar-25 Manual Website Traffic'
            });
var format_Mar25AutoWebsiteTraffic_4 = new ol.format.GeoJSON();
var features_Mar25AutoWebsiteTraffic_4 = format_Mar25AutoWebsiteTraffic_4.readFeatures(json_Mar25AutoWebsiteTraffic_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mar25AutoWebsiteTraffic_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mar25AutoWebsiteTraffic_4.addFeatures(features_Mar25AutoWebsiteTraffic_4);
var lyr_Mar25AutoWebsiteTraffic_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mar25AutoWebsiteTraffic_4, 
                style: style_Mar25AutoWebsiteTraffic_4,
                popuplayertitle: 'Mar-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Mar25AutoWebsiteTraffic_4.png" /> Mar-25 Auto Website Traffic'
            });
var format_May25ManualWebsiteTraffic_5 = new ol.format.GeoJSON();
var features_May25ManualWebsiteTraffic_5 = format_May25ManualWebsiteTraffic_5.readFeatures(json_May25ManualWebsiteTraffic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May25ManualWebsiteTraffic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May25ManualWebsiteTraffic_5.addFeatures(features_May25ManualWebsiteTraffic_5);
var lyr_May25ManualWebsiteTraffic_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_May25ManualWebsiteTraffic_5, 
                style: style_May25ManualWebsiteTraffic_5,
                popuplayertitle: 'May-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/May25ManualWebsiteTraffic_5.png" /> May-25 Manual Website Traffic'
            });
var format_May25AutoWebsiteTraffic_6 = new ol.format.GeoJSON();
var features_May25AutoWebsiteTraffic_6 = format_May25AutoWebsiteTraffic_6.readFeatures(json_May25AutoWebsiteTraffic_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_May25AutoWebsiteTraffic_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_May25AutoWebsiteTraffic_6.addFeatures(features_May25AutoWebsiteTraffic_6);
var lyr_May25AutoWebsiteTraffic_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_May25AutoWebsiteTraffic_6, 
                style: style_May25AutoWebsiteTraffic_6,
                popuplayertitle: 'May-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/May25AutoWebsiteTraffic_6.png" /> May-25 Auto Website Traffic'
            });
var format_Jun25ManualWebsiteTraffic_7 = new ol.format.GeoJSON();
var features_Jun25ManualWebsiteTraffic_7 = format_Jun25ManualWebsiteTraffic_7.readFeatures(json_Jun25ManualWebsiteTraffic_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jun25ManualWebsiteTraffic_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jun25ManualWebsiteTraffic_7.addFeatures(features_Jun25ManualWebsiteTraffic_7);
var lyr_Jun25ManualWebsiteTraffic_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jun25ManualWebsiteTraffic_7, 
                style: style_Jun25ManualWebsiteTraffic_7,
                popuplayertitle: 'Jun-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Jun25ManualWebsiteTraffic_7.png" /> Jun-25 Manual Website Traffic'
            });
var format_Jun25AutoWebsiteTraffic_8 = new ol.format.GeoJSON();
var features_Jun25AutoWebsiteTraffic_8 = format_Jun25AutoWebsiteTraffic_8.readFeatures(json_Jun25AutoWebsiteTraffic_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jun25AutoWebsiteTraffic_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jun25AutoWebsiteTraffic_8.addFeatures(features_Jun25AutoWebsiteTraffic_8);
var lyr_Jun25AutoWebsiteTraffic_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jun25AutoWebsiteTraffic_8, 
                style: style_Jun25AutoWebsiteTraffic_8,
                popuplayertitle: 'Jun-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Jun25AutoWebsiteTraffic_8.png" /> Jun-25 Auto Website Traffic'
            });
var format_Jul25ManualWebsiteTraffic_9 = new ol.format.GeoJSON();
var features_Jul25ManualWebsiteTraffic_9 = format_Jul25ManualWebsiteTraffic_9.readFeatures(json_Jul25ManualWebsiteTraffic_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jul25ManualWebsiteTraffic_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jul25ManualWebsiteTraffic_9.addFeatures(features_Jul25ManualWebsiteTraffic_9);
var lyr_Jul25ManualWebsiteTraffic_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jul25ManualWebsiteTraffic_9, 
                style: style_Jul25ManualWebsiteTraffic_9,
                popuplayertitle: 'Jul-25 Manual Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Jul25ManualWebsiteTraffic_9.png" /> Jul-25 Manual Website Traffic'
            });
var format_Jul25AutoWebsiteTraffic_10 = new ol.format.GeoJSON();
var features_Jul25AutoWebsiteTraffic_10 = format_Jul25AutoWebsiteTraffic_10.readFeatures(json_Jul25AutoWebsiteTraffic_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jul25AutoWebsiteTraffic_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jul25AutoWebsiteTraffic_10.addFeatures(features_Jul25AutoWebsiteTraffic_10);
var lyr_Jul25AutoWebsiteTraffic_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jul25AutoWebsiteTraffic_10, 
                style: style_Jul25AutoWebsiteTraffic_10,
                popuplayertitle: 'Jul-25 Auto Website Traffic',
                interactive: true,
                title: '<img src="styles/legend/Jul25AutoWebsiteTraffic_10.png" /> Jul-25 Auto Website Traffic'
            });
var format_IndoorLocations_11 = new ol.format.GeoJSON();
var features_IndoorLocations_11 = format_IndoorLocations_11.readFeatures(json_IndoorLocations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndoorLocations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndoorLocations_11.addFeatures(features_IndoorLocations_11);
var lyr_IndoorLocations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndoorLocations_11, 
                style: style_IndoorLocations_11,
                popuplayertitle: 'Indoor Locations',
                interactive: true,
                title: '<img src="styles/legend/IndoorLocations_11.png" /> Indoor Locations'
            });
var format_OutdoorLocations_12 = new ol.format.GeoJSON();
var features_OutdoorLocations_12 = format_OutdoorLocations_12.readFeatures(json_OutdoorLocations_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutdoorLocations_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutdoorLocations_12.addFeatures(features_OutdoorLocations_12);
var lyr_OutdoorLocations_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutdoorLocations_12, 
                style: style_OutdoorLocations_12,
                popuplayertitle: 'Outdoor Locations',
                interactive: true,
                title: '<img src="styles/legend/OutdoorLocations_12.png" /> Outdoor Locations'
            });

lyr_BaseMap_0.setVisible(true);lyr_Feb25ManualWebsiteTraffic_1.setVisible(true);lyr_Feb25AutoWebsiteTraffic_2.setVisible(true);lyr_Mar25ManualWebsiteTraffic_3.setVisible(true);lyr_Mar25AutoWebsiteTraffic_4.setVisible(true);lyr_May25ManualWebsiteTraffic_5.setVisible(true);lyr_May25AutoWebsiteTraffic_6.setVisible(true);lyr_Jun25ManualWebsiteTraffic_7.setVisible(true);lyr_Jun25AutoWebsiteTraffic_8.setVisible(true);lyr_Jul25ManualWebsiteTraffic_9.setVisible(true);lyr_Jul25AutoWebsiteTraffic_10.setVisible(true);lyr_IndoorLocations_11.setVisible(true);lyr_OutdoorLocations_12.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Feb25ManualWebsiteTraffic_1,lyr_Feb25AutoWebsiteTraffic_2,lyr_Mar25ManualWebsiteTraffic_3,lyr_Mar25AutoWebsiteTraffic_4,lyr_May25ManualWebsiteTraffic_5,lyr_May25AutoWebsiteTraffic_6,lyr_Jun25ManualWebsiteTraffic_7,lyr_Jun25AutoWebsiteTraffic_8,lyr_Jul25ManualWebsiteTraffic_9,lyr_Jul25AutoWebsiteTraffic_10,lyr_IndoorLocations_11,lyr_OutdoorLocations_12];
lyr_Feb25ManualWebsiteTraffic_1.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Feb25AutoWebsiteTraffic_2.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Mar25ManualWebsiteTraffic_3.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Mar25AutoWebsiteTraffic_4.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_May25ManualWebsiteTraffic_5.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_May25AutoWebsiteTraffic_6.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Jun25ManualWebsiteTraffic_7.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Jun25AutoWebsiteTraffic_8.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Jul25ManualWebsiteTraffic_9.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_Jul25AutoWebsiteTraffic_10.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Number of visits': 'Number of visits', 'Month': 'Month', });
lyr_IndoorLocations_11.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_OutdoorLocations_12.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Location Name': 'Location Name', 'Location Type': 'Location Type', });
lyr_Feb25ManualWebsiteTraffic_1.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Feb25AutoWebsiteTraffic_2.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Mar25ManualWebsiteTraffic_3.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Mar25AutoWebsiteTraffic_4.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_May25ManualWebsiteTraffic_5.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_May25AutoWebsiteTraffic_6.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Jun25ManualWebsiteTraffic_7.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Jun25AutoWebsiteTraffic_8.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Jul25ManualWebsiteTraffic_9.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_Jul25AutoWebsiteTraffic_10.set('fieldImages', {'Lat': 'TextEdit', 'Long': 'TextEdit', 'Number of visits': 'Range', 'Month': 'TextEdit', });
lyr_IndoorLocations_11.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_OutdoorLocations_12.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Location Name': 'TextEdit', 'Location Type': 'TextEdit', });
lyr_Feb25ManualWebsiteTraffic_1.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Feb25AutoWebsiteTraffic_2.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Mar25ManualWebsiteTraffic_3.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Mar25AutoWebsiteTraffic_4.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_May25ManualWebsiteTraffic_5.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_May25AutoWebsiteTraffic_6.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Jun25ManualWebsiteTraffic_7.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Jun25AutoWebsiteTraffic_8.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - always visible', 'Month': 'inline label - visible with data', });
lyr_Jul25ManualWebsiteTraffic_9.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_Jul25AutoWebsiteTraffic_10.set('fieldLabels', {'Lat': 'no label', 'Long': 'no label', 'Number of visits': 'inline label - visible with data', 'Month': 'inline label - visible with data', });
lyr_IndoorLocations_11.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_OutdoorLocations_12.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Location Name': 'inline label - visible with data', 'Location Type': 'inline label - visible with data', });
lyr_OutdoorLocations_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});