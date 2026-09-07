let slider=document.querySelector(".slider")
let slides=document.querySelector(".slides")
let slide=document.querySelectorAll(".slide")
let next=document.querySelector(".next")
let prev=document.querySelector(".prev")
let pagination=document.querySelector(".pagination")

next.innerText=">";
prev.innerText="<";

let currenSlide = 0;


slide.forEach((item , index)=>{
  item.innerHTML=index + 1
})

for (let i = 0; i < 5; i++) {
  pagination.innerHTML +=`<div class="bullet" data-id="${i}"></div>`;
}


let bullet=document.querySelectorAll(".bullet")
console.log(bullet);

const bulletColor=()=>{

  bullet.forEach((bullet,index)=>{
  if(index === currenSlide ){
    bullet.classList.add("active-bullet");
  }else{
    bullet.classList.remove("active-bullet");
  }
})
}
bulletColor();


pagination.addEventListener("click" , (e)=>{

  if(!e.target.classList.contains("bullet")
  )return;

  currenSlide=+e.target.dataset.id;
  slides.style.transform = `translateX(-${currenSlide * 100}%)`;  
    bulletColor();

})


next.addEventListener("click" , ()=>{
 
  if(currenSlide < 4){
     currenSlide ++;
    slides.style.transform = `translateX(-${currenSlide * 100}%)`;  
    bulletColor();
  }  
})


prev.addEventListener("click" , ()=>{
     
  if(currenSlide > 0){
    currenSlide --;
    slides.style.transform = `translateX(-${currenSlide * 100}%)`;  
    bulletColor();
  }
})

window.addEventListener("keydown" , (e)=>{
if(e.key === "ArrowRight"){
  next.click();
}
if(e.key === "ArrowLeft"){
  prev.click();
}
})