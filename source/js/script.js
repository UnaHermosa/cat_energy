var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggler');

navMain.classList.remove('main-navigation--nojs');
navToggle.addEventListener('click', function() {
  if(navMain.classList.contains('main-navigation--closed')) {
  navMain.classList.remove('main-navigation--closed');
  navMain.classList.add('main-navigation--opened');
} else {
  navMain.classList.remove('main-navigation--opened');
  navMain.classList.add('main-navigation--closed');
}
});
