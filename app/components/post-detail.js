import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post){
      if(confirm("Delete?")){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
