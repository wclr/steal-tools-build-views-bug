
module.exports = function(grunt, config, prefix) {

    config = config || {}
    prefix = prefix || ''


    config.stealBuild = config.stealBuild || {}

    grunt.loadNpmTasks('steal-tools');

    config.stealBuild.test = {
        options: {
            system: {
                config: __dirname + "/stealconfig.js",
                main: "test",
                bundlesPath: 'dist/bundles',
                bundle: [
                    'module'
                ]
            },
            buildOptions: {
                bundleSteal: true
            }
        }
    }
    grunt.registerTask(prefix + 'build', ['stealBuild:test'])

    if (arguments.length == 1){
        grunt.initConfig(config)
    }

};