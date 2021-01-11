function initMap() {
    var men = { lat: 57.708870, lng: 11.974560 }; /*Gothenburg*/
    var vra = { lat: 57.571000, lng: 11.785640 }; /*Vrango*/
    var lis = { lat: 57.695320, lng: 11.990840 }; /*Liseberg*/
    var bor = { lat: 57.721000, lng: 12.940250 }; /*Boras*/
    var slo = { lat: 57.686820, lng: 11.935010 }; /*Slottsskogen*/
    var uni = { lat: 57.696990, lng: 11.986500 }; /*Universeum*/
    var gom = { lat: 57.696991, lng: 11.986500 }; /*Goteborg Museum*/
    var bot = { lat: 57.696990, lng: 11.986500 }; /*Botanisa*/
    var tra = { lat: 57.805490, lng: 12.046590 }; /*Tradgarden*/
    var mar = { lat: 57.886520, lng: 11.580500 }; /*Marstrand*/
    var ofc = { lat: 57.696930, lng: 11.947250 }; /*Oscar Fredrik Church*/
    var ask = { lat: 57.696990, lng: 11.986500 }; /*Askim*/
    var del = { lat: 57.686450, lng: 12.018280 }; /*Delsjon*/
    var vat = { lat: 58.039180, lng: 11.986500 }; /*Vattlestugan*/
    var goc = { lat: 58.107690, lng: 12.149440 }; /*Gota Canal*/
    var bro = { lat: 57.705570, lng: 11.963301 }; /*Brogyllen*/
    var rod = { lat: 57.879530, lng: 12.021010 }; /*Roda Gelato*/
    var ava = { lat: 57.696990, lng: 11.986500 }; /*Avalon*/
    var got = { lat: 57.697479, lng: 11.989051 }; /*Gothia Towers*/

    if (document.getElementById("location").value == 'men') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: men
        });
        new google.maps.Marker({
            position: men,
            map,

        });
    }
    else if (document.getElementById("location").value == 'vra') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: vra
        });
        new google.maps.Marker({
            position: vra,
            map,

        });
    } 
    else if (document.getElementById("location").value == 'lis') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: lis
        });
        new google.maps.Marker({
            position: lis,
            map,

        });
    }
    else if (document.getElementById("location").value == 'bor') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: bor
        });
        new google.maps.Marker({
            position: bor,
            map,

        });
    }
    else if (document.getElementById("location").value == 'slo') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: slo
        });
        new google.maps.Marker({
            position: slo,
            map,

        });
    }
    else if (document.getElementById("location").value == 'uni') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: uni
        });
        new google.maps.Marker({
            position: uni,
            map,

        });
    }
    else if (document.getElementById("location").value == 'gom') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: gom
        });
        new google.maps.Marker({
            position: gom,
            map,

        });
    }
    else if (document.getElementById("location").value == 'bot') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: bot
        });
        new google.maps.Marker({
            position: bot,
            map,

        });
    }
    else if (document.getElementById("location").value == 'tra') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: tra
        });
        new google.maps.Marker({
            position: tra,
            map,

        });
    }
    else if (document.getElementById("location").value == 'mar') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: mar
        });
        new google.maps.Marker({
            position: mar,
            map,

        });
    }
    else if (document.getElementById("location").value == 'ofc') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: ofc
        });
        new google.maps.Marker({
            position: ofc,
            map,

        });
    }
    else if (document.getElementById("location").value == 'ask') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: ask
        });
        new google.maps.Marker({
            position: ask,
            map,

        });
    }
    else if (document.getElementById("location").value == 'del') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
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
            zoom: 10,
            center: bro
        });
        new google.maps.Marker({
            position: bro,
            map,

        });
    }
    else if (document.getElementById("location").value == 'rod') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: rod
        });
        new google.maps.Marker({
            position: rod,
            map,

        });
    }
    else if (document.getElementById("location").value == 'ava') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: ava
        });
        new google.maps.Marker({
            position: ava,
            map,

        });
    }
    else if (document.getElementById("location").value == 'got') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: got
        });
        new google.maps.Marker({
            position: got,
            map,

        });
    }
}
