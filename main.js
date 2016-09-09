'use strict';


var Appointment = require('./appointment.js');


var appointment1 = new Appointment(
  new Date(2016, 08, 10, 10, 45),  // 10:45 AM 10th Aug 2016
  new Date(2016, 08, 10, 11, 45)   // 11:45 AM 10th Aug 2016
);

var appointment2 = new Appointment(
  new Date(2016, 08, 10, 11, 44),  // 11 AM 10th Aug 2016
  new Date(2016, 08, 10, 12, 0)   // 12 noon 10th Aug 2016
);

console.log(appointment1.clashesWith(appointment2)); // Should print true
