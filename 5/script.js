document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Perform form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('请填写所有字段！');
            return;
        }

        // Simulate form submission (replace with actual submission code)
        setTimeout(function() {
            form.reset();
            confirmation.style.display = 'block';
            setTimeout(function() {
                confirmation.style.display = 'none';
            }, 3000); // Hide confirmation message after 3 seconds
        }, 1000); // Simulate server delay with 1 second timeout
    });
});
