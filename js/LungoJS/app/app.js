var App = (function(lng, undefined) {

    //Define your LungoJS Application Instance
    
    lng.App.init({
    	id: 'saumyaID3Money',
        name: 'Lungo Money',
        version: '0.1',
        platform: 'iOS'
    });
    
    lng.Core.log(1,'testing');
    lng.Core.log(1,lng.App.get('name'));
    
    return {};

})(LUNGO);