/******* Ejecuta al inicio ****/
var moreContentLoaded=false;
$( function() {

    //solo en la pagina principal 
    if($('body#index').length>0){
        $(window).scroll(function () {
            if ( $(document).height() <= $(window).scrollTop() + $(window).height() +100 ) {
              if(!moreContentLoaded){
                  $( "#extra" ).load( "extraCoverProjects.html" );
                  moreContentLoaded=true
                  console.log("loading more content")
              }
            }
        });
    }
});