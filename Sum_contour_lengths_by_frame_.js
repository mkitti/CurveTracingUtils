#@output Integer nFrames
//Sum_contour_lengths_by_frame_
//Mark Kittisopikul
//February 14th, 2020
//Install into Fiji.app/plugins/Scripts/Plugins/Curve Tracing/
//Companion to https://github.com/jalmar/CurveTracing

//Add up 
importClass(Packages.ij.IJ);
importClass(Packages.ij.plugin.frame.RoiManager)
importClass(Packages.ij.gui.Plot);

// Setup regular expression pattern to get frame number
var frame_re = /contour_f_(\d+)/

//Grab ROIs
var m = RoiManager.getRoiManager();
var rois = m.getRoisAsArray();

//Get the number of frames
//var imp = IJ.getImage();
//var nFrames = imp.getNFrames()*imp.getNSlices();
//Get the number of frames from the last ROI
var nFrames = 0;
for(var i=rois.length-1; i >= 0; i--) {
	var name = rois[i].getName();
	var frame = frame_re.exec(name);
	if(frame != null) {
		frame = frame[1];
		nFrames = frame;
		break;
	}
}
//print("nFrames: "+nFrames);

//frames is just a sequence from 1 to nFrames
var frames = new Array(nFrames);
//for each frame sum up the lengths of the contours
var totalLengthsByFrame = new Array(nFrames);
for(var i=0; i < nFrames; i++) {
	frames[i] = i+1;
	totalLengthsByFrame[i] = 0;
}
//Iterate over all the ROIs
//1. Get the ROI name
//2. Try to get the frame
//3a. If we got the frame number, get the length and accumulate
//3b. Otherwise the invalid name
for(var i=0; i < rois.length; i++) {
	var name = rois[i].getName()
	var frame = frame_re.exec(name);
	if(frame != null) {
		frame = frame[1];
		totalLengthsByFrame[frame-1] += rois[i].getLength();
	} else {
		print('Not a valid ROI: '+name);
	}
}

//Plot the results
var p = new Plot('Total Lengths by Frame','Frame','Lengths');
p.add('line',frames,totalLengthsByFrame);
p.show();