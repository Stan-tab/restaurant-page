import coockie from "../assets/coockie.jpg";
import colCoockie from "../assets/coloredCockie.jpg";
import scaryCoffee from "../assets/scaryCoffe.jpg";
import drink from "../assets/drink.jpg";
import present from "../assets/present.jpg";
import chef from "../assets/chef.jpg";
const container = document.querySelector("#container");
const navBut = [...document.querySelectorAll("header>nav>ul>li")]
const mainBox = document.createElement("div");
mainBox.classList = "mainBox";
container.appendChild(mainBox);

class homePage{
    _divs = {
        opener : document.createElement("div"),
        card1 : document.createElement("div"),
        card2 : document.createElement("div"),
        card3 : document.createElement("div"),
    }

    __paras = {
        card1Para : document.createElement("p"),
        card2Para : [document.createElement("p"),
                     document.createElement("p"),
                     document.createElement("p"),
                     document.createElement("p"),
                     document.createElement("p"),
                     document.createElement("p"),
                     document.createElement("p"),],
        card3Para : document.createElement("p"),
    }

    _opH1 = document.createElement("h1");
    _card1H3 = document.createElement("h3");
    _card2H2 = document.createElement("h2");
    _card3H2 = document.createElement("h2");

    givingProps = (() => {
        this._divs.opener.classList = "opener";
        this._divs.card1.classList = "card";
        this._divs.card2.classList = "card hours";
        this._divs.card3.classList = "card location";

        this._opH1.classList = "scary";
        this._card1H3.classList = "scary";
        this._card2H2.classList = "scary";
        this._card3H2.classList = "scary";

        this._opH1.textContent = "Scary plate";
        this._card1H3.textContent = "John";
        this._card2H2.textContent = "Hours";
        this._card3H2.textContent = "Location";

        this.__paras.card1Para.innerHTML = "<span class=\"scary\">Scary plate</span> has the best <span class=\"scary\">meat</span>! The atmosphere and customer service make you feel like you are sitting in the middle of the <span class=\"scary\">hell</span>, eating like a <span class=\"scary\">Satan</span>! This is exactly the kind of place that I like to return to <span class=\"scary\">again and again</span>.";
        this.__paras.card2Para[0].textContent = "Sunday: 8am - 8pm";
        this.__paras.card2Para[1].textContent = "Monday: 6am - 6pm";
        this.__paras.card2Para[2].textContent = "Tuesday: 6am - 6pm";
        this.__paras.card2Para[3].textContent = "Wednesday: 6am - 6pm";
        this.__paras.card2Para[4].textContent = "Thursday: 6am - 10pm";
        this.__paras.card2Para[5].textContent = "Friday: 6am - 10pm";
        this.__paras.card2Para[6].textContent = "Saturday: 8am - 10pm";
        this.__paras.card3Para.textContent = "Your Dreams";

        // appending childs
        this._divs.opener.appendChild(this._opH1);
        this._divs.card1.appendChild(this.__paras.card1Para);
        this._divs.card1.appendChild(this._card1H3);
        
        this._divs.card2.appendChild(this._card2H2);
        this.__paras.card2Para.forEach(el => {
            this._divs.card2.appendChild(el);
        })

        this._divs.card3.appendChild(this._card3H2);
        this._divs.card3.appendChild(this.__paras.card3Para);
    }) ()

    render() {
        mainBox.appendChild(this._divs.opener);
        mainBox.appendChild(this._divs.card1);
        mainBox.appendChild(this._divs.card2);
        mainBox.appendChild(this._divs.card3);
    }
}

class menuPage{
    creator = (el = "div", cls = "",times = 1) => {
        const obj = {};
        for(let i = 0; i<times; i++){
            obj[el+i] = document.createElement(el);
            obj[el+i].classList = cls;
        }
        return obj;
    }

    _openers = this.creator("div" ,"opener" , 5);
    _cards = this.creator("div" ,"card img" , 6);

    _opHs = this.creator("h1" ,"scary" , 5);
    __paras = this.creator("p" ,"" , 10);
    _imgs = {};
    addImgs = (() => {
        for(let i = 0; i<6; i++){
            this._imgs["img"+i] = document.createElement("img");
        }
    })()

    fastering = (obj, childObj, name, rep = 1) => {
        let indexer = 0;
        if(rep >= 2){
            for (let el in obj){
                if(obj[el] == this._cards.div4) break;
                for (let i = 0; i<rep; i++) {
                    obj[el].appendChild(childObj[name + indexer])
                    indexer++;
                }
            }
            return;
        }
        for (let el in obj){
            obj[el].appendChild(childObj[name + indexer])
            indexer++;
        }
    }
    
    givingProps = (() => {
        this._imgs.img0.src = coockie;
        this._imgs.img1.src = colCoockie;
        this._imgs.img2.src = scaryCoffee;
        this._imgs.img3.src = drink;
        this._imgs.img4.src = present;
        this._imgs.img5.src = chef;
        this._imgs.img0.alt = "Scary coockies";
        this._imgs.img1.alt = "Colored coockies";
        this._imgs.img2.alt = "Scary coffee";
        this._imgs.img3.alt = "Drink";
        this._imgs.img4.alt = "Present";
        this._imgs.img5.alt = "Chef";

        this.__paras.p0.innerHTML = "Prettiest <span class=\"scary\">coockies</span> in the <span class=\"scary\">Hell</span>";
        this.__paras.p1.textContent = 'Price: 5$';
        this.__paras.p2.innerHTML = 'The funniest <span class="scary">coockies</span> in the <span class="scary">Hell</span>';
        this.__paras.p3.textContent = 'Price: 10$';
        this.__paras.p4.innerHTML = 'Very scary <span class="scary">coffee</span>';
        this.__paras.p5.textContent = 'Price: 3$';
        this.__paras.p6.innerHTML = 'We do not know <span class="scary">what it is</span>';
        this.__paras.p7.textContent = 'Price: 6$';
        this.__paras.p8.innerHTML = 'We will give it if you prove that you a real <span class="scary">deamon</span>';
        this.__paras.p9.innerHTML = 'Price: your <span class="scary">LIFE</span>';

        this._opHs.h10.textContent = "Make your choice";
        this._opHs.h11.textContent = "Coockies";
        this._opHs.h12.textContent = "Drinks";
        this._opHs.h13.textContent = "Present";
        this._opHs.h14.textContent = "Our Chef";

        this.fastering(this._openers, this._opHs, "h1");
        this.fastering(this._cards, this._imgs, "img");
        this.fastering(this._cards, this.__paras, "p", 2);
        this._cards.div4.appendChild(this.__paras.p8);
        this._cards.div4.appendChild(this.__paras.p9);
    })()

    render() {
        mainBox.appendChild(this._openers.div0);
        mainBox.appendChild(this._openers.div1);
        mainBox.appendChild(this._cards.div0);
        mainBox.appendChild(this._cards.div1);
        mainBox.appendChild(this._openers.div2);
        mainBox.appendChild(this._cards.div2);
        mainBox.appendChild(this._cards.div3);
        mainBox.appendChild(this._openers.div3);
        mainBox.appendChild(this._cards.div4);
        mainBox.appendChild(this._openers.div4);
        mainBox.appendChild(this._cards.div5);
    }
}

export {homePage, menuPage, navBut, mainBox};