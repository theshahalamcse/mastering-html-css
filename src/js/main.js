// ================= MENU FUNCTION =================
// This function controls sidebar menu (HTML or CSS)

function loadMenu(type) {

  // Get sidebar element
  let sidebar = document.getElementById("sidebar");
  const viewBase = window.location.pathname.includes("/docs/") ? "../src/views/" : "src/views/";

  // If user clicks HTML button
  if (type === "html") {

    sidebar.innerHTML = `
      <h3>HTML Topics</h3>

      <a href="${viewBase}about.html" onclick="event.preventDefault(); loadPage('${viewBase}about.html');">HTML Intro</a>
      <a href="${viewBase}html-tags.html" onclick="event.preventDefault(); loadPage('${viewBase}html-tags.html');">HTML Tags</a>
      <a href="${viewBase}html-div.html" onclick="event.preventDefault(); loadPage('${viewBase}html-div.html');">HTML Div</a>
    `;

  }

  // If user clicks CSS button
  else if (type === "css") {

    sidebar.innerHTML = `
      <h3>CSS Topics</h3>

      <a href="${viewBase}css-intro.html" onclick="event.preventDefault(); loadPage('${viewBase}css-intro.html');">CSS Intro</a>
      <a href="${viewBase}css-selectors.html" onclick="event.preventDefault(); loadPage('${viewBase}css-selectors.html');">CSS Selectors</a>
    `;

  }
}


// ================= PAGE LOADER FUNCTION =================
// This function loads different HTML files inside content area

function loadPage(page) {

  // Get content area
  let content = document.getElementById("content");

  // Load external file inside content div
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load page: " + response.status);
      }
      return response.text();
    })
    .then(data => {
      content.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
      content.innerHTML = "<p>Unable to load the selected page.</p>";
    });

}