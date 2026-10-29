document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");

    // Add or remove the 'scrolled' class based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all the accordion headers
    const accordionHeaders = document.querySelectorAll(".serviceHeader");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // Get the parent card of the clicked header
            const currentCard = this.parentElement;
            
            // Check if this specific card is already open
            const isActive = currentCard.classList.contains("active");

            // First, close ALL accordions by removing the 'active' class
            document.querySelectorAll(".serviceCard").forEach(card => {
                card.classList.remove("active");
                
                // If you are using JavaScript to animate height:
                const content = card.querySelector(".serviceContent");
                if(content) content.style.maxHeight = null; 
            });

            // If the card we clicked wasn't already open, open it now
            if (!isActive) {
                currentCard.classList.add("active");
                
                // If you are using JavaScript to animate height:
                const currentContent = currentCard.querySelector(".serviceContent");
                if(currentContent) {
                    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
                }
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // 1. Select the text containers
    const textElements = document.querySelectorAll(".text-type__content");
    if (textElements.length === 0) return;

    // 2. Extract the original text and clear the HTML elements
    const texts = Array.from(textElements).map(el => el.textContent.trim());
    textElements.forEach(el => el.textContent = "");

    let elementIndex = 0;
    let charIndex = 0;
    
    // Animation timing settings
    const typingSpeed = 100; // Milliseconds per character
    const delayBetweenLines = 400; // Pause between "We Deliver" and "Growth"

    // 3. Create the blinking cursor
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";

    function typeWriter() {
        if (elementIndex < textElements.length) {
            const currentEl = textElements[elementIndex];
            const currentText = texts[elementIndex];

            // Move the cursor to the current span being typed
            currentEl.parentNode.appendChild(cursor);

            if (charIndex < currentText.length) {
                // Add next character
                currentEl.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Line finished, move to the next span
                elementIndex++;
                charIndex = 0;
                setTimeout(typeWriter, delayBetweenLines);
            }
        } else {
            // Optional: Remove cursor when typing finishes, or leave it blinking
            // cursor.remove(); 
        }
    }

    // Start the animation with a slight initial delay
    setTimeout(typeWriter, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    // 1. Select all the span elements containing the numbers
    const counters = document.querySelectorAll(".statItem h3 span");

    // 2. Store the final target number and set the starting text to '0'
    counters.forEach(counter => {
        counter.setAttribute("data-target", counter.innerText);
        counter.innerText = "0";
    });

    // 3. The animation function
    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        
        // Adjust the speed here (higher number = slower animation)
        const duration = 2000; // 2 seconds
        
        // Calculate how much to increment per frame (assuming 60fps)
        const increment = target / (duration / 16); 

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter); // Smoother than setInterval
            } else {
                counter.innerText = target; // Ensure it ends exactly on the target
            }
        };
        
        updateCounter();
    };

    // 4. Setup Intersection Observer to trigger on scroll
    const observerOptions = {
        root: null,
        threshold: 0.5 // Triggers when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find all counters in this section and animate them
                const activeCounters = entry.target.querySelectorAll(".statItem h3 span");
                activeCounters.forEach(animateCounter);
                
                // Stop observing once the animation has played so it doesn't repeat
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 5. Start observing the stats section
    const statsSection = document.querySelector(".homeAbout");
    if (statsSection) {
        observer.observe(statsSection);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // 1. Select the section and the text lines
    const section = document.querySelector(".ideasPerformSection");
    const textLines = document.querySelectorAll(".ideas-type-line");
    const sparkle = document.querySelector(".blueSparkle");
    
    if (!section || textLines.length === 0) return;

    // 2. Extract original text and clear it for the animation
    const texts = Array.from(textLines).map(line => line.textContent.trim());
    textLines.forEach(line => line.textContent = "");

    let lineIndex = 0;
    let charIndex = 0;
    
    // Typing speeds
    const typingSpeed = 100; // Speed of each letter
    const delayBetweenLines = 300; // Pause at the line break

    // 3. Create the blinking cursor (reusing your CSS class)
    const cursor = document.createElement("span");
    cursor.className = "typing-cursor";

    function typeIdeasText() {
        if (lineIndex < textLines.length) {
            const currentLine = textLines[lineIndex];
            const currentText = texts[lineIndex];

            if (charIndex < currentText.length) {
                // Update text and append cursor so it stays at the end of the line
                currentLine.textContent = currentText.substring(0, charIndex + 1);
                currentLine.appendChild(cursor);
                charIndex++;
                setTimeout(typeIdeasText, typingSpeed);
            } else {
                // Move to the next line
                lineIndex++;
                charIndex = 0;
                setTimeout(typeIdeasText, delayBetweenLines);
            }
        } else {
            // Typing is completely finished
            cursor.remove(); // Remove cursor
            if (sparkle) {
                sparkle.style.opacity = "1"; // Fade in the sparkle SVG
            }
        }
    }

    // 4. Use Intersection Observer to trigger only when scrolled into view
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a small 400ms delay after scrolling into view before typing starts
                setTimeout(typeIdeasText, 400);
                obs.unobserve(entry.target); // Stop observing so it only types once
            }
        });
    }, { threshold: 0.5 }); // Triggers when 50% of the section is visible

    observer.observe(section);
});
