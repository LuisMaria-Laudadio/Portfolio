function scrollToElement(elementSelector, instance= 0){
    //selecte all elementes that match the given selector
    const elements = document.querySelectorAll(elementSelector)
    //hola
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior:'smooth'})
    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', () =>{
  scrollToElement('.header')  ;
});

link2.addEventListener('click', () =>{
    //Scroll to de second element with "header" class
    scrollToElement('.header', 1)  ;
});
  
link3.addEventListener('click', () =>{
    scrollToElement('.column')  ;
});
  
  