import { filterMenuItem } from "../handlers/filterMenuItem.js";

const createMenuBtn = (btnData) => {
  // create btn
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = btnData.text;
  btn.id = btnData.id;
  btn.classList.add("filter-btn");

  // add ivent to btn
  btn.addEventListener("click", () => {
    const id = btn.id;
    filterMenuItem(id);
  });

  return btn;
};

export default createMenuBtn;
