
class SoundPlayer
{
	constructor()
	{
		this.audioContext = new AudioContext();
	}

	sineAtHertzForSeconds(frequencyInHertz, durationInSeconds)
	{
		var a = this.audioContext;

		var gain = a.createGain();
		gain.gain.setValueAtTime(.01, a.currentTime);
		gain.connect(a.destination);

		var oscillator = a.createOscillator();
		oscillator.frequency.setValueAtTime
		(
			frequencyInHertz, a.currentTime
		);
		oscillator.connect(gain);

		oscillator.start();
		oscillator.stop(a.currentTime + durationInSeconds);
	}
}
