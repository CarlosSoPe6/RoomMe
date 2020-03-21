'use strict';

let sidebarBtn = document.getElementById('sidebar-btn');
let sidebar = document.querySelector('.app-sidebar');

sidebarBtn.addEventListener('click', e => {
    sidebar.classList.toggle('app-sidebar-open');
    sidebar.classList.toggle('app-sidebar-closed');
});