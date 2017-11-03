const compressor = require('node-minify')
const fs = require('fs')

const dirs = ['./dist', './dist/images']

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }
})

const assets = [
    { input: './src/images/avatar.jpeg', output: './dist/images/avatar.jpeg' },
    { input: './src/images/logo.svg', output: './dist/images/logo.svg' },
    { input: './src/index.html', output: './dist/index.html' }
];

assets.forEach(asset => fs.createReadStream(asset.input).pipe(fs.createWriteStream(asset.output)))

compressor.minify({
    compressor: 'gcc',
    input: './src/js/index.js',
    output: './dist/js/index.js',
    callback: (err, min) => { }
})

compressor.minify({
    compressor: 'clean-css',
    input: './src/styles/global.css',
    output: './dist/styles/global.css',
    options: {
        advanced: true,
        aggressiveMerging: false
    },
    callback: (err, min) => { }
})