//create a js script that uses bootstrap and moment to make a planner app

// Global vars
var calendar = document.getElementById('calendar');
var timeTable = document.createElement('table');
var currentDay = moment().format('YYYYDD');

//I need a day to be filled out when I open the planner
// using an array of times, fill out the page with time slots
// The planner should be made up of time slots for the day
// each time slot should have a time cell, a task cell and a save button accessed via modal
const workingHours = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
// const workingHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

function populateSlots(workingHours) {
  for (var i = 0; i < workingHours.length; i++) {
    drawTimeSlots(workingHours[i]);
  }
}

// modal trigger
var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var time = button.getAttribute('data-bs-time');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //save the modal's text to the main page
  // $('#hour-' + time).find('.table-primary').val() = $('#task').val
  var taskTextBox = document.getElementById('hour-' + time).getElementsByClassName('table-primary')[0]
  var taskTextContent = document.getElementById('task').innerText;
  taskTextBox.innerText = taskTextContent;
  localStorage.setItem(currentDay + time, taskTextContent);
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body input');

  modalTitle.textContent = 'Task at ' + time;
  modalBodyInput.value = time;
});

// Each time slot is created through a function
function drawTimeSlots(time) {
  var timeSlot = document.createElement('tr');
  var timeSlotTime = document.createElement('td');
  var timeSlotTitle = document.createElement('td');
  var timeSlotButton = document.createElement('td');
  var timeAddInfoButton = document.createElement('button');
  timeSlot.setAttribute('class', 'row time-slot');
  timeSlot.setAttribute('id', 'hour-' + time);
  timeSlotTime.setAttribute('class', 'time-cell table-success');
  timeSlotTime.innerText = time;
  timeSlotTitle.setAttribute('class', 'title-cell table-primary');
  timeSlotTitle.innerText = 'nothing is scheduled yet';
  timeAddInfoButton.setAttribute('type', 'button');
  timeAddInfoButton.setAttribute('class', 'btn btn-primary');
  timeAddInfoButton.setAttribute('data-bs-toggle', 'modal');
  timeAddInfoButton.setAttribute('data-bs-target', '#exampleModal');
  timeAddInfoButton.setAttribute('data-bs-time', time);
  timeAddInfoButton.textContent = '+';
  timeSlotButton.setAttribute('class', 'btn-cell table-light');
  timeSlot.appendChild(timeSlotTime);
  timeSlot.appendChild(timeSlotTitle);
  timeSlot.appendChild(timeSlotButton.appendChild(timeAddInfoButton));
  timeTable.appendChild(timeSlot);
  calendar.appendChild(timeSlot);
}

// color each row based on the time of day
function colorTimeBlocks() {
  // for each time block
  $(".time-slot").each(function () {
    var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
    var currentHour = parseInt(moment().format('HH'));
    // remove any class we may have added before
    $(this).removeClass("past present future");
    // color block based on past, present, future class
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

//display date on top of the planner
function showCurrentDay() {
  var dayContainer = document.createElement('span');
  dayContainer.setAttribute('class', 'display 4');
  dayContainer.textContent = 'today is ' + moment().format('DD MMM YYYY');
  calendar.appendChild(dayContainer);
}

//save information for the hour
function saveData() {

}

//get information from the local storage
function pullLocal() {
  var rawData = localStorage.getItem('dayPlanner');
  var data = JSON.parse(rawData);
  return data;
}

// initialize the page
function init() {
  // show current day
  showCurrentDay();
  // fill the page with the elements for the day
  populateSlots(workingHours);
  // pull any saved information from the local storage
  //pullLocal();
  // color the time blocks
  colorTimeBlocks();

}

init();