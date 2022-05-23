const primaryNav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(
  "[aria-controls='primary-navigation']"
);

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});


function UseClickOutside(domRef, _cb, event, ...truthyChecks) {
  // Make sure that the menu is Open before running the rest of the function
      if (!truthyChecks.every(Boolean)) {
        return;
      }
  // check the click target
        const visibility = event.target;
  
  // if the click target is not a child of the #primary-navigation, then we run the Callback
        if (!primaryNav.contains(target)) {
          _cb();
          return;
        }
        return;
      }
  
document.addEventListener('mousedown', (event) => UseClickOutside('#primary-navigation', toggleMenu, event, primaryNav.getAttribute("data-visible") ), true);





