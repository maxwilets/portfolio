var bandList = require('./bands.js')

for (var key in bandList.bands) {
    console.log('A' + key + 'band' + bandList[key]  )
}

