import dropdownIcon from "./assets/img/arrow_drop_down.svg";

export default function createDropdown({
  containerElementCSSSelector = "body",
  itemDropdown = ["Option 1"],
  expandEvent = "click",
} = {}) {
  const VALID_EXPAND_EVENTS = ["hover", "click", "mousedown"];
  if (!expandEvent || !VALID_EXPAND_EVENTS.includes(expandEvent)) {
    return console.error(
      "Please use a valid event type for expanding the dropdown. Valid events are 'hover', 'click', 'mousedown'.",
    );
  }

  const containerElement = document.querySelector(containerElementCSSSelector);

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const sectionBtn = document.createElement("section");
  sectionBtn.classList.add("section-btn");

  const btnDropdown = document.createElement("button");
  btnDropdown.classList.add("btn-dropdown");
  btnDropdown.textContent = `Dropdown ${expandEvent}`;

  const iconDropdown = document.createElement("img");
  iconDropdown.classList.add("icon-dropdown");
  iconDropdown.src = dropdownIcon;
  iconDropdown.alt = "Dropdown icon";
  iconDropdown.title = "Dropdown icon";

  const dropdownContent = document.createElement("ul");
  dropdownContent.classList.add("dropdown-content");

  const actionExpandEvent =
    expandEvent === "hover" ? "mouseenter" : "mousedown";

  const toggleDropdownContent = () => {
    dropdownContent.classList.toggle("visible");
  };
  const hideDropdownContent = () => {
    dropdownContent.classList.remove("visible");
  };

  sectionBtn.addEventListener(actionExpandEvent, toggleDropdownContent);
  if (actionExpandEvent !== "mousedown") {
    dropdownContent.addEventListener("mouseleave", hideDropdownContent);
  }

  itemDropdown.forEach((items) => {
    const dropdownItem = document.createElement("li");
    dropdownItem.classList.add("dropdown-item");
    dropdownItem.textContent = `${items}`;

    dropdownContent.appendChild(dropdownItem);
  });

  sectionBtn.appendChild(btnDropdown);
  sectionBtn.appendChild(iconDropdown);
  dropdown.appendChild(sectionBtn);
  dropdown.appendChild(dropdownContent);
  containerElement.appendChild(dropdown);
}
