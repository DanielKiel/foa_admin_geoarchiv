Photos = new Mongo.Collection('photos');


if (Meteor.isClient) {
    // Meteor.startup(function(){
    //     Meteor.call('fetchObjectsAndSave', 'Photos', 'photos', localStorage.getItem('token'));
    // });
    //
    // Meteor.subscribe('photos');
    Meteor.subscribe('fetchObjects', 'Photos', 'photos', localStorage.getItem('token'));
}

if (Meteor.isServer) {
    // Meteor.publish('photos', function() {
    //     return Photos.find();
    // });
}

// if (Meteor.isServer) {
//   Photos.allow({
//     insert: function (userId, doc) {
//       return false;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },
//
//     remove: function (userId, doc) {
//       return false;
//     }
//   });
//
//   Photos.deny({
//     insert: function (userId, doc) {
//       return true;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },
//
//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }
