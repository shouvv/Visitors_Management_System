document.addEventListener('DOMContentLoaded', function() {
    // Smooth page transitions
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = target;
            }, 500); // Adjust the time as needed
        });
    });

    // Remove fade-out class on page load
    window.addEventListener('load', function() {
        document.body.classList.remove('fade-out');
    });
});
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

setInterval(updateDateTime, 1000);
updateDateTime();