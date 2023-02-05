

$(document).ready(function() { 
const button = $('button');
const envelope = $('.envelope');
var flipped = false;

function pullOut() {
	return new TimelineMax()
		.to('.flap', 1, {
			rotationX: 180,
			ease: Power1.easeInOut
		}, 'scaleBack')
		.to('button', 1, {
			display : 'none',
		})
		.to('.invitation', 1, {
			scale: 0.8,
			width: '800px',
			ease: Power4.easeInOut,
		}, 'scaleBack')
		.set('.flap', {
			zIndex: 0
		})
		.to('.card', 1, {
			y: '0%',
			scaleY: 1.2,
			ease: Circ.easeInOut,
		})
		.set('.mask', {
			//- Change overflow on mask
			overflow: 'visible',
			onComplete: function() {
				//- Change Z-Index on Pseudo element
				envelope.toggleClass('is-open');
			}
		})
		.to('.mask', 1.3, {
			'clip-path': 'inset(0 0 0% 0)',
			width: '100%',
			ease: Circ.easeInOut,
		}, 'moveDown')
		.to('.card', 1.3, {
			y: '100%',
			width: '100%',
			scaleY: 1,
			height : '550px',
			ease: Circ.easeInOut,
		}, 'moveDown')
		.to('button', 1, {
			y: '180px',
			display : 'none',
			ease: Circ.easeInOut,
		}, 'moveDown+=0.15');
}

function toggleFlip() {
	if (!envelope.hasClass('is-open')) {
		return;
	}

	const ry = (!flipped) ? 180 : 0;
	flipped = (!flipped) ? true : false;

	TweenMax.to('.card', 1, {
		rotationY: ry,
		ease: Power4.easeInOut,
	});
}



button.one('click', pullOut);
button.on('click', toggleFlip);
});
