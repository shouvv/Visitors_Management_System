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

    // Update time function
    function updateTime() {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById('current-date').textContent = dateString;
        document.getElementById('current-time').textContent = timeString;
    }
    setInterval(updateTime, 1000);

    // Show/hide appointee fields
    document.getElementById('appointee').addEventListener('change', function () {
        const otherAppointeeField = document.getElementById('other_appointee');
        const appointeeEmailField = document.getElementById('appointee_email');
        if (this.value === 'others') {
            otherAppointeeField.classList.add('visible');
            otherAppointeeField.classList.remove('hidden');
        } else {
            otherAppointeeField.classList.add('hidden');
            otherAppointeeField.classList.remove('visible');
        }
        if (this.value) {
            appointeeEmailField.classList.add('visible');
            appointeeEmailField.classList.remove('hidden');
        } else {
            appointeeEmailField.classList.add('hidden');
            appointeeEmailField.classList.remove('visible');
        }
    });

    // Set current time to time_in input
    document.getElementById('time_in').value = new Date().toLocaleString();

    // Aadhaar verification
    document.getElementById('adhaar').addEventListener('input', function() {
        const aadhaarInput = this.value;
        const verifiedBadge = document.getElementById('verified-badge');
        const aadhaarRegex = /^\d{12}$/;

        if (aadhaarRegex.test(aadhaarInput)) {
            verifiedBadge.style.display = 'inline';
        } else {
            verifiedBadge.style.display = 'none';
        }
    });
});
