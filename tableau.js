var viz;

window.onload = function() {
    var vizDiv = document.getElementById('myViz')
    var vizURL = "https://public.tableau.com/views/PakistanAvg_ChildAge/Sheet1?:language=en-GB&:display_count=y&:origin=viz_share_link";
    var options = {
        width: '600px',
        height: '540px'
    };
    viz = new tableau.Viz(vizDiv, vizURL, options);
};

var tableau;
