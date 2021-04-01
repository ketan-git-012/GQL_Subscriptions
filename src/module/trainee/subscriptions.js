const { isAsyncIterable } = require('@graphql-tools/utils');
const { PubSub } =require('apollo-server-express');

const psb = new PubSub();

const NEW_TRAINEE = 'NEW_TRAINEE'
const Subscription = {
    addTrainee : {
        subscribe : () => psb.asyncIterator([NEW_TRAINEE])
    }
}

module.exports = {
    Subscription, NEW_TRAINEE
};