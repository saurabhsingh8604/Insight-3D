const wel = document.getElementById("welcome");
const nav = document.getElementById("nav");


const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting
          ? nav.classList.add("fixed-nav")
          : nav.classList.remove("fixed-nav");
    }, {
    // viewport
    root: null,
    threshold: 0,
}
);
// // when the hero section end part reached then we need to show the sticky navigation
observer.observe(wel);
