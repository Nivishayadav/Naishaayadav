
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');

    // Add active class to clicked button
    document.getElementById(sectionId + '-btn').classList.add('active');
}

// Add smooth scrolling to top when switching sections
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click event to all nav buttons
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', smoothScrollToTop);
});
