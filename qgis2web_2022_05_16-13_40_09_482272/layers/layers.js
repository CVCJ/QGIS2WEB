var wms_layers = [];


        var lyr_Bingvirtualearth_0 = new ol.layer.Tile({
            'title': 'Bing virtual earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.343000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tourdivide2021_v2_track_postgis_2 = new ol.format.GeoJSON();
var features_tourdivide2021_v2_track_postgis_2 = format_tourdivide2021_v2_track_postgis_2.readFeatures(json_tourdivide2021_v2_track_postgis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourdivide2021_v2_track_postgis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourdivide2021_v2_track_postgis_2.addFeatures(features_tourdivide2021_v2_track_postgis_2);
var lyr_tourdivide2021_v2_track_postgis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tourdivide2021_v2_track_postgis_2, 
                style: style_tourdivide2021_v2_track_postgis_2,
                interactive: false,
                title: '<img src="styles/legend/tourdivide2021_v2_track_postgis_2.png" /> tourdivide2021_v2_track_postgis'
            });
var format_post_office_buffer_3 = new ol.format.GeoJSON();
var features_post_office_buffer_3 = format_post_office_buffer_3.readFeatures(json_post_office_buffer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_post_office_buffer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_post_office_buffer_3.addFeatures(features_post_office_buffer_3);
var lyr_post_office_buffer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_post_office_buffer_3, 
                style: style_post_office_buffer_3,
                interactive: true,
                title: '<img src="styles/legend/post_office_buffer_3.png" /> post_office_buffer'
            });

lyr_Bingvirtualearth_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_tourdivide2021_v2_track_postgis_2.setVisible(true);lyr_post_office_buffer_3.setVisible(true);
var layersList = [lyr_Bingvirtualearth_0,lyr_OpenStreetMap_1,lyr_tourdivide2021_v2_track_postgis_2,lyr_post_office_buffer_3];
lyr_tourdivide2021_v2_track_postgis_2.set('fieldAliases', {'gid': 'gid', 'name': 'name', 'gpxx_track': 'gpxx_track', 'line': 'line', });
lyr_post_office_buffer_3.set('fieldAliases', {'gid': 'gid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'opening_ho': 'opening_ho', 'phone': 'phone', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', '__gid': '__gid', });
lyr_tourdivide2021_v2_track_postgis_2.set('fieldImages', {'gid': 'TextEdit', 'name': 'TextEdit', 'gpxx_track': 'TextEdit', 'line': 'TextEdit', });
lyr_post_office_buffer_3.set('fieldImages', {'gid': '', 'full_id': '', 'osm_id': '', 'opening_ho': '', 'phone': '', 'name': '', 'addr_stree': '', 'addr_house': '', '__gid': '', });
lyr_tourdivide2021_v2_track_postgis_2.set('fieldLabels', {'gid': 'no label', 'name': 'no label', 'gpxx_track': 'no label', 'line': 'no label', });
lyr_post_office_buffer_3.set('fieldLabels', {'gid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'opening_ho': 'no label', 'phone': 'no label', 'name': 'inline label', 'addr_stree': 'inline label', 'addr_house': 'inline label', '__gid': 'no label', });
lyr_post_office_buffer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});