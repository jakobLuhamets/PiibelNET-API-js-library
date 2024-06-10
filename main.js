function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function avaPiiblist(otsing){

    if (typeof otsing != "string"){
        return "Vigane päring!";
    }

    let aadress = "https://piibel.net/.xml?q=" + otsing;

    var tulemus = Get(aadress);

    const {DOMParser} = require('xmldom');

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(tulemus, 'text/xml');
    const tekst = xmlDoc.querySelectorAll('verse').textContent;

    return tekst;
}
