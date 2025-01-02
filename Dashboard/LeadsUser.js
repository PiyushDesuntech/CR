const menuIcon = document.getElementById('menuIcon');
const sideDrawer = document.getElementById('sideDrawer');
const drawerLinks = sideDrawer.querySelectorAll('a');

function openDrawer() {
    sideDrawer.style.right = '0';
}

function closeDrawer() {
    sideDrawer.style.right = '-250px';
}

menuIcon.addEventListener('click', openDrawer);

drawerLinks.forEach(link => {
    link.addEventListener('click', function() {
        closeDrawer();
    });
});


document.addEventListener('click', function(event) {
    
    if (!sideDrawer.contains(event.target) && event.target !== menuIcon) {
        closeDrawer(); 
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
    const logMenu = document.getElementById("logMenu");
    const menu = document.getElementById("log-menu");
  
    logMenu.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    document.addEventListener("click", (event) => {
      if (!logMenu.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
      }
    });
  });

  function openDialog() {
    document.getElementById("tag-dialog").style.display = "block";
    document.getElementById("dialog-overlay").style.display = "block";
}

function closeDialog() {
    document.getElementById("tag-dialog").style.display = "none";
    document.getElementById("dialog-overlay").style.display = "none";
    document.getElementById("new-tag-input").value = "";
}

function addNewTag() {
    const input = document.getElementById("new-tag-input");
    const tagText = input.value.trim();

    if (tagText) {
        const newTag = document.createElement("div");
        newTag.className = "tag";
        newTag.innerHTML = `<p>${tagText}</p><img src="./image/close-dark.svg" alt="close" onclick="removeTag(this)" style="height: 15px;">`;
        document.getElementById("tags-container").insertBefore(newTag, document.getElementById("more-tags-btn"));
    }
    closeDialog();
}

function showMoreTags() {
    const hiddenTags = document.querySelectorAll(".tag.hidden");
    hiddenTags.forEach(tag => tag.classList.remove("hidden"));
    document.getElementById("more-tags-btn").style.display = "none";
}

function removeTag(element) {
    const tag = element.parentElement;
    tag.remove();
}


function openDetailsDialog() {
  document.getElementById("details-dialog").style.display = "block";
  document.getElementById("details-dialog-overlay").style.display = "block";
}

function closeDetailsDialog() {
  document.getElementById("details-dialog").style.display = "none";
  document.getElementById("details-dialog-overlay").style.display = "none";
  document.getElementById("field1").value = "";
  document.getElementById("field2").value = "";
  document.getElementById("field3").value = "";
  document.getElementById("dropdown").selectedIndex = 0;
}

function saveDetails() {
  const field1 = document.getElementById("field1").value;
  const field2 = document.getElementById("field2").value;
  const field3 = document.getElementById("field3").value;
  const dropdown = document.getElementById("dropdown").value;

  if (field1 && field2 && field3 && dropdown) {
      alert(`Details Saved:\nField 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}\nDropdown: ${dropdown}`);
      closeDetailsDialog();
  } else {
      alert("Please fill all fields before saving.");
  }
}


  

  // Tab
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      // Handle active tab buttons
      document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Handle tab content
      const targetId = tab.getAttribute('data-tab');
      document.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('active'));
      document.getElementById(targetId).classList.add('active');
  
      // Scroll the selected tab into the center of the view
      const tabsContainer = document.querySelector('.tabs');
      const tabRect = tab.getBoundingClientRect();
      const containerRect = tabsContainer.getBoundingClientRect();
      const offset = tabRect.left - containerRect.left + tabRect.width / 2 - containerRect.width / 2;
      tabsContainer.scrollBy({ left: offset, behavior: 'smooth' });
    });
  });
  
  // House Tab
  document.addEventListener("DOMContentLoaded", () => {
    const propertyTabs = document.querySelectorAll(".property-tab");
    const propertyTabContents = document.querySelectorAll(".property-tab-content");
  
    propertyTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-property-tab");
  
        propertyTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        propertyTabContents.forEach(content => {
          content.classList.remove("active");
          if (content.id === target) {
            content.classList.add("active");
          }
        });
      });
    });
  });

  //activity tabs
  document.addEventListener("DOMContentLoaded", () => {
    const activityTabs = document.querySelectorAll(".activity-tab");
    const activityTabContents = document.querySelectorAll(".activity-tab-content");
  
    activityTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-activity-tab");
  
        activityTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        activityTabContents.forEach(content => {
          content.classList.remove("active");
          if (content.id === target) {
            content.classList.add("active");
          }
        });
      });
    });
  });

  // upcoming tabs
  document.addEventListener("DOMContentLoaded", () => {
    const upcomingTabs = document.querySelectorAll(".upcoming-tab");
    const upcomingTabContents = document.querySelectorAll(".upcoming-tab-content");
  
    upcomingTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-upcoming-tab");
  
        upcomingTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        upcomingTabContents.forEach(content => {
          content.classList.remove("active");
          if (content.id === target) {
            content.classList.add("active");
          }
        });
      });
    });
  });

  //upcoming cards
  const dialog = document.getElementById('confirmation-dialog');
  const cancelBtn = document.getElementById('cancel-btn');
  const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
  let taskToDelete = null;
  
  // Show dialog when delete button is clicked
  document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', (event) => {
          taskToDelete = event.target.closest('.task-card');
          dialog.classList.remove('hidden');
      });
  });
  
  // Cancel button hides the dialog
  cancelBtn.addEventListener('click', () => {
      dialog.classList.add('hidden');
      taskToDelete = null; // Reset the task to delete
  });
  
  // Confirm delete button removes the task
  confirmDeleteBtn.addEventListener('click', () => {
      if (taskToDelete) {
          taskToDelete.remove();
      }
      dialog.classList.add('hidden');
  });
  
  // Show all tasks when "View All 5 Tasks" is clicked
  const toggleTasksBtn = document.getElementById('toggle-tasks-btn');
  const hiddenTasks = document.querySelectorAll('.task-card.hidden');
  const viewAllText = 'View All 5 Tasks';
  const hideText = 'Hide Tasks';
  
  toggleTasksBtn.addEventListener('click', () => {
      hiddenTasks.forEach(task => task.classList.remove('hidden'));
  
      // Toggle button text between "View All 5 Tasks" and "Hide Tasks"
      if (toggleTasksBtn.textContent === viewAllText) {
          toggleTasksBtn.textContent = hideText;
      } else {
          hiddenTasks.forEach(task => task.classList.add('hidden'));
          toggleTasksBtn.textContent = viewAllText;
      }
  });

  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isActive = content.classList.contains('active');
  
      // Close all other items
      document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
        item.previousElementSibling.classList.remove('active'); // Remove active class from header
      });
  
      if (!isActive) {
        content.classList.add('active');
        header.classList.add('active'); // Add active class to header
      }
    });
  });
  
  // appointment tabs
  document.addEventListener("DOMContentLoaded", () => {
    const appointmentTabs = document.querySelectorAll(".appointment-tab");
    const appointmentTabContents = document.querySelectorAll(".appointment-tab-content");
  
    appointmentTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-appointment-tab");
  
        appointmentTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
  
        appointmentTabContents.forEach(content => {
          content.classList.remove("active");
          if (content.id === target) {
            content.classList.add("active");
          }
        });
      });
    });
  });
  