/**
 * CYBERNETIC COMMAND CORE - v1.0.4
 * Main Interactive JS Script for Sneha Technological Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 0. HERO NAME TYPING ENGINE
  // ==========================================
  const typingName = document.getElementById('hero-typing-name');
  if (typingName) {
    const textToType = typingName.textContent.trim() || "Sneha Chand";
    typingName.textContent = "";
    
    let charIndex = 0;
    
    function typeChar() {
      if (charIndex < textToType.length) {
        typingName.textContent += textToType.charAt(charIndex);
        charIndex++;
        
        // J.A.R.V.I.S. Organic Cadence: Adds a slight computational fluctuation
        // between 135ms and 175ms for a highly deliberate, real-time AI assembly feel.
        const organicInterval = Math.random() * 40 + 135;
        setTimeout(typeChar, organicInterval);
      } else {
        // Typing complete - trigger color shift & glow transition
        setTimeout(() => {
          typingName.classList.add('typing-finished');
        }, 400); // 400ms pause for Jarvis state stabilization
      }
    }
    
    // Deliberate initial boot sequence delay (600ms) to mirror J.A.R.V.I.S. loading
    setTimeout(typeChar, 600);
  }

  // ==========================================
  // 1. NEURAL PARTICLE BACKGROUND CANVAS
  // ==========================================
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const maxParticles = 65;

    // Resize handler
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle Blueprint
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // 1px to 3px
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
        // Cyber Theme Colors: Purple, Cyan, Magenta
        const colors = ['rgba(168, 85, 247, ', 'rgba(6, 182, 212, ', 'rgba(236, 72, 153, '];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bouncing walls
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.colorBase + this.alpha + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.colorBase.includes('168') ? '#a855f7' : (this.colorBase.includes('6') ? '#06b6d4' : '#ec4899');
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize Particle Database
    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < maxParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    initParticles();

    // Draw lines between proximate nodes (Cyber Neural Connection Network)
    function connectParticles() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dist = Math.hypot(particlesArray[a].x - particlesArray[b].x, particlesArray[a].y - particlesArray[b].y);
          if (dist < 100) {
            opacityValue = (1 - (dist / 100)) * 0.15;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacityValue})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Rendering Engine Loop
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // ==========================================
  // 2. INTERACTIVE COMMAND TERMINAL SYSTEM
  // ==========================================
  const termInput = document.getElementById('terminal-input');
  const termOutput = document.getElementById('terminal-output');
  const termBody = document.getElementById('terminal-body');
  const quickActions = document.querySelectorAll('.term-btn');

  const SYSTEM_RECORDS = {
    about: [
      "<span class='system'>[BIOGRAPHICAL SYSTEM ARCHIVE]</span>",
      "Full Name: Sneha Chand",
      "Function:  Computer Science Graduate &amp; MERN Stack Developer.",
      "Profile:   Tech enthusiast who loves transforming creative ideas into interactive digital experiences.",
      "Debate:    National Level Debater (hones communication, leadership, and analytical thinking).",
      "Creative:  Reader, writer, and sketch artist (shapes visual styling and UI aesthetics).",
      "Directives: Seeking entry-level IT / software developer role to grow as a professional engineer."
    ],
    skills: [
      "<span class='system'>[TECHNOLOGICAL STACK CONFIGURATIONS]</span>",
      " * FRONTEND:   React.js/MERN [82%] // Tailwind &amp; Bootstrap [80%] // HTML5 &amp; CSS3 [95%]",
      " * BACKEND:    Node.js/Express.js [78%] // MongoDB [80%] // PostgreSQL &amp; MySQL [75%]",
      " * LANGUAGES:  Java [90%] // DSA Algorithms [88%] // C/C++ &amp; Python [80%]",
      " * DEV TOOLS:  Git &amp; GitHub [88%] // Postman &amp; REST [70%] // Vercel &amp; Netlify [70%]",
      " * COGNITIVE:  Debate &amp; Public Speaking // Analytical Logic // Presentation &amp; Tutoring"
    ],
    projects: [
      "<span class='system'>[ACTIVE NODE PROJECT DIRECTORY]</span>",
      " * AetherChat Comm Node      - Real-time chat application (React, Socket.io, Node, Mongo).",
      " * MirrorLink Web Clones    - High-fidelity responsive replica interfaces.",
      " * Synaptic UI Experiences  - Interactive web templates utilizing dynamic CSS custom triggers.",
      "Type 'projects --full' to view advanced metrics on these nodes."
    ],
    education: [
      "<span class='system'>[ACADEMIC DATABASE MATRIX]</span>",
      " * B.Sc. Computer Science (2023 - 2026) // COMPLETED (GRADUATED)",
      "   - College: Government Autonomous College, Sundargarh, Odisha",
      "   - Affiliation: Sambalpur University",
      "   - Standing: 8.23 CGPA (Graduated)",
      " * Senior Secondary (XII) - Science (2023)",
      "   - Council: CHSE, Womens College, Jharsuguda, Odisha",
      "   - Score: 66.66%",
      " * Secondary (X) - ICSE (2021)",
      "   - School: St. Mary’s Higher Secondary School, Jharsuguda",
      "   - Score: 95% (Distinction Node)"
    ],
    contact: [
      "<span class='system'>[ROUTING SECURE LINKS]</span>",
      " * Email:    <a href='mailto:snehachand1912@gmail.com' class='text-neon-cyan'>snehachand1912@gmail.com</a>",
      " * Phone:    <a href='tel:+917894385422' class='text-neon-cyan'>+91-7894385422</a>",
      " * GitHub:   <a href='https://github.com/sc331912' target='_blank' class='text-neon-purple'>github.com/sc331912</a>",
      " * LinkedIn: <a href='#' class='text-neon-pink'>linkedin.com/in/sneha-chand-dev</a>"
    ],
    help: [
      "Available command codes:",
      "  <span class='user'>about</span>     - Decrypt Sneha's biographical core archives.",
      "  <span class='user'>education</span> - Fetch academic database registry.",
      "  <span class='user'>skills</span>    - List technological stack proficiencies.",
      "  <span class='user'>projects</span>  - Review developed active software nodes.",
      "  <span class='user'>contact</span>   - Retrieve secure email/social nodes.",
      "  <span class='user'>sysinfo</span>   - Run local system diagnostics and checks.",
      "  <span class='user'>clear</span>     - Wipe terminal log buffers.",
      "  <span class='user'>banner</span>    - Re-print systems welcome title."
    ]
  };

  // Welcome banner recall
  function printWelcomeBanner() {
    termOutput.innerHTML += `
      <div class='term-line'>
        <span class='meta'>[SYSTEM INTERFACE ONLINE // OPERATIONAL STATUS: STABLE]</span><br>
        Welcome back, operator. Input secure command payload below.
      </div>
    `;
    scrollTerminal();
  }

  // Auto-scroll terminal function
  function scrollTerminal() {
    termBody.scrollTop = termBody.scrollHeight;
  }

  // Print system typing response
  function printTermOutput(lines) {
    lines.forEach((line) => {
      termOutput.innerHTML += `<div class='term-line'>${line}</div>`;
    });
    scrollTerminal();
  }

  // Parse terminal keyboard triggers
  if (termInput) {
    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const fullCmd = termInput.value.trim();
        const tokens = fullCmd.toLowerCase().split(' ');
        const cmd = tokens[0];

        // Print typed command line first
        termOutput.innerHTML += `<div class='term-line'><span class='user'>sneha@chand-node:~</span><span class='meta'>$</span> ${fullCmd}</div>`;

        if (cmd) {
          if (cmd === 'clear') {
            termOutput.innerHTML = '';
          } else if (cmd === 'banner') {
            printWelcomeBanner();
          } else if (cmd === 'sysinfo') {
            const time = new Date().toISOString();
            printTermOutput([
              `<span class='system'>[DIAGNOSTICS PROTOCOLS TRIGGERED]</span>`,
              `TIMESTAMP: ${time}`,
              `PLATFORM:  ${navigator.platform}`,
              `STABILITY: 99.982% // SYSTEM STATUS: NOMINAL`,
              `LATENCY:   21.4ms (Sector-7 mainframe sync)`
            ]);
          } else if (cmd === 'projects' && tokens[1] === '--full') {
            printTermOutput([
              `<span class='system'>[RETRIEVING FULL PROJECT SPECIFICATIONS]</span>`,
              `AetherChat:  Secure real-time web socket pipelines using Socket.io.`,
              `MirrorLink:  Fully responsive web layout benchmarks matching mock designs.`,
              `Synaptic UI: Dynamic transitions, visual layouts, and responsive CSS bindings.`
            ]);
          } else if (SYSTEM_RECORDS[cmd]) {
            printTermOutput(SYSTEM_RECORDS[cmd]);
          } else {
            printTermOutput([
              `<span style='color:#ef4444'>[ERROR] Invalid command payload: '${fullCmd}'</span>`,
              `Type 'help' to review accepted connection commands.`
            ]);
          }
        }

        termInput.value = '';
        scrollTerminal();
      }
    });

    // Make clicking the terminal container focus the input
    const termCard = document.getElementById('term-card');
    if (termCard) {
      termCard.addEventListener('click', () => {
        termInput.focus();
      });
    }
  }

  // Handle terminal hot buttons clicks
  quickActions.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        // Print command indicator
        termOutput.innerHTML += `<div class='term-line'><span class='user'>sneha@chand-node:~</span><span class='meta'>$</span> ${cmd}</div>`;
        if (cmd === 'clear') {
          termOutput.innerHTML = '';
        } else if (SYSTEM_RECORDS[cmd]) {
          printTermOutput(SYSTEM_RECORDS[cmd]);
        }
        termInput.focus();
      }
    });
  });


  // ==========================================
  // 3. SECURE CV RETRIEVAL & DECRYPTION SIMULATOR
  // ==========================================
  const decryptBtn = document.getElementById('decrypt-cv-btn');
  const decryptConsole = document.getElementById('decrypt-console');
  const decryptLogs = document.getElementById('decrypt-logs');
  const progressFill = document.getElementById('decrypt-progress-fill');
  const progressPercent = document.getElementById('decrypt-percentage');

  if (decryptBtn) {
    decryptBtn.addEventListener('click', () => {
      decryptBtn.disabled = true;
      decryptBtn.innerHTML = `
        <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="4" stroke="rgba(255,255,255,0.1)"></circle><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
        Decrypting dossier...
      `;
      decryptConsole.style.display = 'block';
      decryptLogs.innerHTML = '';
      progressFill.style.width = '0%';
      progressPercent.innerText = '0%';

      const steps = [
        { log: "[INIT] Handshake request broadcast to Sector-7 Node...", delay: 200, progress: 10 },
        { log: "[CONN] Secure TLS tunnel connection established.", delay: 600, progress: 25 },
        { log: "[AUTH] ROOT privilege authorized. Decryption key valid.", delay: 1000, progress: 45 },
        { log: "[DECRYPT] Decoding biographical database registers...", delay: 1400, progress: 70 },
        { log: "[DECRYPT] Re-assembling structural resume modules...", delay: 1900, progress: 90 },
        { log: "[VERIFY] Checksum validation integrity checked. [OK]", delay: 2400, progress: 100 },
        { log: "[SUCCESS] Decrypted CV payload delivered to client node.", delay: 2800, progress: 100 }
      ];

      steps.forEach((step) => {
        setTimeout(() => {
          // Log output print
          decryptLogs.innerHTML += `<div class="decrypt-log-line">${step.log}</div>`;
          decryptLogs.scrollTop = decryptLogs.scrollHeight;

          // Progress bar increments
          progressFill.style.width = `${step.progress}%`;
          progressPercent.innerText = `${step.progress}%`;

          // Download trigger on complete
          if (step.progress === 100 && step.log.includes('[SUCCESS]')) {
            setTimeout(() => {
              // Create dynamic download anchor to download resume.pdf
              const dlAnchor = document.createElement('a');
              dlAnchor.href = 'resume.pdf';
              dlAnchor.download = 'Sneha_Chand_Resume.pdf';
              document.body.appendChild(dlAnchor);
              dlAnchor.click();
              document.body.removeChild(dlAnchor);

              // Reset Button
              decryptBtn.disabled = false;
              decryptBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Download Completed
              `;
            }, 600);
          }
        }, step.delay);
      });
    });
  }


  // ==========================================
  // 4. CERTIFICATION Registry Details Modal Popup
  // ==========================================
  const modal = document.getElementById('cert-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const timelineItems = document.querySelectorAll('.timeline-item');

  // Populate Modal Fields
  const modalTitle = document.getElementById('modal-cert-title');
  const modalIssuer = document.getElementById('modal-cert-issuer');
  const modalDate = document.getElementById('modal-cert-date');
  const modalId = document.getElementById('modal-cert-id');
  const modalDesc = document.getElementById('modal-cert-desc');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-cert-title');
      const issuer = item.getAttribute('data-cert-issuer');
      const date = item.getAttribute('data-cert-date');
      const id = item.getAttribute('data-cert-id');
      const desc = item.getAttribute('data-cert-desc');

      if (modal && title) {
        modalTitle.innerText = title;
        modalIssuer.innerText = issuer;
        modalDate.innerText = date;
        modalId.innerText = id;
        modalDesc.innerText = desc;

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    });
  });

  // Close modal functions
  function closeModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Unlock scroll
    }
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });


  // ==========================================
  // 5. PROJECT ARCHIVE DYNAMIC FILTERING
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active states
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterType = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
          if (filterType === 'all' || cardCategory === filterType) {
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.classList.add('hidden');
          }
        }, 200);
      });
    });
  });


  // ==========================================
  // 6. SCROLL OBSERVER FOR SKILL BAR CHARGE EFFECT
  // ==========================================
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  if (skillBars.length > 0) {
    const chargeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const percent = bar.getAttribute('data-percent');
          bar.style.width = `${percent}%`;
          observer.unobserve(bar); // Stop observing after charging
        }
      });
    }, { threshold: 0.1 });

    skillBars.forEach(bar => {
      chargeObserver.observe(bar);
    });
  }


  // ==========================================
  // 7. SECURE DIAL CONTACT TRANSMITTER
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formDiag = document.getElementById('form-diagnostics');
  const formSubmitBtn = document.getElementById('contact-submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const sender = document.getElementById('contact-sender').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('contact-message').value;

      // Lock submit and display diagnostic screen
      formSubmitBtn.disabled = true;
      formDiag.style.display = 'block';
      formDiag.innerHTML = '';

      // Helper function to append logs with terminal glow styling
      const printLog = (text, type = 'info') => {
        const classType = type === 'success' ? 'success' : (type === 'error' ? 'error' : '');
        formDiag.innerHTML += `<div class="form-diagnostics-line ${classType}">${text}</div>`;
        formDiag.scrollTop = formDiag.scrollHeight;
      };

      // Play start of high-tech animation
      printLog("[SECURE_PORT] Initiating secure encryption handshake...");
      
      await new Promise(resolve => setTimeout(resolve, 400));
      printLog("[SECURE_PORT] Generating public/private key-pair values...");
      
      await new Promise(resolve => setTimeout(resolve, 500));
      printLog("[METRIC] Target Sneha mainframe: Encrypted packet wrapper OK.");

      await new Promise(resolve => setTimeout(resolve, 400));
      printLog(`[TRANSMIT] Dispatching message packet from node: ${sender}...`);

      // Initiate actual transmission to FormSubmit AJAX endpoint
      const payload = {
        name: sender,
        email: email,
        message: message,
        _subject: `[Mainframe Contact] Message from ${sender}`
      };

      try {
        const response = await fetch('https://formsubmit.co/ajax/snehachand1912@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok && result.success === "true") {
          // Success sequence
          printLog("[TRANSMIT] Message sent in 256-bit encrypted cypher block...", 'info');
          await new Promise(resolve => setTimeout(resolve, 600));
          printLog("[SUCCESS] Transmit packet delivered successfully. Mainframe logged.", 'success');

          // Reset inputs and re-enable button
          setTimeout(() => {
            contactForm.reset();
            formSubmitBtn.disabled = false;
            
            // Clear console overlay after a brief period
            setTimeout(() => {
              formDiag.style.display = 'none';
              formDiag.innerHTML = '';
            }, 4000);
          }, 500);

        } else {
          throw new Error(result.message || 'Server rejected transmission.');
        }

      } catch (err) {
        // Error handling sequence
        console.error('Email Transmission Failed:', err);
        printLog(`[ERROR] Packet broadcast failed: ${err.message || 'Connection timed out.'}`, 'error');
        await new Promise(resolve => setTimeout(resolve, 600));
        printLog("[ERROR] Secure transmission channel terminated. [FAILED]", 'error');

        // Re-enable button so they can retry
        setTimeout(() => {
          formSubmitBtn.disabled = false;
          
          // Clear diagnostics after 6 seconds to let them read the error
          setTimeout(() => {
            formDiag.style.display = 'none';
            formDiag.innerHTML = '';
          }, 6000);
        }, 500);
      }
    });
  }


  // ==========================================
  // 8. MOBILE MENU COLLAPSE CONTROLLER
  // ==========================================
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = mainNav.style.display === 'block';
      mainNav.style.display = isVisible ? 'none' : 'block';
      
      if (!isVisible) {
        mainNav.style.background = 'rgba(6, 2, 12, 0.98)';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '100%';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.padding = '1.5rem';
        mainNav.style.borderBottom = '1px solid var(--border-neon)';
        
        const list = mainNav.querySelector('ul');
        list.style.flexDirection = 'column';
        list.style.alignItems = 'center';
        list.style.gap = '1.5rem';
      }
    });

    // Close menu when clicking anchors
    const navAnchors = mainNav.querySelectorAll('a');
    navAnchors.forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mainNav.style.display = 'none';
        }
      });
    });

    // Handle viewport resize reset
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mainNav.style.display = '';
        const list = mainNav.querySelector('ul');
        if (list) {
          list.style.flexDirection = '';
          list.style.alignItems = '';
          list.style.gap = '';
        }
      }
    });
  }
});
