/**
 * Created by Emil Atanasov
 */
//
//var tweenMovieClip = function(from,to,target,ease) {
//    if (!ease) ease = Linear.easeNone;
//    target.gotoAndStop(from);
//    var obj = {frame:from};
//    var dur = Math.abs( (to-from)/lib.properties.fps);
//    return TweenMax.to(obj,dur,{frame:to,roundProps:'frame',
//        ease:ease,onUpdate:function() {
//            target.gotoAndStop(obj.frame);
//        }});
//
//}

var TWEEN_MAX = true;
var canvas, stage, exportRoot;

function init() {
    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    exportRoot = new lib.assets();
    if(TWEEN_MAX) {
        exportRoot.gotoAndStop(0);
    }

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    if(TWEEN_MAX) {
        //tweenMovieClip(0, 115, exportRoot, null).yoyo(true).repeat(-1);
        exportRoot.gotoAndPlay(80);
    }
}
