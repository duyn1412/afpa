# Changelog

This document tracks structural and UI changes implemented in the project for the client.

---

## 1. Update Navigation Bar Breakpoint

- **Description:** Changed the expansion breakpoint of the navigation bar from **Large (`lg` — 992px)** to **Extra Large (`xl` — 1200px)**.
- **Code Change:**
  - **Before:** `<nav class="navbar navbar-expand-lg navbar-dark py-0">`
  - **After:** `<nav class="navbar navbar-expand-xl navbar-dark py-0">`
- **Purpose:** Keeps the navigation bar collapsed (Hamburger Menu) on medium-to-large screen widths (992px – 1199px). This prevents menu items from wrapping to a new line or overlapping the logo when there isn't enough horizontal space.
- **Files Updated:**
  - `index.html` (line 30)
  - `form.html` (line 29)
  - `form-submit-validate.html` (line 29)
  - `style-page.html` (line 28)

---

## 2. Fix: "Join AFPA" Button Placement in Navbar

- **Description:** The **Join AFPA** button (and the **Contact Us** button) must be placed **inside** the `.navbar-collapse` wrapper div (`<div class="collapse navbar-collapse" id="mainNav">`), not outside of it.
- **Issue:** When placed outside the collapse wrapper, the buttons always remain visible and float incorrectly on mobile and tablet breakpoints — breaking the responsive layout.
- **Code — Correct Structure (`index.html`, lines 59–62):**

  ```html
  <!-- Inside the collapse div -->
  <div class="d-flex flex-column flex-lg-row gap-2 ms-lg-4 py-3 py-lg-0">
    <a class="btn btn-outline-light btn-sm rounded-pill px-4" href="#contact">Contact Us</a>
    <a class="btn btn-light btn-sm rounded-pill px-4" href="#join">Join AFPA</a>
  </div>
  ```

- **Action Required:** Please verify that the button wrapper `<div class="d-flex ...">` containing both buttons is placed **inside** `<div class="collapse navbar-collapse" id="mainNav">`, and **before** the closing `</div>` of that collapse container.

---

## 3. Update `custom-wip.js` — Fix Scroll Flickering (Scroll Flinging)

- **Description:** The current navbar scroll shrink logic uses two different thresholds (`> 120` to add the class, `< 40` to remove it), which causes a **flickering/flinging effect** when the user scrolls near those boundary values.
- **Fix:** Replace the dual-threshold logic with a single, consistent threshold value so the navbar state changes smoothly without bouncing.
- **Action Required:** Replace the contents of your `custom-wip.js` file (lines 8–14) with the updated version below:

  ```js
  // BEFORE (causes flicker)
  var shrinkHeader = function () {
    var scrollY = window.scrollY;
    if (scrollY > 120) {
      header.classList.add("scrolled");
    } else if (scrollY < 40) {
      header.classList.remove("scrolled");
    }
  };

  // AFTER (smooth, no flicker)
  var shrinkHeader = function () {
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  ```

- **File:** `custom-wip.js`
