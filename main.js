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


    const parser = new DOMParser();
    
    var xmlDocument = parser.parseFromString(tulemus,"application/xml");

    const titleElements = xmlDocument.querySelectorAll('verse');


    var titleArray = Array.from(titleElements);
    console.log(titleArray);
    
    var sisu = ""
    for (i in titleArray){
        sisu = sisu + titleArray[i].textContent;
    }

    sisu = sisu.split(/<\/span><span class="q">/).join('');
    sisu = sisu.split(/<span class="q">/).join('');
    sisu = sisu.split(/<[^>]*>/).join(' ');
    sisu = sisu.split('.').join('. ');
    sisu = sisu.split('.  ').join('. ');

    return sisu;
}

//Testimiseks
//console.log(avaPiiblist("1Ms:3"))
