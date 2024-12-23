
        const increaseButton = document.querySelector('.in');
        const decreaseButton = document.querySelector('.de');
        const numInput = document.querySelector('.num');

        numInput.value = 0;

        increaseButton.addEventListener('click', () => {
            numInput.value = parseInt(numInput.value) + 1;
        });

        decreaseButton.addEventListener('click', () => {
            if (parseInt(numInput.value) > 0) {
                numInput.value = parseInt(numInput.value) - 1;
            } else {
                console.log("The number has reached its limit.");
            }
        });