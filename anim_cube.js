$(document).ready(function(){

  var cube = $('.cube');
  var val_rotateY = 0;
  var val_translateX = 0;
  var val_translateZ = 0;

  var upZ = false;

  var faces = ['front','right','back','left'];
  var face_value = [[0,0,0], [90,-60,-60], [180,-120,0], [270,-60,60]] // [rY, tZ, tX]
  var face_shown = 0;

  $('.cube').click(function(){
    console.log("Click button front")
    if(face_shown < 3){
      face_shown += 1;
    } else {
      face_shown = 0;
    }

    /*val_rotateY += 90;
    val_translateX -= 60;
    val_translateZ += upZ ? 60 : -60;
    upZ = !upZ;*/
    replace_cube(val_rotateY, val_translateX, val_translateZ);
  });

  function replace_cube(rY, tZ, tX){
    //cube.css('transform','rotateY(' + val_rotateY + 'deg) translateZ(' + tZ + 'vmin) translateX(' + tX + 'vmin)');
    cube.css('transform','rotateY(' + face_value[face_shown][0] + 'deg) translateZ(' + face_value[face_shown][1] + 'vmin) translateX(' + face_value[face_shown][2] + 'vmin)');
  }

});
