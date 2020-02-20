document.addEventListener( 'DOMContentLoaded', function () {
	let
		btnPlay = document.querySelector( '#play' ),
		btnPause = document.querySelector( '#pause' ),
		btnTick = document.querySelector( '#tick' ),
		canvas = new ParticlesCanvas({
			node: document.querySelector( '.particles-canvas' ),
			onInit: function () {
				for ( let i = 0; i < 400; i++ ) {
					let object = new Particle({
						r: 3,
						canvas: this,
						theme: {
							body: 'rgba(255,255,255,.01)',
							connection: 'rgba(255,255,255,.1)'
						},
						connection: {
							quantity: 5
						}
					});

					object.randomize();
				}
			}
		});

	btnPlay.addEventListener( 'click', function() {
		canvas.play();
		console.log( 'PLAY' );
	});

	btnPause.addEventListener( 'click', function() {
		canvas.pause();
		console.log( 'PAUSE' );
	});

	btnTick.addEventListener( 'click', function() {
		canvas.tick();
		console.log( 'TICK' );
	});
});
