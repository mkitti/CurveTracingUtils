# CurveTracingUtils
Utility scripts for CurveTracing plugin for ImageJ. These scripts were written by Mark Kittisopikul for Bhuvanasundar Ranganathan in Vladimir I. Gelfand's lab while at the Feinberg School of Medicine, Northwestern University, Chicago, IL. The scripts are used to quantitatively measure filaments labeled by a photoactivatable fluorescent label attached to the filaments.

## Scripts

These are utility scripts to be used together with the CurveTracing plugin for ImageJ:
* https://github.com/jalmar/CurveTracing (old repository)
* https://github.com/ekatrukha/CurveTrace (new repository)
* The plugin is an implementation of Carsten Steger's ridge detection algorithm described in the paper below.
   * Carsten Steger. Unbiased extraction of lines with parabolic and Gaussian profiles. Computer Vision and Image Understanding. Volume 117, Issue 2, 2013, Pages 97-112, ISSN 1077-3142, https://doi.org/10.1016/j.cviu.2012.08.007.

* [Delete_roi_by_mean_threshold_.js](Delete_roi_by_mean_threshold_.js)
  * Measures the mean intensity of all the ROIs in the ROI manager
  * Deletes the ROIs with a frame number if they are greater than or equal to a user provided mean intensity threshold
* [Sum_contour_lengths_by_frame_.js](Sum_contour_lengths_by_frame_.js)
  * Finds all the ROIs with a frame number
  * Sums the contour length of each ROI for each frame
  * Plots the total contour length versus frame number

## Installation

Copy files into the `Fiji.app/plugins/Scripts/Plugins/Curve Tracing/` directory

## Instructions

* Load image
* Invert photoconversion area
* Run CurveTracing plugin
* Run delete ROI by mean threshold at 200
* Measure ROI lengths
* Run sum countour lengths by frame

# License

You may use the software under a [BSD 3-clause license](LICENSE).
