
System.config({

    map: {
        'can/util/util': 'can/util/jquery/jquery',
        'jquery/jquery': 'jquery'
    },

    paths: {

        //"bundles/*": "../bundles/*", // workaround for steal bug

        'jquery': "bower_components/jquery/dist/jquery.min.js",
        'can': 'bower_components/canjs/can.js',
        "can/*": "bower_components/canjs/*.js",
        'jquery/*':'bower_components/jquerypp/*.js'
    },
    meta: {
        'jquery': {exports: 'jQuery'}
    },

    ext: {
        mustache: "can/view/mustache/system"
    }

});

System.buildConfig = {map: {"can/util/util" : "can/util/domless/domless"}};

