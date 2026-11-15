/* =========================================================
   THE ATTENTION TRAP
   Prototype JavaScript
   ========================================================= */

/*
 * Algorithm interaction
 *
 * The visitor clicks on one of the four steps
 * to reveal a short explanation.
 */

function showStep(step) {

    const info = document.getElementById("algorithm-info");

    if (!info) {
        return;
    }

    if (step === 1) {

        info.innerHTML = `
            <h2>01 — COLLECT</h2>

            <p>
                Platforms collect information from interactions
                such as clicks, likes, searches, views and
                time spent watching content.
            </p>
        `;

    }

    else if (step === 2) {

        info.innerHTML = `
            <h2>02 — ANALYZE</h2>

            <p>
                This information can be used to build a picture
                of what a user is interested in and how they
                interact with content.
            </p>
        `;

    }

    else if (step === 3) {

        info.innerHTML = `
            <h2>03 — RECOMMEND</h2>

            <p>
                The platform can then recommend content that
                it predicts will keep the user engaged.
            </p>
        `;

    }

    else if (step === 4) {

        info.innerHTML = `
            <h2>04 — MEASURE</h2>

            <p>
                The user's response provides new information,
                creating another cycle of collection,
                analysis and recommendation.
            </p>
        `;

    }

}