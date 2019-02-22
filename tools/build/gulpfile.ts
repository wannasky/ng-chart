const gulp = require('gulp');
const rename = require('gulp-rename');
const highlight = require('gulp-highlight-files');
const markdown = require('gulp-markdown');
const transform = require('gulp-transform');
const hljs = require('highlight.js');

const config = {

  // 资源文件目录
  assets: 'demo/src/assets',

  // md文件
  mdPath: 'demo/src/app/example/*/**/*.md',

  // md插入示例组件正则
  examplePattern: /<!--\W*example\(([^)]+)\)\W*-->/g,

  // example文件
  exampleFilePath: 'demo/src/app/example/*/**/*.+(html|scss|ts)'
};

const markdownOptions = {
  highlight: (code: string, language: string): string => {
    if (language) {
      const lang = language.toLowerCase() === 'ts' ? 'typescript' : language;
      return hljs.highlight(lang, code).value;
    }
    return code;
  }
};


gulp.task('markdown-file', () => {
  return gulp.src(config.mdPath)
    .pipe(markdown(markdownOptions))
    .pipe(transform(transformMarkdownFiles))
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.assets));
});

gulp.task('highlight-example', () => {
  return gulp.src(config.exampleFilePath)
    .pipe(rename(exampleFileRename))
    .pipe(highlight())
    .pipe(gulp.dest(config.assets));
});

gulp.task('watch-markdown', () => {
  gulp.watch(config.mdPath, gulp.series('markdown-file'));
  gulp.watch(config.exampleFilePath, gulp.series('highlight-example'));
});

// 编译markdown（.md）至静态资源目录（assets）
gulp.task('markdown', gulp.series('markdown-file', 'highlight-example', 'watch-markdown'));

function exampleFileRename(filePath: any) {
  const extname = filePath.extname.slice(1);
  filePath.basename = `${filePath.basename}-${extname}`;
}

function transformMarkdownFiles(buffer: Buffer): Buffer {
  let content = buffer.toString('utf-8');

  // 替换组件示例代码
  content = content.replace(config.examplePattern, (_match: string, name: string) => {
    return `<div demo-component-example="${name}"></div>`;
  });

  content = `<div class="component-markdown">${content}</div>`;

  return new Buffer(content);

}
