var videosURL='mongodb://rw:rw-2015@ds039484.mongolab.com:39484/wix';
var videosDriver = new MongoInternals.RemoteCollectionDriver(videosURL);
Videos = new Mongo.Collection("videos", { _driver: videosDriver });

if(Meteor.isServer) {
    Meteor.publish('videos', function(){
        return Videos.find();
    });
}


