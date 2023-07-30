// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
var helloSpeaker = {};
console.log("helloSpeaker");

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";
console.log("speakWord");

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
function speak(DEname) {
  var DEname = "Tola";
  var speakWord = "hello";
  console.log(speakWord + " " + DEname);
}
speak();

//IIFE
(function () {
  var helloSpeaker = {};
  helloSpeaker.DEname = "Tola";
  var speakWord = "Hello";
  helloSpeaker.sayHello = function speak(DEname) {
    console.log(speakWord + helloSpeaker.DEname);
  };
})();

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// exposed IIFE
if (typeof Window !== "undefined") {
  (function (Window) {
    var helloSpeaker = {};
    helloSpeaker.DEname = "Tola";
    var speakWord = "Hello";
    helloSpeaker.sayHello = function speak(DEname) {
      console.log(speakWord + helloSpeaker.DEname);
    };
    Window.helloSpeaker = helloSpeaker;
  })(Window);
}
