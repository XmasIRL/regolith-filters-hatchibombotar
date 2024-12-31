const fs = require("fs")
const glob = require("glob")

const config = fs.existsSync(`data/pack_commons/commons.json`) ? JSON.parse(fs.readFileSync(`data/pack_commons/commons.json`)) : {"common_files": []}

glob("data/pack_commons/**/!(commons.json)", null, function (err, files) {
    for (path of files) {
        fs.cpSync(path, `BP/${path}`, {recursive: true})
        fs.cpSync(path, `RP/${path}`, {recursive: true})
    }
})

for (file of config.common_files) {
    const path = `../../${file}`
    fs.cpSync(path, `BP/${path}`, {recursive: true})
    fs.cpSync(path, `RP/${path}`, {recursive: true})
}
