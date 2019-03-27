var gulp = require('gulp'),
 	sass = require('gulp-sass'),
 	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');
    // watch = require('gulp-watch')

    // prefixer = require('gulp-autoprefixer'),
    // sourcemaps = require('gulp-sourcemaps'),
    // rigger = require('gulp-rigger'),
    // cssmin = require('gulp-minify-css'),
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // rimraf = require('rimraf'),

// gulp.task('mytask', function(done){
// 	console.log('hi');
// 	done();
// });

gulp.task('sass', function(){
	return gulp.src('app/sass/*.sass')
	.pipe(sass())
	.pipe(prefixer())
	.pipe(gulp.dest('app/css'))
	.pipe(cssmin())
    // .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('bild/css'));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
    .pipe(gulp.dest('bild'))
});

gulp.task('img', function () {
    return gulp.src('app/img/*')
        .pipe(gulp.dest('bild/img'))
});

gulp.task('script', function () {
    return gulp.src('app/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('bild/js'));
});

gulp.task('watch', function(){
	gulp.watch('app/*.html', gulp.series('html'));
	gulp.watch('app/sass/*.sass', gulp.series('sass'));
	gulp.watch('app/js/script.js', gulp.series('script'));
	gulp.watch('app/img/*', gulp.series('img'));
});