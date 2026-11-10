/* ==========================================================================
   PORTFOLIO INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Set Current Year dynamically
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear().toString();
    }

    // Set blurred backgrounds for project cards to fill letterbox/pillarbox gaps
    document.querySelectorAll(".project-img-wrapper").forEach(wrapper => {
        const img = wrapper.querySelector(".project-img");
        if (img && img.src) {
            wrapper.style.backgroundImage = `url('${img.src}')`;
        }
    });

    // Make recent project cards clickable to their dedicated page
    document.querySelectorAll(".recent-card").forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", (e) => {
            const targetUrl = card.getAttribute("data-href");
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });

        // Allow clicking the CTA button directly without conflict
        const ctaBtn = card.querySelector(".recent-cta-btn");
        if (ctaBtn) {
            ctaBtn.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }
    });

    // Make project cards fully clickable to their dedicated page
    document.querySelectorAll(".project-card").forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            const targetUrl = card.getAttribute("data-href");
            if (targetUrl) {
                window.location.href = targetUrl;
            }
        });

        // Allow clicking the Learn More link directly without conflict
        const learnMore = card.querySelector(".btn-text");
        if (learnMore) {
            learnMore.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }
    });


    // ==========================================================================
    // MOBILE NAVIGATION MENU
    // ==========================================================================
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Close menu when links are clicked (for mobile users)
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });

        // Close menu when clicking/tapping outside of menu and menu toggle button
        document.addEventListener("click", (e) => {
            if (navMenu.classList.contains("active")) {
                if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    navMenu.classList.remove("active");
                    menuToggle.classList.remove("active");
                }
            }
        });
    }

    // ==========================================================================
    // PORTFOLIO FILTER CONTROLS
    // ==========================================================================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                const isHighlight = card.getAttribute("data-highlight") === "true";
                const matches = (filterValue === "all") || 
                                ((filterValue === "highlights" || filterValue === "best") && isHighlight) || 
                                (category === filterValue);

                if (matches) {
                    card.style.display = "flex";
                    // Add subtle fade-in keyframe effect programmatically
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transition = "opacity 0.4s ease";
                    }, 50);
                } else {
                    card.style.display = "none";
                    card.style.opacity = "0";
                }
            });
        });
    });

    // ==========================================================================
    // CONTACT FORM INTERACTION
    // ==========================================================================
    const contactForm = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success-msg");

    if (contactForm && successMsg) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const data = new FormData(contactForm);

            fetch(contactForm.action, {
                method: "POST",
                body: data,
                headers: {
                    "Accept": "application/json"
                }
            }).then(response => {
                if (response.ok) {
                    contactForm.style.display = "none";
                    successMsg.style.display = "block";
                    successMsg.style.opacity = "0";

                    setTimeout(() => {
                        successMsg.style.transition = "opacity 0.4s ease";
                        successMsg.style.opacity = "1";
                    }, 50);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, "errors")) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("Oops! There was a problem submitting your form.");
                        }
                    });
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form.");
            });
        });
    }

    // ==========================================================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ==========================================================================
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target); // Trigger animation once
            }
        });
    }, observerOptions);

    // Apply reveal class elements
    const elementsToReveal = document.querySelectorAll(".project-card, .timeline-item, .skills-category, .stat-card");
    elementsToReveal.forEach(el => {
        el.classList.add("reveal");
        scrollObserver.observe(el);
    });

    // ==========================================================================
    // HERO SHOWREEL BACKGROUND & FULL VIDEO MODAL
    // ==========================================================================
    const heroSection = document.getElementById("hero");
    const heroBgVideo = document.getElementById("hero-bg-video");
    const watchShowreelBtn = document.getElementById("watch-showreel-btn");
    const showreelModal = document.getElementById("showreel-modal");
    const showreelModalClose = document.getElementById("showreel-modal-close");
    const showreelModalOverlay = document.getElementById("showreel-modal-overlay");
    const showreelFullVideo = document.getElementById("showreel-full-video");

    if (showreelFullVideo) {
        showreelFullVideo.volume = 0.5;
    }

    let isHeroInView = true;

    const openShowreelModal = () => {
        if (!showreelModal) return;
        showreelModal.classList.add("active");
        showreelModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        if (heroBgVideo) {
            heroBgVideo.pause();
        }

        if (showreelFullVideo) {
            showreelFullVideo.volume = 0.5;
            const playPromise = showreelFullVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // User can still press play manually if autoplay is restricted
                });
            }
        }
    };

    const closeShowreelModal = () => {
        if (!showreelModal || !showreelModal.classList.contains("active")) return;
        showreelModal.classList.remove("active");
        showreelModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (showreelFullVideo) {
            showreelFullVideo.pause();
        }

        if (heroBgVideo && isHeroInView) {
            const bgPlayPromise = heroBgVideo.play();
            if (bgPlayPromise !== undefined) {
                bgPlayPromise.catch(() => {});
            }
        }
    };

    if (watchShowreelBtn) {
        watchShowreelBtn.addEventListener("click", openShowreelModal);
    }
    if (showreelModalClose) {
        showreelModalClose.addEventListener("click", closeShowreelModal);
    }
    if (showreelModalOverlay) {
        showreelModalOverlay.addEventListener("click", closeShowreelModal);
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && showreelModal && showreelModal.classList.contains("active")) {
            closeShowreelModal();
        }
    });

    // Auto-pause background loop when hero section is scrolled out of view
    if (heroSection && heroBgVideo && "IntersectionObserver" in window) {
        const heroVideoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isHeroInView = entry.isIntersecting;
                const isModalOpen = showreelModal && showreelModal.classList.contains("active");
                if (entry.isIntersecting && !isModalOpen) {
                    const playPromise = heroBgVideo.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                    }
                } else {
                    heroBgVideo.pause();
                }
            });
        }, { threshold: 0.05 });

        heroVideoObserver.observe(heroSection);
    }

});



// Add extra helper styles for reveal animations programmatically to style.css if needed,
// but we already integrated smooth slide-up hover cards.
// We will define reveal class basic parameters in style.css or let JS handle active classes.
// Add styles for the .reveal class
const style = document.createElement("style");
style.innerHTML = `
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
