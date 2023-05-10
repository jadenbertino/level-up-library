const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/**
 * Compiles SCSS files to CSS.
 * @returns {Stream} A stream of processed files.
 */
function buildSass() {
  return src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('./src/css'));
}

/**
 * Watches SCSS files for changes and compiles them to CSS.
 * @param {Function} done - Callback function to signal the completion of the task.
 */
function watchSass(done) {
  buildSass().on('end', () => {
    watch('./src/sass/**/*.scss', buildSass);
    done();
  });
}

// Gulp task registration
exports.buildSass = buildSass;
exports.watchSass = watchSass;
exports.default = exports.watchSass;