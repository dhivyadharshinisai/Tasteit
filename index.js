// document.addEventListener('DOMContentLoaded',function (){
//     const slides=["https://img.freepik.com/premium-photo/breakfast-with-granola-yogurt-fruit_826801-1047.jpg","https://png.pngtree.com/background/20230516/original/pngtree-oats-in-bowls-with-fruits-or-cereals-and-yogurt-picture-image_2616430.jpg"]
//     let currentSlide=0
//     function changeSlide(){
//         document.getElementById('slide1').style.background
//     }
// })
const slide = [
    "https://www.linoui.in/cdn/shop/products/CopyofHeimanAccessories_1.png?v=1593366008",
    "https://media.istockphoto.com/id/1351182272/photo/french-toasts-with-strawberry-and-powdered-sugar.jpg?b=1&s=612x612&w=0&k=20&c=ow4g-9JDGMzX3Sb6QTLoVpUMNn4osTLYuR0xeyi5xxQ=",
    "https://img.freepik.com/premium-photo/breakfast-with-granola-yogurt-fruit_826801-1047.jpg",
    "https://png.pngtree.com/background/20230516/original/pngtree-oats-in-bowls-with-fruits-or-cereals-and-yogurt-picture-image_2616430.jpg"
  ];
  
const quote=["Cooking Since","Yummy Food","Aesthetic Look","Best Quality"]
const subq=["1958","FOR TUMMY","FOR YOU","FOOD"]
var currentSlide = 0;
let intervalId = setInterval(() => carousel(), 3000);

var kk=true
function stopcorousel(current){
    currentSlide=current-1
    if(kk==true){
    clearInterval(intervalId)
    kk=false
    }
    else{
        kk=true
        callcarousel(currentSlide)
    }   
}


function callcarousel(currentSlide){
    currentSlide=currentSlide
    console.log("ok",currentSlide)
    intervalId = setInterval(() =>carousel(currentSlide), 3000);
}
  function carousel() {
    console.log(currentSlide)
    document.getElementById('slide').style.background = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)), url(${slide[currentSlide]})`;
    document.getElementById('slide').style.backgroundRepeat="no-repeat"
    document.getElementById('slide').style.backgroundSize="cover"
    document.getElementById('msub').innerHTML=subq[currentSlide]
    

    document.getElementById('mbanner').innerHTML=quote[currentSlide]
    // document.getElementById('mbanner').style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    document.getElementById('mbanner').style.fontFamily='"Playball",cursive'

    // document.getElementById('mbanner').style.fontSize='2.5rem'
    // document.getElementById('mbanner').style.fontWeight='400'
    // document.getElementById('mbanner').style.lineHeight='1'
    currentSlide = currentSlide + 1;
  
    if (currentSlide === slide.length) {
      currentSlide = 0;
    }

    
  } 

//   document.addEventListener('touchstart', stopInterval);
//   document.addEventListener('touchmove', startInterval);
//   document.addEventListener('touchend', startInterval);

// window.onscroll = function() {myFunction()};
// var nav = document.getElementById('navbar');
// function myFunction() {
//   if (document.documentElement.scrollTop > 500) {
//     console.log("jds")
//     nav.style.backgroundColor='white'

//   } else {
//     console.log('okok')
//   }
// }
var ll=false
var gg=false
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.getElementById('navbar');
  var mainform = document.getElementById('mainform');
  var mnav=document.getElementById('mnav') 
  let scrollPosition = window.scrollY
  var screenWidth = window.innerWidth;
  let lastscrollPosition=0;
  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
      console.log('sjdas')
      if (scrollPosition >= 500) {
        console.log('ok')
          nav.classList.add('white-nav');
          gg=true
          if(screenWidth <= 1049 ){
            mnav.classList.add('responsive-nav'); 

            } 
          else if(lastscrollPosition<800) {
              mnav.classList.remove('responsive-nav'); 
          }
      } 
      else {
          nav.classList.remove('white-nav');
          gg==false
      }
      lastScrollPosition = scrollPosition;
  });

  window.addEventListener('resize', function () {
    screenWidth = window.innerWidth;
    if (screenWidth <= 1049) {
      mnav.classList.add('responsive-nav');
      mnav.classList.add('fixedres');
      ll=true
    } else {
      mnav.classList.remove('responsive-nav');
      mnav.classList.remove('fixedres');
      ll=false
    }
  });

// window.addEventListener('resize', function () {
//   var screenWidth = window.innerWidth;
//   if(screenWidth <= 1049 && scrollPosition >= 500){
//       mnav.classList.add('responsive-nav'); // Add a class for responsive styling
//   } else {
//       mnav.classList.remove('responsive-nav'); // Remove the class for responsive styling
//   }
// });
// window.dispatchEvent(new Event('resize'));
});
function openoptionsifitis(){
  openoptions(ll)
}

var menuok=false
function openoptions(ll){
    menuok=!(menuok)
    console.log(menuok)
    if(menuok){
        document.getElementById('opt').style.display='flex'
        document.getElementById('opt').style.flexDirection='column  '
        document.getElementById('mainc').style.display='none'
    } 
    else if(ll && menuok){
      document.getElementById('opt').style.display='flex'
      document.getElementById('opt').style.flexDirection='column'
      document.getElementById('opt').style.position='fixed'
    }
    else{
        document.getElementById('opt').style.display='none'
        document.getElementById('mainc').style.display='block'
    }
}


const sElements = document.querySelectorAll('[id^="s"]');

// Add event listeners to each 's' element
sElements.forEach(sElement => {
    sElement.addEventListener('mouseover', () => {
        // Extract the numeric part of the 's' element's ID
        const index = sElement.id.substring(1);
        
        // Form the corresponding 'dhr' element's ID
        const dhrId = 'dhr' + index;

        // Get the 'dhr' element and change its color
        const dhrElement = document.getElementById(dhrId);
        if (dhrElement) {
            dhrElement.style.border = '1px dashed red';
        }
    });

    sElement.addEventListener('mouseout', () => {
       
        const index = sElement.id.substring(1);
        const dhrId = 'dhr' + index;
        const dhrElement = document.getElementById(dhrId);
        if (dhrElement) {
            dhrElement.style.border = '1px dashed grey';
        }
    });
});
let det=["In a distant realm, far removed from the mountains, residing at a distance from the nations finds the residence of non-seeing texts.",
"In realms afar, where mountains guard the eloquent words, a realm distant from Vokalia and Consonantia harbors the abode of blind, living texts.",
"In the distant expanse, concealed amidst the verbiage mountains, far removed from the territories, inhabit the texts, veiled in perpetual obscurity.",
"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."]
let photo=["https://www.escoffier.edu/wp-content/uploads/2022/03/Chef-in-uniform-posing-for-a-photo-in-a-kitchen-1400.jpg",
"https://www.touchbistro.com/wp-content/uploads/2022/03/hire-a-chef-for-your-restaurant-thumbnail-414x218.jpg",
"https://www.earnmydegree.com/sites/all/files/public/images/shutterstock_187759205.jpg",
"https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZ8ZW58MHx8MHx8fDA%3D"]
let orgname=["Micheal Sebastiane","Franklin Kennedy","Hawkins Peter","John Gustavo"]
let typename=["Delivery Person","Sales Person","Food Reveiwer","Customer"]
let custdesc=""
function customerfunc( cusno){
    console.log(cusno)
      document.getElementById("custdesc").innerHTML=det[cusno-1]
      document.getElementById("custrev1").src=photo[cusno-1]
      document.getElementById("orgname").innerHTML=orgname[cusno-1]
      document.getElementById("typename").innerHTML=typename[cusno-1]
      console.log(document.getElementsByClassName("cc$`cusno"))
      document.getElementsByClassName("circlecus").style.border = "2px solid red";
      document.getElementById("incirclecus" + cusno).style.backgroundColor = "red";


}


document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.rnav a');
  
  function setActiveLink() {
      const scrollPosition = window.scrollY;

      navLinks.forEach(link => {
          const sectionId = link.getAttribute('href').substring(1);
          const section = document.getElementById(sectionId);

          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
              link.classList.add('active');
              document.getElementById(sectionId).classList.add('active')
          } else {
              link.classList.remove('active');
          }
      });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); 
});

document.addEventListener('DOMContentLoaded', function () {
  const counterElement1 = document.getElementById('counter1');
  const counterElement2 = document.getElementById('counter2');
  const counterElement3 = document.getElementById('counter3');
  const counterElement4 = document.getElementById('counter4');

  const targetValue1 = 100;
  const targetValue2 = 400;
  const targetValue3 = 10;
  const targetValue4 = 10000;
  const startCounting = (counterElement, targetValue, duration) => {
    for (let i = 0; i <= targetValue; i++) {
        setTimeout(() => {
            counterElement.textContent = i;
        }, i * duration);
    }
};
const observeCounter = (counterElement, targetValue, duration) => {
  const options = {
      threshold: 0.5
  };

  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCounting(counterElement, targetValue, duration);
              observer.unobserve(entry.target);
          }
      });
  };
  const observer = new IntersectionObserver(callback, options);
      observer.observe(counterElement);
  };

  observeCounter(counterElement1, targetValue1, 20);
  observeCounter(counterElement2, targetValue2, 5);
  observeCounter(counterElement3, targetValue3, 200);
  observeCounter(counterElement4, targetValue4, 0.2);
});



