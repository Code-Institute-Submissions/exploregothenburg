function initMap() {
    var men = { lat: 57.708870, lng: 11.974560 }; /*Gothenburg*/
    var vra = { lat: 57.571000, lng: 11.785640 }; /*Vrango*/
    var lis = { lat: 57.695219, lng: 11.992464 }; /*Liseberg*/
    var bor = { lat: 57.721000, lng: 12.940250 }; /*Boras*/
    var slo = { lat: 57.683966, lng: 11.943923 }; /*Slottsskogen*/
    var uni = { lat: 57.695535, lng: 11.989406 }; /*Universeum*/
    var gom = { lat: 57.706389, lng: 11.963889 }; /*Goteborg Museum*/
    var bot = { lat: 57.682853, lng: 11.950377 }; /*Botaniska*/
    var tra = { lat: 57.707174, lng: 11.975132 }; /*Tradgarden*/
    var mar = { lat: 57.88845, lng: 11.596745 }; /*Marstrand*/
    var ofc = { lat: 57.696314, lng: 11.948104 }; /*Oscar Fredrik Church*/
    var ask = { lat: 57.615844, lng: 11.945608 }; /*Askim*/
    var del = { lat: 57.684722, lng: 12.045833 }; /*Delsjon*/
    var vat = { lat: 57.813243, lng: 12.052485 }; /*Vattlestugan*/
    var goc = { lat: 58.107690, lng: 12.149440 }; /*Gota Canal*/
    var bro = { lat: 57.705544, lng: 11.963371 }; /*Brogyllen*/
    var rod = { lat: 57.696264, lng: 11.952316 }; /*Rada Gelato*/
    var ava = { lat: 57.703977, lng: 11.968236 }; /*Avalon*/
    var got = { lat: 57.697391, lng: 11.989012 }; /*Gothia Towers*/

    /*Select Location*/
    /*Display Map & Marker on map*/
    if (document.getElementById("location").value == 'men') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: men
        });
        new google.maps.Marker({
            position: men,
            map,
        });
    }
    else if (document.getElementById("location").value == 'vra') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: vra
        });
        new google.maps.Marker({
            position: vra,
            map,
        });
    } 
    else if (document.getElementById("location").value == 'lis') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: lis
        });
        new google.maps.Marker({
            position: lis,
            map,
        });
    }
    else if (document.getElementById("location").value == 'bor') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: bor
        });
        new google.maps.Marker({
            position: bor,
            map,
        });
    }
    else if (document.getElementById("location").value == 'slo') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: slo
        });
        new google.maps.Marker({
            position: slo,
            map,
        });
    }
    else if (document.getElementById("location").value == 'uni') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: uni
        });
        new google.maps.Marker({
            position: uni,
            map,
        });
    }
    else if (document.getElementById("location").value == 'gom') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: gom
        });
        new google.maps.Marker({
            position: gom,
            map,
        });
    }
    else if (document.getElementById("location").value == 'bot') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: bot
        });
        new google.maps.Marker({
            position: bot,
            map,
        });
    }
    else if (document.getElementById("location").value == 'tra') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: tra
        });
        new google.maps.Marker({
            position: tra,
            map,
        });
    }
    else if (document.getElementById("location").value == 'mar') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: mar
        });
        new google.maps.Marker({
            position: mar,
            map,
        });
    }
    else if (document.getElementById("location").value == 'ofc') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: ofc
        });
        new google.maps.Marker({
            position: ofc,
            map,
        });
    }
    else if (document.getElementById("location").value == 'ask') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: ask
        });
        new google.maps.Marker({
            position: ask,
            map,
        });
    }
    else if (document.getElementById("location").value == 'del') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: del
        });
        new google.maps.Marker({
            position: del,
            map,
        });
    }
    else if (document.getElementById("location").value == 'vat') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: vat
        });
        new google.maps.Marker({
            position: vat,
            map,
        });
    }
    else if (document.getElementById("location").value == 'goc') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: goc
        });
        new google.maps.Marker({
            position: goc,
            map,
        });
    }
    else if (document.getElementById("location").value == 'bro') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: bro
        });
        new google.maps.Marker({
            position: bro,
            map,

        });
    }
    else if (document.getElementById("location").value == 'rod') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: rod
        });
        new google.maps.Marker({
            position: rod,
            map,
        });
    }
    else if (document.getElementById("location").value == 'ava') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: ava
        });
        new google.maps.Marker({
            position: ava,
            map,
        });
    }
    else if (document.getElementById("location").value == 'got') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: got
        });
        new google.maps.Marker({
            position: got,
            map,
        });
    }
}
