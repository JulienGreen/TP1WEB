/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery("document").ready(function ($) {
    var nav = $('.nav-container');
    var top = $('.top');
    var pos = nav.offset().top;


    $(window).scroll(function () {
        var fix = ($(this).scrollTop() > pos) ? true : false;
        
        nav.toggleClass("fix-nav", fix);
        top.toggleClass("top2", fix);
        $('body').toggleClass("fix-body", fix);
        

    }
    );
}
);