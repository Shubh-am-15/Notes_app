function show(){
    var title= document.getElementById("exampleFormControlInput1").value;
    var text= document.getElementById("Textarea1").value;
    if(title=="")
    {
        alert("Nothing filled in title");
    }
    else if(text=="")
    {
        alert("Nothing filled in text area");
    }

}
setInterval(displayclock, 700);
function displayclock()
{
    var time = new Date();
    var hrs= time.getHours();
    var min =time.getMinutes();
    var sec = time.getSeconds();
     if(hrs<10)
     {
         hrs= "0"+hrs;
     }
     if(min<10)
     {
         min= "0"+min;
     }
     if(sec<10)
     {
         sec= "0"+sec;
     }
    document.getElementById("clock").innerHTML= hrs +":"+ min+":"+sec;
}