$(document).ready(function() {
  //console.log("cargado");

  var numCompetidores;
  var botonConsultas=$(".btn.sortearI");
  var botonConsultasEquipos=$(".btn.sortearE");
  var botonDatos=$("a.btn.mostrar-datos");
  console.log(botonDatos);
  var competidores;
  bandMostrar=0;
  botonConsultas.click(obtenerDatosSorteo);
  botonConsultasEquipos.click(obtenerDatosSorteoEquipos);
  botonDatos.click(ocultarMostrar)

  function ocultarMostrar() {
    $('.btn.sortearI').focus()
    console.log(botonDatos);
    if(bandMostrar==0)
    {  $("form.form-inline").css("display","none");
       $("div.form-group").css("display","none");
      bandMostrar=1;
      botonDatos.html("Mostrar Datos de Competidores");
    }
    else {
      $("form.form-inline").css("display","block");
       $("div.form-group").css("display","block");
      bandMostrar=0;
      botonDatos.html("Ocultar Datos de Competidores");
    }

  }

    function obtenerDatosSorteoEquipos() {
      var equipos=[];
      numCompetidores=$(".numeroCompetidores");
      numCompetidores=Math.round(numCompetidores.val());
      //numCompetidores=5;
      competidores=new Array(numCompetidores);
      for (var i = 0; i < competidores.length; i++) {
        competidores[i]=new Array(3);
      }

      for (var i = 0; i<numCompetidores; i++) {
          competidores[i][0]= $(".nombreE"+i).val();
          competidores[i][1]=$(".dojoE"+i).val();
          equipos.push( arrayToObjectEquipo(competidores[i][0],competidores[i][1] ) );
          console.log(competidores[i][0]+competidores[i][1]);
      }

      for (var i = 0; i < equipos.length; i++) {
        console.log("entran "+equipos[i].dojo);
      }
      var nuevo= ordenamiento(equipos);
      for (var i = 0; i < nuevo.length; i++) {
        console.log("ordenados"+nuevo[i].dojo);
      }
      $(".graficos").css("display","block");
      graficar(nuevo);
      if(nuevo.length<=8){
        console.log($(".graficos"));
        $(".graficos").css("height","400px");
      }
      if(nuevo.length<=16  && nuevo.length>8 ){
        console.log($(".graficos"));
        $(".graficos").css("height","600px");
      }
      if (nuevo.length<=32  && nuevo.length>16 ) {
        $(".graficos").css("height","1000px");
      }
      if (nuevo.length<=64  && nuevo.length>32 ) {
        $(".graficos").css("height","2000px");
      }

  }

  function obtenerDatosSorteo() {
    console.log("datos sorteo");
    $('a.btn.sortearI').focus()
    var equipos=[];
    numCompetidores=$(".numeroCompetidores");
    numCompetidores=Math.round(numCompetidores.val());
    $(".numeroCompetidores").html(numCompetidores-1);
    //numCompetidores=5;
    competidores=new Array(numCompetidores);
    for (var i = 0; i < competidores.length; i++) {
      competidores[i]=new Array(3);
    }

    for (var i = 0; i<numCompetidores; i++) {
        competidores[i][0]= $(".nombre"+i).val();
        competidores[i][1]=$(".dojo"+i).val();
        competidores[i][2]=$(".edad"+i).val();
        competidores[i][3]=$(".estatura"+i).val();
        equipos.push( arrayToObject(competidores[i][0],competidores[i][1],competidores[i][2],competidores[i][3]) );
        console.log(competidores[i][0]+competidores[i][1]+competidores[i][2]+" "+competidores[i][3]);
    }

    for (var i = 0; i < equipos.length; i++) {
      console.log("entran "+equipos[i].dojo);
    }

    var auxOrdenamiento=true;
    var contadorOrdenamiento=0;
    var nuevo;
    while (auxOrdenamiento==false || contadorOrdenamiento<40) {
      auxOrdenamiento=true;
      nuevo= ordenamiento(equipos);
      for (var i = 0; i < nuevo.length-1; i++) {
          if(nuevo[i].dojo==nuevo[i+1].dojo ){
            console.log("iguales as "+nuevo[i].dojo+" "+nuevo[i+1].dojo);
            auxOrdenamiento=false;
            break;
          }
          console.log("hola");
      }
      contadorOrdenamiento++;
    }
    console.log("ordenamientoband"+auxOrdenamiento);
    for (var i = 0; i < nuevo.length; i++) {
      console.log("ordenados"+nuevo[i].dojo);
    }
    graficar(nuevo);
    $(".graficos").css("display","block");
    if(nuevo.length<=8){
      console.log($(".graficos"));
      $(".graficos").css("height","400px");
    }
    if(nuevo.length<=16  && nuevo.length>8 ){
      console.log($(".graficos"));
      $(".graficos").css("height","600px");
    }
    if (nuevo.length<=32 && nuevo.length>16 ) {
      $(".graficos").css("height","1000px");
    }
    if (nuevo.length<=64 && nuevo.length>32 ) {
      $(".graficos").css("height","2000px");
    }

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function arrayToObject(p1,p2,p3,p4) {
  //console.log(prop);
  var equipo= new Persona(p1,p2,p3,p4)
  return equipo;
}

function arrayToObjectEquipo(p1, p2) {
  //console.log(prop);
  var equipo= new Equipo(p1,p2)
  return equipo;
}

function Equipo(p1,p2) {
  this.nombre=p1;
  this.dojo=p2;
}

function Persona(p1,p2,p3,p4) {
  this.nombre=p1;
  this.dojo=p2;
  this.edad=p3;
  this.estatura=p4;
}

function ordenamiento(equipos) {
      var nuevo = equipos.sort(function() {return Math.random()-0.5});
    return(nuevo);
}

function graficar(nuevo){
  var control=nuevo.length;
  console.log("control asd"+ control);
  switch (control) {
    case 4:
    console.log(competidores[1][0]);
     var matches={m1: [ nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo ], m2:[ nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo ] }

     var data4={
       teams: [matches.m1, matches.m2],
       results:[]
     }
      break;
      case 5:
      var data5= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo], /* first matchup */
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo,null] /* first matchup */

          /* second matchup */
         ],
          results : [
            [[1,null], [1,null],[null,null], [1,null]]       /* first round */
              /* second round */
          ]
        }
        break;
        case 6:
        var data6= {
            teams : [
              [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
              [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
              [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
              [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null]
            /* second matchup */
            ],
           results : [
              [[1,null],[null,null],[null,null],[1,null]]
            ]
          }

          break;
          case 7:
          var data7= {
              teams : [
                [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
                [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
                [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
                [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo]
              /* second matchup */
              ],
             results : [
                [[1,null],[null,null],[null,null],[null,null]]
              ]
            }

            break;
            case 8:
            var data8= {
                teams : [
                  [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
                  [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
                  [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
                  [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo]
                /* second matchup */
                ],
               results : [
                  [[null,null],[null,null],[null,null],[null,null]]
                ]
              }
              break;
              case 9:
              var data9= {
                  teams : [
                    [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
                    [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
                    [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
                    [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
                    [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
                    [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
                    [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
                    [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],

                  /* second matchup */
                  ],
                 results : [
                    [[1,null],[1,null],[1,null],[1,null],[null,null],[1,null],[1,null],[1,null]]
                  ]
                }
                break;
                case 10:
                console.log("en 10");
                var data10= {
                    teams : [
                      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
                      [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
                      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
                      [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
                      [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
                      [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
                      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
                      [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],

                    /* second matchup */
                    ],
                   results : [
                      [[1,null],[1,null],[1,null],[null,null],[null,null],[1,null],[1,null],[1,null]]
                    ]
                  }
                  break;
    case 11:

            var data11= {
                teams : [
                  [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
                  [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
                  [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
                  [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
                  [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
                  [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
                  [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
                  [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],

                /* second matchup */
                ],
               results : [
                  [[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[1,null],[1,null]]
                ]
              }

      break;
      case 12:
      var data12= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
          [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],

        /* second matchup */
        ],
       results : [
          [[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null]]
        ]
      }

        break;
        case 13:
        var data13= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],

          /* second matchup */
          ],
         results : [
            [[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null]]
          ]
        }

          break;
          case 14:
          var data14= {
            teams : [
              [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
              [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
              [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
              [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
              [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
              [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
              [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo],
              [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null]

            /* second matchup */
            ],
           results : [
              [[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null]]
            ]
          }

            break;
            case 15:
            var data15= {
              teams : [
                [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
                [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
                [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
                [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
                [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
                [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
                [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo],
                [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo]

              /* second matchup */
              ],
             results : [
                [[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
              ]
            }

              break;
        case 16:
        var data16= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo]

          /* second matchup */
          ],
         results : [
            [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
          ]
        }
          break;
    case 17:
    var data17= {
      teams : [
        [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
        [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
        [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
        [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
        [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
        [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
        [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
        [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
        [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo], /* first matchup */
        [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
        [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
        [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
        [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
        [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
        [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
        [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[null,null],[1,null],[1,null],[1,null],
        [null,null], [1,null],[1,null],[1,null],[1,null]]
      ]
    }

      break;
    case 18:

        var data18= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
            [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
            [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo], /* first matchup */
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
            [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],

          /* second matchup */
          ],
         results : [
            [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],
            [null,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
          ]
        }

      break;
      case 19:
      var data19= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
          [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
          [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
          [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
          [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo], /* first matchup */
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],

        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],
          [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
        ]
      }

        break;
        case 20:
        var data20= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
            [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
            [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo], /* first matchup */
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
            [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
            [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],

          /* second matchup */
          ],
         results : [
            [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],
            [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
          ]
        }

          break;
    case 21:
    var data21= {
      teams : [
        [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
        [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
        [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
        [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
        [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
        [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
        [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
        [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
        [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo], /* first matchup */
        [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
        [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
        [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
        [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
        [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
        [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
        [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],
        [null,null], [null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }

      break;
  case 22:
  var data22= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
      [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
      [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
      [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
      [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
      [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
      [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo], /* first matchup */
      [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo],
      [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
      [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
      [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
      [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],

    /* second matchup */
    ],
   results : [
      [ [1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],
      [null,null], [null,null],[null,null],[1,null],[1,null],[1,null],[1,null], [1,null]]
    ]
  }
    break;
  case 23:
  var data23= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
      [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
      [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
      [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
      [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
      [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
      [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo], /* first matchup */
      [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo],
      [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
      [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, nuevo[18].nombre+"<br/>"+nuevo[18].dojo],
      [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
      [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],

    /* second matchup */
    ],
   results : [
      [ [1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],
      [null,null], [null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null]]
    ]
  }
    break;
    case 24:
    var data24= {
      teams : [
        [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
        [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
        [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
        [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
        [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
        [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
        [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
        [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
        [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo], /* first matchup */
        [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
        [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
        [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
        [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
        [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
        [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
        [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],

      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],
        [null,null], [null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null]]
      ]
    }
      break;
      case 25:
      var data25= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
          [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
          [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo], /* first matchup */
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],

        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],
          [null,null], [null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null]]
        ]
      }
        break;
        case 26:
        var data26= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
            [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
            [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo], /* first matchup */
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, nuevo[18].nombre+"<br/>"+nuevo[18].dojo],/* first matchup */
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, nuevo[20].nombre+"<br/>"+nuevo[20].dojo],
            [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, nuevo[22].nombre+"<br/>"+nuevo[22].dojo],
            [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
            [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
            [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null]
          /* second matchup */
          ],
         results : [
            [ [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],
            [null,null], [null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null]]
          ]
        }
          break;
  case 27:
  var data27= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
      [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
      [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
      [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
      [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
      [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
      [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo], /* first matchup */
      [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo],
      [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
      [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, nuevo[18].nombre+"<br/>"+nuevo[18].dojo],/* first matchup */
      [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, nuevo[20].nombre+"<br/>"+nuevo[20].dojo],
      [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, nuevo[22].nombre+"<br/>"+nuevo[22].dojo],
      [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, nuevo[24].nombre+"<br/>"+nuevo[24].dojo],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null]
    /* second matchup */
    ],
   results : [
      [ [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],
      [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null]]
    ]
  }
    break;
    case 28:
    var data28= {
      teams : [
        [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
        [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
        [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
        [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
        [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
        [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
        [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
        [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo], /* first matchup */
        [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
        [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
        [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, nuevo[19].nombre+"<br/>"+nuevo[19].dojo],/* first matchup */
        [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
        [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
        [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
        [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
        [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null]
      /* second matchup */
      ],
     results : [
        [ [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
        [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null]]
      ]
    }
      break;
      case 29:
      var data29= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
          [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, null],
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo], /* first matchup */
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, nuevo[19].nombre+"<br/>"+nuevo[19].dojo],/* first matchup */
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null]
        /* second matchup */
        ],
       results : [
          [ [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
          [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [1,null]]
        ]
      }

        break;
        case 30:
        var data30= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
            [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
            [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
            [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo],
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo], /* first matchup */
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, nuevo[18].nombre+"<br/>"+nuevo[18].dojo],
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, nuevo[20].nombre+"<br/>"+nuevo[20].dojo],/* first matchup */
            [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, nuevo[22].nombre+"<br/>"+nuevo[22].dojo],
            [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, nuevo[24].nombre+"<br/>"+nuevo[24].dojo],
            [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, nuevo[26].nombre+"<br/>"+nuevo[26].dojo],
            [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, nuevo[28].nombre+"<br/>"+nuevo[28].dojo],
            [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null]
          /* second matchup */
          ],
         results : [
            [   [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
            [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [1,null]]
          ]
        }
          break;
          case 31:
          var data31= {
            teams : [
              [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, null], /* first matchup */
              [nuevo[1].nombre+"<br/>"+nuevo[1].dojo, nuevo[2].nombre+"<br/>"+nuevo[2].dojo],
              [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, nuevo[4].nombre+"<br/>"+nuevo[4].dojo],
              [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, nuevo[6].nombre+"<br/>"+nuevo[6].dojo],
              [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, nuevo[8].nombre+"<br/>"+nuevo[8].dojo],
              [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, nuevo[10].nombre+"<br/>"+nuevo[10].dojo],
              [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, nuevo[12].nombre+"<br/>"+nuevo[12].dojo],
              [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, nuevo[14].nombre+"<br/>"+nuevo[14].dojo], /* first matchup */
              [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, nuevo[16].nombre+"<br/>"+nuevo[16].dojo],
              [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, nuevo[18].nombre+"<br/>"+nuevo[18].dojo],
              [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, nuevo[20].nombre+"<br/>"+nuevo[20].dojo],/* first matchup */
              [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, nuevo[22].nombre+"<br/>"+nuevo[22].dojo],
              [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, nuevo[24].nombre+"<br/>"+nuevo[24].dojo],
              [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, nuevo[26].nombre+"<br/>"+nuevo[26].dojo],
              [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, nuevo[28].nombre+"<br/>"+nuevo[28].dojo],
              [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, nuevo[30].nombre+"<br/>"+nuevo[30].dojo]
            /* second matchup */
            ],
           results : [
              [   [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],
              [null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [null,null]]
            ]
          }
            break;
    case 32:
    var data32= {
      teams : [
        [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
        [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
        [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
        [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
        [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
        [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
        [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
        [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
        [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo], /* first matchup */
        [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
        [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
        [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
        [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
        [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
        [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, nuevo[29].nombre+"<br/>"+nuevo[29].dojo],
        [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, nuevo[31].nombre+"<br/>"+nuevo[31].dojo]

      /* second matchup */
      ],
     results : [
        [[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]
      ]
    }
      break;
      case 33:
      var data33= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
          [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
          [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
          [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null]

        /* second matchup */
        ],
       results : [
          [ [null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null] ]
        ]
      }
      break;
      case 34:
      var data34= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, null],
          [nuevo[3].nombre+"<br/>"+nuevo[3].dojo, null],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
          [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
          [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null] ]
        ]
      }
      break;
      case 35:
      var data35= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
          [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
          [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null] ]
        ]
      }
  break;
  case 36:
        var data36= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, null],
            [nuevo[5].nombre+"<br/>"+nuevo[5].dojo, null],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
            [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
            [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
            [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
            [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
            [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
            [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
            [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
            [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
            [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
            [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
            [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
            [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
            [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
            [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
            [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
            [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo]

          /* second matchup */
          ],
         results : [
            [ [null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null] ]
          ]
        }
  break;
  case 37:
        var data37= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
            [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
            [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
            [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
            [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
            [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
            [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
            [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
            [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
            [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
            [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
            [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
            [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
            [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
            [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
            [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
            [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
            [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo]

          /* second matchup */
          ],
         results : [
            [ [null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null] ]
          ]
        }
  break;
  case 38:
        var data38= {
          teams : [
            [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
            [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
            [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
            [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, null],
            [nuevo[7].nombre+"<br/>"+nuevo[7].dojo, null],
            [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
            [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
            [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
            [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
            [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
            [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
            [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
            [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
            [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
            [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
            [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
            [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
            [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
            [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
            [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
            [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
            [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
            [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
            [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
            [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
            [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
            [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
            [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
            [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
            [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
            [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
            [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo]

          /* second matchup */
          ],
         results : [
            [ [null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null] ]
          ]
        }
  break;
  case 39:
      var data39= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 40:
      var data40= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, null],
          [nuevo[9].nombre+"<br/>"+nuevo[9].dojo, null],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 41:
      var data41= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 42:
      var data42= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo, null],
          [nuevo[11].nombre+"<br/>"+nuevo[11].dojo, null],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
          [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
      break;
      case 43:
      var data43= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
          [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 44:
      var data44= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, null],
          [nuevo[13].nombre+"<br/>"+nuevo[13].dojo, null],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
          [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
          [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo]

        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 45:
      var data45= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
          [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
          [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 46:
      var data46= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, null],
          [nuevo[15].nombre+"<br/>"+nuevo[15].dojo, null],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
          [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
          [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
          [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 47:

      var data47= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
          [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
          [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
          [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 48:
      var data48= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, null],
          [nuevo[17].nombre+"<br/>"+nuevo[17].dojo, null],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
          [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
          [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
          [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
          [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 49:
      var data49= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
          [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
          [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
          [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
          [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 50:
      var data50= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo, null],
          [nuevo[19].nombre+"<br/>"+nuevo[19].dojo, null],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
          [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
          [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
          [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
          [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
          [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
          [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
          [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
          [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 51:
      var data51= {
        teams : [
          [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
          [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
          [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
          [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
          [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
          [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
          [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
          [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
          [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
          [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
          [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
          [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
          [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
          [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
          [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
          [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
          [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
          [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
          [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
          [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
          [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
          [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
          [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
          [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
          [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
          [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
          [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
          [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
          [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
          [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
          [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
          [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo]
        /* second matchup */
        ],
       results : [
          [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
        ]
      }
  break;
  case 52:
  var data52= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo, null],
      [nuevo[21].nombre+"<br/>"+nuevo[21].dojo, null],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
      [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 53:
  var data53= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
      [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 54:
  var data54= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, null],
      [nuevo[23].nombre+"<br/>"+nuevo[23].dojo, null],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 55:
  var data55= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo],
      [nuevo[53].nombre+"<br/>"+nuevo[53].dojo, nuevo[54].nombre+"<br/>"+nuevo[54].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 56:
  var data56= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, null],
      [nuevo[25].nombre+"<br/>"+nuevo[25].dojo, null],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo],
      [nuevo[54].nombre+"<br/>"+nuevo[54].dojo, nuevo[55].nombre+"<br/>"+nuevo[55].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 57:
  var data57= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo],
      [nuevo[53].nombre+"<br/>"+nuevo[53].dojo, nuevo[54].nombre+"<br/>"+nuevo[54].dojo],
      [nuevo[55].nombre+"<br/>"+nuevo[55].dojo, nuevo[56].nombre+"<br/>"+nuevo[56].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 58:
  var data58= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, null],
      [nuevo[27].nombre+"<br/>"+nuevo[27].dojo, null],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo],
      [nuevo[54].nombre+"<br/>"+nuevo[54].dojo, nuevo[55].nombre+"<br/>"+nuevo[55].dojo],
      [nuevo[56].nombre+"<br/>"+nuevo[56].dojo, nuevo[57].nombre+"<br/>"+nuevo[57].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null],[1,null], [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 59:
  var data59= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo],
      [nuevo[53].nombre+"<br/>"+nuevo[53].dojo, nuevo[54].nombre+"<br/>"+nuevo[54].dojo],
      [nuevo[55].nombre+"<br/>"+nuevo[55].dojo, nuevo[56].nombre+"<br/>"+nuevo[56].dojo],
      [nuevo[57].nombre+"<br/>"+nuevo[57].dojo, nuevo[58].nombre+"<br/>"+nuevo[58].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null],[1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 60:

  var data60= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, null],
      [nuevo[29].nombre+"<br/>"+nuevo[29].dojo, null],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo],
      [nuevo[54].nombre+"<br/>"+nuevo[54].dojo, nuevo[55].nombre+"<br/>"+nuevo[55].dojo],
      [nuevo[56].nombre+"<br/>"+nuevo[56].dojo, nuevo[57].nombre+"<br/>"+nuevo[57].dojo],
      [nuevo[58].nombre+"<br/>"+nuevo[58].dojo, nuevo[59].nombre+"<br/>"+nuevo[59].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null],[1,null], [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 61:
  var data61= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, nuevo[29].nombre+"<br/>"+nuevo[29].dojo],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo],
      [nuevo[53].nombre+"<br/>"+nuevo[53].dojo, nuevo[54].nombre+"<br/>"+nuevo[54].dojo],
      [nuevo[55].nombre+"<br/>"+nuevo[55].dojo, nuevo[56].nombre+"<br/>"+nuevo[56].dojo],
      [nuevo[57].nombre+"<br/>"+nuevo[57].dojo, nuevo[58].nombre+"<br/>"+nuevo[58].dojo],
      [nuevo[59].nombre+"<br/>"+nuevo[59].dojo, nuevo[60].nombre+"<br/>"+nuevo[60].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null],[1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 62:
  var data62= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, nuevo[29].nombre+"<br/>"+nuevo[29].dojo],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, null],
      [nuevo[31].nombre+"<br/>"+nuevo[31].dojo, null],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo],
      [nuevo[54].nombre+"<br/>"+nuevo[54].dojo, nuevo[55].nombre+"<br/>"+nuevo[55].dojo],
      [nuevo[56].nombre+"<br/>"+nuevo[56].dojo, nuevo[57].nombre+"<br/>"+nuevo[57].dojo],
      [nuevo[58].nombre+"<br/>"+nuevo[58].dojo, nuevo[59].nombre+"<br/>"+nuevo[59].dojo],
      [nuevo[60].nombre+"<br/>"+nuevo[60].dojo, nuevo[61].nombre+"<br/>"+nuevo[61].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [1,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 63:
  var data63= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, nuevo[29].nombre+"<br/>"+nuevo[29].dojo],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, nuevo[31].nombre+"<br/>"+nuevo[31].dojo],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, null],
      [nuevo[33].nombre+"<br/>"+nuevo[33].dojo, nuevo[34].nombre+"<br/>"+nuevo[34].dojo],
      [nuevo[35].nombre+"<br/>"+nuevo[35].dojo, nuevo[36].nombre+"<br/>"+nuevo[36].dojo],
      [nuevo[37].nombre+"<br/>"+nuevo[37].dojo, nuevo[38].nombre+"<br/>"+nuevo[38].dojo],
      [nuevo[39].nombre+"<br/>"+nuevo[39].dojo, nuevo[40].nombre+"<br/>"+nuevo[40].dojo],
      [nuevo[41].nombre+"<br/>"+nuevo[41].dojo, nuevo[42].nombre+"<br/>"+nuevo[42].dojo],
      [nuevo[43].nombre+"<br/>"+nuevo[43].dojo, nuevo[44].nombre+"<br/>"+nuevo[44].dojo],
      [nuevo[45].nombre+"<br/>"+nuevo[45].dojo, nuevo[46].nombre+"<br/>"+nuevo[46].dojo],
      [nuevo[47].nombre+"<br/>"+nuevo[47].dojo, nuevo[48].nombre+"<br/>"+nuevo[48].dojo],
      [nuevo[49].nombre+"<br/>"+nuevo[49].dojo, nuevo[50].nombre+"<br/>"+nuevo[50].dojo],
      [nuevo[51].nombre+"<br/>"+nuevo[51].dojo, nuevo[52].nombre+"<br/>"+nuevo[52].dojo],
      [nuevo[53].nombre+"<br/>"+nuevo[53].dojo, nuevo[54].nombre+"<br/>"+nuevo[54].dojo],
      [nuevo[55].nombre+"<br/>"+nuevo[55].dojo, nuevo[56].nombre+"<br/>"+nuevo[56].dojo],
      [nuevo[57].nombre+"<br/>"+nuevo[57].dojo, nuevo[58].nombre+"<br/>"+nuevo[58].dojo],
      [nuevo[59].nombre+"<br/>"+nuevo[59].dojo, nuevo[60].nombre+"<br/>"+nuevo[60].dojo],
      [nuevo[61].nombre+"<br/>"+nuevo[61].dojo, nuevo[62].nombre+"<br/>"+nuevo[62].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[1,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
  case 64:
  var data64= {
    teams : [
      [nuevo[0].nombre+"<br/>"+nuevo[0].dojo, nuevo[1].nombre+"<br/>"+nuevo[1].dojo], /* first matchup */
      [nuevo[2].nombre+"<br/>"+nuevo[2].dojo, nuevo[3].nombre+"<br/>"+nuevo[3].dojo],
      [nuevo[4].nombre+"<br/>"+nuevo[4].dojo, nuevo[5].nombre+"<br/>"+nuevo[5].dojo],
      [nuevo[6].nombre+"<br/>"+nuevo[6].dojo, nuevo[7].nombre+"<br/>"+nuevo[7].dojo],
      [nuevo[8].nombre+"<br/>"+nuevo[8].dojo, nuevo[9].nombre+"<br/>"+nuevo[9].dojo],
      [nuevo[10].nombre+"<br/>"+nuevo[10].dojo,nuevo[11].nombre+"<br/>"+nuevo[11].dojo],
      [nuevo[12].nombre+"<br/>"+nuevo[12].dojo, nuevo[13].nombre+"<br/>"+nuevo[13].dojo],
      [nuevo[14].nombre+"<br/>"+nuevo[14].dojo, nuevo[15].nombre+"<br/>"+nuevo[15].dojo],
      [nuevo[16].nombre+"<br/>"+nuevo[16].dojo, nuevo[17].nombre+"<br/>"+nuevo[17].dojo],
      [nuevo[18].nombre+"<br/>"+nuevo[18].dojo,nuevo[19].nombre+"<br/>"+nuevo[19].dojo],
      [nuevo[20].nombre+"<br/>"+nuevo[20].dojo,nuevo[21].nombre+"<br/>"+nuevo[21].dojo],
      [nuevo[22].nombre+"<br/>"+nuevo[22].dojo, nuevo[23].nombre+"<br/>"+nuevo[23].dojo],
      [nuevo[24].nombre+"<br/>"+nuevo[24].dojo, nuevo[25].nombre+"<br/>"+nuevo[25].dojo],
      [nuevo[26].nombre+"<br/>"+nuevo[26].dojo, nuevo[27].nombre+"<br/>"+nuevo[27].dojo],
      [nuevo[28].nombre+"<br/>"+nuevo[28].dojo, nuevo[29].nombre+"<br/>"+nuevo[29].dojo],
      [nuevo[30].nombre+"<br/>"+nuevo[30].dojo, nuevo[31].nombre+"<br/>"+nuevo[31].dojo],
      [nuevo[32].nombre+"<br/>"+nuevo[32].dojo, nuevo[33].nombre+"<br/>"+nuevo[33].dojo],
      [nuevo[34].nombre+"<br/>"+nuevo[34].dojo, nuevo[35].nombre+"<br/>"+nuevo[35].dojo],
      [nuevo[36].nombre+"<br/>"+nuevo[36].dojo, nuevo[37].nombre+"<br/>"+nuevo[37].dojo],
      [nuevo[38].nombre+"<br/>"+nuevo[38].dojo, nuevo[39].nombre+"<br/>"+nuevo[39].dojo],
      [nuevo[40].nombre+"<br/>"+nuevo[40].dojo, nuevo[41].nombre+"<br/>"+nuevo[41].dojo],
      [nuevo[42].nombre+"<br/>"+nuevo[42].dojo, nuevo[43].nombre+"<br/>"+nuevo[43].dojo],
      [nuevo[44].nombre+"<br/>"+nuevo[44].dojo, nuevo[45].nombre+"<br/>"+nuevo[45].dojo],
      [nuevo[46].nombre+"<br/>"+nuevo[46].dojo, nuevo[47].nombre+"<br/>"+nuevo[47].dojo],
      [nuevo[48].nombre+"<br/>"+nuevo[48].dojo, nuevo[49].nombre+"<br/>"+nuevo[49].dojo],
      [nuevo[50].nombre+"<br/>"+nuevo[50].dojo, nuevo[51].nombre+"<br/>"+nuevo[51].dojo],
      [nuevo[52].nombre+"<br/>"+nuevo[52].dojo, nuevo[53].nombre+"<br/>"+nuevo[53].dojo],
      [nuevo[54].nombre+"<br/>"+nuevo[54].dojo, nuevo[55].nombre+"<br/>"+nuevo[55].dojo],
      [nuevo[56].nombre+"<br/>"+nuevo[56].dojo, nuevo[57].nombre+"<br/>"+nuevo[57].dojo],
      [nuevo[58].nombre+"<br/>"+nuevo[58].dojo, nuevo[59].nombre+"<br/>"+nuevo[59].dojo],
      [nuevo[60].nombre+"<br/>"+nuevo[60].dojo, nuevo[61].nombre+"<br/>"+nuevo[61].dojo],
      [nuevo[62].nombre+"<br/>"+nuevo[62].dojo, nuevo[63].nombre+"<br/>"+nuevo[63].dojo]
    /* second matchup */
    ],
   results : [
      [ [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null], [null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null],[null,null] ]
    ]
  }
  break;
      default:

    }//switch
    var resizeParameters = {
    teamWidth: 200,
    scoreWidth: 20,
    matchMargin: 10,
    roundMargin: 50,
    init: eval("data"+nuevo.length)
    };
    $('.demo').bracket({
      init: eval("data"+nuevo.length)/* data to initialize the bracket with */ })
    function updateResizeDemo() {
      $('#grafica-sorteo .demo').bracket(resizeParameters);
    }
    $(updateResizeDemo);
  var escribir=$(".escribir");
    escribir.text("");
    for (var i = 0; i < nuevo.length; i++) {
      //console.log("ordenados  "+nuevo[i].dojo);
      escribir.append((i+1)+":dojo "+nuevo[i].dojo+" nombre " + nuevo[i].nombre +" edad "+ nuevo[i].edad+" estatura "+nuevo[i].estatura+"<br>");
      //team4.m=[nuevo[i].nombre, nuevo[i+1].nombre];
    }
  }//fin graficar






});
