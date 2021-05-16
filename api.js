//Declaration of variables 
const containerDiv = document.getElementById("vizContainer");
const btn = document.getElementById('btn');
const showbtn = document.getElementById('showbtn');
const exportPDF = document.getElementById("exportPDF");
const exportIMAGE = document.getElementById("exportIMAGE");
let viz
const url = "https://public.tableau.com/views/SuperSampleSuperstore/SuperDescriptive?:language=en&:display_count=y&:origin=viz_share_link";

const options = {
    hideTabs: true,
    device: "desktop",
    onFirstInteractive: function() {
        console.log("Hey, my dashboard is ready");
    }
}

function initViz() {
    viz = new tableau.Viz(containerDiv, url, options)
}

document.addEventListener('DOMContentLoaded', initViz);

// listen for clicks to hide the viz
btn.addEventListener('click', function() {
    viz.hide();
});

// listen for clicks to show the viz
showbtn.addEventListener('click', function() {
    viz.show();
});

// listen for clicks to export to pdf
exportPDF.addEventListener('click', function() {
    viz.showExportPDFDialog();
});

// listen for click to export an Image
exportIMAGE.addEventListener('click', function () {
    viz.showExportImageDialog();
});


let refreshInterval;
function refreshDataSource() {
    refreshInterval = setInterval(() => {
        console.log("Refreshing....!");
        viz.refreshDataAsync();
    },3000);
}

document.getElementById("start").addEventListener('click', refreshDataSource);

initViz();