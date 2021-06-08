module.exports = (api, options ) => {

    const fs = require('fs')

    api.render('./template', {...options})


}