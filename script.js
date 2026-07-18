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

    // Make project cards fully clickable to open the modal
    document.querySelectorAll(".project-card").forEach(card => {
        card.style.cursor = "pointer";
        card.addEventListener("click", () => {
            const learnMore = card.querySelector(".open-modal");
            if (learnMore) {
                const projectId = learnMore.getAttribute("data-project");
                openModal(projectId);
            }
        });

        // Prevent double triggers when clicking the Learn More link directly
        const learnMore = card.querySelector(".open-modal");
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
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                    // Add subtle fade-in keyframe effect programmatically
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transition = "opacity 0.4s ease";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // ==========================================================================
    // PROJECT MODALS DATA (CONTENT FROM CV)
    // ==========================================================================
    const projectDetails = {
        "woodoku": {
            title: "Woodoku",
            image: "woodoku_banner.jpg",
            subtitle: "Tripledot Studios",
            meta: {
                role: "Senior Game Designer",
                duration: "Sep 2022 - Feb 2026",
                platform: "Mobile (iOS & Android)",
                metrics: "150M+ Downloads"
            },
            body: `
                <div class="project-stats-grid">
                    <div class="project-stat-card">
                        <div class="project-stat-number">150M+</div>
                        <div class="project-stat-label">Downloads</div>
                    </div>
                    <div class="project-stat-card">
                        <div class="project-stat-number">+20%</div>
                        <div class="project-stat-label">Engagement</div>
                    </div>
                    <div class="project-stat-card">
                        <div class="project-stat-number">+15%</div>
                        <div class="project-stat-label">ARPDAU</div>
                    </div>
                    <div class="project-stat-card">
                        <div class="project-stat-number">+5%</div>
                        <div class="project-stat-label">Retention</div>
                    </div>
                </div>

                <h4>Woodoku Details</h4>
                <ul>
                    <li>Owned all gameplay elements; designed systems, levels and features.</li> 
                    <li>Created a level extension that increased engagement by 20% and ARPDAU by 15%.</li> 
                    <li>Engineered new shape-generation algorithms that boosted retention by 5%.</li> 
                    <li>Designed a custom level editor to speed up and improve level production.</li>
                    <li>Curated and optimised 152 levels weekly for LiveOps.</li>
                </ul>

                <h4>Role Overview</h4>
                <ul>
                    <li><strong>Core Responsibilities:</strong> Owned the player experience and all gameplay content for Woodoku and Woodoku Blast, reporting directly to the CPO and Level Design Director. Created detailed design documents and wireframes, designed levels and used data and experience to prioritise content and devise roadmaps.</li>
                    <li><strong>Leadership & Mentorship:</strong> Led a 3-person level design team (Lead, Senior, Mid-level); successfully mentored one Junior to Mid-level to Senior and another from Junior to Mid-level. Successfully completed an 8-module corporate management development programme.</li>
                    <li><strong>Team Collaboration:</strong> Directed the production of features and mechanics, working closely with Product, Analysts, Development, Art and QA to create the best possible features from pre-production to post-release.</li>
                    <li><strong>Data & Analytics:</strong> Utilised analysis skills and ran intensive experiments to deeply understand player behaviour, evaluating the impact of design iterations to guide feature improvements and future roadmaps.</li>
                </ul>
                
                <div class="modal-links-container">
                    <a href="https://woodoku.com" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Official Website
                    </a>
                    <a href="https://apps.apple.com/us/app/woodoku-wood-block-puzzles/id1500483471" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        App Store (iOS)
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tripledot.woodoku" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Google Play (Android)
                    </a>
                </div>
            `
        },
        "woodoku-blast": {
            title: "Woodoku Blast",
            image: "woodoku_blast_banner.jpg",
            subtitle: "Tripledot Studios",
            meta: {
                role: "Senior Game Designer",
                duration: "Sep 2022 - Feb 2026",
                platform: "Mobile (iOS & Android)",
                metrics: "20M+ Downloads"
            },
            body: `
                <div class="project-stats-grid">
                    <div class="project-stat-card">
                        <div class="project-stat-number">20M+</div>
                        <div class="project-stat-label">Downloads</div>
                    </div>
                    <div class="project-stat-card">
                        <div class="project-stat-number">+10%</div>
                        <div class="project-stat-label">ARPDAU</div>
                    </div>
                    <div class="project-stat-card">
                        <div class="project-stat-number">+5%</div>
                        <div class="project-stat-label">Retention</div>
                    </div>
                </div>

                <h4>Woodoku Blast Details</h4>
                <ul>
                    <li>Owned the design and production of all gameplay elements, systems and UX design, including haptics and audio.</li>
                    <li>Created features that increased ARPDAU by 10%.</li>
                    <li>Devised extensive A/B testing and data-driven level design iterations to deeply understand player behaviour and boost retention by 5%.</li>
                </ul>

                <h4>Role Overview</h4>
                <ul>
                    <li><strong>Core Responsibilities:</strong> Owned the player experience and all gameplay content for Woodoku and Woodoku Blast, reporting directly to the CPO and Level Design Director. Created detailed design documents and wireframes, designed levels and used data and experience to prioritise content and devise roadmaps.</li>
                    <li><strong>Leadership & Mentorship:</strong> Led a 3-person level design team (Lead, Senior, Mid-level); successfully mentored one Junior to Mid-level to Senior and another from Junior to Mid-level. Successfully completed an 8-module corporate management development programme.</li>
                    <li><strong>Team Collaboration:</strong> Directed the production of features and mechanics, working closely with Product, Analysts, Development, Art and QA to create the best possible features from pre-production to post-release.</li>
                    <li><strong>Data & Analytics:</strong> Utilised analysis skills and ran intensive experiments to deeply understand player behaviour, evaluating the impact of design iterations to guide feature improvements and future roadmaps.</li>
                </ul>
                
                <div class="modal-links-container">
                    <a href="https://woodoku.com" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Official Website
                    </a>
                    <a href="https://apps.apple.com/us/app/woodoku-blast-block-puzzle/id1631835728" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        App Store (iOS)
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tripledot.woodoku.blast" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Google Play (Android)
                    </a>
                </div>
            `
        },
        "penguin-slide": {
            title: "Penguin Slide",
            image: "penguin_slide.png",
            subtitle: "Walder Games",
            meta: {
                role: "Creator",
                duration: "Feb 2026 - Present",
                platform: "Android & Web",
                metrics: "Published on itch.io"
            },
            body: `
                <h4>Overview & Development Scope</h4>
                <p>Designed, developed and self-published <em>Penguin Slide</em>, an arcade mobile and web game. This project demonstrates end-to-end solo game development capabilities.</p>
                
                <h4>Contributions & Implementation Details</h4>
                <ul>
                    <li>Programmed all gameplay controllers, mechanics, physics, menus and level infrastructure in Unity using C#.</li>
                    <li>Crafted all visual assets, user interface layouts, sprite sheets and character designs using Aseprite.</li>
                    <li>Composed and produced the original soundtrack and all sound effects using Ableton.</li>
                    <li>Utilised Antigravity coding tools to optimise and accelerate programming development.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://waldergames.itch.io/penguin-slide" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Play on itch.io
                    </a>
                </div>
            `
        },
        "meathook": {
            title: "Meathook",
            image: "meathook_banner.jpg",
            subtitle: "Indie Title by Alex Rassloff",
            meta: {
                role: "Design Consultant / Composer",
                duration: "Feb 2025 - Jul 2026",
                platform: "PC (Steam)",
                metrics: "Indie Game Soundtrack"
            },
            body: `
                <h4>Design Consultation Scope</h4>
                <ul>
                    <li>Consulted on all aspects of the game’s design, defining player progression, user flows, level design and difficulty.</li>
                    <li>Utilised extensive design experience to detect bugs and refine core mechanic decisions.</li>
                </ul>

                <h4>Audio Production & Composition</h4>
                <ul>
                    <li>Co-wrote, produced, mixed and mastered the official game soundtrack under the musical alias <strong>HYPNO</strong>.</li>
                    <li>Designed atmospheric soundscapes and mixed spatial audio levels to enhance immersion.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/3644930/MEATHOOK/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                    <a href="https://store.steampowered.com/app/4808380/MEATHOOK_Soundtrack/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View Soundtrack
                    </a>
                </div>
            `
        },
        "brix": {
            title: "BRIX! Block Blast",
            image: "brix_banner.jpg",
            imagePosition: "left center",
            subtitle: "Playtika",
            meta: {
                role: "Game Designer",
                duration: "Jun 2020 - Jun 2022",
                platform: "Mobile (iOS & Android)",
                metrics: "BRIX! Blast Friends & Rivals"
            },
            body: `
                <h4>Overview & Responsibilities</h4>
                <p>Collaborated closely with the Product Lead as the sole game designer in the London studio, owning game design pipelines, features, levels and specs for <em>BRIX! Blast Friends</em> and <em>BRIX! Blast Rivals</em>.</p>
                
                <h4>Key Achievements & Features Designed</h4>
                <ul>
                    <li>Designed and curated dozens of game features, drafting detailed specification sheets, wireframes and UI mockups from ideation to final build.</li>
                    <li>Solely responsible for level design, utilising analytics to identify problematic levels, optimise difficulty spikes and boost player retention.</li>
                    <li>Acted as the cross-functional coordinator aligning developer and artist pipelines with design visions.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://play.google.com/store/apps/details?id=com.generagames.brixcandyblockblast&hl=en_GB&gl=US" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Google Play Link
                    </a>
                </div>
            `
        },
        "solitaire": {
            title: "Solitaire.com",
            image: "solitaire_banner.png",
            subtitle: "Tripledot Studios",
            meta: {
                role: "Senior Game Designer",
                duration: "Sep 2022 - Feb 2026",
                platform: "Mobile (iOS & Android)",
                metrics: "Classic Cards Game"
            },
            body: `
                <h4>Overview & Key Responsibilities</h4>
                <p>Created and curated gameplay features, managed live operations and designed fresh levels for Tripledot's flagship classic cards game.</p>
                
                <h4>Key Achievements & Technical Contributions</h4>
                <ul>
                    <li>Designed new levels and managed weekly LiveOps tasks, keeping card configurations fresh and optimised.</li>
                    <li>Collaborated closely with the Product Manager to conceptualise, wireframe and devise new features to boost player engagement.</li>
                    <li>Monitored gameplay analytics to identify optimisation opportunities and balance game progression.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://solitaire.com/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Official Website
                    </a>
                    <a href="https://apps.apple.com/us/app/solitaire-com-classic-cards/id1191435163" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        App Store (iOS)
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.tripledot.solitaire" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Google Play (Android)
                    </a>
                </div>
            `
        },
        "adventure-pals": {
            title: "The Adventure Pals",
            image: "adventure_pals_banner.jpg",
            subtitle: "Massive Monster",
            meta: {
                role: "Lead QA & Level Designer",
                duration: "Oct 2015 - Aug 2016",
                platform: "Xbox, PlayStation, Nintendo Switch & PC",
                metrics: "Highly Rated Platformer"
            },
            body: `
                <h4>Jay Armstrong, Co-Founder Statement</h4>
                <p style="font-style: italic; border-left: 2px solid var(--accent); padding-left: 12px; margin-bottom: 20px;">
                    "Your dedication, attitude and all round personality have made you a joy to work with."
                </p>

                <h4>Level Design & Mechanics Creation</h4>
                <ul>
                    <li>Designed and curated over 50% of the game levels for <em>The Adventure Pals</em>, planning pacing and level flow, puzzle and combat variations and difficulty curves.</li>
                    <li>Carefully handcrafted puzzle and combat variety to ensure a compelling and balanced experience.</li>
                    <li>Designed various interactive game objects and mechanics to improve gameplay variety.</li>
                    <li>Advised on the prototyping of new mechanics, iterating on them until they felt great to play.</li>
                </ul>

                <h4>Quality Assurance (QA) Leadership</h4>
                <ul>
                    <li>Responsible for all QA test plans, level curation and build stability testing.</li>
                    <li>Tracked bugs, organised user feedback and documented issues directly, ensuring reliable stability at release.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/396710/The_Adventure_Pals/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                    <a href="https://massivemonster.com/games/the-adventure-pals" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Official Website
                    </a>
                    <a href="https://www.youtube.com/watch?v=qLpCBxkYmTo" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Watch Trailer
                    </a>
                </div>
            `
        },
        "never-give-up": {
            title: "Never Give Up",
            image: "steam_609420_header.jpg",
            subtitle: "Massive Monster",
            meta: {
                role: "Level Designer",
                duration: "Oct 2015 - Aug 2016",
                platform: "Xbox, PlayStation, Nintendo Switch & PC",
                metrics: "Hardcore Platformer Hit"
            },
            body: `
                <h4>Overview & Design Pacing</h4>
                <p>Designed a multitude of levels with varying difficulty for the challenging platformer <em>Never Give Up</em>. Handled key gameplay balancing, platform structures and hazard layouts.</p>
                
                <h4>Key Details & Implementations</h4>
                <ul>
                    <li>Designed dozens of challenging levels, refining flow and difficulty.</li>
                    <li>Balanced timing of hazards and obstacles to create satisfying challenges.</li>
                    <li>Developed deep understanding of player pacing and flows and progressive difficulty balancing to industry standards.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://massivemonster.co/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        Official Website
                    </a>
                    <a href="https://store.steampowered.com/app/609420/Never_Give_Up/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Steam Page
                    </a>
                    <a href="https://www.nintendo.com/store/products/never-give-up-switch/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Nintendo Switch
                    </a>
                    <a href="https://www.gog.com/en/game/never_give_up" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        GOG Page
                    </a>
                    <a href="https://www.youtube.com/watch?v=4F30ffYkZIg" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Watch Trailer
                    </a>
                </div>
            `
        },
        "jalopy": {
            title: "Jalopy",
            image: "steam_446020_header.jpg",
            subtitle: "Excalibur Publishing",
            meta: {
                role: "Quality Assurance Tester",
                duration: "Oct 2015 - Aug 2016",
                platform: "PC (Steam)",
                metrics: "10+ Shipped Steam Titles"
            },
            body: `
                <h4>Overview & QA Scope</h4>
                <p>Executed comprehensive QA testing for identifying, classifying and reporting bugs for the unique road-trip simulation title <em>Jalopy</em> on Steam. Logged detailed reports for issues relating to design, mechanics, visuals and stability.</p>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/446020/Jalopy_The_Road_Trip_Driving_Indie_Game/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                    <a href="https://www.gog.com/en/game/jalopy" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        GOG Page
                    </a>
                    <a href="https://www.xbox.com/en-us/games/store/jalopy/9nh6kd1gg2pf" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Xbox Page
                    </a>
                </div>
            `
        },
        "shoppe-keep": {
            title: "Shoppe Keep",
            image: "steam_381120_header.jpg",
            subtitle: "Excalibur Publishing",
            meta: {
                role: "Quality Assurance Tester",
                duration: "Oct 2015 - Aug 2016",
                platform: "PC (Steam)",
                metrics: "Highly Popular Simulation Title"
            },
            body: `
                <h4>Overview & QA Scope</h4>
                <p>Responsible for identifying, classifying and reporting bugs for the popular fantasy merchant simulator <em>Shoppe Keep</em> on Steam. Logged detailed reports for issues relating to design, mechanics, visuals and stability.</p>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/381120/Shoppe_Keep/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                    <a href="https://store.playstation.com/en-us/product/UP4322-CUSA08552_00-SHOPPEKEEP000001" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        PlayStation Page
                    </a>
                    <a href="https://www.xbox.com/en-us/games/store/shoppe-keep/c2ldwzlvz2pb" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Xbox Page
                    </a>
                </div>
            `
        },
        "world-ship-simulator": {
            title: "World Ship Simulator",
            image: "steam_403980_header.jpg",
            subtitle: "Excalibur Publishing",
            meta: {
                role: "Quality Assurance Tester",
                duration: "Oct 2015 - Aug 2016",
                platform: "PC (Steam)",
                metrics: "Maritime Simulation"
            },
            body: `
                <h4>Overview & QA Scope</h4>
                <p>Led comprehensive QA testing to identify, classify and report bugs for maritime vehicle simulation <em>World Ship Simulator</em> on Steam. Logged detailed reports for issues relating to design, mechanics, visuals and stability.</p>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/403980/World_Ship_Simulator/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                </div>
            `
        },
        "enforcer": {
            title: "Enforcer",
            image: "steam_318220_header.jpg",
            subtitle: "Excalibur Publishing",
            meta: {
                role: "Quality Assurance Tester",
                duration: "Oct 2015 - Aug 2016",
                platform: "PC (Steam)",
                metrics: "Police Action Simulator"
            },
            body: `
                <h4>Overview & QA Scope</h4>
                <p>Responsible for comprehensive QA testing to identify, classify and report bugs for the action-simulation police title, <em>Enforcer: Police Crime Action</em>, on Steam. Logged detailed reports for issues relating to design, mechanics, visuals and stability.</p>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/318220/Enforcer_Police_Crime_Action/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                </div>
            `
        },
        "circuit-breakers": {
            title: "Circuit Breakers",
            image: "steam_390870_header.jpg",
            subtitle: "Excalibur Publishing",
            meta: {
                role: "Quality Assurance Tester",
                duration: "Oct 2015 - Aug 2016",
                platform: "PC (Steam) & Console",
                metrics: "Twin-Stick Arcade Shooter"
            },
            body: `
                <h4>Overview & QA Scope</h4>
                <p>Performed QA testing for identifying, classifying and reporting bugs for the fast-paced multiplayer twin-stick arcade shooter, <em>Circuit Breakers</em>, on Steam and consoles. Logged detailed reports for issues relating to design, mechanics, visuals and stability.</p>
                <div class="modal-links-container">
                    <a href="https://store.steampowered.com/app/390870/Circuit_Breakers/" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        View on Steam
                    </a>
                    <a href="https://store.playstation.com/en-us/product/UP4322-CUSA06764_00-CIRCUITBREAKERS0" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        PlayStation Page
                    </a>
                    <a href="https://www.xbox.com/en-us/games/store/circuit-breakers/c2p467hb8mb3" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Xbox Page
                    </a>
                </div>
            `
        },
        "dissertation": {
            title: "Dissertation Project",
            image: "dissertation_banner.png",
            subtitle: "Bournemouth University",
            meta: {
                role: "Student Researcher & Developer",
                duration: "Sep 2018 - Jun 2019",
                platform: "Mobile (Android)",
                metrics: "Academic Grade: 75%"
            },
            body: `
                <h4>Overview & Research Goals</h4>
                <p>Completed a research-based dissertation project involving video games developed for mobile. The study focused on validating the positive cognitive effects of video games on the physical reaction-time of players.</p>
                
                <h4>Key Details & Implementations</h4>
                <ul>
                    <li>Programmed a series of reaction-time testing games in Unity (C#).</li>
                    <li>Gathered gameplay metrics from dozens of test players, recording accuracy and latency.</li>
                    <li>Authored a comprehensive analysis paper evaluating the correlation between video games and physical reaction times.</li>
                    <li>Achieved a grade of 75% for the final dissertation thesis and code implementation.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://github.com/JakerzW/StimuliProject" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        GitHub Repository
                    </a>
                </div>
            `
        },
        "university-combined": {
            title: "University Projects & Prototypes",
            image: "uni_projects_banner.jpg",
            subtitle: "Bournemouth University",
            meta: {
                role: "Student Developer",
                duration: "Sep 2016 - Jun 2019",
                platform: "Unreal Engine, Unity, C++, C#, Maya",
                metrics: "Academic Portfolio"
            },
            body: `
                <h4>Archer & Archer 2</h4>
                <ul>
                    <li><strong>Archer:</strong> Programmed a classic 2D bow-and-arrow game from scratch in C++ using the Allegro graphics library.</li>
                    <li><strong>Archer 2:</strong> Built an arcade target shooter in Unity utilising the device's internal gyroscope and motion sensors for physics-based aim.</li>                    
                </ul>
 
                <h4>C++ Engine & Parallel Ray Tracer</h4>
                <ul>
                    <li><strong>Custom Game Engine:</strong> Wrote a component-based 3D game engine (GameObject structure) featuring core loops, collisions and OpenGL pipelines.</li>    
                    <li><strong>Parallel Ray Tracer:</strong> Developed a multithreaded rendering system in C++ allocating pixel segments to separate CPU cores, boosting render speeds by 300%.</li>
                </ul>
 
                <h4>Graphics & Asset Assignments</h4>
                <ul>
                    <li><strong>Unreal Level Design:</strong> Designed a cavern landscape focusing on pacing, guides and lighting contrast.</li>    
                    <li><strong>3D Asteroids:</strong> Built a rendering engine from scratch in C++ to draw vector lines and manage 3D physics collisions.</li>
                    <li><strong>Maya Modeling:</strong> Created a detailed vintage Formula 1 car mesh using blueprints, UV layouts and texture shaders.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://youtu.be/XCAlk5VJ4VY" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Archer Video
                    </a>
                    <a href="https://youtu.be/XCAlk5VJ4VY" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        F1 Model Video
                    </a>
                    <a href="https://youtu.be/COLdsJVZXMo" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Unreal Cave Video
                    </a>
                </div>
            `
        },
        "hypno-music": {
            title: "HYPNO",
            image: "audio_banner.jpg",
            subtitle: "Electronic Music Duo",
            meta: {
                role: "Music Producer / Composer",
                duration: "2020 - Present",
                platform: "Spotify, Apple Music, YouTube",
                metrics: "3 Singles Released"
            },
            body: `
                <h4>Music Production & Composition</h4>
                <ul>
                    <li>Co-wrote, produced, mixed and mastered 3 electronic singles released on all major music platforms.</li>
                    <li>Co-wrote, produced, mixed and mastered the official game soundtrack.</li>
                    <li>Crafted immersive level soundtracks by developing atmospheric soundscapes with analog audio production and custom synthesiser presets.</li>
                    <li>Produced, mixed and mastered within Ableton.</li>
                </ul>

                <h4>Artwork Creation</h4>
                <ul>
                    <li>Photographed, designed and crafted the single album artwork within Photoshop.</li>
                </ul>

                <h4>Radio Play</h4>
                <ul>
                    <li>Featured on the radio by BBC Introducing.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://open.spotify.com/artist/5L1zGzU2XfD78Q1c69UaN7" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Listen on Spotify
                    </a>
                    <a href="https://www.youtube.com/channel/UCP0SOdpRvBw9lhYe7ZdmD7Q" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        YouTube
                    </a>
                </div>
            `
        },
        "swallows-band": {
            title: "Swallows",
            image: "swallows_banner.jpg",
            subtitle: "Rock Band",
            meta: {
                role: "Lead Guitarist / Songwriter",
                duration: "2017 - 2019",
                platform: "Spotify, Venues & Radio"
            },
            body: `
                <h4>Overview & Creative Role</h4>
                <p>Co-managed the rock band, serving as joint songwriter, website designer and marketer. Promoted the band to platforms, venues and producers across Italy and the UK.</p>
                
                <h4>Key Details</h4>
                <ul>
                    <li><strong>Songwriting & Art:</strong> Wrote original music and designed artwork for the singles.</li>
                    <li><strong>Recording & Production:</strong> Recorded with a Grammy award-winning producer, Tommaso Colliva, in Milan.</li>
                    <li><strong>Live Performance:</strong> Performed at venues and festivals across the UK.</li>
                    <li><strong>Management & PR:</strong> Managed finances, scheduled gigs and designed the band's web presence.</li>
                    <li><strong>Radio Play:</strong> Featured on the radio by BBC Introducing.</li>
                </ul>
                <div class="modal-links-container">
                    <a href="https://open.spotify.com/artist/7aFrAKyetGBymdENAQjJ9u" target="_blank" class="modal-link-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Listen on Spotify
                    </a>
                </div>
            `
        }

    };

    // ==========================================================================
    // MODAL CONTROL ACTIONS
    // ==========================================================================
    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalDetails = document.getElementById("modal-project-details");
    const modalTriggerButtons = document.querySelectorAll(".open-modal");

    function openModal(projectId) {
        const data = projectDetails[projectId];
        if (!data) return;

        // Construct modal inner HTML
        modalDetails.innerHTML = `
            ${data.image ? `<div class="modal-banner-wrapper" style="background-image: url('${data.image}')"><img src="${data.image}" alt="${data.title}" class="modal-banner-img" style="${data.imagePosition ? `object-position: ${data.imagePosition};` : ''}"></div>` : ''}
            <h3 class="modal-project-title">${data.title}</h3>
            <p class="modal-project-subtitle">${data.subtitle}</p>
            
            <div class="modal-meta-grid">
                <div class="modal-meta-item">
                    <label>Role</label>
                    <value>${data.meta.role}</value>
                </div>
                <div class="modal-meta-item">
                    <label>Duration</label>
                    <value>${data.meta.duration}</value>
                </div>
                <div class="modal-meta-item">
                    <label>Platform</label>
                    <value>${data.meta.platform}</value>
                </div>
            </div>
            
            <div class="modal-project-body">
                ${data.body}
            </div>
        `;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Disable scroll when modal is open
    }

    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto"; // Re-enable scroll
    }

    modalTriggerButtons.forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.getAttribute("data-project");
            openModal(projectId);
        });
    });

    if (modalClose && modalOverlay) {
        modalClose.addEventListener("click", closeModal);
        modalOverlay.addEventListener("click", closeModal);
    }

    // Close on Escape key press
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // ==========================================================================
    // CONTACT FORM INTERACTION
    // ==========================================================================
    const contactForm = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success-msg");

    if (contactForm && successMsg) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Simulating message submission
            contactForm.style.display = "none";
            successMsg.style.display = "block";
            successMsg.style.opacity = "0";

            setTimeout(() => {
                successMsg.style.transition = "opacity 0.4s ease";
                successMsg.style.opacity = "1";
            }, 50);
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
