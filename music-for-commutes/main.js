var noise = new Tone.Noise().toMaster();
//so it's not too loud
noise.volume.value = -20;

noise.start();
