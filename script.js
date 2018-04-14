function loadJSON(file,callback) {
  var rawFile =new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET",file,true);
    rawFile.onreadystatechange=function() {
        if(rawFile.readystate===4 && rawFile.status=="200"){
          callback(rawFile.responseText);
        }
    }
    rawFile.send();
}
loadJSON("resources/resume.json",function(text) {
   var data=JSON.parse(text);
   console.log(data);

});
