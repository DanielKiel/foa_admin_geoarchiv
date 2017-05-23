/*****************************************************************************/
/* LocationsList: Event Handlers */
/*****************************************************************************/
Template.LocationsList.events({
});

/*****************************************************************************/
/* LocationsList: Helpers */
/*****************************************************************************/
Template.LocationsList.helpers({
    settings: function() {
        return {
            collection: Locations,
            fields: [
                "_id",
                "title",
                "city",
                "plz",
                "street"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* LocationsList: Lifecycle Hooks */
/*****************************************************************************/
Template.LocationsList.onCreated(function () {
});

Template.LocationsList.onRendered(function () {
});

Template.LocationsList.onDestroyed(function () {
});
