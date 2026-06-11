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
      <a href="${viewBase}html-comments.html" onclick="event.preventDefault(); loadPage('${viewBase}10-html-comments.html');">HTML Comments</a>
      <a href="${viewBase}html-color.html" onclick="event.preventDefault(); loadPage('${viewBase}11-html-color.html');">HTML Color</a>
      <a href="${viewBase}html-css.html" onclick="event.preventDefault(); loadPage('${viewBase}12-html-css.html');">HTML CSS</a>
      <a href="${viewBase}html-link.html" onclick="event.preventDefault(); loadPage('${viewBase}13-html-link.html');">HTML Link</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}14-html-image.html');">HTML Image</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}15-html-favicon.html');">HTML Favicon</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}16-html-title.html');">HTML Title</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}17-html-table.html');">HTML Table</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}18-html-list.html');">HTML List</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}19-html-block-inline.html');">HTML Block and Inline Elements</a>
      <a href="${viewBase}html-list.html" onclick="event.preventDefault(); loadPage('${viewBase}20-html-div.html');">HTML Div</a>
      <a href="${viewBase}html-class.html" onclick="event.preventDefault(); loadPage('${viewBase}21-html-class.html');">HTML Class</a>
    `;
  }

  // If user clicks CSS button
  else if (type === "css") {
    sidebar.innerHTML = `
      <h3>CSS Topics</h3>

      <a href="${viewBase}css-intro.html" onclick="event.preventDefault(); loadPage('${viewBase}201-css-intro.html');">CSS Intro</a>
      <a href="${viewBase}css-syntax.html" onclick="event.preventDefault(); loadPage('${viewBase}202-css-syntax.html');">CSS Syntax</a>
      <a href="${viewBase}css-selectors.html" onclick="event.preventDefault(); loadPage('${viewBase}203-css-selectors.html');">CSS Selectors</a>
      <a href="${viewBase}204-css-comments.html" onclick="event.preventDefault(); loadPage('${viewBase}204-css-comments.html');">CSS Comments</a>
      <a href="${viewBase}205-css-errors.html" onclick="event.preventDefault(); loadPage('${viewBase}205-css-errors.html');">CSS Errors</a>
      <a href="${viewBase}206-css-color.html" onclick="event.preventDefault(); loadPage('${viewBase}206-css-color.html');">CSS Color</a>
      <a href="${viewBase}207-css-background.html" onclick="event.preventDefault(); loadPage('${viewBase}207-css-background.html');">CSS Background</a>
      <a href="${viewBase}208-css-border.html" onclick="event.preventDefault(); loadPage('${viewBase}208-css-border.html');">CSS Border</a>
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
