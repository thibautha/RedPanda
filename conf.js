var conf = {
  paths: {
    app: 'app',
    dist: 'dist',
    scripts: 'app/scripts',
    styles: 'app/styles',
    css: 'app/styles/css',
    sass: 'app/styles/sass',
    images: 'app/img',
    fonts: 'app/fonts'
  },
  stylesFormat: '.sass',
  compassConf: {
    usesCompass: false,
    configRbPath: 'path/to/config.rb'
  },
  scripts: {
    lib: {
      prefix: 'bower_components/',
      files: [
        'modernizr/modernizr.js'
      ]
    },
    custom: {
      prefix: 'app/scripts/',
      files: [
        'main.js'
      ]
    }
  },
  styles: {
    lib: {
      prefix: 'bower_components/',
      files: [
        'normalize.css/normalize.css'
      ]
    },
    custom: {
      prefix: 'app/styles/',
      files: []
    }
  }
};

module.exports = conf;
