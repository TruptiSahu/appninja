const sliders = document.querySelectorAll('.slide-in');
const popcorns = document.querySelectorAll('.pop');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px"
};


// POP-Up Effect
const popOnScroll = new IntersectionObserver
(function(
  entries,
  popOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('pop-up');
      popOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

popcorns.forEach(popcorn => {
  popOnScroll.observe(popcorn);
});

//Appear on Scroll Effect
const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

//Faq expand on clicking effect

const listToExpand = document.getElementsByClassName('to-expand');

for(var i = 0; i < listToExpand.length; i++) {
  
  listToExpand[i].onclick = function() {
    this.classList.toggle('expand');

    //remove class from sibling
      if(this.classList.contains('expand')) {
        //remove class
        // this.classList.remove('expand');
        console.log('Hello');
      } 
  };
}

//Plan subscribe buttons (Ripple Effects)
const rippleButtons = document.querySelectorAll('.ripple-effect');

rippleButtons.forEach(btn => {
  btn.addEventListener('click',function(e) {
    let ripples = document.createElement('span');
    this.appendChild(ripples);
  })
})


// Mobile Navbar Burger Menu
// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// Open the menu on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.navbar__links').classList.add('active-nav');
});

//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.navbar__links').classList.remove('active-nav');
});