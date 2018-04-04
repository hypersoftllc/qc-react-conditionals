/* eslint-env node */
const fse = require('fs-extra')
const path = require('path')

const babel = require('babel-core')


function makeOutputFileCallback(outputFilename) {
  return function (err, result) {
    if (err) {
      console.error(err)
    }
    fse.outputFileSync(outputFilename, result.code, { encoding: 'utf8' })
  }
}

const fileInfoList = [
  { inName: 'index.js' },
  { inName: 'Case.jsx', outName: { cjs: 'Case.js' } },
  { inName: 'Else.jsx', outName: { cjs: 'Else.js' } },
  { inName: 'If.jsx', outName: { cjs: 'If.js' } },
  { inName: 'Then.jsx', outName: { cjs: 'Then.js' } },
  { inName: 'When.jsx', outName: { cjs: 'When.js' } },
]

fileInfoList.forEach((fileInfo) => {
  let { inName, outName } = fileInfo

  outName = (outName || {}).cjs || inName
  let inputFilename = path.resolve(__dirname, `../src/${inName}`)
  let outputFilename = path.resolve(__dirname, `../build/lib/${outName}`)
  let callback = makeOutputFileCallback(outputFilename)
  babel.transformFile(inputFilename, callback)
})

fileInfoList.forEach((fileInfo) => {
  let { inName, outName } = fileInfo

  outName = (outName || {}).es || inName
  let inputFilename = path.resolve(__dirname, `../src/${inName}`)
  let outputFilename = path.resolve(__dirname, `../build/${outName}`)
  fse.copy(inputFilename, outputFilename)
})
