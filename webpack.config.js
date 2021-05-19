const path = require('path');
const fs = require('fs');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

    const fontWeight = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        Regular:  400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
        ExtraBlack: 950
    }
       
    const fontParam = (value) => {
        let arr = value.split("-");
        if(arr[1] === 'Italic') {
            arr[1] = "Regular";
            arr.push("Italic");
        }else {
            if(arr[1].search("Italic") != -1) {
                const newItem = arr[1].replace("Italic","");
                arr.pop();
                arr.push(newItem, "Italic");
            }else {
                arr.push("normal");
            }
        }
        return obj = {
            arr: arr
        };
    }

const fontsStyle = () => {
    const fileContent = fs.readFileSync(path.resolve(__dirname, 'resources') + '/sass/fonts.scss');
        fs.writeFile(path.resolve(__dirname, 'resources') + '/sass/fonts.scss', '', cb);
        fs.appendFile(
            path.resolve(__dirname, 'resources') + '/sass/fonts.scss',
            '@use "1-abstracts/fontFace";\r\n', cb
        );
        return fs.readdir(path.resolve(__dirname, 'resources') + '/fonts', (err, items) => {
            if(items) {
                let c_fontName;
                for(let i = 0; i < items.length; i++) {
                    let fontName = items[i].split('.');
                    fontName = fontName[0];
                    if(c_fontName != fontName) {
                        font = fontParam(fontName);
                        fs.appendFile(
                            path.resolve(__dirname, 'resources') + '/sass/fonts.scss', 
                            '@include fontFace.font("' + font.arr[0] + '", "' + fontName + '", "'+ fontWeight[font.arr[1]]  +'", "'+ font.arr[2] +'");\r\n', 
                            cb)
                    }
                    c_fontName = fontName;
                    
                }
            }
               
        })
}

const cb = () => {};

fontsStyle();

let mode = "development";

mode = (process.env.NODE_ENV === "production") ? "production" : "development";

module.exports = {
    context: path.resolve(__dirname, 'resources'),
    mode: mode,
    devtool: "source-map",
    entry: {
        main : './js/index.js',
        style: './sass/style.scss',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'resources') + '/fonts',
                    to: path.resolve(__dirname, 'public') + '/fonts' 
                },

                {
                    from: path.resolve(__dirname, 'node_modules') + '/@fortawesome/fontawesome-free/webfonts',
                    to: path.resolve(__dirname, 'public') + '/fonts'
                }
            ],
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: '/node_modules/',
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    }
}