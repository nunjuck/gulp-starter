import gulp from 'gulp';
import nunjucks from 'gulp-nunjucks-templates';
import config from '../config';

export const htmlBuild = () => (
  gulp.src(`${config.src.view}/pages/*.njk`)
    .pipe(nunjucks({
      path: config.src.view,
    }))
    .pipe(gulp.dest(config.dest.root))
);

export const htmlWatch = () => gulp.watch(`${config.src.view}/**/*.njk`, htmlBuild);
