// document.cookie = "is_beta=1";

let pages=1;
let block="";
let fiction = [];
let country = [];
let year = [];
let currentpage=1;
let films =[];
let films_list = [
  {url: "img/95328435_original.jpg", name:"Котя хочет домой", year:"2015", country:"Эфиопия", fiction:"Документальные", desr:"Тут должно быть какое-то описание фильма Тут должно быть какое-то описание фильма Тут должно быть какое-то описание фильма Тут должно быть какое-то описание фильма Тут должно быть какое-то описание фильма"},
  {url: "img/SW.jpg", name:"Звездные войны", year:"1983", country:"США", fiction:"Экшн" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/law-abiding-citizen.jpg", name:"Мужик с лицом на груди", year:"2007", country:"Франция", fiction:"Ужасы" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/fight-club-classic-movie-art-silk-print-poster.jpg", name:"Прогрессирующая шиза", year:"1429", country:"Никарагуа", fiction:"Комедия" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/105055.jpg", name:"Вода", year:"1692", country:"Британия", fiction:"Документальные" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/10793.jpg", name:"Корейские роботы-убийцы", year:"2022", country:"Китай", fiction:"Экшн"},
  {url: "img/internet-baza-posterov-k-filmam_1.jpg", name:"Тяжелые конфетки", year:"2022", country:"Россия", fiction:"Ужасы" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/X_Men-358442316-large.jpg", name:"Радиоактивные люди", year:"2001", country:"США", fiction:"Экшн" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/Adnroid.jpg", name:"Андроид! Разрядка", year:"2010", country:"Канада", fiction:"Документальные" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/1379780523_966050166.jpg", name:"Призрачен ездач", year:"2007", country:"США", fiction:"Ужасы" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/15937872.jpg", name:"Электро-уничтожитель", year:"1995", country:"Эфиопия", fiction:"Комедия" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/20-krasivyh-fan-art-1.jpg", name:"Пикассо. Кубизм", year:"1950", country:"Испания", fiction:"Документальные" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/1634576823_12-papik-pro-p-posteri-kino-13.jpg", name:"Олень", year:"2015", country:"Казахстан", fiction:"Экшн" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/venom-let-there-be-carnage00.jpg", name:"Жижа", year:"1992", country:"ЮАР", fiction:"Экшн" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/Hkc6WJA.jpg", name:"42 чела в космосе", year:"2005", country:"Британия", fiction:"Комедия" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/paws.jpg", name:"Лапки!", year:"2000", country:"Никарагуа", fiction:"Ужасы" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/3.jpg", name:"Охотники за усопшими", year:"1892", country:"Чехия", fiction:"Комедия" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/9af40599a3a.jpg", name:"Аппликация", year:"2012", country:"Россия", fiction:"Экшн" , desr:"Тут должно быть какое-то описание фильма"},
  {url: "img/1230316199_zhaba_42.jpg", name:"Утюг", year:"2008", country:"США", fiction:"Комедия" , desr:"Тут должно быть какое-то описание фильма"},
]
filter_params();
Filter();

function filter_params(){
  for (i in films_list) {
  fiction.push(films_list[i].fiction);
  country.push(films_list[i].country);
  year.push(films_list[i].year);
}
uniqarr()
}

function pagescount(arr){
  $(".pagination").empty();
  let quantity = arr.length;
  pages = Math.ceil(quantity/16);
  for (var i = 0; i < pages; i++) {
    block = "<div>"+(i+1)+"</div>"
    $(".pagination").append(block);
  }
}



function pagination(current){
  $(".film-list").empty();
  head.scrollIntoView({block: "center", behavior: "smooth"})
  console.log(1)
  if (current < pages){
    x = 16*current
  }
  else{
    x= films.length
  }
  for (var i = 16*(current-1); i < x ; i++) {
    block = '<div class="film"><img class="poster" src="'+films[i].url +'" alt=""><div class="film_info"><div class="name"><h1>'+ films[i].name +'</h1></div><div> <p class="year">'+ films[i].year +'</p><p class="country">'+ films[i].country +'</p><p class="fiction">'+ films[i].fiction +'</p></div></div></div>'
    $(".film-list").append(block)
  }
}

function Filter() {
  films =[];
  if (localStorage.fiction!="" && localStorage.fiction!== undefined){
    fict = localStorage.fiction;
    for (i in films_list){
      if (films_list[i].fiction == fict){
        films.push(films_list[i])
      }
    }
    if($(".pointer div").length>0){
      if ($(".pointer div").hasClass("disp")){
        $(".pointer div").removeClass("disp")
      }
      $(".pointer div").text(fict);
    }
    else{
      block = '<div class="ret">'+fict+'</div>';
      $(".pointer").append(block);

    }
  }
  else{
    if (!$(".pointer div").hasClass("disp")){
      $(".pointer div").addClass("disp")
    films = films_list
    }
  }
  pagescount(films)
  pagination(currentpage)
}



$(".fiction_selector li").click(function(){
  $(".selector_list").addClass("disp");
   let fict = $(this).text()
  localStorage.setItem('fiction', fict);
  Filter();
})

$(".year_selector li").click(function(){
  $(".selector_list").addClass("disp");
   let fict = $(this).text()
  localStorage.setItem('year', fict);
  Filter();
})

$(".country_selector li").click(function(){
  $(".selector_list").addClass("disp");
   let fict = $(this).text()
  localStorage.setItem('country', fict);
  Filter();
})













$('body').on('click', '.pagination div', function() {
  page = $(this).text()
  pagination(page);
});



function uniqarr(){
  var uniquefict = fiction.filter(function(item, i, fiction) {
    return i == fiction.indexOf(item);
  });
  var uniquecountry = country.filter(function(item, i, country) {
    return i == country.indexOf(item);
  });
  var uniqueyear = year.filter(function(item, i, year) {
    return i == year.indexOf(item);
  });

  for (i in uniquefict) {
    block="<li>"+uniquefict[i]+"</li>"
    $(".fiction_selector").append(block)
  };
  for (i in uniqueyear) {
    block="<li>"+uniqueyear[i]+"</li>"
    $(".year_selector").append(block)
  };
  for (i in uniquecountry) {
    block="<li>"+uniquecountry[i]+"</li>"
    $(".country_selector").append(block)
  };
}














$(".fiction_selector_title").click(function(){
  if ($(".selector_list_fict").hasClass("disp")){
    $(".selector_list_fict").removeClass("disp");
  }
  else{
    $(".selector_list_fict").addClass("disp");
  }
})
$(".country_selector_title").click(function(){
  if ($(".selector_list_ctr").hasClass("disp")){
    $(".selector_list_ctr").removeClass("disp");
  }
  else{
    $(".selector_list_ctr").addClass("disp");
  }
})
$(".year_selector_title").click(function(){
  if ($(".selector_list_ye").hasClass("disp")){
    $(".selector_list_ye").removeClass("disp");
  }
  else{
    $(".selector_list_ye").addClass("disp");
  }
})



$(document).mouseup( function(e){ // событие клика по веб-документу
		let list = $( ".selector_list" ); // тут указываем ID элемента
		if ( !list.is(e.target) // если клик был не по нашему блоку
		    && list.has(e.target).length === 0 ) { // и не по его дочерним элементам
			list.addClass("disp"); // скрываем его
		}
	});


$('body').on('click', '.pointer div', function() {
  localStorage.setItem('fiction', "");
  Filter()
});




$('body').on('click', '.film', function() {
  title = $(this).find(".name").text()
  for (i in films_list){
    if (films_list[i].name == title){
      opennewpage(i);
    }
  }


});


function opennewpage(i){
  localStorage.film_url = films_list[i].url
  localStorage.film_title = films_list[i].name
  localStorage.film_fiction = films_list[i].fiction
  localStorage.film_year = films_list[i].year
  localStorage.film_country = films_list[i].country
  localStorage.film_descr = films_list[i].desr
  window.open('film-page.html');
}















// var results = document.cookie.match(/is_beta=(.+?)(;|$)/);
// if (results[1]==1){
//   if ($(".smile").hasClass("disp")){
//     $(".smile").removeClass("disp")
//   }
// }
// else{
//   if (!$(".smile").hasClass("disp")){
//     $(".smile").addClass("disp")
//   }
// }
