function scanPrescription() {

    const cameraInput = document.createElement("input");

    cameraInput.type = "file";
    cameraInput.accept = "image/*";
    cameraInput.capture = "environment";

    cameraInput.onchange = function(event) {

        const file = event.target.files[0];

        if (!file) return;

        showProcessingScreen();
    };

    cameraInput.click();
}

function uploadPrescription() {

    const input = document.createElement("input");

    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;

    input.onchange = function(event) {

        const files = event.target.files;

        if (!files || files.length === 0) return;

        showProcessingScreen(files.length);
    };

    input.click();
}
function showDetectedInformation() {

    document.querySelector(".container").innerHTML = `

        <div class="header">
            <div class="logo">💊</div>

            <div>
                <h1>MedSafe AI</h1>
                <p>Prescription Safety Verification</p>
            </div>
        </div>

        <div class="welcome">
            <h2>🛡️ Safety Verification</h2>

            <p>
                MedSafe AI has organized the detected information
                and generated a review status.
            </p>
        </div>


        <div class="medicine-card">

            <h3>📋 Detected Items</h3>

            <p><b>Item A:</b> DEMO ITEM A</p>
            <p><b>Strength:</b> 500 mg</p>
            <p><b>Frequency:</b> Twice daily</p>

            <hr style="margin:15px 0; border:0; border-top:1px solid #e2e8f0;">

            <p><b>Item B:</b> DEMO ITEM B</p>
            <p><b>Strength:</b> 100 units</p>
            <p><b>Frequency:</b> Once daily</p>

        </div>


        <div class="safety-dashboard">

            <div class="safety-header">
                <span class="safety-icon">⚠️</span>

                <div>
                    <h3>Review Required</h3>
                    <p>Safety screening completed</p>
                </div>
            </div>


            <div class="status-row">

                <div class="status-icon">✓</div>

                <div>
                    <b>Information Extracted</b>
                    <p>Detected fields were organized successfully.</p>
                </div>

            </div>


            <div class="status-row">

                <div class="status-icon">!</div>

                <div>
                    <b>Professional Review</b>
                    <p>
                        A qualified healthcare professional should
                        verify the information.
                    </p>
                </div>

            </div>


            <div class="status-row">

                <div class="status-icon">🛡️</div>

                <div>
                    <b>No Automatic Medical Decision</b>
                    <p>
                        This prototype does not decide whether a
                        medication is safe or unsafe.
                    </p>
                </div>

            </div>

        </div>


        <button class="main-button" onclick="showTimeline()">
            Continue to Daily Timeline →
        </button>

    `;
}
function showTimeline() {

    document.querySelector(".container").innerHTML = `

        <div class="header">
            <div class="logo">💊</div>

            <div>
                <h1>MedSafe AI</h1>
                <p>Daily Medication Timeline</p>
            </div>
        </div>


        <div class="welcome">
            <h2>📅 Today's Timeline</h2>

            <p>
                Your detected items are organized into a
                simple daily timeline.
            </p>
        </div>


        <div class="timeline">


            <div class="timeline-item">

                <div class="time">
                    08:00 AM
                </div>

                <div class="timeline-card">

                    <h3>💊 DEMO ITEM A</h3>

                    <p>
                        Frequency: Twice daily
                    </p>

                    <span class="timeline-status">
                        Scheduled
                    </span>

                </div>

            </div>


            <div class="timeline-item">

                <div class="time">
                    01:00 PM
                </div>

                <div class="timeline-card">

                    <h3>💊 DEMO ITEM B</h3>

                    <p>
                        Frequency: Once daily
                    </p>

                    <span class="timeline-status">
                        Scheduled
                    </span>

                </div>

            </div>


            <div class="timeline-item">

                <div class="time">
                    08:00 PM
                </div>

                <div class="timeline-card">

                    <h3>💊 DEMO ITEM A</h3>

                    <p>
                        Second scheduled time
                    </p>

                    <span class="timeline-status">
                        Scheduled
                    </span>

                </div>

            </div>

        </div>


        <div class="info-card">

            <h3>🛡️ Safety Reminder</h3>

            <p>
                This is a demonstration timeline using synthetic
                data. It does not provide medical instructions.
            </p>

        </div>


        <button class="main-button" onclick="location.reload()">
            ↻ Start New Scan
        </button>

    `;
}

function showProcessingScreen(count = 1) {

    document.querySelector(".container").innerHTML = `

        <div class="welcome">

            <h2>🔍 Processing Images...</h2>

            <p>
                MedSafe AI is organizing the uploaded information.
            </p>

            <div class="medicine-card">

                <h3>📷 Images Received</h3>

                <p>
                    <b>${count}</b> image(s) selected
                </p>

                <p>
                    Processing completed successfully.
                </p>

            </div>

        </div>

        <div class="info-card">

            <h3>⚠️ Demo Mode</h3>

            <p>
                This prototype uses synthetic demonstration data.
                It does not make medical decisions.
            </p>

        </div>

        <button class="main-button" onclick="showDetectedInformation()">
            View Detected Items →
        </button>

    `;
}