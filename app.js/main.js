let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function showSlides(){
    let slides = document.getElementsByClassName("MeetTheTeam");
    for (i = 0; i < slides.length; i++){
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides [slideIndex-1].getElementsByClassName.display = "block";
    setTimeout(showSlides, 2000);
}