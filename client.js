function add(){
    console.log("huihui")
 let a=document.getElementById('num1').value
 let b=document.getElementById('num2').value
 if(isNaN(a)||isNaN(b)){
     alert("Please Enter Number")
     return 
 }
 let data ={
     x: a,
     y: b
 }
 fetch('http://localhost:3000/add',{
     method: "Post",
     headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
     },
   body:JSON.stringify(data),
 }).then(res=>{
     if(res.ok){
         return res.json
     }
 }).then(data=>{
     console.log(data);
 })

}