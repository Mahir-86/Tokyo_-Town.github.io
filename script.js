        function countdown() {
            const countdownElement = document.getElementById('countdown');
            let seconds = 3600; // Set the initial countdown time in seconds (1 hour)

            for (let i = seconds; i >= 0; i--) {
                const hours = Math.floor(i / 3600);
                const minutes = Math.floor((i % 3600) / 60);
                const remainingSeconds = i % 60;

                setTimeout(function () {
                    countdownElement.innerText = `Time left: ${hours}:${minutes}:${remainingSeconds}`;

                    if (i === 0) {
                        countdownElement.innerText = "Time's up!";
                    }
                }, (seconds - i) * 1000);
            }
        }

        countdown(); // Start the countdown
