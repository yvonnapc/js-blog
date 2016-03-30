import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    },
    update(post, params){
      this.sendAction('update', post, params);
    },
    delete(post){
      if(confirm("Delete?")){
        this.sendAction('destroyPost', post);
      }
    }
  }
});
