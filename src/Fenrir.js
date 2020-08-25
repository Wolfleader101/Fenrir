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
    let shadowRoot = this.attachShadow({
      mode: 'open'
    })
    shadowRoot.innerHTML = `
        <style>
        h1{
          font-weight: bold; 
          font-family: Montserrat, "sans-serif";
        }
        </style>
        <h1>${this.textContent}</h1>
        `

    const sizeStruct = {
      "extra-small": "0.5em",
      "small": "1em",
      "default": "2em",
      "large": "3em",
      "extra-large": "4em"
    }
  }
  connectedCallback() {
    if (this.parentElement.tagName.toLowerCase() != "fenrir-app")
      return alert(`${this.tagName.toLowerCase()} must be in <fenrir-app></fenrir-app>`);
  }

  static get observedAttributes() {
    return ['color', 'size'];
  }

  get color() {
    return this.hasAttribute('color')
  }

  set color(newColor) {
    return this.setAttribute('color', newColor)
  }

  get size() {
    return this.hasAttribute('size')
  }

  set size(newSize) {
    return this.setAttribute('size', newSize)
  }

  attributeChangedCallback(name, oldval, newval) {
    //keep for testing 
    console.log(`the ${name} attribute has changed from ${oldval} to ${newval}!!`);
    if (name == "color") {
      switch (newval) {
        case 'blue':
          this.style.color = "#2945e3"
          break;
        default:
          break;
      }
    } else if (name == "size") {
      switch (newval) {
        case 'extra=small': 
        this.style.fontSize = sizeStruct["extra-small"];
        break;
        case 'small': 
          this.style.fontSize = sizeStruct.small;
          break;
        case 'large':
          this.style.fontSize = sizeStruct.large;
          break;
        case 'extra-large':
          this.style.fontSize = sizeStruct["extra-large"]
          break;
        default:
          this.style.fontSize = sizeStruct.default;
          alert("Incorrect size value.")
          console.log("Invaid size value: possible values are in docs.")
          break;
      }
    }



  }
}
customElements.define('fenrir-app', FenrirApp);
customElements.define('fenrir-title', FenrirTitle);