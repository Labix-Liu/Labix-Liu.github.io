// Theme toggle (remembers choice), mobile nav, and abstract toggles.
(function () {
  var root = document.documentElement;

  function getStored() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem("theme", v); } catch (e) {}
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var icon = document.querySelector("#theme-toggle i");
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  var initial = getStored() ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  apply(initial);

  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme"));

    var t = document.getElementById("theme-toggle");
    if (t) t.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next); store(next);
    });

    var n = document.getElementById("nav-toggle");
    if (n) n.addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("open");
    });

    document.querySelectorAll("[data-abstract]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var el = document.getElementById(btn.getAttribute("data-abstract"));
        if (el) el.classList.toggle("open");
      });
    });

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
