const menuIcon = document.getElementById("menuIcon");
const sideDrawer = document.getElementById("sideDrawer");
const drawerLinks = sideDrawer.querySelectorAll("a");

function openDrawer() {
  sideDrawer.style.right = "0";
}

function closeDrawer() {
  sideDrawer.style.right = "-250px";
}

menuIcon.addEventListener("click", openDrawer);

drawerLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeDrawer();
  });
});

document.addEventListener("click", function (event) {
  if (!sideDrawer.contains(event.target) && event.target !== menuIcon) {
    closeDrawer();
  }
});

// Get the button and the drawer element
const openBtn = document.getElementById("openBtn");
const drawer = document.getElementById("myDrawer");
const closeBtn = document.getElementById("closeBtn");

// Open the drawer when the button is clicked
openBtn.addEventListener("click", function () {
  drawer.classList.add("open");
});

// Close the drawer when the close button is clicked
closeBtn.addEventListener("click", function () {
  drawer.classList.remove("open");
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
    if (
      !profilePicMobile.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      menu.style.display = "none";
    }
  });
});

// Add Task button functionality
document.addEventListener("DOMContentLoaded", () => {
  const taskTabs = document.querySelectorAll(".task-tab");
  const taskTabContents = document.querySelectorAll(".task-tab-content");

  taskTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-task-tab");

      taskTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      taskTabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const addNewTaskBtn = document.getElementById("addNewTaskBtn");
  const taskDialog = document.getElementById("taskDialog");
  const cancelTaskBtn = document.getElementById("cancelTaskBtn");
  const addTaskForm = document.getElementById("addTaskForm");

  let editingTaskCard = null; // Variable to store the task card being edited

  // Show dialog when the "Add New Task" button is clicked
  addNewTaskBtn.addEventListener("click", () => {
    taskDialog.style.display = "flex";
    editingTaskCard = null; // Clear the editing task card when creating a new task
    document.getElementById("highPriorityCheckbox").checked = false; // Reset checkbox
  });

  // Hide dialog when the "Cancel" button is clicked
  cancelTaskBtn.addEventListener("click", () => {
    taskDialog.style.display = "none";
  });

  // Handle form submission when adding or editing a task
  addTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form values
    const taskTab = document.getElementById("taskTabSelect").value;
    const taskType = document.getElementById("taskType").value;
    const other = document.getElementById("other").value;
    const leadName = document.getElementById("leadName").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;
    const realtor = document.getElementById("realtor").value;
    const concierge = document.getElementById("concierge").value;
    const taskAssignee = document.getElementById("taskAssignee").value;

    // Check if "High Priority" checkbox is selected
    const isHighPriority = document.getElementById(
      "highPriorityCheckbox"
    ).checked;
    const highPriorityLabel = isHighPriority
      ? "<div style='background-color: red; color: white; padding: 5px; width: fit-content; border-radius: 5px; height: fit-content;'>High</div>"
      : "";

    // Combine task date and time
    const taskDateTime = taskDate + " " + taskTime;

    // Create or update task card
    const taskCard = editingTaskCard || document.createElement("div");
    taskCard.classList.add("task-card");
    taskCard.setAttribute("tabindex", "0"); // Make focusable
    taskCard.setAttribute("role", "button"); // Accessibility
    taskCard.style.cursor = "pointer"; // Visual feedback for clickability

    // Add icon color and "High" label if selected
    const iconColor = taskTab === "task-completed" ? "#4ac366" : "#ccc";

    taskCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div style="display: flex; align-items: center">
          <span style="margin-right: 10px;">
            <span class="iconify"
              data-icon="icon-park-solid:check-one"
              data-inline="false"
              style="color: ${iconColor}; font-size: 30px;">
            </span>
          </span>
          <div>
            <h4>${taskType}</h4>
            <p>${other}</p>
            <p>${leadName}</p>
            <p>${new Date(taskDateTime).toLocaleString()}</p>
            <p>${realtor}</p>
            <p>${concierge}</p>
            <span>${taskAssignee}</span>
          </div>
        </div>
        ${highPriorityLabel}
      </div>
    `;

    // Add event listener to task card for editing
    taskCard.addEventListener("click", () => handleTaskCardClick(taskCard));

    // Find the correct task-slider-container based on the selected tab
    const selectedTabContent = document.getElementById(taskTab);
    if (selectedTabContent) {
      const taskSliderContainer = selectedTabContent.querySelector(
        ".task-slider-container"
      );
      if (taskSliderContainer && !editingTaskCard) {
        taskSliderContainer.appendChild(taskCard);
      }
    }

    // If editing, replace the existing task card
    if (editingTaskCard) {
      editingTaskCard.replaceWith(taskCard);
    }

    // Close the dialog after submitting
    taskDialog.style.display = "none";

    // Clear the form
    addTaskForm.reset();

    // Update the task count on the tab button
    updateTabTaskCount();
  });

  // Handle task card click to open the dialog with pre-filled details for editing
  function handleTaskCardClick(taskCard) {
    const taskType = taskCard.querySelector("h4").textContent;
    const taskDetails = taskCard.querySelectorAll("p");
    const other = taskDetails[0]?.textContent || "";
    const leadName = taskDetails[1]?.textContent || "";
    const taskDateTime = taskDetails[2]?.textContent || "";
    const realtor = taskDetails[3]?.textContent || "";
    const concierge = taskDetails[4]?.textContent || "";
    const taskAssignee = taskCard.querySelector("span")?.textContent || "";
    const highPriorityText = taskCard.querySelector(
      "div[style*='background-color: red']"
    );

    // Split taskDateTime into date and time
    const [taskDate, taskTime] = taskDateTime.split(", ");
    const [taskDatePart] = taskDate.split(" ");
    const [taskTimePart] = taskTime.split(" ");

    // Fill the form with the task card details
    document.getElementById("taskTabSelect").value =
      getTaskTabFromCard(taskCard);
    document.getElementById("taskType").value = taskType;
    document.getElementById("other").value = other;
    document.getElementById("leadName").value = leadName;
    document.getElementById("taskDate").value = taskDatePart;
    document.getElementById("taskTime").value = taskTimePart;
    document.getElementById("realtor").value = realtor;
    document.getElementById("concierge").value = concierge;
    document.getElementById("taskAssignee").value = taskAssignee;

    // Set the "High Priority" checkbox based on the task card
    document.getElementById("highPriorityCheckbox").checked =
      !!highPriorityText;

    // Set the task card as the one being edited
    editingTaskCard = taskCard;

    // Open the dialog
    taskDialog.style.display = "flex";
  }

  // Function to get the tab ID for the task card
  function getTaskTabFromCard(taskCard) {
    const taskTabContent = taskCard.closest(".task-tab-content");
    return taskTabContent ? taskTabContent.id : "task-today-tomorrow"; // Default tab if not found
  }

  // Function to update the task count on each tab
  function updateTabTaskCount() {
    const taskTabs = document.querySelectorAll(".task-tab");
    taskTabs.forEach((tab) => {
      const taskTabContent = document.getElementById(
        tab.getAttribute("data-task-tab")
      );
      const taskCount = taskTabContent
        ? taskTabContent.querySelectorAll(".task-slider-container .task-card")
            .length
        : 0;
      const tabLabel = tab.querySelector("span");
      tabLabel
        ? (tabLabel.textContent = `(${taskCount})`)
        : (tab.innerHTML += ` <span>(${taskCount})</span>`);
    });
  }
});

// Select elements
// Select elements
const callIcon = document.getElementById("call-icon");
const callDrawer = document.getElementById("call-drawer");
const closeDrawerCall = document.getElementById("close-drawer");
const quickConnectsButton = document.getElementById("quick-connects");
const numberPadButton = document.getElementById("number-pad");
const dynamicContent = document.getElementById("dynamic-content");

// Open call drawer
callIcon.addEventListener("click", () => {
  callDrawer.classList.add("show");
  callDrawer.classList.remove("hidden");
});

// Close call drawer
closeDrawerCall.addEventListener("click", () => {
  callDrawer.classList.remove("show");
  setTimeout(() => callDrawer.classList.add("hidden"), 300); // Wait for animation
});

// Show Quick Connects UI
// Show Quick Connects UI
// Show Quick Connects UI
// Quick Connects button event listener
quickConnectsButton.addEventListener("click", () => {
  dynamicContent.innerHTML = `
      <div class="quick-connect-container">
        <div class="quick-connect-input">
          <select class="flag-select">
            <option value="us" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg');">🇺🇸</option>
            <option value="uk">🇬🇧</option>
            <option value="fr">🇫🇷</option>
          </select>
          <input 
            type="text" 
            placeholder="Quick Connect or Number" 
            class="quick-connect-field">
        </div>
        <div class="quick-actions">
          <button id="number-pad-btn" class="action-btn">Number Pad</button>
          <button class="call-btn">Call</button>
        </div>
      </div>
    `;

  // Add event listener for Number Pad button inside the Quick Connects UI
  const numberPadBtn = document.getElementById("number-pad-btn");
  numberPadBtn.addEventListener("click", () => {
    // Switch to number pad view
    showNumberPad();
  });
});

// Show Number Pad UI directly when Number Pad button is clicked
numberPadButton.addEventListener("click", () => {
  // Switch to number pad view
  showNumberPad();
});

// Function to display the number pad UI
function showNumberPad() {
  dynamicContent.innerHTML = `
     <div class="availability" style="display: flex; flex-direction: column; justify-content: start; align-items: flex-start;padding: 0px 10px 10px 0px;">
            <select id="availability">
                <option value="available">Available</option>
                <option value="busy">Busy</option>
                <option value="offline">Offline</option>
            </select>
     </div>
     <div class="quick-connect-input">
          <select class="flag-select">
            <option value="us" style="background-image: url('https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg');">🇺🇸</option>
            <option value="uk">🇬🇧</option>
            <option value="fr">🇫🇷</option>
          </select>
          <input 
            type="text" 
            placeholder="Quick Connect or Number" 
            class="quick-connect-field">
        </div>
      <input type="text" id="number-input" class="quick-connect-field" placeholder="Enter Number" style="width: 100%;" />
      <div class="dial-pad">
        <button class="dial-btn">1</button>
        <button class="dial-btn">2</button>
        <button class="dial-btn">3</button>
        <button class="dial-btn">4</button>
        <button class="dial-btn">5</button>
        <button class="dial-btn">6</button>
        <button class="dial-btn">7</button>
        <button class="dial-btn">8</button>
        <button class="dial-btn">9</button>
        <button class="dial-btn">*</button>
        <button class="dial-btn">0</button>
        <button class="dial-btn">#</button>
      </div>
      <div class="quick-actions">
        <button id="quick-connects-btn" class="action-btn">Quick Connects</button>
        <button class="call-btn">Call</button>
      </div>
    `;

  const numberInput = document.getElementById("number-input");
  const dialButtons = document.querySelectorAll(".dial-btn");

  // Add event listeners to digit buttons
  dialButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Append the clicked button's text to the input field
      numberInput.value += button.textContent;
    });
  });

  // Add event listener for Quick Connects button inside the Number Pad UI
  const quickConnectsBtn = document.getElementById("quick-connects-btn");
  quickConnectsBtn.addEventListener("click", () => {
    // Switch back to Quick Connects view
    quickConnectsButton.click();
  });
}
