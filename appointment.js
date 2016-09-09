'use strict';


function Appointment(startTime, endTime) {
  this._startTime = startTime;
  this._endTime = endTime;
};


Appointment.prototype.clashesWith = function(otherAppointment) {
  // console.log("called");
  // console.log(otherAppointment._startTime.getFullYear());
if((this._startTime.getFullYear())==(otherAppointment._startTime.getFullYear())){
  if((this._startTime.getMonth())==(otherAppointment._startTime.getMonth())){
    //  console.log("Month");
     if((this._startTime.getDate())==(otherAppointment._startTime.getDate())){
        // console.log("Date");
        if((this._startTime.getHours()-otherAppointment._startTime.getHours())<=0){
          var btw_two_hours=(otherAppointment._startTime.getHours()-this._startTime.getHours());
          var btw_two_hrs_in_minutes=(btw_two_hours*60);
          var gap_minutes_two_hrs=(btw_two_hrs_in_minutes-this._startTime.getMinutes());
          var total_gap=(gap_minutes_two_hrs+otherAppointment._startTime.getMinutes());
          var first_duration=((((this._endTime.getHours()-this._startTime.getHours())*60)-this._startTime.getMinutes())+this._endTime.getMinutes());
           if(first_duration>total_gap){
             return true;
           }
           else {
             return false;
           }
        }

       else if ((this._startTime.getHours()-otherAppointment._startTime.getHours())>0) {
         var btw_two_hours=(this._startTime.getHours()-otherAppointment._startTime.getHours());
         var btw_two_hrs_in_minutes=(btw_two_hours*60);
         var gap_minutes_two_hrs=(btw_two_hrs_in_minutes-otherAppointment._startTime.getMinutes());
         var total_gap=(gap_minutes_two_hrs+this._startTime.getMinutes());
         var first_duration=((((otherAppointment._endTime.getHours()-otherAppointment._startTime.getHours())*60)-otherAppointment._startTime.getMinutes())+otherAppointment._endTime.getMinutes());
         if(first_duration>total_gap){
           return true;
         }
         else {
           return false;
         }
       }
      }
   }
}

else{
  return false;
}

};
module.exports = Appointment;
