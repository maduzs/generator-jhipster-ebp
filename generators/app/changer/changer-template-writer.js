'use strict';

const jhipsterConstants = require('generator-jhipster/generators/generator-constants');
const jhipsterUtils = require('generator-jhipster/generators/utils');

module.exports = {
    write
};

function write(generator) {

    var entitiesToChange = generator.config.get('entitiesToChange');

    if (entitiesToChange) {
        generator.log('Entities to change: ' + entitiesToChange);

        for (var i = 0; i < entitiesToChange.length; i++) {

            var entityName = entitiesToChange[i];

            const path = `${jhipsterConstants.CLIENT_MAIN_SRC_DIR}` + 'app/entities/' + entityName + '/' + entityName + '.component.html';

            // file content
            const pattern = generator.fs.read(path);

            // prefix
            const prefix = '<div id="content">\n<div class="row">\n</div>';

            // suffix
            const suffix = '</div>';

            if (!pattern.substring(0, 20)
                    .includes('<div id="content">')) {

                jhipsterUtils.replaceContent({
                    file: path,
                    pattern: pattern,
                    content: prefix + pattern + suffix,
                    regex: false
                }, generator);
            }
        }
    }
    else {
        generator.error('No entities to change provided! Please specify entities into app file: ' +
            '\n .yo-rc.json \n ' +
            '"generator-jhipster-ebp": {\n' +
            '    "entitiesToChange": []\n' +
            '  }');
    }

}
