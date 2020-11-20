(function() {

    document.getElementById("submit").addEventListener("click", compareGuess);

    function compareGuess(event){
        event.preventDefault();

        const userNumber = document.getElementById("number").value;
        const randomNumber = getRndNumber(1, 22);

        if (userNumber == randomNumber) {
            alert("Awesome! You number "+ userNumber +" was correct. You can be named many things, hungry not being one of them.")
            
        } 
        else if (userNumber == randomNumber -1 || userNumber == randomNumber +1) {
            alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
        }
        else {
            alert("Bummer... You guessed "+ userNumber +" and the secret number was "+ randomNumber +".")
        }
    };

    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      };

})();