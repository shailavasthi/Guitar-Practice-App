//add vars for querySelector
var form = document.querySelector('form');


// area handler
	//return array [label area1 ....]

function areaHandler(area){

}

//time handler
	// return array [timetotal time1 ....]

function timeHandler(time){

}

//edit text
function editText(blocks, times){
	
}


//event listener

form.addEventListener('submit', function(e){
	e.preventDefault();
	var area = form.querySelector('select').value;
	var time = form.querySelector("input[name='time']").value;

	blocks = areaHandler(area);
	times = timeHandler(times);
	editText(blocks, times); 

	console.log(area, time);
})
