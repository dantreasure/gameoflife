// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by over-population.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

window.main = function () {
  //window.requestAnimationFrame( main );

  //iterate through each cell
  $("li").each(function(idx,el){
  	//pass the cell to a neighbour checker => boolean
  	if(neighbourChecker(el)){
  		//if true add class of live
  		$(el).addClass("live");
  	}
  })
};

function neighbourChecker(cell){
	var count = 0;
	var row = getRow(cell);
	var column = getColumn(cell);

	count += topRow(row -1);

	console.log("COUNT\n", count);
	// count += middleRow();
	// count += bottomRow();


	//switch
}

function getRow(cell){
	return $(cell).parent().first().data("row");
}

function getColumn(cell){
	return $(cell).data("cell");
}

function topRow(row){
	if(row === 0){
		return 0
	}
}
