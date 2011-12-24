var screen, stack, card;

// initialize jo
jo.load();

// create our UI
screen = new joScreen(
    stack = new joStack().push(
        card = new joCard([
            new joTitle("My Money."),
            new joCaption("This is awesome."),
            new joDivider(),
            new joButton("OK").selectEvent.subscribe(function() {
                stack.hide();
            })
        ])
    )
);