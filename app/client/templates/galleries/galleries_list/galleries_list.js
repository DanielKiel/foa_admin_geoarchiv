/*****************************************************************************/
/* GalleriesList: Event Handlers */
/*****************************************************************************/
Template.GalleriesList.events({
});

/*****************************************************************************/
/* GalleriesList: Helpers */
/*****************************************************************************/
Template.GalleriesList.helpers({
    settings: function() {
        return {
            collection: Galleries,
            fields: [
                "_id",
                "title"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* GalleriesList: Lifecycle Hooks */
/*****************************************************************************/
Template.GalleriesList.onCreated(function () {
});

Template.GalleriesList.onRendered(function () {
});

Template.GalleriesList.onDestroyed(function () {
});
