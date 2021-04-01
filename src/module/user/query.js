const Query = {
    getMyProfile : ()=> ({
        id : 101,
        name : 'ketan',
        email : 'abc@aa.com'
    }),

    test :()=> 'this is test query!',
}

const userResolver = {
    Query
}
module.exports = userResolver;