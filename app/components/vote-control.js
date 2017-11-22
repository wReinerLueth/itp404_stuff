import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        up(score){
            score += 1;
            this.get('onvote')(score);
        },
        down(score){
            score -= 1;
            this.get('onvote')(score);
        }
    }
});
