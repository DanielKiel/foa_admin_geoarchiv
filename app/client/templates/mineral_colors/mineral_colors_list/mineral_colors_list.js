/*****************************************************************************/
/* MineralColorsList: Event Handlers */
/*****************************************************************************/
Template.MineralColorsList.events({

});

/*****************************************************************************/
/* MineralColorsList: Helpers */
/*****************************************************************************/
Template.MineralColorsList.helpers({
    settings: function() {
        return {
            collection: MineralColors,
            fields: [
                "_id",
                "name"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* MineralColorsList: Lifecycle Hooks */
/*****************************************************************************/
Template.MineralColorsList.onCreated(function () {
});

Template.MineralColorsList.onRendered(function () {
});

Template.MineralColorsList.onDestroyed(function () {
});
