
class UiEventHandler
{
	static body_KeyDown(event)
	{
		var key = event.key;
		if (key == " " || key == "Enter")
		{
			UiEventHandler.buttonStartPause_Clicked();
		}
		else if (key == "Escape")
		{
			UiEventHandler.buttonAlarmDismiss_Clicked();
		}
		else if (key == "Delete")
		{
			UiEventHandler.buttonTimeRemainingReset_Clicked();
		}
		else if (key == "+" || key == "=")
		{
			if (event.altKey)
			{
				UiEventHandler.buttonTimeRemainingAdd1Second_Clicked();
			}
			else
			{
				UiEventHandler.buttonTimeRemainingAdd1Minute_Clicked();
			}
		}
		else if (key == "-" || key == "_")
		{
			if (event.altKey)
			{
				UiEventHandler.buttonTimeRemainingSubtract1Second_Clicked();
			}
			else
			{
				UiEventHandler.buttonTimeRemainingSubtract1Minute_Clicked();
			}
		}
	}

	static buttonAlarmDismiss_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.alarm.deactivate();
	}

	static buttonAlarmTest_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.alarm.activate();
	}

	static buttonStartPause_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.startOrStop();
	}

	static buttonTimeRemainingAdd1Minute_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(60);
	}

	static buttonTimeRemainingAdd1Second_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(1);
	}

	static buttonTimeRemainingAdd10Seconds_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(10);
	}

	static buttonTimeRemainingAdd5Minutes_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(5 * 60);
	}

	static buttonTimeRemainingSubtract1Minute_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(-60);
	}

	static buttonTimeRemainingSubtract1Second_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(-1);
	}

	static buttonTimeRemainingSubtract10Seconds_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(-10);
	}

	static buttonTimeRemainingSubtract5Minutes_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.secondsAdd(-5 * 60);
	}

	static buttonTimeRemainingReset_Clicked()
	{
		CountdownTimerRunner.Instance().countdownTimer.reset();
	}

}
