import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changeScore(score){
            console.log("reddit-post: " + score);
            this.set('score', score);
        }
    }
});
