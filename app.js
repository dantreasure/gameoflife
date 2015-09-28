// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by over-population.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

window.main = function () {
  //window.requestAnimationFrame( main );
  //iterate through each cell
  window.setInterval(main, 5000);
  $("li").each(function(idx,el){
  	//pass the cell to a neighbour checker => boolean
  	neighbourChecker(el);
  });
  render();
};

function neighbourChecker(cell){
	var count = 0;
	var row = getRow(cell);
	var column = getColumn(cell);
	var fate = 'dead';

	function getRow(cell){
		return parseInt($(cell).parent().attr("data-row"));
	}

	function getColumn(cell){
		return parseInt($(cell).attr("data-cell"));
	}

	function rowCheck(row, col, fullRow){
		var cells = $("ul").filter('[data-row="' + row + '"]').children();
		debugger;
		if($(cells[(col - 2)]).data("state")=='live'){
			count++
		}
		if($(cells[(col - 1)]).data("state")=='live' && fullRow){
			count++
		}
		if ($(cells[col]).data("state")=='live'){
			count++
		}
	}

	rowCheck((row -1),column,true);
	rowCheck(row, column);
	rowCheck((row + 1),column, true);

	//live cell rule checks

	if($(cell).data('state') === 'live'){
		if(2 > count){
			fate = 'dead';
		} else if(count === 2 || count === 3){
			fate = 'live';
		} else if (count > 3){
			fate = 'dead';
		}
	//dead cell rule check
	} else{
		if(count === 3){
			fate = 'live';
		}
	}
	$(cell).attr('data-fate', fate);
}

function render(){
	$("li").each(function(idx, el){
		console.log($(el).data('fate'))
		$(el).attr('data-state', $(el).data('fate'));
		$(el).removeAttr('data-fate');
	})
}


