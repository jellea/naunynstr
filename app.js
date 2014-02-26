"use strict"

var gpio = require('rpi-gpio')
var sys = require('sys')
var exec = require('child_process').exec


// list of phonenumbers
var phonenumers = {
  1: {number: "+49123", name: ""}
}

// Call function
var makeCall = function (phonenumber) {
  console.log(phonenumber)
}

// Eventlisteners on press of button
gpio.on('change', function(channel, value) {
  console.log('Channel ' + channel + ' value is now ' + value)
  // if above certain threshold make call
  makeCall(phonenumers[channel].number)
});

// Setup pins
// for(port,number in phonenumers){
gpio.setup(7, gpio.DIR_IN);
// }
