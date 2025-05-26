import "./styles.css";
import createDropdown from "./dropdown-menu";

const itemDropdown = ["Option 1", "Option 2", "Option 3"];

const clickDropdown = {
  containerElementCSSSelector: ".container-dropdown-click",
  itemDropdown: itemDropdown,
  expandEvent: "click",
};

const hoverDropdown = {
  containerElementCSSSelector: ".container-dropdown-hover",
  itemDropdown: itemDropdown,
  expandEvent: "hover",
};

createDropdown(clickDropdown);
createDropdown(hoverDropdown);
