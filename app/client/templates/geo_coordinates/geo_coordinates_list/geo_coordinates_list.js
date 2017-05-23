/*****************************************************************************/
/* GeoCoordinatesList: Event Handlers */
/*****************************************************************************/
Template.GeoCoordinatesList.events({
});

/*****************************************************************************/
/* GeoCoordinatesList: Helpers */
/*****************************************************************************/
Template.GeoCoordinatesList.helpers({
    settings: function() {
        return {
            collection: GeoCoordinates,
            fields: [
                "_id",
                "title",
                "longitude",
                "latitude"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* GeoCoordinatesList: Lifecycle Hooks */
/*****************************************************************************/
Template.GeoCoordinatesList.onCreated(function () {
});

Template.GeoCoordinatesList.onRendered(function () {
});

Template.GeoCoordinatesList.onDestroyed(function () {
});
