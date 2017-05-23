/*****************************************************************************/
/* MineralsList: Event Handlers */
/*****************************************************************************/
Template.MineralsList.events({

});

/*****************************************************************************/
/* MineralsList: Helpers */
/*****************************************************************************/
Template.MineralsList.helpers({
    settings: function() {
        return {
            collection: Minerals,
            fields: [
                "_id",
                "title",
                "hardness",
                "density_from",
                "density_to",
                "chemical_formula",
                "crystallsystem",
                "opacity",
                "strealcolor",
                "lustre",
                "naming",
                "synonyms",
                {
                    'key': 'mineral_category.name',
                    label: 'Mineral Category Name'
                },
                {
                    'key': 'poster_image.filename',
                    label: 'Poser Image',
                    fn: function (value) {
                        return new Spacebars.SafeString("<img width=80px; src=http://www.geo-archiv.de/photos/"+encodeURI(value)+">");
                    }
                }
            ],
            class: "table table-bordered table-hover"
        }
    }
});

/*****************************************************************************/
/* MineralsList: Lifecycle Hooks */
/*****************************************************************************/
Template.MineralsList.onCreated(function () {
});

Template.MineralsList.onRendered(function () {
});

Template.MineralsList.onDestroyed(function () {
});
