$(function  () {
	/**
	 * Main Menu.
	 */

	var mainMenu = $(".sf-menu");

	 // Responsive Menu
	mainMenu.clone().removeClass().addClass( "rwd-menu" ).prependTo( ".navbar-container nav" );

	 // super fish menu
	mainMenu.superfish();

	 // Toggle the Responsive
	$( "#rwd-trigger" ).on( "click", function( e ) {
		e.preventDefault();

		$( ".rwd-menu" ).slideToggle();
	});

	/**
	 * Animations.
	 */
	$( "#demo-animations" ).find( ".demo-col" ).on( "click", function() {
		var $this = $( this );

		$this.addClass( "animated " + $this.text() );
	});

	/**
	 * Tabs.
	 */
	$( ".tabs-links a" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target Tab.
		var newTab = $( this ).attr( "href" );

		// Show the targeted tab
		$( newTab ).show().siblings().hide();

		// add active class
		$( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
	});
	/**
	 * accordions.
	 */
	$( ".accordion-element-title" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target accordion.
		var targetAccordion = $( this ).attr( "href" );

		// Collapse all accordion.
		$(".accordion-element-title").removeClass("active");
		$(".accordion-element-content").hide();

		// Show the target element.
		$(this).addClass("active");
		$(targetAccordion).show();
	});

}); 




