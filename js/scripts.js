$(document).ready(function() {


var kumiteKata=0;
/*var comp1,comp2,comp3,comp4,comp5,comp6,comp7,comp8,comp9,comp10,comp11,comp12,comp13,comp14,comp15,comp16,comp17,comp18,comp19,comp20,comp21,comp22,comp23,comp24,comp25,comp26,comp27,comp28,comp29,comp30,comp31,comp32,comp33,comp34,comp35,comp36,comp37,comp38,comp39,comp40,comp41,comp42,comp43,comp44,comp45,comp46,comp47,comp48,comp49,comp50,comp51,comp52,comp53,comp54,comp55,comp56,comp57,comp58,comp59,comp60,comp61,comp62,comp63,commp64;*/

var comp= new Array(64);

for (var i = 0; i < comp.length; i++) {
  comp[i]=null;
}


var team4={ m: [ comp[0], comp[1] ], m2:[ comp[2], comp[3] ] }

function setPropertyTeam(equipo) {
  for (var i = 0; i < Object.keys(team4).length; i++) {
    array[i]
  }
}

console.log(team4.m);

function team4c(v1,v2,v3,v4) {
  this.m=["Team 1","Team 2"];
  this.m2["Team 3","team 4"];
}
function data4c(teams) {
  this.teams=teams;
}
/*var data4={}
data4["teams"]=[ team4.m  , team4.m2 ];
data4["resuts"]=[];*/
  var data4= {
      teams : [
        ["Team 1","Team 2"],
        ["Team 3","team 4"]
      ],
    results : [
        //[[1,2], [3,4]],       /* first round */
        //[[4,6]]        /* second round */
      ]

    }

    var data5= {
        teams : [
          ["team 1", null], /* first matchup */
          ["team 2", null],
          ["Team 3", "Team 4"], /* first matchup */
          ["Team 5",null] /* first matchup */

        /* second matchup */
       ],
        results : [
          [[1,null], [1,null],[null,null], [1,null]]       /* first round */
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



    var data18= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", "Team 9"],
        ["Team 10", "Team 11"], /* first matchup */
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],
        [null,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }


    var data19= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", "Team 9"],
        ["Team 10", "Team 11"], /* first matchup */
        ["Team 12", "Team 13"],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],
        [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }

    var data20= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", "Team 8"],
        ["Team 9", "Team 10"],
        ["Team 11", "Team 12"], /* first matchup */
        ["Team 13", "Team 14"],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],
        [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }

    var data21= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", "Team 8"],
        ["Team 9", "Team 10"],
        ["Team 11", "Team 12"], /* first matchup */
        ["Team 13", "Team 14"],
        ["Team 15", "Team 16"],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],
        [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }


      var data22= {
        teams : [
          ["Team 1", null], /* first matchup */
          ["Team 2", null],
          ["Team 3", null],
          ["Team 4", null],
          ["Team 5", null],
          ["Team 6", "Team 7"],
          ["Team 8", "Team 9"],
          ["Team 10", "Team 11"],
          ["Team 12", "Team 13"], /* first matchup */
          ["Team 14", "Team 15"],
          ["Team 16", "Team 17"],
          ["Team 18", null],
          ["Team 19", null],
          ["Team 20", null],
          ["Team 21", null],
          ["Team 22", null],

        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],
          [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
        ]
      }


          var data23= {
            teams : [
              ["Team 1", null], /* first matchup */
              ["Team 2", null],
              ["Team 3", null],
              ["Team 4", null],
              ["Team 5", null],
              ["Team 6", "Team 7"],
              ["Team 8", "Team 9"],
              ["Team 10", "Team 11"],
              ["Team 12", "Team 13"], /* first matchup */
              ["Team 14", "Team 15"],
              ["Team 16", "Team 17"],
              ["Team 18", "Team 19"],
              ["Team 20", null],
              ["Team 21", null],
              ["Team 22", null],
              ["Team 23", null],

            /* second matchup */
            ],
           results : [
              [ [1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],
              [null,null], [null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null]]
            ]
          }


          var data24= {
            teams : [
              ["Team 1", null], /* first matchup */
              ["Team 2", null],
              ["Team 3", null],
              ["Team 4", null],
              ["Team 5", "Team 6"],
              ["Team 7", "Team 8"],
              ["Team 9", "Team 10"],
              ["Team 11", "Team 12"],
              ["Team 13", "Team 14"], /* first matchup */
              ["Team 15", "Team 16"],
              ["Team 17", "Team 18"],
              ["Team 19", "Team 20"],
              ["Team 21", null],
              ["Team 22", null],
              ["Team 23", null],
              ["Team 24", null],

            /* second matchup */
            ],
           results : [
              [ [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],
              [null,null], [null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null]]
            ]
          }


          var data25= {
            teams : [
              ["Team 1", null], /* first matchup */
              ["Team 2", null],
              ["Team 3", null],
              ["Team 4", null],
              ["Team 5", "Team 6"],
              ["Team 7", "Team 8"],
              ["Team 9", "Team 10"],
              ["Team 11", "Team 12"],
              ["Team 13", "Team 14"], /* first matchup */
              ["Team 15", "Team 16"],
              ["Team 17", "Team 18"],
              ["Team 19", "Team 20"],
              ["Team 21", "Team 22"],
              ["Team 23", null],
              ["Team 24", null],
              ["Team 25", null],

            /* second matchup */
            ],
           results : [
              [ [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],
              [null,null], [null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null]]
            ]
          }

        var data26= {
          teams : [
            ["Team 1", null], /* first matchup */
            ["Team 2", null],
            ["Team 3", null],
            ["Team 4", "Team 5"],
            ["Team 6", "Team 7"],
            ["Team 8", "Team 9"],
            ["Team 10", "Team 11"],
            ["Team 12", "Team 13"], /* first matchup */
            ["Team 14", "Team 15"],
            ["Team 16", "Team 17"],
            ["Team 18", "Team 19"],/* first matchup */
            ["Team 20", "Team 21"],
            ["Team 22", "Team 23"],
            ["Team 24", null],
            ["Team 25", null],
            ["Team 26", null]
          /* second matchup */
          ],
         results : [
            [ [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],
            [null,null], [null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null]]
          ]
        }

      var data27= {
        teams : [
          ["Team 1", null], /* first matchup */
          ["Team 2", null],
          ["Team 3", null],
          ["Team 4", "Team 5"],
          ["Team 6", "Team 7"],
          ["Team 8", "Team 9"],
          ["Team 10", "Team 11"],
          ["Team 12", "Team 13"], /* first matchup */
          ["Team 14", "Team 15"],
          ["Team 16", "Team 17"],
          ["Team 18", "Team 19"],/* first matchup */
          ["Team 20", "Team 21"],
          ["Team 22", "Team 23"],
          ["Team 24", "Team 25"],
          ["Team 26", null],
          ["Team 27", null]
        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],
          [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null]]
        ]
      }

      var data28= {
        teams : [
          ["Team 1", null], /* first matchup */
          ["Team 2", null],
          ["Team 3", "Team 4"],
          ["Team 5", "Team 6"],
          ["Team 7", "Team 8"],
          ["Team 9", "Team 10"],
          ["Team 11", "Team 12"],
          ["Team 13", "Team 14"], /* first matchup */
          ["Team 15", "Team 16"],
          ["Team 17", "Team 18"],
          ["Team 19", "Team 20"],/* first matchup */
          ["Team 21", "Team 22"],
          ["Team 23", "Team 24"],
          ["Team 25", "Team 26"],
          ["Team 27", null],
          ["Team 28", null]
        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
          [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null]]
        ]
      }



    var data29= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", null],
        ["Team 3", "Team 4"],
        ["Team 5", "Team 6"],
        ["Team 7", "Team 8"],
        ["Team 9", "Team 10"],
        ["Team 11", "Team 12"],
        ["Team 13", "Team 14"], /* first matchup */
        ["Team 15", "Team 16"],
        ["Team 17", "Team 18"],
        ["Team 19", "Team 20"],/* first matchup */
        ["Team 21", "Team 22"],
        ["Team 23", "Team 24"],
        ["Team 25", "Team 26"],
        ["Team 27", "Team 28"],
        ["Team 29", null]
      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
        [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [1,null]]
      ]
    }

    var data30= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", "Team 3"],
        ["Team 4", "Team 5"],
        ["Team 6", "Team 7"],
        ["Team 8", "Team 9"],
        ["Team 10", "Team 11"],
        ["Team 12", "Team 13"],
        ["Team 14", "Team 15"], /* first matchup */
        ["Team 16", "Team 17"],
        ["Team 18", "Team 19"],
        ["Team 20", "Team 21"],/* first matchup */
        ["Team 22", "Team 23"],
        ["Team 24", "Team 25"],
        ["Team 26", "Team 27"],
        ["Team 28", "Team 29"],
        ["Team 30", null]
      /* second matchup */
      ],
     results : [
        [   [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
        [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [1,null]]
      ]
    }

    var data31= {
      teams : [
        ["Team 1", null], /* first matchup */
        ["Team 2", "Team 3"],
        ["Team 4", "Team 5"],
        ["Team 6", "Team 7"],
        ["Team 8", "Team 9"],
        ["Team 10", "Team 11"],
        ["Team 12", "Team 13"],
        ["Team 14", "Team 15"], /* first matchup */
        ["Team 16", "Team 17"],
        ["Team 18", "Team 19"],
        ["Team 20", "Team 21"],/* first matchup */
        ["Team 22", "Team 23"],
        ["Team 24", "Team 25"],
        ["Team 26", "Team 27"],
        ["Team 28", "Team 29"],
        ["Team 30", "Team 31"]
      /* second matchup */
      ],
     results : [
        [   [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
        [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [null,null]]
      ]
    }

    var data32= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", "Team 6"],
        ["Team 7", "Team 8"],
        ["Team 9", "Team 10"],
        ["Team 11", "Team 12"],
        ["Team 13", "Team 14"],
        ["Team 15", "Team 16"],
        ["Team 17", "Team 18"], /* first matchup */
        ["Team 19", "Team 20"],
        ["Team 21", "Team 22"],
        ["Team 23", "Team 24"],
        ["Team 25", "Team 26"],
        ["Team 27", "Team 28"],
        ["Team 29", "Team 30"],
        ["Team 31", "Team 32"]

      /* second matchup */
      ],
     results : [
        [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
      ]
    }


    var data33= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", null]

      /* second matchup */
      ],
     results : [
        [ [null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null] ]
      ]
    }


    var data34= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", null],
        ["Team 4", null],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", "Team 34"]

      /* second matchup */
      ],
     results : [
        [ [null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null] ]
      ]
    }

    var data35= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", null],
        ["Team 34", "Team 35"]

      /* second matchup */
      ],
     results : [
        [ [null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null] ]
      ]
    }


    var data36= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", null],
        ["Team 6", null],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", "Team 34"],
        ["Team 35", "Team 36"]

      /* second matchup */
      ],
     results : [
        [ [null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null] ]
      ]
    }

    var data37= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", "Team 6"],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", null],
        ["Team 34", "Team 35"],
        ["Team 36", "Team 37"]

      /* second matchup */
      ],
     results : [
        [ [null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null] ]
      ]
    }

    var data38= {
      teams : [
        ["Team 1", "Team 2"], /* first matchup */
        ["Team 3", "Team 4"],
        ["Team 5", "Team 6"],
        ["Team 7", null],
        ["Team 8", null],
        ["Team 9", null],
        ["Team 10", null],
        ["Team 11", null],
        ["Team 12", null],
        ["Team 13", null],
        ["Team 14", null],
        ["Team 15", null],
        ["Team 16", null],
        ["Team 17", null],
        ["Team 18", null],
        ["Team 19", null],
        ["Team 20", null],
        ["Team 21", null],
        ["Team 22", null],
        ["Team 23", null],
        ["Team 24", null],
        ["Team 25", null],
        ["Team 26", null],
        ["Team 27", null],
        ["Team 28", null],
        ["Team 29", null],
        ["Team 30", null],
        ["Team 31", null],
        ["Team 32", null],
        ["Team 33", "Team 34"],
        ["Team 35", "Team 36"],
        ["Team 37", "Team 38"]

      /* second matchup */
      ],
     results : [
        [ [null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null] ]
      ]
    }

  var data39= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", null],
      ["Team 10", null],
      ["Team 11", null],
      ["Team 12", null],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data40= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", null],
      ["Team 10", null],
      ["Team 11", null],
      ["Team 12", null],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data41= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11", null],
      ["Team 12", null],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data42= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11", null],
      ["Team 12", null],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data43= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data44= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", null],
      ["Team 14", null],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"]

    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data45= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data46= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", null],
      ["Team 16", null],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data47= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data48= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", null],
      ["Team 18", null],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data49= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data50= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19", null],
      ["Team 20", null],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data51= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data52= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21", null],
      ["Team 22", null],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data53= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data54= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", null],
      ["Team 24", null],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data55= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"],
      ["Team 54", "Team 55"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data56= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", null],
      ["Team 26", null],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"],
      ["Team 55", "Team 56"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data57= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"],
      ["Team 54", "Team 55"],
      ["Team 56", "Team 57"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data58= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", null],
      ["Team 28", null],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"],
      ["Team 55", "Team 56"],
      ["Team 57", "Team 58"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data59= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"],
      ["Team 54", "Team 55"],
      ["Team 56", "Team 57"],
      ["Team 58", "Team 59"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }


  var data60= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", null],
      ["Team 30", null],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"],
      ["Team 55", "Team 56"],
      ["Team 57", "Team 58"],
      ["Team 59", "Team 60"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data61= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", "Team 30"],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"],
      ["Team 54", "Team 55"],
      ["Team 56", "Team 57"],
      ["Team 58", "Team 59"],
      ["Team 60", "Team 61"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data62= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", "Team 30"],
      ["Team 31", null],
      ["Team 32", null],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"],
      ["Team 55", "Team 56"],
      ["Team 57", "Team 58"],
      ["Team 59", "Team 60"],
      ["Team 61", "Team 62"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data63= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", "Team 30"],
      ["Team 31", "Team 32"],
      ["Team 33", null],
      ["Team 34", "Team 35"],
      ["Team 36", "Team 37"],
      ["Team 38", "Team 39"],
      ["Team 40", "Team 41"],
      ["Team 42", "Team 43"],
      ["Team 44", "Team 45"],
      ["Team 46", "Team 47"],
      ["Team 48", "Team 49"],
      ["Team 50", "Team 51"],
      ["Team 52", "Team 53"],
      ["Team 54", "Team 55"],
      ["Team 56", "Team 57"],
      ["Team 58", "Team 59"],
      ["Team 60", "Team 61"],
      ["Team 62", "Team 63"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

  var data64= {
    teams : [
      ["Team 1", "Team 2"], /* first matchup */
      ["Team 3", "Team 4"],
      ["Team 5", "Team 6"],
      ["Team 7", "Team 8"],
      ["Team 9", "Team 10"],
      ["Team 11","Team 12"],
      ["Team 13", "Team 14"],
      ["Team 15", "Team 16"],
      ["Team 17", "Team 18"],
      ["Team 19","Team 20"],
      ["Team 21","Team 22"],
      ["Team 23", "Team 24"],
      ["Team 25", "Team 26"],
      ["Team 27", "Team 28"],
      ["Team 29", "Team 30"],
      ["Team 31", "Team 32"],
      ["Team 33", "Team 34"],
      ["Team 35", "Team 36"],
      ["Team 37", "Team 38"],
      ["Team 39", "Team 40"],
      ["Team 41", "Team 42"],
      ["Team 43", "Team 44"],
      ["Team 45", "Team 46"],
      ["Team 47", "Team 48"],
      ["Team 49", "Team 50"],
      ["Team 51", "Team 52"],
      ["Team 53", "Team 54"],
      ["Team 55", "Team 56"],
      ["Team 57", "Team 58"],
      ["Team 59", "Team 60"],
      ["Team 61", "Team 62"],
      ["Team 63", "Team 64"]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }

var kataInd=$("a.boton.kata-ind");
var kumiteInd=$("a.boton.kumite-ind");
var kataPar=$("a.boton.kata-parejas");
var kumiteEquipos=$("a.boton.kumite-equipo");
var kataSelectivo=$("a.boton.kata-selectivo");
var kumiteSelectivo=$("a.boton.kumite-selectivo");
var kataEquipo=$("a.boton.kata-equipo");




var numCompetidores;
/*orden:id,estado,nombre-dojo,categoria,nombrepersona,sexo, edad,grado,peso,estatura,competencia, maestro*/

var competidoresKataind1=["68|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto hasta 5 años C. Libre|KENET RODRIGUEZ MORALES|Masculino|5|5 kyu|34 kg|119|KATA INDIVIDUAL|SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"84|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto hasta 5 años C. Libre|VICTOR CADENA UCAN|Masculino|5|8 kyu|30 kg|120|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"278|CAMPECHE|CD DEL CARMEN |Infantil mixto hasta 5 años C. Libre|MAYA ITZEL ESCOBAR GARCIA|Femenino|5|10 kyu|18 kg|120|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"298|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Abdiel Chumacero Mendez |Masculino|5|9 kyu|19 kg|100|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"300|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Alejandro Castañon Serrano |Masculino|5|7 kyu|22 kg|105|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"315|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Maria Jose Mendez Mendiola |Femenino|5|7 kyu|20 kg|100|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"324|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|ALEXIS MORA MORENO|Masculino|5|10 kyu|15 kg|106|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"348|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|ISIS MARLENE TOXTLE MERINO|Femenino|5|10 kyu|14 kg|105|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"373|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|SERGIO AMIEL FIGUEROA URDIALES |Masculino|5|10 kyu|15 kg|110|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"538|CHIHUAHUA|JIN JUKU	|Infantil mixto hasta 5 años C. Libre|SANTIAGO RODRIGUEZ CARRAZCO|Masculino|5|8 kyu|17 kg|111|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"727|CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|MANOLO MEJIA LUIS |Masculino|5|10 kyu|19 kg|123|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"731|CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|SERGIO ALEJANDRO GARCIA MARTINEZ|Masculino|5|10 kyu|16 kg|107|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"732|CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|VICTORIA SOFIA ROJAS PUON|Femenino|5|8 kyu|15 kg|103|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"];

var competidoresKataind2=["81|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Blanca |SERGIO ABRAHAM HABIB|Masculino|7|4 kyu|30 kg|130|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"129|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Dante Emmanuel Cuellar Cardosa|Masculino|6|10 kyu|20 kg|121|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"136|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Eduardo Quiroz Flores|Masculino|6|10 kyu|21 kg|122|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"149|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |HASSAN GUARNEROS RAMÍREZ|Masculino|7|10 kyu|22 kg|123|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"212|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Yerik Eduardo Martinez Miron|Masculino|7|10 kyu|21 kg|122|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"308|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Blanca |Gustavo Angel Pastor Martinez|Masculino|7|9 kyu|35 kg|109|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"322|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ADRIAN VÁZQUEZ PÉREZ|Masculino|7|10 kyu|16 kg|110|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"327|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ANGEL HERRERA DUARTE |Masculino|6|10 kyu|15 kg|107|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"329|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ANTONY  GARCILAZO MARQUEZ|Masculino|6|10 kyu|14 kg|105|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"330|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ASHLEY ALISON MORALES GONZÁLEZ|Femenino|7|10 kyu|19 kg|114|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"345|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |IAN AARON MORALES RODRÍGUEZ|Masculino|6|10 kyu|13 kg|105|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"350|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |JESÚS CERVANTES TREVIÑO|Masculino|7|10 kyu|15 kg|107|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"381|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 6 - 7 años C. Blanca |Alan Fernando López López|Masculino|7|10 kyu|22.8|120|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"446|ZACATECAS|IPPUUKAN|Infantil mixto 6 - 7 años C. Blanca |ALEXA DAPNE GODINA GARAY|Femenino|7|10 kyu|28 kg|102|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"528|CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Blanca |María José Torres Moya|Femenino|7|10 kyu|37 kg|136|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN"];

var competidoresKataind3=["133|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Amarilla |Diego Juarez Palacios |Masculino|6|8 kyu|23 kg|120|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"216|TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Amarilla |Carlos Yahir López Torres|Masculino|6|8 kyu|25 kg|118|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"255|CAMPECHE|CD DEL CARMEN |Infantil mixto 6 - 7 años C. Amarilla |HILARI FERNANDA OROZCO ORTIZ|Femenino|7|9 KYU|25 KG|126|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"287|CAMPECHE|CD DEL CARMEN |Infantil mixto 6 - 7 años C. Amarilla |SIOMARA ROJAS RAMOS |Femenino|7|9 KYU|20  KG|118|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"288|CAMPECHE|CD DEL CARMEN |Infantil mixto 6 - 7 años C. Amarilla |TEODORO ALEXANDER DELGADO PAEZ|Masculino|6|9 KYU|21 kg|110|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"323|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Amarilla |ALEJANDRO ENRIQUEZ LÓPEZ|Masculino|7|9 kyu|21 kg|110|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"335|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Amarilla |CLARA MICHELLE RAMÍREZ DÍAZ|Femenino|7|8 kyu|43 kg|134|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"450|ZACATECAS|IPPUUKAN|Infantil mixto 6 - 7 años C. Amarilla |ANGEL MANUEL MARTINEZ MARQUEZ|Masculino|7|9 kyu|25 kg|117|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"510|CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla |CARLOS DANIEL RODRIGUEZ CARRAZCO|Masculino|7|8 kyu|20 kg|119|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"512|CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla |DAYANA DANAE BADILLO  MUÑOZ|Femenino|7|9 kyu|22|120|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"525|CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla |Jose Miguel Hernández Félix |Masculino|6|8 kyu|28 kg|121|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"581|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 6 - 7 años C. Amarilla |STEPHANIA ARLEYH SANCHEZ CORTES|Femenino|7|8 kyu|17 kg|111|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"626|CHIHUAHUA|SANSEI JUKU|Infantil mixto 6 - 7 años C. Amarilla |JAVIER ARMANDO QUINTANA ARVIZO|MASCULINO|6|8 KYU|17 KG|108|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"647|PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla |BRYANA NAHOMI GALLEGOS ALCÁNTARA|Femenino|6|8 kyu|19 kg|114|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"663|PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla |MÁXIMO GONZÁLEZ LÓPEZ|Masculino|7|9 kyu|26 kg|123|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"664|PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla |MELANIE FERNÁNDEZ MORENO|Femenino|7|9 kyu|21 kg|121|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"718|CHIAPAS|SHU SEI KAN|Infantil mixto 6 - 7 años C. Amarilla |CARLOS ANTONIO SANCHEZ HIDALGO|Masculino|7|9 kyu|37 kg|130|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"719|CHIAPAS|SHU SEI KAN|Infantil mixto 6 - 7 años C. Amarilla |IKER SEBASTIAN HAU OCAMPO|Masculino|6|9 kyu|35 kg|127|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];

var competidoresKataind4=["7|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Diana Saori Tejeda Sosa|Femenino|7|5 kyu|21|123|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"9|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Jesus Arturo Molina Reyes |Masculino|7|6 kyu|37|132|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"16|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Sairi Antonella Perez Carrillo|Femenino|6|5 kyu|20|121|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"29|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|ANDRES CALDERON ARANDA|Masculino|7|7 kyu|18 kg|100|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"49|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|EMILIO VALDEZ DELGADO |Masculino|7|6 kyu|22 kg|127|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"54|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|GERARDO ACEVEDO SOSA |Masculino|7|7 kyu|20 kg|97|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"62|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|JOSAFAT PEREZ TORRES |Masculino|7|6 kyu|23 kg|125|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"70|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|LORENZO GARCIA CETINA|Masculino|7|7 kyu|23 kg|123|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"86|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|VICTORIA VALLE VAZQUEZ|FEMENINO|7|7 kyu|19 kg|113|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"119|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Carlos Ernesto Orduña Barranco|Masculino|7|7 kyu|42 kg|135|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"158|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Jacob Judá Pérez Pérez|Masculino|7|7 kyu|22 kg|122|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"163|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Joel de la Cruz Sanchez |Masculino|6|6 kyu|19 kg|120|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"213|PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Yojari Fernanda Sanchez Pérez|Femenino|7|7 kyu|34 kg|126|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"221|TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Libre|Fabián II Jiménez Sordo|Masculino|7|5 kyu|20 kg|122|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"227|TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Libre|Patricio Emiliano Méndez Jarquin|Masculino|6|5 kyu|21 kg|110|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"303|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Libre|Carlos Alexis Rairez Mendez |Masculino|6|7 kyu|20 kg|112|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"318|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Libre|Norma Ximena Ronzon Arziga |Femenino|6|7 kyu|21 kg|115|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"351|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Libre|JOSÉ ALEXANDER RODRÍGUEZ CAYETANO|Masculino|6|6 kyu|19 kg|120|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"637|CHIHUAHUA|SANSEI JUKU|Infantil mixto 6 - 7 años C. Libre|SEBASTIAN SOTELO CARRAZCO|MASCULINO|6|7 KYU|20 KG|117|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"668|PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Libre|RAQUEL RAMÍREZ LÓPEZ|Femenino|7|5 kyu|30 kg|125|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"
]


var competidoresKataind5=[
  "128|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Daniela Vazquez Rojas|Femenino|8|10 kyu|26 kg|125|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"147|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Gael Rojas Perez |Masculino|8|10 kyu|28 kg|126|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"151|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Ian Jakop Martinez Lopez|Masculino|9|10 kyu|25 kg|131|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"196|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Moises Arias Lopez|Masculino|9|10 kyu|30 kg|128|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"311|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Blanca|Jose Armando Vazquez Hernandez |Masculino|8|10 kyu|24 kg|124|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"326|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|ÁNGEL DE JESÚS MEZA CANO|Masculino|8|10 kyu|44 kg|137|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"331|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|AVRIL MARLEN MORALES RODRÍGUEZ|Femenino|8|10 kyu|23 kg|133|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"340|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|EVELYN ESTRELLA RAMÍREZ GONZÁLEZ|Femenino|9|10 kyu|29kg|131|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"375|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|VALENTINA PÉREZ GALARZA |Femenino|9|10 kyu|30kg|137|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"387|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Dayanne Hernández Cerón|Femenino|9|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"392|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Hannah Sherlyn García León|Femenino|9|10 kyu|23|144|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"398|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Jesabel Bustamante Ruiz|Femenino|9|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"399|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Jesús Andrés Olivera Zaguilán|Masculino|9|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"404|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Zurisaday Hernández Flores|Femenino|8|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"520|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Blanca|Héctor Chavira Dávila|Masculino|8|10 kyu|27 kg|128|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"563|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Blanca|BRYAN CUATECONTZI PEREZ|Masculino|8|8 kyu|21 kg|122|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"577|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Blanca|Lucia Garcia Jimenez|Femenino|9|10 kyu|39 kg|133|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO"

];

var competidoresKataind6=[
  "188|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Amarilla|Marcus Abdiel Reyes Ornelas|Masculino|8|8 kyu|28 kg|129|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"235|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|ANA LILIANA DELGADO PAEZ|Femenino|8|8 KYU|22 kg|135|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"236|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Andrea Lol-be Grajales Martin|Femenino|9|9 kyu|28 kg|129|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"250|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Génesis Sarai Camacho Martínez|Femenino|7|9 kyu|20 kg|120|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"270|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Joshua Eli Gomez Gonzales|Masculino|9|9  kyu|29 kg|130|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"272|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Julio Erick Bautista Martínez|Masculino|8|9 kyu|35 kg|126|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"319|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Amarilla|Oscar Arturo Lazcano Peralta|Masculino|8|9 kyu|23 kg|125|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"353|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Amarilla|JUAN JOSÉ CASTILLO SUÁREZ|Masculino|9|9 kyu|35 kg|141|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"370|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Amarilla|RENE ULISES RAMÍREZ DÍAZ|Masculino|8|8 kyu|45 kg|139|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"413|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|ANGEL URIEL MATA PEREGRINA |Masculino|8|9 kyu|25 kg|124|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"417|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|JESUS URIEL CRUZ MARTINEZ |Masculino|8|9 kyu|21 kg|130|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"430|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|ZURI YAEL DE LA ROSA HERRERA|Femenino|8|8 kyu|20 kg|129|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"454|ZACATECAS|IPPUUKAN|Infantil mixto 8 - 9 años C. Amarilla|GERARDO MANUEL REYES VENEGAS|Masculino|8|8 kyu|26 kg|126|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"458|ZACATECAS|IPPUUKAN|Infantil mixto 8 - 9 años C. Amarilla|JESUS PEREZ|Masculino|9|8 kyu|28 kg|117|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"508|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|Andrei Román Moya|Masculino|8|8 kyu|34 kg|139|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"524|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|José Arámbula |Masculino|9|8 kyu|32 kg|130|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"527|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|Maria Fernanda Acosta Beltran|Femenino|9|8 kyu|40 kg|135|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"540|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|XOCHITL SERRANO DURAN|Femenino|8|9 kyu|26|139|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"572|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Amarilla|Isai Perez Morales|Masculino|9|9 kyu|29 kg|127|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"647|PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Amarilla|BRYANA NAHOMI GALLEGOS ALCÁNTARA|Femenino|6|8 kyu|19 kg|114|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"664|PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Amarilla|MELANIE FERNÁNDEZ MORENO|Femenino|7|9 kyu|21 kg|121|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"724|CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|JUNO VANESA MONTES GALVEZ|Femenino|9|8 kyu|30 kg|130|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"726|CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|LUCIA GUADALUPE RINCON MARTINEZ|Femenino|9|8 kyu|33 kg|126|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"730|CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|PEDRO DE JESUS LOPEZ PEREZ |Masculino|9|9 kyu|28 kg|134|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];

var competidoresKataind7=["6|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 8 - 9 años C. Verde/Morada|Ceani Romina Aguilar Guevara|Femenino|9|5 kyu|21|115|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"22|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|ALEJANDRO CARRILLO PINZÒN |Masculino|8|6 kyu|23 kg|128|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"24|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|ALVAR PAREDES ESPINOSA |Masculino|8|6 kyu|20 kg|120|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"57|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|HERNAN RUIZ DEL HOYO LIMAS|Masculino|8|4 kyu|27 kg|127|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"108|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Andrea Joselyn Diaz Pérez|Femenino|9|7 kyu|38 kg|141|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"160|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Janndra Paola Guerra Zarate|Femenino|8|7 kyu|38 kg|135|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"171|PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Joselyn Castolo Mendieta|Femenino|9|7 kyu|26 kg|130|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"233|CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Verde/Morada|ALAN ENRIQUE LARA DURAN|Masculino|9|4 KYU|30 kg|137|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"301|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Verde/Morada|Baruc Dominguez Castillo |Masculino|8|5 kyu|27 kg|118|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"342|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|FANNY MICHELLE ROLDAN CORONA|Femenino|8|7 kyu|26 kg|123|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"352|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|JUAN ALBERTO RODRÍGUEZ RAMÍREZ |Masculino|9|7 kyu|27 kg|141|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"363|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|MAYA RPDRÍGUEZ CAYETANO|Femenino|8|6 kyu|23 kg|125|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"377|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|YAEL MARTÍN ENRIQUEZ LÓPEZ |Masculino|9|7 kyu|37 kg|129|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"506|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|Alexa Victoria Meraz Montes|Femenino|8|5 kyu|33 kg|140|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"507|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|ALEXA YANELI MARTINEZ SOLIS|Masculino|9|7 kyu|50|144|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"535|CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|Paulina Villela Loya|Femenino|9|5 kyu|32 kg|130|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"564|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Verde/Morada|CARLOS YADBEL CORTES RODRIGUEZ|Masculino|8|7 kyu|21 kg|122|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
",568|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Verde/Morada|CRISTOPHER SONI ALVIREZ SANTIAGO|Masculino|8|7 kyu|20 kg|120|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"624|CHIHUAHUA|SANSEI JUKU|Infantil mixto 8 - 9 años C. Verde/Morada|DANIEL EDUARDO IBARRA ARREOLA|MASCULINO|9|7 KYU|52 KG|143|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"632|CHIHUAHUA|SANSEI JUKU|Infantil mixto 8 - 9 años C. Verde/Morada|MAURO GUERRERO SOSA|MASCULINO|8|7 KYU|23 KG|126|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"638|PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Verde/Morada|ABRIL ZOE SILVA DURÁN|Femenino|8|4 kyu|29 kg|130|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"652|PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Verde/Morada|JESÚS DAVID SORIANO CONTRERAS|Masculino|8|4 kyu|30 kg|127|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"715|VERACRUZ|SHOSHIN JUKU |Infantil mixto 8 - 9 años C. Verde/Morada|Rafael Cordoba Zarate|Masculino|9|7 kyu|27kg|128|KATA INDIVIDUAL|SENSEI MIGUEL DANIEL VILLEGAS CARRANCO",
"728|CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Verde/Morada|MARJALIN YAMILETH CANO RAMOS|Femenino|9|6 kyu|30 kg|135|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"734|CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Verde/Morada|XIMENA BORRALLES TRUJILLO|Femenino|9|6 kyu|34 kg|136|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];

var competidoresKataind8=["342|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Libre|FANNY MICHELLE ROLDAN CORONA|Femenino|8|7 kyu|26 kg|123|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"436|MORELOS|I.E.D. SHITO KAI|Infantil mixto 8 - 9 años C. Libre|Diego Perez Perez|Masculino|9|2 kyu|34 kg|133|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"608|SONORA|REN SHI KAI OBREGÓN|Infantil mixto 8 - 9 años C. Libre|Jesus Alejandro Molina Alvarez|Masculino|9|1 dan|42 kg|128|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
"638|PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Libre|ABRIL ZOE SILVA DURÁN|Femenino|8|4 kyu|29 kg|130|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"];

var competidoresKataind9=["107|PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Blanca|Andrea españa Diaz|Femenino|11|10 kyu|30 kg|147|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"161|PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Blanca|Jeidan Kaled Martinez Lopez|Masculino|10|10 kyu|36 kg|136|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"339|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|ERICK ALEJANDRO REYES AGUILAR|Masculino|9|10 kyu|35 kg|131|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"347|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|IRVING HERNÁNDEZ LÓPEZ|Masculino|11|10 kyu|43kg|134|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"354|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|KEVIN EMMANUEL GARCÍA DE LA CRUZ |Masculino|10|10 kyu|38kg|144|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"355|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|LUIS ARTURO ROMERO CORTÉS|Masculino|10|10 kyu|43 kg|142|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"357|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|MANUEL RICARDO LÓPEZ GARCÍA |Masculino|11|10 kyu|36kg|150|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"358|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|MARA BETZABE PÉREZ GALARZA|Femenino|10|10 kyu|37kg|148|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"383|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Ängeles de la Paz Ramírez|Femenino|10|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"386|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Cristina Isabel Ruiz Espinoza|Femenino|10|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"389|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Dulce Marely López Méndez|Femenino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"390|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Farid José Bustos Alavez|Masculino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"391|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Génesis Monserrat |Femenino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"393|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Hannia Fernanda Mata Rios|Femenino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"400|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Jesús Eduardo Aguirre Mata|Masculino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"402|OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Luz Denisse Gasga Flores|Femenino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"426|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Blanca|OSCAR OCTAVIO VEGA GONZALES|Masculino|10|10 kyu|28 kg|138|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"456|ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|IVONE FERNANDA GUARDADO|Femenino|9|10 kyu|23 kg|90|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"464|ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|RAMSES AARON ORTEGA CAMPOS|Masculino|10|10 kyu|35 kg|139|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"468|ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|THIRZA GETSEMANI ORTEGA CAMPOS|Femenino|11|10 kyu|35 kg|142|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"509|CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Blanca|ANGEL AARON SANDOVAL CRUZ|Masculino|10|10 kyu|35|136|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"574|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Blanca|Jesus Aberto Garcia Jimenez|Masculino|10|10 kyu|40 kg|142|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"579|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Blanca|Maria Fernanda Lozada Garcia|Femenino|11|10 kyu|52 kg|150|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"662|PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Blanca|MARISOL DOMINGUEZ GUERRERO|Femenino|10|9 kyu|30 kg|130|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"];

var competidoresKataind10=[
  "59|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Amarilla|JESUS ESCALANTE |Masculino|11|8 kyu|50 kg|140|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"87|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Amarilla|YAHIMA SASIL CANUL UK|Femenino|10|8 KYU|40 kg|140|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"135|PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Amarilla|Diego Ramírez Milla|Masculino|10|9 kyu|28 kg|120|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"230|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Amarilla|ABUNDIO GUILLERMO MALDONADO CAHUICH|Masculino|10|8 KYU|40 kg|142|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"244|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Amarilla|DAPHNE SARAI ESCOBAR GARCIA|Femenino|10|8 KYU|45 kg|145|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"257|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Amarilla|ISAAC ROJAS RAMOS |Masculino|10|8 KYU|29 KG|132|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"349|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|JAQUELINE AQUINO HERNÁNDEZ|Femenino|10|8 kyu|27 kg|136|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"360|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|MARISSA GARCÍA LIBRADO|Femenino|11|9 kyu|35 kg|141|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"369|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|RENATA GABRIELA GONZÁLEZ LOEZA|Femenino|11|8 kyu|35 kg|147|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"412|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Amarilla|ANGEL GABRIEL GERRERO CRUZ|Masculino|11|9 kyu|33 kg|133|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"416|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Amarilla|FRANCISCO JAVIER BONILLA LOPEZ |Masculino|11|8 kyu|38 kg|139|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"453|ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Amarilla|DIANA GALILEA GODINA GARAY|Femenino|10|10 kyu|30 kg|148|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"455|ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Amarilla|IAN ALEJANDRO RAMOS ELIZARRARAS|Masculino|11|8 kyu|56 kg|150|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"580|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Amarilla|Samuel Perez Morales|Masculino|11|9 kyu|44 kg|148|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"633|CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Amarilla|NORMANDO RIVAS DOMINGUEZ|MASCULINO|11|8 KYU|35 KG|147|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"657|PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Amarilla|JULIÁN AARÓN REYES MOEDANO|Masculino|11|9 kyu|40 kg|155|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"
];

var competidoresKataind11=[
  "12|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Jose Isaac Bedolla Lopez |Masculino|10|5 kyu|34|142|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"15|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Marcia Rueda Garcia |Femenino|10|6 kyu|36|136|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"17|PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Vania Yaretzi Perez Carrillo|Femenino|10|5 kyu|33|143|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
"32|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Verde/Morada|ARANZA VALDEZ DELGADO|Femenino|11|5 kyu|35 kg|155|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"76|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Verde/Morada|NATALIA SOFIA CALDERON ARANDA |Femenino|11|7 kyu|30 kg|110|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"173|PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Verde/Morada|Julián Corona Sandoval|Masculino|10|5 kyu|42 kg|141|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"226|TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Verde/Morada|Mónica Paola Ramos Frías|Femenino|10|4 kyu|27 kg|134|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"237|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Andres Jiménez Murrieta |Masculino|11|5 kyu|33 kg|145|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"239|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Carlos Eli Maldonado Federico|Masculino|11|7 kyu|33 kg|135|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"257|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|ISAAC ROJAS RAMOS |Masculino|10|8 KYU|29 KG|132|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"275|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Marali Sanchez Navarrete|Femenino|11|4 kyu|35 kg|135|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"285|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|SAUL VELA LOPEZ|Masculino|10|4 KYU|35 kg|147|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"328|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|ÁNGEL ROGELIO GARCÍA HERNÁNDEZ|Masculino|10|6 kyu|33 kg|138|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"334|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|CHRISTIAN ROLDAN CORONA|Masculino|11|7 kyu|47 kg|150|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"346|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|IAN MOISES ENRIQUEZ LÓPEZ|Masculino|11|7 kyu|49 kg|146|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"368|PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|RAMÓN SAÚL TOMÉ VÁZQUEZ|Masculino|10|4 kyu|37 kg|141|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"429|PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Verde/Morada|YUSSEF KURI HERNANDEZ|Masculino|10|7 kyu|34 kg|134|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"513|CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|DIEGO JARED GARCÍA GONZALEZ|Masculino|10|6 kyu|35|137|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"523|CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|Javier Francisco Corral|Masculino|10|7 kyu|37 kg|137|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"539|CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|TONATZIN SERRANO DURAN|Femenino|10|7 kyu|66|153|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"570|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Verde/Morada|Dara Casandra Rodriguez Carro.|Femenino|10|4 kyu|34 kg|134|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"618|CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Verde/Morada|Victor Alexis Navarro Rico|Masculino|10|5to Kyu|34.75|1.3|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"635|CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Verde/Morada|ORLANDO RIVAS DOMINGUEZ|MASCULINO|11|7 KYU|42 KG|150|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"666|PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Verde/Morada|MONSERRAT RAMÍREZ LÓPEZ|Femenino|10|4 kyu|64 kg|155|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"686|TABASCO|SHINWA-KAN|Infantil mixto 10 - 11 años C. Verde/Morada|QUINTIN IGNACIO DIAZ ALAYON|Masculino|10|5 kyu|50 kg|141|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
"692|QUINTANA ROO|SHITOKAI CANCÚN|Infantil mixto 10 - 11 años C. Verde/Morada|CANUL CASTILLO AGUSTIN ALEXANDER |Masculino|11|4 kyu|58kg|149|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"
];

var competidoresKataind12=[
  "34|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|ARTURO CHBLE|Masculino|11|3 kyu|40 kg|136|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"44|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|DAMIAN LOPEZ ARSIQUE|Masculino|11|3 kyu|30 kg|110|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"50|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|EMMNAUEL MOO ARZAPALO|Masculino|11|1 kyu|45 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"66|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|JULIO EFREN GUTIERREZ SIERRA |Masculino|11|3 kyu|46 kg|152|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"80|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|RODRIGO PINTO FLORES|Masculino|10|3 kyu|30 kg|140|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"217|TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Constanza Alejandra López Rodríguez|Femenino|10|1 kyu|30 kg|132|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"225|TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Kothy Jiménez Sordo|Femenino|10|1 kyu|31 kg|133|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"228|TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Paulina Sofía Méndez Sánchez|Femenino|11|1 kyu|58 kg|148|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"274|CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Libre|Kevin Alonzo Arrocha Lempino|Masculino|11|2 kyu|32 kg|135|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"440|MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Kathia Alexandra Villanueva Rueda|Femenino|11|1 dan|38 kg|143|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"441|MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Norma Yamilette Mackan Bautista|Femenino|11|1 kyu|39 kg|150|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"443|MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Santiago Perez Perez|Masculino|11|1 kyu|31 kg|140|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"444|MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Santiago Perez Ruiz|Masculino|10|2 kyu|38 kg|140|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"495|PUEBLA|JAGUARES TERÁN |Infantil mixto 10 - 11 años C. Libre|Maria Fernanda Lopez Herrada|Femenino|11|1 dan|31 kg|141|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"541|CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Libre|Yehosua Danhayel Reza Flores|Masculino|10|1 kyu|35 kg|137|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"562|TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Libre|Ariadna Daniela Reyes Miguel|Femenino|11|1 dan|47 kg|150|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"610|SONORA|REN SHI KAI OBREGÓN|Infantil mixto 10 - 11 años C. Libre|Mariana Cabral Lopez|Femenino|11|1 dan|60 kg|157|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
"619|CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Libre|Yadier Uriel Palacios Soto|Masculino|10|1er kyu|42.4|1.42|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"651|PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Libre|IVANA RAMÍREZ CASTILLO|Femenino|11|3 kyu|33 kg|136|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"693|QUINTANA ROO|SHITOKAI CANCÚN|Infantil mixto 10 - 11 años C. Libre|CANUL CASTILLO AYLIN ALEXANDRA|Femenino|11|3 kyu|30 kg|145|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
"716|CHIAPAS|SHU SEI KAN|Infantil mixto 10 - 11 años C. Libre|AXEL KALEB MARTINEZ VERDUGO|Masculino|11|2 kyu|41 kg|142|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
"717|CHIAPAS|SHU SEI KAN|Infantil mixto 10 - 11 años C. Libre|BRAULIO FERNANDO MORALES MADRID |Masculino|11|2 kyu|43 kg|145|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];
var competidoresKataind13=[
  "245|CAMPECHE|CD DEL CARMEN |Infantil femenil 12 - 13 años C. Blanca |Diana Cristina Herrera Ramírez|Femenino|13|10 kyu|54 kg|132|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"380|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Blanca |YAZMÍN CARVAJAL MARQUEZ|Femenino|12|10 kyu|44 kg|153|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"385|OAXACA|DENSHO JUKU TONATIUH|Infantil femenil 12 - 13 años C. Blanca |Cristian Jael López Lucas|Masculino|12|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"396|OAXACA|DENSHO JUKU TONATIUH|Infantil femenil 12 - 13 años C. Blanca |Ingrid Janeth Cortés Galeana|Femenino|11|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
"462|ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Blanca |LUZ ABIGAIL DE LA ROSA CALDERON|Femenino|13|10 kyu|44 kg|144|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"484|PUEBLA|JAGUARES TERÁN |Infantil femenil 12 - 13 años C. Blanca |Jocelyn Vargas Sanchez|Femenino|12|9 kyu|45 kg|153|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"561|TLAXCALA|KENSEIKAI TLAXCALA|Infantil femenil 12 - 13 años C. Blanca |Angel Ulises Flores Sanchaz|Masculino|13|10 kyu|58 kg|155|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"569|TLAXCALA|KENSEIKAI TLAXCALA|Infantil femenil 12 - 13 años C. Blanca |DANIELA SCARET GRANILLO ALVIREZ|Femenino|12|9 kyu|42 kg|149|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO"

]
var competidoresKataind14=[
  "313|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil femenil 12 - 13 años C. Amarilla |Lorena Medrano Juarez|Femenino|13|9 kyu|57kg|154|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"337|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Amarilla |DIANA VALERIA AQUINO HERNÁNDEZ|Femenino|12|8 kyu|36 kg|147|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"448|ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |ANDREA DESIREE MARTINEZ GARCIA|Femenino|13|8 kyu|43 kg|158|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"452|ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |DANNA KAREN PALOMO ORTIZ|Femenino|13|10 kyu|41 kg|140|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"460|ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |KARLA JUDITH REYES VENEGAS|Femenino|13|8 kyu|40 kg|149|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"620|CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Amarilla |ANA GEORGINA ORTEGA VALDEZ|FEMENINO|12|8 KYU|42 KG|160|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"621|CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Amarilla |ANA PAOLA ORTEGA VALDEZ|FEMENINO|12|8 KYU|43 KG|160|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"
];

var competidoresKataind15=[
  "111|PUEBLA|BUAP|Infantil femenil 12 - 13 años C. Verde/Morada|Ángel Mani Mendiola|Masculino|12|5 kyu|47 kg|158|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"291|CAMPECHE|CD DEL CARMEN |Infantil femenil 12 - 13 años C. Verde/Morada|Yarelli Angélica García Pérez|Femenino|13|4 kyu|56 kg|155|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"332|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|BLANCA ESTELA XOLALPA ALDUCIN|Femenino|12|7 kyu|37 kg|147|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"341|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|EVELYN RODRÍGUEZ RAMÍREZ |Femenino|12|5 kyu|68 kg|159|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"364|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|MICHELLE IRANZU SAAVEDRA CELIS|Femenino|12|6 kyu|57 kg|157|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"367|PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|NORMA ISABEL HERNÁNDEZ MONTIEL|Femenino|12|5 kyu|55 kg|146|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"517|CHIHUAHUA|JIN JUKU	|Infantil femenil 12 - 13 años C. Verde/Morada|GAEL ALEXANDER GARCÍA GONZALEZ|Masculino|12|7 kyu|38|143|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"529|CHIHUAHUA|JIN JUKU	|Infantil femenil 12 - 13 años C. Verde/Morada|Mario Alberto Carbajal |Masculino|12|5 kyu|45 kg|154|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN"
];

var competidoresKataind16=[
  "26|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre|ANA SANCHEZ URIBE|Femenino|13|1 kyu|50 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"27|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre|ANDREA ALPUCHE GONGORA|Femenino|12|3 kyu|38 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"89|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre|YOKARI RODRIGUEZ MORLES|Masculino|12|1 dan|37 kg|155|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"437|MORELOS|I.E.D. SHITO KAI|Infantil femenil 12 - 13 años C. Libre|Dulce Fernanda Cortez Chavez|Femenino|12|1 dan|55 kg|153|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
"651|PUEBLA|SEISHIN DOJO|Infantil femenil 12 - 13 años C. Libre|IVANA RAMÍREZ CASTILLO|Femenino|11|3 kyu|33 kg|136|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"720|CHIAPAS|SHU SEI KAN|Infantil femenil 12 - 13 años C. Libre|IVANYA GUADALUPE CUEVAS ZARATE|Femenino|12|2 kyu|45 kg|150|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

]

var competidoresKataind17=[
  "283|CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Blanca |Rubén Rodríguez Sánchez|Masculino|13|10 kyu|50 kg|160|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"414|PUEBLA|DOJO DEL SUR-UVP|Infantil varonil 12 - 13 años C. Blanca |EDGAR FIDEL VEGA GONZALES|Masculino|13|10 kyu|83 kg|163|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
"451|ZACATECAS|IPPUUKAN|Infantil varonil 12 - 13 años C. Blanca |CARLOS ALEJANDRO GARCIA BUGARIN|Masculino|12|10 kyu|62 kg|151|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"614|SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Blanca |Romario Sagaste Mendivil|Masculino|13|1 dan|34 kg|140|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
"650|PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Blanca |GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"
];

var competidoresKataind18=[
  "459|ZACATECAS|IPPUUKAN|Infantil varonil 12 - 13 años C. Amarilla |JUAN MANUEL OLOÑO CARDENAS|Masculino|13|8 kyu|55 kg|157|KATA INDIVIDUAL|SENSEI IRMA PALOS",
"583|PUEBLA|MUSHIN JUKU|Infantil varonil 12 - 13 años C. Amarilla |Aldo Meneses Sandoval|Masculino|13|9 kyu|57 kg|168|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
"650|PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Amarilla |GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"684|TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Amarilla |LUCAS GABRIEL GARCIA GORDILLO|Masculino|13|8 kyu|60 kg|158|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
"704|QUINTANA ROO|SHITOKAI CANCÚN|Infantil varonil 12 - 13 años C. Amarilla |LUNA VAZQUEZ IAN KENNEY |Masculino|13|8 kyu|38.5|151|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"


];

var competidoresKataind19=[
  "60|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Verde/Morada|JORDAN LOPEZ CHI|Masculino|13|5 kyu|70 kg|160|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "222|TABASCO|C.E.K.A.T. |Infantil varonil 12 - 13 años C. Verde/Morada|Fausto Emiliano Vera Villanueva|Masculino|12|4 kyu|55 kg|148|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "251|CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Guillermo Alexis Sarricolea Hernández|Masculino|13|4 kyu|55 kg|162|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "268|CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Jose Manuel Moreno de la Fuente|Masculino|13|4 kyu |50 kg|160 |KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "289|CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Victor Giovanni Gonzalez Jimenez|Masculino|13|6 kyu|52kg|160|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "299|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil varonil 12 - 13 años C. Verde/Morada|Alam Balam Perez Romero|Masculino|13|5 kyu|47 kg|152|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "320|PUEBLA|DENSHO JUKU AGUA SANTA|Infantil varonil 12 - 13 años C. Verde/Morada|Oscar Evangelista Dimas|Masculino|13|7 kyu|45 kg|145|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "361|PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|MAURICIO RODRÍGUEZ CAMARILLO|Masculino|12|5 kyu|45 kg|162|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "376|PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|YAEL AGUILAR ORTÍZ|Masculino|12|6 kyu|38 kg|161|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "378|PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|YAIR LUNA PONCE|Masculino|13|7 kyu|54 kg|158|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "420|PUEBLA|DOJO DEL SUR-UVP|Infantil varonil 12 - 13 años C. Verde/Morada|JOSE ROBERTO DE LA LUZ MITZI|Masculino|13|7 kyu|60 kg|155|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "479|PUEBLA|JAGUARES TERÁN |Infantil varonil 12 - 13 años C. Verde/Morada|Diego González Fernández |Masculino|12|5 kyu|40 kg|142|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "514|CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Verde/Morada|Emilio Soto Salas|Masculino|13|6 kyu|48 kg|160|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "518|CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Verde/Morada|GAEL DURAN ROBLES|Masculino|13|7 kyu|59|169|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "617|CHIHUAHUA|SANSEI JUKU|Infantil varonil 12 - 13 años C. Verde/Morada|Estephany Yamilet Navarro Rico|Femenino|12|5to Kyu|75|1.54|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "655|PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Verde/Morada|JOSÉ ANTONIO RAMÍREZ SAUCEDO|Masculino|13|6 kyu|54 kg|154|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKataind20=[
  "46|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Libre|DIEGO CABALLERO|Masculino|13|3 kyu|47 kg|160|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "47|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Libre|EDEN ARTURO VALLE VAZQUEZ|Masculino|13|1 kyu|36 kg|148|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "88|YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Libre|YAHIR ESPINOZA GARZA|Masculino|13|2 kyu|49 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "248|CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Libre|Emiliano flores zausa|Masculino|12|2 kyu|50 kg|150 |KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "296|QUINTANA ROO|CENTRO TÉCNICO DEPORTIVO JUNPUU-KAN COZUMEL|Infantil varonil 12 - 13 años C. Libre|Jesus Alejandro Och Cua|Masculino|13|1 kyu|50 kg|160|KATA INDIVIDUAL|SENSEI HELSER EDGARDO CHACON OSORIO",
  "434|MORELOS|I.E.D. SHITO KAI|Infantil varonil 12 - 13 años C. Libre|Axel Gadiel Dimas Salgado|Masculino|12|1 dan|44 kg|147|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "504|PUEBLA|JAGUARES TERÁN |Infantil varonil 12 - 13 años C. Libre|Yahir Jaziel  Lopez Herrada|Masculino|13|1 dan|42 kg|154|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "511|CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Libre|César Alejandro Quintana Moya|Masculino|12|1 kyu|30 kg|145|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "612|SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Libre|Nikolas Tamayo Morales|Masculino|12|1 dan|42 kg|157|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "615|SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Libre|Santiago Vega Batiz|Masculino|12|1 dan|39 kg|142|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "631|CHIHUAHUA|SANSEI JUKU|Infantil varonil 12 - 13 años C. Libre|MARIO ALBERTO CARRILLO PEREZ|MASCULINO|13|1 KYU|52 KG|174|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "680|TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|EMMANUEL ESTABAN PIERREL HERNANDEZ|Masculino|13|1 kyu|52 kg|160|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "682|TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|LEONARDO DOMINGUEZ SACAMITZIN|Masculino|11|2 kyu|61 kg|159|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "685|TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|PABLO NICOLAS PIERREL HERNANDEZ|Masculino|12|2 kyu|45 kg|141|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "733|CHIAPAS|SHU SEI KAN|Infantil varonil 12 - 13 años C. Libre|VULMARO ALBERTO MARTINEZ VERDUGO|Masculino|13|2 kyu|45 kg|145|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKataind21=[
  "194|PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Blanca|Mary Cruz Gomez Hernandez|Femenino|14|10 kyu|53 kg|157|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "254|CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Heidy Guadalupe Collado Peña|Femenino|14|10 kyu|50 kg|150|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "260|CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Jennifer Hervis López|Femenino|14|10 kyu|73 kg|165|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "279|CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Michelle Guadalupe Herrera Castillo|Femenino|14|10 kyu|50 kg|150|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "356|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Blanca|MAGALI ZEPEDA VENTURA |Femenino|15|10 kyu|59.5kg|158|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "382|OAXACA|DENSHO JUKU TONATIUH|Juvenil femenil 14 - 15 años C. Blanca|Alondra Zulem Martínez López|Femenino|14|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "478|PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Blanca|Diana Vianey Meza|Femenino|15|10 kyu|52 kg|154|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "482|PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Blanca|Fabiola Moreno Sorcia|Femenino|15|10 kyu|55 kg|154|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN"

];
var competidoresKataind22=[
  "28|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Amarilla|ANDREA VALENTINA CALDERON ARANDA |Femenino|14|9 kyu|60 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "31|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Amarilla|ARANZA MONTAÑEZ|Femenino|15|8 kyu|55 kg|160|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "127|PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Amarilla|DANIELA LOPEZ FLORES|Femenino|14|8 kyu|40 kg|155|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "197|PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Amarilla|MONICA ARLETTE CUAYA COAT|Femenino|15|8 kyu|51 kg|164|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "344|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Amarilla|GUADALUPE REYNA VÁZQUEZ HERNÁNDEZ|Femenino|15|9 kyu|55 kg|157|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "467|ZACATECAS|IPPUUKAN|Juvenil femenil 14 - 15 años C. Amarilla|ROMMY YORMERICASAS REYES|Femenino|15|8 kyu|55 kg|156|KATA INDIVIDUAL|SENSEI IRMA PALOS"

];
var competidoresKataind23=[
  "101|PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Verde/Morada|ALEJANDRA GONZALEZ VEANO|Femenino|14|6 kyu|54 kg|155|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "269|CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Verde/Morada|JOSELINE OROZCO METELIN|Femenino|14|7 KYU|56 KG|154|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "273|CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Verde/Morada|KARINE RAJAS RAMOS  |Femenino|16|4 KYU|50 KG|157|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "302|PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil femenil 14 - 15 años C. Verde/Morada|Caren Gomez Archundia |Femenino|15|7 kyu|56 kg|152|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "325|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Verde/Morada|ANA KAREN RODRÍGUEZ RAMÍREZ|Femenino|14|5 kyu|57 kg|163|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "359|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Verde/Morada|MARIA JOSÉ RAMOS PORTILLO|Femenino|15|4 kyu|57 kg|163|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "425|PUEBLA|DOJO DEL SUR-UVP|Juvenil femenil 14 - 15 años C. Verde/Morada|NAYIB KURI HERNANDEZ|Masculino|14|7 kyu|60 kg|164|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "498|PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Verde/Morada|Noelia Estefania Zepeda Coyotl|Femenino|16|6 kyu|40 kg|142|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "502|PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Verde/Morada|Tania Rosales Onofre|Femenino|16|6 kyu|56 kg|156|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "516|CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|FRANCISCO JULIAN SERRANO DURAN|Masculino|14|7 kyu|73|170|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "530|CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|Martha Guadalupe Miranda Parga|Femenino|14|7 kyu|74 kg|158|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "533|CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|NAOMI MERCANO NUÑEZ|Femenino|14|5 kyu|60|167|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "689|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 14 - 15 años C. Verde/Morada|ANDREA QUINTAL GARCIA|Femenino|14|6 KYU|42.5 KG|149|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "713|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 14 - 15 años C. Verde/Morada|VIRIDIANA ARCENIO CAT|Femenino|14|5 KYU|53.8 KG|149|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKataind24=[
  "36|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|CAMILA PAEZ|Femenino|14|1 dan|45 kg|168|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "52|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|GABRIELA HERRERA MOLINA|Femenino|15|1 kyu|40 kg|140|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "73|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|MARIA KARINA SANCHEZ URIBE|Femenino|14|1 kyu|60 kg|171|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "104|PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Libre|Analletzin Nolasco Espinosa|Femenino|15|1 dan|78 kg|160|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "325|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Libre|ANA KAREN RODRÍGUEZ RAMÍREZ|Femenino|14|5 kyu|57 kg|163|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "359|PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Libre|MARIA JOSÉ RAMOS PORTILLO|Femenino|15|4 kyu|57 kg|163|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "438|MORELOS|I.E.D. SHITO KAI|Juvenil femenil 14 - 15 años C. Libre|Fernanda Lopez Salazar|Femenino|15|1 dan|51 kg|159|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO"
];
var competidoresKataind25=[
  "180|PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Blanca|Llinas Brito Marian Patricia |Femenino|16|10 kyu|85 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "394|OAXACA|DENSHO JUKU TONATIUH|Juvenil femenil 16 - 17 años C. Blanca|Heber Jafet Martínez López|Masculino|16|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "628|CHIHUAHUA|SANSEI JUKU|Juvenil femenil 16 - 17 años C. Blanca|LORENA ISELA ESTRADA AVITIA|FEMENINO|16|10 KYU|59 KG|155|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "703|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Blanca|LIZBETH ALEJANDRA ABURTO AGUIRRE|Femenino|16|10 KYU|43 KG|156|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKataind26=[
  "99|PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Amarilla|ABIGAIL MENDOZA TENORIO|Femenino|17|8 kyu|61 kg|156|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "447|ZACATECAS|IPPUUKAN|Juvenil femenil 16 - 17 años C. Amarilla|ALONDRA GETSEMANI CAMPOS GARCIA|Femenino|15|8 kyu|39 kg|158|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "627|CHIHUAHUA|SANSEI JUKU|Juvenil femenil 16 - 17 años C. Amarilla|KRISHNA  HEREDIA GARCIA|FEMENINO|16|8 KYU|45 KG|158|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKataind27=[
  "159|PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Verde/Morada|Janeth Morales Ramos|Femenino|17|4 kyu|67 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "211|PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Verde/Morada|Ximena Jimenez Porras|Femenino|16|6 kyu|54 kg|168|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "273|CAMPECHE|CD DEL CARMEN |Juvenil femenil 16 - 17 años C. Verde/Morada|KARINE RAJAS RAMOS  |Femenino|16|4 KYU|50 KG|157|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "422|PUEBLA|DOJO DEL SUR-UVP|Juvenil femenil 16 - 17 años C. Verde/Morada|MARGARITA BELEN CONDADO FLORES |Femenino|16|7 kyu|55 kg|156|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "473|PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|Arleth Juárez Guzmán|Femenino|16|6 kyu|65 kg|158|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "486|PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|José Alberto Ortega Becerril|Masculino|16|6 kyu|59 kg|162|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "503|PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|Vanessa Mondragon Ángeles|Femenino|16|6 kyu|60 kg|161|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN"

];
var competidoresKataind28=[
  "25|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 16 - 17 años C. Libre|ANA PAOLA VALLE VALLE |Femenino|17|3 kyu|53 kg|167|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "33|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 16 - 17 años C. Libre|ARMANDO FLORES|Masculino|16|1 kyu|60 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "645|PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|ANGÉLICA VICTORIANO SEVERO|Femenino|16|1 dan|60 kg|162|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "661|PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|MARIEL TECUAPETLA FUENTES|Femenino|17|1 dan|50 kg|153|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "669|PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|ROSA MARÍA MUÑÓZ APARICIO|Femenino|16|1 dan|50 kg|150|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "701|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|JAZMIN BAUTISTA CRUZ|Femenino|17|1 KYU|52 KG|150|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "707|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|PERLA UC ABAN  |Femenino|16|1 KYU|50 KG|155|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKataind29=[
  "113|PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Blanca|Axel Emmanuel Espinoza Perez|Masculino|15|10 kyu|60 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "186|PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Blanca|Manuel Alejandro Hernandez Jimenez|Masculino|15|10 kyu|49 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "240|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Carlos Manuel Pérez Cruz |Masculino|14|10 kyu|55 kg|165|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "249|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Francisco Moisés Ojeda Gerónimo|Masculino|15|10 kyu|55 kg|153|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "253|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Haziel Dair Barrón Jiménez|Masculino|15|10 kyu|73 kg|170|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "258|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Jaime Valdez Mendoza |Masculino|14|10 kyu|55 kg|173|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "263|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Jorge Emilio Román Capilla|Masculino|14|10 kyu|55 kg|160|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "304|PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 14 - 15 años C. Blanca|Carlos Ariel Mora Juarez |Masculino|15|10 kyu|54 kg|160|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "384|OAXACA|DENSHO JUKU TONATIUH|Juvenil varonil 14 - 15 años C. Blanca|Axel René Serret Zaguilán|Masculino|15|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "475|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Arturo De Luis Olivares|Masculino|15|10 kyu|61 kg|167|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "487|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Jose Rafael Hernandez|Masculino|15|10 kyu|63 kg|170|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "489|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Julio cesar De Los Santos|Masculino|15|10 kyu|85 kg|176|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "650|PUEBLA|SEISHIN DOJO|Juvenil varonil 14 - 15 años C. Blanca|GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKataind30=[
  "102|PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Amarilla|ALFREDO CUAUTLE DIAZ|Masculino|15|8 kyu|59 kg|167|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "205|PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Amarilla|Sergio Castañeda Ramos |Masculino|14|9 kyu|45 kg|154|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "309|PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 14 - 15 años C. Amarilla|Jesus Ismael Castro Flores|Masculino|15|8 kyu|61 kg|165|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "522|CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Amarilla|Israel Chavira Dávila|Masculino|15|8 kyu|75 kg|178|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "622|CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Amarilla|ANGEL OSMAR HEREDIA GARCIA|MASCULINO|14|8 KYU|65 KG|170|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA "

];

var competidoresKataind31=[
  "23|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Verde/Morada|ALEXIS MORALES|Masculino|16|7 kyu|60 kg|163|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"83|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Verde/Morada|URIEL FCO HERNANDEZ |Masculino|14|7 kyu|70 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"206|PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Verde/Morada|Sergio Martinez Gonzalez|Masculino|15|6 kyu|57 kg|162|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"238|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Ángel Abraham Cruz Estevan|Masculino|14|7 kyu|56 kg|172|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"242|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Damián Bautista Martínez|Masculino|15|7 kyu|80 kg|169|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"243|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Daniel Alejandro Laines Ceballos|Masculino|15|4 kyu|56 kg|158|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"246|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Edson Ivan Sanchez Navarrete|Masculino|14|4 kyu|44kg|165|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"297|QUINTANA ROO|CENTRO TÉCNICO DEPORTIVO JUNPUU-KAN COZUMEL|Juvenil varonil 14 - 15 años C. Verde/Morada|Joaquin Jesus Dzul Nah|Masculino|14|7 kyu|65 kg|158|KATA INDIVIDUAL|SENSEI HELSER EDGARDO CHACON OSORIO",
"305|PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 14 - 15 años C. Verde/Morada|Carlos Gael Gonzalez Hernandez|Masculino|14|4 kyu|52kg|162|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"333|PUEBLA|DENSHO JUKU GANBARU|Juvenil varonil 14 - 15 años C. Verde/Morada|CARLOS  ALBERTO RAMIREZ DIAZ|Masculino|14|6 kyu|73 kg|180|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
"480|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Erick Diaz Guzman|Masculino|15|4 kyu|64 kg|165|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"481|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Estefania Hernández Morales|Femenino|16|6 kyu|44 kg|150|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"497|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Noel Campos|Masculino|16|6 kyu|62 kg|170|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"500|PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Rodolfo Ponce Morales|Masculino|16|6 kyu|46 kg|165|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
"536|CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Verde/Morada|Ricardo Aguirre|Masculino|15|7 kyu|71 kg|165|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"636|CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Verde/Morada|SEBASTIAN MORA LUGO|MASCULINO|14|6 KYU|42 KG|163|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"679|CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Verde/Morada|ROCCO ALEXANDER PEÑA|MASCULINO|15|6 KYU|69 KG|175|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"702|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 14 - 15 años C. Verde/Morada|JUAN PUC HERRERA|Masculino|14|4 KYU|57.0 KG|170|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
"712|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 14 - 15 años C. Verde/Morada|URIEL QUINTAL GARCIA|Masculino|16|5 KYU|60.3 KG|160|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKataind32=[
  "40|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|CARLOS PACHON MENDEZ|Masculino|14|1 kyu|58 kg|160|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"78|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|RICARDO ZAPATA|Masculino|15|1 kyu|55 KG|160|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"85|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|VICTOR UC|Masculino|14|1 kyu|40 kg|155|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
"224|TABASCO|C.E.K.A.T. |Juvenil varonil 14 - 15 años C. Libre|Javier Arturo Ramírez García|Masculino|14|1 dan|48 kg|154|KATA INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
"232|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Agustin Montiel Cuevas|Masculino|14|1 dan|55 kg|170|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"265|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Jose Angel Hernandez Minero|Masculino|14|1 dan|65 kg|1.69|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"282|CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Ricardo Andres Guevara Bojorquez|Masculino|15|1 dan|47kg|155|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"521|CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Libre|Huri Alejandro Aparicio|Masculino|15|2 kyu|54 kg|162|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"532|CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Libre|Miguel Durán Rodríguez |Masculino|15|1 kyu|54 kg|168|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
"575|TLAXCALA|KENSEIKAI TLAXCALA|Juvenil varonil 14 - 15 años C. Libre|Jose Antonio Paredes Peres|Masculino|15|2 kyu|65 kg|170|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
"598|ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 14 - 15 años C. Libre|Erick Samuel Lara Albarran|Masculino|15|1 dan|68 kg|169|KATA INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
"602|ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 14 - 15 años C. Libre|Kury Jhavvid Cajero Mesino|Masculino|15|1 kyu|67 kg|169|KATA INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
"623|CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Libre|CRISTHOPER CHACON VARELA |MASCULINO|14|1 KYU|57 KG|166|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"634|CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Libre|OCTAVIO MORALES FLORES|MASCULINO|14|1 KYU|65 KG|175|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
"649|PUEBLA|SEISHIN DOJO|Juvenil varonil 14 - 15 años C. Libre|EMILIO RAMÍREZ LÓPEZ|Masculino|14|3 kyu|74 kg|177|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
"729|CHIAPAS|SHU SEI KAN|Juvenil varonil 14 - 15 años C. Libre|MAURICIO GOMEZ ALCAZAR|Masculino|14|2 kyu|53 kg|163|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKataind33=[
  "397|OAXACA|DENSHO JUKU TONATIUH|Juvenil varonil 16 -17 años C. Blanca|Isael López Diaz|Masculino|17|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS"
];
var competidoresKataind34=[
  "65|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 -17 años C. Amarilla|JULIAN VILLARREAL|Masculino|17|8 kyu|70 KG|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "139|PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|ENRIQUE LOPEZ DELFIN|Masculino|16|8 kyu|55 kg|168|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "144|PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|Ezequiel Sanchez Morales|Masculino|16|8 kyu|60 kg|155|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "166|PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|Jorge Luis Roldan Luengas|Masculino|16|9 kyu|60 kg|170|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "457|ZACATECAS|IPPUUKAN|Juvenil varonil 16 -17 años C. Amarilla|JESUS PAZ MAYO|Masculino|16|8 kyu|65 kg|170|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "493|PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 -17 años C. Amarilla|Luis Fernando Perez Romero|Masculino|16|9 kyu|83 kg|170|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "670|PUEBLA|SEISHIN DOJO|Juvenil varonil 16 -17 años C. Amarilla|SERGIO ANTONIO LABASTIDA GALLARDO|Masculino|16|9 kyu|52 kg|169|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "691|QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 16 -17 años C. Amarilla|CAAMAL LORIA VICTOR|Masculino|17|8 kyu|78 kg|169|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKataind35=[
  "42|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Verde/Morada|CHRISTOPHER ALMEIDA|Masculino|16|5 kyu|100 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "131|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|David Antonio Rodriguez Oyarzabal|Masculino|16|6 kyu|57 kg|170|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "155|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|IRVING CERVANTES LUCERO|Masculino|17|6 kyu|54 kg|173|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "162|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Jesus Joel Vazquez Valencia|Masculino|16|5 kyu|65 kg|171|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "165|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Jorge Isaac Alvarez Pelaez|Masculino|16|7 kyu|71 kg|173|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "182|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Luis Alberto Aguilar Corona |Masculino|16|6 kyu|68 kg|172|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "306|PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 16 - 17 años C. Verde/Morada|Cristian Ramirez Mendez|Masculino|17|5 kyu|57 kg|162|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "477|PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Daniel Velasco Martínez|Masculino|17|4 kyu|50 kg|170|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "483|PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Javier Sánchez Olaya |Masculino|17|5 kyu|63 kg|172|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "491|PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Luis Ángel Muñoz Cortes|Masculino|17|4 kyu|62 kg|167|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "494|PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Marcos Bautista Muñoa|Masculino|16|6 kyu|74 kg|171|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "604|ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 16 - 17 años C. Verde/Morada|Orlando Jesus Moran Bernal|Masculino|16|5 kyu|59 kg|171|KATA INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "656|PUEBLA|SEISHIN DOJO|Juvenil varonil 16 - 17 años C. Verde/Morada|JUAN PABLO GUTIÉRREZ RAMÍREZ|Masculino|16|5 kyu|65 kg|162|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "683|TABASCO|SHINWA-KAN|Juvenil varonil 16 - 17 años C. Verde/Morada|LOUIS SEBASTIEN PIERREL HERNANDEZ|Masculino|16|6 kyu|65 kg|165|KATA INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS"
]
var competidoresKataind36=[
  "21|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|ALEJANDRO ALPUCHE GONGORA|Masculino|16|1 dan|50 kg|168|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "63|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|JOSE GUEVARA PEREZ|Masculino|17|1 kyu|75 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "72|YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|LUIS PINTO FLORES|Masculino|17|1 kyu|58 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "91|VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil varonil 16 - 17 años C. Libre|Emanuel Rafael Muñoz Barradas|Masculino|16|1 dan|70 kg|175|KATA INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "94|VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil varonil 16 - 17 años C. Libre|ludwid Axxel Casados Ramirez|Masculino|16|1 dan|67 kg|165|KATA INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "109|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|Ángel Cruz Ortega|Masculino|17|3 kyu|63 kg|174|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "124|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|CRISTIAN JONATHAN MARTINEZ OCHOA|Masculino|16|1 kyu|57 kg|169|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "169|PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|José Carlos del Villar Rojas|Masculino|17|1 kyu|60 kg|174|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "405|VERACRUZ|DENSHO JUKU XALAPA |Juvenil varonil 16 - 17 años C. Libre|Eduardo Cova|Masculino|17|3 kyu|70 kg|180|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "439|MORELOS|I.E.D. SHITO KAI|Juvenil varonil 16 - 17 años C. Libre|Jesus Antonio Cortez Chavez|Masculino|16|1 dan|65 kg|175|KATA INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "607|SONORA|REN SHI KAI OBREGÓN|Juvenil varonil 16 - 17 años C. Libre|Jesus Alejandro Cuervo Flores|Masculino|16|1 dan|59 kg|167|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ"
];
var competidoresKataind37=[
  "2|PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Anahi Amel Ciriaco|Femenino|18|10 kyu|42|143|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "3|PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Anayeli Velazquez Encarnacion |Femenino|18|10 kyu|56|144|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "8|PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Fatima Reyes Sanchez |Femenino|21|10 kyu|47|157|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "121|PUEBLA|BUAP|Adulto Femenil C. Blanca|CARMEN NUÑEZ ZAVALETA|Femenino|18|10 kyu|71 kg|159|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "336|PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Blanca|CONSUELO MÁRQUEZ TREJO|Femenino|27|10 kyu|50 kg|151|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "374|PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Blanca|SILVIA SUÁREZ CLEMENTE|Femenino|34|10 kyu|50kg|152|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "710|QUINTANA ROO|SHITOKAI CANCÚN|Adulto Femenil C. Blanca|SONIA CAROLINA CHI JIMENEZ|Femenino|18|10 KYU|60 KG|150|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"
];
var competidoresKataind38=[
  "53|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Amarilla|GABRIELA VILLARREAL|Femenino|19|8 kyu|55 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "64|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Amarilla|JUDITH ESCALANTE|Femenino|18|6 kyu|50 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "256|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|HILARI JIMENEZ ORTIZ|Femenino|40|9 KYU|40 KG|146|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "276|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|MARIA AMPARO DEL JESUS MARIN|Femenino|44|9 KYU|72 KG|155|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "277|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Mariana Javier Arias|Femenino|19|9 kyu|66 kg|152|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "281|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Nahomi Itzel Álvarez May|Femenino|20|10 kyu|46kg|149|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "286|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Sheila Yesenia Cupil Ovando |Femenino|23|9 kyu|64 kg|163|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "290|CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Yamile Anahi Ceballos Hernandez|Femenino|20|9 kyu|56 kg|156|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "474|PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Amarilla|Arlette Lopez de Jesus |Femenino|19|9 kyu|52 kg|155|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "496|PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Amarilla|Maricela De Jesus Castañeda|Femenino|40|9 kyu|64 kg|160|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "658|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Amarilla|KARLA MARIANA CRUZ GUERRERO|Femenino|23|8 kyu|60 kg|156|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "725|CHIAPAS|SHU SEI KAN|Adulto Femenil C. Amarilla|LAURA JAZMIN MIRAVETE INURRETA|Femenino|18|8 kyu|60 kg|155|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKataind39=[
  "75|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Verde/Morada|MICHELLE NAVARRO ANDRADE|Femenino|17|5 kyu|48 kg|153|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "122|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|CITLALI ALVA TRUJILLO|Femenino|28|6 kyu|76 kg|161|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "154|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|INGRID MARISOL FLORES MORA|Femenino|19|5 kyu|55 kg|154|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "178|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|LILIA CRISTINA CAZARES SOSA|Femenino|19|7 kyu|62 kg|152|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "181|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|Lorena Ahuat Ortigoza |Femenino|18|5 kyu|51 kg|151|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "189|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|MARIANA LOPEZ FLORES|Femenino|19|4 kyu|69 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "193|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|Mary Carmen Barranco Montoya|Femenino|30|5 kyu|80 kg|160|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "202|PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|SANDRA RODRIGUEZ CORREA|Femenino|22|5 kyu|70 kg|157|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "307|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Femenil C. Verde/Morada|Denisse Lopez Hernandez|Femenino|22|4 kyu|56 kg|151|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "321|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Femenil C. Verde/Morada|Wendy Dominguez Sanchez|Femenino|25|5 kyu|64 kg|149|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "338|PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Verde/Morada|EMILIA HUERTA DE LA CRUZ|Femenino|19|4 kyu|67 kg|164|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "371|PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Verde/Morada|SANDRA FRANCO VELASQUEZ|Femenino|25|5 kyu|51 kg|153|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "431|PUEBLA|GENRUY KAN|Adulto Femenil C. Verde/Morada|Mireya Maldonado Vidal|Femenino|24|5 kyu|68 kg|80|KATA INDIVIDUAL|SENSEI ELIAS MARROQUÍN",
  "471|PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Verde/Morada|Andrea Rodríguez Ramos|Femenino|17|4 kyu|54 kg|163|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "472|PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Verde/Morada|Angeles Hernadez Hernandez|Femenino|22|6 kyu|61 kg|158|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "593|PUEBLA|MUSHIN JUKU|Adulto Femenil C. Verde/Morada|María del Rosario Angulo Rocha|Femenino|23|6 kyu|54 kg|162|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "640|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Verde/Morada|ALINA STEPHANIE ESCANDÓN VELÁZQUEZ|Femenino|25|4 kyu|64 kg|162|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

]
var competidoresKataind40=[
  "56|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Libre|GUADALUPE QUINTAL CATZIN|Femenino|22|1 dan|70 kg|171|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "69|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Libre|KRISTAL EK EROSA|Femenino|19|1 dan|48 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "103|PUEBLA|BUAP|Adulto Femenil C. Libre|ALISON CIELO ROMERO|Femenino|19|1 kyu|49 kg|151|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "153|PUEBLA|BUAP|Adulto Femenil C. Libre|INES JIMENEZ CUYA|Femenino|22|1 dan|45 kg|147|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "174|PUEBLA|BUAP|Adulto Femenil C. Libre|Karen Morales Axilote|Femenino|21|2 dan|49 kg|155|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "175|PUEBLA|BUAP|Adulto Femenil C. Libre|KARLA DE CASIA VARGAS MORA|Femenino|18|2 kyu|54 kg|148|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "185|PUEBLA|BUAP|Adulto Femenil C. Libre|MADELEY HERNANDEZ AVILA|Femenino|21|1 dan|45 kg|155|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "190|PUEBLA|BUAP|Adulto Femenil C. Libre|MARIANA MALDONADO TREJO|Femenino|22|1 dan|60 kg|166|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "201|PUEBLA|BUAP|Adulto Femenil C. Libre|ROSA ISELA GARCIA RICO|Femenino|21|1 dan|51 kg|153|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "409|VERACRUZ|DENSHO JUKU XALAPA |Adulto Femenil C. Libre|Maheli Sinai Olivares Fernández|Femenino|22|2 kyu|55 kg|160|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "432|PUEBLA|HONBU DOJO|Adulto Femenil C. Libre|MERILLELA ARREOLA FERREYRA|Femenino|31|1 dan|58 kg|168|KATA INDIVIDUAL|SHIJAN KOICHI CHODA",
  "433|PUEBLA|HONBU DOJO|Adulto Femenil C. Libre|YAZMIN HUERTA MARTÍNEZ|Femenino|29|2 dan|51 kg|156|KATA INDIVIDUAL|SHIJAN KOICHI CHODA",
  "461|ZACATECAS|IPPUUKAN|Adulto Femenil C. Libre|LEIDY RODRIGUEZ MARTINEZ|Femenino|23|1 dan|67 kg|158|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "465|ZACATECAS|IPPUUKAN|Adulto Femenil C. Libre|ROMINA BECERRA PALOS|Femenino|30|1 dan|78 kg|154|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "469|ZACATECAS|IPPUUKAN|Adulto Femenil C. Libre|XIMENA ESTIBALIS BECERRA PALOS|Femenino|27|1 dan|65 kg|156|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "476|PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Libre|Cindi Amairani Jimenez Cierra|Femenino|21|1 kyu|61 kg|164|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "565|TLAXCALA|KENSEIKAI TLAXCALA|Adulto Femenil C. Libre|Catherin Guadalupe Rodriguez Carro|Femenino|20|1 kyu|58 kg|155|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "585|PUEBLA|MUSHIN JUKU|Adulto Femenil C. Libre|Clara Paola Padilla Rodríguez|Femenino|20|4 kyu|55 kg|155|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "586|PUEBLA|MUSHIN JUKU|Adulto Femenil C. Libre|Claudia Stephany García Chavarría|Femenino|22|1 dan|45 kg|155|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "613|SONORA|REN SHI KAI OBREGÓN|Adulto Femenil C. Libre|Pamela Contreras Apodaca|Femenino|18|1 dan|60 kg|160|KATA INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "639|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|ALEJANDRA VICTORIANO SEVERO |Femenino|20|1 dan|52 kg|150|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "641|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|ANA ADELA CRUZ CERVANTES|Femenino|29|1 dan|64 kg|166|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "642|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|ANA CRISTINA TETLALMATZI TORRES|Femenino|29|1 dan|49 kg|145|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "643|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|ANA KAREN DE JESÚS RAMOS BARRALES|Femenino|23|1 dan|50 kg|161|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "644|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|ANDREA VICTORIANO SEVERO|Femenino|24|1 dan|56 kg|155|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "648|PUEBLA|SEISHIN DOJO|Adulto Femenil C. Libre|CECILIA CRUZ SANTEL |Femenino|27|1 dan|63 kg|159|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "676|CHIHUAHUA|SANSEI JUKU|Adulto Femenil C. Libre|JANICE MEDINA|Femenino|26|1 DAN|60 KG|162|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"
];

var competidoresKataind41=[
  "4|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Braulio Bonifacio Urban |Masculino|19|10 kyu|81|170|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "5|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Carlos Eduardo Dominguez Vazquez|Masculino|19|10 kyu|59|165|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "10|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Jonathan Miranda Reyes |Masculino|19|10 kyu|64|163|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "11|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Jose Gerardo Franco Hernandez |Masculino|21|10 kyu|59|156|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "13|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Jose Luis Tepetzintan Teotichan |Masculino|19|10 kyu|56|170|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "14|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Blanca|Ladimir Francisco Bonilla|Masculino|21|10 kyu|51|163|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "112|PUEBLA|BUAP|Adulto Varonil C. Blanca|AURELIO NUÑEZ ZAVALETA|Masculino|19|10 kyu|74 kg|177|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "120|PUEBLA|BUAP|Adulto Varonil C. Blanca|CARLOS TELLEZ ACEVEDO|Masculino|26|10 kyu|78 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "184|PUEBLA|BUAP|Adulto Varonil C. Blanca|LUIS OCTAVIO MATEOS ECHAZARRETA|Masculino|19|10 kyu|95 kg|177|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "241|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Blanca|Cesar Adriano Lugo Nitsch|Masculino|19|10 kyu|93 kg|172|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "252|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Blanca|Hans Joel Daza Castro|Masculino|19|10 kyu|84 kg|170|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "259|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Blanca|Jamin Vicente Israel Can Colli|Masculino|20|9 kyu|68 kg|160|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "261|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Blanca|Jonathan Gabriel Romero Martinez |Masculino|18|10 kyu|45 kg|155|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "267|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Blanca|Jose Manuel Gonzalez Rodriguez|Masculino|19|10 kyu|68 kg|167|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "401|OAXACA|DENSHO JUKU TONATIUH|Adulto Varonil C. Blanca|Luis Esteban Gasga Flores|Masculino|18|10 kyu|NULL|NULL|KATA INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "526|CHIHUAHUA|JIN JUKU	|Adulto Varonil C. Blanca|Juan Manuel Pérez Ríos |Masculino|21|10 kyu|95 kg|185|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "587|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Blanca|Esteban Arias Reyes|Masculino|22|10 kyu|75 kg|175|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "695|QUINTANA ROO|SHITOKAI CANCÚN|Adulto Varonil C. Blanca|CARLOS ANDRES POOT TUN|Masculino|18|10 KYU|75 KG|165|KATA INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",

];
var competidoresKataind42=[
  "48|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Amarilla|EDUARDO CANCHE|Masculino|24|8 kyu|75 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "71|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Amarilla|LUIS JAVIER CANUL UC|Masculino|18|8 KYU|70 kg|167|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "247|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Amarilla|Edwin Ojeda Chulines |Masculino|23|9 kyu|74 kg|179|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "266|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Amarilla|Jose Luis Pech Gutierrez|Masculino|21|9 kyu|79 kg|163|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "316|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Varonil C. Amarilla|Misael Monge Varela|Masculino|20|9 kyu|67kg|184|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "415|PUEBLA|DOJO DEL SUR-UVP|Adulto Varonil C. Amarilla|FRANCISCO DE JESUS HERNANDEZ FABIAN |Masculino|23|9 kyu|78 kg|174|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "424|PUEBLA|DOJO DEL SUR-UVP|Adulto Varonil C. Amarilla|MIGUEL ANGEL SANTOS VALENCIA |Masculino|23|9 kyu|74 kg|168|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "428|PUEBLA|DOJO DEL SUR-UVP|Adulto Varonil C. Amarilla|RICARDO DEMANOS AMADOR |Masculino|20|9 kyu|64 kg|170|KATA INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "670|PUEBLA|SEISHIN DOJO|Adulto Varonil C. Amarilla|SERGIO ANTONIO LABASTIDA GALLARDO|Masculino|16|9 kyu|52 kg|169|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "722|CHIAPAS|SHU SEI KAN|Adulto Varonil C. Amarilla|JUAN MANUEL HERNANDEZ GUZMAN|Masculino|18|9 kyu|75 kg|169|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKataind43=[
  "1|PUEBLA|MICHI ZACAPOAXTLA|Adulto Varonil C. Verde/Morada|Alejandro Agustin Bello |Masculino|23|5 kyu|65|164|KATA INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "19|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Verde/Morada|ALAIN LOPEZ CHI|Masculino|19|5 kyu|100 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "39|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Verde/Morada|CARLOS MARTINEZ|Masculino|33|5 kyu|80 kg|180|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "55|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Verde/Morada|GILBERTO BERTOLINI|Masculino|18|5 kyu|65 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "115|PUEBLA|BUAP|Adulto Varonil C. Verde/Morada|BENJAMIN HERNANDEZ AVILA|Masculino|18|4 kyu|68 kg|175|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "152|PUEBLA|BUAP|Adulto Varonil C. Verde/Morada|Idulio Guzman De Aquino |Masculino|19|7 kyu|68 kg|172|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "168|PUEBLA|BUAP|Adulto Varonil C. Verde/Morada|JOSE ANTONIO BENAVIDES PAREDES|Masculino|21|5 kyu|65 kg|176|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "172|PUEBLA|BUAP|Adulto Varonil C. Verde/Morada|Juan Carlos Encarnacion Iturbide  |Masculino|19|4 kyu|70 kg|165|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "229|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Verde/Morada|Abel Zaleta Alcocer |Masculino|21|7 kyu|102 kg |173|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "231|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Verde/Morada|Adalberto Hernandez Hernandez |Masculino|21|7 kyu|80 kg|175|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "262|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Verde/Morada|Jorge Antonio Avila Lopez |Masculino|21|7 kyu|78 kg|169|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "264|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Verde/Morada|Jose Alberto Alpuche Lopez|Masculino|21|7 kyu|96 kg|168|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "2280|CAMPECHE|CD DEL CARMEN |Adulto Varonil C. Verde/Morada|Miguel José Ojeda Jerónimo|Masculino|18|6 kyu|70 kg|170|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "310|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Varonil C. Verde/Morada|Jose Alfredo Pasror Martinez |Masculino|20|4 kyu|58 kg|151|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "314|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Varonil C. Verde/Morada|Luis Eduardo Pastor Martinez|Masculino|15|9 kyu|48 kg|152|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "365|PUEBLA|DENSHO JUKU GANBARU|Adulto Varonil C. Verde/Morada|MIGUEL ANGEL MARTINEZ DIAZ|Masculino|24|7 kyu|72 kg|169|KATA INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "470|PUEBLA|JAGUARES TERÁN |Adulto Varonil C. Verde/Morada|Adrián Báez Rodríguez|Masculino|17|4 kyu|63 kg|165|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "492|PUEBLA|JAGUARES TERÁN |Adulto Varonil C. Verde/Morada|Luis Emmanuel Bernal García|Masculino|16|6 kyu|80 kg|180|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "505|CHIHUAHUA|JIN JUKU	|Adulto Varonil C. Verde/Morada|ABEL GARCIA LOERA|Masculino|18|5 kyu|62|179|KATA INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "560|TLAXCALA|KENSEIKAI TLAXCALA|Adulto Varonil C. Verde/Morada|Alan Ivan Teomitzi Flores|Masculino|20|6 kyu|66 kg|168|KATA INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "591|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Verde/Morada|José Daniel Gutiérrez Betancourt|Masculino|21|4 kyu|65 kg|165|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "723|CHIAPAS|SHU SEI KAN|Adulto Varonil C. Verde/Morada|JUAN PABLO PUON CORTEZ|Masculino|18|6 kyu|79 kg|170|KATA INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKataind44=[
  "20|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|ALAN MOTHELET|Masculino|20|1 dan|60 kg|168|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "30|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|ANDRES QUINTAL|Masculino|23|1 dan|73 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "37|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|CAMILO BARRERA CACERERES|Masculino|21|1 kyu|60 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "45|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|DANIEL VARGAS FLORES|Masculino|28|1 dan|67 kg|177|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "51|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|GABRIEL VALDEZ|Masculino|20|1 dan|70 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "67|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|JULIO PERRERA|Masculino|23|1 kyu|78 kg|170|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "79|YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Varonil C. Libre|RODRIGO PALMA BARAHONA|Masculino|24|1 dan|80 kg|172|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "105|PUEBLA|BUAP|Adulto Varonil C. Libre|ANDRE VALERA PEREZ|Masculino|19|3 kyu|59 kg|160|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "118|PUEBLA|BUAP|Adulto Varonil C. Libre|CARLOS ANDRES RAMIREZ MARTINEZ|Masculino|23|3 kyu|73 kg|170|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "126|PUEBLA|BUAP|Adulto Varonil C. Libre|Daniel Covarrubias Cancino|Masculino|19|1 dan|59 kg|170|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "156|PUEBLA|BUAP|Adulto Varonil C. Libre|ISRAEL PAPAQUI MENDOZA |Masculino|23|1 kyu|76 kg|176|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "164|PUEBLA|BUAP|Adulto Varonil C. Libre|JORGE GUARNEROS REBOLLAR|Masculino|26|1 dan|78 kg|175|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "199|PUEBLA|BUAP|Adulto Varonil C. Libre|PAUL JACOB BENÍTEZ ALEMÁN|Masculino|28|1 dan|79 kg|180|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "200|PUEBLA|BUAP|Adulto Varonil C. Libre|RENAN BASAURA MORALES|Masculino|20|1 dan|82 kg|179|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "317|PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Varonil C. Libre|Nathaniel Soto Camacho |Masculino|20|3 kyu|60 kg|166|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "407|VERACRUZ|DENSHO JUKU XALAPA |Adulto Varonil C. Libre|Jesús Capistrán Libreros|Masculino|29|5 kyu|85 kg|174|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "449|ZACATECAS|IPPUUKAN|Adulto Varonil C. Libre|ANDRES JULIO MUÑOZ ALFARO|Masculino|23|1 dan|84 kg|171|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "463|ZACATECAS|IPPUUKAN|Adulto Varonil C. Libre|OLAF RAMOS NIEVES|Masculino|20|1 dan|74 kg|152|KATA INDIVIDUAL|SENSEI IRMA PALOS",
  "485|PUEBLA|JAGUARES TERÁN |Adulto Varonil C. Libre|Jorge Garcia Adauta|Masculino|19|1 dan|76 kg|163|KATA INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "582|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Libre|Aldo Jaime García Chavarría|Masculino|25|1 dan|67 kg|165|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "588|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Libre|Gamaliel Segreste Nocedal|Masculino|33|1 dan|84 kg|168|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "590|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Libre|Joel Rojas Torres|Masculino|24|3 kyu|71 kg|160|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "594|PUEBLA|MUSHIN JUKU|Adulto Varonil C. Libre|Nicanor Tecaxco Tochimani|Masculino|46|5 dan|60 kg|161|KATA INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "625|CHIHUAHUA|SANSEI JUKU|Adulto Varonil C. Libre|DAVID ARTURO REYES PARRA|MASCULINO|37|2 DAN|65 KG|176|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "629|CHIHUAHUA|SANSEI JUKU|Adulto Varonil C. Libre|LUIS CHAVEZ BUSTILLOS|MASCULINO|19|2 KYU|85 KG|178|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "630|CHIHUAHUA|SANSEI JUKU|Adulto Varonil C. Libre|MARCO GUTIERREZ MARTINEZ|MASCULINO|21|1 KYU|67 KG|176|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "654|PUEBLA|SEISHIN DOJO|Adulto Varonil C. Libre|JORGE FRANCISCO ORTEGA GONZÁLEZ|Masculino|30|1 dan|68 kg|165|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "660|PUEBLA|SEISHIN DOJO|Adulto Varonil C. Libre|LUIS ÁNGEL SOTO CUANAL|Masculino|22|2 kyu|60 kg|160|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "665|PUEBLA|SEISHIN DOJO|Adulto Varonil C. Libre|MIGUEL ÁNGEL RAMÍREZ REYES|Masculino|22|3 kyu|75 kg|163|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "671|PUEBLA|SEISHIN DOJO|Adulto Varonil C. Libre|WILIADO ALAMILLA PERALTA|Masculino|29|1 dan|84 kg|175|KATA INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKataind45=[
  "198|PUEBLA|BUAP|Master Femenil hasta C. Morada|PATRICIA VARELA GONZALEZ |Femenino|60|5 kyu|55 kg|152|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA"

];
var competidoresKataind46=[
  "74|YUCATÁN|AGRUPACIÓN QUINTAL|Master Femenil C. Libre|MARISOL DELGADO|Femenino|36|1 kyu|65 kg|167|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "207|PUEBLA|BUAP|Master Femenil C. Libre|Silvia Olivia Rojas García|Femenino|50|1 dan|78 kg|160|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA"

];
var competidoresKataind47=[
  "146|PUEBLA|BUAP|Master Varonil hasta C. Morada|Francisco Javier Nieto Bravo|Masculino|54|7 kyu|120 kg|180|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"150|PUEBLA|BUAP|Master Varonil hasta C. Morada|Héctor Zárate Hernández|Masculino|53|6 kyu|76 kg|171|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
"271|CAMPECHE|CD DEL CARMEN |Master Varonil hasta C. Morada|JUAN FRANCISCO OROZCO VAZQUEZ|Masculino|43|7 KYU|76 KG|163|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
"312|PUEBLA|DENSHO JUKU AGUA SANTA|Master Varonil hasta C. Morada|Jose Roman Gamboa Cruz |Masculino|41|9 kyu|70 kg|156|KATA INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
"406|VERACRUZ|DENSHO JUKU XALAPA |Master Varonil hasta C. Morada|Eduardo Salvador Cova Castillo|Masculino|49|4 kyu|89 kg|173|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA"


];
var competidoresKataind48=[
  "18|YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|ADOLFO G CANTON|Masculino|36|1 dan|70 kg|168|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "35|YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|BRUNO VAZQUEZ |Masculino|50|1 dan|60 kg|150|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "61|YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|JORGE PEREZ|Masculino|60|2 dan|80 kg|163|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "77|YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|NOE GARCIA|Masculino|40|1 dan|80 kg|165|KATA INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "142|PUEBLA|BUAP|Mastel Varonil C. Libre|ERNESTO SANTIAGO RIVERA|Masculino|46|1 dan|78 kg|157|KATA INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "234|CAMPECHE|CD DEL CARMEN |Mastel Varonil C. Libre|ALFREDO ROJAS GONZALEZ|Masculino|40|1 KYU|78 KG|168|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "284|CAMPECHE|CD DEL CARMEN |Mastel Varonil C. Libre|Salvador Arrocha Hernandez|Masculino|45|3 dan|74 kg|165|KATA INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "408|VERACRUZ|DENSHO JUKU XALAPA |Mastel Varonil C. Libre|Jorge Sebastián Martínez García|Masculino|52|2 kyu|95 kg|175|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "410|VERACRUZ|DENSHO JUKU XALAPA |Mastel Varonil C. Libre|Mario Romero Méndez|Masculino|59|1 dan|89 kg|160|KATA INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "616|CHIHUAHUA|SANSEI JUKU|Mastel Varonil C. Libre|Ayub Eduardo Montes Duran|Masculino|38|2do Dan|85.1|1.73|KATA INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"
];
var competidoresKumiteind49=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto hasta 5 años C. Libre|KENET RODRIGUEZ MORALES|Masculino|5|5 kyu|34 kg|119|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto hasta 5 años C. Libre|VICTOR CADENA UCAN|Masculino|5|8 kyu|30 kg|120|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Andre Yael Sanchez Robles|Masculino|5|10 kyu|19 kg|113|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Angel Israel Zamora Vargas|Masculino|4|9 kyu|20 kg|108|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Dante Ivan Olvera Cortez|Masculino|4|9 kyu|18 kg|108|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Karmen Celeste Zavaleta Mejia|Femenino|4|10 kyu|18 kg|100|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Santiago Castillo Jiménez|Masculino|5|9 kyu|18 kg|107|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto hasta 5 años C. Libre|Santiago Flores Rojas|Masculino|4|10 kyu|17 kg|103|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto hasta 5 años C. Libre|MAYA ITZEL ESCOBAR GARCIA|Femenino|5|10 kyu|18 kg|120|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Abdiel Chumacero Mendez |Masculino|5|9 kyu|19 kg|100|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Alejandro Castañon Serrano |Masculino|5|7 kyu|22 kg|105|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto hasta 5 años C. Libre|Maria Jose Mendez Mendiola |Femenino|5|7 kyu|20 kg|100|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|ALEXIS MORA MORENO|Masculino|5|10 kyu|15 kg|106|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|ISIS MARLENE TOXTLE MERINO|Femenino|5|10 kyu|14 kg|105|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto hasta 5 años C. Libre|SERGIO AMIEL FIGUEROA URDIALES |Masculino|5|10 kyu|15 kg|110|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto hasta 5 años C. Libre|SANTIAGO RODRIGUEZ CARRAZCO|Masculino|5|8 kyu|17 kg|111|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto hasta 5 años C. Libre|Oscar Leonardo Gomez Gil Marquez|Masculino|5|9 kyu|18 kg|105|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|MANOLO MEJIA LUIS |Masculino|5|10 kyu|19 kg|123|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|SERGIO ALEJANDRO GARCIA MARTINEZ|Masculino|5|10 kyu|16 kg|107|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto hasta 5 años C. Libre|VICTORIA SOFIA ROJAS PUON|Femenino|5|8 kyu|15 kg|103|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind50=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Blanca |SERGIO ABRAHAM HABIB|Masculino|7|4 kyu|30 kg|130|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "OAXACA|BODY SPORT OAXACA|Infantil mixto 6 - 7 años C. Blanca |Emiliano Cruz Ortiz|Masculino|6|9 kyu|21 kg|121|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS MORALES PÉREZ",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Eduardo Quiroz Flores|Masculino|6|10 kyu|21 kg|122|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |HASSAN GUARNEROS RAMÍREZ|Masculino|7|10 kyu|22 kg|123|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Ulises Hernandez Sanchez|Masculino|7|10 kyu|32 kg|128|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Blanca |Yerik Eduardo Martinez Miron|Masculino|7|10 kyu|21 kg|122|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Blanca |Gustavo Angel Pastor Martinez|Masculino|7|9 kyu|35 kg|109|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ADRIAN VÁZQUEZ PÉREZ|Masculino|7|10 kyu|16 kg|110|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ANGEL HERRERA DUARTE |Masculino|6|10 kyu|15 kg|107|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ANTONY  GARCILAZO MARQUEZ|Masculino|6|10 kyu|14 kg|105|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |ASHLEY ALISON MORALES GONZÁLEZ|Femenino|7|10 kyu|19 kg|114|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |IAN AARON MORALES RODRÍGUEZ|Masculino|6|10 kyu|13 kg|105|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Blanca |JESÚS CERVANTES TREVIÑO|Masculino|7|10 kyu|15 kg|107|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "ZACATECAS|IPPUUKAN|Infantil mixto 6 - 7 años C. Blanca |ALEXA DAPNE GODINA GARAY|Femenino|7|10 kyu|28 kg|102|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Blanca |María José Torres Moya|Femenino|7|10 kyu|37 kg|136|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Blanca |Africa Natalia Zuñiga Tiempo|Femenino|7|10 kyu|32 kg|139|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO"

];
var competidoresKumiteind51=[
  "OAXACA|BODY SPORT OAXACA|Infantil mixto 6 - 7 años C. Amarilla|Emiliano Cruz Ortiz|Masculino|6|9 kyu|21 kg|121|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS MORALES PÉREZ",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Amarilla|Diego Juarez Palacios |Masculino|6|8 kyu|23 kg|120|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Amarilla|Carlos Yahir López Torres|Masculino|6|8 kyu|25 kg|118|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 6 - 7 años C. Amarilla|TEODORO ALEXANDER DELGADO PAEZ|Masculino|6|9 KYU|21 kg|110|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Amarilla|ALEJANDRO ENRIQUEZ LÓPEZ|Masculino|7|9 kyu|21 kg|110|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Amarilla|CLARA MICHELLE RAMÍREZ DÍAZ|Femenino|7|8 kyu|43 kg|134|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "ZACATECAS|IPPUUKAN|Infantil mixto 6 - 7 años C. Amarilla|ANGEL MANUEL MARTINEZ MARQUEZ|Masculino|7|9 kyu|25 kg|117|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla|CARLOS DANIEL RODRIGUEZ CARRAZCO|Masculino|7|8 kyu|20 kg|119|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla|DAYANA DANAE BADILLO  MUÑOZ|Femenino|7|9 kyu|22|120|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla|EMMANUEL DURAN ROBLES|Masculino|7|9 kyu|30|130|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Amarilla|Jose Miguel Hernández Félix |Masculino|6|8 kyu|28 kg|121|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Amarilla|Diego Romero Priego|Masculino|7|8 kyu|20 kg|130|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Amarilla|Edwin Alexander Coronel Velazquez|Masculino|7|9 kyu|27 kg|138|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Amarilla|Juan Miguel Gonzalez Sierra|Masculino|7|9 kyu|30 kg|140|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Amarilla|Valentino Mateo Tobon Fermin|Masculino|6|9 kyu|18 kg|110|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 6 - 7 años C. Amarilla|JAVIER ARMANDO QUINTANA ARVIZO|MASCULINO|6|8 KYU|17 KG|108|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla|BRYANA NAHOMI GALLEGOS ALCÁNTARA|Femenino|6|8 kyu|19 kg|114|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla|MÁXIMO GONZÁLEZ LÓPEZ|Masculino|7|9 kyu|26 kg|123|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Amarilla|MELANIE FERNÁNDEZ MORENO|Femenino|7|9 kyu|21 kg|121|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 6 - 7 años C. Amarilla|CARLOS ANTONIO SANCHEZ HIDALGO|Masculino|7|9 kyu|37 kg|130|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 6 - 7 años C. Amarilla|IKER SEBASTIAN HAU OCAMPO|Masculino|6|9 kyu|35 kg|127|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind52=[
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Diana Saori Tejeda Sosa|Femenino|7|5 kyu|21|123|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Jesus Arturo Molina Reyes |Masculino|7|6 kyu|37|132|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 6 - 7 años C. Libre|Sairi Antonella Perez Carrillo|Femenino|6|5 kyu|20|121|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|ANDRES CALDERON ARANDA|Masculino|7|7 kyu|18 kg|100|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|EMILIO VALDEZ DELGADO |Masculino|7|6 kyu|22 kg|127|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|GERARDO ACEVEDO SOSA |Masculino|7|7 kyu|20 kg|97|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|JOSAFAT PEREZ TORRES |Masculino|7|6 kyu|23 kg|125|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|LORENZO GARCIA CETINA|Masculino|7|7 kyu|23 kg|123|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 6 - 7 años C. Libre|VICTORIA VALLE VAZQUEZ|FEMENINO|7|7 kyu|19 kg|113|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Carlos Ernesto Orduña Barranco|Masculino|7|7 kyu|42 kg|135|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Cristian Orlando Sánchez Cortes|Masculino|7|7 kyu|28 kg|115|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Jacob Judá Pérez Pérez|Masculino|7|7 kyu|22 kg|122|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Joel de la Cruz Sanchez |Masculino|6|6 kyu|19 kg|120|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Michelle Castolo Mendieta|Femenino|7|7 kyu|25 kg|128|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 6 - 7 años C. Libre|Yojari Fernanda Sanchez Pérez|Femenino|7|7 kyu|34 kg|126|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Libre|Fabián II Jiménez Sordo|Masculino|7|5 kyu|20 kg|122|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Infantil mixto 6 - 7 años C. Libre|Patricio Emiliano Méndez Jarquin|Masculino|6|5 kyu|21 kg|110|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Libre|Carlos Alexis Rairez Mendez |Masculino|6|7 kyu|20 kg|112|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 6 - 7 años C. Libre|Norma Ximena Ronzon Arziga |Femenino|6|7 kyu|21 kg|115|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Libre|ALEJANDRO ENRIQUEZ LÓPEZ|Masculino|7|9 kyu|21 kg|110|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 6 - 7 años C. Libre|JOSÉ ALEXANDER RODRÍGUEZ CAYETANO|Masculino|6|6 kyu|19 kg|120|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 6 - 7 años C. Libre|EMMANUEL DURAN ROBLES|Masculino|7|9 kyu|30|130|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 6 - 7 años C. Libre|Juan Pablo Carreon Morato|Masculino|7|7 kyu|22 kg|130|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 6 - 7 años C. Libre|SEBASTIAN SOTELO CARRAZCO|MASCULINO|6|7 KYU|20 KG|117|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 6 - 7 años C. Libre|RAQUEL RAMÍREZ LÓPEZ|Femenino|7|5 kyu|30 kg|125|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "VERACRUZ|SHOSHIN JUKU |Infantil mixto 6 - 7 años C. Libre|Pamela Avila Macias|Femenino|7|6 kyu|28 kg|125|KUMITE INDIVIDUAL|SENSEI MIGUEL DANIEL VILLEGAS CARRANCO"

];
var competidoresKumiteind53=[
  "OAXACA|BODY SPORT OAXACA|Infantil mixto 8 - 9 años C. Blanca|Camila Swietenia Avemdaño Navarrete |Femenino|8|9 kyu|31 kg|129|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS MORALES PÉREZ",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Daniela Vazquez Rojas|Femenino|8|10 kyu|26 kg|125|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Gael Rojas Perez |Masculino|8|10 kyu|28 kg|126|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Ian Jakop Martinez Lopez|Masculino|9|10 kyu|25 kg|131|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Blanca|Moises Arias Lopez|Masculino|9|10 kyu|30 kg|128|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Blanca|Jose Armando Vazquez Hernandez |Masculino|8|10 kyu|24 kg|124|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|ÁNGEL DE JESÚS MEZA CANO|Masculino|8|10 kyu|44 kg|137|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|AVRIL MARLEN MORALES RODRÍGUEZ|Femenino|8|10 kyu|23 kg|133|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|EVELYN ESTRELLA RAMÍREZ GONZÁLEZ|Femenino|9|10 kyu|29kg|131|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Blanca|VALENTINA PÉREZ GALARZA |Femenino|9|10 kyu|30kg|137|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Dayanne Hernández Cerón|Femenino|9|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Jesabel Bustamante Ruiz|Femenino|9|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 8 - 9 años C. Blanca|Zurisaday Hernández Flores|Femenino|8|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Blanca|Héctor Chavira Dávila|Masculino|8|10 kyu|27 kg|128|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN"

];
var competidoresKumiteind54=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Amarilla|CHUC BORGES  JULIAN |MASCULINO|9|8 kyu|32 kg|132|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Amarilla|Marcus Abdiel Reyes Ornelas|Masculino|8|8 kyu|28 kg|129|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|ANA LILIANA DELGADO PAEZ|Femenino|8|8 KYU|22 kg|135|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Andrea Lol-be Grajales Martin|Femenino|9|9 kyu|28 kg|129|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Génesis Sarai Camacho Martínez|Femenino|7|9 kyu|20 kg|120|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Joshua Eli Gomez Gonzales|Masculino|9|9  kyu|29 kg|130|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Amarilla|Julio Erick Bautista Martínez|Masculino|8|9 kyu|35 kg|126|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Amarilla|Oscar Arturo Lazcano Peralta|Masculino|8|9 kyu|23 kg|125|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Amarilla|JUAN JOSÉ CASTILLO SUÁREZ|Masculino|9|9 kyu|35 kg|141|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Amarilla|RENE ULISES RAMÍREZ DÍAZ|Masculino|8|8 kyu|45 kg|139|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|ANGEL URIEL MATA PEREGRINA |Masculino|8|9 kyu|25 kg|124|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|JESUS URIEL CRUZ MARTINEZ |Masculino|8|9 kyu|21 kg|130|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 8 - 9 años C. Amarilla|ZURI YAEL DE LA ROSA HERRERA|Femenino|8|8 kyu|20 kg|129|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "ZACATECAS|IPPUUKAN|Infantil mixto 8 - 9 años C. Amarilla|GERARDO MANUEL REYES VENEGAS|Masculino|8|8 kyu|26 kg|126|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil mixto 8 - 9 años C. Amarilla|JESUS PEREZ|Masculino|9|8 kyu|28 kg|117|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|Andrei Román Moya|Masculino|8|8 kyu|34 kg|139|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|José Arámbula |Masculino|9|8 kyu|32 kg|130|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|Maria Fernanda Acosta Beltran|Femenino|9|8 kyu|40 kg|135|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Amarilla|XOCHITL SERRANO DURAN|Femenino|8|9 kyu|26|139|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 8 - 9 años C. Amarilla|Jenifer Soto Vazquez|Femenino|8|9 kyu|28 kg|145|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 8 - 9 años C. Amarilla|Isai Perez Morales|Masculino|9|9 kyu|29 kg|127|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Amarilla|MELANIE FERNÁNDEZ MORENO|Femenino|7|9 kyu|21 kg|121|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|JUNO VANESA MONTES GALVEZ|Femenino|9|8 kyu|30 kg|130|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|LUCIA GUADALUPE RINCON MARTINEZ|Femenino|9|8 kyu|33 kg|126|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Amarilla|PEDRO DE JESUS LOPEZ PEREZ |Masculino|9|9 kyu|28 kg|134|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind55=[
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 8 - 9 años C. Verde/Morada|Ceani Romina Aguilar Guevara|Femenino|9|5 kyu|21|115|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|ALEJANDRO CARRILLO PINZÒN |Masculino|8|6 kyu|23 kg|128|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|ALVAR PAREDES ESPINOSA |Masculino|8|6 kyu|20 kg|120|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|HERNAN RUIZ DEL HOYO LIMAS|Masculino|8|4 kyu|27 kg|127|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|JESUS ESCALANTE |Masculino|11|8 kyu|50 kg|140|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|RODRIGO PINTO FLORES|Masculino|10|3 kyu|30 kg|140|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Verde/Morada|TELLEZ COHUO FERNANDO DANIEL|MASCULINO|9|4 kyu|26 kg|133|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Andrea Joselyn Diaz Pérez|Femenino|9|7 kyu|38 kg|141|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Janndra Paola Guerra Zarate|Femenino|8|7 kyu|38 kg|135|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 8 - 9 años C. Verde/Morada|Joselyn Castolo Mendieta|Femenino|9|7 kyu|26 kg|130|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 8 - 9 años C. Verde/Morada|ALAN ENRIQUE LARA DURAN|Masculino|9|4 KYU|30 kg|137|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil mixto 8 - 9 años C. Verde/Morada|Baruc Dominguez Castillo |Masculino|8|5 kyu|27 kg|118|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|FANNY MICHELLE ROLDAN CORONA|Femenino|8|7 kyu|26 kg|123|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|JUAN ALBERTO RODRÍGUEZ RAMÍREZ |Masculino|9|7 kyu|27 kg|141|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|MAYA RODRÍGUEZ CAYETANO|Femenino|8|6 kyu|23 kg|125|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Verde/Morada|YAEL MARTÍN ENRIQUEZ LÓPEZ |Masculino|9|7 kyu|37 kg|129|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|JAGUARES TERÁN |Infantil mixto 8 - 9 años C. Verde/Morada|Rodrigo Romero Juarez|Masculino|9|7 kyu|47 kg|140|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|Alexa Victoria Meraz Montes|Femenino|8|5 kyu|33 kg|140|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|ALEXA YANELI MARTINEZ SOLIS|Masculino|9|7 kyu|50|144|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 8 - 9 años C. Verde/Morada|Paulina Villela Loya|Femenino|9|5 kyu|32 kg|130|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 8 - 9 años C. Verde/Morada|Karol Carreon Morato|Femenino|8|7 kyu|25 kg|143|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 8 - 9 años C. Verde/Morada|Maria Fernanda Veron Ramírez|Femenino|8|5 kyu|32 kg|145|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 8 - 9 años C. Verde/Morada|DANIEL EDUARDO IBARRA ARREOLA|MASCULINO|9|7 KYU|52 KG|143|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 8 - 9 años C. Verde/Morada|MAURO GUERRERO SOSA|MASCULINO|8|7 KYU|23 KG|126|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Verde/Morada|ABRIL ZOE SILVA DURÁN|Femenino|8|4 kyu|29 kg|130|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Verde/Morada|JESÚS DAVID SORIANO CONTRERAS|Masculino|8|4 kyu|30 kg|127|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "VERACRUZ|SHOSHIN JUKU |Infantil mixto 8 - 9 años C. Verde/Morada|Rafael Cordoba Zarate|Masculino|9|7 kyu|27kg|128|KUMITE INDIVIDUAL|SENSEI MIGUEL DANIEL VILLEGAS CARRANCO",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Verde/Morada|MARJALIN YAMILETH CANO RAMOS|Femenino|9|6 kyu|30 kg|135|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 8 - 9 años C. Verde/Morada|XIMENA BORRALLES TRUJILLO|Femenino|9|6 kyu|34 kg|136|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];

var competidoresKumiteind56=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 8 - 9 años C. Libre|CANUL COHUO MIGUEL|MASCULINO|9|2 kyu|28 kg|138|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 8 - 9 años C. Libre|FANNY MICHELLE ROLDAN CORONA|Femenino|8|7 kyu|26 kg|123|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "MORELOS|I.E.D. SHITO KAI|Infantil mixto 8 - 9 años C. Libre|Diego Perez Perez|Masculino|9|2 kyu|34 kg|133|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "SONORA|REN SHI KAI OBREGÓN|Infantil mixto 8 - 9 años C. Libre|Jesus Alejandro Molina Alvarez|Masculino|9|1 dan|42 kg|128|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Libre|ABRIL ZOE SILVA DURÁN|Femenino|8|4 kyu|29 kg|130|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 8 - 9 años C. Libre|JESÚS DAVID SORIANO CONTRERAS|Masculino|8|4 kyu|30 kg|127|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind57=[
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Blanca|Andrea españa Diaz|Femenino|11|10 kyu|30 kg|147|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Blanca|Jeidan Kaled Martinez Lopez|Masculino|10|10 kyu|36 kg|136|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Blanca|ABUNDIO GUILLERMO MALDONADO CAHUICH|Masculino|10|8 KYU|40 kg|142|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|ERICK ALEJANDRO REYES AGUILAR|Masculino|9|10 kyu|35 kg|131|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|IRVING HERNÁNDEZ LÓPEZ|Masculino|11|10 kyu|43kg|134|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|KEVIN EMMANUEL GARCÍA DE LA CRUZ |Masculino|10|10 kyu|38kg|144|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|LUIS ARTURO ROMERO CORTÉS|Masculino|10|10 kyu|43 kg|142|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|MANUEL RICARDO LÓPEZ GARCÍA |Masculino|11|10 kyu|36kg|150|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Blanca|MARA BETZABE PÉREZ GALARZA|Femenino|10|10 kyu|37kg|148|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Cristina Isabel Ruiz Espinoza|Femenino|10|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Dulce Marely López Méndez|Femenino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Farid José Bustos Alavez|Masculino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Hannia Fernanda Mata Rios|Femenino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Ingrid Janeth Cortés Galeana|Femenino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Jesús Eduardo Aguirre Mata|Masculino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil mixto 10 - 11 años C. Blanca|Luz Denisse Gasga Flores|Femenino|11|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Blanca|OSCAR OCTAVIO VEGA GONZALES|Masculino|10|10 kyu|28 kg|138|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|IVONE FERNANDA GUARDADO|Femenino|9|10 kyu|23 kg|90|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|RAMSES AARON ORTEGA CAMPOS|Masculino|10|10 kyu|35 kg|139|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Blanca|THIRZA GETSEMANI ORTEGA CAMPOS|Femenino|11|10 kyu|35 kg|142|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Blanca|ANGEL AARON SANDOVAL CRUZ|Masculino|10|10 kyu|35|136|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Blanca|MARISOL DOMINGUEZ GUERRERO|Femenino|10|9 kyu|30 kg|130|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind58=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Amarilla|CHAY AZCORRA LUIS|MASCULINO|10|7 kyu|45 kg|138|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Amarilla|YAHIMA SASIL CANUL UK|Femenino|10|8 KYU|40 kg|140|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Amarilla|Diego Ramírez Milla|Masculino|10|9 kyu|28 kg|120|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Amarilla|DAPHNE SARAI ESCOBAR GARCIA|Femenino|10|8 KYU|45 kg|145|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Amarilla|ISAAC ROJAS RAMOS|Masculino|10|8 KYU|29 KG|132|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|JAQUELINE AQUINO HERNÁNDEZ|Femenino|10|8 kyu|27 kg|136|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|MARISSA GARCÍA LIBRADO|Femenino|11|9 kyu|35 kg|141|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Amarilla|RENATA GABRIELA GONZÁLEZ LOEZA|Femenino|11|8 kyu|35 kg|147|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Amarilla|ANGEL GABRIEL GERRERO CRUZ|Masculino|11|9 kyu|33 kg|133|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Amarilla|FRANCISCO JAVIER BONILLA LOPEZ |Masculino|11|8 kyu|38 kg|139|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Amarilla|DIANA GALILEA GODINA GARAY|Femenino|10|10 kyu|30 kg|148|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil mixto 10 - 11 años C. Amarilla|IAN ALEJANDRO RAMOS ELIZARRARAS|Masculino|11|8 kyu|56 kg|150|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Amarilla|NORMANDO RIVAS DOMINGUEZ|MASCULINO|11|8 KYU|35 KG|147|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Amarilla|JULIÁN AARÓN REYES MOEDANO|Masculino|11|9 kyu|40 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind59=[
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Jose Isaac Bedolla Lopez |Masculino|10|5 kyu|34|142|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Marcia Rueda Garcia |Femenino|10|6 kyu|36|136|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Infantil mixto 10 - 11 años C. Verde/Morada|Vania Yaretzi Perez Carrillo|Femenino|10|5 kyu|33|143|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Verde/Morada|ARANZA VALDEZ DELGADO|Femenino|11|5 kyu|35 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Verde/Morada|NATALIA SOFIA CALDERON ARANDA |Femenino|11|7 kyu|30 kg|110|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Verde/Morada|Diego Martin Romero López|Masculino|10|7 kyu|49 kg|129|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Verde/Morada|Fernando Calderon Elvira|Masculino|11|4 kyu|53 kg|146|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Infantil mixto 10 - 11 años C. Verde/Morada|Julián Corona Sandoval|Masculino|10|5 kyu|42 kg|141|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Verde/Morada|Mónica Paola Ramos Frías|Femenino|10|4 kyu|27 kg|134|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Andres Jiménez Murrieta |Masculino|11|5 kyu|33 kg|145|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Carlos Eli Maldonado Federico|Masculino|11|7 kyu|33 kg|135|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Marali Sanchez Navarrete|Femenino|11|4 kyu|35 kg|135|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|SAUL VELA LOPEZ|Masculino|10|4 KYU|35 kg|147|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Verde/Morada|Andres Maximiliano Cancino Espinoza|Masculino|11|5 kyu|33 kg|144|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|ÁNGEL ROGELIO GARCÍA HERNÁNDEZ|Masculino|10|6 kyu|33 kg|138|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|CHRISTIAN ROLDAN CORONA|Masculino|11|7 kyu|47 kg|150|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|IAN MOISES ENRIQUEZ LÓPEZ|Masculino|11|7 kyu|49 kg|146|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Verde/Morada|RAMÓN SAÚL TOMÉ VÁZQUEZ|Masculino|10|4 kyu|37 kg|141|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Verde/Morada|MARTIN ARTURO HERNANDEZ MUÑOS|Masculino|11|7 kyu|28 kg|145|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",  
  "PUEBLA|DOJO DEL SUR-UVP|Infantil mixto 10 - 11 años C. Verde/Morada|YUSSEF KURI HERNANDEZ|Masculino|10|7 kyu|34 kg|134|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|DIEGO JARED GARCÍA GONZALEZ|Masculino|10|6 kyu|35|137|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|Javier Francisco Corral|Masculino|10|7 kyu|37 kg|137|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Verde/Morada|TONATZIN SERRANO DURAN|Femenino|10|7 kyu|66|153|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 10 - 11 años C. Verde/Morada|Miguel Angel Tobon Fermin|Masculino|10|4 kyu|33 kg|145|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|KAZOKU FÉNIX |Infantil mixto 10 - 11 años C. Verde/Morada|Oswaldo Serrano Quecholac|Masculino|11|3 kyu|42 kg|152|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "TLAXCALA|KENSEIKAI TLAXCALA|Infantil mixto 10 - 11 años C. Verde/Morada|Dara Cassandra Rodriguez Carro.|Femenino|10|4 kyu|34 kg|134|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Verde/Morada|Victor Alexis Navarro Rico|Masculino|10|5to Kyu|34.75|1.3|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Verde/Morada|ORLANDO RIVAS DOMINGUEZ|MASCULINO|11|7 KYU|42 KG|150|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Verde/Morada|MONSERRAT RAMÍREZ LÓPEZ|Femenino|10|4 kyu|64 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Verde/Morada|RAUL DAMIAN SOTO ANGON |MASCULINO|10|6 KYU|47 KG|143|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "TABASCO|SHINWA-KAN|Infantil mixto 10 - 11 años C. Verde/Morada|QUINTIN IGNACIO DIAZ CRUZ|Masculino|10|5 kyu|50 kg|141|KUMITE INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "QUINTANA ROO|SHITOKAI CANCÚN|Infantil mixto 10 - 11 años C. Verde/Morada|ARIEL QUINTAL GARCIA|Masculino|11|6 KYU|62.8 KG|144|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Infantil mixto 10 - 11 años C. Verde/Morada|CANUL CASTILLO AGUSTIN ALEXANDER |Masculino|11|4 kyu|58kg|149|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind60=[

  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|ARTURO CHBLE|Masculino|11|3 kyu|40 kg|136|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|DAMIAN LOPEZ ARSIQUE|Masculino|11|3 kyu|30 kg|110|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|EMMNAUEL MOO ARZAPALO|Masculino|11|1 kyu|45 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|JULIO EFREN GUTIERREZ SIERRA |Masculino|11|3 kyu|46 kg|152|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil mixto 10 - 11 años C. Libre|YOKARI RODRIGUEZ MORLES|Masculino|12|1 dan|37 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Constanza Alejandra López Rodríguez|Femenino|10|1 kyu|30 kg|132|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Kothy Jiménez Sordo|Femenino|10|1 kyu|31 kg|133|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Infantil mixto 10 - 11 años C. Libre|Paulina Sofía Méndez Sánchez|Femenino|11|1 kyu|58 kg|148|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "CAMPECHE|CD DEL CARMEN |Infantil mixto 10 - 11 años C. Libre|Kevin Alonzo Arrocha Lempino|Masculino|11|2 kyu|32 kg|135|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil mixto 10 - 11 años C. Libre|ÁNGEL ROGELIO GARCÍA HERNÁNDEZ|Masculino|10|6 kyu|33 kg|138|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Kathia Alexandra Villanueva Rueda|Femenino|11|1 dan|38 kg|143|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Norma Yamilette Mackan Bautista|Femenino|11|1 kyu|39 kg|150|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Santiago Perez Perez|Masculino|11|1 kyu|31 kg|140|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "MORELOS|I.E.D. SHITO KAI|Infantil mixto 10 - 11 años C. Libre|Santiago Perez Ruiz|Masculino|10|2 kyu|38 kg|140|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "PUEBLA|JAGUARES TERÁN |Infantil mixto 10 - 11 años C. Libre|Maria Fernanda Lopez Herrada|Femenino|11|1 dan|31 kg|141|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Infantil mixto 10 - 11 años C. Libre|Yahir Jaziel  Lopez Herrada|Masculino|13|1 dan|42 kg|154|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Libre|Román Adáneraz Montes|Masculino|10|3 kyu|45 kg|145|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil mixto 10 - 11 años C. Libre|Yehosua Danhayel Reza Flores|Masculino|10|1 kyu|35 kg|137|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "SONORA|REN SHI KAI OBREGÓN|Infantil mixto 10 - 11 años C. Libre|Mariana Cabral Lopez|Femenino|11|1 dan|60 kg|157|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "CHIHUAHUA|SANSEI JUKU|Infantil mixto 10 - 11 años C. Libre|Yadier Uriel Palacios Soto|Masculino|10|1er kyu|42.4|1.42|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Infantil mixto 10 - 11 años C. Libre|IVANA RAMÍREZ CASTILLO|Femenino|11|3 kyu|33 kg|136|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Infantil mixto 10 - 11 años C. Libre|CANUL CASTILLO AYLIN ALEXANDRA|Femenino|11|3 kyu|30 kg|145|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 10 - 11 años C. Libre|AXEL KALEB MARTINEZ VERDUGO|Masculino|11|2 kyu|41 kg|142|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA",
  "CHIAPAS|SHU SEI KAN|Infantil mixto 10 - 11 años C. Libre|BRAULIO FERNANDO MORALES MADRID |Masculino|11|2 kyu|43 kg|145|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind61=[
  "CAMPECHE|CD DEL CARMEN |Infantil femenil 12 - 13 años C. Blanca|Diana Cristina Herrera Ramírez|Femenino|13|10 kyu|54 kg|132|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Blanca|YAZMÍN CARVAJAL MARQUEZ|Femenino|12|10 kyu|44 kg|153|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "OAXACA|DENSHO JUKU TONATIUH|Infantil femenil 12 - 13 años C. Blanca|Cristian Jael López Lucas|Masculino|12|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Blanca|LUZ ABIGAIL DE LA ROSA CALDERON|Femenino|13|10 kyu|44 kg|144|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "PUEBLA|JAGUARES TERÁN |Infantil femenil 12 - 13 años C. Blanca|Jocelyn Vargas Sanchez|Femenino|12|9 kyu|45 kg|153|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "TLAXCALA|KENSEIKAI TLAXCALA|Infantil femenil 12 - 13 años C. Blanca|DANIELA SCARET GRANILLO ALVIREZ|Femenino|12|9 kyu|42 kg|149|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO"
];
var competidoresKumiteind62=[
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil femenil 12 - 13 años C. Amarilla |Lorena Medrano Juarez|Femenino|13|9 kyu|57kg|154|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Amarilla |DIANA VALERIA AQUINO HERNÁNDEZ|Femenino|12|8 kyu|36 kg|147|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |ANDREA DESIREE MARTINEZ GARCIA|Femenino|13|8 kyu|43 kg|158|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |DANNA KAREN PALOMO ORTIZ|Femenino|13|10 kyu|41 kg|140|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Infantil femenil 12 - 13 años C. Amarilla |KARLA JUDITH REYES VENEGAS|Femenino|13|8 kyu|40 kg|149|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Amarilla |ANA GEORGINA ORTEGA VALDEZ|FEMENINO|12|8 KYU|42 KG|160|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Amarilla |ANA PAOLA ORTEGA VALDEZ|FEMENINO|12|8 KYU|43 KG|160|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKumiteind63=[
  "PUEBLA|BUAP|Infantil femenil 12 - 13 años C. Verde/Morada|Ángel Mani Mendiola|Masculino|12|5 kyu|47 kg|158|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Infantil femenil 12 - 13 años C. Verde/Morada|Yarelli Angélica García Pérez|Femenino|13|4 kyu|56 kg|155|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|BLANCA ESTELA XOLALPA ALDUCIN|Femenino|12|7 kyu|37 kg|147|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|EVELYN RODRÍGUEZ RAMÍREZ |Femenino|12|5 kyu|68 kg|159|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|MICHELLE IRANZU SAAVEDRA CELIS|Femenino|12|6 kyu|57 kg|157|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Verde/Morada|NORMA ISABEL HERNÁNDEZ MONTIEL|Femenino|12|5 kyu|55 kg|146|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "CHIHUAHUA|JIN JUKU	|Infantil femenil 12 - 13 años C. Verde/Morada|GAEL ALEXANDER GARCÍA GONZALEZ|Masculino|12|7 kyu|38|143|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil femenil 12 - 13 años C. Verde/Morada|Mario Alberto Carbajal |Masculino|12|5 kyu|45 kg|154|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Verde/Morada|Estephany Yamilet Navarro Rico|Femenino|12|5to Kyu|75|1.54|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "QUINTANA ROO|SHITOKAI CANCÚN|Infantil femenil 12 - 13 años C. Verde/Morada|DULCE ANDRADE |Femenino|13|5 Kyu|45 KG|153|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind64=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre |ANA SANCHEZ URIBE|Femenino|13|1 kyu|50 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre |ANDREA ALPUCHE GONGORA|Femenino|12|3 kyu|38 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre |HERNANDEZ MONSREAL SAUL ANTONIO|MASCULINO|13|1 kyu|37 kg|147|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil femenil 12 - 13 años C. Libre |YAHIR ESPINOZA GARZA|Masculino|13|2 kyu|49 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "TABASCO|C.E.K.A.T. |Infantil femenil 12 - 13 años C. Libre |Daniela Itzel López León|Femenino|13|1 dan|49 kg|165|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Libre |BLANCA ESTELA XOLALPA ALDUCIN|Femenino|12|7 kyu|37 kg|147|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Libre |EVELYN RODRÍGUEZ RAMÍREZ |Femenino|12|5 kyu|68 kg|159|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil femenil 12 - 13 años C. Libre |NORMA ISABEL HERNÁNDEZ MONTIEL|Femenino|12|5 kyu|55 kg|146|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ2",
  "MORELOS|I.E.D. SHITO KAI|Infantil femenil 12 - 13 años C. Libre |Dulce Fernanda Cortez Chavez|Femenino|12|1 dan|55 kg|153|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "MORELOS|I.E.D. SHITO KAI|Infantil femenil 12 - 13 años C. Libre |Perla Zayarith Abonce Miranda|Femenino|13|3 kyu|72 kg|163|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "CHIHUAHUA|SANSEI JUKU|Infantil femenil 12 - 13 años C. Libre |ALISON ALEJANDRA MARTINEZ SOTO|Femenino|13|1 kyu|70 KG|159|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA ",
  "CHIAPAS|SHU SEI KAN|Infantil femenil 12 - 13 años C. Libre |IVANYA GUADALUPE CUEVAS ZARATE|Femenino|12|2 kyu|45 kg|150|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind65=[
  "CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Blanca |Rubén Rodríguez Sánchez|Masculino|13|10 kyu|50 kg|160|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil varonil 12 - 13 años C. Blanca |EDGAR FIDEL VEGA GONZALES|Masculino|13|10 kyu|83 kg|163|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "ZACATECAS|IPPUUKAN|Infantil varonil 12 - 13 años C. Blanca |CARLOS ALEJANDRO GARCIA BUGARIN|Masculino|12|10 kyu|62 kg|151|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Blanca |Romario Sagaste Mendivil|Masculino|13|1 dan|34 kg|140|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Blanca |GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind66=[
  "ZACATECAS|IPPUUKAN|Infantil varonil 12 - 13 años C. Amarilla |JUAN MANUEL OLOÑO CARDENAS|Masculino|13|8 kyu|55 kg|157|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Amarilla |GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Amarilla |LENIN ALVA TRUJILLO |Masculino|13|9 kyu|42 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Amarilla |LUCAS GABRIEL GARCIA GORDILLO|Masculino|13|8 kyu|60 kg|158|KUMITE INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "QUINTANA ROO|SHITOKAI CANCÚN|Infantil varonil 12 - 13 años C. Amarilla |LUNA VAZQUEZ IAN KENNEY |Masculino|13|8 kyu|38.5|151|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind67=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Verde/Morada|JORDAN LOPEZ CHI|Masculino|13|5 kyu|70 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "TABASCO|C.E.K.A.T. |Infantil varonil 12 - 13 años C. Verde/Morada|Fausto Emiliano Vera Villanueva|Masculino|12|4 kyu|55 kg|148|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Guillermo Alexis Sarricolea Hernández|Masculino|13|4 kyu|55 kg|162|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN ",
  "CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Jose Manuel Moreno de la Fuente|Masculino|13|4 kyu |50 kg|160 |KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Verde/Morada|Victor Giovanni Gonzalez Jimenez|Masculino|13|6 kyu|52kg|160|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil varonil 12 - 13 años C. Verde/Morada|Alam Balam Perez Romero|Masculino|13|5 kyu|47 kg|152|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Infantil varonil 12 - 13 años C. Verde/Morada|Oscar Evangelista Dimas|Masculino|13|7 kyu|45 kg|145|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|MAURICIO RODRÍGUEZ CAMARILLO|Masculino|12|5 kyu|45 kg|162|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|YAEL AGUILAR ORTÍZ|Masculino|12|6 kyu|38 kg|161|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Infantil varonil 12 - 13 años C. Verde/Morada|YAIR LUNA PONCE|Masculino|13|7 kyu|54 kg|158|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Infantil varonil 12 - 13 años C. Verde/Morada|JOSE ROBERTO DE LA LUZ MITZI|Masculino|13|7 kyu|60 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|JAGUARES TERÁN |Infantil varonil 12 - 13 años C. Verde/Morada|Diego González Fernández |Masculino|12|5 kyu|40 kg|142|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Verde/Morada|Emilio Soto Salas|Masculino|13|6 kyu|48 kg|160|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Verde/Morada|GAEL DURAN ROBLES|Masculino|13|7 kyu|59|169|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|SEISHIN DOJO|Infantil varonil 12 - 13 años C. Verde/Morada|JOSÉ ANTONIO RAMÍREZ SAUCEDO|Masculino|13|6 kyu|54 kg|154|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind68=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Libre|DIEGO CABALLERO|Masculino|13|3 kyu|47 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Infantil varonil 12 - 13 años C. Libre|EDEN ARTURO VALLE VAZQUEZ|Masculino|13|1 kyu|36 kg|148|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "CAMPECHE|CD DEL CARMEN |Infantil varonil 12 - 13 años C. Libre|Emiliano flores zausa|Masculino|12|2 kyu|50 kg|150 |KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "QUINTANA ROO|CENTRO TÉCNICO DEPORTIVO JUNPUU-KAN COZUMEL|Infantil varonil 12 - 13 años C. Libre|Jesus Alejandro Och Cua|Masculino|13|1 kyu|50 kg|160|KUMITE INDIVIDUAL|SENSEI HELSER EDGARDO CHACON OSORIO",
  "MORELOS|I.E.D. SHITO KAI|Infantil varonil 12 - 13 años C. Libre|Axel Gadiel Dimas Salgado|Masculino|12|1 dan|44 kg|147|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "CHIHUAHUA|JIN JUKU	|Infantil varonil 12 - 13 años C. Libre|César Alejandro Quintana Moya|Masculino|12|1 kyu|30 kg|145|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Libre|Nikolas Tamayo Morales|Masculino|12|1 dan|42 kg|157|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "SONORA|REN SHI KAI OBREGÓN|Infantil varonil 12 - 13 años C. Libre|Santiago Vega Batiz|Masculino|12|1 dan|39 kg|142|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "CHIHUAHUA|SANSEI JUKU|Infantil varonil 12 - 13 años C. Libre|MARIO ALBERTO CARRILLO PEREZ|MASCULINO|13|1 KYU|52 KG|174|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|EMMANUEL ESTABAN PIERREL HERNANDEZ|Masculino|13|1 kyu|52 kg|160|KUMITE INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|LEONARDO DOMINGUEZ SACAMITZIN|Masculino|11|2 kyu|61 kg|159|KUMITE INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "TABASCO|SHINWA-KAN|Infantil varonil 12 - 13 años C. Libre|PABLO NICOLAS PIERREL HERNANDEZ|Masculino|12|2 kyu|45 kg|141|KUMITE INDIVIDUAL|SENSEI EWGAR IZQUIERDO ÁVALOS",
  "CHIAPAS|SHU SEI KAN|Infantil varonil 12 - 13 años C. Libre|VULMARO ALBERTO MARTINEZ VERDUGO|Masculino|13|2 kyu|45 kg|145|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind69=[
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Blanca|Citlali Ramirez Enriquez|Femenino|15|10 kyu|57 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Blanca|KIMBERLY SAMANTHA ARELLANO RIOS|Femenino|15|10 kyu|65 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Blanca|Mary Cruz Gomez Hernandez|Femenino|14|10 kyu|53 kg|157|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Heidy Guadalupe Collado Peña|Femenino|14|10 kyu|50 kg|150|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Jennifer Hervis López|Femenino|14|10 kyu|73 kg|165|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil femenil 14 - 15 años C. Blanca|Michelle Guadalupe Herrera Castillo|Femenino|14|10 kyu|50 kg|150|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Blanca|MAGALI ZEPEDA VENTURA |Femenino|15|10 kyu|59.5kg|158|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "OAXACA|DENSHO JUKU TONATIUH|Juvenil femenil 14 - 15 años C. Blanca|Alondra Zulem Martínez López|Femenino|14|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Blanca|Diana Vianey Meza|Femenino|15|10 kyu|52 kg|154|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Blanca|Fabiola Moreno Sorcia|Femenino|15|10 kyu|55 kg|154|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN"

];
var competidoresKumiteind70=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Amarilla|ANDREA VALENTINA CALDERON ARANDA |Femenino|14|9 kyu|60 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Amarilla|ARANZA MONTAÑEZ|Femenino|15|8 kyu|55 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Amarilla|Luis Miguel Meraz Piña|Masculino|15|8 kyu|49 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Amarilla|MONICA ARLETTE CUAYA COAT|Femenino|15|8 kyu|51 kg|164|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Amarilla|GUADALUPE REYNA VAZQUEZ HERNANDEZ|Femenino|15|9 kyu|55 kg|157|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "ZACATECAS|IPPUUKAN|Juvenil femenil 14 - 15 años C. Amarilla|ROMMY YORMERI CASAS REYES|Femenino|15|8 kyu|55 kg|155|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "PUEBLA|KAZOKU FÉNIX |Juvenil femenil 14 - 15 años C. Amarilla|Victor Eduardo Serrano Lopez|Masculino|14|8 kyu|62 kg|170|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO"

];
var competidoresKumiteind71=[
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Verde/Morada|ALEJANDRA GONZALEZ VEANO|Femenino|14|6 kyu|54 kg|155|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil femenil 14 - 15 años C. Verde/Morada|Caren Gomez Archundia |Femenino|15|7 kyu|56 kg|152|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Verde/Morada|ANA KAREN RODRÍGUEZ RAMÍREZ|Femenino|14|5 kyu|57 kg|163|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Verde/Morada|GUADALUPE REYNA VAZQUEZ HERNANDEZ|Femenino|15|9 kyu|55 kg|157|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Verde/Morada|MARIA JOSÉ RAMOS PORTILLO|Femenino|15|4 kyu|57 kg|163|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Juvenil femenil 14 - 15 años C. Verde/Morada|NAYIB KURI HERNANDEZ|Masculino|14|7 kyu|60 kg|164|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 14 - 15 años C. Verde/Morada|Noelia Estefania Zepeda Coyotl|Femenino|16|6 kyu|40 kg|142|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|FRANCISCO JULIAN SERRANO DURAN|Masculino|14|7 kyu|73|170|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|Martha Guadalupe Miranda Parga|Femenino|14|7 kyu|74 kg|158|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Verde/Morada|NAOMI MERCANO NUÑEZ|Femenino|14|5 kyu|60|167|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 14 - 15 años C. Verde/Morada|ANDREA QUINTAL GARCIA|Femenino|14|6 KYU|42.5 KG|149|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 14 - 15 años C. Verde/Morada|VIRIDIANA ARCENIO CAT|Femenino|14|5 KYU|53.8 KG|149|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind72=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|CAMILA PAEZ|Femenino|14|1 dan|45 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|GABRIELA HERRERA MOLINA|Femenino|15|1 kyu|40 kg|140|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 14 - 15 años C. Libre|MARIA KARINA SANCHEZ URIBE|Femenino|14|1 kyu|60 kg|171|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Juvenil femenil 14 - 15 años C. Libre|Analletzin Nolasco Espinosa|Femenino|15|1 dan|78 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Juvenil femenil 14 - 15 años C. Libre|Dana Azul Cárdenas León|Femenino|14|1 dan|52 kg|153|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Juvenil femenil 14 - 15 años C. Libre|Daniela Itzel López León|Femenino|13|1 dan|49 kg|165|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Libre|ANA KAREN RODRÍGUEZ RAMÍREZ|Femenino|14|5 kyu|57 kg|163|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil femenil 14 - 15 años C. Libre|MARIA JOSÉ RAMOS PORTILLO|Femenino|15|4 kyu|57 kg|163|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "MORELOS|I.E.D. SHITO KAI|Juvenil femenil 14 - 15 años C. Libre|Cinthya Elizabeth Sánchez Reyes|Femenino|14|1 dan|59 kg|169|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "MORELOS|I.E.D. SHITO KAI|Juvenil femenil 14 - 15 años C. Libre|Fernanda Lopez Salazar|Femenino|15|1 dan|51 kg|159|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "CHIHUAHUA|JIN JUKU	|Juvenil femenil 14 - 15 años C. Libre|Griczel Adriana Tagle Acuña |Femenino|14|1 kyu|56 kg|156|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 14 - 15 años C. Libre|CANUL CASTILLO YAZURI MONSERRAT |Femenino|14|3 kyu|60 kg|162|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind73=[
  "PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Blanca|Llinas Brito Marian Patricia |Femenino|16|10 kyu|85 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "OAXACA|DENSHO JUKU TONATIUH|Juvenil femenil 16 - 17 años C. Blanca|Heber Jafet Martínez López|Masculino|16|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "OAXACA|DENSHO JUKU TONATIUH|Juvenil femenil 16 - 17 años C. Blanca|Isael López Diaz|Masculino|17|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Blanca|LIZBETH ALEJANDRA ABURTO AGUIRRE|Femenino|16|10 KYU|43 KG|156|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind74=[
  "PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Amarilla|ABIGAIL MENDOZA TENORIO|Femenino|17|8 kyu|61 kg|156|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "ZACATECAS|IPPUUKAN|Juvenil femenil 16 - 17 años C. Amarilla|ALONDRA GETSEMANI CAMPOS GARCIA|Femenino|15|8 kyu|39 kg|158|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "CHIHUAHUA|SANSEI JUKU|Juvenil femenil 16 - 17 años C. Amarilla|KRISHNA  HEREDIA GARCIA|FEMENINO|16|8 KYU|45 KG|158|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKumiteind75=[
  "PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Verde/Morada|Janeth Morales Ramos|Femenino|17|4 kyu|67 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Verde/Morada|Valeria Lopez Perez|Femenino|16|6 kyu|53 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil femenil 16 - 17 años C. Verde/Morada|Ximena Jimenez Porras|Femenino|16|6 kyu|54 kg|168|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DOJO DEL SUR-UVP|Juvenil femenil 16 - 17 años C. Verde/Morada|MARGARITA BELEN CONDADO FLORES |Femenino|16|7 kyu|55 kg|156|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|Arleth Juárez Guzmán|Femenino|16|6 kyu|65 kg|158|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|José Alberto Ortega Becerril|Masculino|16|6 kyu|59 kg|162|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil femenil 16 - 17 años C. Verde/Morada|Vanessa Mondragon Ángeles|Femenino|16|6 kyu|60 kg|161|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Verde/Morada|RUBIO CHIN JANET AYDEE |Femenino|16|5 kyu|68KG|164|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",

];
var competidoresKumiteind76=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 16 - 17 años C. Libre|ANA PAOLA VALLE VALLE |Femenino|17|3 kyu|53 kg|167|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil femenil 16 - 17 años C. Libre|MICHELLE NAVARRO ANDRADE|Femenino|17|5 kyu|48 kg|153|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil femenil 16 - 17 años C. Libre|ludwid Axxel Casados Ramirez|Masculino|16|1 dan|67 kg|165|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil femenil 16 - 17 años C. Libre|Manuel de Jesús Enríquez Sosa.|Masculino|17|3 kyu|63 kg|172|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "TABASCO|C.E.K.A.T. |Juvenil femenil 16 - 17 años C. Libre|Dana Azul Cárdenas León|Femenino|14|1 dan|52 kg|153|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|ANGÉLICA VICTORIANO SEVERO|Femenino|16|1 dan|60 kg|162|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|MARIEL TECUAPETLA FUENTES|Femenino|17|1 dan|50 kg|153|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Juvenil femenil 16 - 17 años C. Libre|ROSA MARÍA MUÑÓZ APARICIO|Femenino|16|1 dan|50 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|ALEMAN ANGELES HANNA |Femenino|17|4 kyu|56|153|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|CANUL CASTILLO YAZURI MONSERRAT |Femenino|14|3 kyu|60 kg|162|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|JAZMIN BAUTISTA CRUZ|Femenino|17|1 KYU|52 KG|150|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil femenil 16 - 17 años C. Libre|PERLA UC ABAN  |Femenino|16|1 KYU|50 KG|155|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",

];
var competidoresKumiteind77=[
  "PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Blanca|Axel Emmanuel Espinoza Perez|Masculino|15|10 kyu|60 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Blanca|Manuel Alejandro Hernandez Jimenez|Masculino|15|10 kyu|49 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Carlos Manuel Pérez Cruz |Masculino|14|10 kyu|55 kg|165|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Francisco Moisés Ojeda Gerónimo|Masculino|15|10 kyu|55 kg|153|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Haziel Dair Barrón Jiménez|Masculino|15|10 kyu|73 kg|170|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Jaime Valdez Mendoza |Masculino|14|10 kyu|55 kg|173|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Blanca|Jorge Emilio Román Capilla|Masculino|14|10 kyu|55 kg|160|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 14 - 15 años C. Blanca|Carlos Ariel Mora Juarez |Masculino|15|10 kyu|54 kg|160|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "OAXACA|DENSHO JUKU TONATIUH|Juvenil varonil 14 - 15 años C. Blanca|Axel René Serret Zaguilán|Masculino|15|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Arturo De Luis Olivares|Masculino|15|10 kyu|61 kg|167|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Jose Rafael Hernandez|Masculino|15|10 kyu|63 kg|170|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Blanca|Julio cesar De Los Santos|Masculino|15|10 kyu|85 kg|176|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN"
];
var competidoresKumiteind78=[
  "PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Amarilla|ALFREDO CUAUTLE DIAZ|Masculino|15|8 kyu|59 kg|167|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Amarilla|Israel Chavira Dávila|Masculino|15|8 kyu|75 kg|178|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Amarilla|ANGEL OSMAR HEREDIA GARCIA|MASCULINO|14|8 KYU|65 KG|170|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 14 - 15 años C. Amarilla|GABRIEL SÁNCHEZ MONTIEL|Masculino|13|10 kyu|45 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind79=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Verde/Morada|ALEXIS MORALES|Masculino|16|7 kyu|60 kg|163|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Verde/Morada|CHRISTOPHER ALMEIDA|Masculino|16|5 kyu|100 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Verde/Morada|URIEL FCO HERNANDEZ |Masculino|14|7 kyu|70 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Juvenil varonil 14 - 15 años C. Verde/Morada|Sergio Martinez Gonzalez|Masculino|15|6 kyu|57 kg|162|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Ángel Abraham Cruz Estevan|Masculino|14|7 kyu|56 kg|172|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Damián Bautista Martínez|Masculino|15|7 kyu|80 kg|169|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Daniel Alejandro Laines Ceballos|Masculino|15|4 kyu|56 kg|158|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Verde/Morada|Edson Ivan Sanchez Navarrete|Masculino|14|4 kyu|44kg|165|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "QUINTANA ROO|CENTRO TÉCNICO DEPORTIVO JUNPUU-KAN COZUMEL|Juvenil varonil 14 - 15 años C. Verde/Morada|Joaquin Jesus Dzul Nah|Masculino|14|7 kyu|65 kg|158|KUMITE INDIVIDUAL|SENSEI HELSER EDGARDO CHACON OSORIO",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 14 - 15 años C. Verde/Morada|Carlos Gael Gonzalez Hernandez|Masculino|14|4 kyu|52kg|162|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Juvenil varonil 14 - 15 años C. Verde/Morada|CARLOS  ALBERTO RAMIREZ DIAZ|Masculino|14|6 kyu|73 kg|180|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Estefania Hernández Morales|Femenino|16|6 kyu|44 kg|150|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Noel Campos|Masculino|16|6 kyu|62 kg|170|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Rodolfo Ponce Morales|Masculino|16|6 kyu|46 kg|165|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 14 - 15 años C. Verde/Morada|Tania Rosales Onofre|Femenino|16|6 kyu|56 kg|156|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Verde/Morada|Ricardo Aguirre|Masculino|15|7 kyu|71 kg|165|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Verde/Morada|SEBASTIAN MORA LUGO|MASCULINO|14|6 KYU|42 KG|163|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Verde/Morada|ROCCO ALEXANDER PEÑA|MASCULINO|15|6 KYU|69 KG|175|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 14 - 15 años C. Verde/Morada|JUAN PUC HERRERA|Masculino|14|4 KYU|57.0 KG|170|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 14 - 15 años C. Verde/Morada|URIEL QUINTAL GARCIA|Masculino|16|5 KYU|60.3 KG|160|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind80=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|CARLOS PACHON MENDEZ|Masculino|14|1 kyu|58 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|RICARDO ZAPATA|Masculino|15|1 kyu|55 KG|160|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 14 - 15 años C. Libre|VICTOR UC|Masculino|14|1 kyu|40 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil varonil 14 - 15 años C. Libre|Gabriel de Jesús Aguirre Vargas.|Masculino|14|3 kyu|47 kg|158|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "TABASCO|C.E.K.A.T. |Juvenil varonil 14 - 15 años C. Libre|Erick Manuel Feria Méndez|Masculino|15|1 kyu|50 kg|167|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Juvenil varonil 14 - 15 años C. Libre|Javier Arturo Ramírez García|Masculino|14|1 dan|48 kg|154|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Agustin Montiel Cuevas|Masculino|14|1 dan|55 kg|170|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Jose Angel Hernandez Minero|Masculino|14|1 dan|65 kg|1.69|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Ricardo Andres Guevara Bojorquez|Masculino|15|1 dan|47kg|155|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Alejandro Isai Hernanez poot|Masculino|15|2 kyu|55 kg|165|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Juvenil varonil 14 - 15 años C. Libre|Jose Manuel Cancino Espinoza|Masculino|14|1 kyu|57 kg|170|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Libre|Huri Alejandro Aparicio|Masculino|15|2 kyu|54 kg|162|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "CHIHUAHUA|JIN JUKU	|Juvenil varonil 14 - 15 años C. Libre|Miguel Durán Rodríguez |Masculino|15|1 kyu|54 kg|168|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "TLAXCALA|KENSEIKAI TLAXCALA|Juvenil varonil 14 - 15 años C. Libre|Jose Antonio Paredes Peres|Masculino|15|2 kyu|65 kg|170|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 14 - 15 años C. Libre|Erick Samuel Lara Albarran|Masculino|15|1 dan|68 kg|169|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 14 - 15 años C. Libre|Kury Jhavvid Cajero Mesino|Masculino|15|1 kyu|67 kg|169|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Libre|CRISTHOPER CHACON VARELA |MASCULINO|14|1 KYU|57 KG|166|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Juvenil varonil 14 - 15 años C. Libre|OCTAVIO MORALES FLORES|MASCULINO|14|1 KYU|65 KG|175|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 14 - 15 años C. Libre|EMILIO RAMÍREZ LÓPEZ|Masculino|14|3 kyu|74 kg|177|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 14 - 15 años C. Libre|HEREDIA CONTRERAS VICTOR ANTONIO |Masculino|14|2 kyu|54 kg|163|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "CHIAPAS|SHU SEI KAN|Juvenil varonil 14 - 15 años C. Libre|MAURICIO GOMEZ ALCAZAR|Masculino|14|2 kyu|53 kg|163|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];

var competidoresKumiteind81=[
  "PUEBLA|DOJO DEL SUR-UVP|Juvenil varonil 16 -17 años C. Blanca|JONATHAN GABRIEL VERDUGO ZARATE |Masculino|16|10 kyu|60 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ"

];
var competidoresKumiteind82=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 -17 años C. Amarilla|JULIAN VILLARREAL|Masculino|17|8 kyu|70 KG|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|ENRIQUE LOPEZ DELFIN|Masculino|16|8 kyu|55 kg|168|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|ERICK PEREZ SANCHEZ|Masculino|16|8 kyu|58 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|Ezequiel Sanchez Morales|Masculino|16|8 kyu|60 kg|155|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 -17 años C. Amarilla|Jorge Luis Roldan Luengas|Masculino|16|9 kyu|60 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "ZACATECAS|IPPUUKAN|Juvenil varonil 16 -17 años C. Amarilla|JESUS PAZ MAYO|Masculino|16|8 kyu|65 kg|170|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 -17 años C. Amarilla|Luis Fernando Perez Romero|Masculino|16|9 kyu|83 kg|170|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 16 -17 años C. Amarilla|SERGIO ANTONIO LABASTIDA GALLARDO|Masculino|16|9 kyu|52 kg|169|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 16 -17 años C. Amarilla|CAAMAL LORIA VICTOR|Masculino|17|8 kyu|78 kg|169|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];

var competidoresKumiteind83=[
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|David Antonio Rodriguez Oyarzabal|Masculino|16|6 kyu|57 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|IRVING CERVANTES LUCERO|Masculino|17|6 kyu|54 kg|173|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Jesus Joel Vazquez Valencia|Masculino|16|5 kyu|65 kg|171|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Jorge Isaac Alvarez Pelaez|Masculino|16|7 kyu|71 kg|173|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|JOSE MARTIN NAVARRETE FUENTES|Masculino|17|6 kyu|78 kg|172|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Verde/Morada|Luis Alberto Aguilar Corona |Masculino|16|6 kyu|68 kg|172|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Juvenil varonil 16 - 17 años C. Verde/Morada|Cristian Ramirez Mendez|Masculino|17|5 kyu|57 kg|162|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Daniel Velasco Martínez|Masculino|17|4 kyu|50 kg|170|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Javier Sánchez Olaya |Masculino|17|5 kyu|63 kg|172|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Luis Ángel Muñoz Cortes|Masculino|17|4 kyu|62 kg|167|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Juvenil varonil 16 - 17 años C. Verde/Morada|Marcos Bautista Muñoa|Masculino|16|6 kyu|74 kg|171|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "TLAXCALA|KENSEIKAI TLAXCALA|Juvenil varonil 16 - 17 años C. Verde/Morada|J ose Alejandro Mora Muñoz|Masculino|17|8 kyu|60 kg|160|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "PUEBLA|MUSHIN JUKU|Juvenil varonil 16 - 17 años C. Verde/Morada|Uriel Camacho Islas|Masculino|16|5 kyu|68 kg|162|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Juvenil varonil 16 - 17 años C. Verde/Morada|Orlando Jesus Moran Bernal|Masculino|16|5 kyu|59 kg|171|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 16 - 17 años C. Verde/Morada|JUAN PABLO GUTIÉRREZ RAMÍREZ|Masculino|16|5 kyu|65 kg|162|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 16 - 17 años C. Verde/Morada|SERGIO ANTONIO LABASTIDA GALLARDO|Masculino|16|9 kyu|52 kg|169|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 16 - 17 años C. Verde/Morada|HERNANDEZ ESCOBAR SIMON DANIEL |Masculino|17|7 kyu|84.8|173|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 16 - 17 años C. Verde/Morada|ROSADO ITZINCAB  ERICK|Masculino|17|5 kyu|64.5|164|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind84=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|ALEJANDRO ALPUCHE GONGORA|Masculino|16|1 dan|50 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|JOSE GUEVARA PEREZ|Masculino|17|1 kyu|75 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Juvenil varonil 16 - 17 años C. Libre|LUIS PINTO FLORES|Masculino|17|1 kyu|58 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Juvenil varonil 16 - 17 años C. Libre|Emanuel Rafael Muñoz Barradas|Masculino|16|1 dan|70 kg|175|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|Ángel Cruz Ortega|Masculino|17|3 kyu|63 kg|174|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|CRISTIAN JONATHAN MARTINEZ OCHOA|Masculino|16|1 kyu|57 kg|169|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Juvenil varonil 16 - 17 años C. Libre|José Carlos del Villar Rojas|Masculino|17|1 kyu|60 kg|174|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Juvenil varonil 16 - 17 años C. Libre|Carlos Emmanuel Rodríguez Mazo |Masculino|17|1 dan|74 kg|180|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Juvenil varonil 16 - 17 años C. Libre|Erick Manuel Feria Méndez|Masculino|15|1 kyu|50 kg|167|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Juvenil varonil 16 - 17 años C. Libre|Isaac López León|Masculino|16|2 dan|59 kg|166|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "VERACRUZ|DENSHO JUKU XALAPA |Juvenil varonil 16 - 17 años C. Libre|Eduardo Cova|Masculino|17|3 kyu|70 kg|180|KUMITE INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "MORELOS|I.E.D. SHITO KAI|Juvenil varonil 16 - 17 años C. Libre|Jesus Antonio Cortez Chavez|Masculino|16|1 dan|65 kg|175|KUMITE INDIVIDUAL|SENSEI SERGIO MUÑOZ CUETO",
  "CHIHUAHUA|JIN JUKU	|Juvenil varonil 16 - 17 años C. Libre|Mauricio Antonio Holguín Villezcas|Masculino|16|1 dan|58 kg|165|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "SONORA|REN SHI KAI OBREGÓN|Juvenil varonil 16 - 17 años C. Libre|Jesus Alejandro Cuervo Flores|Masculino|16|1 dan|59 kg|167|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "PUEBLA|SEISHIN DOJO|Juvenil varonil 16 - 17 años C. Libre|EMILIO RAMÍREZ LÓPEZ|Masculino|14|3 kyu|74 kg|177|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Juvenil varonil 16 - 17 años C. Libre|UCAN KANTUN DANIEL IVAN|Masculino|17|5 kyu|76.5|166|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind85=[
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Anahi Amel Ciriaco|Femenino|18|10 kyu|42|143|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Anayeli Velazquez Encarnacion |Femenino|18|10 kyu|56|144|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto Femenil C. Blanca|Fatima Reyes Sanchez |Femenino|21|10 kyu|47|157|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Blanca|CONSUELO MÁRQUEZ TREJO|Femenino|27|10 kyu|50 kg|151|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Blanca|SILVIA SUÁREZ CLEMENTE|Femenino|34|10 kyu|50kg|152|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto Femenil C. Blanca|SONIA CAROLINA CHI JIMENEZ|Femenino|18|10 KYU|60 KG|150|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind86=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Amarilla|GABRIELA VILLARREAL|Femenino|19|8 kyu|55 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto Femenil C. Amarilla|JUDITH ESCALANTE|Femenino|18|6 kyu|50 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Adulto Femenil C. Amarilla|EVELYN KRYSTAL TELPA FLORES |Femenino|22|8 kyu|65 kg|166|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|HILARI JIMENEZ ORTIZ|Femenino|40|9 KYU|40 KG|146|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Mariana Javier Arias|Femenino|19|9 kyu|66 kg|152|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Nahomi Itzel Álvarez May|Femenino|20|10 kyu|46kg|149|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Sheila Yesenia Cupil Ovando |Femenino|23|9 kyu|64 kg|163|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto Femenil C. Amarilla|Yamile Anahi Ceballos Hernandez|Femenino|20|9 kyu|56 kg|156|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Amarilla|Arlette Lopez de Jesus |Femenino|19|9 kyu|52 kg|155|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Amarilla|Maricela De Jesus Castañeda|Femenino|40|9 kyu|64 kg|160|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|KAZOKU FÉNIX |Adulto Femenil C. Amarilla|Yareli Ramos Aparicio|Femenino|20|9 kyu|52 kg|151|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|MUSHIN JUKU|Adulto Femenil C. Amarilla|Brenda Reyes Huerta|Femenino|23|9 kyu|60 kg|160|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "PUEBLA|SEISHIN DOJO|Adulto Femenil C. Amarilla|KARLA MARIANA CRUZ GUERRERO|Femenino|23|8 kyu|60 kg|156|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIAPAS|SHU SEI KAN|Adulto Femenil C. Amarilla|LAURA JAZMIN MIRAVETE INURRETA|Femenino|18|8 kyu|60 kg|155|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind87=[
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|BARBARA SARAHI ROJAS FLORES |Femenino|19|4 kyu|55 kg|157|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|CITLALI ALVA TRUJILLO|Femenino|28|6 kyu|76 kg|161|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|Guadalupe Perez Hernandez|Femenino|20|5 kyu|59 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|INGRID MARISOL FLORES MORA|Femenino|19|5 kyu|55 kg|154|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|LILIA CRISTINA CAZARES SOSA|Femenino|19|7 kyu|62 kg|152|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|LIZBETH ALVAREZ MARTINEZ|Femenino|20|7 kyu|43 kg|148|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|MARIANA LOPEZ FLORES|Femenino|19|4 kyu|69 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|Mary Carmen Barranco Montoya|Femenino|30|5 kyu|80 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto Femenil C. Verde/Morada|SANDRA RODRIGUEZ CORREA|Femenino|22|5 kyu|70 kg|157|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Femenil C. Verde/Morada|Denisse Lopez Hernandez|Femenino|22|4 kyu|56 kg|151|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto Femenil C. Verde/Morada|Wendy Dominguez Sanchez|Femenino|25|5 kyu|64 kg|149|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Verde/Morada|EMILIA HUERTA DE LA CRUZ|Femenino|19|4 kyu|67 kg|164|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DENSHO JUKU GANBARU|Adulto Femenil C. Verde/Morada|SANDRA FRANCO VELASQUEZ|Femenino|25|5 kyu|51 kg|153|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|GENRUY KAN|Adulto Femenil C. Verde/Morada|Mireya Maldonado Vidal|Femenino|24|5 kyu|68 kg|80|KUMITE INDIVIDUAL|SENSEI ELIAS MARROQUÍN",
  "PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Verde/Morada|Andrea Rodríguez Ramos|Femenino|17|4 kyu|54 kg|163|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Adulto Femenil C. Verde/Morada|Angeles Hernadez Hernandez|Femenino|22|6 kyu|61 kg|158|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|MUSHIN JUKU|Adulto Femenil C. Verde/Morada|Jennifer Osorio Lampallas|Femenino|21|6 kyu|54 kg|153|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "PUEBLA|MUSHIN JUKU|Adulto Femenil C. Verde/Morada|Maria del Rosario Angulo Rocha|Femenino|23|6 kyu|54 kg|162|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "PUEBLA|SEISHIN DOJO|Adulto Femenil C. Verde/Morada|ALINA STEPHANIE ESCANDÓN VELÁZQUEZ|Femenino|25|4 kyu|64 kg|162|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind88=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto femenil C. Libre -50 kg|KRISTAL EK EROSA|Femenino|19|1 dan|48 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|JAGUARES TERÁN |Adulto femenil C. Libre -50 kg|Karol Roman Camargo|Femenino|20|1 dan|48 kg|154|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -50 kg|ANA CRISTINA TETLALMATZI TORRES|Femenino|29|1 dan|49 kg|145|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind89=[
  "PUEBLA|BUAP|Adulto femenil C. Libre -55 kg|KARLA DE CASIA VARGAS MORA|Femenino|18|2 kyu|54 kg|148|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "VERACRUZ|DENSHO JUKU XALAPA |Adulto femenil C. Libre -55 kg|Maheli Sinai Olivares Fernández|Femenino|22|2 kyu|55 kg|160|KUMITE INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "PUEBLA|KAZOKU FÉNIX |Adulto femenil C. Libre -55 kg|Julissa Quecholac Guerrero|Femenino|20|1 dan|54 kg|158|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "SONORA|REN SHI KAI OBREGÓN|Adulto femenil C. Libre -55 kg|Lesly Gabriela Castillo Cuevas|Femenino|19|1 dan|54 kg|163|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -55 kg|ALEJANDRA VICTORIANO SEVERO |Femenino|20|1 dan|52 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -55 kg|BERENICE PÉREZ CASTRO|Femenino|21|2 kyu|52 kg|152|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind90=[
  "PUEBLA|BUAP|Adulto femenil C. Libre -61kg|MARCELA GONZALEZ HERNANDEZ|Femenino|18|1 dan|60 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|HONBU DOJO|Adulto femenil C. Libre -61kg|MERILLELA ARREOLA FERREYRA|Femenino|31|1 dan|58 kg|168|KUMITE INDIVIDUAL|SHIJAN KOICHI CHODA",
  "PUEBLA|JAGUARES TERÁN |Adulto femenil C. Libre -61kg|Cindi Amairani Jimenez Cierra|Femenino|21|1 kyu|61 kg|164|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|KAZOKU FÉNIX |Adulto femenil C. Libre -61kg|Estefania Quecholac Guerrero|Femenino|25|1 dan|60 kg|160|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "TLAXCALA|KENSEIKAI TLAXCALA|Adulto femenil C. Libre -61kg|Catherin Guadalupe Rodriguez Carro|Femenino|20|1 kyu|58 kg|155|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto femenil C. Libre -61kg|Maria del Rosario Lovera Perez|Femenino|33|2 dan|61 kg|162|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -61kg|ANDREA VICTORIANO SEVERO|Femenino|24|1 dan|56 kg|155|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIHUAHUA|SANSEI JUKU|Adulto femenil C. Libre -61kg|JANICE MEDINA|Femenino|26|1 DAN|60 KG|162|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKumiteind91=[
  "ZACATECAS|IPPUUKAN|Adulto femenil C. Libre -68 kg|LEIDY RODRIGUEZ MARTINEZ|Femenino|23|1 dan|67 kg|158|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "ZACATECAS|IPPUUKAN|Adulto femenil C. Libre -68 kg|XIMENA ESTIBALIS BECERRA PALOS|Femenino|27|1 dan|65 kg|156|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "SONORA|REN SHI KAI OBREGÓN|Adulto femenil C. Libre -68 kg|Miranda Cabral Lopez|Femenino|18|1 dan|62 kg|163|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -68 kg|ANA ADELA CRUZ CERVANTES|Femenino|29|1 dan|64 kg|166|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA",
  "TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -68 kg|CECILIA CRUZ SANTEL |Femenino|27|1 dan|63 kg|159|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "PUEBLA|SEISHIN DOJO|Adulto femenil C. Libre -68 kg|NOHEMI GARCÍA MIXCA|Femenino|25|2 kyu|65 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIHUAHUA|SANSEI JUKU|Adulto femenil C. Libre -68 kg|CARMEN ARELI SOTO SAENZ|Femenino|27|1 dan|64. kg|157|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKumiteind92=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto femenil C. Libre +68 kg|GUADALUPE QUINTAL CATZIN|Femenino|22|1 dan|70 kg|171|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Adulto femenil C. Libre +68 kg|VERONICA LEODEGARIA AYALA MONROY|Femenino|21|1 dan|78 kg|163|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto femenil C. Libre +68 kg|ORTIZ GODINEZ ZAZIL ELIZABETH|Femenino|18|1 kyu|72|178|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",

];
var competidoresKumiteind93=[
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Braulio Bonifacio Urban |Masculino|19|10 kyu|81|170|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Carlos Eduardo Dominguez Vazquez|Masculino|19|10 kyu|59|165|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Jonathan Miranda Reyes |Masculino|19|10 kyu|64|163|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Jose Gerardo Franco Hernandez |Masculino|21|10 kyu|59|156|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "|PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Jose Luis Tepetzintan Teotichan |Masculino|19|10 kyu|56|170|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Blanca|Ladimir Francisco Bonilla|Masculino|21|10 kyu|51|163|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "PUEBLA|BUAP|Adulto varonil C. Blanca|CARLOS TELLEZ ACEVEDO|Masculino|26|10 kyu|78 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Blanca|LUIS OCTAVIO MATEOS ECHAZARRETA|Masculino|19|10 kyu|95 kg|177|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Blanca|Cesar Adriano Lugo Nitsch|Masculino|19|10 kyu|93 kg|172|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Blanca|Hans Joel Daza Castro|Masculino|19|10 kyu|84 kg|170|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Blanca|Jamin Vicente Israel Can Colli|Masculino|20|9 kyu|68 kg|160|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Blanca|Jonathan Gabriel Romero Martinez |Masculino|18|10 kyu|45 kg|155|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Blanca|Jose Manuel Gonzalez Rodriguez|Masculino|19|10 kyu|68 kg|167|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "OAXACA|DENSHO JUKU TONATIUH|Adulto varonil C. Blanca|Luis Esteban Gasga Flores|Masculino|18|10 kyu|NULL|NULL|KUMITE INDIVIDUAL|SENSEI TONATIUH LÓPEZ LUIS",
  "CHIHUAHUA|JIN JUKU	|Adulto varonil C. Blanca|Juan Manuel Pérez Ríos |Masculino|21|10 kyu|95 kg|185|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|MUSHIN JUKU|Adulto varonil C. Blanca|Esteban Arias Reyes|Masculino|22|10 kyu|75 kg|175|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Blanca|CARLOS ANDRES POOT TUN|Masculino|18|10 KYU|75 KG|165|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"
];
var competidoresKumiteind94=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Amarilla|EDUARDO CANCHE|Masculino|24|8 kyu|75 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Amarilla|LUIS JAVIER CANUL UC|Masculino|18|8 KYU|70 kg|167|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Amarilla|Edwin Ojeda Chulines |Masculino|23|9 kyu|74 kg|179|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Amarilla|Jose Luis Pech Gutierrez|Masculino|21|9 kyu|79 kg|163|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto varonil C. Amarilla|Misael Monge Varela|Masculino|20|9 kyu|67kg|184|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Amarilla|FRANCISCO DE JESUS HERNANDEZ FABIAN |Masculino|23|9 kyu|78 kg|174|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Amarilla|MIGUEL ANGEL SANTOS VALENCIA |Masculino|23|9 kyu|74 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Amarilla|RICARDO DEMANOS AMADOR |Masculino|20|9 kyu|64 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "CHIHUAHUA|JIN JUKU	|Adulto varonil C. Amarilla|Natan Anibal Ramirez Delgado|Masculino|26|8 kyu|80 kg|176|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "PUEBLA|KAZOKU FÉNIX |Adulto varonil C. Amarilla|Mariano Perez Aranda|Masculino|16|9 kyu|58 kg|170|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "CHIAPAS|SHU SEI KAN|Adulto varonil C. Amarilla|JUAN MANUEL HERNANDEZ GUZMAN|Masculino|18|9 kyu|75 kg|169|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind95=[
  "PUEBLA|MICHI ZACAPOAXTLA|Adulto varonil C. Verde/Morada|Alejandro Agustin Bello |Masculino|23|5 kyu|65|164|KUMITE INDIVIDUAL|SENSEI HUMBERTO TEJEDA HERNÁNDEZ",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Verde/Morada|ALAIN LOPEZ CHI|Masculino|19|5 kyu|100 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Verde/Morada|CARLOS MARTINEZ|Masculino|33|5 kyu|80 kg|180|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Verde/Morada|GILBERTO BERTOLINI|Masculino|18|5 kyu|65 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Adulto varonil C. Verde/Morada|CARLO MAGNO MUÑOZ PEREZ|Masculino|20|4 kyu|58 kg|155|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Verde/Morada|IVAN ROLDAN MORALES|Masculino|24|5 kyu|84 kg|184|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Verde/Morada|MARTIN ARRIAGA RENDON|Masculino|23|6 kyu|68 kg|165|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Verde/Morada|Abel Zaleta Alcocer |Masculino|21|7 kyu|102 kg |173|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Verde/Morada|Adalberto Hernandez Hernandez |Masculino|21|7 kyu|80 kg|175|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Verde/Morada|Jorge Antonio Avila Lopez |Masculino|21|7 kyu|78 kg|169|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Verde/Morada|Jose Alberto Alpuche Lopez|Masculino|21|7 kyu|96 kg|168|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CAMPECHE|CD DEL CARMEN |Adulto varonil C. Verde/Morada|Miguel José Ojeda Jerónimo|Masculino|18|6 kyu|70 kg|170|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto varonil C. Verde/Morada|Jose Alfredo Pasror Martinez |Masculino|20|4 kyu|58 kg|151|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto varonil C. Verde/Morada|Luis Eduardo Pastor Martinez|Masculino|15|9 kyu|48 kg|152|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|DENSHO JUKU GANBARU|Adulto varonil C. Verde/Morada|MIGUEL ANGEL MARTINEZ DIAZ|Masculino|24|7 kyu|72 kg|169|KUMITE INDIVIDUAL|SENSEI YAZMIN HUERTA MARTÍNEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Verde/Morada|ANGEL EDUARDO SALAS ZARATE |Masculino|19|6 kyu|62 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Verde/Morada|PABLO OBREGON AGUAYO|Masculino|20|9 kyu|63 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|JAGUARES TERÁN |Adulto varonil C. Verde/Morada|Adrián Báez Rodríguez|Masculino|17|4 kyu|63 kg|165|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Adulto varonil C. Verde/Morada|Luis Emmanuel Bernal García|Masculino|16|6 kyu|80 kg|180|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "CHIHUAHUA|JIN JUKU	|Adulto varonil C. Verde/Morada|ABEL GARCIA LOERA|Masculino|18|5 kyu|62|179|KUMITE INDIVIDUAL|SENSEI FRANCISCO CARBAJAL REYES SENSEI EVELIA MORA LOZAN",
  "TLAXCALA|KENSEIKAI TLAXCALA|Adulto varonil C. Verde/Morada|Cristian Morales  Rojas |Masculino|26|6 kyu|67 kg|165|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "PUEBLA|MUSHIN JUKU|Adulto varonil C. Verde/Morada|Roldan García Morales|Masculino|30|4 kyu|87 kg|180|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Verde/Morada|JUAN CARLOS VAZQUEZ SIMENTEL|MASCULINO|27|4 KYU|71 KG|174|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Verde/Morada|HERNANDEZ ESCOBAR SIMON DANIEL |Masculino|17|7 kyu|84.8|173|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Verde/Morada|HERNANDEZ RODRIGUEZ CARLOS ZAMUEL|Masculino|18|5 kyu|65 Kg|164|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "CHIAPAS|SHU SEI KAN|Adulto varonil C. Verde/Morada|JUAN PABLO PUON CORTEZ|Masculino|18|6 kyu|79 kg|170|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"
];
var competidoresKumiteind96=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -60 kg|ARMANDO FLORES|Masculino|16|1 kyu|60 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -60 kg|CAMILO BARRERA CACERERES|Masculino|21|1 kyu|60 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Adulto varonil C. Libre -60 kg|ANDRE VALERA PEREZ|Masculino|19|3 kyu|59 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Libre -60 kg|BRUNO CRUZ REYES|Masculino|20|3 kyu|54 kg|163|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Adulto varonil C. Libre -60 kg|Adrián Guadalupe Feria Méndez|Masculino|18|1 kyu|54 kg|159|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "TABASCO|C.E.K.A.T. |Adulto varonil C. Libre -60 kg|Isaac López León|Masculino|16|2 dan|59 kg|166|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Adulto varonil C. Libre -60 kg|Nathaniel Soto Camacho |Masculino|20|3 kyu|60 kg|166|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ",
  "PUEBLA|SEISHIN DOJO|Adulto varonil C. Libre -60 kg|LUIS ÁNGEL SOTO CUANAL|Masculino|22|2 kyu|60 kg|160|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES"

];
var competidoresKumiteind97=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -67 kg|ALAN MOTHELET|Masculino|20|1 dan|60 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -67 kg|DANIEL VARGAS FLORES|Masculino|28|1 dan|67 kg|177|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Adulto varonil C. Libre -67 kg|Manuel de Jesús Enríquez Sosa.|Masculino|17|3 kyu|63 kg|172|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "PUEBLA|BUAP|Adulto varonil C. Libre -67 kg|David Castillo Torres|Masculino|21|1 dan|67 kg|169|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Adulto varonil C. Libre -67 kg|Adrián Guadalupe Feria Méndez|Masculino|18|1 kyu|54 kg|159|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Libre -67 kg|ANGEL EDUARDO SALAS ZARATE |Masculino|19|6 kyu|62 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Libre -67 kg|PABLO OBREGON AGUAYO|Masculino|20|9 kyu|63 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|KAZOKU FÉNIX |Adulto varonil C. Libre -67 kg|Cristopher Quecholac Guerrero|Masculino|19|1 dan|65 kg|170|KUMITE INDIVIDUAL|SENSEI ESTEFANIA QUECHOLAC GUERRERO",
  "PUEBLA|MUSHIN JUKU|Adulto varonil C. Libre -67 kg|Aldo Jaime García Chavarría|Masculino|25|1 dan|67 kg|165|KUMITE INDIVIDUAL|SENSEI NICANOR TOCHIMANI TECAXCO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto varonil C. Libre -67 kg|Enriqure Moran Bernal|Masculino|26|1 dan|67 kg|166|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto varonil C. Libre -67 kg|Simon Miranda Jaramillo|Masculino|35|3 kyu|63 kg|165|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Libre -67 kg|DAVID ARTURO REYES PARRA|MASCULINO|37|2 DAN|65 KG|176|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Libre -67 kg|MARCO GUTIERREZ MARTINEZ|MASCULINO|21|1 KYU|67 KG|176|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Libre -67 kg|IORI SEM SANCHEZ AGUYO|MASCULINO|17|1 DAN|65 KG|163|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Libre -67 kg|HERNANDEZ RODRIGUEZ CARLOS ZAMUEL|Masculino|18|5 kyu|65 Kg|164|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Libre -67 kg|JAVIER ALBERTO RUBIO AGUILAR|Masculino|32|1 DAN|64 KG|175|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO",

];
var competidoresKumiteind98=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -75 kg|ANDRES QUINTAL|Masculino|23|1 dan|73 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -75 kg|GABRIEL VALDEZ|Masculino|20|1 dan|70 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Adulto varonil C. Libre -75 kg|Emanuel Rafael Muñoz Barradas|Masculino|16|1 dan|70 kg|175|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "PUEBLA|BUAP|Adulto varonil C. Libre -75 kg|CARLOS ANDRES RAMIREZ MARTINEZ|Masculino|23|3 kyu|73 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Libre -75 kg|EDUARDO TORRES CANTO|Masculino|21|1 dan|68 kg|175|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Libre -75 kg|ERICK SOLIS LEYVA |Masculino|23|1 kyu|72 kg|169|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Libre -75 kg|JORGE VALENZUELA RODRIGUEZ|Masculino|28|1 dan|68 kg|170|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "TABASCO|C.E.K.A.T. |Adulto varonil C. Libre -75 kg|Carlos Emmanuel Rodríguez Mazo |Masculino|17|1 dan|74 kg|180|KUMITE INDIVIDUAL|SENSEI AUSENCIO DE LA O DE LA CRUZ",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Libre -75 kg|JUAN DANIEL VAZQUEZ CAYETANO |Masculino|19|1 dan|70 kg|167|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "ZACATECAS|IPPUUKAN|Adulto varonil C. Libre -75 kg|OLAF RAMOS NIEVES|Masculino|20|1 dan|74 kg|152|KUMITE INDIVIDUAL|SENSEI IRMA PALOS",
  "PUEBLA|SEISHIN DOJO|Adulto varonil C. Libre -75 kg|MIGUEL ÁNGEL RAMÍREZ REYES|Masculino|22|3 kyu|75 kg|163|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIAPAS|SHU SEI KAN|Adulto varonil C. Libre -75 kg|JUAN MANUEL FONSECA CERVANTES|Masculino|35|1 kyu|72 kg|170|KUMITE INDIVIDUAL|SENSEI JOAQUÍN ALBERTO MARTÍNEZ GARCÍA"

];
var competidoresKumiteind99=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -84 kg|JULIO PERRERA|Masculino|23|1 kyu|78 kg|170|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Adulto varonil C. Libre -84 kg|RODRIGO PALMA BARAHONA|Masculino|24|1 dan|80 kg|172|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "VERACRUZ|ÁGUILAS DE FUEGO ENSHOO|Adulto varonil C. Libre -84 kg|Antonio de Jesús Muñoz Barradas.|Masculino|29|3 dan|79 kg|170|KUMITE INDIVIDUAL|SENSEI ANTONIO DE JESÚS MUÑOZ BARRADAS",
  "PUEBLA|BUAP|Adulto varonil C. Libre -84 kg|JORGE GUARNEROS REBOLLAR|Masculino|26|1 dan|78 kg|175|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|BUAP|Adulto varonil C. Libre -84 kg|PAUL JACOB BENÍTEZ ALEMÁN|Masculino|28|1 dan|79 kg|180|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA",
  "PUEBLA|DOJO DEL SUR-UVP|Adulto varonil C. Libre -84 kg|JOSE LUIS LOPEZ HUTZIL|Masculino|20|1 dan|82 kg|174|KUMITE INDIVIDUAL|&quot;SENSEI ALFONSO TORRES CAMPOS SENSEI ALFONSO TORRES VÉLEZ",
  "PUEBLA|JAGUARES TERÁN |Adulto varonil C. Libre -84 kg|Jorge Garcia Adauta|Masculino|19|1 dan|76 kg|163|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Adulto varonil C. Libre -84 kg|Julian Teran Diaz |Masculino|24|2 dan|83 kg|182|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "PUEBLA|JAGUARES TERÁN |Adulto varonil C. Libre -84 kg|Ramiro Javier Teran Diaz|Masculino|16|1 dan|83 kg|175|KUMITE INDIVIDUAL|SENSEI GABRIEL SUÁREZ LEÓN",
  "TLAXCALA|KENSEIKAI TLAXCALA|Adulto varonil C. Libre -84 kg|Marco Antonio Flores Tello|Masculino|41|3 kyu|80 kg|168|KUMITE INDIVIDUAL|SENSEI RICARDO EVERARDO MEDEL GUERRERO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto varonil C. Libre -84 kg|Jose Antonio  Lujan Mariano|Masculino|25|1 dan|85 kg|178|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "PUEBLA|SEISHIN DOJO|Adulto varonil C. Libre -84 kg|WILIADO ALAMILLA PERALTA|Masculino|29|1 dan|84 kg|175|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "QUINTANA ROO|SHITOKAI CANCÚN|Adulto varonil C. Libre -84 kg|MOO ACOSTA MANUEL ALDAHIR|Masculino|20|3 kyu|77.2|166|KUMITE INDIVIDUAL|SENSEIS CRISTINA-JOSÉ-JAVIER-DOMINGO"

];
var competidoresKumiteind100=[
  "VERACRUZ|DENSHO JUKU XALAPA |Adulto varonil C. Libre +84 kg|Jesús Capistrán Libreros|Masculino|29|5 kyu|85 kg|174|KUMITE INDIVIDUAL|SENSEI NORBERTO PACHECO GUEVARA",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto varonil C. Libre +84 kg|Francisco Adolfo Guadarrama Cruz|Masculino|27|2 dan|92 kg|186|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "ESTADO DE MÉXICO|NIPPON SHITO-KAI|Adulto varonil C. Libre +84 kg|Jonathan Macario Leyva Lara|Masculino|29|1 kyu|85 kg|172|KUMITE INDIVIDUAL|SENSEI HÉCTOR GARCÍA AVENDAÑO",
  "SONORA|REN SHI KAI OBREGÓN|Adulto varonil C. Libre +84 kg|Armando Cabral Lopez|Masculino|21|1 dan|92 kg|193|KUMITE INDIVIDUAL|SENSEI CLAUDIA BARRERAS HERNÁNDEZ",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Libre +84 kg|LUIS CHAVEZ BUSTILLOS|MASCULINO|19|2 KYU|85 KG|178|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA",
  "PUEBLA|SEISHIN DOJO|Adulto varonil C. Libre +84 kg|JONATHAN RUEDA CALDERÓN|Masculino|23|1 dan|88 kg|178|KUMITE INDIVIDUAL|&quot;SENSEI CRISTINA TETLALMATZI TORRES SENSEI ANA CRUZ CERVANTES",
  "CHIHUAHUA|SANSEI JUKU|Adulto varonil C. Libre +84 kg|ISRRAEL SOTO SALCIDO|MASCULINO|36|1 KYU|88 KG|180|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];
var competidoresKumiteind101=[
  "PUEBLA|BUAP|Master Femenil hasta C. Morada|MARICELA OCHOA ROSETE|Femenino|42|6 kyu|60 kg|154|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA"

];
var competidoresKumiteind102=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Master Femenil C. Libre|MARISOL DELGADO|Femenino|36|1 kyu|65 kg|167|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "PUEBLA|BUAP|Master Femenil C. Libre|Silvia Olivia Rojas García|Femenino|50|1 dan|78 kg|160|KUMITE INDIVIDUAL|SENSEI HUGO RAMÍREZ SENSEI ISRAEL FLORES SENSEI JOSÉ ANTONIO RODRÍGUEZ SENSEI OSBALDO SANTAMARÍA"

];
var competidoresKumiteind103=[
  "CAMPECHE|CD DEL CARMEN |Master Varonil hasta C. Morada|JUAN FRANCISCO OROZCO VAZQUEZ|Masculino|43|7 KYU|76 KG|163|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "PUEBLA|DENSHO JUKU AGUA SANTA|Master Varonil hasta C. Morada|Jose Roman Gamboa Cruz |Masculino|41|9 kyu|70 kg|156|KUMITE INDIVIDUAL|SENSEI JOSÉ LUIS EUSEBIO DOMÍNGUEZ JUÁREZ"

];
var competidoresKumiteind104=[
  "YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|ADOLFO G CANTON|Masculino|36|1 dan|70 kg|168|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|BRUNO VAZQUEZ |Masculino|50|1 dan|60 kg|150|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|JORGE PEREZ|Masculino|60|2 dan|80 kg|163|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "YUCATÁN|AGRUPACIÓN QUINTAL|Mastel Varonil C. Libre|NOE GARCIA|Masculino|40|1 dan|80 kg|165|KUMITE INDIVIDUAL|&quot;SENSEI ANDRÉS QUINTAL CASTILLO SENSEI EDEN MANUEL VALLE SALAS",
  "CAMPECHE|CD DEL CARMEN |Mastel Varonil C. Libre|Salvador Arrocha Hernandez|Masculino|45|3 dan|74 kg|165|KUMITE INDIVIDUAL|SENSEI VÍCTOR ORAMAS GUZMÁN",
  "CHIHUAHUA|SANSEI JUKU|Mastel Varonil C. Libre|Ayub Eduardo Montes Duran|Masculino|38|2do Dan|85.1|1.73|KUMITE INDIVIDUAL|SENSEI FRANCISCO RAMÍREZ FRANCIS SENSEI MIGUEL ÁNGEL ACOSTA SENSEI PEDRO PRIETO GARCÍA"

];



kataInd.click(graphKataInd);
kumiteInd.click(graphkumiteInd);
kataPar.click(graphKataPar);
kumiteEquipos.click(graphKumiteEquipos);
kataSelectivo.click(graphKataSelectivo);
kumiteSelectivo.click(graphKumiteSelectivo);
kataEquipo.click(graphKataEquipo);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function graphKataInd() {
  kumiteKata=0;
  var escribir=$(".escribir")
  var categoria= parseInt($(".categoria").val());
  console.log("categoria: ind "+categoria);
  switch (categoria) {
  case 1:
  numCompetidores=competidoresKataind1.length;
  console.log(numCompetidores);
  var equipos=[];
  for (var i = 0; i < numCompetidores; i++) {
    equipos.push( arrayToObject(competidoresKataind1[i]));
  }
  for (var i = 0; i < equipos.length; i++) {
    console.log("primera vez"+equipos[i].dojo);
  }
  var nuevo= ordenamiento(equipos);
  escribir.text("");
  for (var i = 0; i < nuevo.length; i++) {
    console.log("ordenados  "+nuevo[i].dojo);
    escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
    comp[i]=nuevo[i].nombre;
    //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
  }

  graficar(numCompetidores);
    break;
    case 2:
    numCompetidores=competidoresKataind2.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKataind2[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
      escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);

      break;
      case 3:
      numCompetidores=competidoresKataind3.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind3[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 4:
        numCompetidores=competidoresKataind4.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind4[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);
          break;
          case 5:
          numCompetidores=competidoresKataind5.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind5[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
        case 6:
        numCompetidores=competidoresKataind6.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind6[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);

          break;
          case 7:
          numCompetidores=competidoresKataind7.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind7[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
            case 8:
            numCompetidores=competidoresKataind8.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKataind8[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
                    escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
              graficar(numCompetidores);
              break;
              case 9:
              numCompetidores=competidoresKataind9.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKataind9[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
                graficar(numCompetidores);
                break;
                case 10:
                numCompetidores=competidoresKataind10.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKataind10[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }
                  graficar(numCompetidores);

                  break;
                  case 11:
                  numCompetidores=competidoresKataind11.length;
                  console.log(numCompetidores);
                  var equipos=[];
                  for (var i = 0; i < numCompetidores; i++) {
                    equipos.push( arrayToObject(competidoresKataind11[i]));
                  }
                  for (var i = 0; i < equipos.length; i++) {
                    console.log("primera vez"+equipos[i].dojo);
                  }
                  var nuevo= ordenamiento(equipos);
                  escribir.text("");
                  for (var i = 0; i < nuevo.length; i++) {
                    console.log("ordenados  "+nuevo[i].dojo);
                          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                    //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                  }
                    graficar(numCompetidores);
                    break;
  case 12:
  numCompetidores=competidoresKataind12.length;
  console.log(numCompetidores);
  var equipos=[];
  for (var i = 0; i < numCompetidores; i++) {
    equipos.push( arrayToObject(competidoresKataind12[i]));
  }
  for (var i = 0; i < equipos.length; i++) {
    console.log("primera vez"+equipos[i].dojo);
  }
  var nuevo= ordenamiento(equipos);
  escribir.text("");
  for (var i = 0; i < nuevo.length; i++) {
    console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
    //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
  }
    graficar(numCompetidores);
    break;
    case 13:
    numCompetidores=competidoresKataind13.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKataind13[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
      graficar(numCompetidores);
      break;
      case 14:
      numCompetidores=competidoresKataind14.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind14[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
        graficar(numCompetidores);
        break;
        case 15:
        numCompetidores=competidoresKataind15.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind15[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);
          break;
          case 16:
          numCompetidores=competidoresKataind16.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind16[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);

            break;
            case 17:
            numCompetidores=competidoresKataind17.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKataind17[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
                    escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
              graficar(numCompetidores);

              break;
              case 18:
              numCompetidores=competidoresKataind18.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKataind18[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
                graficar(numCompetidores);
                break;
                case 19:
                numCompetidores=competidoresKataind19.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKataind19[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }
                  graficar(numCompetidores);
                  break;
                  case 20:
                  numCompetidores=competidoresKataind20.length;
                  console.log(numCompetidores);
                  var equipos=[];
                  for (var i = 0; i < numCompetidores; i++) {
                    equipos.push( arrayToObject(competidoresKataind20[i]));
                  }
                  for (var i = 0; i < equipos.length; i++) {
                    console.log("primera vez"+equipos[i].dojo);
                  }
                  var nuevo= ordenamiento(equipos);
                  escribir.text("");
                  for (var i = 0; i < nuevo.length; i++) {
                    console.log("ordenados  "+nuevo[i].dojo);
                          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                    //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                  }
                    graficar(numCompetidores);
                    break;
                    case 21:
                    numCompetidores=competidoresKataind21.length;
                    console.log(numCompetidores);
                    var equipos=[];
                    for (var i = 0; i < numCompetidores; i++) {
                      equipos.push( arrayToObject(competidoresKataind21[i]));
                    }
                    for (var i = 0; i < equipos.length; i++) {
                      console.log("primera vez"+equipos[i].dojo);
                    }
                    var nuevo= ordenamiento(equipos);
                    escribir.text("");
                    for (var i = 0; i < nuevo.length; i++) {
                      console.log("ordenados  "+nuevo[i].dojo);
                            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                    }
                      graficar(numCompetidores);

                      break;
                      case 22:
                      numCompetidores=competidoresKataind22.length;
                      console.log(numCompetidores);
                      var equipos=[];
                      for (var i = 0; i < numCompetidores; i++) {
                        equipos.push( arrayToObject(competidoresKataind22[i]));
                      }
                      for (var i = 0; i < equipos.length; i++) {
                        console.log("primera vez"+equipos[i].dojo);
                      }
                      var nuevo= ordenamiento(equipos);
                      escribir.text("");
                      for (var i = 0; i < nuevo.length; i++) {
                        console.log("ordenados  "+nuevo[i].dojo);
                              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                      }
                        graficar(numCompetidores);

                        break;
                        case 23:
                        numCompetidores=competidoresKataind23.length;
                        console.log(numCompetidores);
                        var equipos=[];
                        for (var i = 0; i < numCompetidores; i++) {
                          equipos.push( arrayToObject(competidoresKataind23[i]));
                        }
                        for (var i = 0; i < equipos.length; i++) {
                          console.log("primera vez"+equipos[i].dojo);
                        }
                        var nuevo= ordenamiento(equipos);
                        escribir.text("");
                        for (var i = 0; i < nuevo.length; i++) {
                          console.log("ordenados  "+nuevo[i].dojo);
                                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                        }
                          graficar(numCompetidores);
                          break;
                          case 24:
                          numCompetidores=competidoresKataind24.length;
                          console.log(numCompetidores);
                          var equipos=[];
                          for (var i = 0; i < numCompetidores; i++) {
                            equipos.push( arrayToObject(competidoresKataind24[i]));
                          }
                          for (var i = 0; i < equipos.length; i++) {
                            console.log("primera vez"+equipos[i].dojo);
                          }
                          var nuevo= ordenamiento(equipos);
                          escribir.text("");
                          for (var i = 0; i < nuevo.length; i++) {
                            console.log("ordenados  "+nuevo[i].dojo);
                                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                          }
                            graficar(numCompetidores);

                            break;
                  case 25:
                  numCompetidores=competidoresKataind25.length;
                  console.log(numCompetidores);
                  var equipos=[];
                  for (var i = 0; i < numCompetidores; i++) {
                    equipos.push( arrayToObject(competidoresKataind25[i]));
                  }
                  for (var i = 0; i < equipos.length; i++) {
                    console.log("primera vez"+equipos[i].dojo);
                  }
                  var nuevo= ordenamiento(equipos);
                  escribir.text("");
                  for (var i = 0; i < nuevo.length; i++) {
                    console.log("ordenados  "+nuevo[i].dojo);
                          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                    //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                  }
                    graficar(numCompetidores);
                    break;
              case 26:
              numCompetidores=competidoresKataind26.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKataind26[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
                graficar(numCompetidores);
                break;
          case 27:
          numCompetidores=competidoresKataind27.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind27[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
        case 28:
        numCompetidores=competidoresKataind28.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind28[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);

          break;
          case 29:
          numCompetidores=competidoresKataind29.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind29[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
            case 30:
            numCompetidores=competidoresKataind30.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKataind30[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
                    escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
              graficar(numCompetidores);
              break;
              case 31:
              numCompetidores=competidoresKataind31.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKataind31[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
                graficar(numCompetidores);


                break;
                case 32:
                numCompetidores=competidoresKataind32.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKataind32[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }
                  graficar(numCompetidores);
                  break;
      case 33:
      numCompetidores=competidoresKataind33.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind33[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
        graficar(numCompetidores);


        break;
        case 34:
        numCompetidores=competidoresKataind34.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind34[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);

          break;
          case 35:
          numCompetidores=competidoresKataind35.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind35[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
      case 36:
      numCompetidores=competidoresKataind36.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind36[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
        graficar(numCompetidores);

        break;
        case 37:
        numCompetidores=competidoresKataind37.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind37[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);
          break;
    case 38:
    numCompetidores=competidoresKataind38.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKataind38[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
      graficar(numCompetidores);
      break;
      case 39:
      numCompetidores=competidoresKataind39.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind28[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
        graficar(numCompetidores);
        break;
        case 40:
        numCompetidores=competidoresKataind40.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind40[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);
          break;

          case 41:
          numCompetidores=competidoresKataind41.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind41[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);
            break;
        case 42:
        numCompetidores=competidoresKataind42.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind42[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);

          break;
          case 43:
          numCompetidores=competidoresKataind43.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKataind43[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
            graficar(numCompetidores);

            break;
            case 44:
            numCompetidores=competidoresKataind44.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKataind44[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
                    escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
              graficar(numCompetidores);
              break;
              case 45:
              numCompetidores=competidoresKataind45.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKataind45[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
                graficar(numCompetidores);
                break;
                case 46:
                numCompetidores=competidoresKataind46.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKataind46[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }
                  graficar(numCompetidores);

                  break;
      case 47:
      numCompetidores=competidoresKataind47.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKataind47[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
        graficar(numCompetidores);
        break;
        case 48:
        numCompetidores=competidoresKataind48.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKataind48[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
          graficar(numCompetidores);

          break;
    default:
  }

}

function arrayToObject(cadena) {
  var prop= cadena.split("|");
  //console.log(prop);
  var equipo= new Equipo(prop)
  return equipo;
}

function Equipo(prop) {
  if(kumiteKata==0)
  {this.id = prop[0];
  this.estado=prop[1];
  this.dojo=prop[2];
  this.categoria=prop[3];
  this.nombre=prop[4];
  this.sex=prop[5];
  this.edad=prop[6];
  this.grado=prop[7];
  this.peso=prop[8];
  this.estatura=prop[9];
  this.competencia=prop[10];
  this.maestro=prop[11];
  console.log("kumitekata=0");
}
else{  this.estado=prop[0];
  this.dojo=prop[1];
  this.categoria=prop[2];
  this.nombre=prop[3];
  this.sex=prop[4];
  this.edad=prop[5];
  this.grado=prop[6];
  this.peso=prop[7];
  this.estatura=prop[8];
  this.competencia=prop[9];
  this.maestro=prop[10];}

}

function graphkumiteInd() {
  kumiteKata=1;
  var escribir=$(".escribir")
  var categoria= parseInt($(".categoria").val());
  console.log("categoria: ind "+categoria);
  switch (categoria) {
    case 49:
    numCompetidores=competidoresKumiteind49.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind49[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);

      break;
      case 50:
      numCompetidores=competidoresKumiteind50.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind50[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 51:
        numCompetidores=competidoresKumiteind51.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind51[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
      case 52:
      numCompetidores=competidoresKumiteind52.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind52[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);

        break;
        case 53:
        numCompetidores=competidoresKumiteind53.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind53[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
          case 54:
          numCompetidores=competidoresKumiteind54.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind54[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
        case 55:
        numCompetidores=competidoresKumiteind55.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind55[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;

      case 56:
      numCompetidores=competidoresKumiteind56.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind56[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
    case 57:
    numCompetidores=competidoresKumiteind57.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind57[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);
      break;
      case 58:
      numCompetidores=competidoresKumiteind58.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind58[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 59:
        numCompetidores=competidoresKumiteind59.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind59[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);

          break;
    case 60:
    numCompetidores=competidoresKumiteind60.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind60[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);
      break;
      case 61:
      numCompetidores=competidoresKumiteind61.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind61[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
    case 62:
    numCompetidores=competidoresKumiteind62.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind62[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);
      break;
      case 63:
      numCompetidores=competidoresKumiteind64.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind64[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
        case 64:
        numCompetidores=competidoresKumiteind64.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind64[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
        case 65:
        numCompetidores=competidoresKumiteind65.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind65[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
          case 66:
          numCompetidores=competidoresKumiteind66.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind66[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
            case 67:
            numCompetidores=competidoresKumiteind67.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKumiteind67[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);

              break;
              case 68:
              numCompetidores=competidoresKumiteind68.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKumiteind68[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }

              graficar(numCompetidores);

                break;
      case 69:
      numCompetidores=competidoresKumiteind69.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind69[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);

        break;
        case 70:
        numCompetidores=competidoresKumiteind70.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind70[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 71:
          numCompetidores=competidoresKumiteind71.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind71[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
            case 72:
            numCompetidores=competidoresKumiteind72.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKumiteind72[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
            graficar(numCompetidores);
              break;
              case 73:
              numCompetidores=competidoresKumiteind73.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKumiteind73[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
              graficar(numCompetidores);
                break;
      case 74:
      numCompetidores=competidoresKumiteind74.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind74[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);

        break;
        case 75:
        numCompetidores=competidoresKumiteind75.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind75[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);

          break;
          case 76:
          numCompetidores=competidoresKumiteind76.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind76[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);

            break;
            case 77:
            numCompetidores=competidoresKumiteind77.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKumiteind77[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
            graficar(numCompetidores);
              break;
              case 78:
              numCompetidores=competidoresKumiteind78.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKumiteind78[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
              graficar(numCompetidores);
                break;
      case 79:
      numCompetidores=competidoresKumiteind79.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind79[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
    case 80:
    numCompetidores=competidoresKumiteind80.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind80[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
    case 81:
    numCompetidores=competidoresKumiteind81.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind81[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
      case 82:
      numCompetidores=competidoresKumiteind82.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind82[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
        case 83:
        numCompetidores=competidoresKumiteind83.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind83[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 84:
          numCompetidores=competidoresKumiteind84.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind84[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
      case 85:
      numCompetidores=competidoresKumiteind85.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind85[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
    case 86:
    numCompetidores=competidoresKumiteind86.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind86[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
      case 87:
      numCompetidores=competidoresKumiteind87.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind87[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
    case 88:
    numCompetidores=competidoresKumiteind88.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind88[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
    case 89:
    numCompetidores=competidoresKumiteind89.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind89[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);

      break;
    case 90:
    numCompetidores=competidoresKumiteind90.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteind90[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
      case 91:
      numCompetidores=competidoresKumiteind91.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteind91[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
        case 92:
        numCompetidores=competidoresKumiteind92.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind92[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 93:
          numCompetidores=competidoresKumiteind93.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind93[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
        case 94:
        numCompetidores=competidoresKumiteind94.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteind94[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 95:
          numCompetidores=competidoresKumiteind95.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteind95[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
            case 96:
            numCompetidores=competidoresKumiteind96.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKumiteind96[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
            graficar(numCompetidores);

              break;
              case 97:
              numCompetidores=competidoresKumiteind97.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKumiteind97[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
              graficar(numCompetidores);


                break;
                case 98:
                numCompetidores=competidoresKumiteind98.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKumiteind98[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  comp[i]=nuevo[i].nombre;
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }
                graficar(numCompetidores);
                  break;
                   case 99:
                   numCompetidores=competidoresKumiteind99.length;
                   console.log(numCompetidores);
                   var equipos=[];
                   for (var i = 0; i < numCompetidores; i++) {
                     equipos.push( arrayToObject(competidoresKumiteind99[i]));
                   }
                   for (var i = 0; i < equipos.length; i++) {
                     console.log("primera vez"+equipos[i].dojo);
                   }
                   var nuevo= ordenamiento(equipos);
                   escribir.text("");
                   for (var i = 0; i < nuevo.length; i++) {
                     console.log("ordenados  "+nuevo[i].dojo);
                     escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                     comp[i]=nuevo[i].nombre;
                     //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                   }
                   graficar(numCompetidores);
                     break;
                     case 100:
                     numCompetidores=competidoresKumiteind100.length;
                     console.log(numCompetidores);
                     var equipos=[];
                     for (var i = 0; i < numCompetidores; i++) {
                       equipos.push( arrayToObject(competidoresKumiteind100[i]));
                     }
                     for (var i = 0; i < equipos.length; i++) {
                       console.log("primera vez"+equipos[i].dojo);
                     }
                     var nuevo= ordenamiento(equipos);
                     escribir.text("");
                     for (var i = 0; i < nuevo.length; i++) {
                       console.log("ordenados  "+nuevo[i].dojo);
                       escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                       comp[i]=nuevo[i].nombre;
                       //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                     }
                     graficar(numCompetidores);

                       break;
                       case 101:
                       numCompetidores=competidoresKumiteind101.length;
                       console.log(numCompetidores);
                       var equipos=[];
                       for (var i = 0; i < numCompetidores; i++) {
                         equipos.push( arrayToObject(competidoresKumiteind101[i]));
                       }
                       for (var i = 0; i < equipos.length; i++) {
                         console.log("primera vez"+equipos[i].dojo);
                       }
                       var nuevo= ordenamiento(equipos);
                       escribir.text("");
                       for (var i = 0; i < nuevo.length; i++) {
                         console.log("ordenados  "+nuevo[i].dojo);
                         escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                         comp[i]=nuevo[i].nombre;
                         //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                       }
                       graficar(numCompetidores);
                         break;
                         case 102:
                         numCompetidores=competidoresKumiteind102.length;
                         console.log(numCompetidores);
                         var equipos=[];
                         for (var i = 0; i < numCompetidores; i++) {
                           equipos.push( arrayToObject(competidoresKumiteind102[i]));
                         }
                         for (var i = 0; i < equipos.length; i++) {
                           console.log("primera vez"+equipos[i].dojo);
                         }
                         var nuevo= ordenamiento(equipos);
                         escribir.text("");
                         for (var i = 0; i < nuevo.length; i++) {
                           console.log("ordenados  "+nuevo[i].dojo);
                           escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                           comp[i]=nuevo[i].nombre;
                           //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                         }
                         graficar(numCompetidores);
                           break;
                           case 103:
                           numCompetidores=competidoresKumiteind103.length;
                           console.log(numCompetidores);
                           var equipos=[];
                           for (var i = 0; i < numCompetidores; i++) {
                             equipos.push( arrayToObject(competidoresKumiteind103[i]));
                           }
                           for (var i = 0; i < equipos.length; i++) {
                             console.log("primera vez"+equipos[i].dojo);
                           }
                           var nuevo= ordenamiento(equipos);
                           escribir.text("");
                           for (var i = 0; i < nuevo.length; i++) {
                             console.log("ordenados  "+nuevo[i].dojo);
                             escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                             comp[i]=nuevo[i].nombre;
                             //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                           }
                           graficar(numCompetidores);
                             break;
                             case 104:
                             numCompetidores=competidoresKumiteind104.length;
                             console.log(numCompetidores);
                             var equipos=[];
                             for (var i = 0; i < numCompetidores; i++) {
                               equipos.push( arrayToObject(competidoresKumiteind104[i]));
                             }
                             for (var i = 0; i < equipos.length; i++) {
                               console.log("primera vez"+equipos[i].dojo);
                             }
                             var nuevo= ordenamiento(equipos);
                             escribir.text("");
                             for (var i = 0; i < nuevo.length; i++) {
                               console.log("ordenados  "+nuevo[i].dojo);
                               escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                               comp[i]=nuevo[i].nombre;
                               //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                             }
                             graficar(numCompetidores);
                               break;
    default:


  }

}

function graphKataPar() {
  var escribir=$(".escribir")
  var categoria= parseInt($(".categoria").val());
  console.log("categoria: ind "+categoria);
  switch (categoria) {
    case 105:
    numCompetidores=competidoresKatapar105.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKatapar105[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);
      break;
      case 106:
      numCompetidores=competidoresKatapar106.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKatapar106[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);

        break;
        case 107:
        numCompetidores=competidoresKatapar107.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKatapar107[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);

          break;
          case 108:
          numCompetidores=competidoresKatapar108.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar108[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);

            break;
            case 109:
            numCompetidores=competidoresKatapar109.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKatapar109[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);
              break;
              case 110:
              numCompetidores=competidoresKatapar110.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKatapar110[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }

              graficar(numCompetidores);
                break;
    case 111:
    numCompetidores=competidoresKatapar111.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKatapar111[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);

      break;
      case 112:
      numCompetidores=competidoresKatapar112.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKatapar112[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 113:
        numCompetidores=competidoresKatapar113.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKatapar113[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
          case 114:
          numCompetidores=competidoresKatapar114.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar114[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
    case 115:
    numCompetidores=competidoresKatapar115.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKatapar115[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);

      break;
      case 116:
      numCompetidores=competidoresKatapar116.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKatapar116[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 117:
        numCompetidores=competidoresKatapar117.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKatapar117[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 118:
          numCompetidores=competidoresKatapar118.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar118[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
            case 119:
            numCompetidores=competidoresKatapar119.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKatapar119[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);
              break;
              case 120:
              numCompetidores=competidoresKatapar120.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKatapar120[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }

              graficar(numCompetidores);
                break;
                case 121:
                numCompetidores=competidoresKatapar121.length;
                console.log(numCompetidores);
                var equipos=[];
                for (var i = 0; i < numCompetidores; i++) {
                  equipos.push( arrayToObject(competidoresKatapar121[i]));
                }
                for (var i = 0; i < equipos.length; i++) {
                  console.log("primera vez"+equipos[i].dojo);
                }
                var nuevo= ordenamiento(equipos);
                escribir.text("");
                for (var i = 0; i < nuevo.length; i++) {
                  console.log("ordenados  "+nuevo[i].dojo);
                  escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                  comp[i]=nuevo[i].nombre;
                  //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
                }

                graficar(numCompetidores);

                  break;
      case 122:
      numCompetidores=competidoresKatapar122.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKatapar122[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }

      graficar(numCompetidores);
        break;
        case 123:
        numCompetidores=competidoresKatapar123.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKatapar123[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
          case 124:
          numCompetidores=competidoresKatapar124.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar124[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
            case 125:
            numCompetidores=competidoresKatapar125.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKatapar125[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);
              break;
      case 126:
      numCompetidores=competidoresKatapar126.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKatapar126[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
        case 127:
        numCompetidores=competidoresKatapar127.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKatapar127[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }

        graficar(numCompetidores);
          break;
          case 128:
          numCompetidores=competidoresKatapar128.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar128[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
          case 129:
          numCompetidores=competidoresKatapar129.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar129[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
          case 130:
          numCompetidores=competidoresKatapar130.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar130[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
            case 131:
            numCompetidores=competidoresKatapar131.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKatapar131[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);
              break;
          case 132:
          numCompetidores=competidoresKatapar132.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKatapar132[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }

          graficar(numCompetidores);
            break;
            case 133:
            numCompetidores=competidoresKatapar133.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKatapar133[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }

            graficar(numCompetidores);
              break;
    case 134:
    numCompetidores=competidoresKatapar134.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKatapar134[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }

    graficar(numCompetidores);
      break;
    default:


  }
}

function graphKumiteEquipos() {
  var escribir=$(".escribir")
  var categoria= parseInt($(".categoria").val());
  console.log("categoria: ind "+categoria);
  switch (categoria) {
    case 135:
    numCompetidores=competidoresKumiteEqui135.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteEqui135[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
      case 136:
      numCompetidores=competidoresKumiteEqui136.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteEqui136[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);
        break;
        case 137:
        numCompetidores=competidoresKumiteEqui137.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteEqui137[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 138:
          numCompetidores=competidoresKumiteEqui138.length;
          console.log(numCompetidores);
          var equipos=[];
          for (var i = 0; i < numCompetidores; i++) {
            equipos.push( arrayToObject(competidoresKumiteEqui138[i]));
          }
          for (var i = 0; i < equipos.length; i++) {
            console.log("primera vez"+equipos[i].dojo);
          }
          var nuevo= ordenamiento(equipos);
          escribir.text("");
          for (var i = 0; i < nuevo.length; i++) {
            console.log("ordenados  "+nuevo[i].dojo);
            escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
            comp[i]=nuevo[i].nombre;
            //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
          }
          graficar(numCompetidores);
            break;
            case 139:
            numCompetidores=competidoresKumiteEqui139.length;
            console.log(numCompetidores);
            var equipos=[];
            for (var i = 0; i < numCompetidores; i++) {
              equipos.push( arrayToObject(competidoresKumiteEqui139[i]));
            }
            for (var i = 0; i < equipos.length; i++) {
              console.log("primera vez"+equipos[i].dojo);
            }
            var nuevo= ordenamiento(equipos);
            escribir.text("");
            for (var i = 0; i < nuevo.length; i++) {
              console.log("ordenados  "+nuevo[i].dojo);
              escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
              comp[i]=nuevo[i].nombre;
              //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
            }
            graficar(numCompetidores);
              break;
              case 140:
              numCompetidores=competidoresKumiteEqui140.length;
              console.log(numCompetidores);
              var equipos=[];
              for (var i = 0; i < numCompetidores; i++) {
                equipos.push( arrayToObject(competidoresKumiteEqui140[i]));
              }
              for (var i = 0; i < equipos.length; i++) {
                console.log("primera vez"+equipos[i].dojo);
              }
              var nuevo= ordenamiento(equipos);
              escribir.text("");
              for (var i = 0; i < nuevo.length; i++) {
                console.log("ordenados  "+nuevo[i].dojo);
                escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
                comp[i]=nuevo[i].nombre;
                //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
              }
              graficar(numCompetidores);
                break;
    case 141:
    numCompetidores=competidoresKumiteEqui141.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteEqui141[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
    case 142:
    numCompetidores=competidoresKumiteEqui142.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKumiteEqui142[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);

      break;
      case 143:
      numCompetidores=competidoresKumiteEqui143.length;
      console.log(numCompetidores);
      var equipos=[];
      for (var i = 0; i < numCompetidores; i++) {
        equipos.push( arrayToObject(competidoresKumiteEqui143[i]));
      }
      for (var i = 0; i < equipos.length; i++) {
        console.log("primera vez"+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      escribir.text("");
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados  "+nuevo[i].dojo);
        escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
        comp[i]=nuevo[i].nombre;
        //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
      }
      graficar(numCompetidores);

        break;
        case 144:
        numCompetidores=competidoresKumiteEqui144.length;
        console.log(numCompetidores);
        var equipos=[];
        for (var i = 0; i < numCompetidores; i++) {
          equipos.push( arrayToObject(competidoresKumiteEqui144[i]));
        }
        for (var i = 0; i < equipos.length; i++) {
          console.log("primera vez"+equipos[i].dojo);
        }
        var nuevo= ordenamiento(equipos);
        escribir.text("");
        for (var i = 0; i < nuevo.length; i++) {
          console.log("ordenados  "+nuevo[i].dojo);
          escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" estado "+ nuevo[i].estado+" estatura "+ nuevo[i].estatura+"<br>");
          comp[i]=nuevo[i].nombre;
          //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
        }
        graficar(numCompetidores);
          break;
          case 145:

            break;
    default:

  }
}

function graphKataSelectivo() {
  numCompetidores=getRandomInt(4,65);
  console.log("kataSelectivo");
  graficar(numCompetidores);
}

function graphKumiteSelectivo() {
  numCompetidores=getRandomInt(4,65);
  console.log("kumiteSelectivo");
  graficar(numCompetidores);
}

function graphKataEquipo() {
  var categoria=$(".categoria").val();

  switch (categoria) {
    case expression:
    numCompetidores=competidoresKataEquipo.length;
    console.log(numCompetidores);
    var equipos=[];
    for (var i = 0; i < numCompetidores; i++) {
      equipos.push( arrayToObject(competidoresKataEquipo[i]));
    }
    for (var i = 0; i < equipos.length; i++) {
      console.log("primera vez"+equipos[i].dojo);
    }
    var nuevo= ordenamiento(equipos);

    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados nombre "+nuevo[i].nombre+" dojo "+nuevo[i].dojo+" estado "+nuevo[i].estado);
      comp[i]=nuevo[i].nombre;
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
    graficar(numCompetidores);
      break;
    default:

  }
}

function saveFn(data, userData) {
  var json = JSON.stringify(data);
  $('#saveOutput').text('POST '+userData+' '+json)
  /* You probably want to do something like this
  jQuery.ajax("rest/"+userData, {contentType: 'application/json',
                                dataType: 'json',
                                type: 'post',
                                data: json})
  */
}


function ordenamiento(equipos) {
    var i=0;
    var length=equipos.length;
    console.log("longitud equipos "+length);
    var cont=0;
    var band=0;
    var azar;
    var aux=equipos.slice(0);
  //  console.log("auxiliar."+aux[i].dojo);
  //  console.log(aux[i+1].dojo);
    while(i<=length-1)
    { aux=equipos.slice(0);
      while (cont<length-1 && band!=1 ) {
        if(i==0){
          if(equipos[i].dojo!=equipos[1+i].dojo){
            band=1;
            //console.log("en equipos los dojos son distintos y band="+band);
          }
        }
        if(i>0 && i<length-1){
          if(equipos[i-1].dojo!=equipos[i].dojo && equipos[i+1].dojo!=equipos[i].dojo){
            band=1;
          }
        }
        if(i==length-1){
          if(equipos[i-1].dojo!=equipos[i].dojo){
            band=1;
          }
        }
        if(band==0)
        { //console.log("Entre al band==0 en segundo while");
          azar=getRandomInt(0,length);
          console.log("valor de azar:"+azar+"en i" +i);
          if(azar==i){
            band=1;
            console.log("azar igual a i");
          }
          if( (azar>0 && azar<length-1) && band!=1 ){
          //  console.log("enmedio ");
              var auxindaux=equipos[azar];
              var auxindequi=equipos[i];
              aux[i]=auxindaux;
              aux[azar]=auxindequi;
            if(aux[azar].dojo!=aux[azar-1].dojo && aux[azar+1].dojo!=aux[azar].dojo){
              band=1;

            }
            i++;
          }
          if(azar==0 && band!=1){
             auxindaux=equipos[azar];
            auxindequi=equipos[i];
            aux[i]=auxindaux;
          aux[azar]=auxindequi;
            if (aux[azar+1].dojo!=aux[azar].dojo) {
              band=1;

            }
            i++;
          }
          if(azar==length-1 && band!=1){
            auxindaux=equipos[azar];
            auxindequi=equipos[i];
            aux[i]=auxindaux;
          aux[azar]=auxindequi;
            if(aux[azar-1].dojo!=aux[azar].dojo){
              band=1;

            }
            i++;
          }
          if(band==0)
            cont++;
        }//if band==0
        //console.log("segundo while");
        //console.log("i en el primer while "+i);
        //console.log("con en el primer while "+cont);
      }//segundo while
      equipos=aux.slice(0);
      i++;
      band=0;
      cont=0;
    //  console.log("primer while");
    }//primer while
    for (var j = 0;j < equipos.length; j++) {
      //console.log("cambio"+equipos[j].dojo);
    }
    var nuevo=equipos.slice(0);
    //console.log("sali del while");
    return(nuevo);
}



function graficar(numCompetidores) {
  switch (numCompetidores) {
    case 4:
    $('.graficos').bracket({
   init: data4,
   save: saveFn, /* without save() labels are disabled */
   userData: "http://myapi"
             })
    break;
    case 5:
      $('.graficos').bracket({
        init: data5/* data to initialize the bracket with */ })
   break;
   case 6:
     $('.graficos').bracket({
       init: data6/* data to initialize the bracket with */ })
   break;
   case 7:
     $('.graficos').bracket({
       init: data7/* data to initialize the bracket with */ })
  break;
  case 8:
    $('.graficos').bracket({
      init: data8/* data to initialize the bracket with */ })
  break;
  case 9:
    $('.graficos').bracket({
      init: data9/* data to initialize the bracket with */ })
 break;
 case 10:
   $('.graficos').bracket({
     init: data10/* data to initialize the bracket with */ })
 break;
 case 11:
   $('.graficos').bracket({
     init: data11/* data to initialize the bracket with */ })
  break;
  case 12:
    $('.graficos').bracket({
      init: data12/* data to initialize the bracket with */ })
  break;
  case 13:
    $('.graficos').bracket({
      init: data13/* data to initialize the bracket with */ })
  break;
  case 14:
    $('.graficos').bracket({
      init: data14/* data to initialize the bracket with */ })
  break;
  case 15:
   $('.graficos').bracket({
     init: data15/* data to initialize the bracket with */ })
  break;
  case 16:
   $('.graficos').bracket({
     init: data16/* data to initialize the bracket with */ })
  break;
  case 17:
    $('.graficos').bracket({
      init: data17/* data to initialize the bracket with */ })
  break;
  case 18:
    $('.graficos').bracket({
      init: data18/* data to initialize the bracket with */ })
  break;
  case 19:
    $('.graficos').bracket({
      init: data19/* data to initialize the bracket with */ })
  break;
  case 20:
   $('.graficos').bracket({
     init: data20/* data to initialize the bracket with */ })
  break;
  case 21:
   $('.graficos').bracket({
     init: data21/* data to initialize the bracket with */ })
  break;
  case 22:
   $('.graficos').bracket({
     init: data22/* data to initialize the bracket with */ })
  break;
  case 23:
   $('.graficos').bracket({
     init: data23/* data to initialize the bracket with */ })
  break;
  case 24:
   $('.graficos').bracket({
     init: data24/* data to initialize the bracket with */ })
  break;
  case 25:
   $('.graficos').bracket({
     init: data25/* data to initialize the bracket with */ })
  break;
  case 26:
   $('.graficos').bracket({
     init: data26/* data to initialize the bracket with */ })
  break;
  case 27:
   $('.graficos').bracket({
     init: data27/* data to initialize the bracket with */ })
  break;
  case 28:
   $('.graficos').bracket({
     init: data28/* data to initialize the bracket with */ })
  break;
  case 29:
   $('.graficos').bracket({
     init: data29/* data to initialize the bracket with */ })
  break;
  case 30:
   $('.graficos').bracket({
     init: data30/* data to initialize the bracket with */ })
  break;
  case 31:
   $('.graficos').bracket({
     init: data31/* data to initialize the bracket with */ })
  break;
  case 32:
   $('.graficos').bracket({
     init: data32/* data to initialize the bracket with */ })
  break;
  case 33:
    $('.graficos').bracket({
      init: data33/* data to initialize the bracket with */ })
  break;
  case 34:
    $('.graficos').bracket({
      init: data34/* data to initialize the bracket with */ })
 break;
 case 35:
   $('.graficos').bracket({
     init: data35/* data to initialize the bracket with */ })
 break;
 case 36:
   $('.graficos').bracket({
     init: data36/* data to initialize the bracket with */ })
  break;
  case 37:
    $('.graficos').bracket({
      init: data37/* data to initialize the bracket with */ })
  break;
  case 38:
    $('.graficos').bracket({
      init: data38/* data to initialize the bracket with */ })
  break;
  case 39:
   $('.graficos').bracket({
     init: data39/* data to initialize the bracket with */ })
  break;
  case 40:
   $('.graficos').bracket({
     init: data40/* data to initialize the bracket with */ })
  break;
  case 41:
    $('.graficos').bracket({
      init: data41/* data to initialize the bracket with */ })
  break;
  case 42:
    $('.graficos').bracket({
      init: data42/* data to initialize the bracket with */ })
  break;
  case 43:
    $('.graficos').bracket({
      init: data43/* data to initialize the bracket with */ })
  break;
  case 44:
   $('.graficos').bracket({
     init: data44/* data to initialize the bracket with */ })
  break;
  case 45:
   $('.graficos').bracket({
     init: data45/* data to initialize the bracket with */ })
  break;
  case 46:
    $('.graficos').bracket({
      init: data46/* data to initialize the bracket with */ })
  break;
  case 47:
    $('.graficos').bracket({
      init: data47/* data to initialize the bracket with */ })
  break;
  case 48:
    $('.graficos').bracket({
      init: data48/* data to initialize the bracket with */ })
  break;
  case 49:
   $('.graficos').bracket({
     init: data49/* data to initialize the bracket with */ })
  break;
  case 50:
   $('.graficos').bracket({
     init: data50/* data to initialize the bracket with */ })
  break;
  case 51:
   $('.graficos').bracket({
     init: data51/* data to initialize the bracket with */ })
  break;
  case 52:
   $('.graficos').bracket({
     init: data52/* data to initialize the bracket with */ })
  break;
  case 53:
   $('.graficos').bracket({
     init: data53/* data to initialize the bracket with */ })
  break;
  case 53:
   $('.graficos').bracket({
     init: data53/* data to initialize the bracket with */ })
  break;
  case 54:
   $('.graficos').bracket({
     init: data54/* data to initialize the bracket with */ })
  break;
  case 55:
   $('.graficos').bracket({
     init: data55/* data to initialize the bracket with */ })
  break;
  case 56:
   $('.graficos').bracket({
     init: data56/* data to initialize the bracket with */ })
  break;
  case 57:
   $('.graficos').bracket({
     init: data57/* data to initialize the bracket with */ })
  break;
  case 58:
   $('.graficos').bracket({
     init: data58/* data to initialize the bracket with */ })
  break;
  case 59:
   $('.graficos').bracket({
     init: data59/* data to initialize the bracket with */ })
  break;
  case 60:
   $('.graficos').bracket({
     init: data60/* data to initialize the bracket with */ })
  break;
  case 61:
   $('.graficos').bracket({
     init: data61/* data to initialize the bracket with */ })
  break;
  case 62:
   $('.graficos').bracket({
     init: data62/* data to initialize the bracket with */ })
  break;
  case 63:
   $('.graficos').bracket({
     init: data63/* data to initialize the bracket with */ })
  break;
  case 64:
   $('.graficos').bracket({
     init: data64/* data to initialize the bracket with */ })
  break;
    default:
  }
}




});
