class Product extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
            <style>
                .product {
                    text-align: center;
                    margin: 20px;
                    padding: 20px;
                    & img {
                        border-radius: 5px;
                    }
                }
                .tile {
                    box-shadow: rgba(0, 0, 0, 0.4) 0 1px 2px;
                    transition: all 0.5s ease-in-out;
                }
                
                .tile:hover {
                    box-shadow: rgba(0, 0, 0, 0.4) 0 2px 4px, rgba(0, 0, 0, 0.3) 0 7px 13px -3px, rgba(0, 0, 0, 0.2) 0 -3px 0 inset;
                    transform: translateY(-2px);
                }
            </style>
            <div class="product tile">
                <a href="" style="text-decoration: none; color: #212529">
                    <img src="${this.getAttribute('img')}" alt="product photo" width="300">
                    <p>product info</p>
                </a>
            </div>`;
  }
}

customElements.define('product-info', Product);
