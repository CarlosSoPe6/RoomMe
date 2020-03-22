var allMonths, dayArray = [], click = 0, dotw = [/Sun/gi,/Mon/gi,/Tue/gi,/Wed/gi, /Thu/gi,/Fri/gi,/Sat/gi];
function getAllDays(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    var dayToPush = new Date(date);
    days.push(dayToPush);
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function getYear(){
  var d = new Date();
  var curYear = d.getFullYear();
  return curYear;
}
function addElements (query, id){
  //for onload, use activeIndex+1 as query value
  document.getElementById(id).innerHTML = '';
  var allDays = getAllDays((query), getYear());
    for(var i = 0; i<allDays.length; i++){
      allDays[i] = allDays[i].toString();
    }
  var stopNow = false, counter = 0;
  for(var i = 0; i<dotw.length; i++){
    if(allDays[0].match(dotw[i])){
      stopNow = true;
    } else {
      if (!stopNow) {
        counter += 1;
      }
    }
  }
  for(var i=0; i<counter; i++){
    allDays.unshift(" ");
  }
  for(var i=0; i<allDays.length; i++){
    var singleDay = document.createElement('div');
      singleDay.className = 'day';
      singleDay.dataset.title = '';
      singleDay.dataset.location = '';
      //Parse Day
    if(allDays[i]!==" "){
      var dayOTW = allDays[i].split(' ')[2];
      if(dayOTW.charAt(0)==="0"){
        allDays[i]=dayOTW.replace(/0/gi, '');
      } else {
        allDays[i] = dayOTW;
      }
    }
    singleDay.innerHTML = allDays[i];  document.getElementById(id).appendChild(singleDay);
  }
  var allOfDays = document.querySelectorAll('#days .day');
var dayArray = [];
  for(var i = 0; i< allOfDays.length; i++){
      if(i === 6 || i === 13 || i === 20 || i === 27 || i === 34){
        // dayArray.push(i);
        // console.log(allOfDays[i]);
        allOfDays[i].outerHTML += '<div class="day-details"><div id="input-arrow"></div><div class="input"></div></div>'
      }
    }  
  document.getElementById(id).innerHTML += '<div class="day-details"><div id="input-arrow"></div><div class="input"></div><div style="clear:both"></div>';
}
//Thanks: http://stackoverflow.com/questions/4649699/is-it-possible-to-get-elements-numerical-index-in-its-parent-node-without-loopi
function whichChild(elem){
    var  i= 0;
    while((elem=elem.previousSibling)!=null) ++i;
    return i;
}
window.onload = function(){
  allMonths = document.querySelectorAll('.month');
  var monthCont = document.getElementById('months');
  for(var i=0; i<allMonths.length; i++){
    allMonths[i].innerHTML += ' ' + getYear();
  }
  addElements(0, 'days');
}
document.body.addEventListener('click',function(e){
  var currentActive = document.querySelector('#months .month.active');
  var calWidth = Number(getComputedStyle(currentActive).width.replace(/px/gi,''));
  var activeIndex = 0;
  for(var i=0; i<allMonths.length; i++){
    if(allMonths[i].innerHTML === currentActive.innerHTML){
      activeIndex = i;
    }
  }
  if(e.target.id==='nextMt'){
    if(activeIndex<11) {
      document.querySelector('#months .month:first-child').style.marginLeft = -(calWidth * (activeIndex+1))+'px';
    currentActive.className = 'month';
    allMonths[activeIndex+1].className += ' active';
    addElements((activeIndex+1), 'days');
    } else {
      document.querySelector('#months .month:first-child').style.marginLeft = '0px';
    currentActive.className = 'month';
    allMonths[0].className += ' active';
      addElements(0, 'days');
    }
  } else if(e.target.id==='lastMt'){
    if(activeIndex>0) {
      document.querySelector('#months .month:first-child').style.marginLeft = -(calWidth * (activeIndex-1))+'px';
    currentActive.className = 'month';
    allMonths[activeIndex-1].className += ' active';
        addElements((activeIndex-1), 'days');
    } else {
      document.querySelector('#months .month:first-child').style.marginLeft = -(calWidth * 11) + 'px';
    currentActive.className = 'month';
    allMonths[11].className += ' active';
        addElements(11, 'days');
    }
  }
  if(e.target.id === 'color-picker'){
    document.querySelector('#dates.show').className = 'hide';
    document.getElementById('colors').className = 'show';
    e.target.className = 'hide';
  }
  if(e.target.id === 'back'){
    document.getElementById('color-picker').className = document.getElementById('color-picker').className.replace(/hide/gi,'show');
    document.getElementById('info').className = document.getElementById('info').className.replace(/show/gi,'hide');
    document.getElementById('dates').className = document.getElementById('dates').className.replace(/hide/gi,'show');
  }
  if(e.target.className === 'color'){
    var allColors = document.querySelectorAll('.color');
    for(var i = 0; i<allColors.length; i++){
      allColors[i].className = 'color';
      if(allColors[i].id === e.target.id){
        allColors[i].className += ' active';
      }
    }
    document.querySelector('body > div').className = 'prev-'+document.querySelector('body > div').className+' '+document.querySelector('.color.active').id;
    document.querySelector('body > div').className = document.querySelector('.color.active').id;
    
  }
  if(e.target.id === 'close'){
   if(e.target.parentNode.id==='colors'){
     e.preventDefault();
     e.target.parentNode.className = 'hide';
     document.getElementById('dates').className = 'show';
     document.getElementById('color-picker').className = 'show';
   }
  }
  if(e.target.className.match(/day/gi) && e.target.parentNode.id === 'days'){
   for(var i = 0; i<document.querySelectorAll('.day-details.expanded').length; i ++){
     document.querySelectorAll('.day-details.expanded')[i].className = document.querySelectorAll('.day-details.expanded')[i].className.replace(/ expanded/gi, '');
   }
        for(var i = 0; i<document.querySelectorAll('.day.expanded').length; i ++){
     if(document.querySelectorAll('.day.expanded')[i].innerHTML !== e.target.innerHTML){
       document.querySelectorAll('.day.expanded')[i].className = document.querySelectorAll('.day.expanded')[i].className.replace(/ expanded/gi, '');
     }
   }
    if(e.target.className.match(/expanded/gi)){
      e.target.className = e.target.className.replace(/ expanded/gi,'');
    } else {
      e.target.className += ' expanded';
      
    }
    var currElm = e.target;
    while (!currElm.nextSibling.className.match(/day-details/gi)){
      currElm = currElm.nextSibling;
    }
    currElm.nextSibling.className += ' expanded';
    currElm.nextSibling.childNodes[0].style.marginLeft = (e.target.offsetLeft + 8) + 'px';
  }
  if(e.target.className === 'input'){
    e.target.outerHTML = '<input type="text"/>';
    document.querySelector('.day-details.expanded input').focus();
  }
    if(e.target.tagName === 'A' && e.target.parentNode.className === 'input'){
      click += 1;
      setTimeout(function(){
        if (click > 1){

          document.querySelector('.day-details.expanded .input').outerHTML = '<input type="text" value="'+document.querySelector('.day-details.expanded .input a').innerHTML+'"/>'; 
          document.querySelector('.day-details.expanded input').focus();
          document.querySelector('.day-details.expanded input').setSelectionRange(document.querySelector('.day-details.expanded input').value.length, document.querySelector('.day-details.expanded input').value.length);
        } else if (click === 1){
          
         document.getElementById('color-picker').className = document.getElementById('color-picker').className.replace(/show/gi,'hide');
document.getElementById('month-name').innerHTML = document.querySelector('.month.active').innerHTML.replace(' 2016','');          document.getElementById('info').className = 'show';
          document.getElementById('actual-date').style.left = document.querySelector('.day.expanded').offsetLeft + 'px';
          document.getElementById('actual-date').style.top = document.querySelector('.day.expanded').offsetTop + 'px';
          document.getElementById('dates').className = 'hide';
          TweenMax.to("#actual-date", ((document.querySelector('.day.expanded').offsetTop*2.5)/document.getElementById('calendar').clientHeight), {
  bezier: {
    values: [{
      x: 0,
      y: 0
    }, {
      x: (3*(document.getElementById('calendar').clientWidth-document.querySelector('.day.expanded').offsetLeft - 28))/4,
      y: -(1*(document.querySelector('.day.expanded').offsetTop - 9))/4
    }, {
      x: document.getElementById('calendar').clientWidth-document.querySelector('.day.expanded').offsetLeft - 26,
      y: -(document.querySelector('.day.expanded').offsetTop - 7)
    }]
  }
});
          document.getElementById('actual-date').innerHTML = document.querySelector('.day.expanded').innerHTML;
          document.getElementById('event-name').innerHTML = document.querySelector('.day-details.expanded .input a').innerHTML;
          document.querySelector('.day-details.expanded').className = document.querySelector('.day-details.expanded').className.replace(/ expanded/, '');
      document.querySelector('.day.expanded').className = document.querySelector('.day.expanded').className.replace(/ expanded/, '');
        }
        click = 0;
      }, 500);
  }
});
document.body.addEventListener('keyup', function(e){
  if(e.keyCode === 13){
    document.querySelector('.day.expanded').dataset.title = document.querySelector('.day-details.expanded input').value;
    if(document.querySelector('.day-details.expanded input').value.length >0){
      document.querySelector('.day.expanded').className += ' has-event';
         document.querySelector('.day-details.expanded input').outerHTML = '<div class="input"><a>'+document.querySelector('.day-details.expanded input').value+'</a></div>'; 
    } else {
      if(document.querySelector('.day.expanded').className.match(/ has-event/gi)){
        document.querySelector('.day.expanded').className = document.querySelector('.day.expanded').className.replace(/ has-event/gi,'');
      }
         document.querySelector('.day-details.expanded input').outerHTML = '<div class="input"></div>'; 
    }
    click = 0;
  }
});