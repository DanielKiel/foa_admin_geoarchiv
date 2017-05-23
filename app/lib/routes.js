Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});


Router.onBeforeAction(function(){

    if (! localStorage.getItem('token')) {
       this.redirect('/');
    }
    else {
        this.next();
    }
}, {
    except: [
        'home'
    ]
});


Router.route('/', {
    name: 'home',
    controller: 'HomeController',
    where: 'client'
});

//articles
Router.route('/articles/insert', {
    name: "articles.insert",
    controller: "ArticlesController",
    where: 'client',
    action: "insert"
});

Router.route('/articles/update', {
    name: "articles.update",
    controller: "ArticlesController",
    where: 'client',
    action: "update"
});

Router.route('/articles/list', {
    name: "articles.list",
    controller: "ArticlesController",
    where: 'client',
    action: "list"
});

Router.route('/articles/get', {
    name: "articles.get",
    controller: "ArticlesController",
    where: 'client',
    action: "get"
});

//categories
Router.route('/categories/insert', {
    name: "categories.insert",
    controller: "CategoriesController",
    where: 'client',
    action: "insert"
});

Router.route('/categories/update', {
    name: "categories.update",
    controller: "CategoriesController",
    where: 'client',
    action: "update"
});

Router.route('/categories/list', {
    name: "categories.list",
    controller: "CategoriesController",
    where: 'client',
    action: "list"
});

Router.route('/categories/get', {
    name: "categories.get",
    controller: "CategoriesController",
    where: 'client',
    action: "get"
});

//galleries
Router.route('/galleries/insert', {
    name: "galleries.insert",
    controller: "GalleriesController",
    where: 'client',
    action: "insert"
});

Router.route('/galleries/update', {
    name: "galleries.update",
    controller: "GalleriesController",
    where: 'client',
    action: "update"
});

Router.route('/galleries/list', {
    name: "galleries.list",
    controller: "GalleriesController",
    where: 'client',
    action: "list"
});

Router.route('/galleries/get', {
    name: "galleries.get",
    controller: "GalleriesController",
    where: 'client',
    action: "get"
});

//geocoordinates
Router.route('/geocoordinates/insert', {
    name: "geocoordinates.insert",
    controller: "GeoCoordinatesController",
    where: 'client',
    action: "insert"
});

Router.route('/geocoordinates/update', {
    name: "geocoordinates.update",
    controller: "GeoCoordinatesController",
    where: 'client',
    action: "update"
});

Router.route('/geocoordinates/list', {
    name: "geocoordinates.list",
    controller: "GeoCoordinatesController",
    where: 'client',
    action: "list"
});

Router.route('/geocoordinates/get', {
    name: "geocoordinates.get",
    controller: "GeoCoordinatesController",
    where: 'client',
    action: "get"
});

//links
Router.route('/links/insert', {
    name: "links.insert",
    controller: "LinksController",
    where: 'client',
    action: "insert"
});

Router.route('/links/update', {
    name: "links.update",
    controller: "LinksController",
    where: 'client',
    action: "update"
});

Router.route('/links/list', {
    name: "links.list",
    controller: "LinksController",
    where: 'client',
    action: "list"
});

Router.route('/links/get', {
    name: "links.get",
    controller: "LinksController",
    where: 'client',
    action: "get"
});

//locations
Router.route('/locations/insert', {
    name: "locations.insert",
    controller: "LocationsController",
    where: 'client',
    action: "insert"
});

Router.route('/locations/update', {
    name: "locations.update",
    controller: "LocationsController",
    where: 'client',
    action: "update"
});

Router.route('/locations/list', {
    name: "locations.list",
    controller: "LocationsController",
    where: 'client',
    action: "list"
});

Router.route('/locations/get', {
    name: "locations.get",
    controller: "LocationsController",
    where: 'client',
    action: "get"
});

//minerals
Router.route('/minerals/insert', {
    name: "minerals.insert",
    controller: "MineralsController",
    where: 'client',
    action: "insert"
});

Router.route('/minerals/update', {
    name: "minerals.update",
    controller: "MineralsController",
    where: 'client',
    action: "update"
});

Router.route('/minerals/list', {
    name: "minerals.list",
    controller: "MineralsController",
    where: 'client',
    action: "list"
});

Router.route('/minerals/get', {
    name: "minerals.get",
    controller: "MineralsController",
    where: 'client',
    action: "get"
});

//mineralcategories
Router.route('/mineralcategories/insert', {
    name: "mineralcategories.insert",
    controller: "MineralCategoriesController",
    where: 'client',
    action: "insert"
});

Router.route('/mineralcategories/update', {
    name: "mineralcategories.update",
    controller: "MineralCategoriesController",
    where: 'client',
    action: "update"
});

Router.route('/mineralcategories/list', {
    name: "mineralcategories.list",
    controller: "MineralCategoriesController",
    where: 'client',
    action: "list"
});

Router.route('/mineralcategories/get', {
    name: "mineralcategories.get",
    controller: "MineralCategoriesController",
    where: 'client',
    action: "get"
});

//mineralcolors
Router.route('/mineralcolors/insert', {
    name: "mineralcolors.insert",
    controller: "MineralColorsController",
    where: 'client',
    action: "insert"
});

Router.route('/mineralcolors/update', {
    name: "mineralcolors.update",
    controller: "MineralColorsController",
    where: 'client',
    action: "update"
});

Router.route('/mineralcolors/list', {
    name: "mineralcolors.list",
    controller: "MineralColorsController",
    where: 'client',
    action: "list"
});

Router.route('/mineralcolors/get', {
    name: "mineralcolors.get",
    controller: "MineralColorsController",
    where: 'client',
    action: "get"
});

//photos
Router.route('/photos/insert', {
    name: "photos.insert",
    controller: "PhotosController",
    where: 'client',
    action: "insert"
});

Router.route('/photos/update', {
    name: "photos.update",
    controller: "PhotosController",
    where: 'client',
    action: "update"
});

Router.route('/photos/list', {
    name: "photos.list",
    controller: "PhotosController",
    where: 'client',
    action: "list"
});

Router.route('/photos/upload', {
    name: "photos.upload",
    controller: "UploadsController",
    where: 'client',
    action: "upload"
});