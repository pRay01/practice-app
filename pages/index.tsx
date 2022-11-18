//@ts-nocheck

import { useState } from "react"


function Logic(){

 const[result,setResult]= useState("")
 const[data,setData]= useState("")
   
 function OddEven(){
    if(Number(data)%2==0){
      console.log(data, " is even")
      alert("number is even")
    }
    else{
      console.log(data, "is odd")
      alert("number is odd")
    }
 }

 function  Palindrome(){
   const input = Number(data);
   console.log(input, 'input')
   var final = 0;
   for(var i=input; i>0; i=Number(i/10).toFixed(0) ){
     const remainder = i%10; 
     console.log(remainder, 'remainder');
     final = final * 10 + remainder;
     console.log(final, 'final')
   }

 }
 function Reverse(){
   let newString = "";
   for( var i = data.length - 1; i>=0;i-- )
   {
     newString = newString + data.charAt(i);
     console.log(newString,"reverse")
   }
 }


  return(
    <div className="bg-red-300 w-4/12">
        <div >
           <input  value={data} onChange={(e)=>setData(e.target.value)} className="w-full h-10 text-right border border-black rounded-xl"/>
        </div>
        <button  onClick={OddEven}  className="px-6 mr-6 rounded-xl bg-yellow-300">
            Odd/Even
        </button>
        <button onClick={Palindrome} className="px-6 rounded-xl bg-yellow-300">
           Palindrome
        </button>
        <button onClick={Reverse} className="px-6 ml-6 rounded-xl bg-yellow-300">
           Reverse
        </button>
    </div>
  )
}

export default Logic
