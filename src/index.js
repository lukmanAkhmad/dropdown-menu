import "./styles.css";
import { createMenu } from "./uiControl";

const body = document.querySelector("body");
const menuItems = document.querySelector(".menu-items");

createMenu(body, menuItems);
