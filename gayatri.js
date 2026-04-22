function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('nav button');

    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remove active class from all buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';

    // Add active class to clicked button
    event.target.classList.add('active');
}