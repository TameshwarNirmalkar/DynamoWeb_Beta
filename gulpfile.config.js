'use strict';
var GulpConfig = (function () {
    function gulpConfig() {

        // Prequisites
        this.source        =    './src/';
        this.build         =    './dist/';
        this.sourceApp     =    this.source + 'app/';

        // Compile Paths
        this.tsOutputPath   =   this.build  + '/js';
        this.listFilesTS    =   this.source + '/**/*.ts';
        this.listFilesSCSS  =   this.source + '/**/*+(scss|sass|css)';
        this.listFilesHTML  =   this.source + '/**/*.html';
        this.listFilesJS    =   this.source + '/**/*.js';

        // Typings
        this.typings       = './tools/typings/';
        this.libraryTypeScriptDefinitions = './tools/typings/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;