(function() {

    document.getElementById("submit").addEventListener("click", function() {
        event.preventDefault();

        const userNumber = document.getElementById("number").value;
        const randomNumber = getRndNumber(1, 22);
        console.log(userNumber);
        console.log(randomNumber);

        if (userNumber == randomNumber) {
            alert("Awesome! You number "+ userNumber +" was correct. You can be named many things, hungry not being one of them.")
            
        } else {
            alert("Bummer... You guessed "+ userNumber +" and the secret number was "+ randomNumber +".")
        }
    });

    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      };

})();