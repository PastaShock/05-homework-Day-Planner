//create a js script that uses bootstrap and moment to make a planner app

// Global vars
var calendar = document.getElementById('calendar');
var timeTable = document.createElement('table');
//I need a day to be filled out when I open the planner
// using an array of times, fill out the page with time slots
const workingHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
function populateSlots(workingHours) {
  for (var i = 0; i < workingHours.length; i++) {
    drawTimeSlots(workingHours[i])
  }
}

// The planner should be made up of time slots for the day

// each time slot should have a time cell, a task cell and a save button accessed via modal

// modal trigger
var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var time = button.getAttribute('data-bs-time')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'Task at ' + time
  modalBodyInput.value = time
})

// Each time slot
function drawTimeSlots(time) {
    var timeSlot = document.createElement('tr');
    var timeSlotTime = document.createElement('td');
    var timeSlotTitle = document.createElement('td');
    var timeSlotButton = document.createElement('td');
    var timeAddInfoButton = document.createElement('button');
    timeSlot.setAttribute('class', 'row time-slot');
    timeSlot.setAttribute('id', 'hour-' + time)
    timeSlotTime.setAttribute('class', 'table-success');
    timeSlotTime.innerText = time;
    timeSlotTitle.setAttribute('class', 'table-primary')
    timeSlotTitle.innerText = 'placeholder text for meeting or task'
    timeAddInfoButton.setAttribute('type', 'button');
    timeAddInfoButton.setAttribute('class', 'btn btn-primary');
    timeAddInfoButton.setAttribute('data-bs-toggle', 'modal');
    timeAddInfoButton.setAttribute('data-bs-target', '#exampleModal');
    timeAddInfoButton.setAttribute('data-bs-time', time);
    timeAddInfoButton.textContent = '+'
    timeSlotButton.setAttribute('class', 'table-light');
    timeSlot.appendChild(timeSlotTime);
    timeSlot.appendChild(timeSlotTitle);
    timeSlot.appendChild(timeSlotButton.appendChild(timeAddInfoButton));
    timeTable.appendChild(timeSlot);
    calendar.appendChild(timeSlot);
}
