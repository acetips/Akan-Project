var namesOfMales=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var namesOfFemales=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
var yearofbirth=document.getElementById("yearofbirth").value;
var monthofbirth=document.getElementById("monthofbirth").value;
var dateofbirth=document.getElementById("dateofbirth");
var dateformat=new Date(date,month,year);
dateformat.setDate(parseInt(date));
dateformat.setMonth(parseInt(month));
dateformat.setUTCFullYear(parseInt(year));