var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_d_Halte_Surabaya_2 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_2 = format_d_Halte_Surabaya_2.readFeatures(json_d_Halte_Surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_2.addFeatures(features_d_Halte_Surabaya_2);
var lyr_d_Halte_Surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_2, 
                style: style_d_Halte_Surabaya_2,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
    title: 'd_Halte_Surabaya<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_2.png" /> Halte Basra<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_30.png" /> Halte PMI<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/d_Halte_Surabaya_2_43.png" /> Halte Yos Sudarso<br />'
        });
var format_Servicearealines_3 = new ol.format.GeoJSON();
var features_Servicearealines_3 = format_Servicearealines_3.readFeatures(json_Servicearealines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_3.addFeatures(features_Servicearealines_3);
var lyr_Servicearealines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_3, 
                style: style_Servicearealines_3,
                popuplayertitle: "Service area (lines)",
                interactive: true,
    title: 'Service area (lines)<br />\
    <img src="styles/legend/Servicearealines_3_0.png" /> 400<br />'
        });

lyr_ESRIGraydark_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_d_Halte_Surabaya_2.setVisible(true);lyr_Servicearealines_3.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_KecamatanGenteng_1,lyr_d_Halte_Surabaya_2,lyr_Servicearealines_3];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_d_Halte_Surabaya_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Jangkauan': 'Jangkauan', });
lyr_Servicearealines_3.set('fieldAliases', {'fid': 'fid', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_d_Halte_Surabaya_2.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_Servicearealines_3.set('fieldImages', {'fid': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Jangkauan': 'Range', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'inline label - always visible', 'Kelurahan': 'inline label - always visible', });
lyr_d_Halte_Surabaya_2.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Jangkauan': 'inline label - always visible', });
lyr_Servicearealines_3.set('fieldLabels', {'fid': 'hidden field', 'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan': 'inline label - always visible', });
lyr_Servicearealines_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});