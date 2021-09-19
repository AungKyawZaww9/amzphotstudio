$(document).ready(function(){


    
// Start Navbar

// for navbutton
$('.navbuttons').click(function(){
    // console.log("I' am working");
    $('.navbuttons').toggleClass('changes');
});



// for navbar
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 200){
        $('.navbar').addClass('navmenus');
    }else{
        $('.navbar').removeClass('navmenus');
    }

});

// End Navbar




// Start Mission  Section 
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 650){
        $('.cameraimgs').addClass('fromlefts');
        $('.missiontexts').addClass('fromrights');
    }else{
        $('.cameraimgs').removeClass('fromlefts');
        $('.missiontexts').removeClass('fromrights');
    }
});
// End Mission  Section 





// Start Gallary Section 
$('.gallerylists').click(function(){
    let datafilter = $(this).attr('data-filter');
    // console.log(datafilter); 

    if(datafilter === "all"){
        $('.filters').show();
    }else{
        $('.filters').not('.'+datafilter).hide(400);
        $('.filters').filter('.'+datafilter).show(400);
    }
});

// for ul active 
$('.gallerylists').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');

});

// End Gallary Section 




// Start Pricing Section 
    $(window).scroll(function(){
        let getscrolly = $(this).scrollTop();
        // console.log(getscrolly);

        if(getscrolly >= 4300){
            $('.cardones').addClass('moveformlefts');
            $('.cardtwos').addClass('moveformbottoms');
            $('.cardthrees').addClass('moveformrights');
        }else{
            $('.cardones').removeClass('moveformlefts');
            $('.cardtwos').removeClass('moveformbottoms');
            $('.cardthrees').removeClass('moveformrights');
        }
    });
// End Pricing Section 


// Start Icon Section 
$('#btnprimary').click(function(){
    // console.log("hey");

    $('.btns').toggleClass('show');
});
//End Icon Section

});
