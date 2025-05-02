/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.education__content, .experience__content, .project__card, .skills__category',{interval: 200});

/*===== MODAL FUNCTIONALITY =====*/
// Get the modal and its elements
const modal = document.getElementById('confirmationModal');
const closeBtn = document.querySelector('.close-btn');
const modalMessage = document.getElementById('modalMessage');

// Close modal when clicking the close button
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        closeModal();
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Open modal with custom message
function openModal(message) {
    if (modal) {
        modalMessage.textContent = message || 'Your message has been sent successfully.';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Close modal
function closeModal() {
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

/*===== RESUME DOWNLOAD =====*/
const downloadButtons = document.querySelectorAll('#downloadResume, #footerDownloadResume');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary link to download the resume
        const link = document.createElement('a');
        link.href = 'assets/Adarsh_Tiwari_Resume.pdf'; // Path to your resume PDF
        link.download = 'Adarsh_Tiwari_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        openModal('Resume downloaded successfully!');
    });
});

/*===== CONTACT FORM WITH NODEMAILER =====*/
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const sendButton = document.getElementById('sendEmail');
    const formStatus = document.getElementById('formStatus');
    
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all fields';
                formStatus.className = 'form-status error';
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = 'Please enter a valid email address';
                formStatus.className = 'form-status error';
                return;
            }
            
            // Show sending status
            sendButton.value = 'Sending...';
            sendButton.disabled = true;
            
            // NodeMailer config (using EmailJS as a frontend solution)
            emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
            
            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: "Adarsh",
                message: message,
                to_email: "adarsh.tiwari.dev@gmail.com"
            };
            
            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    openModal('Your message has been sent successfully!');
                    contactForm.reset();
                    
                    // Reset button
                    sendButton.value = 'Send';
                    sendButton.disabled = false;
                })
                .catch(function(error) {
                    console.error('Error:', error);
                    formStatus.textContent = 'Failed to send message. Please try again.';
                    formStatus.className = 'form-status error';
                    
                    // Reset button
                    sendButton.value = 'Send';
                    sendButton.disabled = false;
                });
        });
    }
});
