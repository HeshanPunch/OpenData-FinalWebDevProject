/* JS for Final Project Par A
Heshan Punchihewa
2022-04-20 */

//global vars for all methods
var xmlobj = new XMLHttpRequest();
var data; //data from json


//loads JSON file and adds listeners on window load
window.onload=loadJson;

function loadJson(){
    document.getElementById("schoolName").addEventListener("keyup", function (){searchByName(this.value);},false);
    
    //TO-DO: need 3 criteria + 
    
    //load xml
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200){
            data = JSON.parse(xmlobj.responseText);
        }
        
    };
    
    xmlobj.open("GET", "https://data.calgary.ca/resource/fd9t-tdn2.json", true);
    xmlobj.send();
    
}

//method for search by Name


//method for search by Type

//method for search by Address

