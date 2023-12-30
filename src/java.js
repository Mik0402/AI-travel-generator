function generateItinerary(event) {
  event.preventDefault();

  new Typewriter("#itinerary", {
    strings: "Places in Paris",
    autoStart: true,
    cursor: " ",
    delay: 1,
  });
}

let itineraryFormElement = document.querySelector("#itinerary-generator-form");
itineraryFormElement.addEventListener("submit", generateItinerary);
