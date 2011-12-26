$(document).ready(function(){
	App.load();
});

App = {
	load: function() {
		jo.load();
		
		document.body.addEventListener('touchmove', function(e) {
		    e.preventDefault();
			joEvent.stop(e);
		}, false);
		
		// this is a more complex UI with a nav bar and a toolbar
		this.scn = new joScreen(
			new joContainer([
				new joFlexcol([
					this.nav = new joNavbar(),
					this.stack = new joStackScroller()
				]),
				this.toolbar = new joToolbar("This is a footer, neat huh?")
			]).setStyle({position: "absolute", top: "0", left: "0", bottom: "0", right: "0"})
		);
		
		this.nav.setStack(this.stack);
		
		this.stack.push(joCache.get("menu"));
	}
};




joCache.set("menu", function() {
	// some inline data and chaining going on here,
	// dont be afraid, it'll all make sense later
	var card = new joCard([
		new joTitle("Select an option below"),
		new joMenu([
			{ title: "About", id: "about" },
			{ title: "Form Widgets", id: "widgets" },
			{ title: "List Views", id: "lists" },
			{ title: "Table View", id: "tables" },
			{ title: "Popup Dialogs", id: "popups" },
			{ title: "Ajax Calls", id: "ajax" },
			{ title: "Themes and CSS", id: "themes" }
		]).selectEvent.subscribe(function(id) {
			App.stack.push(joCache.get(id));
		})
	]);
	
	// hey, you don't have to make messy chained and
	// inlined code; that's a coding style decision
	// Jo doesn't pretend it should make for you.
	card.setTitle("Jo Kitchen Sink Demo");
	
	return card;
});

