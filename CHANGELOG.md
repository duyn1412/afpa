# Changelog

This document tracks structural and UI changes implemented in the project for the client.

---

## 1. Update Navigation Bar Breakpoint (Navbar Breakpoint)

*   **Description:** Changed the expansion breakpoint of the navigation bar from **Large (`lg` - 992px)** to **Extra Large (`xl` - 1200px)**.
*   **Code Details:**
    *   **Before:** `<nav class="navbar navbar-expand-lg navbar-dark py-0">`
    *   **After:** `<nav class="navbar navbar-expand-xl navbar-dark py-0">`
*   **Purpose:** Keeps the navigation bar collapsed (Hamburger Menu) on medium-to-large screen widths (from 992px up to 1199px). This prevents menu items from wrapping to a new line or overlapping the logo when there isn't enough horizontal space.
*   **Updated Files:**
    *   [index.html](file:///Users/duynguyen/Desktop/codex/html/index.html#L30)
    *   [form.html](file:///Users/duynguyen/Desktop/codex/html/form.html#L29)
    *   [form-submit-validate.html](file:///Users/duynguyen/Desktop/codex/html/form-submit-validate.html#L29)
    *   [style-page.html](file:///Users/duynguyen/Desktop/codex/html/style-page.html#L28)
