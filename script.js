const plusBtn = document.querySelector(".plusbtn")
const minusBtn = document.querySelector(".minusbtn")
const count = document.querySelector(".count")
const changeby = document.querySelector(".changeby")
const resetBtn = document.querySelector(".reasetbtn")

plusBtn.addEventListener("click", ()=>{
  const counter = parseInt( count.innerText);
    // console.log(count)
    const changeValue = parseInt( changeby.value)
    count.innerText = counter + changeValue
    // console.log(counter)
})

minusBtn.addEventListener("click",()=>{
       const counter  = count.innerText
          const changeValue = parseInt( changeby.value)
 
    //    console.log(counter)
       count.innerText = counter - changeValue 

    // console.log(minusBtn)
})

resetBtn.addEventListener("click",()=>{
     
     count.innerText = 0;
 
})
