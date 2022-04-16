var tableInfo = Array.prototype.map.call(document.querySelectorAll('#myTable tr'), function(tr){
    return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
      return td.innerHTML;
      });
    });
var total_cases =0;

countries_zero = "";

for (var i = 0; i < tableInfo.length; i++){
    if (i>0){    
        total_cases +=  parseInt(tableInfo[i][1]);
        if (parseInt(tableInfo[i][2]) == 0){
            countries_zero += tableInfo[i][0] + ", ";
        }    
    }  
}


console.log("total number of COVID-19 cases :" + total_cases);

console.log("countries where there are no new COVID-19 cases." + countries_zero);

function createTable() {
    let innerT = Array();
    for (var j = 0; j < tableInfo.length; j++)  //loops through the array 
    {
        if (j==0){
            innerT.push(["Country","Cases","New Cases","Deaths","percentage of deaths/ total cases"]);
        }
        else{       
            innerT.push([tableInfo[j][0],tableInfo[j][1],tableInfo[j][2],tableInfo[j][3],((tableInfo[j][3]/tableInfo[j][1])*100).toPrecision(3)]); 
        }
       
    }
    var mytable = "<table>";
    for (var x = 0; x < innerT.length; x++) {
        mytable += "<tr>"
        for (var k =0; k < innerT[x].length; k++){ 
        console.log(innerT[x][k]); 
        mytable += "<td>" + innerT[x][k] + "</td>";    
    }
    mytable += "</tr>";
    }
    mytable += "</table>";
    body = document.getElementsByTagName('body')[0],
    div = document.createElement('div');
    div.innerHTML = mytable;
    body.appendChild(div);
}
createTable()
tableInfo.splice(0,0,["Country","Cases","New Cases","Deaths"])
tableInfo.splice(5,0,["Spain",300000,0,27136])
var mytable1 = "<table>";
for (var y = 0; y < tableInfo.length; y++) {
    mytable1 += "<tr>"
    for (var z =0; z < tableInfo[y].length; z++){ 
    mytable1 += "<td>" + tableInfo[y][z] + "</td>"; 
}
mytable1 += "</tr>";
}
mytable1 += "</table>";
body1 = document.getElementsByTagName('body')[0],
div1 = document.createElement('div');
div1.innerHTML = mytable1;
body1.appendChild(div1);
