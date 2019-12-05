GUI Todo
<!-- - center GameWindow and flourish -->
- fight space
- img in characterCard
- inventory in characterCard



<!-- 
while (deadCount < enemyArray.length) {
  player.health.value -= 20; //kills player
  enemyArray[0].health.value -= 10;
  console.log(player.health.value);
  console.log(enemyArray[0].health.value);

  //Player turn


  if (deadCount <= enemyArray.length) {
    console.log("LoopStart");


      $('#attackSubmit').click(function() {
        let target = enemyArray[parseInt($("input[name=target]:checked").val())];
        let damage = player.attack(target);
        console.log("damage");

        // let damageNum = $("input[name=target]:checked").val();
        // $(`#health${damageNum}`).html(`<p id="damageOutput">${damage}</p>`);
        // setTimeout(function(){
        //   $(`#${target} + Health`).html(``);
        //   }, 3000);


        });
        // MonsterTurn
        console.log(deadCount);
        for (let j = 0; j < enemyArray.length; j++) {
          console.log("j="+j);
          if (enemyArray[j].health.value >= 0) {
            setInterval(() => {
              (enemyArray[j].attack(player));
            }, 3000);
          } else {
            if (deadCount >= enemyArray.length) {
              deadCount += 1;
              alert("youWinner you won");
              break;
            } else {
              console.log("WHatever keep going");
              }

              }
              console.log("end of for");
            }

          }
          $('#youAreDead').show();
          }
        } -->
