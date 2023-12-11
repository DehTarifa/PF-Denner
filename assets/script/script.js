/* 
// MENU HEADER

const navmenu_btn_modal = document.getElementById('navmenu-btn-modal')
navmenu_btn_modal.addEventListener('click', modalIntro)

const containerModal = document.getElementById('container-modal')
containerModal.addEventListener('click', modalIntro)

function modalIntro() {
  containerModal.classList.toggle('container-modal-active')
}

// HEADER NOTIFICATION

const header_notification = document.getElementById('header-notification')
header_notification.addEventListener('click', closeNotification)

function closeNotification() {
  header_notification.classList.toggle('header-notification-active')
}

setTimeout(closeNotification, 5000)

*/


// OPEN AND CLOSE SIDE MODAL ---------------------------

const buttonNavModal = document.getElementById('navmenu-btn-modal')
buttonNavModal.addEventListener('click', openAndCloseModal)

const sideMenuBar = document.getElementById('side-menu-bar')
sideMenuBar.addEventListener('click', openAndCloseModal)

function openAndCloseModal() {
  sideMenuBar.classList.toggle('side-menu-bar-active')
}

// SHOW IN MENU INPUT ----------------------------------

function showInMenu(value) {
 document.getElementById('sidemenu-input').value = value
}

// HEADER SCROLL PAGE

const topHeader = document.getElementById('navigation-bar')

function scrollActiveHeader () {
  topHeader.classList.toggle('navigation-bar-active', scrollY > 10)
}

window.addEventListener('scroll', scrollActiveHeader)

// SHOW NOTIFICATION SCREEN

const screenNnotification = document.getElementById('screen-notification')
screenNnotification.addEventListener('click', closeNotificationScreen)

function closeNotificationScreen() {
  screenNnotification.classList.toggle('screen-notification-active')
}

setTimeout(closeNotificationScreen, 5000)