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