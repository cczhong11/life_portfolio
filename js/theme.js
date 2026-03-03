(function () {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const panel = document.querySelector("[data-mobile-panel]");

  if (header) {
    const setScrolled = () => {
      if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    setScrolled();
    window.addEventListener("scroll", setScrolled, { passive: true });
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("menu-open", !expanded);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      });
    });
  }
})();
