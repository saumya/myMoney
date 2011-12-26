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
	var card = new joCard([
		new joTitle("What is it ?"),
		new joCaption("A simple application for keeping track of your money."),
		new joTitle("How ?"),
		new joCaption("Fill in the regular expense when you are doing it."),
		new joTitle("What i need to know ?"),
		new joCaption("Just fill the expense when you are doing it. That should be it. It works on offline too. In case it does not, please inform us. ")
	]).setTitle("About My Money");
	return card;
});

//LoginView
joCache.set("loginView", function() {
	var card = new joCard([
		new joFlexrow([
				new joLabel("User Id").setStyle({className:"left", marginTop:"2px", width:"0px"}),
				new joInput("saumya").setStyle({width: "150px", marginBottom: "0px"})
			]),
		new joFlexrow([
				new joLabel("Password").setStyle({className:"left", marginTop:"2px", width:"0px"}),
				new joPasswordInput("saumya").setStyle({width: "150px", marginBottom: "0px"})
			]),
		new joButton("Login").selectEvent.subscribe(function() {
			App.mainScreen.alert("You pressed a button!");
		})
	]).setTitle("Login");
	return card;
});

//register view
joCache.set("registrationView", function() {
	var card = new joCard([
		new joFlexrow([
				new joLabel("User Id").setStyle({className:"left", marginTop:"2px", width:"0px"}),
				new joInput("saumya").setStyle({width: "150px", marginBottom: "0px"})
			]),
		new joFlexrow([
				new joLabel("Password").setStyle({className:"left", marginTop:"2px", width:"0px"}),
				new joPasswordInput("saumya").setStyle({width: "150px", marginBottom: "0px"})
			]),
		new joButton("Register").selectEvent.subscribe(function() {
			App.mainScreen.alert("You pressed a button!");
		})
	]).setTitle("Registration");
	return card;
});


