var widgets = FlowRouter.group({
  prefix: '/widgets'
});

// http://app.com/widgets
widgets.route( '/', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      header: 'wixwidgetheader',
      video: 'wixwidgetvideo',
      text: 'wixwidgettext',
      footer: 'wixwidgetfooter'
    });
  },
});

// http://app.com/widgets/:_id
widgets.route( '/:_id', {
  action: function() {
    console.log( "We're viewing a single document." );
  }
});

// http://app.com/widgets/:_id/edit
widgets.route( '/:_id/edit', {
  action: function() {
    console.log( "We're editing a single document." );
  }
});
