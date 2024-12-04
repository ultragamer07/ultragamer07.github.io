document.addEventListener('DOMContentLoaded', (event) => {
    loadAppointments();
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('appointmentTitle').value;
    const date = document.getElementById('appointmentDate').value;
    const time = document.getElementById('appointmentTime').value;
    
    const appointment = {
        title: title,
        date: date,
        time: time
    };
    
    addAppointmentToList(appointment);
    saveAppointment(appointment);
    clearForm();
});

function addAppointmentToList(appointment) {
    const appointmentList = document.getElementById('appointmentList');
    
    const listItem = document.createElement('li');
    listItem.textContent = `${appointment.date} ${appointment.time} - ${appointment.title}`;
    
    appointmentList.appendChild(listItem);
}

function saveAppointment(appointment) {
    let appointments = localStorage.getItem('appointments');
    if (appointments === null) {
        appointments = [];
    } else {
        appointments = JSON.parse(appointments);
    }
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

function loadAppointments() {
    let appointments = localStorage.getItem('appointments');
    if (appointments !== null) {
        appointments = JSON.parse(appointments);
        appointments.forEach(appointment => addAppointmentToList(appointment));
    }
}

function clearForm() {
    document.getElementById('appointmentForm').reset();
}
