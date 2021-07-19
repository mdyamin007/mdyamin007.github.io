window.addEventListener('load', (e) => {
    loader = document.getElementById("loading");
    loader.style.display = "none";
})

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })
  