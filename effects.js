var mission = document.querySelector("#mission_text");

mission.addEventListener('mouseover',() => {
    gsap.to(mission, 0.4, {css:{opacity:0.3}, yoyo: true, repeat:-1});
    // gsap.to(mission, .2, {css:{opacity:1}});
})

mission.addEventListener('mouseleave',() => {
    gsap.to(mission, 1, {css:{opacity:1}, overwrite:true});
    // gsap.to(mission, .2, {css:{opacity:1}});
})

var main = document.querySelector("#circle");

gsap.to(main, 2, {
    "color": "red",
    "--shadow-blur": "20px",
    repeat: -1,
    yoyo: true
  });
  
  

