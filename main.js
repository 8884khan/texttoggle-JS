function changeText(){
    var x= document.getElementById("container")
    if(x.innerHTML === "Click me"){
        x.innerHTML = "Hyper Text Mark Up Language"
    }else{
        x.innerHTML ="Click me"
    }
}


function toggle1(){
  var  x = document.getElementById("text1")
    if(x.innerHTML === " Click Me To Toggle The Text"){
        x.innerHTML = "Learning Javascript"
    }else{
        x.innerHTML = " Click Me To Toggle The Text"
    }
}

function toggle2(){
    x= document.getElementById("text2")
    if(x.innerHTML === " Click Me To Toggle The Text"){
        x.innerHTML = "This is Toggle in Javascript"
        x.style.color="white"

    }else{
        x.innerHTML= " Click Me To Toggle The Text"
        x.style.color= null
    }
}

function toggle3(){
    var a = document.getElementById("text3")
    if(a.innerHTML === "Click Me To Toggle The Text"){
        a.innerHTML = " One more example"
        a.style.color = "red"
    }else{
        a.innerHTML = "Click Me To Toggle The Text"
        a.style.color = "black"
    }
}

function toggle4(){
    var a = document.getElementById("text4")
    if(a.innerHTML === "Click Me To Toggle The Text"){
        a.innerHTML = "This is also a example "
        a.style.backgroundColor = "green"
     
        a.style.color= "red"
    }else{
        a.innerHTML = "Click Me To Toggle The Text"
        a.style.backgroundColor = null
        a.style.color= "black"
    }
}


function btn1(){
    var a = document.getElementById("btn")
    if(a.innerHTML === "Click me"){
        a.innerHTML = " This is a Button"
        a.style.color = "red"
        a.style.padding = "10px"
    }else{
        a.innerHTML = "Click me"
        a.style.color = null
        a.style.padding= null
        
    }
}

function btn2(){
    // var body1 = document.getElementById("btn2")
    // if(body1.innerHTML === "Click for Background Change"){
    //    body1.style.backgroundColor = "red"
    //    body1.style.color = "white"
    var a = document.getElementById("btn2")
    if(a.innerHTML === "Click for Background Change"){
        a.innerHTML = " Background color"
        a.style.color = "white"
        a.style.backgroundColor = "red"
        a.style.padding = "10px"
    }else{
        // body1.innerHTML = "Click for Background Change"
        // body1.style.backgroundColor = null
        a.innerHTML = "Click for Background Change"
        a.style.color = null
        a.style.padding= null
        a.style.backgroundColor = null
    }
}


// function change();
// {
//     document.getElementById("myButton1").value="Close Curtain";
// }


// function change() // no ';' here
// {
//     var elem = document.getElementById("myButton1");
//     if (elem.value=="Close Curtain") elem.value = "Open Curtain";
//     else elem.value = "Close Curtain";
// }








//  function btn(){
//         var a = document.getElementById("btn")
//         if(a.innerHTML === "Click Here For Button Change "){
//             a.innerHTML = " This is Button"
//             // a.style.backgroundColor ="red"
//         }else{
//             a.innerHTML = "Click Here For Button Change"
//         }
//     }
