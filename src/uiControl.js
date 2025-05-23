export default function createDropdown({
  containerElementCSSSelector = "",
  ItemDropdown = ["Option 1"],
  expandEvent = "click",
} = {}) {
  const containerElement = document.querySelector(containerElementCSSSelector);

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  dropdown.textContent = "Dropdown";
  const dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");

  ItemDropdown.forEach((items) => {
    const dropdownItem = document.createElement("div");
    dropdownItem.textContent = `${items}`;

    dropdownContent.appendChild(dropdownItem);
  });

  containerElement.appendChild(dropdown);
  containerElement.appendChild(dropdownContent);
}
