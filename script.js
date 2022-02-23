var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);

for(var i=0;i<data.length;i++)
    console.log(`name:${data[i].name} Capital:${data[i].capital}`);

    for(var i=0;i<data.length;i++)
    console.log(`flag:${data[i].flag}`);

    for(var i=0;i<data.length;i++)
    console.log(`name:${data[i].name},latlng:${data[i].latlng}`);

    for(var i=0;i<data.length;i++)
console.log(`region:${data[i].region} subregion:${data[i].subregion} population:${data[i].population}`);
}