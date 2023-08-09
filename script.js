// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let playOnce = true;

window.addEventListener('scroll', () => {
    // Navbar Effect 
   if (window.scrollY > 50){
    navbar.style.height = "45px"
   }else {
    navbar.style.height = "90px"
   }

   let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
// image 
   if(scrollValue > 0.45){
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";

   }

//    popup

if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
}
   console.log(scrollValue);
})


closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px";
})
console.log(imgImprovise);