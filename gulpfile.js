const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildSass() {
  return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./src/css'));
}

const _watchSass = () => watch('./src/scss/**/*.scss', buildSass);
const watchSass = series(buildSass, _watchSass);

// Gulp task registration
exports.buildSass = buildSass;
exports.watchSass = watchSass;
exports.default = exports.watchSass;