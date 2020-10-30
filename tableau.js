function initializeViz() {
var placeholderDiv = document.getElementById("tableauViz");
var url = "https://public.tableau.com/views/PakistanAvg_ChildAge/Sheet1?:language=en-GB&:display_count=y&:origin=viz_share_link";
viz = new tableau.Viz(placeholderDiv, url);
}
