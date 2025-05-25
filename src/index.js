import "./styles.css";
import createDropdown from "./dropdown-menu";

const itemDropdown = ["Option 1", "Option 2", "Option 3"];

const clickDropdown = {
  containerElementCSSSelector: ".container-dropdown",
  itemDropdown: itemDropdown,
  expandEvent: "click",
};

createDropdown(clickDropdown);
