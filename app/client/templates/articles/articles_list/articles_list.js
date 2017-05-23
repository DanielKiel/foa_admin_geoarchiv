/*****************************************************************************/
/* ArticlesList: Event Handlers */
/*****************************************************************************/
Template.ArticlesList.events({
});

/*****************************************************************************/
/* ArticlesList: Helpers */
/*****************************************************************************/
Template.ArticlesList.helpers({

    settings: function() {
        return {
            collection: Articles,
            fields: [
                "_id",
                "headline"
            ],
            class: "table table-bordered table-hover"
        }
    }

});

/*****************************************************************************/
/* ArticlesList: Lifecycle Hooks */
/*****************************************************************************/
Template.ArticlesList.onCreated(function () {
});

Template.ArticlesList.onRendered(function () {
});

Template.ArticlesList.onDestroyed(function () {
});
