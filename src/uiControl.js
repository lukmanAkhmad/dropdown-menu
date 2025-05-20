// function renderScreen() {
//   const body = document.querySelector("body");
//   const menuItems = document.querySelector(".menu-items");

//   createMenu(body, menuItems);
// }

function createMenu(parentElement, menuItems) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const txtMenuContainer = document.createElement("div");
  txtMenuContainer.classList.add("txt-menu-container");
  txtMenuContainer.textContent = "Menu";

  menuContainer.addEventListener("click", () => {
    console.log("on click");
    menuItems.style.display = "flex";
  });

  menuContainer.appendChild(txtMenuContainer);
  menuContainer.appendChild(menuItems);
  parentElement.appendChild(menuContainer);
}

export { createMenu };
