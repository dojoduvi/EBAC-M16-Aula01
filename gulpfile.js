const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function funcaoPadrao(callback){
    setTimeout(function(){

        console.log("executando GULP");
        callback();
    },2000)
}

function dizOi(callback){
    console.log("Olá GULP");
    dizXau();
    callback();
}

function dizXau(){
    console.log("Xau GULP");
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.oi = dizOi;