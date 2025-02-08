import "./style.css"
import {homePage, menuPage, navBut, mainBox} from "./site-content.js"

const home = new homePage()
const menu = new menuPage()

navBut.forEach(el => {
    const child = el.children[0];
    el.addEventListener("click", () => {
        navBut.forEach(element => {
            const child = element.children[0];
            child.classList = "drips";
            element.classList = "";
        });
        el.classList = "visible";
        child.classList = "visible drips";
        mainBox.replaceChildren("");
        if(el.value == 0) {
            home.render();
        } else if(el.value == 1) {
            menu.render()
        }
    })
});

home.render();