var form = document.querySelector('form');
var heading = document.querySelector('.practice-heading');
var subheading = document.querySelector('.subheading');
var block1 = document.querySelector('.block1');
var block1Link = document.querySelector('.block1-link');
var block2 = document.querySelector('.block2');
var block2Link = document.querySelector('.block2-link');
var block3 = document.querySelector('.block3');
var block3Link = document.querySelector('.block3-link');
var block3Link2 = document.querySelector('.block3-link-2');


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

function timeHandler(time){
	var time1 = Math.round(time * 0.416);
	var time2 = Math.round(time * 0.333);
	var time3 = Math.round(time * 0.25);
	var times = [time, time1, time2, time3];

	return times;

}

function linkHandler(blocks){
	var link1 = `pages/${blocks[1].toLowerCase()}.html`;
	var link2 = `pages/${blocks[2].toLowerCase()}.html`;
	var link3 = `pages/${blocks[3].toLowerCase()}.html`;
	var link4 = `pages/${blocks[4].toLowerCase()}.html`;
	var links = [link1, link2, link3, link4]
	return links;
}

function editText(blocks, times, links){

	heading.textContent = `Practice Session`;
	subheading.textContent = `Focus: ${blocks[0]} (Total Time: ${times[0]}m)`;

	block1.textContent = `Block 1: ${blocks[1]} (Time: ${times[1]}m)`;
	block1Link.href = links[0]
	block1Link.textContent = `Learn more about practicing ${blocks[1].toLowerCase()}`

	block2.textContent = `Block 2: ${blocks[2]} (Time: ${times[2]}m)`;
	block2Link.href = links[1]
	block2Link.textContent = `Learn more about practicing ${blocks[2].toLowerCase()}`

	block3.textContent = `Block 3: ${blocks[3]} or ${blocks[4]} (Time: ${times[3]}m)`;
	block3Link.href = links[2]
	block3Link2.href = links[3]
	block3Link.textContent = `Learn more about practicing ${blocks[3].toLowerCase()}`
	block3Link2.textContent = `Learn more about practicing ${blocks[4].toLowerCase()}`

}

form.addEventListener('submit', function(e){
	e.preventDefault();
	var area = form.querySelector('select').value;
	var time = form.querySelector("input[name='time']").value;

	var blocks = areaHandler(area);
	var times = timeHandler(time);
	var links = linkHandler(blocks);
	editText(blocks, times, links); 

})
