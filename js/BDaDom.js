$(document).ready(function() {
  //console.log("cargado");

  var numCompetidores;
  var botonConsultas=$(".boton.sortearI");
  var botonConsultasEquipos=$(".boton.sortearE");
  var botonDatos=$("a.boton.mostrar-datos");
  //console.log(botonConsultas);
  var competidores;
  bandMostrar=0;
  botonConsultas.click(obtenerDatosSorteo);
  botonConsultasEquipos.click(obtenerDatosSorteoEquipos);
  botonDatos.click(ocultarMostrar)

  function ocultarMostrar() {
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
    var nuevo= ordenamiento(equipos);
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
      //while (cont<length-1 && band!=1 ) {
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
        //  console.log("valor de azar:"+azar+"en i" +i);
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
        console.log("i en el primer while "+i);
        //console.log("con en el primer while "+cont);
      //}//segundo while
      i++;
      equipos=aux.slice(0);
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

function graficar(nuevo){
  var control=nuevo.length;
  console.log("control"+control);
  switch (control) {
    case 4:
    console.log(competidores[1][0]);
     var matches={m1: [ nuevo[0].nombre, nuevo[1].nombre ], m2:[ nuevo[2].nombre, nuevo[3].nombre ] }

     var data4={
       teams: [matches.m1, matches.m2],
       results:[]
     }
      break;
      case 5:
      var data5= {
          teams : [
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, null],
            [nuevo[2].nombre, nuevo[3].nombre], /* first matchup */
            [nuevo[4].nombre,null] /* first matchup */

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
              [nuevo[0].nombre, null], /* first matchup */
              [nuevo[1].nombre, nuevo[2].nombre],
              [nuevo[3].nombre, nuevo[4].nombre],
              [nuevo[5].nombre, null]
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
                [nuevo[0].nombre, null], /* first matchup */
                [nuevo[1].nombre, nuevo[2].nombre],
                [nuevo[3].nombre, nuevo[4].nombre],
                [nuevo[5].nombre, nuevo[6].nombre]
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
                  [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
                  [nuevo[2].nombre, nuevo[3].nombre],
                  [nuevo[4].nombre, nuevo[5].nombre],
                  [nuevo[6].nombre, nuevo[7].nombre]
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
                    [nuevo[0].nombre, null], /* first matchup */
                    [nuevo[1].nombre, null],
                    [nuevo[2].nombre, null],
                    [nuevo[3].nombre, null],
                    [nuevo[4].nombre, nuevo[5].nombre],
                    [nuevo[6].nombre, null],
                    [nuevo[7].nombre, null],
                    [nuevo[8].nombre, null],

                  /* second matchup */
                  ],
                 results : [
                    [[1,null],[1,null],[1,null],[1,null],[null,null],[1,null],[1,null],[1,null]]
                  ]
                }
                break;
                case 10:
                var data10= {
                    teams : [
                      [nuevo[0].nombre, null], /* first matchup */
                      [nuevo[1].nombre, null],
                      [nuevo[2].nombre, null],
                      [nuevo[3].nombre, nuevo[4].nombre],
                      [nuevo[5].nombre, nuevo[6].nombre],
                      [nuevo[7].nombre, null],
                      [nuevo[8].nombre, null],
                      [nuevo[9].nombre, null],

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
                  [nuevo[0].nombre, null], /* first matchup */
                  [nuevo[1].nombre, null],
                  [nuevo[2].nombre, null],
                  [nuevo[3].nombre, nuevo[4].nombre],
                  [nuevo[5].nombre, nuevo[6].nombre],
                  [nuevo[7].nombre, nuevo[8].nombre],
                  [nuevo[9].nombre, null],
                  [nuevo[10].nombre, null],

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
          [nuevo[0].nombre, null], /* first matchup */
          [nuevo[1].nombre, null],
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],

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
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, null],
            [nuevo[2].nombre, nuevo[3].nombre],
            [nuevo[4].nombre, nuevo[5].nombre],
            [nuevo[6].nombre, nuevo[7].nombre],
            [nuevo[8].nombre, nuevo[9].nombre],
            [nuevo[10].nombre, nuevo[11].nombre],
            [nuevo[12].nombre, null],

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
              [nuevo[0].nombre, null], /* first matchup */
              [nuevo[1].nombre, nuevo[2].nombre],
              [nuevo[3].nombre, nuevo[4].nombre],
              [nuevo[5].nombre, nuevo[6].nombre],
              [nuevo[7].nombre, nuevo[8].nombre],
              [nuevo[9].nombre, nuevo[10].nombre],
              [nuevo[11].nombre, nuevo[12].nombre],
              [nuevo[13].nombre, null]

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
                [nuevo[0].nombre, null], /* first matchup */
                [nuevo[1].nombre, nuevo[2].nombre],
                [nuevo[3].nombre, nuevo[4].nombre],
                [nuevo[5].nombre, nuevo[6].nombre],
                [nuevo[7].nombre, nuevo[8].nombre],
                [nuevo[9].nombre, nuevo[10].nombre],
                [nuevo[11].nombre, nuevo[12].nombre],
                [nuevo[13].nombre, nuevo[14].nombre]

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
            [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
            [nuevo[2].nombre, nuevo[3].nombre],
            [nuevo[4].nombre, nuevo[5].nombre],
            [nuevo[6].nombre, nuevo[7].nombre],
            [nuevo[8].nombre, nuevo[9].nombre],
            [nuevo[10].nombre, nuevo[11].nombre],
            [nuevo[12].nombre, nuevo[13].nombre],
            [nuevo[14].nombre, nuevo[15].nombre]

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
        [nuevo[0].nombre, null], /* first matchup */
        [nuevo[1].nombre, null],
        [nuevo[2].nombre, null],
        [nuevo[3].nombre, null],
        [nuevo[4].nombre, null],
        [nuevo[5].nombre, null],
        [nuevo[6].nombre, null],
        [nuevo[7].nombre, null],
        [nuevo[8].nombre, nuevo[9].nombre], /* first matchup */
        [nuevo[10].nombre, null],
        [nuevo[11].nombre, null],
        [nuevo[12].nombre, null],
        [nuevo[13].nombre, null],
        [nuevo[14].nombre, null],
        [nuevo[15].nombre, null],
        [nuevo[16].nombre, null],

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
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, null],
            [nuevo[2].nombre, null],
            [nuevo[3].nombre, null],
            [nuevo[4].nombre, null],
            [nuevo[5].nombre, null],
            [nuevo[6].nombre, null],
            [nuevo[7].nombre, nuevo[8].nombre],
            [nuevo[9].nombre, nuevo[10].nombre], /* first matchup */
            [nuevo[11].nombre, null],
            [nuevo[12].nombre, null],
            [nuevo[13].nombre, null],
            [nuevo[14].nombre, null],
            [nuevo[15].nombre, null],
            [nuevo[16].nombre, null],
            [nuevo[17].nombre, null],

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
          [nuevo[0].nombre, null], /* first matchup */
          [nuevo[1].nombre, null],
          [nuevo[2].nombre, null],
          [nuevo[3].nombre, null],
          [nuevo[4].nombre, null],
          [nuevo[5].nombre, null],
          [nuevo[6].nombre, null],
          [nuevo[7].nombre, nuevo[8].nombre],
          [nuevo[9].nombre, nuevo[10].nombre], /* first matchup */
          [nuevo[11].nombre, nuevo[12].nombre],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],

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
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, null],
            [nuevo[2].nombre, null],
            [nuevo[3].nombre, null],
            [nuevo[4].nombre, null],
            [nuevo[5].nombre, null],
            [nuevo[6].nombre, nuevo[7].nombre],
            [nuevo[8].nombre, nuevo[9].nombre],
            [nuevo[10].nombre, nuevo[11].nombre], /* first matchup */
            [nuevo[12].nombre, nuevo[13].nombre],
            [nuevo[14].nombre, null],
            [nuevo[15].nombre, null],
            [nuevo[16].nombre, null],
            [nuevo[17].nombre, null],
            [nuevo[18].nombre, null],
            [nuevo[19].nombre, null],

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
        [nuevo[0].nombre, null], /* first matchup */
        [nuevo[1].nombre, null],
        [nuevo[2].nombre, null],
        [nuevo[3].nombre, null],
        [nuevo[4].nombre, null],
        [nuevo[5].nombre, null],
        [nuevo[6].nombre, nuevo[7].nombre],
        [nuevo[8].nombre, nuevo[9].nombre],
        [nuevo[10].nombre, nuevo[11].nombre], /* first matchup */
        [nuevo[12].nombre, nuevo[13].nombre],
        [nuevo[14].nombre, nuevo[15].nombre],
        [nuevo[16].nombre, null],
        [nuevo[17].nombre, null],
        [nuevo[18].nombre, null],
        [nuevo[19].nombre, null],
        [nuevo[20].nombre, null],

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
      [nuevo[0].nombre, null], /* first matchup */
      [nuevo[1].nombre, null],
      [nuevo[2].nombre, null],
      [nuevo[3].nombre, null],
      [nuevo[4].nombre, null],
      [nuevo[5].nombre, nuevo[6].nombre],
      [nuevo[7].nombre, nuevo[8].nombre],
      [nuevo[9].nombre, nuevo[10].nombre],
      [nuevo[11].nombre, nuevo[12].nombre], /* first matchup */
      [nuevo[13].nombre, nuevo[14].nombre],
      [nuevo[15].nombre, nuevo[16].nombre],
      [nuevo[17].nombre, null],
      [nuevo[18].nombre, null],
      [nuevo[19].nombre, null],
      [nuevo[20].nombre, null],
      [nuevo[21].nombre, null],

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
      [nuevo[0].nombre, null], /* first matchup */
      [nuevo[1].nombre, null],
      [nuevo[2].nombre, null],
      [nuevo[3].nombre, null],
      [nuevo[4].nombre, null],
      [nuevo[5].nombre, nuevo[6].nombre],
      [nuevo[7].nombre, nuevo[8].nombre],
      [nuevo[9].nombre, nuevo[10].nombre],
      [nuevo[11].nombre, nuevo[12].nombre], /* first matchup */
      [nuevo[13].nombre, nuevo[14].nombre],
      [nuevo[15].nombre, nuevo[16].nombre],
      [nuevo[17].nombre, nuevo[18].nombre],
      [nuevo[19].nombre, null],
      [nuevo[20].nombre, null],
      [nuevo[21].nombre, null],
      [nuevo[22].nombre, null],

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
        [nuevo[0].nombre, null], /* first matchup */
        [nuevo[1].nombre, null],
        [nuevo[2].nombre, null],
        [nuevo[3].nombre, null],
        [nuevo[4].nombre, nuevo[5].nombre],
        [nuevo[6].nombre, nuevo[7].nombre],
        [nuevo[8].nombre, nuevo[9].nombre],
        [nuevo[10].nombre, nuevo[11].nombre],
        [nuevo[12].nombre, nuevo[13].nombre], /* first matchup */
        [nuevo[14].nombre, nuevo[15].nombre],
        [nuevo[16].nombre, nuevo[17].nombre],
        [nuevo[18].nombre, nuevo[19].nombre],
        [nuevo[20].nombre, null],
        [nuevo[21].nombre, null],
        [nuevo[22].nombre, null],
        [nuevo[23].nombre, null],

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
          [nuevo[0].nombre, null], /* first matchup */
          [nuevo[1].nombre, null],
          [nuevo[2].nombre, null],
          [nuevo[3].nombre, null],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre, nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre], /* first matchup */
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, nuevo[17].nombre],
          [nuevo[18].nombre, nuevo[19].nombre],
          [nuevo[20].nombre, nuevo[21].nombre],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],

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
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, null],
            [nuevo[2].nombre, null],
            [nuevo[3].nombre, nuevo[4].nombre],
            [nuevo[5].nombre, nuevo[6].nombre],
            [nuevo[7].nombre, nuevo[8].nombre],
            [nuevo[9].nombre, nuevo[10].nombre],
            [nuevo[11].nombre, nuevo[12].nombre], /* first matchup */
            [nuevo[13].nombre, nuevo[14].nombre],
            [nuevo[15].nombre, nuevo[16].nombre],
            [nuevo[17].nombre, nuevo[18].nombre],/* first matchup */
            [nuevo[19].nombre, nuevo[20].nombre],
            [nuevo[21].nombre, nuevo[22].nombre],
            [nuevo[23].nombre, null],
            [nuevo[24].nombre, null],
            [nuevo[25].nombre, null]
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
      [nuevo[0].nombre, null], /* first matchup */
      [nuevo[1].nombre, null],
      [nuevo[2].nombre, null],
      [nuevo[3].nombre, nuevo[4].nombre],
      [nuevo[5].nombre, nuevo[6].nombre],
      [nuevo[7].nombre, nuevo[8].nombre],
      [nuevo[9].nombre, nuevo[10].nombre],
      [nuevo[11].nombre, nuevo[12].nombre], /* first matchup */
      [nuevo[13].nombre, nuevo[14].nombre],
      [nuevo[15].nombre, nuevo[16].nombre],
      [nuevo[17].nombre, nuevo[18].nombre],/* first matchup */
      [nuevo[19].nombre, nuevo[20].nombre],
      [nuevo[21].nombre, nuevo[22].nombre],
      [nuevo[23].nombre, nuevo[24].nombre],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null]
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
        [nuevo[0].nombre, null], /* first matchup */
        [nuevo[1].nombre, null],
        [nuevo[2].nombre, nuevo[3].nombre],
        [nuevo[4].nombre, nuevo[5].nombre],
        [nuevo[6].nombre, nuevo[7].nombre],
        [nuevo[8].nombre, nuevo[9].nombre],
        [nuevo[10].nombre, nuevo[11].nombre],
        [nuevo[12].nombre, nuevo[13].nombre], /* first matchup */
        [nuevo[14].nombre, nuevo[15].nombre],
        [nuevo[16].nombre, nuevo[17].nombre],
        [nuevo[18].nombre, nuevo[19].nombre],/* first matchup */
        [nuevo[20].nombre, nuevo[21].nombre],
        [nuevo[22].nombre, nuevo[23].nombre],
        [nuevo[24].nombre, nuevo[25].nombre],
        [nuevo[26].nombre, null],
        [nuevo[27].nombre, null]
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
          [nuevo[0].nombre, null], /* first matchup */
          [nuevo[1].nombre, null],
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre, nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre], /* first matchup */
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, nuevo[17].nombre],
          [nuevo[18].nombre, nuevo[19].nombre],/* first matchup */
          [nuevo[20].nombre, nuevo[21].nombre],
          [nuevo[22].nombre, nuevo[23].nombre],
          [nuevo[24].nombre, nuevo[25].nombre],
          [nuevo[26].nombre, nuevo[27].nombre],
          [nuevo[28].nombre, null]
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
            [nuevo[0].nombre, null], /* first matchup */
            [nuevo[1].nombre, nuevo[2].nombre],
            [nuevo[3].nombre, nuevo[4].nombre],
            [nuevo[5].nombre, nuevo[6].nombre],
            [nuevo[7].nombre, nuevo[8].nombre],
            [nuevo[9].nombre, nuevo[10].nombre],
            [nuevo[11].nombre, nuevo[12].nombre],
            [nuevo[13].nombre, nuevo[14].nombre], /* first matchup */
            [nuevo[15].nombre, nuevo[16].nombre],
            [nuevo[17].nombre, nuevo[18].nombre],
            [nuevo[19].nombre, nuevo[20].nombre],/* first matchup */
            [nuevo[21].nombre, nuevo[22].nombre],
            [nuevo[23].nombre, nuevo[24].nombre],
            [nuevo[25].nombre, nuevo[26].nombre],
            [nuevo[27].nombre, nuevo[28].nombre],
            [nuevo[29].nombre, null]
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
              [nuevo[0].nombre, null], /* first matchup */
              [nuevo[1].nombre, nuevo[2].nombre],
              [nuevo[3].nombre, nuevo[4].nombre],
              [nuevo[5].nombre, nuevo[6].nombre],
              [nuevo[7].nombre, nuevo[8].nombre],
              [nuevo[9].nombre, nuevo[10].nombre],
              [nuevo[11].nombre, nuevo[12].nombre],
              [nuevo[13].nombre, nuevo[14].nombre], /* first matchup */
              [nuevo[15].nombre, nuevo[16].nombre],
              [nuevo[17].nombre, nuevo[18].nombre],
              [nuevo[19].nombre, nuevo[20].nombre],/* first matchup */
              [nuevo[21].nombre, nuevo[22].nombre],
              [nuevo[23].nombre, nuevo[24].nombre],
              [nuevo[25].nombre, nuevo[26].nombre],
              [nuevo[27].nombre, nuevo[28].nombre],
              [nuevo[29].nombre, nuevo[30].nombre]
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
        [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
        [nuevo[2].nombre, nuevo[3].nombre],
        [nuevo[4].nombre, nuevo[5].nombre],
        [nuevo[6].nombre, nuevo[7].nombre],
        [nuevo[8].nombre, nuevo[9].nombre],
        [nuevo[10].nombre, nuevo[11].nombre],
        [nuevo[12].nombre, nuevo[13].nombre],
        [nuevo[14].nombre, nuevo[15].nombre],
        [nuevo[16].nombre, nuevo[17].nombre], /* first matchup */
        [nuevo[18].nombre, nuevo[19].nombre],
        [nuevo[20].nombre, nuevo[21].nombre],
        [nuevo[22].nombre, nuevo[23].nombre],
        [nuevo[24].nombre, nuevo[25].nombre],
        [nuevo[26].nombre, nuevo[27].nombre],
        [nuevo[28].nombre, nuevo[29].nombre],
        [nuevo[30].nombre, nuevo[31].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, null],
          [nuevo[3].nombre, null],
          [nuevo[4].nombre, null],
          [nuevo[5].nombre, null],
          [nuevo[6].nombre, null],
          [nuevo[7].nombre, null],
          [nuevo[8].nombre, null],
          [nuevo[9].nombre, null],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, null],
          [nuevo[3].nombre, null],
          [nuevo[4].nombre, null],
          [nuevo[5].nombre, null],
          [nuevo[6].nombre, null],
          [nuevo[7].nombre, null],
          [nuevo[8].nombre, null],
          [nuevo[9].nombre, null],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, null],
          [nuevo[5].nombre, null],
          [nuevo[6].nombre, null],
          [nuevo[7].nombre, null],
          [nuevo[8].nombre, null],
          [nuevo[9].nombre, null],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre]

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
            [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
            [nuevo[2].nombre, nuevo[3].nombre],
            [nuevo[4].nombre, null],
            [nuevo[5].nombre, null],
            [nuevo[6].nombre, null],
            [nuevo[7].nombre, null],
            [nuevo[8].nombre, null],
            [nuevo[9].nombre, null],
            [nuevo[10].nombre, null],
            [nuevo[11].nombre, null],
            [nuevo[12].nombre, null],
            [nuevo[13].nombre, null],
            [nuevo[14].nombre, null],
            [nuevo[15].nombre, null],
            [nuevo[16].nombre, null],
            [nuevo[17].nombre, null],
            [nuevo[18].nombre, null],
            [nuevo[19].nombre, null],
            [nuevo[20].nombre, null],
            [nuevo[21].nombre, null],
            [nuevo[22].nombre, null],
            [nuevo[23].nombre, null],
            [nuevo[24].nombre, null],
            [nuevo[25].nombre, null],
            [nuevo[26].nombre, null],
            [nuevo[27].nombre, null],
            [nuevo[28].nombre, null],
            [nuevo[29].nombre, null],
            [nuevo[30].nombre, null],
            [nuevo[31].nombre, null],
            [nuevo[32].nombre, nuevo[33].nombre],
            [nuevo[34].nombre, nuevo[35].nombre]

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
            [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
            [nuevo[2].nombre, nuevo[3].nombre],
            [nuevo[4].nombre, nuevo[5].nombre],
            [nuevo[6].nombre, null],
            [nuevo[7].nombre, null],
            [nuevo[8].nombre, null],
            [nuevo[9].nombre, null],
            [nuevo[10].nombre, null],
            [nuevo[11].nombre, null],
            [nuevo[12].nombre, null],
            [nuevo[13].nombre, null],
            [nuevo[14].nombre, null],
            [nuevo[15].nombre, null],
            [nuevo[16].nombre, null],
            [nuevo[17].nombre, null],
            [nuevo[18].nombre, null],
            [nuevo[19].nombre, null],
            [nuevo[20].nombre, null],
            [nuevo[21].nombre, null],
            [nuevo[22].nombre, null],
            [nuevo[23].nombre, null],
            [nuevo[24].nombre, null],
            [nuevo[25].nombre, null],
            [nuevo[26].nombre, null],
            [nuevo[27].nombre, null],
            [nuevo[28].nombre, null],
            [nuevo[29].nombre, null],
            [nuevo[30].nombre, null],
            [nuevo[31].nombre, null],
            [nuevo[32].nombre, null],
            [nuevo[33].nombre, nuevo[34].nombre],
            [nuevo[35].nombre, nuevo[36].nombre]

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
            [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
            [nuevo[2].nombre, nuevo[3].nombre],
            [nuevo[4].nombre, nuevo[5].nombre],
            [nuevo[6].nombre, null],
            [nuevo[7].nombre, null],
            [nuevo[8].nombre, null],
            [nuevo[9].nombre, null],
            [nuevo[10].nombre, null],
            [nuevo[11].nombre, null],
            [nuevo[12].nombre, null],
            [nuevo[13].nombre, null],
            [nuevo[14].nombre, null],
            [nuevo[15].nombre, null],
            [nuevo[16].nombre, null],
            [nuevo[17].nombre, null],
            [nuevo[18].nombre, null],
            [nuevo[19].nombre, null],
            [nuevo[20].nombre, null],
            [nuevo[21].nombre, null],
            [nuevo[22].nombre, null],
            [nuevo[23].nombre, null],
            [nuevo[24].nombre, null],
            [nuevo[25].nombre, null],
            [nuevo[26].nombre, null],
            [nuevo[27].nombre, null],
            [nuevo[28].nombre, null],
            [nuevo[29].nombre, null],
            [nuevo[30].nombre, null],
            [nuevo[31].nombre, null],
            [nuevo[32].nombre, nuevo[33].nombre],
            [nuevo[34].nombre, nuevo[35].nombre],
            [nuevo[36].nombre, nuevo[37].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, null],
          [nuevo[9].nombre, null],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, null],
          [nuevo[9].nombre, null],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre, null],
          [nuevo[11].nombre, null],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre],
          [nuevo[40].nombre, nuevo[41].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre],
          [nuevo[41].nombre, nuevo[42].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, null],
          [nuevo[13].nombre, null],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre],
          [nuevo[40].nombre, nuevo[41].nombre],
          [nuevo[42].nombre, nuevo[43].nombre]

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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre],
          [nuevo[41].nombre, nuevo[42].nombre],
          [nuevo[43].nombre, nuevo[44].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, null],
          [nuevo[15].nombre, null],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre],
          [nuevo[40].nombre, nuevo[41].nombre],
          [nuevo[42].nombre, nuevo[43].nombre],
          [nuevo[44].nombre, nuevo[45].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre],
          [nuevo[41].nombre, nuevo[42].nombre],
          [nuevo[43].nombre, nuevo[44].nombre],
          [nuevo[45].nombre, nuevo[46].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, null],
          [nuevo[17].nombre, null],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre],
          [nuevo[40].nombre, nuevo[41].nombre],
          [nuevo[42].nombre, nuevo[43].nombre],
          [nuevo[44].nombre, nuevo[45].nombre],
          [nuevo[46].nombre, nuevo[47].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, nuevo[17].nombre],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre],
          [nuevo[41].nombre, nuevo[42].nombre],
          [nuevo[43].nombre, nuevo[44].nombre],
          [nuevo[45].nombre, nuevo[46].nombre],
          [nuevo[47].nombre, nuevo[48].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, nuevo[17].nombre],
          [nuevo[18].nombre, null],
          [nuevo[19].nombre, null],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, nuevo[33].nombre],
          [nuevo[34].nombre, nuevo[35].nombre],
          [nuevo[36].nombre, nuevo[37].nombre],
          [nuevo[38].nombre, nuevo[39].nombre],
          [nuevo[40].nombre, nuevo[41].nombre],
          [nuevo[42].nombre, nuevo[43].nombre],
          [nuevo[44].nombre, nuevo[45].nombre],
          [nuevo[46].nombre, nuevo[47].nombre],
          [nuevo[48].nombre, nuevo[49].nombre]
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
          [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
          [nuevo[2].nombre, nuevo[3].nombre],
          [nuevo[4].nombre, nuevo[5].nombre],
          [nuevo[6].nombre, nuevo[7].nombre],
          [nuevo[8].nombre, nuevo[9].nombre],
          [nuevo[10].nombre,nuevo[11].nombre],
          [nuevo[12].nombre, nuevo[13].nombre],
          [nuevo[14].nombre, nuevo[15].nombre],
          [nuevo[16].nombre, nuevo[17].nombre],
          [nuevo[18].nombre,nuevo[19].nombre],
          [nuevo[20].nombre, null],
          [nuevo[21].nombre, null],
          [nuevo[22].nombre, null],
          [nuevo[23].nombre, null],
          [nuevo[24].nombre, null],
          [nuevo[25].nombre, null],
          [nuevo[26].nombre, null],
          [nuevo[27].nombre, null],
          [nuevo[28].nombre, null],
          [nuevo[29].nombre, null],
          [nuevo[30].nombre, null],
          [nuevo[31].nombre, null],
          [nuevo[32].nombre, null],
          [nuevo[33].nombre, nuevo[34].nombre],
          [nuevo[35].nombre, nuevo[36].nombre],
          [nuevo[37].nombre, nuevo[38].nombre],
          [nuevo[39].nombre, nuevo[40].nombre],
          [nuevo[41].nombre, nuevo[42].nombre],
          [nuevo[43].nombre, nuevo[44].nombre],
          [nuevo[45].nombre, nuevo[46].nombre],
          [nuevo[47].nombre, nuevo[48].nombre],
          [nuevo[49].nombre, nuevo[50].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre, null],
      [nuevo[21].nombre, null],
      [nuevo[22].nombre, null],
      [nuevo[23].nombre, null],
      [nuevo[24].nombre, null],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, null],
      [nuevo[23].nombre, null],
      [nuevo[24].nombre, null],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, null],
      [nuevo[23].nombre, null],
      [nuevo[24].nombre, null],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, null],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre],
      [nuevo[53].nombre, nuevo[54].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, null],
      [nuevo[25].nombre, null],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre],
      [nuevo[54].nombre, nuevo[55].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre],
      [nuevo[53].nombre, nuevo[54].nombre],
      [nuevo[55].nombre, nuevo[56].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, null],
      [nuevo[27].nombre, null],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre],
      [nuevo[54].nombre, nuevo[55].nombre],
      [nuevo[56].nombre, nuevo[57].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre],
      [nuevo[53].nombre, nuevo[54].nombre],
      [nuevo[55].nombre, nuevo[56].nombre],
      [nuevo[57].nombre, nuevo[58].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, null],
      [nuevo[29].nombre, null],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre],
      [nuevo[54].nombre, nuevo[55].nombre],
      [nuevo[56].nombre, nuevo[57].nombre],
      [nuevo[58].nombre, nuevo[59].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, nuevo[29].nombre],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre],
      [nuevo[53].nombre, nuevo[54].nombre],
      [nuevo[55].nombre, nuevo[56].nombre],
      [nuevo[57].nombre, nuevo[58].nombre],
      [nuevo[59].nombre, nuevo[60].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, nuevo[29].nombre],
      [nuevo[30].nombre, null],
      [nuevo[31].nombre, null],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre],
      [nuevo[54].nombre, nuevo[55].nombre],
      [nuevo[56].nombre, nuevo[57].nombre],
      [nuevo[58].nombre, nuevo[59].nombre],
      [nuevo[60].nombre, nuevo[61].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, nuevo[29].nombre],
      [nuevo[30].nombre, nuevo[31].nombre],
      [nuevo[32].nombre, null],
      [nuevo[33].nombre, nuevo[34].nombre],
      [nuevo[35].nombre, nuevo[36].nombre],
      [nuevo[37].nombre, nuevo[38].nombre],
      [nuevo[39].nombre, nuevo[40].nombre],
      [nuevo[41].nombre, nuevo[42].nombre],
      [nuevo[43].nombre, nuevo[44].nombre],
      [nuevo[45].nombre, nuevo[46].nombre],
      [nuevo[47].nombre, nuevo[48].nombre],
      [nuevo[49].nombre, nuevo[50].nombre],
      [nuevo[51].nombre, nuevo[52].nombre],
      [nuevo[53].nombre, nuevo[54].nombre],
      [nuevo[55].nombre, nuevo[56].nombre],
      [nuevo[57].nombre, nuevo[58].nombre],
      [nuevo[59].nombre, nuevo[60].nombre],
      [nuevo[61].nombre, nuevo[62].nombre]
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
      [nuevo[0].nombre, nuevo[1].nombre], /* first matchup */
      [nuevo[2].nombre, nuevo[3].nombre],
      [nuevo[4].nombre, nuevo[5].nombre],
      [nuevo[6].nombre, nuevo[7].nombre],
      [nuevo[8].nombre, nuevo[9].nombre],
      [nuevo[10].nombre,nuevo[11].nombre],
      [nuevo[12].nombre, nuevo[13].nombre],
      [nuevo[14].nombre, nuevo[15].nombre],
      [nuevo[16].nombre, nuevo[17].nombre],
      [nuevo[18].nombre,nuevo[19].nombre],
      [nuevo[20].nombre,nuevo[21].nombre],
      [nuevo[22].nombre, nuevo[23].nombre],
      [nuevo[24].nombre, nuevo[25].nombre],
      [nuevo[26].nombre, nuevo[27].nombre],
      [nuevo[28].nombre, nuevo[29].nombre],
      [nuevo[30].nombre, nuevo[31].nombre],
      [nuevo[32].nombre, nuevo[33].nombre],
      [nuevo[34].nombre, nuevo[35].nombre],
      [nuevo[36].nombre, nuevo[37].nombre],
      [nuevo[38].nombre, nuevo[39].nombre],
      [nuevo[40].nombre, nuevo[41].nombre],
      [nuevo[42].nombre, nuevo[43].nombre],
      [nuevo[44].nombre, nuevo[45].nombre],
      [nuevo[46].nombre, nuevo[47].nombre],
      [nuevo[48].nombre, nuevo[49].nombre],
      [nuevo[50].nombre, nuevo[51].nombre],
      [nuevo[52].nombre, nuevo[53].nombre],
      [nuevo[54].nombre, nuevo[55].nombre],
      [nuevo[56].nombre, nuevo[57].nombre],
      [nuevo[58].nombre, nuevo[59].nombre],
      [nuevo[60].nombre, nuevo[61].nombre],
      [nuevo[62].nombre, nuevo[63].nombre]
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
    teamWidth: 60,
    scoreWidth: 20,
    matchMargin: 10,
    roundMargin: 50,
    init: eval("data"+nuevo.length)
    };
    function updateResizeDemo() {
      $('.graficos .demo').bracket(resizeParameters);
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
