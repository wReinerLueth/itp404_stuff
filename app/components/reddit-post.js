import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
    actions: {
        changeScore(score){
            let originalScore = this.get('val.data.score');
            if(score > originalScore){
                $('.fa fa-arrow-up').prop("onclick", null);
                $('.fa fa-arrow-down').prop("onclick", 'down()');
            }
            else{
                $('.fa fa-arrow-up').prop("onclick", 'up()');
                $('.fa fa-arrow-down').prop("onclick", null);
            }
            this.set('val.data.score', score);
        }
    }
});
