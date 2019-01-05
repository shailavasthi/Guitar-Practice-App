//add vars for querySelector
var form = document.querySelector('form');
var heading = document.querySelector('.heading');
var subheading = document.querySelector('.subheading');
var block1 = document.querySelector('.block1');
var block1Subtext = document.querySelector('.block1-subtext');
var block2 = document.querySelector('.block2');
var block2Subtext = document.querySelector('.block2-subtext');
var block3 = document.querySelector('.block3');
var block3Subtext = document.querySelector('.block3-subtext');

// area handler
	//return array [label area1 ....]

function areaHandler(area){

	if (area=='tm'){
		var blocks = ['Technique', 'Technique', 'Repertoire', 'Scales', 'Chords'];
	} else if (area=='mi'){
		var blocks = ['Improvisation', 'Scales', 'Repertoire', 'Chords', 'Technique'];
	} else {
		var blocks = ['Repertoire', 'Repertoire', 'Chords', 'Scales', 'Technique'];
	}

	return blocks;
}

//time handler
	// return array [timetotal time1 ....]

function timeHandler(time){
	var time1 = Math.round(time * 0.416);
	var time2 = Math.round(time * 0.333);
	var time3 = Math.round(time * 0.25);
	var times = [time, time1, time2, time3]
	
	return times;

}

//edit text
function editText(blocks, times){

	heading.textContent = `Practice Session`;
	subheading.textContent = `Focus: ${blocks[0]}`;
	block1.textContent = `Block 1: ${blocks[1]} (Time: ${times[1]}m)`;
	block1Subtext.textContent = ``;
	block2.textContent = `Block 2: ${blocks[2]} (Time: ${times[2]}m)`;
	block2Subtext.textContent = ``;
	block3.textContent = `Block 3: ${blocks[3]} or ${blocks[4]} (Time: ${times[3]}m)`;
	block3Subtext.textContent = ``;

}


//event listener

form.addEventListener('submit', function(e){
	e.preventDefault();
	var area = form.querySelector('select').value;
	var time = form.querySelector("input[name='time']").value;

	var blocks = areaHandler(area);
	var times = timeHandler(time);
	editText(blocks, times); 

})
