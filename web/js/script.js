if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "principal",
    time: 5000, // nome do atributo data-slide="principal"
  });

  new SimpleSlide({
    slide: "portfolio",
    time: 5000, // nome do atributo data-slide="portfolio"
    nav: true, // se deve ou não mostrar a navegação
  });
}
