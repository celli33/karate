$(document).ready(function() {

var comp1,comp2,comp3,comp4,comp5,comp6,comp7,comp8,comp9,comp10,comp11,comp12,comp13,comp14,comp15,comp16,comp17,comp18,comp19,comp20,comp21,comp22,comp23,comp24,comp25,comp26,comp27,comp28,comp29,comp30,comp31,comp32,comp33,comp34,comp35,comp36,comp37,comp38,comp39,comp40,comp41,comp42,comp43,comp44,comp45,comp46,comp47,comp48,comp49,comp50,comp51,comp52,comp53,comp54,comp55,comp56,comp57,comp58,comp59,comp60,comp61,comp62,comp63,commp64;

var team4={ m:["Team 1","Team 2"], m2:["Team 3","Team 4"] }

function setPropertyTeam(equipo) {
  for (var i = 0; i < Object.keys(team4).length; i++) {
    array[i]
  }
}

console.log(team4.m);
  var data4= {
      teams : [
        team4.m, /* first matchup */
        team4.m2
      /* second matchup */
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
  numCompetidores=4;//getRandomInt(4,65);
  console.log("kataInd");
  graficar(numCompetidores);
}

function graphkumiteInd() {
  numCompetidores=getRandomInt(4,65);
  console.log("kumiteInd");
  graficar(numCompetidores);
}

function graphKataPar() {
  numCompetidores=getRandomInt(4,65);
  console.log("kataPar");
  graficar(numCompetidores);
}

function graphKumiteEquipos() {
  numCompetidores=getRandomInt(4,65);
  console.log("kumiteEquipos");
  graficar(numCompetidores);
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
  numCompetidores=getRandomInt(4,65);
  console.log("kataEquipo");
  graficar(numCompetidores);
}



function graficar(numCompetidores) {
  switch (numCompetidores) {
    case 4:
      $('.graficos').bracket({
        init: data4/* data to initialize the bracket with */ })
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
