
  //contact
  function openContact() {
    window.location.href = 'tel:+94771931259';
  }

  function openWhatsapp() {
    window.location.href = 'https://wa.me/+94771931259';
  }

  //read more
  function myFunction(moreId, myBtnId) {
    var moreText = document.getElementById(moreId);
    var btnText = document.getElementById(myBtnId);

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read less..."; 
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read more..."; 
    }
  }


//   //page scrolling
//   const navigation = document.querySelector(".main-nav");
//   const navigationHeight = navigation.offsetHeight;
//   document.documentElement.style.setProperty(
//     "--scroll-padding",
//     navigationHeight + "px"
//   );


  let menu = document.getElementById("menu");

  function toggleMenu(){
    menu.classList.toggle("open");
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function() {
      // // Remove the "active" class from all links
      // document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      // // Add the "active" class to the clicked link
      // this.classList.add("active");
      // Close the menu
      menu.classList.remove("open");
    });
  });



  // Slideshow with automatic progression
  let autoSlideIndex = 0;
  showAutoSlides();
  
  function showAutoSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
  
    // Hide all slides and remove 'active' class from dots
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    autoSlideIndex++;
    if (autoSlideIndex > slides.length) {
      autoSlideIndex = 1;
    }    
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    // Display the current slide and mark the corresponding dot as 'active'
    slides[autoSlideIndex-1].style.display = "block";  
    dots[autoSlideIndex-1].className += " active";
    
    setTimeout(showAutoSlides, 3600); // Change image every 3 seconds
  }

