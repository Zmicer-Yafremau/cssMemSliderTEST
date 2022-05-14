
const IMAGE = [`url("./assets/slide0.png")`,
               `url("./assets/slide1.png")`, 
               `url("./assets/slide2.png")`,
              `url("././assets/slide3.png")`];

let current = 0;
let countMerg =0;
const SLIDES = document.getElementById("slides");
const CIRCLE = document.querySelectorAll(".circle");
const CIRCLES = document.querySelectorAll(".circles");
CIRCLES.forEach( ( value ) => {
  value.addEventListener("mouseover",
                       () => { value.lastChild.style.borderColor = "white";
if ( !value.lastChild.classList.contains( "active" ) ){
 value.lastChild.style.backgroundColor = "white";
}
                             })
});


CIRCLES.forEach( ( value ) => {
value.addEventListener("mouseout",
                       () => { 
value.lastChild.style.borderColor = "";
if( !value.lastChild.classList.contains( "active" ) ){
  value.lastChild.style.backgroundColor = ""
}}
                        )
  
});

CIRCLES.forEach( ( value ) => {
value.addEventListener( "click",
                       () => {

if ( value.lastChild.classList.contains( "active" ) ){
 
   document.querySelector('.memes').style.backgroundImage = "";  
  current = +value.lastChild.className.match( /[012345]/ )[0];
}
  else {
    
    document.querySelector( '.active' ).classList.toggle( "active" );
    value.lastChild.classList.toggle( "active" );
    value.lastChild.style.backgroundColor = ""
    document.querySelector( '.memes' ).style.backgroundImage = IMAGE[ +value.lastChild
                                                                            .className
                                                                            .match( /[012345]/ )[0] ]; 
    current = +value.lastChild.className.match( /[012345]/ )[0];
    countMerg = -25*current;
    SLIDES.style.marginLeft=countMerg+"rem";  

  }
  }
)
  });