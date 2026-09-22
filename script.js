const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function sendEmail()    {
    const templateParams = {
        name: document.querySelector('#contact-name').value,
        email: document.querySelector('#contact-email').value,
        subject: document.querySelector('#contact-subject').value,
        message: document.querySelector('#contact-message').value,
        phoneNumber: document.querySelector('#contact-phone').value,
        time: Date(),
    };
    if( templateParams.name != "" && templateParams.email != "" && templateParams.subject != "" && templateParams.message != "")    {
        emailjs.send('service_97h76w9', 'template_ok8l80p', templateParams).then(
            (response) => {
                alert("Email sent successfully!");
                document.getElementById('email-form').reset();
            },
            (error) => {
                alert("Email failed to send.");
            },
        );
    }
    else{
        alert("Failed to send email. Please make sure to fill in all fields marked with *");
    }
}