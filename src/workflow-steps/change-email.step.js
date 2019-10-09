const step = (input, args) =>  {
    return {...input, email: args.email};
};

module.exports = step;