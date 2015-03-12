var lowpassFilter = new Tone.Filter(180, "lowpass", -12);
lowpassFilter.Q = 10;
var bass = new Tone.FMSynth().chain(lowpassFilter, Tone.Master);
bass.harmonicity = 14;

var noiseReverb = new Tone.Freeverb(0.7, 0.7);
noiseReverb.wet.value = 0.3;

var bandpassFilter = new Tone.Filter(300, "bandpass");
bandpassFilter.q = 15;
var noise = new Tone.Noise("brown").chain(bandpassFilter, noiseReverb, Tone.Master);
noise.volume.value = -15;

var reverb = new Tone.Freeverb(0.7, 0.7);
reverb.wet.value = 0.8;

var feedbackDelay = new Tone.PingPongDelay({
    "delayTime": ".5",
    "feedback": 0.8,
    "wet": 0.5
}).toMaster();

var chord = new Tone.PolySynth(4, Tone.DuoSynth).chain(reverb, feedbackDelay, Tone.Master);
chord.volume.value = -13;

var noiseFiltInc = true;
var noiseFilterFreq = 300;
var noiseInc = 50;

var kickEnv = new Tone.AmplitudeEnvelope({
    "attack": 0.01,
    "decay": 0.2,
    "sustain": 0,
    "release": 0
}).toMaster();

var osc = new Tone.Oscillator(50, "sine")
    .connect(kickEnv)
    .start();

var score = {
    "bass": [
        ["0", "C1", "8n"],
        ["8n * 2", "D1", "16n"],
        ["16n * 9", "D1", "16n"],
        ["4:0:0", "C1", "8n"],
        ["4:1:0", "D1", "16n"],
        ["4:2:0:1", "D1", "16n"],
    ],
    "chord": [
        ["0:0:1", ["A4", "D#4", "G4"], "16n"],
        ["4:0:1", ["G4", "A#4", "D4"], "16n"],
        //["0:1:3", ["E4", "G4", "A4"], "8n"]
    ]

};

Tone.Note.parseScore(score);

Tone.Note.route("bass", function(time, note, duration) {
    bass.triggerAttackRelease(note, time, duration);
});

Tone.Note.route("chord", function(time, value, duration) {

    for (var i = 0; i < value.length; i++) {

        chord.triggerAttackRelease(value[i], time, duration);

    }
});


Tone.Transport.loop = true;
Tone.Transport.setLoopPoints(0, "8:0:0");
Tone.Transport.bpm.value = 140;


Tone.Transport.setInterval(function(time) {

    if (noiseFilterFreq > 2000) {
        noiseFiltInc = false;
    } else if (noiseFilterFreq < 300) {
        noiseFiltInc = true;
    }

    if (noiseFiltInc) {
        noiseFilterFreq += noiseInc;
    } else {
        noiseFilterFreq -= noiseInc;
    }
    bandpassFilter.frequency.value = noiseFilterFreq;
    //console.log(noiseFilterFreq);

}, "64n");

Tone.Transport.setInterval(function(time) {
    kickEnv.triggerAttackRelease();
}, "4n");

nx.onload = function() {
    onOff.on('*', function() {
        noise.start();
        Tone.Transport.start();
    });
}

var accMag = 0;
var accMagArray = [];

window.ondevicemotion = function(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;

    accMagArray.push(x*x + y*y + z*z);

     if (accMagArray.length > 100){

     	accMagArray.shift();
     }

    for (var i = 0; i <= 99; i++) {
        if (accMagArray[i] != NaN) {
            accMag = accMag + accMagArray[i];
        }
    }
    console.log(accMag);
    accMag = accMag / 100;

}
