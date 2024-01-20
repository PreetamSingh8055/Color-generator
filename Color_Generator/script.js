let btn=document.getElementById("btn");
// event call
btn.addEventListener("click", genrate=()=>{
    const randomnum=Math.floor(Math.random()*16777215);
    const randomcode= "#"+randomnum.toString(16);
    console.log(randomnum, randomcode);

    document.body.style.backgroundColor=randomcode;
    document.querySelector("#colorCode").innerHTML=randomcode;
});

// init call
genrate();


