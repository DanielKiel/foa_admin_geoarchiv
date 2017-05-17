Template.MasterLayout.helpers({

    "isUser": function() {
        if (! Session.get('token')) {
            return false;
        }

        return true;
    }

});

Template.MasterLayout.events({
});
