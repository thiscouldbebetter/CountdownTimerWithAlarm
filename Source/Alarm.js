
class Alarm
{
	constructor(soundPlayer, millisecondsPerCycle)
	{
		this.soundPlayer = soundPlayer;
		this.millisecondsPerCycle = 1000;
	}

	activate()
	{
		if (this.isActive() == false)
		{
			this.alertCyclePerform();

			this.timer = setInterval
			(
				this.alertCyclePerform.bind(this),
				this.millisecondsPerCycle
			);
		}
	}

	deactivate()
	{
		if (this.isActive())
		{
			clearInterval(this.timer);
			this.timer = null;

			var d = document;

			d.body.removeChild(this.domElement);
			this.domElement = null;

			var style = d.body.style;
			style.color = "black";
			style.backgroundColor = "white";
		}
	}

	isActive()
	{
		return (this.timer != null);
	}

	alertCyclePerform()
	{
		var d = document;

		if (this.domElement == null)
		{
			var divAlert = d.createElement("div");
			divAlert.style.height = "100%";
			divAlert.innerHTML =
				"The timer has elapsed.  Click the Dismiss button to deactivate the alarm.";
			d.body.appendChild(divAlert);
			this.domElement = divAlert;
		}

		var style = d.body.style;
		if (style.backgroundColor == "black")
		{
			style.color = "black";
			style.backgroundColor = "white";
		}
		else
		{
			style.color = "white";
			style.backgroundColor = "black";
		}

		this.soundPlayer.sineAtHertzForSeconds
		(
			440, this.millisecondsPerCycle / 1000 / 2
		);
	}
}
