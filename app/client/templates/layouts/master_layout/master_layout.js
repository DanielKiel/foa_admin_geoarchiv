Template.MasterLayout.helpers({

    "isUser": function() {
        if (! localStorage.getItem('token')) {
            return false;
        }

        return true;
    }

});

Template.MasterLayout.events({
});
