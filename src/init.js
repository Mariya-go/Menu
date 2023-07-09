import { data, dom } from "./data.js";

// show buttons
import createMenuBtn from "./components/createMenuButton.js";

data.buttons.forEach((btnData) => {
  const btnDom = createMenuBtn(btnData);
  dom.btnContainer.append(btnDom);
});

import menuItem from "./components/createMenuItem.js";

data.menu.forEach((itemData) => {
  const itemDom = menuItem(itemData);
  dom.sectionCenter.append(itemDom);
});
