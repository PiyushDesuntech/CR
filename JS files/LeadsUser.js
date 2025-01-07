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
  const editButton = document.querySelector(".edit-button img");
  const modal = document.getElementById("editModal");
  const closeButton = document.querySelector(".close-button");

  // Show the modal
  editButton.addEventListener("click", () => {
      modal.style.display = "block";
  });

  // Hide the modal
  closeButton.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Hide the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  // Handle form submission
  const editForm = document.getElementById("editForm");
  editForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const role = document.getElementById("role").value;

      console.log("Updated Details:", { name, age, role });

      // Update the UI with new details (optional)
      document.querySelector(".user-info h3").textContent = name;
      document.querySelector(".user-age p").textContent = age;
      document.querySelector(".user-role").textContent = role;

      // Close the modal
      modal.style.display = "none";
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

function openDialog1() {
  document.getElementById("tag-dialog").style.display = "block";
  document.getElementById("dialog-overlay").style.display = "block";
}

function closeDialog1() {
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
    document
      .getElementById("tags-container")
      .insertBefore(newTag, document.getElementById("more-tags-btn"));
  }
  closeDialog();
}

function showMoreTags() {
  const hiddenTags = document.querySelectorAll(".tag.hidden");
  hiddenTags.forEach((tag) => tag.classList.remove("hidden"));
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
    alert(
      `Details Saved:\nField 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}\nDropdown: ${dropdown}`
    );
    closeDetailsDialog();
  } else {
    alert("Please fill all fields before saving.");
  }
}


// Tab
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    // Handle active tab buttons
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Handle tab content
    const targetId = tab.getAttribute("data-tab");
    document
      .querySelectorAll(".tab-pane")
      .forEach((pane) => pane.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");

    // Scroll the selected tab into the center of the view
    const tabsContainer = document.querySelector(".tabs");
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    const offset =
      tabRect.left -
      containerRect.left +
      tabRect.width / 2 -
      containerRect.width / 2;
    tabsContainer.scrollBy({ left: offset, behavior: "smooth" });
  });
});

// House Tab
document.addEventListener("DOMContentLoaded", () => {
  const propertyTabs = document.querySelectorAll(".property-tab");
  const propertyTabContents = document.querySelectorAll(
    ".property-tab-content"
  );

  propertyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-property-tab");

      propertyTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      propertyTabContents.forEach((content) => {
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
  const activityTabContents = document.querySelectorAll(
    ".activity-tab-content"
  );

  activityTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-activity-tab");

      activityTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      activityTabContents.forEach((content) => {
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
  const upcomingTabContents = document.querySelectorAll(
    ".upcoming-tab-content"
  );

  upcomingTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-upcoming-tab");

      upcomingTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      upcomingTabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });
    });
  });
});

//upcoming cards
const dialog = document.getElementById("confirmation-dialog");
const cancelBtn = document.getElementById("cancel-btn");
const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
let taskToDelete = null;

// Show dialog when delete button is clicked
document.querySelectorAll(".delete-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    taskToDelete = event.target.closest(".task-card");
    dialog.classList.remove("hidden");
  });
});

// Cancel button hides the dialog
cancelBtn.addEventListener("click", () => {
  dialog.classList.add("hidden");
  taskToDelete = null; // Reset the task to delete
});

// Confirm delete button removes the task
confirmDeleteBtn.addEventListener("click", () => {
  if (taskToDelete) {
    taskToDelete.remove();
  }
  dialog.classList.add("hidden");
});

// Show all tasks when "View All 5 Tasks" is clicked
const toggleTasksBtn = document.getElementById("toggle-tasks-btn");
const hiddenTasks = document.querySelectorAll(".task-card.hidden");
const viewAllText = "View All 5 Tasks";
const hideText = "Hide Tasks";

toggleTasksBtn.addEventListener("click", () => {
  hiddenTasks.forEach((task) => task.classList.remove("hidden"));

  // Toggle button text between "View All 5 Tasks" and "Hide Tasks"
  if (toggleTasksBtn.textContent === viewAllText) {
    toggleTasksBtn.textContent = hideText;
  } else {
    hiddenTasks.forEach((task) => task.classList.add("hidden"));
    toggleTasksBtn.textContent = viewAllText;
  }
});

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isActive = content.classList.contains("active");

    // Close all other items
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("active");
      item.previousElementSibling.classList.remove("active"); // Remove active class from header
    });

    if (!isActive) {
      content.classList.add("active");
      header.classList.add("active"); // Add active class to header
    }
  });
});

// appointment tabs
document.addEventListener("DOMContentLoaded", () => {
  const appointmentTabs = document.querySelectorAll(".appointment-tab");
  const appointmentTabContents = document.querySelectorAll(
    ".appointment-tab-content"
  );

  appointmentTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-appointment-tab");

      appointmentTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      appointmentTabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) {
          content.classList.add("active");
        }
      });
    });
  });
});

// Get the button and dialog box
// Function to show a dialog
function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  dialog.style.display = "block";
}

// Function to close a dialog
function closeDialog(dialog) {
  dialog.style.display = "none";
}

// Get all the buttons
const infoButtons = document.querySelectorAll(".info-button");

// Add event listeners to all buttons
infoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialogId = button.getAttribute("data-dialog");
    openDialog(dialogId);
  });
});

// Add event listeners to all close buttons inside dialog boxes
const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const dialog = e.target.closest(".dialog-box");
    closeDialog(dialog);
  });
});

// Add event listener for clicking outside the dialog to close it
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("dialog-box")) {
    closeDialog(event.target);
  }
});

let editOfferIndex = null; // Keeps track of the offer being edited

function openDialog2(editIndex = null) {
  document.getElementById("offer-dialog").style.display = "block";
  document.getElementById("dialog-overlay").style.display = "block";

  if (editIndex !== null) {
    editOfferIndex = editIndex;

    const offer = document.querySelectorAll(".offer")[editIndex];
    document.getElementById("offer-date").value = offer.dataset.offerDate;
    document.getElementById("property-address").value =
      offer.dataset.propertyAddress;
    document.getElementById("mls-id").value = offer.dataset.mlsId;
    document.getElementById("offer-type").value = offer.dataset.offerType;
    document.getElementById("offer-price").value = offer.dataset.offerPrice;
    document.getElementById("realtor-id").value = offer.dataset.realtorId;
  } else {
    editOfferIndex = null;
    document.getElementById("offer-form").reset();
  }
}

function closeDialog2() {
  document.getElementById("offer-dialog").style.display = "none";
  document.getElementById("dialog-overlay").style.display = "none";
  document.getElementById("offer-form").reset();
  editOfferIndex = null;
}

document.getElementById("offer-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const offerDate = document.getElementById("offer-date").value;
  const propertyAddress = document.getElementById("property-address").value;
  const mlsId = document.getElementById("mls-id").value;
  const offerType = document.getElementById("offer-type").value;
  const offerPrice = document.getElementById("offer-price").value;
  const realtorId = document.getElementById("realtor-id").value;

  if (offerDate && propertyAddress && offerType && offerPrice) {
    if (editOfferIndex === null) {
      // Add a new offer
      const newOffer = document.createElement("div");
      newOffer.className = "offer";
      newOffer.dataset.offerDate = offerDate;
      newOffer.dataset.propertyAddress = propertyAddress;
      newOffer.dataset.mlsId = mlsId;
      newOffer.dataset.offerType = offerType;
      newOffer.dataset.offerPrice = offerPrice;
      newOffer.dataset.realtorId = realtorId;
      newOffer.innerHTML = `
               <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
               <div style="display: flex; justify-content: space-between;"><p><strong>Offer Date:</strong> ${offerDate}</p>
                 <button onclick="openDialog2(${
                   Array.from(document.querySelectorAll(".offer")).length
                 })"
                    style="border: none;"><span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false"
                                style=" font-size: 20px; color: #000; marging-right: 10px;"></span></button>
                </div>
                <p><strong>Property Address:</strong> ${propertyAddress}</p>
                <p><strong>MLS ID:</strong> ${mlsId || "N/A"}</p>
                <p><strong>Offer Type:</strong> ${offerType}</p>
                <p><strong>Offer Price:</strong> $${offerPrice}</p>
                <p><strong>Realtor ID:</strong> ${realtorId || "N/A"}</p></div>
               
            `;
      document.getElementById("offers-container").appendChild(newOffer);
    } else {
      // Update an existing offer
      const offer = document.querySelectorAll(".offer")[editOfferIndex];
      offer.dataset.offerDate = offerDate;
      offer.dataset.propertyAddress = propertyAddress;
      offer.dataset.mlsId = mlsId;
      offer.dataset.offerType = offerType;
      offer.dataset.offerPrice = offerPrice;
      offer.dataset.realtorId = realtorId;
      offer.innerHTML = `
                <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
                 <div style="display: flex; justify-content: space-between;"><p><strong>Offer Date:</strong> ${offerDate}</p>
                 <button onclick="openDialog2(${
                   Array.from(document.querySelectorAll(".offer")).length
                 })"
                    style="border: none; "><span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false"
                                style=" font-size: 20px; color: #000; marging-right: 10px;"></span></button>
                </div>
                <p><strong>Property Address:</strong> ${propertyAddress}</p>
                <p><strong>MLS ID:</strong> ${mlsId || "N/A"}</p>
                <p><strong>Offer Type:</strong> ${offerType}</p>
                <p><strong>Offer Price:</strong> $${offerPrice}</p>
                <p><strong>Realtor ID:</strong> ${realtorId || "N/A"}</p>
                </div>
              
            `;
    }
    closeDialog2();
  } else {
    alert("Please fill in all required fields.");
  }
});

let editContractIndex = null; // Keeps track of the contract being edited

function openDialog3(editIndex = null) {
  document.getElementById("contract-dialog").style.display = "block";
  document.getElementById("dialog-overlay-contract").style.display = "block";

  if (editIndex !== null) {
    editContractIndex = editIndex;

    const contract = document.querySelectorAll(".contract")[editIndex];
    document.getElementById("contract-date").value =
      contract.dataset.contractDate;
    document.getElementById("property-address1").value =
      contract.dataset.propertyAddress1;
    document.getElementById("mls-id1").value = contract.dataset.mlsId1;
    document.getElementById("contract-close-date").value =
      contract.dataset.contractCloseDate;
    document.getElementById("contract-price").value =
      contract.dataset.contractPrice;
    document.getElementById("realtor-id1").value = contract.dataset.realtorId1;
  } else {
    editContractIndex = null;
    document.getElementById("contract-form").reset();
  }
}

function closeDialog3() {
  document.getElementById("contract-dialog").style.display = "none";
  document.getElementById("dialog-overlay-contract").style.display = "none";
  document.getElementById("contract-form").reset();
  editContractIndex = null;
}

document
  .getElementById("contract-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const contractDate = document.getElementById("contract-date").value;
    const propertyAddress1 = document.getElementById("property-address1").value;
    const mlsId1 = document.getElementById("mls-id1").value;
    const contractCloseDate = document.getElementById(
      "contract-close-date"
    ).value;
    const contractPrice = document.getElementById("contract-price").value;
    const realtorId1 = document.getElementById("realtor-id1").value;

    if (
      contractDate &&
      propertyAddress1 &&
      contractCloseDate &&
      contractPrice
    ) {
      if (editContractIndex === null) {
        // Add a new contract
        const newContract = document.createElement("div");
        newContract.className = "contract";
        newContract.dataset.contractDate = contractDate;
        newContract.dataset.propertyAddress1 = propertyAddress1;
        newContract.dataset.mlsId1 = mlsId1;
        newContract.dataset.contractCloseDate = contractCloseDate;
        newContract.dataset.contractPrice = contractPrice;
        newContract.dataset.realtorId1 = realtorId1;
        newContract.innerHTML = `
               <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
               <div style="display: flex; justify-content: space-between;"><p><strong>Contract Date:</strong> ${contractDate}</p>
                 <button onclick="openDialog3(${
                   Array.from(document.querySelectorAll(".contract")).length
                 })"
                    style="border: none;"><span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false"
                                style=" font-size: 20px; color: #000; marging-right: 10px;"></span></button>
                </div>
                <p><strong>Property Address:</strong> ${propertyAddress1}</p>
                <p><strong>MLS ID:</strong> ${mlsId1 || "N/A"}</p>
                <p><strong>Contract Date:</strong> ${contractCloseDate}</p>
                <p><strong>Contract Price:</strong> $${contractPrice}</p>
                <p><strong>Realtor ID:</strong> ${realtorId1 || "N/A"}</p></div>
            `;
        document.getElementById("contracts-container").appendChild(newContract);
      } else {
        // Update an existing contract
        const contract =
          document.querySelectorAll(".contract")[editContractIndex];
        contract.dataset.contractDate = contractDate;
        contract.dataset.propertyAddress1 = propertyAddress1;
        contract.dataset.mlsId1 = mlsId1;
        contract.dataset.contractCloseDate = contractCloseDate;
        contract.dataset.contractPrice = contractPrice;
        contract.dataset.realtorId1 = realtorId1;
        contract.innerHTML = `
                <divstyle="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
                <div style="display: flex; justify-content: space-between;"><p><strong>Contract Date:</strong> ${contractDate}</p>
                 <button onclick="openDialog3(${
                   Array.from(document.querySelectorAll(".contract")).length
                 })"
                    style="border: none; "><span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false"
                                style=" font-size: 20px; color: #000; marging-right: 10px;"></span></button>
                </div>
                <p><strong>Property Address:</strong> ${propertyAddress1}</p>
                <p><strong>MLS ID:</strong> ${mlsId1 || "N/A"}</p>
                <p><strong>Contract Close Date:</strong> ${contractCloseDate}</p>
                <p><strong>Contract Price:</strong> $${contractPrice}</p>
                <p><strong>Realtor ID:</strong> ${realtorId1 || "N/A"}</p></divstyle=>
            `;
      }
      closeDialog3();
    } else {
      alert("Please fill in all required fields.");
    }
  });



  function openSoldDialog() {
    document.getElementById('soldDialogOverlay').style.display = 'flex';
}

// Close first dialog
function closeSoldDialog() {
    document.getElementById('soldDialogOverlay').style.display = 'none';
}
  
let editSoldIndex = null; // Keeps track of the sold being edited

function openDialog4(editIndex = null) {
  closeSoldDialog()
  document.getElementById("sold-dialog").style.display = "block";
  document.getElementById("dialog-overlay-sold").style.display = "block";

  if (editIndex !== null) {
    editSoldIndex = editIndex;

    const sold = document.querySelectorAll(".sold")[editIndex];
    document.getElementById("sold-date").value = sold.dataset.soldDate;
    document.getElementById("property-address2").value =
      sold.dataset.propertyAddress2;
    document.getElementById("city").value = sold.dataset.city;
    document.getElementById("zip-code").value = sold.dataset.zipCode;
    document.getElementById("mls-id2").value = sold.dataset.mlsId2;
    document.getElementById("sold-price").value = sold.dataset.soldPrice;
    document.getElementById("commission").value = sold.dataset.commision;
    document.getElementById("concessions").value = sold.dataset.concessions;
    document.getElementById("offer-type-sold").value = sold.dataset.offerTypeSold;
    document.getElementById("lender-name").value = sold.dataset.lenderName;
    document.getElementById("primary-realtor").value =
      sold.dataset.primaryRealtor;
    document.getElementById("secondary-realtor").value =
      sold.dataset.secondaryRealtor;
    document.getElementById("primary-concierge").value =
      sold.dataset.primaryConcierge;
    document.getElementById("secondary-concierge").value =
      sold.dataset.secondaryConcierge;
  } else {
    editSoldIndex = null;
    document.getElementById("sold-form").reset();
  }
}

function closeDialog4() {
  document.getElementById("sold-dialog").style.display = "none";
  document.getElementById("dialog-overlay-sold").style.display = "none";
  document.getElementById("sold-form").reset();
  editSoldIndex = null;
}

document.getElementById("sold-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const soldDate = document.getElementById("sold-date").value;
  const propertyAddress2 = document.getElementById("property-address2").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const mlsId2 = document.getElementById("mls-id2").value;
  const soldPrice = document.getElementById("sold-price").value;
  const commision = document.getElementById("commission").value;
  const concessions = document.getElementById("concessions").value;
  const offerTypeSold = document.getElementById("offer-type-sold").value;
  const lenderName = document.getElementById("lender-name").value;
  const primaryRealtor = document.getElementById("primary-realtor").value;
  const secondaryRealtor = document.getElementById("secondary-realtor").value;
  const primaryConcierge = document.getElementById("primary-concierge").value;
  const secondaryConcierge = document.getElementById(
    "secondary-concierge"
  ).value;

  if (soldDate && propertyAddress2 && soldPrice) {
    if (editSoldIndex === null) {
      // Add a new sold
      const newSold = document.createElement("div");
      newSold.className = "sold";
      newSold.dataset.soldDate = soldDate;
      newSold.dataset.propertyAddress2 = propertyAddress2;
      newSold.dataset.city = city;
      newSold.dataset.zipCode = zipCode;
      newSold.dataset.mlsId2 = mlsId2;
      newSold.dataset.soldPrice = soldPrice;
      newSold.dataset.commision = commision;
      newSold.dataset.concessions = concessions;
      newSold.dataset.offerTypeSold = offerTypeSold;
      newSold.dataset.lenderName = lenderName;
      newSold.dataset.primaryRealtor = primaryRealtor;
      newSold.dataset.secondaryRealtor = secondaryRealtor;
      newSold.dataset.primaryConcierge = primaryConcierge;
      newSold.dataset.secondaryConcierge = secondaryConcierge;

      newSold.innerHTML = `
      <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
       <div style="display: flex; justify-content: space-between;">
     <p><strong>Sold Date:</strong> ${soldDate}</p>
     <button onclick="openDialog4(${
       Array.from(document.querySelectorAll(".sold")).length
     })" style="border: none;">
       <span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false" style="font-size: 20px; color: #000; margin-right: 10px;"></span>
     </button>
   </div>
   <p><strong>Property Address:</strong> ${propertyAddress2}</p>
   <p><strong>MLS ID:</strong> ${mlsId2 || "N/A"}</p>
   <p><strong>City:</strong> ${city}</p>
   <p><strong>Zip Code:</strong> ${zipCode}</p>
   <p><strong>Sold Price:</strong> $${soldPrice}</p>
   <p><strong>Commission:</strong> ${commision}</p>
   <p><strong>concessions:</strong> ${concessions}</p>
   <p><strong>Offer Type:</strong> ${offerTypeSold}</p>
   <p><strong>Lender Name:</strong> ${lenderName}</p>
   <p><strong>Primary Realtor:</strong> ${primaryRealtor}</p>
   <p><strong>Secondary Realtor:</strong> ${secondaryRealtor}</p>
   <p><strong>Primary Concierge:</strong> ${primaryConcierge}</p>
   <p><strong>Secondary Concierge:</strong> ${secondaryConcierge}</p>
      </div>
`;

      document.getElementById("solds-container").appendChild(newSold);
    } else {
      // Update an existing sold
      const sold = document.querySelectorAll(".sold")[editSoldIndex];
      sold.dataset.soldDate = soldDate;
      sold.dataset.propertyAddress2 = propertyAddress2;
      sold.dataset.city = city;
      sold.dataset.zipCode = zipCode;
      sold.dataset.mlsId2 = mlsId2;
      sold.dataset.soldPrice = soldPrice;
      sold.dataset.commision = commision;
      sold.dataset.concessions = concessions;
      sold.dataset.offerTypeSold = offerTypeSold;
      sold.dataset.lenderName = lenderName;
      sold.dataset.primaryRealtor = primaryRealtor;
      sold.dataset.secondaryRealtor = secondaryRealtor;
      sold.dataset.primaryConcierge = primaryConcierge;
      sold.dataset.secondaryConcierge = secondaryConcierge;

      sold.innerHTML = `
   <div style="border: 2px solid #ccc; border-radius: 5px; padding: 10px; margin:10px;">
   <div style="display: flex; justify-content: space-between;">
     <p><strong>Sold Date:</strong> ${soldDate}</p>
     <button onclick="openDialog4(${
       Array.from(document.querySelectorAll(".sold")).length
     })" style="border: none;">
       <span class="iconify" data-icon="fluent:edit-16-regular" data-inline="false" style="font-size: 20px; color: #000; margin-right: 10px;"></span>
     </button>
   </div>
   <p><strong>Property Address:</strong> ${propertyAddress2}</p>
   <p><strong>MLS ID:</strong> ${mlsId2 || "N/A"}</p>
   <p><strong>City:</strong> ${city}</p>
   <p><strong>Zip Code:</strong> ${zipCode}</p>
   <p><strong>Sold Price:</strong> $${soldPrice}</p>
   <p><strong>Commission:</strong> ${commision}</p>
   <p><strong>concessions:</strong> ${concessions}</p>
   <p><strong>Offer Type:</strong> ${offerTypeSold}</p>
   <p><strong>Lender Name:</strong> ${lenderName}</p>
   <p><strong>Primary Realtor:</strong> ${primaryRealtor}</p>
   <p><strong>Secondary Realtor:</strong> ${secondaryRealtor}</p>
   <p><strong>Primary Concierge:</strong> ${primaryConcierge}</p>
   <p><strong>Secondary Concierge:</strong> ${secondaryConcierge}</p>
   </div>
`;
    }
    closeDialog4();
  } else {
    alert("Please fill in all required fields.");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const filterButton = document.getElementById("filterButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  filterButton.addEventListener("click", () => {
    // Toggle the dropdown menu visibility
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!filterButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});



// Selectors
const callIcon = document.getElementById("call-icon");
const callDrawer = document.getElementById("call-drawer");
const closeDrawerCall = document.getElementById("close-drawer");
const quickConnectsButton = document.getElementById("quick-connects");
const numberPadButton = document.getElementById("number-pad");
const dynamicContent = document.getElementById("dynamic-content");
const openCallDrawerButton = document.getElementById("open-call-drawer");

openCallDrawerButton.addEventListener("click", () => {
  callDrawer.classList.add("show");
  callDrawer.classList.remove("hidden");
});


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
quickConnectsButton.addEventListener("click", () => {
  showQuickConnects();
});

// Show Number Pad UI
numberPadButton.addEventListener("click", () => {
  showNumberPad();
});

// Function to display Quick Connects UI
function showQuickConnects() {
  dynamicContent.innerHTML = `
    <div class="quick-connect-container">
      <div class="quick-connect-input">
        <select class="flag-select">
          <option value="us">🇺🇸</option>
          <option value="uk">🇬🇧</option>
          <option value="fr">🇫🇷</option>
        </select>
        <input type="text" placeholder="Quick Connect or Number" class="quick-connect-field" id="quick-connect-input">
      </div>
      <button class="incoming-call-btn action-btn">Incoming Call</button>
      <div class="quick-actions">
        <button id="number-pad-btn" class="action-btn">Number Pad</button>
        <button id="call-btn" class="call-btn">Call</button>
      </div>
    </div>
  `;

  // Add event listener for Number Pad button inside Quick Connects UI
  const numberPadBtn = document.getElementById("number-pad-btn");
  numberPadBtn.addEventListener("click", () => {
    showNumberPad();
  });

  // Add event listener for Incoming Call button
  const incomingCallBtn = document.querySelector(".incoming-call-btn");
  incomingCallBtn.addEventListener("click", () => {
    showIncomingCallUI();
  });

  // Add event listener for Call button
  const callBtn = document.getElementById("call-btn");
  callBtn.addEventListener("click", () => {
    handleCallButtonClick();
  });
}

// Function to display Number Pad UI
function showNumberPad() {
  dynamicContent.innerHTML = `
    <div class="availability" style="display: flex; flex-direction: column; justify-content: start; align-items: flex-start;padding: 0px 10px 10px 0px;">
      <select id="availability">
        <option value="available">Available</option>
        <option value="busy">Busy</option>
        <option value="offline">Offline</option>
      </select>
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
      <button id="call-btn" class="call-btn">Call</button>
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

  // Add event listener for Quick Connects button inside Number Pad UI
  const quickConnectsBtn = document.getElementById("quick-connects-btn");
  quickConnectsBtn.addEventListener("click", () => {
    quickConnectsButton.click();
  });

  // Add event listener for Call button
  const callBtn = document.getElementById("call-btn");
  callBtn.addEventListener("click", () => {
    handleCallButtonClick();
  });
}

// Function to handle the Call button click
function handleCallButtonClick() {
  const inputField = document.querySelector(".quick-connect-field");
  const phoneNumber = inputField.value.trim();

  // Validate the phone number
  if (/^\d{10}$/.test(phoneNumber)) {
    alert(`Dialing ${phoneNumber}...`);
    showConnectedCallUI();
  } else {
    alert("Please enter a valid 10-digit phone number.");
  }
}

// Function to display Incoming Call UI
function showIncomingCallUI() {
  dynamicContent.innerHTML = `
    <div class="incoming-call">
       <div class="incoming-call-header">
      <h3 style="margin: 0; color: #fff;">+1-202-555-2546</h3>
      <span style="color: #ccc; font-size: 14px;">Incoming Call</span>
    </div>

      <div class="call-actions">
        <button id="accept-call-btn" class="call-btn" style="background-color: #4CAF50;">Accept Call</button>
        <button id="reject-call-btn" class="call-btn" style="background-color: #f44336;">Reject Call</button>
      </div>
    </div>
  `;

  const acceptCallBtn = document.getElementById("accept-call-btn");
  const rejectCallBtn = document.getElementById("reject-call-btn");

  // Add event listener for Accept Call button
  acceptCallBtn.addEventListener("click", () => {
    alert("Call Accepted");
    showConnectedCallUI();
  });

  // Add event listener for Reject Call button
  rejectCallBtn.addEventListener("click", () => {
    alert("Call Rejected");
    quickConnectsButton.click();
  });
}

// Function to display Connected Call UI
function showConnectedCallUI() {
  dynamicContent.innerHTML = `
    <div class="connected-call-header" style="background-color: #4CAF50; color: #fff; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div class="call-info">
        <h3 style="margin: 0;">+1-202-555-0181</h3>
        <span style="font-size: 14px;">Connected Call</span>
      </div>
      <div class="call-duration">
        <span style="font-size: 14px;">⏱ 2:40</span>
      </div>
    </div>
    <div class="quick-connect-container" style="padding: 10px;">
      <div class="quick-connect-input" style="display: flex; align-items: center; gap: 10px;">
        <select class="flag-select">
          <option value="us">🇺🇸</option>
          <option value="uk">🇬🇧</option>
          <option value="fr">🇫🇷</option>
        </select>
        <input type="text" id="contact-search" placeholder="Search for a contact..." class="quick-connect-field" style="flex: 1;" />
      </div>
      <div id="contact-list" style="margin-top: 10px; display: none;"></div>
      <div class="quick-actions" style="display: flex; justify-content: space-between; margin-top: 10px;">
        <button id="number-pad-btn" class="action-btn">Number Pad</button>
        <button class="call-btn">Call</button>
      </div>
    </div>
  `;

  const contacts = [
    { name: "Mark Struert", phone: "+1-202-555-0108" },
    { name: "Henry Marksman", phone: "+1-202-555-5486" },
    { name: "Mark Luber", phone: "+1-202-555-1254" },
  ];

  const contactSearchInput = document.getElementById("contact-search");
  const contactListDiv = document.getElementById("contact-list");

  // Add event listener to search input for filtering contacts
  contactSearchInput.addEventListener("input", () => {
    const searchValue = contactSearchInput.value.toLowerCase().trim();
    contactListDiv.innerHTML = "";

    if (searchValue) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue)
      );

      if (filteredContacts.length > 0) {
        contactListDiv.style.display = "block";
        filteredContacts.forEach(contact => {
          const contactItem = document.createElement("div");
          contactItem.classList.add("contact-item");
          contactItem.setAttribute("data-phone", contact.phone);
          contactItem.style.cursor = "pointer";
          contactItem.style.margin = "5px 0";
          contactItem.innerHTML = `${contact.name} <span style="color: gray;">${contact.phone}</span>`;

          contactItem.addEventListener("click", () => {
            alert(`Starting call with ${contact.phone}...`);
            showConnectedCallUIWithPhoneNumber(contact.phone);
          });

          contactListDiv.appendChild(contactItem);
        });
      } else {
        contactListDiv.style.display = "block";
        contactListDiv.innerHTML = `<div style="color: gray;">No contacts found</div>`;
      }
    } else {
      contactListDiv.style.display = "none";
    }
  });

  // Add event listener for Number Pad button
  const numberPadBtn = document.getElementById("number-pad-btn");
  numberPadBtn.addEventListener("click", () => {
    showNumberPad();
  });
}

// Function to display the connected call UI with a specific phone number
// Function to display the connected call UI with a specific phone number
function showConnectedCallUIWithPhoneNumber(phoneNumber) {
  dynamicContent.innerHTML = `
    <div class="connected-call-container" style=" overflow: hidden;">
    
      <div style="display: flex; flex-direction: column; background-color: #FFD700; padding: 10px; color: #000;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3 style="margin: 0;">${phoneNumber}</h3>
          <button style="background: none; border: none; font-size: 16px; cursor: pointer; color: #000;">✖</button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 14px; margin-top: 5px;">
          <span>⏱ 2:40</span>
          <span>On Hold</span>
        </div>
      </div>

      <!-- Internal Transfer Section -->
      <div style="background-color: #001F54; color: #fff; padding: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
          <p>Internal Transfer</p>
          <p>Connecting</p>
          </div>
          <button style="background: none; border: none; font-size: 16px; cursor: pointer; color: #fff;">✖</button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; flex-wrap: wrap; gap: 10px; padding: 10px; justify-content: space-between; margin-top: 80px;">
        <button id="mute-btn" style="flex: 1; padding: 10px; background-color: #F5F5F5; border: 1px solid #ddd; cursor: pointer;">Mute</button>
        <button id="join-btn" style="flex: 1; padding: 10px; background-color: #F5F5F5; border: 1px solid #ddd; cursor: pointer;">Join</button>
        <button id="swap-btn" style="flex: 1; padding: 10px; background-color: #F5F5F5; border: 1px solid #ddd; cursor: pointer;">Swap</button>
        <button id="number-pad-btn" style="flex: 1; padding: 10px; background-color: #F5F5F5; border: 1px solid #ddd; cursor: pointer;">Number Pad</button>
        <button id="end-call-btn" style="flex: 1; padding: 10px; background-color: #FF4C4C; color: #fff; border: none; cursor: pointer;">End Call</button>
      </div>
    </div>
  `;

  // Add functionality to buttons
  document.getElementById("mute-btn").addEventListener("click", () => {
    alert("Muted");
  });

  document.getElementById("join-btn").addEventListener("click", () => {
    alert("Joining the call...");
  });

  document.getElementById("swap-btn").addEventListener("click", () => {
    alert("Swapping the call...");
  });

  document.getElementById("number-pad-btn").addEventListener("click", () => {
    showNumberPad(); // Call the Number Pad UI
  });

  document.getElementById("end-call-btn").addEventListener("click", () => {
    showDefaultState(); // Return to the default state
  });
}

// Function to display the default state
function showDefaultState() {
  dynamicContent.innerHTML = `
    <div id="dynamic-content" class="dynamic-content">
      <!-- Default state -->
      <div style="display: flex; flex-direction: column; justify-content: start; align-items: flex-start;">
        <select id="availability">
          <option value="available">Available</option>
          <option value="busy">Busy</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <div class="welcome-message">
        <h2 style="color: #333; text-align: center; margin-bottom: 40px;">Welcome</h2>
        <button id="quick-connects" class="action-btn">
          <span class="iconify" data-icon="ph:phone-disconnect" data-inline="false" style="color: #0055fd; font-size: 20px; margin: 0 5px 0 5px;"></span>
          <p>Quick Connects</p>
        </button>
        <button id="number-pad" class="action-btn">
          <span class="iconify" data-icon="ph:numpad" data-inline="false" style="color: #0055fd; font-size: 16px; font-weight: 600;"></span>
          <p>Number Pad</p>
        </button>
      </div>
    </div>
  `;
}



//Edit for Personal Information section - Left side

document.addEventListener("DOMContentLoaded", () => {
  const noteModal = document.getElementById("editNoteModal");
  const closeNoteButton = document.querySelector("#editNoteModal .close-button");
  const noteTextarea = document.getElementById("note");
  const noteForm = document.getElementById("editNoteForm");

  let currentNoteId = null;

  // Add event listener for edit buttons
  const editButtons = document.querySelectorAll("img[alt='edit']");
  editButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
          currentNoteId = event.target.id.replace("edit-", "note-");
          const noteElement = document.querySelector(`#${currentNoteId} p`);
          noteTextarea.value = noteElement.textContent;
          noteModal.style.display = "block";
      });
  });

  // Close the modal
  closeNoteButton.addEventListener("click", () => {
      noteModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === noteModal) {
          noteModal.style.display = "none";
      }
  });

  // Save the edited note
  noteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (currentNoteId) {
          const noteElement = document.querySelector(`#${currentNoteId} p`);
          noteElement.textContent = noteTextarea.value;
      }
      noteModal.style.display = "none";
  });

  // Add event listener for delete buttons
  const deleteButtons = document.querySelectorAll("img[alt='delete']");
  deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
          const noteId = event.target.id.replace("delete-", "note-");
          const noteContainer = document.getElementById(noteId);

          if (confirm("Are you sure you want to delete this note?")) {
              noteContainer.remove();
          }
      });
  });
});


const input = document.getElementById("currentPage");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value, 10);
    if (currentValue > 1) {
        input.value = currentValue - 1;
    }
});

nextButton.addEventListener("click", () => {
    const currentValue = parseInt(input.value, 10);
    const maxValue = parseInt(input.max, 10);
    if (currentValue < maxValue) {
        input.value = currentValue + 1;
    }
});

input.addEventListener("input", () => {
    const currentValue = parseInt(input.value, 10);
    const minValue = parseInt(input.min, 10);
    const maxValue = parseInt(input.max, 10);

    if (currentValue < minValue) {
        input.value = minValue;
    } else if (currentValue > maxValue) {
        input.value = maxValue;
    }
});
