import React, { useState } from 'react';
import $ from 'jquery';




//$('#quick').classtoggle();

$(window).on('mousewheel',function(e){
    var wheel = e.originalEvent.wheelDelta;

    if(wheel>0){
        $("#quick").removeClass("hide");
    } else {
        $("#quick").addClass("hide");
    }
});