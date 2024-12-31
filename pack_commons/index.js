const fs = require("fs")
const glob = require("glob")
const path = require('path')

const config = fs.existsSync(`data/pack_commons/commons.json`) ? JSON.parse(fs.readFileSync(`data/pack_commons/commons.json`)) : {"common_files": []}

glob("data/pack_commons/**/!(commons.json)", null, function (err, files) {
    for (const file of files) {
        const filepath = path.relative('data/pack_commons/',file);
        fs.cpSync(filepath, `BP/${filepath}`, {recursive: true})
        fs.cpSync(filepath, `RP/${filepath}`, {recursive: true})
    }
})

for (file of config.common_files) {
    fs.cpSync(file, `BP/${file}`, {recursive: true})
    fs.cpSync(file, `RP/${file}`, {recursive: true})
}
