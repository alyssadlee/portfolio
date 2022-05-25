const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(
  "[aria-controls='primary-navigation']"
);

function toggleMenu() {
  const visibility = primaryNav.getAttribute("data-visible");

  if (!visibility) {
    console.warn("Primary nav data attribute : data-visible not found");
    return;
  }

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    return;
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("data-visible", false);
    return;
  }
}

function UseClickOutside(evt) {
  const primaryNavIsVisible =
    primaryNav.getAttribute("data-visible") === "true";
  // Make sure that the menu is Open before running the rest of the function
  if (!primaryNavIsVisible) {
    return;
  }
  // check the click target
  const target = evt.target;
  const targetClassContainsNavLink = [...target.classList].find(
    (className) => className === "navigation_link"
  );

  const nav = document.querySelector(".primary-nav");
  // if the click target is not a child of the Nav, then we run the Callback
  if (!nav.contains(target) || targetClassContainsNavLink) {
    toggleMenu();
    return;
  }

  return;
}

document.addEventListener("mousedown", (evt) => UseClickOutside(evt), true);

function skipToMain() {
  const container = document.querySelector("main");

  if (container) {
    container.tabIndex = -1;
    container.focus();
    setTimeout(() => container.removeAttribute("tabindex"), 1000);
  }
}
