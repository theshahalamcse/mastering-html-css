const pageContentMap = {
  'views/about.html': '<h2>HTML Introduction</h2><p>HTML stands for HyperText Markup Language. It is used to create web pages.</p>',
  'views/html-tags.html': '<h2>HTML Tags</h2><p>HTML tags define the structure of a webpage. Common examples include headings, paragraphs, links, images, and lists.</p>',
  'views/html-div.html': '<h2>HTML Div</h2><p>The div element is a container used to group content and apply layout or styling with CSS.</p>',
  'views/css-intro.html': '<h2>CSS Introduction</h2><p>CSS controls the presentation of HTML pages, including colors, fonts, spacing, and layout.</p>',
  'views/css-selectors.html': '<h2>CSS Selectors</h2><p>CSS selectors target HTML elements so you can style specific parts of your page.</p>'
};

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

  if (pageContentMap[page]) {
    content.innerHTML = pageContentMap[page];
    return;
  }

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