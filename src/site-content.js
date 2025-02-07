const container = document.querySelector("#container");
const mainBox = document.createElement("div");;
mainBox.classList = "mainBox";
container.appendChild(mainBox);

class homePage{
    divs = {
        opener : document.createElement("div"),
        card1 : document.createElement("div"),
        card2 : document.createElement("div"),
        card3 : document.createElement("div"),
    }

    paras = {
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

    opH1 = document.createElement("h1");
    card1H3 = document.createElement("h3");
    card2H2 = document.createElement("h2");
    card3H2 = document.createElement("h2");

    givingProps() {
        this.divs.opener.classList = "opener";
        this.divs.card1.classList = "card";
        this.divs.card2.classList = "card hours";
        this.divs.card3.classList = "card location";

        this.opH1.classList = "scary";
        this.card1H3.classList = "scary";
        this.card2H2.classList = "scary";
        this.card3H2.classList = "scary";

        this.opH1.textContent = "Scary plate";
        this.card1H3.textContent = "John";
        this.card2H2.textContent = "Hours";
        this.card3H2.textContent = "Location";

        this.paras.card1Para.innerHTML = "<span class=\"scary\">Scary plate</span> has the best <span class=\"scary\">meat</span>! The atmosphere and customer service make you feel like you are sitting in the middle of the <span class=\"scary\">hell</span>, eating like a <span class=\"scary\">Satan</span>! This is exactly the kind of place that I like to return to <span class=\"scary\">again and again</span>.";
        this.paras.card2Para[0].textContent = "Sunday: 8am - 8pm";
        this.paras.card2Para[1].textContent = "Monday: 6am - 6pm";
        this.paras.card2Para[2].textContent = "Tuesday: 6am - 6pm";
        this.paras.card2Para[3].textContent = "Wednesday: 6am - 6pm";
        this.paras.card2Para[4].textContent = "Thursday: 6am - 10pm";
        this.paras.card2Para[5].textContent = "Friday: 6am - 10pm";
        this.paras.card2Para[6].textContent = "Saturday: 8am - 10pm";
        this.paras.card3Para.textContent = "Your Dreams";
    }

    render() {
        this.givingProps();
        
        this.divs.opener.appendChild(this.opH1);
        
        this.divs.card1.appendChild(this.paras.card1Para);
        this.divs.card1.appendChild(this.card1H3);
        
        this.divs.card2.appendChild(this.card2H2);
        this.paras.card2Para.forEach(el => {
            this.divs.card2.appendChild(el);
        })

        this.divs.card3.appendChild(this.card3H2);
        this.divs.card3.appendChild(this.paras.card3Para);

        mainBox.appendChild(this.divs.opener);
        mainBox.appendChild(this.divs.card1);
        mainBox.appendChild(this.divs.card2);
        mainBox.appendChild(this.divs.card3);
    }
}

export default new homePage();