const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const listItems = document.querySelectorAll("#primary-nav-items li");

navToggle.addEventListener("click", () => {
  console.log("hello");
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Add click event listener to each list item
listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove "active" class from all list items
    listItems.forEach(function (li) {
      li.classList.remove("active");
    });

    // Add "active" class to the clicked list item
    item.classList.add("active");
  });
});

document.querySelectorAll(".has-dropdown img").forEach(function (img) {
  img.addEventListener("click", function (event) {
    // Stop the event propagation to prevent the click from reaching the parent li
    event.stopPropagation();

    // Find the parent li of the clicked image
    const parentLi = img.closest(".has-dropdown");

    // Close all other submenus
    document.querySelectorAll(".submenu-active").forEach(function (submenu) {
      if (submenu !== parentLi.querySelector(".submenu")) {
        submenu.classList.remove("submenu-active");
      }
    });

    // Toggle 'submenu-active' class for the clicked submenu
    parentLi.querySelector(".submenu").classList.toggle("submenu-active");
  });
});

// Add a click event listener to close the submenu when clicking outside
document.addEventListener("click", function () {
  document.querySelectorAll(".submenu-active").forEach(function (submenu) {
    submenu.classList.remove("submenu-active");
  });
});
