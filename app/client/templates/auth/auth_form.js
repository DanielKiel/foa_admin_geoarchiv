/*****************************************************************************/
/* AuthForm: Event Handlers */
/*****************************************************************************/
Template.AuthForm.events({

    "submit": function(event, template){
        // prevent default form submission handler : which is
        // performing an HTTP POST request that will reload the page
        event.preventDefault();

        var formArray = template.$('form').serializeArray();

        formArray.forEach(function(input){
            Template.instance().credentials[input.name] = input.value;
        });

        Template.AuthForm.__helpers.get('getAuth').call().then(function(response) {

            localStorage.setItem('token', response.access_token);
            Meteor.defer(function() {
                Router.go('articles.list');

            });
        }).catch(function (error) {
            console.log(error);
        });
    }

});

/*****************************************************************************/
/* AuthForm: Helpers */
/*****************************************************************************/
Template.AuthForm.helpers({
    getAuth: function() {

        let baseUrl = Meteor.settings.public.serviceUrl;
        let credentials = Template.instance().credentials;

        return new Promise( (resolve, reject) => {
            HTTP.post(baseUrl + '/oauth/token', {
                header: {
                    "Content-type": "application/json"
                },
                data: {
                    "grant_type": "password",
                    "client_id": "2",
                    "client_secret": "FhbX8didnT4wW0h0mrRCB8tspdw3LzZ3ZVfLiAwV",
                    "username": credentials.username,
                    "password": credentials.password,
                    "scope": ""
                }
            }, function(error, response) {

                if (error !== null) {
                    reject(error);
                }

                if (response.statusCode === 200) {
                    resolve(JSON.parse(response.content));
                }

                reject(response);

            });

        });
    }
});

/*****************************************************************************/
/* AuthForm: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthForm.onCreated(function () {
    this.credentials = {};
});

Template.AuthForm.onRendered(function () {
});

Template.AuthForm.onDestroyed(function () {
});
