/*****************************************************************************/
/* CategoriesList: Event Handlers */
/*****************************************************************************/
Template.CategoriesList.events({
});

/*****************************************************************************/
/* CategoriesList: Helpers */
/*****************************************************************************/
Template.CategoriesList.helpers({

    settings: function() {
        return {
            collection: Categories,
            fields: [
                "_id",
                "title",
                "headline"
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* CategoriesList: Lifecycle Hooks */
/*****************************************************************************/
Template.CategoriesList.onCreated(function () {
});

Template.CategoriesList.onRendered(function () {
});

Template.CategoriesList.onDestroyed(function () {
});
