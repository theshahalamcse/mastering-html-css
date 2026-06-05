

// ================= MENU FUNCTION =================
// This function controls sidebar menu (HTML or CSS)

function loadMenu(type) {

  // Get sidebar element
  let sidebar = document.getElementById("sidebar");
  const viewBase = "../src/views/";

  // If user clicks HTML button
  if (type === "html") {

    sidebar.innerHTML = `
      <h3>HTML Topics</h3>

      <a href="${viewBase}about.html" onclick="event.preventDefault(); loadPage('${viewBase}about.html');">HTML Intro</a>
      <a href="${viewBase}html-tags.html" onclick="event.preventDefault(); loadPage('${viewBase}html-tags.html');">HTML Tags</a>
      <a href="${viewBase}html-div.html" onclick="event.preventDefault(); loadPage('${viewBase}html-div.html');">HTML Div</a>
      <a href="${viewBase}test.html" onclick="event.preventDefault(); loadPage('${viewBase}test.html');">HTML Test</a>
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
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="content-card">
      <h2>Preview</h2>
      <p>This panel shows the selected HTML page from the sidebar.</p>
      <iframe src="${page}" title="Page preview"></iframe>
    </div>
  `;
}