/* JS for Final Project Part A
Heshan Punchihewa
2022-04-20 */

//global vars for all methods
//let xmlobj = new XMLHttpRequest();
let data; //data from json

//${subData.the_geom.coordinates[0]}


//loads JSON file and adds listeners on window load
//window.onload=loadJson;

function loadJson(){
    document.getElementById("schoolName").addEventListener("keyup", function (){searchByName(this.value);},false);
    document.getElementById("schoolType").addEventListener("change", function (){searchByType(this.value);},false);
    document.getElementById("schoolAddress").addEventListener("keyup", function (){searchByAddress(this.value);},false);
    
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
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        }
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    
    document.getElementById("searchResults").style.display = "block";
    
    
    
    
}

//method for search by Type

function searchByType(selectedType){
    console.log('searchByType... ' + selectedType);//testing
    
    let output =  "<tr><th>School Name</th> <th>Address</th> <th>Phone</th>  <th>Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        //searchName = subData.name.toString().toLowerCase();
        //UserSchoolName = UserSchoolName.toLowerCase();
        //let typeOfSchool ='unavailable';
        
        
        
        if(subData.postsecond === "Y" && selectedType === "postSecondary"){
            typeOfSchool = "Post Secondary";
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        }
        else if(subData.elem === "Y" && selectedType === "elementary") {
            typeOfSchool = subData.grades;
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        }else if(subData.junior_h === "Y" && selectedType === "juniorHigh"){
            typeOfSchool = subData.grades;
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]} target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        } else if(subData.senior_h === "Y" && selectedType === "seniorHigh"){
            typeOfSchool = subData.grades;
            
            output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
        }
        
        
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;  
    document.getElementById("searchResults").style.display = "block";
    
}

//method for search by Address
function searchByAddress(userAddress){
    
    let searchAddress = '';
    let output =  "<tr><th>School Name</th> <th>Address</th> <th>Phone</th>  <th>Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        if(subData.address){
            searchAddress = subData.address.toString().toLowerCase();
            console.log(searchAddress);
            userAddress = userAddress.toLowerCase();
            let typeOfSchool ='unavailable';
            
            if(searchAddress.startsWith(userAddress)){
                
                if(subData.postsecond === "Y"){
                    typeOfSchool = "Post Secondary";
                }
                else {
                    typeOfSchool = subData.grades;
                }
                
                output += `<tr><td>${subData.name}</td> <td>${subData.address}, ${subData.postal_cod}</td> <td>${subData.phone_no}</td>  <td>${typeOfSchool}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.the_geom.coordinates[1]}%2C${subData.the_geom.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
            }
        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
}

