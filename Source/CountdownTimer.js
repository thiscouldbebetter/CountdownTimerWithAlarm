
class CountdownTimer
{
	constructor(alarm, millisecondsToWait)
	{
		this.alarm = alarm;
		this.millisecondsToWait = millisecondsToWait;
	}

	draw()
	{
		var millisecondsRemaining = this.millisecondsRemaining();

		var timeHelper = TimeHelper.Instance();

		var timeRemainingAsString =
			timeHelper.millisecondsToStringHMS
			(
				millisecondsRemaining
			);

		var htmlSoFar = timeRemainingAsString;

		var d = document;
		var domElement = d.getElementById("inputTimeRemaining");
		domElement.value = htmlSoFar;
	}

	initialize(platform)
	{
		this.draw();
	}

	isElapsed()
	{
		return (this.millisecondsRemaining() <= 0);
	}

	isStopped()
	{
		return (this.timer == null);
	}

	isRunning()
	{
		return (this.timer != null);
	}

	millisecondsRemaining()
	{
		var millisecondsRemaining = this.millisecondsToWait;

		if (this.isRunning())
		{
			var now = new Date();
			var millisecondsSinceStarted = now - this.timeStarted;
			millisecondsRemaining -= millisecondsSinceStarted;

			if (millisecondsRemaining < 0)
			{
				millisecondsRemaining = 0;
			}
		}

		return millisecondsRemaining;
	}

	reset()
	{
		this.stop();
		this.millisecondsToWait = 0;
		this.draw();
	}

	secondsAdd(secondsToAdd)
	{
		this.millisecondsToWait += (secondsToAdd * 1000);
		if (this.millisecondsToWait < 0)
		{
			this.millisecondsToWait = 0;
		}
		this.draw();
	}

	start()
	{
		var now = new Date();
		this.timeStarted = now;

		var countdownTimer = this;

		this.timer = setInterval
		(
			() => countdownTimer.updateForTimerTick(),
			1 // millisecondsPerTick
		);
	}

	startOrStop()
	{
		if (this.isStopped())
		{
			this.start();
		}
		else
		{
			this.stop();
		}
	}

	stop()
	{
		if (this.isRunning())
		{
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	updateForTimerTick()
	{
		if (this.isElapsed())
		{
			this.reset();
			this.alarm.activate();
		}

		this.draw();
	}

	// Platformable.

	platformAddTo(platformDom)
	{
		var d = document;
		var domElement = d.createElement("div");
		platformDom.domElementAdd(domElement);
		this.domElement = domElement;
	}
}
