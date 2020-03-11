#@input ImagePlus imp
#@input double threshold
#@output Integer nFrames
//Subtract_current_roi_from_countours_
//Mark Kittisopikul
//March 10th, 2020
//Install into Fiji.app/plugins/Scripts/Plugins/Curve Tracing/
//Companion to https://github.com/jalmar/CurveTracing

//Add up 
importClass(Packages.ij.IJ);
importClass(Packages.ij.gui.Roi);
importClass(Packages.ij.plugin.frame.RoiManager)
importClass(Packages.ij.gui.Plot);
importClass(Packages.ij.measure.ResultsTable);
importClass(Packages.ij.plugin.filter.Analyzer);
importClass(Packages.ij.measure.Measurements);

// Setup regular expression pattern to get frame number
var frame_re = /contour_f_(\d+)/

//Grab ROIs
var m = RoiManager.getRoiManager();
var selectedRoiIndex = m.getSelectedIndex();
var rois = m.getRoisAsArray();


//Iterate over all the ROIs
//1. Get the ROI name
//2. Try to get the frame
//3a. If we got the frame number, then AND with selected ROI



m.deselect();
m.runCommand("Measure");
var rt = ResultsTable.getResultsTable();
var meanIdx = rt.getColumnIndex("Mean");
var means = rt.getColumn(meanIdx);

var idxToDelete = [];
for(var i=0; i < rois.length; i++) {
	var name = rois[i].getName()
	var frame = frame_re.exec(name);
	if(frame != null) {
		//m.setSelectedIndexes([i]);
		print(name);
		print(means[i])
		if(means[i] >= threshold) {
			idxToDelete.push(i);
		}
	}
}
m.setSelectedIndexes(idxToDelete);
//m.runCommand("Delete");
