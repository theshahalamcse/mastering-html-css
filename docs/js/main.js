// ================= MENU FUNCTION =================
// This function controls sidebar menu (HTML or CSS)

function loadMenu(type) {
  // Get sidebar element
  let sidebar = document.getElementById("sidebar");
  const viewBase = "views/";

  // If user clicks HTML button
  if (type === "html") {
    sidebar.innerHTML = `
      <h3>HTML Topics</h3>

      <a href="${viewBase}about.html" onclick="event.preventDefault(); loadPage('${viewBase}1-html.about.html');">HTML Intro</a>
      <a href="${viewBase}html-html-editor.html" onclick="event.preventDefault(); loadPage('${viewBase}2-html-html-editor.html');">HTML Editor</a>
      <a href="${viewBase}html-basic.html" onclick="event.preventDefault(); loadPage('${viewBase}3-html-basic.html');">HTML Basic</a>
      <a href="${viewBase}html-attributes.html" onclick="event.preventDefault(); loadPage('${viewBase}4-html-attributes.html');">HTML Attributes</a>
      <a href="${viewBase}html-heading.html" onclick="event.preventDefault(); loadPage('${viewBase}5-html-heading.html');">HTML Heading</a>
      <a href="${viewBase}html-paragraphs.html" onclick="event.preventDefault(); loadPage('${viewBase}6-html-paragraphs.html');">HTML Paragraphs</a>
      <a href="${viewBase}html-style.html" onclick="event.preventDefault(); loadPage('${viewBase}7-html-style.html');">HTML Style</a>
      <a href="${viewBase}html-text-formatting.html" onclick="event.preventDefault(); loadPage('${viewBase}8-html-text-formatting.html');">HTML Text Formatting</a>
      <a href="${viewBase}html-quotations.html" onclick="event.preventDefault(); loadPage('${viewBase}9-html-quotations.html');">HTML Quotations</a>

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
      <h2>Welcome To New Web developer Tutorial</h2>
      <p>This panel shows the selected HTML page from the sidebar.</p>
      <iframe src="${page}" title="Page preview"></iframe>
    </div>
  `;
}
