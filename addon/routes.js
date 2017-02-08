import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // route map
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', function() {
    this.route('edit');
  });

});
