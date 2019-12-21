const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const babel = require("gulp-babel");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function markup() {
	return src("src/index.html").pipe(dest("dist"));
}

function style() {
	const plugins = [
		autoprefixer(["last 3 versions", "ie 10", "ie 11"]),
		cssnano()
	];

	return src("src/styles/main.scss")
		.pipe(sass())
		.pipe(concat("main.css"))
		.pipe(postcss(plugins))
		.pipe(dest("dist/css"));
}

function script() {
	return src("src/scripts/**/*.js")
		.pipe(concat("main.js"))
		.pipe(
			babel({
				presets: ["@babel/env"]
			})
		)
		.pipe(dest("dist/js"));
}

function img() {
	return src("src/images/*").pipe(dest("dist/img"));
}

function watcher() {
	watch("src/styles/**/*.scss", style);
	watch("src/scripts/**/*.js", script);
	watch("src/index.html", markup);
	watch("src/images/*", img);
}

exports.default = series(markup, style, script, img, watcher);
