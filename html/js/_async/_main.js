/*	----------------------------------------------------------------------------------------------------
	 JS ADN global para todo el proyecto de carga asíncrona
------------------------------------------------------------------------------------------------------ */

/*	--------------------------------------------------
	Declaración de funciones
-------------------------------------------------- */
windowWidth = window.innerWidth;
//Si hacemos una llamada AJAX lanzaremos esta función para recargar los plugins
function initAsync(){
	
	
	//Validaciones formularios
//	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation(
//		{
//			filter: function () {
//				return $(this).is(":visible");
//			}
//		}		
//	);	
	
	
}

$(window).load(function(){

	//Ejecutamos Masonry
	$('.js-masonry').masonry({
	  columnWidth: 1,
	});	
	
	
	//Ejecutamos Sliders	
	$('.js-slick').slick({
		dots: true,
		arrows: false
	});
	
	
	//Ejecutamos Sliders con autoPlay
	$('.js-slick-autoplay').each(function(){
		$(this).slick({
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: $(this).attr('data-play-speed') || 10000 //10s de autoplay o por data-play-speed
		});
	});
	
	
	//Slider sin dots con arrows
	$('.js-slick-arrows').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 800,
		cssEase: 'linear',
		dots: false,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 64 64" width="64" class="icon icon--md" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../html/svg/symbol/svg/sprite.symbol.svg#arrow_left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 64 64" width="64" class="icon icon--md" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="../html/svg/symbol/svg/sprite.symbol.svg#arrow_rigth"></use></svg></button>',
		
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        speed: 400,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]		
		
	});
	
	$('.js-toggle-text').each(function(){
		$(this).on('click', function(){
			console.log('a');
			var _newText = $(this).attr('data-text');
			$(this).attr('data-text', _newText);
			$(this).text(_newText);
		});	
	});	
	
})	


svg4everybody();


/*	--------------------------------------------------
	Lógica de scripts
-------------------------------------------------- */
$(function() {
	
	
	/*	--------------------------------------------------
		Recalculamos alturas cuando se ejecute el lazysizes
	-------------------------------------------------- */

	document.addEventListener('lazybeforeunveil', function(e){
	    
	    sameHeight();
	    
	});	

	/*	--------------------------------------------------
		Convertimos el header en fixed si hay hero-img,
		si no lo hay usamos sticky
	-------------------------------------------------- */
	hero = $('[data-hero]');
	// para hacerlo el efecto, al hacer scroll, al sobrepasar la altura del hero
	//if ( hero.length > 0){
	//  
	//	var topofDiv = hero.offset().top-100; //gets offset of header
	//	var height = hero.outerHeight(); //gets height of header
	//	
	//	$(window).scroll(function(){
	//	    if($(window).scrollTop() > (topofDiv + height)){
	//	       $(".header.fixedsticky").addClass('sticky');
	//	    }
	//	    else{
	//	       $(".header.fixedsticky").removeClass('sticky');
	//	    }
	//	});
	//  
	//}else{
	//	$(".header.fixedsticky").addClass('sticky');	
	//	$( '.header.fixedsticky' ).fixedsticky();	  
	//}
	
	//para hacer el efecto nada más hacer scroll
	if ( hero.length > 0){
	  
	  var topofDiv = hero.offset().top-100; //gets offset of header
	  var height = hero.outerHeight(); //gets height of header
	  
	  $(window).on('scroll load', function(){
	      if($(window).scrollTop() > 0){
	         $(".header.fixedsticky").addClass('sticky');
	      }
	      else{
	         $(".header.fixedsticky").removeClass('sticky');
	      }
	  });
	  
	}else{
	  $(".header.fixedsticky").addClass('sticky');	
	  $( '.header.fixedsticky' ).fixedsticky();	  
	}

	/*	--------------------------------------------------
		Le damos color al header al abrir el buscador
	-------------------------------------------------- */

	$('#header-search-button').click(function(){
		
		$(".header.fixedsticky").toggleClass('header--search--open');
		
	})

	/*	--------------------------------------------------
		Alertas que cambian su texto al ser pulsadas
	-------------------------------------------------- */

	$('[data-alert-text]').click(function(){
		
		target = $(this).attr('data-alert-target');
		text = $(this).attr('data-alert-text');
		$(target).removeClass('hidden')
		$(target).text(text);
		
	})

	/*	--------------------------------------------------
		Mostrar una capa
	-------------------------------------------------- */
	$('[data-show]').on('click', function(e){
		var layerToShow = $(this).attr('data-show');
		$(layerToShow).removeClass('hidden');
		
	// Vamos hasta la capa, esperamos un poco para que esté visible
	setTimeout(function(){
		
		var moveToOffset = $(layerToShow).offset().top - 80;
		$("html, body").animate({scrollTop: moveToOffset, useTranslate3d:true }, 700);
		sameHeight(); 
				
	}, 700);		
		
	});
	/*	--------------------------------------------------
		Ocultar una capa
	-------------------------------------------------- */
	$('[data-hide]').on('click', function(e){
		var layerToHide = $(this).attr('data-hide');
		$(layerToHide).addClass('hidden');
	});		
	

	/*	--------------------------------------------------
		Video players
	-------------------------------------------------- */
	$('.card-video__button').click(function(){

		videoPlayer = $('.card-video-full__player video').attr('id');

		$('.card-video-full__poster').hide();		
		$('.card-video-full__player').show();
				
		document.getElementById(videoPlayer).play();
				
	});

	// $('.hero-video__button').click(function(){

	// 	videoPlayer = $('.hero-video__player video').attr('id');

	// 	$('.hero-video__poster').hide();		
	// 	$('.hero-video__player').show();
				
	// 	$('.hero-video').css('background','black');
	// 	$('.hero-video').attr('data-background','');
	// 	$('.hero-video').attr('data-background-2x','');
				
	// 	document.getElementById(videoPlayer).play();
				
	// });


	if( windowWidth >= smBreak ) {

		$('.dropdown').hover(function() {
			$(this).addClass('open');
			$(this).closest('header').addClass('solid-bg');
		}, function() {
			$(this).removeClass('open');
			$(this).closest('header').removeClass('solid-bg');
		});	
	}

	


	/*	--------------------------------------------------
		Muestro modal de prueba kpmg impulsa
		tras 5 segundos
	-------------------------------------------------- */

	if ($('#modal-test-impulsa').length>0 ) {
		setTimeout(function(){ 
			$('#modal-test-impulsa').modal(); 
		}, 3000);

	}

	/*	--------------------------------------------------
		Muestro modal de suscripción
		por defecto
	-------------------------------------------------- */


	if ($('#modal-suscription').length>0 ) {

		$('#modal-suscription').on('show.modal', function(){
		});
		$('#modal-suscription').on('hide.modal', function(){
			
		});

		$('#modal-suscription').modal('show'); 
		$('#modal-suscription').on('shown.modal', function(){
			
		});

	}

	/*	--------------------------------------------------
		Muestro modal de preparando documentos
		por defecto
	-------------------------------------------------- */

	if ($('#modal-docs').length>0 ) {

		$('#modal-docs').modal();

	}

	/*	--------------------------------------------------
		Calculo altura del menu mobile
	-------------------------------------------------- */

	maxHeight = $(window).height() - $('.off-canvas__head').outerHeight() - $('.bottom-off-canvas').outerHeight() - 20; 

	$('.js-height-menu').css('height', maxHeight); 
	console.log($('.bottom-off-canvas').outerHeight()); 
	

	
	
	/*	--------------------------------------------------
		Llamada de funciones
	-------------------------------------------------- */
	initAsync();


	
	/*	--------------------------------------------------
		Llamada de funciones en resize
	-------------------------------------------------- */
	$( window ).on('resize', function() {



	});


	/*	--------------------------------------------------
		Llamada de funciones al abrir modales
	-------------------------------------------------- */

	$('#modal-suscription').on('hide.bs.modal', function () {
	 	insertBG(); 
	 	sameHeight(); 
	 	
	});

});

