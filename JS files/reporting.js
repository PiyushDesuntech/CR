
// const menuLinks = document.querySelectorAll('.navbar .menu a');

// // Loop through all links and disable them
// menuLinks.forEach(link => {
//   if (link.textContent.trim() === 'Reporting') {
//     link.classList.add('enabled'); // Enable only "Reporting"
//   }
// });

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






document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabsNavbar a");
  const panels = document.querySelectorAll(".tab-panel-navbar");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show the corresponding panel
      const tabId = tab.getAttribute("data-tab-navbar");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

document.querySelectorAll('.tabs a').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all tabs and panels
    document.querySelectorAll('.tabs a').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(el => el.classList.remove('active'));

    // Add active class to clicked tab and corresponding panel
    tab.classList.add('active');
    const panelId = tab.dataset.tab;
    document.getElementById(panelId)?.classList.add('active');

    // Center the active tab
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});


//Profile
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

// Weekly Showing Chart
const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(weeklyCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [512, 488],
      backgroundColor: ['#4ac366', '#E0E0E0'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});

// Repeat Showing Chart
const repeatCtx = document.getElementById('repeatChart').getContext('2d');
const repeatChart = new Chart(repeatCtx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [48, 952],
      backgroundColor: ['#75c2c8', '#E0E0E0'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});
const sendListing1 = document.getElementById('sendListingChart1').getContext('2d');
const sendListingChart1 = new Chart(sendListing1, {
  type: 'doughnut',
  data: {
    labels: ['Auto-Sent Emails', 'Sent Listing', 'Available Send Listing'],
    datasets: [{
      data: [740, 280, 340],
      backgroundColor: ['#ffc107', '#007bff', '#75c2c8'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});

const sendListing2 = document.getElementById('sendListingChart2').getContext('2d');
const sendListingChart2 = new Chart(sendListing2, {
  type: 'doughnut',
  data: {
    labels: ['Auto-Sent Emails', 'Sent Listing', 'Available Send Listing'],
    datasets: [{
      data: [160, 60, 80],
      backgroundColor: ['#ffc107', '#007bff', '#75c2c8'],
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});

const totalPower = document.getElementById('totalPowerChart').getContext('2d');
const totalPowerChart = new Chart(totalPower, {
  type: 'doughnut',
  data: {
    labels: ['Total Power Hours Used', 'Remaining'],
    datasets: [{
      data: [350, 150],
      backgroundColor: ['#ffc107', '#E0E0E0'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});
const totalPoints = document.getElementById('totalPointsChart').getContext('2d');
const totalPointsChart = new Chart(totalPoints, {
  type: 'doughnut',
  data: {
    labels: ['Total Points Earned', 'Remaining'],
    datasets: [{
      data: [18350, 11650],
      backgroundColor: ['#007bff', '#E0E0E0'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});

const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [{
      label: 'Monthly Data',
      data: [682, 400, 900, 600, 200, 500],
      backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue color
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`
        }
      },
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Month',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false
          ,
          text: 'Values',
        },
        ticks: {
          stepSize: 200,
        },
      },
    }
  }
});


const dataTable1 = [
  { leads: 0, offers: 0, contracts: 2, propertySold: 16, leadsOnOff: "On", primary: "Steve Nall", showing: "12 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "Off", primary: "Jolene Oldsberg", showing: "1 (0.20%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "5 (0.38%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 24, leadsOnOff: "On", primary: "Evelina Phillips", showing: "8 (1.12%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "2 (0.18%)" },
  { leads: 0, offers: 0, contracts: 0, propertySold: 16, leadsOnOff: "Off", primary: "Steve Nall", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "On", primary: "Jolene Oldsberg", showing: "14 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "8 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 24, leadsOnOff: "Off", primary: "Evelina Phillips", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "5 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 16, leadsOnOff: "On", primary: "Steve Nall", showing: "12 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "Off", primary: "Jolene Oldsberg", showing: "1 (0.20%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "5 (0.38%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 24, leadsOnOff: "On", primary: "Evelina Phillips", showing: "8 (1.12%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "2 (0.18%)" },
  { leads: 0, offers: 0, contracts: 0, propertySold: 16, leadsOnOff: "Off", primary: "Steve Nall", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "On", primary: "Jolene Oldsberg", showing: "14 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "8 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 24, leadsOnOff: "Off", primary: "Evelina Phillips", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "5 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 16, leadsOnOff: "On", primary: "Steve Nall", showing: "12 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "Off", primary: "Jolene Oldsberg", showing: "1 (0.20%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "5 (0.38%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 24, leadsOnOff: "On", primary: "Evelina Phillips", showing: "8 (1.12%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "2 (0.18%)" },
  { leads: 0, offers: 0, contracts: 0, propertySold: 16, leadsOnOff: "Off", primary: "Steve Nall", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "On", primary: "Jolene Oldsberg", showing: "14 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "8 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 24, leadsOnOff: "Off", primary: "Evelina Phillips", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "5 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 16, leadsOnOff: "On", primary: "Steve Nall", showing: "12 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "Off", primary: "Jolene Oldsberg", showing: "1 (0.20%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "5 (0.38%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 24, leadsOnOff: "On", primary: "Evelina Phillips", showing: "8 (1.12%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "2 (0.18%)" },
  { leads: 0, offers: 0, contracts: 0, propertySold: 16, leadsOnOff: "Off", primary: "Steve Nall", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "On", primary: "Jolene Oldsberg", showing: "14 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "8 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 24, leadsOnOff: "Off", primary: "Evelina Phillips", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "5 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 16, leadsOnOff: "On", primary: "Steve Nall", showing: "12 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "Off", primary: "Jolene Oldsberg", showing: "1 (0.20%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "5 (0.38%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 24, leadsOnOff: "On", primary: "Evelina Phillips", showing: "8 (1.12%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "2 (0.18%)" },
  { leads: 0, offers: 0, contracts: 0, propertySold: 16, leadsOnOff: "Off", primary: "Steve Nall", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 23, leadsOnOff: "On", primary: "Jolene Oldsberg", showing: "14 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 18, leadsOnOff: "On", primary: "Samuel Maduro", showing: "8 (0.18%)" },
  { leads: 0, offers: 0, contracts: 3, propertySold: 24, leadsOnOff: "Off", primary: "Evelina Phillips", showing: "0 (0.18%)" },
  { leads: 0, offers: 0, contracts: 2, propertySold: 19, leadsOnOff: "On", primary: "Brian Webber", showing: "5 (0.18%)" },
];

const dataTable2 = [
  { month: "August(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "July(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "June(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "August(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "July(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "June(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "August(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "July(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "June(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "August(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "July(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "June(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "August(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "July(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
  { month: "June(2020)", totalLeads: 9963, archived: "3422 (10%)", netLeads: 50, new: "25 (5%)", dead: "25 (5%)", attemptedContact: "25 (5%)", hasRealtor: "25 (5%)", contacted: "25 (5%)", showing: "25 (5%)", inContract: "25 (5%)", sold: "25 (5%)", offerWritten: 25 },
];

function renderTable(data, tableBodyId, paginationId, rowsPerPage, currentPage) {
  const tableBody = document.getElementById(tableBodyId);
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = Object.values(row)
      .map(value => `<td>${value}</td>`)
      .join("");
    tableBody.appendChild(tr);
  });

  renderPagination(data, paginationId, rowsPerPage, currentPage, tableBodyId);
}

function renderPagination(data, paginationId, rowsPerPage, currentPage, tableBodyId) {
  const pagination = document.getElementById(paginationId);
  pagination.innerHTML = "";

  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Add Previous Button
  const prevButton = document.createElement("button");
  prevButton.textContent = "<";
  prevButton.classList.add("pagination-button");
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    renderTable(data, tableBodyId, paginationId, rowsPerPage, currentPage - 1);
  });
  pagination.appendChild(prevButton);

  // Add Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("pagination-button");
    pageButton.classList.toggle("active", i === currentPage);
    pageButton.addEventListener("click", () => {
      renderTable(data, tableBodyId, paginationId, rowsPerPage, i);
    });
    pagination.appendChild(pageButton);
  }

  // Add Next Button
  const nextButton = document.createElement("button");
  nextButton.textContent = ">";
  nextButton.classList.add("pagination-button");
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    renderTable(data, tableBodyId, paginationId, rowsPerPage, currentPage + 1);
  });
  pagination.appendChild(nextButton);
}

// Initialize Tables
renderTable(dataTable1, "tableBody1", "pagination1", 10, 1);
renderTable(dataTable2, "tableBody2", "pagination2", 10, 1);


function initializeFilter(filterIconId, filterDropdownId, filterOptionsClass, applyFilterButtonId, tableId, typeBadgeClass) {
  const filterIcon = document.getElementById(filterIconId);
  const filterDropdown = document.getElementById(filterDropdownId);
  const filterOptions = document.querySelectorAll(`.${filterOptionsClass}`);
  const applyFilterButton = document.getElementById(applyFilterButtonId);
  const tableRows = document.querySelectorAll(`#${tableId} tbody tr`);


  filterIcon.addEventListener("click", (event) => {
    event.stopPropagation(); 
    filterDropdown.style.display =
      filterDropdown.style.display === "block" ? "none" : "block";
  });

  // Apply filter logic
  applyFilterButton.addEventListener("click", () => {
    const selectedTypes = Array.from(filterOptions)
      .filter(option => option.checked)
      .map(option => option.value);

    tableRows.forEach(row => {
      const type = row.querySelector(`.${typeBadgeClass}`).textContent;
      row.style.display = selectedTypes.includes(type) || selectedTypes.length === 0
        ? ""
        : "none";
    });

    filterDropdown.style.display = "none"; 
  });


  document.addEventListener("click", (event) => {
    if (!filterDropdown.contains(event.target) && event.target !== filterIcon) {
      filterDropdown.style.display = "none";
    }
  });
}
document.querySelectorAll('.leads-toggle').forEach(toggle => {
  toggle.addEventListener('change', function () {
    const row = this.closest('tr');
    const status = this.checked ? 'On' : 'Off';
    console.log(`Leads for ${row.querySelector('.email').textContent.trim()} are now ${status}`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  initializeFilter(
    "filter-icon-1",
    "filter-dropdown-1",
    "filter-option-1",
    "apply-filter-1",
    "data-table-1",
    "type-badge-1"
  );

  initializeFilter(
    "filter-icon-2",
    "filter-dropdown-2",
    "filter-option-2",
    "apply-filter-2",
    "data-table-2",
    "type-badge-2"
  );
  initializeFilter(
    "filter-icon-3",
    "filter-dropdown-3",
    "filter-option-3",
    "apply-filter-3",
    "data-table-3",
    "type-badge-3"
  );
  initializeFilter(
    "filter-icon-points-realtor",
    "filter-dropdown-points-realtor",
    "filter-option-points-realtor",
    "apply-filter-points-realtor",
    "data-table-points-realtor",
    "type-badge-points-realtor",
  );
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropdown-button');
  const menuItems = dropdown.querySelectorAll('.dropdown-menu a');

  button.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      button.textContent = item.textContent; // Update the button text
      dropdown.classList.remove('open'); // Close the dropdown menu
    });
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  }
});


// Select all 3rd column cells with the "clickable" class
const clickableCells = document.querySelectorAll('.clickable');

// Select the dialog box and close button
const dialogBox = document.getElementById('dialog-box');
const closeDialog = document.getElementById('close-dialog');

// Add click event listeners to the cells
clickableCells.forEach(cell => {
  cell.addEventListener('click', () => {
    dialogBox.classList.remove('hidden'); // Show the dialog box
  });
});

// Add click event listener to the close button
closeDialog.addEventListener('click', () => {
  dialogBox.classList.add('hidden'); 
});

// Close the dialog if clicking outside of it
dialogBox.addEventListener('click', (e) => {
  if (e.target === dialogBox) {
    dialogBox.classList.add('hidden'); 
  }
});

// Buy Side
// Tabs merge and main
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabsBuy a");
  const panels = document.querySelectorAll(".tab-panel-buy-side");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show the corresponding panel
      const tabId = tab.getAttribute("data-tab-buy");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
 // Input validation
 document.querySelectorAll('input').forEach(input => {
  input.addEventListener('blur', function () {
    if (this.value === '') {
      this.classList.add('error');
    } else {
      this.classList.remove('error');
    }
  });
});

// Dropdown functionality
document.querySelectorAll('.status-dropdown').forEach(select => {
  select.addEventListener('change', function () {
    console.log('Status changed to:', this.value);
  });
});

// Appraisal Due validation example
const appraisalInputs = document.querySelectorAll('.appraisal-input');
appraisalInputs.forEach(input => {
  input.addEventListener('blur', function () {
    if (this.value === '') {
      this.classList.add('error');
      if (!this.nextElementSibling) {
        const errorText = document.createElement('span');
        errorText.className = 'validation-error';
        errorText.innerText = 'Input required.';
        this.parentNode.appendChild(errorText);
      }
    } else {
      this.classList.remove('error');
      if (this.nextElementSibling) {
        this.parentNode.removeChild(this.nextElementSibling);
      }
    }
  });
});


// Offer Table
document.addEventListener("DOMContentLoaded", () => {
    const offerData = [
        ["Buy-Side", "Offer Not Accepted", "3/4/2021", "3/4/2021", "$560,000", "Terry Kreuz", "Antoine Cazenas", "1940 Sunshine Dr", "Concord", "95420", "-", "-", "-", "-"],
        ["Buy-Side", "Offer Accepted", "3/5/2021", "3/5/2021", "$750,000", "Terry Kreuz", "Antoine Cazenas", "2248 Panoramic Dr", "Concord", "94520", "$750,000", "3/30/2021", "In Contract", "-"],
        ["Buy-Side", "-", "3/5/2021", "3/8/2021", "$460,000", "Terry Kreuz", "Celia Atkinson", "224 Ohio St", "Vallejo", "94590", "-", "-", "-", "-"],
        ["Buy-Side", "Backup Offer", "3/8/2021", "3/5/2021", "$355,000", "Ceslavs Belinskis", "Deljuan Bankston", "7707 Canova Wy", "Sacramento", "95823", "-", "-", "-", "-"],
        ["Buy-Side", "Offer Accepted", "3/8/2021", "3/8/2021", "$590,000", "Pamela Samuels", "Veronica Green", "2905 Longview Dr", "Antioch", "94509", "$590,000", "-", "-", "-"],
        ["Buy-Side", "Pulled Out Offer", "3/6/2021", "3/6/2021", "$600,000", "Pamela Samuels", "Veronica Green", "2524 Ontario Dr", "Tracy", "94304", "-", "-", "-", "-"],
        ["Listing", "Active Listing", "2/26/2021", "3/4/2021", "$588,900", "Pamela Samuels", "Mildred Morgan and Tomiquia Moss", "5085 Valley Crest Dr #289", "Concord", "94521", "-", "-", "-", "-"],
        ["Buy-Side", "Offer Not Accepted", "3/10/2021", "3/10/2021", "$575,000", "Dan Sundberg", "Ed and Claudette Khun", "14688 Oakville Lane", "Sacramento", "95829", "-", "-", "-", "-"]
    ];

    populateTable("offer-table", offerData);
});

function populateTable(tableId, data) {
    const table = document.getElementById(tableId).getElementsByTagName("tbody")[0];
    data.forEach(rowData => {
        const row = table.insertRow();
        rowData.forEach((cellData, index) => {
            const cell = row.insertCell();
            if (index === 1) {
                // Create a styled box for the Offer Status
                const statusBox = document.createElement("div");
                statusBox.textContent = cellData;
                styleOfferStatusBox(statusBox, cellData);
                cell.appendChild(statusBox);
            } else if (index === 3) {
                // Create input type="date" for "Date Submitted to Agent"
                const dateInput = document.createElement("input");
                dateInput.type = "date";
                dateInput.value = formatDateForInput(cellData);
                cell.appendChild(dateInput);
            } else {
                cell.textContent = cellData;
            }
        });
    });
}

function styleOfferStatusBox(box, status) {
    box.style.padding = "5px 10px";
    box.style.borderRadius = "5px";
    box.style.textAlign = "center";
    box.style.display = "inline-block";
    box.style.fontWeight = "bold";

    switch (status) {
        case "Offer Not Accepted":
            box.style.backgroundColor = "#ffcccc"; // Light red
            box.style.color = "#a94442"; // Dark red text
            break;
        case "Offer Accepted":
            box.style.backgroundColor = "#d4edda"; // Light green
            box.style.color = "#155724"; // Dark green text
            break;
        case "Backup Offer":
            box.style.backgroundColor = "#d1ecf1"; // Light blue
            box.style.color = "#0c5460"; // Dark blue text
            break;
        case "Pulled Out Offer":
            box.style.backgroundColor = "#fff3cd"; // Light yellow
            box.style.color = "#856404"; // Dark yellow text
            break;
        case "Active Listing":
            box.style.backgroundColor = "#cce5ff"; // Light blue
            box.style.color = "#004085"; // Dark blue text
            break;
        default:
            box.style.backgroundColor = "#f5f5f5"; // Default gray background
            box.style.color = "#333"; // Default text color
            break;
    }
}

function formatDateForInput(dateString) {
    const [month, day, year] = dateString.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function sortTable(columnIndex) {
    const table = document.getElementById("offer-table");
    const rows = Array.from(table.rows).slice(1);
    const isAscending = table.dataset.sortOrder === "asc";
    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        return isAscending
            ? cellA.localeCompare(cellB, undefined, { numeric: true })
            : cellB.localeCompare(cellA, undefined, { numeric: true });
    });
    rows.forEach(row => table.appendChild(row));
    table.dataset.sortOrder = isAscending ? "desc" : "asc";
}

// CASH FLOW
//Cash flow tabs change
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabsCashflow a");
  const panels = document.querySelectorAll(".tab-panel-cash-flow");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show the corresponding panel
      const tabId = tab.getAttribute("data-tab-cash-flow");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
//Dialog box button
document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const parentRow = button.closest('.parent-row');
    let nextRow = parentRow.nextElementSibling;

    // Toggle visibility for all subsequent detail rows until the next parent row
    while (nextRow && nextRow.classList.contains('details-row')) {
      nextRow.style.display = nextRow.style.display === 'table-row' ? 'none' : 'table-row';
      nextRow = nextRow.nextElementSibling;
    }

    // Toggle button text
    button.textContent = button.textContent === '+' ? '-' : '+';
  });
});

// Cash flow dialog box
const clickableCellsCashFlow = document.querySelectorAll('.clickableCellsCashFlow');

// Select the dialog box and close button
const dialogBoxCashFlow = document.getElementById('dialog-box-cash-flow');
const closeDialogCashFlow = document.getElementById('close-dialog-cash-flow');

// Add click event listeners to the cells
clickableCellsCashFlow.forEach(cell => {
  cell.addEventListener('click', () => {
    dialogBoxCashFlow.classList.remove('hidden'); // Show the dialog box
  });
});

// Add click event listener to the close button
closeDialogCashFlow.addEventListener('click', () => {
  dialogBoxCashFlow.classList.add('hidden'); 
});

// Close the dialog if clicking outside of it
dialogBoxCashFlow.addEventListener('click', (e) => {
  if (e.target === dialogBoxCashFlow) {
    dialogBoxCashFlow.classList.add('hidden'); 
  }
});

// Cash Flow graph charts
const CashFlowChart1 = document.getElementById('sendCashFlowChart1').getContext('2d');
const sendCashFlowChart1 = new Chart(CashFlowChart1, {
  type: 'doughnut',
  data: {
    labels: ['Tota Gross Commission Income', 'This Years Goal'],
    datasets: [{
      data: [1754655.20, 4500000],
      backgroundColor: ['#4ac366', '#E0E0E0'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});
const CashFlowChart2 = document.getElementById('sendCashFlowChart2').getContext('2d');
const sendCashFlowChart2 = new Chart(CashFlowChart2, {
  type: 'doughnut',
  data: {
    labels: ['Projected Closings', 'Actual Closings'],
    datasets: [{
      data: [5, 5],
      backgroundColor: ['#007bff', '#ffc107'],
      hoverOffset: 4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: true, // Disable the tooltip
      },
    },
    cutout: window.innerWidth < 768 ? '35%' : '70%', // Adjusts based on screen size
  },
});

const CashFlowChart3 = document.getElementById('cashflowChart3').getContext('2d');

// Data for the chart
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Gross Commission Income',
      data: [150000, 170000, 142245, 160000, 175000, 185000, 200000, 190000, 180000, 165000, 190000, 180000],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Brokerage Commission & Fee Income',
      data: [50000, 60000, 83655, 85000, 90000, 95000, 100000, 95000, 92000, 87000, 98000, 94000],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Configuration for the chart
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: true, // Keep the aspect ratio intact
    plugins: {
        legend: {
          display: false, // Hide the legend
        },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            return `${context.dataset.label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`;
          },
        },
      },
    },
  },
};

// Render the chart
new Chart(CashFlowChart3, config);


const CashFlowChart4 = document.getElementById('cashflowChart4').getContext('2d');

// Data for the chart
const CHart4 = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Gross Commission Income',
      data: [150000, 170000, 142245, 160000, 175000, 185000, 200000, 190000, 180000, 165000, 190000, 180000],
      borderColor: '#ffe38e',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Brokerage Commission & Fee Income',
      data: [50000, 60000, 83655, 85000, 90000, 95000, 100000, 95000, 92000, 87000, 98000, 94000],
      borderColor: '#061980',
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
};

// Configuration for the chart
const config1 = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: true, // Keep the aspect ratio intact
    plugins: {
        legend: {
          display: false, // Hide the legend
        },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            return `${context.dataset.label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value / 1000}k`;
          },
        },
      },
    },
  },
};

// Render the chart
new Chart(CashFlowChart4, config1);


const ctxCashFlow1 = document.getElementById('barChartCashFlow1').getContext('2d');
const barChartCashFlow1 = new Chart(ctxCashFlow1, {
  type: 'bar',
  data: {
    labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Data',
      data: [682, 400, 900, 600, 200, 500, 100, 745, 273, 823, 823, 563],
      backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue color
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`
        }
      },
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Month',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false
          ,
          text: 'Values',
        },
        ticks: {
          stepSize: 200,
        },
      },
    }
  }
});



const ctxCashFlow2 = document.getElementById('barChartCashFlow2').getContext('2d');
const barChartCashFlow2 = new Chart(ctxCashFlow2, {
  type: 'bar',
  data: {
    labels:  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Data',
      data: [682, 400, 900, 600, 200, 500, 100, 745, 273, 823, 823, 563],
      backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue color
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`
        }
      },
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Month',
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: false
          ,
          text: 'Values',
        },
        ticks: {
          stepSize: 200,
        },
      },
    }
  }
});

// Summary
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabsSummary a");
  const panels = document.querySelectorAll(".tab-panel-summary");

  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");

      // Show the corresponding panel
      const tabId = tab.getAttribute("data-tab-summary");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
 // Input validation
 document.querySelectorAll('input').forEach(input => {
  input.addEventListener('blur', function () {
    if (this.value === '') {
      this.classList.add('error');
    } else {
      this.classList.remove('error');
    }
  });
});


  // Function to create tabs based on user selection
  document.getElementById('user-select').addEventListener('change', function(event) {
    var selectedUser = event.target.value;
    
    // Hide the previous tab content if it exists
    hidePreviousTab();

    // Create new tab for the selected user and filter table rows
    if (selectedUser) {
      createTab(selectedUser);
      filterTableRows(selectedUser);
    }
  });

  // Function to create tabs dynamically with a table
  function createTab(user) {
    var tabContainer = document.getElementById('tab-container-details');
    
    // Check if tab already exists
    if (!document.getElementById(user + '-tab')) {
      var tab = document.createElement('div');
      tab.id = user + '-tab';
      tab.style.border = 'none';
      tab.style.padding = '10px';
      tab.style.margin = '5px';

      // Create a table inside the tab for the selected user
      var tableHTML = `
        <table style="width: 100%; border: none;">
          <thead>
            <tr>
              <th>Month-August</th>
              <th>Leads</th>
              <th>Leads Count</th>
              <th>Points</th>
              <th>Power Hours</th>
              <th>Leads On/Off</th>
            </tr>
          </thead>
          <tbody>
            <!-- Rows will be populated based on selected user -->
            <tr data-user="${user}">
              <td>08/01/2020</td>
              <td>8</td>
              <td>90</td>
              <td>0</td>
              <td>Off</td>
              <td><00</td>
            </tr>
            <tr data-user="${user}">
              <td>08/01/2020</td>
              <td>8</td>
              <td>90</td>
              <td>0</td>
              <td>Off</td>
              <td><00</td>
            </tr>
            <tr data-user="${user}">
              <td>08/01/2020</td>
              <td>8</td>
              <td>90</td>
              <td>0</td>
              <td>Off</td>
              <td><00</td>
            </tr>
            <tr data-user="${user}">
              <td>08/01/2020</td>
              <td>8</td>
              <td>90</td>
              <td>0</td>
              <td>Off</td>
              <td><00</td>
            </tr>
          </tbody>
        </table>
      `;

      // Insert the table HTML into the tab
      tab.innerHTML = tableHTML;

      // Append to tab container
      tabContainer.appendChild(tab);
    }
  }

  // Function to filter table rows based on selected user
  function filterTableRows(user) {
    var rows = document.querySelectorAll('#data-table-3 tbody tr');
    rows.forEach(function(row) {
      var rowUser = row.getAttribute('data-user');
      if (rowUser === user || user === '') {
        row.style.display = ''; // Show the row
      } else {
        row.style.display = 'none'; // Hide the row
      }
    });
  }

  // Function to hide the previously selected tab
  function hidePreviousTab() {
    var tabContainer = document.getElementById('tab-container-details');
    var existingTabs = tabContainer.querySelectorAll('div');
    
    // Hide all tabs
    existingTabs.forEach(function(tab) {
      tab.style.display = 'none'; // Hide each tab
    });
  }
  

  // Dashboard dialog box
const dialogBoxDashboard = document.getElementById('dialog-box-dashboard');
const closeDialogDashboard = document.getElementById('close-dialog-dashboard');

const applyButton = dialogBoxDashboard.querySelector('button[style*="background: #4CAF50"]');
const cancelButton = dialogBoxDashboard.querySelector('button[style*="background: #fff"]');

const clickableCellsDashboard = document.querySelectorAll('.clickableCellsDashboard');
clickableCellsDashboard.forEach(cell => {
  cell.addEventListener('click', () => {
    dialogBoxDashboard.classList.remove('hidden'); 
  });
});

closeDialogDashboard.addEventListener('click', () => {
  dialogBoxDashboard.classList.add('hidden'); 
});

applyButton.addEventListener('click', () => {
  dialogBoxDashboard.classList.add('hidden'); 
});

cancelButton.addEventListener('click', () => {
  dialogBoxDashboard.classList.add('hidden'); 
});

// Close the dialog if clicking outside of it
dialogBoxDashboard.addEventListener('click', (e) => {
  if (e.target === dialogBoxDashboard) {
    dialogBoxDashboard.classList.add('hidden'); 
  }
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
    <div class="connected-call-header">
      <div class="call-info">
        <h3 style="margin: 0; color: #fff;">+1-202-555-2546</h3>
        <span style="color: #ccc; font-size: 14px;">Connected Call</span>
      </div>
      <div class="call-duration">
        <span style="color: #fff; font-size: 14px;">⏱ 2:40</span>
      </div>
    </div>
    <div class="quick-connect-container">
      <div class="quick-connect-input">
        <select class="flag-select">
          <option value="us">🇺🇸</option>
          <option value="uk">🇬🇧</option>
          <option value="fr">🇫🇷</option>
        </select>
        <input type="text" placeholder="Quick Connect or Number" class="quick-connect-field">
      </div>
      <div class="quick-actions">
        <button id="number-pad-btn" class="action-btn">Number Pad</button>
        <button class="call-btn">Call</button>
      </div>
    </div>
  `;

  // Add event listener for Number Pad button
  const numberPadBtn = document.getElementById("number-pad-btn");
  numberPadBtn.addEventListener("click", () => {
    showNumberPad();
  });
}
