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
        let shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <style>
        h1{
          font-size: 3em;
          font-weight: bold; 
          font-family: Montserrat, "sans-serif";
        }
        </style>
        <h1>${this.textContent}</h1>
        `
    }
    connectedCallback() {
        if(this.parentElement.tagName.toLowerCase() != "fenrir-app")
            return alert(`${this.tagName.toLowerCase()} must be in <fenrir-app></fenrir-app>`);
    }
}
customElements.define('fenrir-app', FenrirApp);
customElements.define('fenrir-title', FenrirTitle);
