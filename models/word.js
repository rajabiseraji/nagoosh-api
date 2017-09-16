const {Schema} = require('mongoose');
const {Model} = require('bak');

class Word extends Model{
    
    static get $schema() {
        let defenitionSchema = new Schema({
            type: {type: String, enum: ['noun', 'verb', 'adjective', 'adverb', 'preposition'], required: true},
            text: {type: String, required: true},
            example: {type: String, required: true}, //This field is for setting quantity of the available food in the restaurant,
        });
        return {
            word: {type: String, required: true},
            status: {type: String, enum: ['New Word', 'Mastered', 'Reviewing', 'Unknown'], required: true},
            defenitions: [defenitionSchema]
        }
    }
}

module.exports = Word.$model;
