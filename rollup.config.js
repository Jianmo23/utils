import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import alias from 'rollup-plugin-alias';
import {version, repository} from './package.json';
// console.log(version, repository)

export default {
    input: './src/main.js',
    output: {
        file: './dist/index.js',
        format: 'umd',
        name: 'utils',
        globals: {}
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        json(),
        alias({
            src: './src',
            common: 'src/common/index.js'
        })
    ],
    external: []
}
