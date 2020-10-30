function initializeViz() {
var placeholderDiv = document.getElementById("tableauViz");
var url = "https://public.tableau.com/shared/RRC4FYXYQ?:display_count=y&:origin=viz_share_link";
var options = {
 width: '600px',
 height: '600px',
 hideTabs: true,
 hideToolbar: true,
 };
var viz = new tableau.Viz(placeholderDiv, url, options);
}
