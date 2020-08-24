class FenrirApp extends HTMLElement {
    constructor() {
        super();
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