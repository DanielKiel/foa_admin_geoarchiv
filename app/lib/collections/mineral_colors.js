MineralColors = new Mongo.Collection('mineral_colors');

if (Meteor.isServer) {
    // Meteor.publish('mineral_colors', function() {
    //     return MineralColors.find();
    // });
}

if (Meteor.isClient) {
    Meteor.subscribe('fetchObjects', 'MineralColors', 'mineral_colors', localStorage.getItem('token'));
    //Meteor.subscribe('mineral_colors');
}

// if (Meteor.isServer) {
//   MineralColors.allow({
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
//   MineralColors.deny({
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
