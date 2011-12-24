$(document).ready(function(){
	var screen, stack, card;

	// initialize jo
	jo.load();
	// create our UI
	screen = new joScreen(
	    stack = new joStack().push(
	        card = new joCard([
	            new joTitle("My Money"),
	            new joCaption('platform = '+jo.getPlatform()),
	            new joCaption('language = '+jo.getLanguage()),
	            new joCaption('jo version = '+jo.getVersion()),
	            new joDivider(),
	            new joButton("OK").selectEvent.subscribe(function() {
	                stack.hide();
	            }),
	            new joDivider(),
	            new joMenu(['My Money','Add','update','info','test','test','test','test','test','test','last'])
	        ])
	    )
	);
	
	//End jQuery
});
