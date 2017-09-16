/**
 * Created by rajab on 5/28/2017.
 */
const Controller = require('bak/lib/controller');
const { Word, Deck } = require('../../models');
const Boom = require('boom');
class PublicController extends Controller {

    constructor() {
        super({
            models: {Deck, Word},
            default: {}
        });
    }

    async decks(request, reply) {
        const decks = Deck.find({}).populate('words');
        reply(decks);
    }

    async deck_$id(request, reply, { id }) {
        const deck = Deck.findOne({_id: id}).populate('words');
        reply(deck);
    }
}

module.exports = PublicController;