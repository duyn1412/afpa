# Changelog

This document tracks the new structural and UI updates that need to be implemented for the client.

---

## 1. Add "link-more" Class to "Learn More" Links

- **Description:** Ensure all "Learn More" links/buttons have the class `link-more` to apply consistent styles across the site.
- **Code Structure:**
  ```html
  <a class="link-more" href="#">Learn More <i class="bi bi-arrow-right-short"></i></a>
  ```

---

## 2. Update Class for "View All" Button

- **Description:** Update the class for the "View All" button under the Campaigns section to match the new style.
- **Code Change:**
  - **Before:** `<a class="btn min-194 btn-outline-primary rounded-pill px-5" href="#">View All</a>`
  - **After:** `<a class="btn btn-primary rounded-pill px-4 button-white load-more mt-5" href="#">View All</a>`
