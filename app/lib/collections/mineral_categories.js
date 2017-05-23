MineralCategories = new Mongo.Collection('mineral_categories');

if (Meteor.isServer) {
    // Meteor.publish('mineral_categories', function() {
    //     return MineralCategories.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'MineralCategories', 'mineral_categories', localStorage.getItem('token'));
    // Meteor.subscribe('mineral_categories');
}

// if (Meteor.isServer) {
//   MineralCategories.allow({
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
//   MineralCategories.deny({
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
