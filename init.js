$(document).ready(function(){
	var dimension = 10;

	function drawGrid(){
		addRows();
		addCells();
	}

	function addRows(){
		//lookup the grid element
		for(var i=1;i<=dimension;i++){
			$("#grid").append("<ul data-row=" + i + "></ul>");
			//append a row object
		}

	}

	function addCells(){
		for(var i=1;i<=dimension;i++){
			$("ul").append("<li data-cell=" + i + " data-state='dead'></li>");
			//append cells to rows
		}
	}

	drawGrid();
})
