var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_isoc_city_distritos_1 = new ol.format.GeoJSON();
var features_isoc_city_distritos_1 = format_isoc_city_distritos_1.readFeatures(json_isoc_city_distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoc_city_distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoc_city_distritos_1.addFeatures(features_isoc_city_distritos_1);
var lyr_isoc_city_distritos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoc_city_distritos_1, 
                style: style_isoc_city_distritos_1,
                interactive: true,
    title: 'isoc_city_distritos<br />\
    <img src="styles/legend/isoc_city_distritos_1_0.png" /> 12<br />\
    <img src="styles/legend/isoc_city_distritos_1_1.png" /> 38<br />\
    <img src="styles/legend/isoc_city_distritos_1_2.png" /> 52<br />'
        });
var format_isoc_lincohn_distritos_2 = new ol.format.GeoJSON();
var features_isoc_lincohn_distritos_2 = format_isoc_lincohn_distritos_2.readFeatures(json_isoc_lincohn_distritos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoc_lincohn_distritos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoc_lincohn_distritos_2.addFeatures(features_isoc_lincohn_distritos_2);
var lyr_isoc_lincohn_distritos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoc_lincohn_distritos_2, 
                style: style_isoc_lincohn_distritos_2,
                interactive: true,
    title: 'isoc_lincohn_distritos<br />\
    <img src="styles/legend/isoc_lincohn_distritos_2_0.png" /> 7<br />\
    <img src="styles/legend/isoc_lincohn_distritos_2_1.png" /> 24<br />\
    <img src="styles/legend/isoc_lincohn_distritos_2_2.png" /> 32<br />'
        });
var format_isoc_oxigeno_distritos_3 = new ol.format.GeoJSON();
var features_isoc_oxigeno_distritos_3 = format_isoc_oxigeno_distritos_3.readFeatures(json_isoc_oxigeno_distritos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoc_oxigeno_distritos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoc_oxigeno_distritos_3.addFeatures(features_isoc_oxigeno_distritos_3);
var lyr_isoc_oxigeno_distritos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoc_oxigeno_distritos_3, 
                style: style_isoc_oxigeno_distritos_3,
                interactive: true,
    title: 'isoc_oxigeno_distritos<br />\
    <img src="styles/legend/isoc_oxigeno_distritos_3_0.png" /> 8<br />\
    <img src="styles/legend/isoc_oxigeno_distritos_3_1.png" /> 26<br />\
    <img src="styles/legend/isoc_oxigeno_distritos_3_2.png" /> 36<br />'
        });
var format_isoc_multiplaza_distritos_4 = new ol.format.GeoJSON();
var features_isoc_multiplaza_distritos_4 = format_isoc_multiplaza_distritos_4.readFeatures(json_isoc_multiplaza_distritos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoc_multiplaza_distritos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoc_multiplaza_distritos_4.addFeatures(features_isoc_multiplaza_distritos_4);
var lyr_isoc_multiplaza_distritos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoc_multiplaza_distritos_4, 
                style: style_isoc_multiplaza_distritos_4,
                interactive: true,
    title: 'isoc_multiplaza_distritos<br />\
    <img src="styles/legend/isoc_multiplaza_distritos_4_0.png" /> 15<br />\
    <img src="styles/legend/isoc_multiplaza_distritos_4_1.png" /> 49<br />\
    <img src="styles/legend/isoc_multiplaza_distritos_4_2.png" /> 60<br />'
        });
var format_isoc_paseo_distritos_5 = new ol.format.GeoJSON();
var features_isoc_paseo_distritos_5 = format_isoc_paseo_distritos_5.readFeatures(json_isoc_paseo_distritos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoc_paseo_distritos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoc_paseo_distritos_5.addFeatures(features_isoc_paseo_distritos_5);
var lyr_isoc_paseo_distritos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isoc_paseo_distritos_5, 
                style: style_isoc_paseo_distritos_5,
                interactive: true,
    title: 'isoc_paseo_distritos<br />\
    <img src="styles/legend/isoc_paseo_distritos_5_0.png" /> 12<br />\
    <img src="styles/legend/isoc_paseo_distritos_5_1.png" /> 40<br />\
    <img src="styles/legend/isoc_paseo_distritos_5_2.png" /> 55<br />'
        });
var format_isod_multiplaza_distritos_6 = new ol.format.GeoJSON();
var features_isod_multiplaza_distritos_6 = format_isod_multiplaza_distritos_6.readFeatures(json_isod_multiplaza_distritos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isod_multiplaza_distritos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isod_multiplaza_distritos_6.addFeatures(features_isod_multiplaza_distritos_6);
var lyr_isod_multiplaza_distritos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isod_multiplaza_distritos_6, 
                style: style_isod_multiplaza_distritos_6,
                interactive: true,
    title: 'isod_multiplaza_distritos<br />\
    <img src="styles/legend/isod_multiplaza_distritos_6_0.png" /> 10000<br />\
    <img src="styles/legend/isod_multiplaza_distritos_6_1.png" /> 18000<br />\
    <img src="styles/legend/isod_multiplaza_distritos_6_2.png" /> 24000<br />'
        });
var format_isod_city_distritos_7 = new ol.format.GeoJSON();
var features_isod_city_distritos_7 = format_isod_city_distritos_7.readFeatures(json_isod_city_distritos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isod_city_distritos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isod_city_distritos_7.addFeatures(features_isod_city_distritos_7);
var lyr_isod_city_distritos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isod_city_distritos_7, 
                style: style_isod_city_distritos_7,
                interactive: true,
    title: 'isod_city_distritos<br />\
    <img src="styles/legend/isod_city_distritos_7_0.png" /> 10000<br />\
    <img src="styles/legend/isod_city_distritos_7_1.png" /> 18000<br />\
    <img src="styles/legend/isod_city_distritos_7_2.png" /> 24000<br />'
        });
var format_isod_lincohn_distritos_8 = new ol.format.GeoJSON();
var features_isod_lincohn_distritos_8 = format_isod_lincohn_distritos_8.readFeatures(json_isod_lincohn_distritos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isod_lincohn_distritos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isod_lincohn_distritos_8.addFeatures(features_isod_lincohn_distritos_8);
var lyr_isod_lincohn_distritos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isod_lincohn_distritos_8, 
                style: style_isod_lincohn_distritos_8,
                interactive: true,
    title: 'isod_lincohn_distritos<br />\
    <img src="styles/legend/isod_lincohn_distritos_8_0.png" /> 10000<br />\
    <img src="styles/legend/isod_lincohn_distritos_8_1.png" /> 18000<br />\
    <img src="styles/legend/isod_lincohn_distritos_8_2.png" /> 24000<br />'
        });
var format_isod_oxigeno_distritos_9 = new ol.format.GeoJSON();
var features_isod_oxigeno_distritos_9 = format_isod_oxigeno_distritos_9.readFeatures(json_isod_oxigeno_distritos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isod_oxigeno_distritos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isod_oxigeno_distritos_9.addFeatures(features_isod_oxigeno_distritos_9);
var lyr_isod_oxigeno_distritos_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isod_oxigeno_distritos_9, 
                style: style_isod_oxigeno_distritos_9,
                interactive: true,
    title: 'isod_oxigeno_distritos<br />\
    <img src="styles/legend/isod_oxigeno_distritos_9_0.png" /> 10000<br />\
    <img src="styles/legend/isod_oxigeno_distritos_9_1.png" /> 18000<br />\
    <img src="styles/legend/isod_oxigeno_distritos_9_2.png" /> 24000<br />'
        });
var format_isod_paseo_distritos_10 = new ol.format.GeoJSON();
var features_isod_paseo_distritos_10 = format_isod_paseo_distritos_10.readFeatures(json_isod_paseo_distritos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isod_paseo_distritos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isod_paseo_distritos_10.addFeatures(features_isod_paseo_distritos_10);
var lyr_isod_paseo_distritos_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_isod_paseo_distritos_10, 
                style: style_isod_paseo_distritos_10,
                interactive: true,
    title: 'isod_paseo_distritos<br />\
    <img src="styles/legend/isod_paseo_distritos_10_0.png" /> 10000<br />\
    <img src="styles/legend/isod_paseo_distritos_10_1.png" /> 18000<br />\
    <img src="styles/legend/isod_paseo_distritos_10_2.png" /> 24000<br />'
        });
var format_CentrosComerciales_11 = new ol.format.GeoJSON();
var features_CentrosComerciales_11 = format_CentrosComerciales_11.readFeatures(json_CentrosComerciales_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosComerciales_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosComerciales_11.addFeatures(features_CentrosComerciales_11);
var lyr_CentrosComerciales_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosComerciales_11, 
                style: style_CentrosComerciales_11,
                interactive: true,
                title: '<img src="styles/legend/CentrosComerciales_11.png" /> Centros Comerciales'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_isoc_city_distritos_1.setVisible(false);lyr_isoc_lincohn_distritos_2.setVisible(false);lyr_isoc_oxigeno_distritos_3.setVisible(false);lyr_isoc_multiplaza_distritos_4.setVisible(false);lyr_isoc_paseo_distritos_5.setVisible(false);lyr_isod_multiplaza_distritos_6.setVisible(false);lyr_isod_city_distritos_7.setVisible(false);lyr_isod_lincohn_distritos_8.setVisible(false);lyr_isod_oxigeno_distritos_9.setVisible(false);lyr_isod_paseo_distritos_10.setVisible(true);lyr_CentrosComerciales_11.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_isoc_city_distritos_1,lyr_isoc_lincohn_distritos_2,lyr_isoc_oxigeno_distritos_3,lyr_isoc_multiplaza_distritos_4,lyr_isoc_paseo_distritos_5,lyr_isod_multiplaza_distritos_6,lyr_isod_city_distritos_7,lyr_isod_lincohn_distritos_8,lyr_isod_oxigeno_distritos_9,lyr_isod_paseo_distritos_10,lyr_CentrosComerciales_11];
lyr_isoc_city_distritos_1.set('fieldAliases', {'fid': 'fid', 'contorno_min': 'contorno_min', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isocrona_desde': 'isocrona_desde', 'area': 'area', });
lyr_isoc_lincohn_distritos_2.set('fieldAliases', {'fid': 'fid', 'contorno_min': 'contorno_min', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isocrona_desde': 'isocrona_desde', 'area': 'area', });
lyr_isoc_oxigeno_distritos_3.set('fieldAliases', {'fid': 'fid', 'contorno_min': 'contorno_min', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isocrona_desde': 'isocrona_desde', 'area': 'area', });
lyr_isoc_multiplaza_distritos_4.set('fieldAliases', {'fid': 'fid', 'contorno_min': 'contorno_min', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isocrona_desde': 'isocrona_desde', 'area': 'area', });
lyr_isoc_paseo_distritos_5.set('fieldAliases', {'fid': 'fid', 'contorno_min': 'contorno_min', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isocrona_desde': 'isocrona_desde', 'area': 'area', });
lyr_isod_multiplaza_distritos_6.set('fieldAliases', {'fid': 'fid', 'contorno_m': 'contorno_m', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isodista_desde': 'isodista_desde', 'area': 'area', });
lyr_isod_city_distritos_7.set('fieldAliases', {'fid': 'fid', 'contorno_m': 'contorno_m', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isodista_desde': 'isodista_desde', 'area': 'area', });
lyr_isod_lincohn_distritos_8.set('fieldAliases', {'fid': 'fid', 'contorno_m': 'contorno_m', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isodista_desde': 'isodista_desde', 'area': 'area', });
lyr_isod_oxigeno_distritos_9.set('fieldAliases', {'fid': 'fid', 'contorno_m': 'contorno_m', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isodista_desde': 'isodista_desde', 'area': 'area', });
lyr_isod_paseo_distritos_10.set('fieldAliases', {'fid': 'fid', 'contorno_m': 'contorno_m', 'input_feat_id': 'input_feat_id', 'area_distrito': 'area_distrito', 'codigo_dta': 'codigo_dta', 'provincia': 'provincia', 'canton': 'canton', 'distrito': 'distrito', 'weighted_area_distrito': 'weighted_area_distrito', 'area_crs_units': 'area_crs_units', 'area_prcnt': 'area_prcnt', 'isodista_desde': 'isodista_desde', 'area': 'area', });
lyr_CentrosComerciales_11.set('fieldAliases', {'punto': 'punto', });
lyr_isoc_city_distritos_1.set('fieldImages', {'fid': 'TextEdit', 'contorno_min': '', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isocrona_desde': '', 'area': '', });
lyr_isoc_lincohn_distritos_2.set('fieldImages', {'fid': 'TextEdit', 'contorno_min': '', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isocrona_desde': '', 'area': '', });
lyr_isoc_oxigeno_distritos_3.set('fieldImages', {'fid': 'TextEdit', 'contorno_min': '', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isocrona_desde': '', 'area': '', });
lyr_isoc_multiplaza_distritos_4.set('fieldImages', {'fid': 'TextEdit', 'contorno_min': '', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isocrona_desde': '', 'area': '', });
lyr_isoc_paseo_distritos_5.set('fieldImages', {'fid': 'TextEdit', 'contorno_min': '', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isocrona_desde': '', 'area': '', });
lyr_isod_multiplaza_distritos_6.set('fieldImages', {'fid': '', 'contorno_m': '', 'input_feat_id': '', 'area_distrito': '', 'codigo_dta': '', 'provincia': '', 'canton': '', 'distrito': '', 'weighted_area_distrito': '', 'area_crs_units': '', 'area_prcnt': '', 'isodista_desde': '', 'area': '', });
lyr_isod_city_distritos_7.set('fieldImages', {'fid': '', 'contorno_m': '', 'input_feat_id': '', 'area_distrito': '', 'codigo_dta': '', 'provincia': '', 'canton': '', 'distrito': '', 'weighted_area_distrito': '', 'area_crs_units': '', 'area_prcnt': '', 'isodista_desde': '', 'area': '', });
lyr_isod_lincohn_distritos_8.set('fieldImages', {'fid': '', 'contorno_m': '', 'input_feat_id': '', 'area_distrito': '', 'codigo_dta': '', 'provincia': '', 'canton': '', 'distrito': '', 'weighted_area_distrito': '', 'area_crs_units': '', 'area_prcnt': '', 'isodista_desde': '', 'area': '', });
lyr_isod_oxigeno_distritos_9.set('fieldImages', {'fid': '', 'contorno_m': '', 'input_feat_id': '', 'area_distrito': '', 'codigo_dta': '', 'provincia': '', 'canton': '', 'distrito': '', 'weighted_area_distrito': '', 'area_crs_units': '', 'area_prcnt': '', 'isodista_desde': '', 'area': '', });
lyr_isod_paseo_distritos_10.set('fieldImages', {'fid': 'TextEdit', 'contorno_m': 'Range', 'input_feat_id': 'TextEdit', 'area_distrito': 'TextEdit', 'codigo_dta': 'TextEdit', 'provincia': 'TextEdit', 'canton': 'TextEdit', 'distrito': 'TextEdit', 'weighted_area_distrito': 'TextEdit', 'area_crs_units': 'TextEdit', 'area_prcnt': 'TextEdit', 'isodista_desde': 'TextEdit', 'area': '', });
lyr_CentrosComerciales_11.set('fieldImages', {'punto': '', });
lyr_isoc_city_distritos_1.set('fieldLabels', {'fid': 'inline label', 'contorno_min': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isocrona_desde': 'inline label', 'area': 'inline label', });
lyr_isoc_lincohn_distritos_2.set('fieldLabels', {'fid': 'inline label', 'contorno_min': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isocrona_desde': 'inline label', 'area': 'inline label', });
lyr_isoc_oxigeno_distritos_3.set('fieldLabels', {'fid': 'inline label', 'contorno_min': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isocrona_desde': 'inline label', 'area': 'inline label', });
lyr_isoc_multiplaza_distritos_4.set('fieldLabels', {'fid': 'inline label', 'contorno_min': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isocrona_desde': 'inline label', 'area': 'inline label', });
lyr_isoc_paseo_distritos_5.set('fieldLabels', {'fid': 'inline label', 'contorno_min': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isocrona_desde': 'inline label', 'area': 'inline label', });
lyr_isod_multiplaza_distritos_6.set('fieldLabels', {'fid': 'inline label', 'contorno_m': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isodista_desde': 'inline label', 'area': 'inline label', });
lyr_isod_city_distritos_7.set('fieldLabels', {'fid': 'inline label', 'contorno_m': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isodista_desde': 'inline label', 'area': 'inline label', });
lyr_isod_lincohn_distritos_8.set('fieldLabels', {'fid': 'inline label', 'contorno_m': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isodista_desde': 'inline label', 'area': 'inline label', });
lyr_isod_oxigeno_distritos_9.set('fieldLabels', {'fid': 'inline label', 'contorno_m': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isodista_desde': 'inline label', 'area': 'inline label', });
lyr_isod_paseo_distritos_10.set('fieldLabels', {'fid': 'inline label', 'contorno_m': 'inline label', 'input_feat_id': 'inline label', 'area_distrito': 'inline label', 'codigo_dta': 'inline label', 'provincia': 'inline label', 'canton': 'inline label', 'distrito': 'inline label', 'weighted_area_distrito': 'inline label', 'area_crs_units': 'inline label', 'area_prcnt': 'inline label', 'isodista_desde': 'inline label', 'area': 'inline label', });
lyr_CentrosComerciales_11.set('fieldLabels', {'punto': 'inline label', });
lyr_CentrosComerciales_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});