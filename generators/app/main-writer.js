'use strict';

let changerTemplateWriter = require('./changer/changer-template-writer');

module.exports = {
    changeTemplates
};

function changeTemplates(generator) {

    changerTemplateWriter.write(generator);

}
