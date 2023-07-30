// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
var byeSpeaker = {};
console.log("byeSpeaker");

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";
console.log("speakword");

// STEP 8: Rewrite the 'speak' function such that it is attached to the

function speak(REname) {
  var REname = "Tola";
  var speakWord = "Good Bye";
  console.log(speakWord + " " + REname);
}
speak();
//IIFE
(function () {
  var helloSpeaker = {};
  byeSpeaker.REname = "Tola";
  var speakWord = "Good Bye";
  helloSpeaker.sayHello = function speak(REname) {
    console.log(speakWord + byeSpeaker.REname);
  };
})();

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
//exposed IIFE
if (typeof Window !== "undefined") {
  (function (Window) {
    var helloSpeaker = {};
    byeSpeaker.REname = "Tola";
    var speakWord = "Good Bye";
    helloSpeaker.sayHello = function speak(REname) {
      console.log(speakWord + byeSpeaker.REname);
    };
    Window.byeSpeaker = byeSpeaker;
  })(Window);
}
