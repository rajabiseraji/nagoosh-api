const {Schema} = require('mongoose');
const {Model} = require('bak');

class Deck extends Model{

    static get $schema() {
        return {
            level: {type: String, required: true},
            words: [{type: Schema.Types.ObjectId, ref: 'Word'}],
            progress: {type: Number, required: true, default: 0}
        }
    }
}

module.exports = Deck.$model;
