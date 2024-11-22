// maps.js

// Dummy map data
const maps = {
    map1: "none",
    map2: "none",
    map3: "none",
  };
  
  // Event listener for map selection
  document.addEventListener("DOMContentLoaded", () => {
    const map1Dropdown = document.getElementById("map1");
    const map2Dropdown = document.getElementById("map2");
    const map3Dropdown = document.getElementById("map3");
  
    // Update selected maps
    map1Dropdown.addEventListener("change", () => {
      maps.map1 = map1Dropdown.value;
      console.log("Map 1 Selected:", maps.map1);
    });
  
    map2Dropdown.addEventListener("change", () => {
      maps.map2 = map2Dropdown.value;
      console.log("Map 2 Selected:", maps.map2);
    });
  
    map3Dropdown.addEventListener("change", () => {
      maps.map3 = map3Dropdown.value;
      console.log("Map 3 Selected:", maps.map3);
    });
  
    // Submit maps and send them to the backend
    document.getElementById("submitMapSelection").addEventListener("click", () => {
      fetch("/api/update-maps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(maps),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Maps Updated Successfully:", data);
        })
        .catch((error) => console.error("Error updating maps:", error));
    });
  });
  