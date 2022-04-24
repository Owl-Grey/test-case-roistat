// document.cookie = "is_beta=1";

let pages=1;
let block="";
let fiction = [];
let country = [];
let year = [];
let currentpage=1
let films = [
  {url: "img/95328435_original.jpg", name:"Котя хочет домой", year:"2015", country:"Эфиопия", fiction:"Документальные"},
  {url: "img/SW.jpg", name:"Звездные войны", year:"1983", country:"США", fiction:"Экшн"},
  {url: "img/law-abiding-citizen.jpg", name:"Мужик  лицом на груди", year:"2007", country:"Франция", fiction:"Ужасы"},
  {url: "img/fight-club-classic-movie-art-silk-print-poster.jpg", name:"Прогрессирующая шиза", year:"1429", country:"Никарагуа", fiction:"Комедия"},
  {url: "img/105055.jpg", name:"Вода", year:"1692", country:"Британия", fiction:"Документальные"},
  {url: "img/10793.jpg", name:"Корейские роботы-убийцы", year:"2022", country:"Китай", fiction:"Экшн"},
  {url: "img/internet-baza-posterov-k-filmam_1.jpg", name:"Тяжелые конфетки", year:"2022", country:"Россия", fiction:"Ужасы"},
  {url: "img/X_Men-358442316-large.jpg", name:"Радиоактивные люди", year:"2001", country:"США", fiction:"Экшн"},
  {url: "img/Adnroid.jpg", name:"Андроид! Разрядка", year:"2010", country:"Канада", fiction:"Документальные"},
  {url: "img/1379780523_966050166.jpg", name:"Призрачен ездач", year:"2007", country:"США", fiction:"Ужасы"},
  {url: "img/15937872.jpg", name:"Электро-уничтожитель", year:"1995", country:"Эфиопия", fiction:"Комедия"},
  {url: "img/20-krasivyh-fan-art-1.jpg", name:"Пикассо. Кубизм", year:"1950", country:"Испания", fiction:"Документальные"},
  {url: "img/1634576823_12-papik-pro-p-posteri-kino-13.jpg", name:"Олень", year:"2015", country:"Казахстан", fiction:"Экшн"},
  {url: "img/venom-let-there-be-carnage00.jpg", name:"Жижа", year:"1992", country:"ЮАР", fiction:"Экшн"},
  {url: "img/Hkc6WJA.jpg", name:"42 чела в космосе", year:"2005", country:"Британия", fiction:"Комедия"},
  {url: "img/paws.jpg", name:"Лапки!", year:"2000", country:"Никарагуа", fiction:"Ужасы"},
  {url: "img/3.jpg", name:"Охотники за усопшими", year:"1892", country:"Чехия", fiction:"Комедия"},
  {url: "img/9af40599a3a.jpg", name:"Аппликация", year:"2012", country:"Россия", fiction:"Экшн"},
  {url: "img/1230316199_zhaba_42.jpg", name:"Утюг", year:"2008", country:"США", fiction:"Комедия"},
]
let quantity = films.length;
pages = Math.ceil(quantity/16);
for (var i = 0; i < pages; i++) {
  block = "<div>"+(i+1)+"</div>"
  $(".pagination").append(block);
}
for (i in films) {
  fiction.push(films[i].fiction);
  country.push(films[i].country);
  year.push(films[i].year);
}
pagination(currentpage);

function pagination(current){
  head.scrollIntoView({block: "center", behavior: "smooth"})
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
  Filter();
}

$('body').on('click', '.pagination div', function() {
  page = $(this).text()
  $(".film-list").empty();
  pagination(page);


});










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





function Filter() {
  if (localStorage.fiction!=""){
    fict = localStorage.fiction;
    let this_fict = "";
    for (var i = 0; i < quantity; i++) {
      this_fict = $(".film .fiction").eq(i).text();
      if ($(".film").eq(i).hasClass("disp")){
        $(".film").eq(i).removeClass("disp");
      }
      if(this_fict != fict){
        $(".film").eq(i).addClass("disp");
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
    $(".film").removeClass("disp");
    if (!$(".pointer div").hasClass("disp")){
      $(".pointer div").addClass("disp")
    }
  }
}





if(localStorage.fiction != ""){
  Filter();
}



$(".fiction_selector li").click(function(){
  $(".selector_list").addClass("disp");
   let fict = $(this).text()
  localStorage.setItem('fiction', fict);
  Filter();

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
