const menuIcon = document.getElementById('menuIcon');
const sideDrawer = document.getElementById('sideDrawer');
const drawerLinks = sideDrawer.querySelectorAll('a');

// Function to open the drawer
function openDrawer() {
    sideDrawer.style.right = '0';
}

// Function to close the drawer
function closeDrawer() {
    sideDrawer.style.right = '-250px';
}

// Open drawer when menu icon is clicked
menuIcon.addEventListener('click', openDrawer);

// Close drawer when any link in the drawer is clicked
drawerLinks.forEach(link => {
    link.addEventListener('click', function() {
        closeDrawer(); // Close the drawer
    });
});

// Close the drawer when clicking outside of it
document.addEventListener('click', function(event) {
    // Check if the click is outside the drawer
    if (!sideDrawer.contains(event.target) && event.target !== menuIcon) {
        closeDrawer(); // Close the drawer if clicked outside
    }
});

// Profile Pic
document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.getElementById("profilePic");
    const menu = document.getElementById("menu");
  
    profilePic.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", (event) => {
      if (!profilePic.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const profilePicMobile = document.getElementById("profilePicMobile");
    const menu = document.getElementById("menuMobile");
  
    profilePicMobile.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", (event) => {
      if (!profilePicMobile.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("leadsTable");
    const selectAllCheckbox = document.getElementById("selectAll");
    const rowCheckboxes = document.querySelectorAll(".row-checkbox");
  
    // "Select All" checkbox functionality
    selectAllCheckbox.addEventListener("change", () => {
      const isChecked = selectAllCheckbox.checked;
      rowCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
      });
    });
  
    // Add sorting functionality (example: by Ratings)
    table.addEventListener("click", (e) => {
      if (e.target.tagName === "TH" && e.target.innerText === "Ratings") {
        sortTable(1); // Ratings is in the 2nd column (index 1)
      }
    });
  
    function sortTable(columnIndex) {
      const rows = Array.from(table.rows).slice(1); // Skip header row
      const sortedRows = rows.sort((a, b) => {
        const aVal = parseInt(a.cells[columnIndex].innerText, 10) || 0;
        const bVal = parseInt(b.cells[columnIndex].innerText, 10) || 0;
        return aVal - bVal;
      });
      const tbody = table.querySelector("tbody");
      tbody.innerHTML = ""; // Clear current rows
      sortedRows.forEach(row => tbody.appendChild(row));
    }
  });
  
  let timerInterval;
  let isRunning = false;
  let timeRemaining = 3600; // 1 hour in seconds (3600 seconds)
  
  function togglePowerHour() {
    const powerHourText = document.getElementById("power-hour-text");
    const timerDisplay = document.getElementById("timer");
    const playIcon = document.getElementById("play-icon");
    const countdownIcon = document.getElementById("countdown-icon");
  
    if (isRunning) {
      // Stop the timer
      clearInterval(timerInterval);
      isRunning = false;
      powerHourText.textContent = "Start Power Hour";
      playIcon.style.display = "inline-block";
      countdownIcon.style.display = "none"; // Hide countdown icon
    } else {
      // Start the timer
      isRunning = true;
      powerHourText.textContent = "Power Hour Running";
      playIcon.style.display = "none"; // Hide play icon
      countdownIcon.style.display = "inline-block"; // Show countdown icon
      timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemaining--;
          const minutes = Math.floor(timeRemaining / 60);
          const seconds = timeRemaining % 60;
          timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        } else {
          // Timer reached 0
          clearInterval(timerInterval);
          isRunning = false;
          powerHourText.textContent = "Power Hour Ended";
          playIcon.style.display = "inline-block"; // Show play icon
          countdownIcon.style.display = "none"; // Hide countdown icon
          timerDisplay.textContent = "00:00";
        }
      }, 1000);
    }
  }
  