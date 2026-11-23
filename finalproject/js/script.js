/* =========================================================
   THE ATTENTION TRAP — INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Mobile navigation */
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".site-nav");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.textContent = isOpen ? "CLOSE" : "MENU";
        });
    }


    /* Dopamine loop interaction */
    const loopNodes = document.querySelectorAll(".loop-node");
    const loopInfo = document.querySelector("#loop-info");

    const loopContent = {
        1: {
            title: "01 / SCROLL",
            text: "A user begins moving through a feed, often looking for something interesting, useful or entertaining."
        },
        2: {
            title: "02 / NEW CONTENT",
            text: "The platform presents another piece of content before the user has reached a natural stopping point."
        },
        3: {
            title: "03 / REWARD",
            text: "Something catches the user's attention: a funny video, interesting post, notification or social interaction."
        },
        4: {
            title: "04 / REPEAT",
            text: "The process begins again. One interaction can lead directly into another."
        }
    };

    loopNodes.forEach(node => {
        node.addEventListener("click", () => {

            loopNodes.forEach(item => item.classList.remove("selected"));
            node.classList.add("selected");

            const step = node.dataset.loop;
            const content = loopContent[step];

            if (loopInfo && content) {
                loopInfo.innerHTML = `
                    <p class="eyebrow">${content.title}</p>
                    <p>${content.text}</p>
                `;
            }
        });
    });


    /* Algorithm interaction */
    const algorithmTabs = document.querySelectorAll(".algorithm-tab");
    const algorithmLabel = document.querySelector("#algorithm-label");
    const algorithmTitle = document.querySelector("#algorithm-title");
    const algorithmText = document.querySelector("#algorithm-text");

    const algorithmContent = {
        collect: {
            label: "01 / COLLECT",
            title: "WHAT DO YOU DO?",
            text: "Platforms can gather signals from interactions such as clicks, likes, searches, views and time spent with content."
        },
        analyze: {
            label: "02 / ANALYZE",
            title: "WHAT MIGHT YOU LIKE?",
            text: "Those signals can be analyzed to estimate interests, preferences and patterns in how a person interacts with content."
        },
        recommend: {
            label: "03 / RECOMMEND",
            title: "WHAT SHOULD YOU SEE NEXT?",
            text: "The system can use those predictions to select or rank content that it expects the user may engage with."
        },
        measure: {
            label: "04 / MEASURE",
            title: "WHAT DID YOU DO WITH IT?",
            text: "The user's response becomes another signal, feeding the next cycle of collection, analysis and recommendation."
        }
    };

    algorithmTabs.forEach(tab => {
        tab.addEventListener("click", () => {

            algorithmTabs.forEach(item => item.classList.remove("active"));
            tab.classList.add("active");

            const step = tab.dataset.step;
            const content = algorithmContent[step];

            if (content) {
                algorithmLabel.textContent = content.label;
                algorithmTitle.textContent = content.title;
                algorithmText.textContent = content.text;
            }
        });
    });

    // Instagram-like interaction
    const likeButton = document.querySelector(".like-button");
    const likeCount = document.querySelector(".like-count");

    if (likeButton && likeCount) {
        let likes = 1248;
        let isLiked = false;

        likeButton.addEventListener("click", function () {
            if (isLiked) {
                // Remove the like
                likes--;
                likeButton.textContent = "♡";
                isLiked = false;
            } else {
                // Add the like
                likes++;
                likeButton.textContent = "♥";
                isLiked = true;
            }

            // Update the displayed number
            likeCount.textContent = likes.toLocaleString();

            // Update accessibility state
            likeButton.setAttribute("aria-pressed", isLiked);
        });
    }


    /* Reflection questions */
    const questionButtons = document.querySelectorAll(".question-item");

    questionButtons.forEach(button => {
        button.addEventListener("click", () => {

            const answer = button.nextElementSibling;

            if (!answer) {
                return;
            }

            button.classList.toggle("open");
            answer.classList.toggle("open");
        });
    });

});