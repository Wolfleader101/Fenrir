class FenrirApp extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let css = document.createElement("link");
        css.href = "https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        css.rel = "stylesheet"
        this.appendChild(css)
    }

}

class FenrirTitle extends HTMLElement {
    constructor() {
        super();

        if(this.parentElement.tagName.toLowerCase() != "fenrir-app")
            return alert(`${this.tagName.toLowerCase()} must be in <fenrir-app></fenrir-app>`);
            
        this.style.fontSize = "4rem";
        this.style.fontWeight = "bold";
        this.style.fontFamily = "Montserrat", "sans-serif";
    }
}
customElements.define('fenrir-app', FenrirApp);
customElements.define('fenrir-title', FenrirTitle);
