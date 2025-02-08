const container = document.querySelector("#container");
const mainBox = document.createElement("div");
const navBut = [...document.querySelectorAll("header>nav>ul>li")]
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
        mainBox.replaceChildren("");
        mainBox.appendChild(this._divs.opener);
        mainBox.appendChild(this._divs.card1);
        mainBox.appendChild(this._divs.card2);
        mainBox.appendChild(this._divs.card3);
    }
}

export {homePage, navBut};