Videos = new Mongo.Collection('videos');

if (Meteor.isClient) {
    Meteor.subscribe ('videos');
}

Template.wixwidgetvideo.helpers({
    videosList: function(){
        return Videos.find().fetch();
    }
});


