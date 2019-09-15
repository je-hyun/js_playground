// Built-in event system.
//   -> Every action on a computer is an event.
//   -> Events can be 'listened to' and responded upon.
//   -> Objects can fire events (e.g. filesystem fires open event on file read)
var events = require('events');
var eventEmitter = new events.EventEmitter();

// An event handler does something when an event happens.
var myEventHandler = function () {
  console.log('Someone yelled...');
}

// The emitter.on(eventName, listener) statement hooks up a function to an event.
eventEmitter.on('yell', myEventHandler);

// Whenever the emitter eventEmitter emits scream, it will trigger myEventHandler.
eventEmitter.emit('yell');
eventEmitter.emit('yell');
