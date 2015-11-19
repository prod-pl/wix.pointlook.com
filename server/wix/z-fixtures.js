if(Meteor.isServer) {
    var videoStub = {
        title: 'SlopePurple',
        mp4Url: 'https://s3.amazonaws.com/assets.pointlook.com/public/videos/action-with-people/SlopePurple.mp4',
        webmUrl: 'https://s3.amazonaws.com/assets.pointlook.com/public/videos/action-with-people/SlopePurple.webm',
        text: 'This is a winter ski video',
        iheart: false,
        viewcount: 0
    }

    var videosNumber = Videos.find().count();

    if(!videosNumber) {
        Videos.insert(videoStub);
        console.log('Inserted videos');
    }
}
