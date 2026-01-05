/* Uitbrekers.nl - Main Script */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Form Submission (Mock)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = 'Versturen...';

            // Simulate server request
            setTimeout(() => {
                form.innerHTML = `
                    <div class="text-center" style="padding: 2rem; background: var(--accent); border-radius: var(--radius);">
                        <h3 style="color: var(--primary);">Bedankt!</h3>
                        <p>We hebben je aanvraag ontvangen. Je ontvangt binnen 24 uur een reactie.</p>
                        <button class="btn btn-outline" style="margin-top: 1rem;" onclick="window.location.reload()">Nog een aanvraag doen</button>
                    </div>
                `;
            }, 1000);
        });
    });

    // Simple scroll anchor smoothness
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.textContent = '☰';
                }
            }
        });
    });
});
