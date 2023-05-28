document.addEventListener("DOMContentLoaded", function() {
    var citiesList = document.getElementById("cities-list");
    var fortsList = document.getElementById("forts-list");
    
    citiesList.addEventListener("click", function(event) {
      var cityName = event.target.dataset.info;
      if (cityName) {
        alert("Information about " + cityName + " (City)"); // Replace with your desired action
      }
    });
    
    fortsList.addEventListener("click", function(event) {
      var fortName = event.target.dataset.info;
      if (fortName) {
        alert("Information about " + fortName + " (Fort)"); // Replace with your desired action
      }
    });
  });
  