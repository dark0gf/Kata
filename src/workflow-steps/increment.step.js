const step = (input) =>  {
    return {...input, test: input.test + 1 };
};

module.exports = step;