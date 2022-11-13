
class CountdownTimerRunner
{
	constructor()
	{
		var millisecondsPerSecond = 1000;

		var soundPlayer = new SoundPlayer();
		var alarm = new Alarm(soundPlayer, millisecondsPerSecond);

		var secondsToWaitDefault = 5;
		var millisecondsToWait =
			secondsToWaitDefault * millisecondsPerSecond;

		this.countdownTimer = new CountdownTimer(alarm, millisecondsToWait);
		this.countdownTimer.initialize();
	}

	static Instance()
	{
		if (CountdownTimerRunner._instance == null)
		{
			CountdownTimerRunner._instance =
				new CountdownTimerRunner();
		}

		return CountdownTimerRunner._instance;
	}
}
