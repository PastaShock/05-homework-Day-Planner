//create a js script that uses bootstrap and moment to make a planner app

// Global vars
var calendar = document.getElementById('calendar');

//I need a day to be filled out when I open the planner

// The planner should be made up of time slots for the day

// each time slot should have a time cell, a task cell and a save button accessed via modal

// modal trigger
$('#exampleModal').on('show.bs.modal', function (event) {
    console.log('its happening?')
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('task for ' + timeSlot)
    modal.find('.modal-body input').val(recipient)
  })

// Each time slot
function drawTimeSlots() {
    var timeSlot = document.createElement('div');
    var timeSlotTime = document.createElement('div');
    var timeSlotTitle = document.createElement('div');
    var timeSlotButton = document.createElement('div');
    var timeAddInfoButton = document.createElement('button');
    timeSlot.setAttribute('class', 'time-slot');
    timeSlotTime.setAttribute('class', 'clock');
    timeAddInfoButton.setAttribute('type', 'button');
    timeAddInfoButton.setAttribute('class', 'btn btn-primary');
    timeAddInfoButton.setAttribute('data-toggle', 'modal');
    timeAddInfoButton.setAttribute('data-target', '#exampleModal');
    timeAddInfoButton.setAttribute('data-time', timeSlotTime);
    timeAddInfoButton.textContent('+')
    timeSlot.appendChild(timeSlotTime);
    timeSlot.appendChild(timeSlotTitle);
    timeSlot.appendChild(timeSlotButton.appendChild(timeAddInfoButton));
    calendar.appendChild(timeSlot);
} 