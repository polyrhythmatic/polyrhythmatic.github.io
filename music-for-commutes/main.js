var osc = new Tone.Oscillator(440, "sine").toMaster();
		osc.volume.value = -10;

		var vibrato = new Tone.LFO(6, -25, 25)
			.connect(osc.detune)
			.start();