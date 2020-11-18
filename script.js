(function() {

    document.getElementById("submit").addEventListener("click", function() {
        event.preventDefault();

        const userNumber = document.getElementById("number").value;
        const randomNumber = getRndNumber(1, 22);
        console.log(userNumber);
        console.log(randomNumber);
    });

    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      };

})();