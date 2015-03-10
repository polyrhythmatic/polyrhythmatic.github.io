/**
 * Drone starts up to 30 oscillators
 * @param {number} numOsc number of oscillators from 1 to 30
 */
var Drone = function(numOsc) {
        this._oscillator = [];
        this.numOsc = numOsc || 20;
        this.chorus = new Tone.Chorus();
        this.filter = new Tone.Filter(300, "lowpass", -24);
        this.freeverb = new Tone.Freeverb(0.7, 0.3);
        this.eq = new Tone.EQ(1, 0.7, 0.3);
        this.chorus.connect(this.filter);
        this.filter.connect(this.freeverb);
        this.freeverb.connect(this.eq);
        this.eq.toMaster();
    }
    /**
     * Starts the drone oscillators
     * @return {[type]} [description]
     */
Drone.prototype.startDrone = function() {

    for (var i = 0; i < this.numOsc; i++) {

        this._oscillator[i] = new Tone.Oscillator((200 * (i + 1)) / 50, "sine");

        //connect the synth to the master output channel
        this._oscillator[i].connect(this.chorus);
        this._oscillator[i].volume.value = -30;
        this._oscillator[i].start();
    }
}

/**
 * Set the volume of the oscillators in dB
 * @param {number} vol -100 to 0
 */
Drone.prototype.setVolume = function(vol) {
    for (var i = 0; i < this.numOsc; i++) {
        this._oscillator[i].volume.value = vol;
    }
}

/**
 * Sets the frequency of the oscillator array
 * @param {number} freq 0 to 1
 */
Drone.prototype.setFrequency = function(freq) {
    for (var i = 0; i < this.numOsc; i++) {
        this._oscillator[i].frequency.value = freq * i * 200 + 200;
    }
}

/**
 * filter cutoff point
 * @param {number} freq from 0 to 20,000
 */
Drone.prototype.setCutoff = function(freq) {
    this.filter.frequency.value = freq;
}

/**
 * cutoff resonance (q)
 * @param {number} q [description]
 */
Drone.prototype.setResonance = function(q) {
    this.filter.Q.value = q;
}

var drone = new Drone(20)
drone.startDrone();


var newGreen;
var newRed;

nx.onload = function() {
    mousey.on("x", function(x) {
        drone.setFrequency(x);
        drone.setVolume(-30);
    });
    mousey.on("deltax", function(deltax) {
        // console.log(deltax);

    });

    mousey.on("y", function(y) {
        drone.setCutoff((y * 1000) + 100);
        drone.setResonance((1 - y) * 2);

        newGreen = Math.round(255 - y * 255);
        newRed = Math.round(y * 255);
        document.body.style.background = rgbToHex(newRed, newGreen, 255);

    });
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
