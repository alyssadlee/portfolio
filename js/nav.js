const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(
  "[aria-controls='primary-navigation']"
);

function toggleMenu() {
  const visibility = primaryNav.getAttribute('data-visible');

  if (!visibility) {
    console.warn("Primary nav data attribute : data-visible not found");
    return;
  }

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    return
  }

  primaryNav.setAttribute("data-visible", false);
  navToggle.setAttribute("data-visible", false);
  return;
}

function UseClickOutside() {
  const primaryNavIsVisible = primaryNav.getAttribute("data-visible") === "true";
  // Make sure that the menu is Open before running the rest of the function
      if (!primaryNavIsVisible) {
        return;
      }
  // check the click target
  const target = event.target;
  
  // if the click target is not a child of the #primary-navigation, then we run the Callback
        if (!primaryNav.contains(target)) {
          toggleMenu();
          return;
        }

        const targetClassContainsNavLink = [...target.classList].find((className) => className === "navigation_link");
        if (targetClassContainsNavLink) {
          toggleMenu();
          return;
        }
        return;
      }
  
document.addEventListener('mousedown', UseClickOutside, true);





