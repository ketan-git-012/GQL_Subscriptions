// const { find } = require('core-js/core/array');
const { argsToArgsConfig } = require('graphql/type/definition');
const { Subscription , NEW_TRAINEE } = require('./subscriptions');
const {trainee} = require('./../../service/user');

import psb from './../pubsub';

const Mutation = {
    createTrainee: (root, args, {pubSub}, info)=>{
       
        const user =  trainee.create({
            firstname : args.firstname,
            lastname : args.lastname,
            email : args.email
        })

        psb.publish(NEW_TRAINEE, {
            addTrainee : {
                id : user,
                firstname : args.firstname,
                lastname : args.lastname,
                email : args.email
            }
        })

        return user

    
},
    updateTrainee : (root, args, context, info)=>{
        
        const traineeData = trainee.get(args.traineeId);
        console.log("get by id trainee:", traineeData);

        if(!traineeData){
            return "could'nt find trianee with id ",args.traineeId;
        }
        if(args.firstname !== undefined){
            traineeData.firstname = args.firstname;
        }
        if(args.lastname !== undefined){
            traineeData.lastname = args.lastname;
        }
        if(args.email !== undefined){
            traineeData.email = args.email;
        }
        trainee.update(traineeData)
        return traineeData
    },
    deleteTrainee : (root, args, context, info)=>{
        trainee.delete(args.traineeId);
        return `${args.traineeId} Deleted`;
    }
}

module.exports = Mutation;