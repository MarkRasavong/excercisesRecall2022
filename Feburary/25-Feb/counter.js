class Counter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get count() {
    return this.getAttribute('count');
  };

  set count(val) {
    this.setAttribute('count', value);
  }

  //set the 2 fns to update the dom
  static get observedAttributes() {
    return ['count']
  };

  attributeChangedCallback(prop, oldValue, newValue) {
    if (prop === 'count') this.render();
    let btn = this.shadow.getElementById('#btn');
    btn.addEventListener('click', this.inc.bind(this));
  }

  inc() {
    this.count++;
  }

  connectedCallback() {
    this.render();
    let btn = this.shadow.getElementById('#btn');
    //
    btn.addEventListener('click', this.inc.bind(this));
  }

  render() {
    this.show.innerHTML = `
    <h1>Counter</h1>
    ${this.count}
    <button id='btn'>+</button>
    `;
  }
};

customElements.define('encimera', Counter);

//https://www.youtube.com/watch?v=vLkPBj9ZaU0&ab_channel=Ashotofcode