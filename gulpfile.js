"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  gutil = require('gulp-util'),
  ngAnnotate = require('gulp-ng-annotate'),
  templateCache = require('gulp-angular-templatecache'),
  runSequence = require('run-sequence'),
  connect = require('gulp-connect'),
  inject = require('gulp-inject'),
  angularFilesort = require('gulp-angular-filesort'),
  gopen = require('gulp-open'),
  wiredep = require('wiredep'),
  chalk = require('chalk'),
  argv = require('optimist').argv,
  execAsync = require('child_process').exec,
  historyFallback = require('connect-history-api-fallback'),
  Karma = require('karma').Server,
  sass = require('gulp-sass');

var config = {
  paths: {
    karma: __dirname + '/karma.conf.js',
    views: ['./app/**/*.html', '!./app/index.html'],
    sass: './app/main/main.scss',
    build: './build',
    index: './app/index.html',
    source: ['./app/**/*', '!./app/**/*spec.js'],
    watch: './app/**/*'
  },
  ports: {
    livereload: argv.livereloadport || 36000,
    connect: argv.connectport || 9100
  }
};

gulp.task('karma', function(cb) {
  new Karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    autoWatch: false
  }, function() {
    cb();
  }).start();
});

gulp.task('open', function() {
  gulp
    .src('')
    .pipe(gopen({
      uri: 'https://localhost:' + config.ports.connect
    }));
});


gulp.task('build', function() {
  execAsync('rm -rf ' + __dirname + '/build/*', function(err) {
    runSequence(
      'copy-assets',
      'build-sass',
      'build-fonts',
      'build-templates',
      'bower',
      'inject'
    );
  });
});


gulp.task('copy-assets', function() {
  return gulp
    .src(config.paths.source.concat(config.paths.index))
    .pipe(gulp.dest(config.paths.build))
});

// sass compilations
gulp.task('build-sass', function() {
  return gulp.src(config.paths.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.build))
})

// Builds templates files into on $templateCache module
gulp.task('build-templates', function() {
  return gulp.src(config.paths.views)
    .pipe(templateCache('templates.js', {
      module: 'templates',
      standalone: true
    }))
    .pipe(ngAnnotate())
    .pipe(gulp.dest(config.paths.build))
})

gulp.task('build-fonts', function() {
  return gulp.src('./vendor/mdi/fonts/**/*')
             .pipe(gulp.dest(config.paths.build + '/fonts'))
})

gulp.task('inject', function() {
  var target = gulp.src(config.paths.build + '/index.html')

  var appJsAssets = gulp.src([config.paths.build + '/**/*.js',
    '!' + config.paths.build + '/**/*vendor*.*'
  ])

  var appCssAssets = gulp.src([config.paths.build + '/**/*.css',
    '!' + config.paths.build + '/**/vendor*.*'
  ], {
    read: false
  })

  var vendorAssets = gulp.src([config.paths.build + '/**/*vendor*.*'])

  return target
    .pipe(inject(vendorAssets, {
      relative: true,
      starttag: '<!-- inject:vendor:{{ext}} -->'
    }))
    .pipe(inject(appCssAssets, {
      relative: true,
      starttag: '<!-- inject:app:{{ext}} -->'
    }))
    .pipe(inject(appJsAssets, {
      relative: true,
      starttag: '<!-- inject:app:{{ext}} -->'
    }))
    .pipe(gulp.dest(config.paths.build))
})

gulp.task('bower', function() {
  return gulp
    .src(wiredep().js)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.paths.build));
});



gulp.task('connect-watch', function() {
  var sourceWatcher = gulp.watch(config.paths.watch);
  sourceWatcher.on('change', function() {
    execAsync('rm -rf ' + __dirname + '/build/*', function(err) {
      runSequence(
        'copy-assets',
        'build-sass',
        'build-fonts',
        'build-templates',
        'bower',
        'inject',
        'karma',
        'connect-reload'
      );
    });
  });
});

// connect reload
gulp.task('connect-reload', function() {
  return gulp
    .src(config.paths.build)
    .pipe(connect.reload());
});

function connectAccessLog(req, res, next) {
  gutil.log(chalk.yellow(req.method, req.url, 'HTTPS/' + req.httpVersion, res.statusCode));
  next();
}

// connect server
gulp.task('connect-server', function() {
  connect.server({
    port: config.ports.connect,
    root: config.paths.build,
    https: true,
    livereload: {
      port: config.ports.livereload
    },
    middleware: function(connect, opt) {
      return [connectAccessLog, historyFallback()];
    }
  });
});

gulp.task('serve', function() {
  runSequence(
    'connect-server',
    'connect-watch'
  );
});

gulp.task('default', ['build', 'karma', 'serve', 'open']);
