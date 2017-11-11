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
  graficar(4);
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




var data4= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
    /* second matchup */
    ],
   results : [
      //[[1,2], [3,4]],       /* first round */
      //[[4,6]]        /* second round */
    ]
  }

  var data5= {
      teams : [
        ["team 1", ""], /* first matchup */
        ["team 2", ""],
        ["Team 3", "Team 4"], /* first matchup */
        ["", "Team 5"] /* first matchup */

      /* second matchup */
     ],
      results : [
        [[1,0], [1,0],[null,null], [0,1]]       /* first round */
          /* second round */
      ]
    }

var data6= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", "Team 3"],
      ["Team 4", "Team 5"],
      ["Team 6", null]
    /* second matchup */
    ],
   results : [
      [[1,null],[null,null],[null,null],[1,null]]
    ]
  }

  var data7= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", "Team 3"],
        ["Team 4", "Team 5"],
        ["Team 6", "team 7"]
      /* second matchup */
      ],
     results : [
        [[1,null],[null,null],[null,null],[null,null]]
      ]
    }


var data8= {
    teams : [
      ["Team 1", "team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "team 8"]
    /* second matchup */
    ],
   results : [
      [[null,null],[null,null],[null,null],[null,null]]
    ]
  }


  var data9= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", "Team 6"],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],

      /* second matchup */
      ],
     results : [
        [[1,null],[1,null],[1,null],[1,null],[null,null],[1,null],[1,null],[1,null]]
      ]
    }

    var data10= {
        teams : [
          ["Team 1", null], /* first matchup */
          ["Team 2", null],
          ["Team 3", null],
          ["Team 4", "Team 5"],
          ["Team 6", "Team 7"],
          ["Team 8", null],
          ["Team 9", null],
          ["Team 10", null],

        /* second matchup */
        ],
       results : [
          [[1,null],[1,null],[1,null],[null,null],[null,null],[1,null],[1,null],[1,null]]
        ]
      }

      var data11= {
          teams : [
            ["Team 1", null], /* first matchup */
            ["Team 2", null],
            ["Team 3", null],
            ["Team 4", "Team 5"],
            ["Team 6", "Team 7"],
            ["Team 8", "Team 9"],
            ["Team 10", null],
            ["Team 11", null],

          /* second matchup */
          ],
         results : [
            [[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[1,null],[1,null]]
          ]
        }

  var data12= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", null],
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11", null],
      ["Team 12", null],

    /* second matchup */
    ],
   results : [
      [[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null]]
    ]
  }

  var data13= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", null],
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11", "Team 12"],
      ["Team 13", null],

    /* second matchup */
    ],
   results : [
      [[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null]]
    ]
  }

  var data14= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", "Team 3"],
      ["Team 4", "Team 5"],
      ["Team 6", "team 7"],
      ["Team 8", "Team 9"],
      ["Team 10", "Team 11"],
      ["Team 12", "Team 13"],
      ["Team 14", null]

    /* second matchup */
    ],
   results : [
      [[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null]]
    ]
  }

  var data15= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", "Team 3"],
      ["Team 4", "Team 5"],
      ["Team 6", "team 7"],
      ["Team 8", "Team 9"],
      ["Team 10", "Team 11"],
      ["Team 12", "Team 13"],
      ["Team 14", "Team 15"]

    /* second matchup */
    ],
   results : [
      [[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
    ]
  }

  var data16= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11", "Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"]

    /* second matchup */
    ],
   results : [
      [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
    ]
  }

  var data17= {
    teams : [
      ["Team 1", null], /* first matchup */
      ["Team 2", null],
      ["Team 3", null],
      ["Team 4", null],
      ["Team 5", null],
      ["Team 6", null],
      ["Team 7", null],
      ["Team 8", null],
      ["Team 9", "Team 10"], /* first matchup */
      ["Team 11", null],
      ["Team 12", null],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],

    /* second matchup */
    ],
   results : [
      [ [1,null],[1,null],[1,null],[1,null],[null,null],[1,null],[1,null],[1,null],
      [null,null], [1,null],[1,null],[1,null],[1,null]]
    ]
  }


function graficar(numCompetidores) {
  switch (numCompetidores) {
    case 4:
      $('.graficos').bracket({
        init: data17/* data to initialize the bracket with */ })
    break;
    case 5:
      $('.graficos').bracket({
        init: data5/* data to initialize the bracket with */ })
   break;
    default:
  }
}




});
