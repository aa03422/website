var viz;

window.onload= function() {
	var vizDiv = document.getElementById('myViz');
	var vizURL = 'https://public.tableau.com/views/PakistanAvg_ChildAge/Sheet1?:language=en-GB&:display_count=y&publish=yes&:origin=viz_share_link';
	var options = {
		width: '600px',
		height: '540px',
		hideToolbar: true,
		hideTabs: true
	};
	viz = new tableau.Viz(vizDiv, vizURL, options);
};

function switchView(sheetName) {
	var workbook = viz.getWorkbook();
	workbook.activateSheetAsync(sheetName);
}
