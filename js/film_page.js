// Заполение страницы фильмами.
  $('.film_fullinfo img').attr('src', localStorage.film_url)
  $('.film_fullinfo .title').text(localStorage.film_title)
  $('.film_fullinfo .info_fiction').text("Жанр: " + localStorage.film_fiction)
  $('.film_fullinfo .info_year').text("Год выпуска: " + localStorage.film_year)
  $('.film_fullinfo .info_country').text("Страна создания: " + localStorage.film_country)
  $('.film_fullinfo .info_descr').text("Описание: " + localStorage.film_descr)
