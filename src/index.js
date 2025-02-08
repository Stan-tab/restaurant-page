import "./style.css"
import {homePage, navBut} from "./site-content.js"

const home = new homePage()

navBut.forEach(el => {
    const child = el.children[0];
    el.addEventListener("click", () => {
        navBut.forEach(element => {
            const child = element.children[0];
            child.classList = "drips";
            element.classList = "";
        });
        el.classList = "visible";
        child.classList = "visible drips"
        if(el.value == 0) {
            home.render();
        }
    })
});

home.render();