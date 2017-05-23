/*****************************************************************************/
/* MineralCategoriesList: Event Handlers */
/*****************************************************************************/
Template.MineralCategoriesList.events({

});

/*****************************************************************************/
/* MineralCategoriesList: Helpers */
/*****************************************************************************/
Template.MineralCategoriesList.helpers({
    settings: function() {
        return {
            collection: MineralCategories,
            fields: [
                "_id",
                "name"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* MineralCategoriesList: Lifecycle Hooks */
/*****************************************************************************/
Template.MineralCategoriesList.onCreated(function () {
});

Template.MineralCategoriesList.onRendered(function () {
});

Template.MineralCategoriesList.onDestroyed(function () {
});
