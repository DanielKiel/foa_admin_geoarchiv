/*****************************************************************************/
/* LinksList: Event Handlers */
/*****************************************************************************/
Template.LinksList.events({

});

/*****************************************************************************/
/* LinksList: Helpers */
/*****************************************************************************/
Template.LinksList.helpers({
    settings: function() {
        return {
            collection: Links,
            fields: [
                "_id",
                "linktext",
                "url"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* LinksList: Lifecycle Hooks */
/*****************************************************************************/
Template.LinksList.onCreated(function () {
});

Template.LinksList.onRendered(function () {
});

Template.LinksList.onDestroyed(function () {
});
