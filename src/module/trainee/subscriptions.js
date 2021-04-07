const { isAsyncIterable } = require('@graphql-tools/utils');

import psb from './../pubsub';

const NEW_TRAINEE = 'NEW_TRAINEE'
const Subscription = {
    addTrainee : {
        subscribe : () => psb.asyncIterator(NEW_TRAINEE)
    }
}

module.exports = {
    Subscription, NEW_TRAINEE
};