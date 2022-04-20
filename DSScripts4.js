/* JS for Final Project Part A
Heshan Punchihewa
2022-04-20 
THIS IS FOR THE Historic Resource DATASET*/

var data;
//func to take event listeners and JSON data
function loadJsonHistoricRes(){
    console.log('loadJsonHistoricRes');
    document.getElementById("resName").addEventListener("keyup", function (){searchByResName(this.value);},false);
    document.getElementById("resAddress").addEventListener("keyup", function (){searchByResAddress(this.value);},false);
    document.getElementById("resCommunity").addEventListener("keyup", function (){searchByResCommunity(this.value);},false);
    
    
    //load xml
    xmlobj.onreadystatechange = function(){
        if (xmlobj.readyState == 4 && xmlobj.status == 200){
            data = JSON.parse(xmlobj.responseText);
        }
        
    };
    
    xmlobj.open("GET", "https://data.calgary.ca/resource/99yf-6c5u.json", true);
    xmlobj.send();
}

//func for search by Name
function searchByResName(userResName){
    //console.log('searchByResName: ' + userResName);
    let searchName = '';
    let output =  "<tr><th>Name</th> <th>Builder</th> <th>Address</th> <th>Community</th>  <th>Year Constructed</th> <th>Photo</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        
        let subData = data[i];
        
        if(subData.name){ //check for undefined
            searchName = subData.name.toString().toLowerCase();
            userResName = userResName.toLowerCase();
            
            
            if(searchName.includes(userResName)){
                
                output += `<tr>
                <td>${subData.name}</td> 
                <td>${subData.builder} </td>
                <td>${subData.address} </td>
                <td>${subData.community} </td>
                <td>${subData.construction_yr} </td>
                <td><div class="icon"> <a href="${subData.pic_url}" target="_blank"><img src="images/gallery.png" alt="map icon"></a></div></td><td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`;
                
                
                
            }
        }
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    
    document.getElementById("searchResults").style.display = "block";
    
    
    
}


//func for search by Address
function searchByResAddress(userAddress){
    console.log('searchByResAddress: ' + userAddress);
    let searchAddress = '';
    let output =  "<tr><th>Name</th> <th>Builder</th> <th>Address</th> <th>Community</th>  <th>Year Constructed</th> <th>Photo</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        
        let subData = data[i];
        
        
        if(subData.address){ //check for undefined
            searchAddress = subData.address.toString().toLowerCase();
            userAddress = userAddress.toLowerCase();
            
            
            if(searchAddress.includes(userAddress)){
                
                output += `<tr>
                <td>${subData.name}</td> 
                <td>${subData.builder} </td>
                <td>${subData.address} </td>
                <td>${subData.community} </td>
                <td>${subData.construction_yr} </td>
                <td><div class="icon"> <a href="${subData.pic_url}" target="_blank"><img src="images/gallery.png" alt="map icon"></a></div></td><td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`;
                
                
                
            }
        }
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    
    document.getElementById("searchResults").style.display = "block";
}



//func for search by Community
function searchByResCommunity(userCommunity){
    
    
    let searchCommunity = '';
    let output =  "<tr><th>Name</th> <th>Builder</th> <th>Address</th> <th>Community</th>  <th>Year Constructed</th> <th>Photo</th> <th>Location</th></tr>";
    
    for(let i = 0; i <data.length; i++){
        
        let subData = data[i];
        
        
        if(subData.community){ //check for undefined
            searchCommunity = subData.community.toString().toLowerCase();
            userCommunity = userCommunity.toLowerCase();
            
            
            if(searchCommunity.includes(userCommunity)){
                
                output += `<tr>
                <td>${subData.name}</td> 
                <td>${subData.builder} </td>
                <td>${subData.address} </td>
                <td>${subData.community} </td>
                <td>${subData.construction_yr} </td>
                <td><div class="icon"> <a href="${subData.pic_url}" target="_blank"><img src="images/gallery.png" alt="map icon"></a></div></td><td><div class="icon"> <a href="https://www.google.com/maps/search/?api=1&query=${subData.point.coordinates[1]}%2C${subData.point.coordinates[0]}" target="_blank"><img src="images/map.png" alt="map icon"></a></div></td> </tr>`;
                
                
                
            }
        }
        
    }
    
    //output format as table
    document.getElementById("searchResultTable").innerHTML=output;
    
    document.getElementById("searchResults").style.display = "block";
    
}



