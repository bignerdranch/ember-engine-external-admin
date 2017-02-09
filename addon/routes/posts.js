import Ember from 'ember';

export default Ember.Route.extend({
  dataStore: Ember.inject.service(),
  model(){
    return [this.get('dataStore').createRecord("post", {title: "My Post", desc: "My description of post"})];
  }
});
