function check() {
    var femaleNames=[ "Akosua", "Adwoa", "Abenaa","Akua", "Yaa", "Afua", "Ama"];
    var maleNames= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var date = document.getElementById("dateofbirth").value;
    var year = document.getElementById("yearofbirth").value;
    var month = document.getElementById("monthofbirth").value;

    var dmy=new Date(date,month,year);
    dmy.setDate(parseInt(date));
    dmy.setMonth(parseInt(month)-1);
    dmy.setFullYear(parseInt(year));
    var dayoftheweek = dmy.getDay();
    if (dayoftheweek === 0){
        ("Sunday");
      } else if(dayoftheweek === 1){
        ("Monday");
      } else if(dayoftheweek === 2){
        ("Tuesday");
      } else if(dayoftheweek === 3){
        ("Wednesday");
      } else if(dayoftheweek === 4){
        ("Thursday");
      } else if(dayoftheweek === 5){
        ("Friday");
      } else if (dayoftheweek === 6){
        ("Saturday");
      }
      if (date < 1 || date>31 ){
        alert("Please enter a valid date");
      } else if (month == "" || month < 1  || month > 12 ){
        alert("Please enter a valid month");
      } else if (year < 1  || year>3021) {
        alert("Please enter a valid year");
      } else if(document.getElementById("male").checked == true && document.getElementById("female").checked == false){
        alert("Your Akan name is " + maleNames[dayoftheweek]);
      } else if (document.getElementById("male").checked == false && document.getElementById("female").checked == true){
        alert("Your Akan name is " + femaleNames[dayoftheweek]);
      }
}