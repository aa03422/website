var viz;

window.onload= function() {
	var vizDiv = document.getElementById('myViz');
	var vizURL = 'https://public.tableau.com/views/DSProject_16064140022170/Distribution?:language=en-GB&:display_count=y&publish=yes&:origin=viz_share_link';
	var options = {
		width: '985px',
		height: '600px',
		hideToolbar: false,
		hideTabs: true
	};
	viz = new tableau.Viz(vizDiv, vizURL, options);
};
var tableau;
function switchView(sheetName) {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}
