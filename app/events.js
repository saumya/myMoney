App.Events = (function(lng, app, undefined) {

//Login
    lng.Dom.Event.live('#btnLogin', 'TAP', function(evet) {
    	lng.Core.log(1,lng.App.get('name'));
    	lng.Core.log(1,'events.js : loginButton : ');
    	
        lng.Router.section('main');
        App.Data.refresh();
    });

    //Create new todo
    lng.Dom.Event.live('#btnNewTodo', 'TAP', function(event) {

        var name = lng.Dom.query('#txtNewName');
        var description = lng.Dom.query('#txtNewDescription');
        var type = lng.Dom.query('#txtNewType');

        App.Data.insertTodo({
            name: name.val(),
            description: description.val(),
            type: type.val(),
            done: 0,
            created_at: Date('now')
        });

        name.val('');
        description.val('');

        App.View.returnToMain('Expense Scheduled', 'check');
    });

    //View ToDo
    lng.Dom.Event.live('#done li, #pending li', 'TAP', function(event) {
        var todo_id = lng.Dom.query(this).attr('id');
        App.View.todo(todo_id)
    });

    //Done ToDo
    lng.Dom.Event.live('#btnDoneTodo', 'TAP', function(event) {
        var current_todo = lng.Data.Cache.get('current_todo');

        App.Data.doneTodo(current_todo.id);
        App.View.returnToMain('Spent', 'check');
    });

    //Update ToDo
    lng.Dom.Event.live('#btnUpdateTodo', 'TAP', function(event) {
        var current_todo = lng.Data.Cache.get('current_todo');
        var name = lng.Dom.query('#txtEditName');
        var description = lng.Dom.query('#txtEditDescription');
        var type = lng.Dom.query('#txtEditType');

        App.Data.updateTodo(current_todo.id, {
            name: name.val(),
            description: description.val()
        });

        App.View.returnToMain('Expense updated', 'write');
    });

    //Delete ToDo
    lng.Dom.Event.live('#btnDeleteTodo', 'TAP', function(event) {
        var current_todo = lng.Data.Cache.get('current_todo');
        var options = [
            {
                name: '...Yes, delete it!',
                icon: 'check',
                color: 'green',
                callback: function(){
                    App.Data.removeTodo(current_todo.id);
                    App.View.returnToMain('Expense deleted', 'trash');
                }
            }
        ];
        lng.Sugar.Growl.option('Are you sure?', options);
    });


    return {}

})(LUNGO, App);