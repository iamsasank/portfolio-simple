import { inject } from "@vercel/analytics"
import { injectSpeedInsights } from "@vercel/speed-insights"

import "./style.css"

inject({
  mode: import.meta.env.PROD ? "production" : "development",
})

injectSpeedInsights()

const menuToggle = document.querySelector("[data-menu-toggle]")
const mobileMenu = document.querySelector("[data-mobile-menu]")

if (menuToggle instanceof HTMLButtonElement && mobileMenu instanceof HTMLElement) {
  const isMenuOpen = () => menuToggle.getAttribute("aria-expanded") === "true"

  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen))
    mobileMenu.setAttribute("aria-hidden", String(!isOpen))
    mobileMenu.dataset.state = isOpen ? "open" : "closed"
  }

  menuToggle.dataset.enhanced = "true"
  mobileMenu.dataset.enhanced = "true"
  setMenuOpen(false)

  menuToggle.addEventListener("click", () => {
    setMenuOpen(!isMenuOpen())
  })

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false)
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      setMenuOpen(false)
    }
  })

  document.addEventListener("click", (event) => {
    if (
      isMenuOpen() &&
      event.target instanceof Node &&
      !menuToggle.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      setMenuOpen(false)
    }
  })

  const desktopBreakpoint = window.matchMedia("(min-width: 640px)")
  const closeMenuOnDesktop = (event) => {
    if (event.matches) {
      setMenuOpen(false)
    }
  }

  closeMenuOnDesktop(desktopBreakpoint)
  desktopBreakpoint.addEventListener("change", closeMenuOnDesktop)
}
