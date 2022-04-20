/* JS for Final Project Part A
Heshan Punchihewa
2022-04-20 
THIS IS FOR THE WASTE COLLECTION DATASET*/

var data;

//functions for Waste and Recycling Collection Schedule
function loadJsonTrash(){
    
    document.getElementById("trashAddress").addEventListener("keyup", function (){searchTrashByAdd(this.value);},false);
    document.getElementById("trashCommunity").addEventListener("keyup", function (){searchByTrashComm(this.value);},false);
    document.getElementById("trashDay").addEventListener("change", function (){searchTrashByDay(this.value);},false);
    
    //load xml
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200){
            data = JSON.parse(xmlobj.responseText);
        }
        
    };
    
    xmlobj.open("GET", "https://data.calgary.ca/resource/jq4t-b745.json", true);
    xmlobj.send();
    
}

function searchTrashByAdd(userAddress){
    
    let searchAddress = '';
    let output =  "<tr><th>Address</th> <th>Community</th> <th>Trash Day</th>  <th>Collection Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        if(subData.address){ //check for undefined
            searchAddress = subData.address.toString().toLowerCase();
            //console.log(searchAddress);
            userAddress = userAddress.toLowerCase();
            
            
            if(searchAddress.includes(userAddress)){
                
                
                output += `<tr><td>${subData.address}</td> <td>${subData.community}</td> <td>${subData.collection_day} </td><td>${subData.commodity}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.latitude}%2C${subData.longitude}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
            }
        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
}

//search by community 
function searchByTrashComm(userComm){
    
    let searchComm = '';
    let output =  "<tr><th>Address</th> <th>Community</th> <th>Trash Day</th>  <th>Collection Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        if(subData.community){ //check for undefined
            searchComm = subData.address.toString().toLowerCase();
            //console.log(searchAddress);
            userComm = userComm.toLowerCase();
            
            
            if(searchComm.includes(userComm)){
                
                
                output += `<tr><td>${subData.address}</td> <td>${subData.community}</td> <td>${subData.collection_day} </td><td>${subData.commodity}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.latitude}%2C${subData.longitude}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
            }
        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
    
}


//search by day 
function searchTrashByDay(userDay){
    let searchDay = '';
    let output =  "<tr><th>Address</th> <th>Community</th> <th>Trash Day</th>  <th>Collection Type</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        
        if(subData.collection_day.includes(userDay)){

            output += `<tr><td>${subData.address}</td> <td>${subData.community}</td> <td>${subData.collection_day} </td><td>${subData.commodity}</td> <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.latitude}%2C${subData.longitude}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`;

        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
    
}