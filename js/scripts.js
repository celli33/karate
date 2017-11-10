$(document).ready(function() {

var kataInd=$("a.boton.kata-ind");
var kumiteInd=$("a.boton.kumite-ind");
var kataPar=$("a.boton.kata-parejas");
var kumiteEquipos=$("a.boton.kumite-equipo");
var kataSelectivo=$("a.boton.kata-selectivo");
var kumiteSelectivo=$("a.boton.kumite-selectivo");
var kataEquipo=$("a.boton.kata-equipo");

kataInd.click(graphKataInd);
kumiteInd.click(graphkumiteInd);
kataPar.click(graphKataPar);
kumiteEquipos.click(graphKumiteEquipos);
kataSelectivo.click(graphKataSelectivo);
kumiteSelectivo.click(graphKumiteSelectivo);
kataEquipo.click(graphKataEquipo);


function graphKataInd() {
  console.log("kataInd");
  graficar();
}

function graphkumiteInd() {
  console.log("kumiteInd");
}

function graphKataPar() {
  console.log("kataPar");
}

function graphKumiteEquipos() {
  console.log("kumiteEquipos");
}

function graphKataSelectivo() {
  console.log("kataSelectivo");
}

function graphKumiteSelectivo() {
  console.log("kumiteSelectivo");
}

function graphKataEquipo() {
  console.log("kataEquipo");
}

/*var singleElimination = {
  "teams": [              // Matchups
    ["Team 1", "Team 2"], // First match
    ["Team 3", "Team 4"]  // Second match
  ],
  "results": [            // List of brackets (single elimination, so only one bracket)
    [                     // List of rounds in bracket
      [                   // First round in this bracket
        [1, 2],           // Team 1 vs Team 2
        [3, 4]            // Team 3 vs Team 4
      ],
      [                   // Second (final) round in single elimination bracket
        [5, 6],           // Match for first place
        [7, 8]            // Match for 3rd place
      ]
    ]
  ]
}

var doubleElimination = {
  "teams": [
    ["Team 1", "Team 2"],
    ["Team 3", "Team 4"]
  ],
  "results": [            // List of brackets (three since this is double elimination)
    [                     // Winner bracket
      [[1, 2], [3, 4]],   // First round and results
      [[5, 6]]            // Second round
    ],
    [                     // Loser bracket
      [[7, 8]],           // First round
      [[9, 10]]           // Second round
    ],
    [                     // Final "bracket"
      [                   // First round
        [11, 12],         // Match to determine 1st and 2nd
        [13, 14]          // Match to determine 3rd and 4th
      ],
      [                   // Second round
        [15, 16]          // LB winner won first round (11-12) so need a final decisive round
      ]
    ]
  ]
}*/



var minimalData = {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"]  /* second matchup */
    ]//,
    //results : [
    //  [[1,2], [3,4]],       /* first round */
    //  [[4,6], [2,1]]        /* second round */
    //]
  }





function graficar() {
    $('.graficos').bracket({
      init: minimalData /* data to initialize the bracket with */ })
    }



});
