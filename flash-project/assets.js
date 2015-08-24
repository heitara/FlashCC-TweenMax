(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bigWin.png", id:"bigWin"}
	]
};



// symbols:



(lib.bigWin = function() {
	this.initialize(img.bigWin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,515,157);


(lib.bigWinTitle = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bigWin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,515,157);


// stage content:
(lib.assets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// titles
	this.instance = new lib.bigWinTitle();
	this.instance.setTransform(275,200,0.185,0.185,0,0,0,257.4,78.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
		regX: 257.5,
		scaleX: 0.19,
		scaleY: 0.19,
		alpha: 0.003
	}, 0).wait(1).to({scaleX: 0.19, scaleY: 0.19, alpha: 0.007}, 0).wait(1).to({
		scaleX: 0.2,
		scaleY: 0.2,
		alpha: 0.01
	}, 0).wait(1).to({scaleX: 0.2, scaleY: 0.2, alpha: 0.015}, 0).wait(1).to({
		scaleX: 0.21,
		scaleY: 0.21,
		alpha: 0.019
	}, 0).wait(1).to({scaleX: 0.21, scaleY: 0.21, alpha: 0.024}, 0).wait(1).to({
		scaleX: 0.22,
		scaleY: 0.22,
		alpha: 0.029
	}, 0).wait(1).to({scaleX: 0.23, scaleY: 0.23, alpha: 0.035}, 0).wait(1).to({
		scaleX: 0.23,
		scaleY: 0.23,
		alpha: 0.042
	}, 0).wait(1).to({scaleX: 0.24, scaleY: 0.24, alpha: 0.048}, 0).wait(1).to({
		scaleX: 0.25,
		scaleY: 0.25,
		alpha: 0.056
	}, 0).wait(1).to({scaleX: 0.26, scaleY: 0.26, alpha: 0.064}, 0).wait(1).to({
		scaleX: 0.27,
		scaleY: 0.27,
		alpha: 0.073
	}, 0).wait(1).to({scaleX: 0.28, scaleY: 0.28, alpha: 0.083}, 0).wait(1).to({
		scaleX: 0.3,
		scaleY: 0.3,
		alpha: 0.095
	}, 0).wait(1).to({scaleX: 0.31, scaleY: 0.31, alpha: 0.107}, 0).wait(1).to({
		scaleX: 0.33,
		scaleY: 0.33,
		alpha: 0.12
	}, 0).wait(1).to({scaleX: 0.34, scaleY: 0.34, alpha: 0.136}, 0).wait(1).to({
		scaleX: 0.36,
		scaleY: 0.36,
		alpha: 0.153
	}, 0).wait(1).to({scaleX: 0.39, scaleY: 0.39, alpha: 0.173}, 0).wait(1).to({
		scaleX: 0.41,
		scaleY: 0.41,
		alpha: 0.196
	}, 0).wait(1).to({scaleX: 0.45, scaleY: 0.45, alpha: 0.223}, 0).wait(1).to({
		scaleX: 0.48,
		scaleY: 0.48,
		alpha: 0.256
	}, 0).wait(1).to({scaleX: 0.53, scaleY: 0.53, alpha: 0.297}, 0).wait(1).to({
		scaleX: 0.59,
		scaleY: 0.59,
		alpha: 0.349
	}, 0).wait(1).to({scaleX: 0.67, scaleY: 0.67, alpha: 0.416}, 0).wait(1).to({
		scaleX: 0.77,
		scaleY: 0.77,
		alpha: 0.497
	}, 0).wait(1).to({scaleX: 0.86, scaleY: 0.86, x: 274.9, alpha: 0.576}, 0).wait(1).to({
		scaleX: 0.93,
		scaleY: 0.93,
		alpha: 0.638
	}, 0).wait(1).to({scaleX: 0.99, scaleY: 0.99, alpha: 0.687}, 0).wait(1).to({
		scaleX: 1.03,
		scaleY: 1.03,
		alpha: 0.726
	}, 0).wait(1).to({scaleX: 1.07, scaleY: 1.07, x: 275, alpha: 0.757}, 0).wait(1).to({
		scaleX: 1.1,
		scaleY: 1.1,
		alpha: 0.784
	}, 0).wait(1).to({scaleX: 1.13, scaleY: 1.13, alpha: 0.807}, 0).wait(1).to({
		scaleX: 1.15,
		scaleY: 1.15,
		alpha: 0.827
	}, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, alpha: 0.844}, 0).wait(1).to({
		scaleX: 1.19,
		scaleY: 1.19,
		alpha: 0.86
	}, 0).wait(1).to({scaleX: 1.21, scaleY: 1.21, alpha: 0.874}, 0).wait(1).to({
		scaleX: 1.22,
		scaleY: 1.22,
		alpha: 0.887
	}, 0).wait(1).to({regX: 257.4, scaleX: 1.24, scaleY: 1.24, x: 274.9, alpha: 0.898}, 0).wait(1).to({
		regX: 257.5,
		scaleX: 1.2,
		scaleY: 1.2,
		x: 275.1,
		alpha: 0.918
	}, 0).wait(1).to({scaleX: 1.17, scaleY: 1.17, alpha: 0.934}, 0).wait(1).to({
		scaleX: 1.15,
		scaleY: 1.15,
		alpha: 0.948
	}, 0).wait(1).to({scaleX: 1.12, scaleY: 1.12, alpha: 0.96}, 0).wait(1).to({
		scaleX: 1.1,
		scaleY: 1.1,
		x: 275.2,
		alpha: 0.97
	}, 0).wait(1).to({scaleX: 1.09, scaleY: 1.09, alpha: 0.979}, 0).wait(1).to({
		scaleX: 1.07,
		scaleY: 1.07,
		alpha: 0.987
	}, 0).wait(1).to({scaleX: 1.06, scaleY: 1.06, alpha: 0.994}, 0).wait(1).to({
		regX: 257.6,
		scaleX: 1.05,
		scaleY: 1.05,
		x: 275.1,
		alpha: 1
	}, 0).wait(49).to({regX: 257.5, scaleX: 0.97, scaleY: 0.97, x: 275, y: 167}, 0).wait(1).to({
		scaleX: 0.89,
		scaleY: 0.89,
		y: 137.8
	}, 0).wait(1).to({scaleX: 0.83, scaleY: 0.83, y: 115}, 0).wait(1).to({
		scaleX: 0.79,
		scaleY: 0.79,
		y: 98.9
	}, 0).wait(1).to({scaleX: 0.76, scaleY: 0.76, y: 88.1}, 0).wait(1).to({
		scaleX: 0.74,
		scaleY: 0.74,
		y: 80.9
	}, 0).wait(1).to({scaleX: 0.73, scaleY: 0.73, y: 76}, 0).wait(1).to({
		scaleX: 0.72,
		scaleY: 0.72,
		y: 72.5
	}, 0).wait(1).to({scaleX: 0.71, scaleY: 0.71, y: 70.2}, 0).wait(1).to({
		scaleX: 0.71,
		scaleY: 0.71,
		y: 68.5
	}, 0).wait(1).to({scaleX: 0.71, scaleY: 0.71, y: 67.3}, 0).wait(1).to({
		scaleX: 0.7,
		scaleY: 0.7,
		y: 66.5
	}, 0).wait(1).to({scaleX: 0.7, scaleY: 0.7, y: 65.9}, 0).wait(1).to({
		scaleX: 0.7,
		scaleY: 0.7,
		y: 65.5
	}, 0).wait(1).to({scaleX: 0.7, scaleY: 0.7, y: 65.2}, 0).wait(1).to({y: 65.1}, 0).wait(1).to({
		scaleX: 0.7,
		scaleY: 0.7,
		y: 64.9
	}, 0).wait(4).to({regX: 257.6, x: 275.1}, 0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(502.5,385.5,95.1,29);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;