/* JS for Final Project Par A
Heshan Punchihewa
2022-04-20 */

//global vars for all methods
let xmlobj = new XMLHttpRequest();


//global fo user selection
var userSelection;
var data;


//loads function to make selection

function schoolsFunction(){
    
    console.log("schoolsFunction() ")
    //load xml
    
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200) {
            document.getElementById("form").innerHTML= xmlobj.responseText;
            loadJsonSchools();
        }
    };
    
    xmlobj.open("GET", "schools.html", true);
    xmlobj.send();
}

function trashFunction(){
    console.log("Script 1 trashFunction() ")
    //load xml
    
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200) {
            document.getElementById("form").innerHTML= xmlobj.responseText;
            loadJsonTrash();
        }
    };
    
    xmlobj.open("GET", "collectionSchedule.html", true);
    xmlobj.send();
}

function trafficFunction(){
    console.log("Script 1 trafficFunction() ")
    //load xml
    
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200) {
            document.getElementById("form").innerHTML= xmlobj.responseText;
            loadJsonTraffic();
        }
    };
    
    xmlobj.open("GET", "trafficCameras.html", true);
    xmlobj.send();
}

function historicResFunction(){
    console.log("Script historicResFunction() ")
    //load xml
    
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200) {
            document.getElementById("form").innerHTML= xmlobj.responseText;
            loadJsonHistoricRes();
        }
    };
    
    xmlobj.open("GET", "historicResource.html", true);
    xmlobj.send();
}








