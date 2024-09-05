import App from "c/app";
import Header from "c/header";
import Theme from "c/theme";
import Test from "./c/test/test";


customElements.define('c-app', App.CustomElementConstructor);
// customElements.define('c-header', Header.CustomElementConstructor);
customElements.define('c-theme', Theme.CustomElementConstructor);
