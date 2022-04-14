/* JS for Final Project Par A
Heshan Punchihewa
2022-04-20 */

//global vars for all methods
let xmlobj = new XMLHttpRequest();
let data; //data from json

//${subData.the_geom.coordinates[0]}


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
function searchByName(UserSchoolName){
    console.log ('Searching by name...');
    let searchName = '';
    let output =  "<tr><th>School Name</th> <th>Address</th> <th>Phone</th>  <th>Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        searchName = subData.name.toString().toLowerCase();
        UserSchoolName = UserSchoolName.toLowerCase();
        let typeOfSchool ='unavailable';
        
        if(searchName.startsWith(UserSchoolName)){

            if(subData.postsecond === "Y"){
                typeOfSchool = "Post Secondary";
            }
            else {
                typeOfSchool = subData.grades;
            }
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        }
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;  
    
    
    
}

//method for search by Type

//method for search by Address

