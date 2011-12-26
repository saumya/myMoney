$(document).ready(function(){
	App.load();
});

App = {
	load: function() {
		jo.load();
		/*
		document.body.addEventListener('touchmove', function(e) {
		    e.preventDefault();
			joEvent.stop(e);
		}, false);
		*/
		// this is a more complex UI with a nav bar and a toolbar
		this.mainScreen = new joScreen(
			new joContainer([
				new joFlexcol([
					this.nav = new joNavbar(),
					this.stack = new joStackScroller()
				]),
				this.toolbar = new joToolbar("my money manager.")
			]).setStyle({position: "absolute", top: "0", left: "0", bottom: "0", right: "0"})
		);
		
		this.nav.setStack(this.stack);
		
		this.stack.push(joCache.get("menu"));
	}
};

//Menu Module
joCache.set("menu", function() {
	// some inline data and chaining going on here,
	// dont be afraid, it'll all make sense later
	var card = new joCard([
		new joTitle("Select an option below"),
		new joMenu([
			{ title: "About", id: "about" },
			{ title: "Login", id: "loginView" },
			{ title: "Register", id: "registrationView" }
		]).selectEvent.subscribe(function(id) {
			App.stack.push(joCache.get(id));
		})
	]);
	
	// hey, you don't have to make messy chained and
	// inlined code; that's a coding style decision
	// Jo doesn't pretend it should make for you.
	card.setTitle("My Money");
	
	return card;
});

//LoginView
joCache.set("about", function() {
	var card = new joCard([]).setTitle("About My Money");
	return card;
});

//LoginView
joCache.set("loginView", function() {
	var card = new joCard([]).setTitle("Login");
	return card;
});

//register view
joCache.set("registrationView", function() {
	var card = new joCard([]).setTitle("Registration");
	return card;
});


