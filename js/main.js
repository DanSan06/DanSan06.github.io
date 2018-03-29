$(document).ready(function(){

  //get box by id
  var box = document.getElementById('box');

  //fill box
  for(var i = 0; i < 7; i++){

    //create column div
    var col = document.createElement('div');
    col.className = 'col';

    //create ctg div
    var ctg = document.createElement('div');
    ctg.className = 'ctg';
    ctg.id = "ctg" + (i+1);
    console.log(ctg.id);
    //create and add text to div
    var ctgName = document.createTextNode("Categoria " + (i+1));
    ctg.appendChild(ctgName);

    //append ctg div to col div
    col.appendChild(ctg);

    //fiil column with points
    for(var j = 10; j >= 1; j--){


      var ab = document.createElement('a');
      ab.id = "a"+j;
      ab.href = "question.html";

      //create div element
      var pts = document.createElement('div');
      pts.className = 'pts';

      //create text
      var pointText = document.createTextNode(j*100);

      //append element a to pts div
      pts.appendChild(pointText);

      ab.appendChild(pts);

      //append pts div to col div
      col.appendChild(ab);
    }

    //append col div to box div
    box.appendChild(col);

  }

  /*$(".pts").click(function (){
    alert($(this).siblings(".ctg").text() + ' ' + $(this).text());
  });*/

 $("a").click(function (){
    $(".game").load("question.html #" + $(this).siblings(".ctg").attr("id"));
    return false;
    //alert("question.html " + $(this).siblings(".ctg").attr("id"));
  });

});
