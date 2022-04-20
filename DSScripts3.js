/* JS for Final Project Part A
Heshan Punchihewa
2022-04-20 
THIS IS FOR THE TRAFFIC CAMERA DATASET*/

var data;

//functions for Waste and Recycling Collection Schedule
function loadJsonTraffic(){
    
    document.getElementById("camAddress").addEventListener("keyup", function (){searchByCamAddress(this.value);},false);
    document.getElementById("camDescription").addEventListener("keyup", function (){searchByCamDesc(this.value);},false);
    document.getElementById("camQuadrant").addEventListener("change", function (){searchByCamQuad(this.value);},false);
    
    
    //load xml
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200){
            data = JSON.parse(xmlobj.responseText);
        }
        
    };
    
    xmlobj.open("GET", "https://data.calgary.ca/resource/k7p9-kppz.json", true);
    xmlobj.send();

    
    
}

function searchByCamAddress(userAddress){
   
    let searchAddress = '';
    let output =  "<tr><th>Address</th> <th>Description</th> <th>Quadrant</th>  <th>Photo Preview</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        if(subData.camera_location){ //check for undefined
            searchAddress = subData.camera_location.toString().toLowerCase();
            //console.log(searchAddress);
            userAddress = userAddress.toLowerCase();
            
            
            if(searchAddress.includes(userAddress)){
                
                output += `<tr>
                <td>${subData.camera_location}</td> 
                <td>${subData.camera_url.description}</td> <td>${subData.quadrant} </td>
                <td><div class="icon"> <a href="${subData.camera_url.url}" target="_blank"><img src="images/cctv.png" alt="map icon"></a></div></td>
                <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
            }
        }
        
    }
    
    
    //output format as table
    
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
}

//search by community 
function searchByCamDesc(userDesc){
    
    let searchDesc = '';
    let output =  "<tr><th>Address</th> <th>Description</th> <th>Quadrant</th>  <th>Photo Preview</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        if(subData.camera_url.description){ //check for undefined
            searchDesc = subData.camera_url.description.toString().toLowerCase();
            //console.log(searchAddress);
            userDesc = userDesc.toLowerCase();
            
            
            if(searchDesc.includes(userDesc)){
                
                
                output += `<tr>
                <td>${subData.camera_location}</td> 
                <td>${subData.camera_url.description}</td> <td>${subData.quadrant} </td>
                <td><div class="icon"> <a href="${subData.camera_url.url}" target="_blank"><img src="images/cctv.png" alt="map icon"></a></div></td>
                <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
            }
        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
    
}


//search by day 
function searchByCamQuad(userQuad){
    let searchQuad = '';
    let output =  "<tr><th>Address</th> <th>Description</th> <th>Quadrant</th>  <th>Photo Preview</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        let subData = data[i];
        
        if(subData.quadrant.includes(userQuad)){
            
            output += `<tr>
            <td>${subData.camera_location}</td> 
            <td>${subData.camera_url.description}</td> <td>${subData.quadrant} </td>
            <td><div class="icon"> <a href="${subData.camera_url.url}" target="_blank"><img src="images/cctv.png" alt="map icon"></a></div></td>
            <td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`
           
        }
        
    }
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    document.getElementById("searchResults").style.display = "block";
    
}