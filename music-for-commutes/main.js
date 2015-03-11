var osc = new Tone.Oscillator(440, "square")
    .toMaster() //connected to the master output
    .start(); // start it right away
