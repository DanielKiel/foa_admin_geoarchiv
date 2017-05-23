/*****************************************************************************/
/* PhotosList: Event Handlers */
/*****************************************************************************/
Template.PhotosList.events({

});

/*****************************************************************************/
/* PhotosList: Helpers */
/*****************************************************************************/
Template.PhotosList.helpers({
    settings: function() {
        return {
            collection: Photos,
            fields: [
                "_id",
                "title",
                "filename"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* PhotosList: Lifecycle Hooks */
/*****************************************************************************/
Template.PhotosList.onCreated(function () {
});

Template.PhotosList.onRendered(function () {
});

Template.PhotosList.onDestroyed(function () {
});
