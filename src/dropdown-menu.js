export default function createDropdown({
  containerElementCSSSelector = "body",
  itemDropdown = ["Option 1"],
  expandEvent = "click",
} = {}) {
  const containerElement = document.querySelector(containerElementCSSSelector);

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  const btnDropdown = document.createElement("button");
  btnDropdown.classList.add("btn-dropdown");
  btnDropdown.textContent = "Dropdown";
  const dropdownContent = document.createElement("ul");
  dropdownContent.classList.add("dropdown-content");

  const showDropdownContent = () => dropdownContent.classList.toggle("visible");
  const hideDropdownContent = () => dropdownContent.classList.remove("visible");

  btnDropdown.addEventListener(expandEvent, (e) => {
    e.preventDefault();
    if (dropdownContent.classList.contains("visible")) {
      hideDropdownContent();
    } else {
      showDropdownContent();
    }
  });

  itemDropdown.forEach((items) => {
    const dropdownItem = document.createElement("li");
    dropdownItem.textContent = `${items}`;

    dropdownContent.appendChild(dropdownItem);
  });

  dropdown.appendChild(btnDropdown);
  dropdown.appendChild(dropdownContent);
  containerElement.appendChild(dropdown);
}
