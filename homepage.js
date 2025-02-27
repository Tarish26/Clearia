function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-300px"; // Close menu
    } else {
        sidebar.style.right = "0px"; // Open menu
    }
}

// ✅ Close sidebar when clicking outside
document.addEventListener("click", function(event) {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.querySelector(".menu-icon");
    let navLogo = document.querySelector(".nav-logo");

    if (!sidebar.contains(event.target) && event.target !== menuIcon && event.target !== navLogo) {
        sidebar.style.right = "-300px";
    }
});
