var hh = new Tone.Player("./audio/hi-hat.mp3")
	.toMaster();

var Score = {
	"kick" : ["0", "0:2:2", "0:3:1"],
	//use any Tone.Time representation or expression
	"snare" : ["4n*1", "4n*3"],
	"hh" : ["0*16n", "1*16n", "2*16n", "3*16n", "4*16n", "5*16n", "6*16n", "7*16n", "8*16n", "9*16n", "10*16n", "11*16n", "12*16n", "13*16n", "14*16n", "15*16n"],
	//if the array is composed of other arrays time is the first value
	//the rest of the values are given to the callback in order
	"bass" : [["0:0", "C2", "2n"], ["0:3:2", "C3", "8n"]],
	"keys" : [["0:0:2", ["E4", "G4", "A4"]], ["0:0:3", ["E4", "G4", "A4"]], ["0:1:3", ["E4", "G4", "A4"]]],
};

Tone.Note.parseScore(Score);

Tone.Note.route("hh", function(time){
	hh.start(time);
});

Tone.Transport.loopStart = 0;
Tone.Transport.loopEnd = "1:0";
Tone.Transport.loop = true;
Tone.Transport.bpm.value = 130;
Tone.Transport.swing = 0.2;