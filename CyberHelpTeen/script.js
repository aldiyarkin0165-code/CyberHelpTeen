function checkResult(){

    let answers =
    document.querySelectorAll('.answer');

    let score = 0;

    answers.forEach(answer => {
        score += Number(answer.value);
    });

    let result =
    document.getElementById('result');

    if(score <= 2){

        result.innerHTML =
        "🟢 Низкий риск кибербуллинга";

    }

    else if(score <= 5){

        result.innerHTML =
        "🟡 Средний риск кибербуллинга";

    }

    else{

        result.innerHTML =
        "🔴 Высокий риск. Обратись за помощью.";

    }

}

particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    color: {
      value: "#7c3aed"
    },

    line_linked: {
      enable: true,
      color: "#06b6d4"
    },

    move: {
      speed: 2
    }

  }

});