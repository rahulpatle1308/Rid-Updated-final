QuizData.questions.push({
    Id: "py_dt_1",
    topicId: "py_datetime",
    question: "Get current date and time using datetime module.",
    mathSolution: "datetime.now() returns current date and time",
    codeSolution: "from datetime import datetime\n\nnow = datetime.now()\nprint(f'Current date and time: {now}')\nprint(f'Date: {now.date()}')\nprint(f'Time: {now.time()}')\nprint(f'Year: {now.year}')\nprint(f'Month: {now.month}')\nprint(f'Day: {now.day}')\nprint(f'Hour: {now.hour}')\nprint(f'Minute: {now.minute}')\nprint(f'Second: {now.second}')",
    hint: "Use `datetime.now()` to get current date and time"
  },
  {
    Id: "py_dt_2",
    topicId: "py_datetime",
    question: "Get current date only using date.today().",
    mathSolution: "date.today() returns current date",
    codeSolution: "from datetime import date\n\ntoday = date.today()\nprint(f'Today: {today}')\nprint(f'Day: {today.day}')\nprint(f'Month: {today.month}')\nprint(f'Year: {today.year}')\nprint(f'Weekday (Monday=0): {today.weekday()}')\nprint(f'Weekday (Monday=1): {today.isoweekday()}')",
    hint: "Use `date.today()` for current date only"
  },
  {
    Id: "py_dt_3",
    topicId: "py_datetime",
    question: "Create a specific date (e.g., January 1, 2024) using date constructor.",
    mathSolution: "date(year, month, day) creates date object",
    codeSolution: "from datetime import date\n\nnew_year = date(2024, 1, 1)\nprint(f'New Year 2024: {new_year}')\nprint(f'Day of week: {new_year.strftime(\"%A\")}')\n\n# Check if it's a leap year\nif new_year.year % 4 == 0 and (new_year.year % 100 != 0 or new_year.year % 400 == 0):\n    print(f'{new_year.year} is a leap year')\nelse:\n    print(f'{new_year.year} is not a leap year')",
    hint: "Date constructor requires year, month, day"
  },
  {
    Id: "py_dt_4",
    topicId: "py_datetime",
    question: "Create a specific time (e.g., 14:30:00) using time constructor.",
    mathSolution: "time(hour, minute, second) creates time object",
    codeSolution: "from datetime import time\n\nmeeting_time = time(14, 30, 0)\nprint(f'Meeting time: {meeting_time}')\nprint(f'Hour: {meeting_time.hour}')\nprint(f'Minute: {meeting_time.minute}')\nprint(f'Second: {meeting_time.second}')\n\n# Time with microseconds\nprecise_time = time(9, 15, 30, 500000)\nprint(f'Precise time: {precise_time}')",
    hint: "Time constructor accepts hour, minute, second, microsecond"
  },
  {
    Id: "py_dt_5",
    topicId: "py_datetime",
    question: "Create a specific datetime (e.g., 2024-12-25 10:30:00).",
    mathSolution: "datetime(year, month, day, hour, minute, second)",
    codeSolution: "from datetime import datetime\n\nchristmas = datetime(2024, 12, 25, 10, 30, 0)\nprint(f'Christmas 2024: {christmas}')\nprint(f'Day of week: {christmas.strftime(\"%A\")}')\nprint(f'Is PM: {christmas.hour >= 12}')\n\n# Create from timestamp\ntimestamp = christmas.timestamp()\nprint(f'Timestamp: {timestamp}')\nprint(f'From timestamp: {datetime.fromtimestamp(timestamp)}')",
    hint: "Datetime constructor accepts date and time components"
  },
  {
    Id: "py_dt_6",
    topicId: "py_datetime",
    question: "Format datetime using strftime() with different format codes.",
    mathSolution: "strftime() converts datetime to string with format codes",
    codeSolution: "from datetime import datetime\n\nnow = datetime.now()\n\nformats = {\n    'YYYY-MM-DD': now.strftime('%Y-%m-%d'),\n    'DD/MM/YYYY': now.strftime('%d/%m/%Y'),\n    'Month DD, YYYY': now.strftime('%B %d, %Y'),\n    'Weekday, Month DD': now.strftime('%A, %B %d'),\n    'Time 24h': now.strftime('%H:%M:%S'),\n    'Time 12h': now.strftime('%I:%M:%S %p'),\n    'Full datetime': now.strftime('%c'),\n    'Week number': now.strftime('Week %U of %Y')\n}\n\nfor name, formatted in formats.items():\n    print(f'{name}: {formatted}')",
    hint: "%Y (year), %m (month), %d (day), %H (hour 24), %I (hour 12), %p (AM/PM)"
  },
  {
    Id: "py_dt_7",
    topicId: "py_datetime",
    question: "Parse string to datetime using strptime().",
    mathSolution: "strptime() converts string to datetime using format",
    codeSolution: "from datetime import datetime\n\ndate_strings = [\n    '2024-01-15',\n    '15/01/2024',\n    'January 15, 2024',\n    '2024-01-15 14:30:00',\n    '15-Jan-2024'\n]\n\nformats = [\n    '%Y-%m-%d',\n    '%d/%m/%Y',\n    '%B %d, %Y',\n    '%Y-%m-%d %H:%M:%S',\n    '%d-%b-%Y'\n]\n\nfor date_str, fmt in zip(date_strings, formats):\n    parsed = datetime.strptime(date_str, fmt)\n    print(f'\"{date_str}\" -> {parsed}')\n\n# Handle invalid format\ntry:\n    invalid = datetime.strptime('2024/13/45', '%Y/%m/%d')\nexcept ValueError as e:\n    print(f'Error: {e}')",
    hint: "Format string must match the input string exactly"
  },
  {
    Id: "py_dt_8",
    topicId: "py_datetime",
    question: "Calculate difference between two dates using timedelta.",
    mathSolution: "Subtracting dates gives timedelta object",
    codeSolution: "from datetime import date, timedelta\n\ndate1 = date(2024, 1, 1)\ndate2 = date(2024, 12, 31)\n\ndifference = date2 - date1\nprint(f'Days between {date1} and {date2}: {difference.days} days')\nprint(f'Total seconds: {difference.total_seconds()}')\nprint(f'Weeks: {difference.days / 7:.1f}')\n\n# Calculate age\nbirth_date = date(1990, 5, 15)\ntoday = date.today()\nage = today - birth_date\nage_years = age.days // 365\nprint(f'Age: {age_years} years ({age.days} days)')",
    hint: "timedelta has days, seconds, microseconds attributes"
  },
  {
    Id: "py_dt_9",
    topicId: "py_datetime",
    question: "Add or subtract days/weeks using timedelta.",
    mathSolution: "Add timedelta to date/datetime",
    codeSolution: "from datetime import date, datetime, timedelta\n\ntoday = date.today()\nnow = datetime.now()\n\n# Add days\nnext_week = today + timedelta(days=7)\nprint(f'Next week: {next_week}')\n\n# Subtract days\nlast_month = today - timedelta(days=30)\nprint(f'~Last month: {last_month}')\n\n# Add hours\nlater = now + timedelta(hours=5, minutes=30)\nprint(f'5.5 hours later: {later}')\n\n# Multiple operations\nnext_month = today + timedelta(days=30)\nnext_year = today + timedelta(days=365)\nprint(f'Next month: {next_month}')\nprint(f'Next year: {next_year}')\n\n# Combine timedeltas\ntwo_weeks_three_days = timedelta(weeks=2) + timedelta(days=3)\nprint(f'2 weeks + 3 days = {two_weeks_three_days.days} days')",
    hint: "timedelta accepts weeks, days, hours, minutes, seconds, microseconds"
  },
  {
    Id: "py_dt_10",
    topicId: "py_datetime",
    question: "Compare dates to check which is earlier/later.",
    mathSolution: "Date comparison uses comparison operators",
    codeSolution: "from datetime import date\n\ndate1 = date(2024, 1, 15)\ndate2 = date(2024, 6, 30)\ndate3 = date(2024, 1, 15)\n\nprint(f'date1: {date1}, date2: {date2}')\nprint(f'date1 < date2: {date1 < date2}')\nprint(f'date1 > date2: {date1 > date2}')\nprint(f'date1 == date3: {date1 == date3}')\n\n# Find earliest/latest\ndates = [date(2024, 3, 15), date(2024, 1, 1), date(2024, 12, 31)]\nprint(f'Earliest: {min(dates)}')\nprint(f'Latest: {max(dates)}')\n\n# Sort dates\nsorted_dates = sorted(dates)\nprint(f'Sorted: {sorted_dates}')",
    hint: "Dates support all comparison operators: <, >, <=, >=, ==, !="
  },
  {
    Id: "py_dt_11",
    topicId: "py_datetime",
    question: "Get day of week for a given date (Monday=0 to Sunday=6).",
    mathSolution: "weekday() returns 0-6, isoweekday() returns 1-7",
    codeSolution: "from datetime import date\n\ndates = [\n    date(2024, 1, 1),  # Monday\n    date(2024, 1, 2),  # Tuesday\n    date(2024, 1, 7),  # Sunday\n    date.today()\n]\n\nweekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\nfor d in dates:\n    wd_num = d.weekday()  # 0-6\n    iso_num = d.isoweekday()  # 1-7\n    print(f'{d}: weekday()={wd_num} ({weekdays[wd_num]}), isoweekday()={iso_num}')",
    hint: "weekday(): Monday=0, Sunday=6; isoweekday(): Monday=1, Sunday=7"
  },
  {
    Id: "py_dt_12",
    topicId: "py_datetime",
    question: "Check if a year is leap year using calendar module.",
    mathSolution: "isleap() returns True for leap years",
    codeSolution: "import calendar\nfrom datetime import date\n\nyears = [1900, 2000, 2023, 2024, 2100]\n\nfor year in years:\n    is_leap = calendar.isleap(year)\n    print(f'{year}: {\"Leap\" if is_leap else \"Not leap\"} year')\n    if is_leap:\n        print(f'  February has {calendar.monthrange(year, 2)[1]} days')\n\n# Check current year\ntoday = date.today()\nif calendar.isleap(today.year):\n    print(f'\\n{today.year} is a leap year!')\n\n# Get leap days between years\nleap_days = calendar.leapdays(2000, 2025)\nprint(f'Leap days between 2000-2024: {leap_days}')",
    hint: "calendar.isleap() checks leap year, calendar.leapdays() counts leap years in range"
  },
  {
    Id: "py_dt_13",
    topicId: "py_datetime",
    question: "Get number of days in a month using calendar.monthrange().",
    mathSolution: "monthrange(year, month) returns (weekday, days)",
    codeSolution: "import calendar\nfrom datetime import date\n\n# Days in each month of 2024\nyear = 2024\nmonth_names = ['January', 'February', 'March', 'April', 'May', 'June',\n               'July', 'August', 'September', 'October', 'November', 'December']\n\nfor month in range(1, 13):\n    weekday, days = calendar.monthrange(year, month)\n    print(f'{month_names[month-1]}: {days} days, starts on {calendar.day_name[weekday]}')\n\n# Check if date is valid\ndef is_valid_date(y, m, d):\n    if 1 <= m <= 12:\n        _, days = calendar.monthrange(y, m)\n        return 1 <= d <= days\n    return False\n\nprint(f'2024-02-29 valid: {is_valid_date(2024, 2, 29)}')\nprint(f'2023-02-29 valid: {is_valid_date(2023, 2, 29)}')",
    hint: "monthrange returns (weekday_of_first_day, number_of_days)"
  },
  {
    Id: "py_dt_14",
    topicId: "py_datetime",
    question: "Print calendar for a specific month using calendar module.",
    mathSolution: "calendar.month() returns formatted month calendar",
    codeSolution: "import calendar\n\n# Set first day of week to Monday\ncalendar.setfirstweekday(calendar.MONDAY)\n\n# Print month calendar\nprint('January 2024:')\nprint(calendar.month(2024, 1))\n\n# Print with custom width\nprint('\\nFebruary 2024 (width=4):')\nprint(calendar.month(2024, 2, w=4, l=1))\n\n# Print as HTML (for web)\nhtml_cal = calendar.HTMLCalendar().formatmonth(2024, 3)\nprint('\\nMarch 2024 HTML preview:')\nprint(html_cal[:200] + '...')\n\n# Get month as list of weeks\nweeks = calendar.monthcalendar(2024, 4)\nprint('\\nApril 2024 as weeks:')\nfor week in weeks:\n    print(week)",
    hint: "calendar.month() returns formatted string, monthcalendar() returns list of weeks"
  },
  {
    Id: "py_dt_15",
    topicId: "py_datetime",
    question: "Print full year calendar using calendar module.",
    mathSolution: "calendar.calendar() prints entire year",
    codeSolution: "import calendar\n\n# Print full year calendar\nprint('Calendar for 2024:')\nprint(calendar.calendar(2024))\n\n# Customize appearance\nprint('\\n' + '='*50)\nprint('Calendar 2024 (custom format):')\nprint(calendar.calendar(2024, w=3, l=1, c=6))\n\n# Get year as list of months\nyearly = calendar.Calendar().yeardayscalendar(2024)\nprint(f'\\nNumber of months in year data: {len(yearly)}')\n\n# Text calendar\ntext_cal = calendar.TextCalendar()\nprint('\\nMay 2024:')\nprint(text_cal.formatmonth(2024, 5))",
    hint: "calendar.calendar() prints entire year, TextCalendar() for more control"
  },
  {
    Id: "py_dt_16",
    topicId: "py_datetime",
    question: "Get all dates of a specific weekday in a month.",
    mathSolution: "Calendar.itermonthdates() iterates through month",
    codeSolution: "import calendar\nfrom datetime import date\n\ndef get_all_mondays(year, month):\n    cal = calendar.Calendar()\n    mondays = []\n    for dt in cal.itermonthdates(year, month):\n        if dt.month == month and dt.weekday() == 0:  # Monday = 0\n            mondays.append(dt)\n    return mondays\n\n# Get all Mondays in January 2024\nmondays = get_all_mondays(2024, 1)\nprint('Mondays in January 2024:')\nfor monday in mondays:\n    print(f'  {monday.strftime(\"%B %d, %Y\")}')\n\n# Get all weekends (Saturday and Sunday)\nweekends = []\nfor dt in calendar.Calendar().itermonthdates(2024, 2):\n    if dt.month == 2 and dt.weekday() >= 5:  # Saturday=5, Sunday=6\n        weekends.append(dt)\nprint('\\nWeekends in February 2024:')\nfor day in weekends:\n    print(f'  {day.strftime(\"%A, %B %d\")}')",
    hint: "itermonthdates() includes days from previous/next months to fill weeks"
  },
  {
    Id: "py_dt_17",
    topicId: "py_datetime",
    question: "Calculate age in years, months, days from birth date.",
    mathSolution: "Age calculation using date arithmetic",
    codeSolution: "from datetime import date\n\ndef calculate_age(birth_date):\n    today = date.today()\n    \n    # Calculate years\n    age_years = today.year - birth_date.year\n    \n    # Adjust if birthday hasn't occurred this year\n    if today.month < birth_date.month or (today.month == birth_date.month and today.day < birth_date.day):\n        age_years -= 1\n    \n    # Calculate months\n    if today.month >= birth_date.month:\n        age_months = today.month - birth_date.month\n    else:\n        age_months = 12 - birth_date.month + today.month\n    \n    # Adjust months for days\n    if today.day < birth_date.day:\n        age_months -= 1\n        if age_months < 0:\n            age_months += 12\n    \n    # Calculate days\n    if today.day >= birth_date.day:\n        age_days = today.day - birth_date.day\n    else:\n        # Get last day of previous month\n        if today.month == 1:\n            last_month = date(today.year - 1, 12, 1)\n        else:\n            last_month = date(today.year, today.month - 1, 1)\n        _, days_in_month = calendar.monthrange(last_month.year, last_month.month)\n        age_days = days_in_month - birth_date.day + today.day\n    \n    return age_years, age_months, age_days\n\nbirth = date(1990, 5, 15)\nyears, months, days = calculate_age(birth)\nprint(f'Birth date: {birth}')\nprint(f'Age: {years} years, {months} months, {days} days')",
    hint: "Account for leap years and varying month lengths"
  },
  {
    Id: "py_dt_18",
    topicId: "py_datetime",
    question: "Find next or previous occurrence of a specific weekday.",
    mathSolution: "Calculate days to add/subtract to reach target weekday",
    codeSolution: "from datetime import date, timedelta\n\ndef next_weekday(start_date, target_weekday):\n    \"\"\"target_weekday: 0=Monday, 6=Sunday\"\"\"\n    days_ahead = target_weekday - start_date.weekday()\n    if days_ahead <= 0:\n        days_ahead += 7\n    return start_date + timedelta(days=days_ahead)\n\ndef previous_weekday(start_date, target_weekday):\n    days_behind = start_date.weekday() - target_weekday\n    if days_behind < 0:\n        days_behind += 7\n    return start_date - timedelta(days=days_behind)\n\ntoday = date.today()\nweekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\nfor i, day_name in enumerate(weekdays):\n    next_day = next_weekday(today, i)\n    prev_day = previous_weekday(today, i)\n    print(f'Next {day_name}: {next_day}')\n    print(f'Previous {day_name}: {prev_day}\\n')",
    hint: "Use modulo arithmetic to handle week wrapping"
  },
  {
    Id: "py_dt_19",
    topicId: "py_datetime",
    question: "Get first and last day of current month.",
    mathSolution: "First day is always 1, last day from monthrange",
    codeSolution: "from datetime import date, datetime\nimport calendar\n\ntoday = date.today()\n\n# First day of current month\nfirst_day = date(today.year, today.month, 1)\nprint(f'First day of current month: {first_day} ({first_day.strftime(\"%A\")})')\n\n# Last day of current month\n_, last_day_num = calendar.monthrange(today.year, today.month)\nlast_day = date(today.year, today.month, last_day_num)\nprint(f'Last day of current month: {last_day} ({last_day.strftime(\"%A\")})')\n\n# First and last day of any month\nyear, month = 2024, 2\nfirst = date(year, month, 1)\n_, last_num = calendar.monthrange(year, month)\nlast = date(year, month, last_num)\nprint(f'\\nFebruary 2024: {first} to {last}')\n\n# Get quarter start/end\nquarter = (today.month - 1) // 3 + 1\nquarter_start = date(today.year, (quarter - 1) * 3 + 1, 1)\nprint(f'\\nCurrent quarter ({quarter}) starts: {quarter_start}')",
    hint: "monthrange gives (weekday_of_first, number_of_days)"
  },
  {
    Id: "py_dt_20",
    topicId: "py_datetime",
    question: "Work with time objects and time arithmetic.",
    mathSolution: "time objects can be compared and manipulated",
    codeSolution: "from datetime import time, timedelta, datetime\n\nt1 = time(9, 30, 0)\nt2 = time(17, 45, 30)\n\nprint(f'Start: {t1}')\nprint(f'End: {t2}')\nprint(f't1 < t2: {t1 < t2}')\n\n# Convert to datetime for arithmetic\ndt1 = datetime.combine(datetime.today(), t1)\ndt2 = datetime.combine(datetime.today(), t2)\nduration = dt2 - dt1\nprint(f'Duration: {duration}')\n\n# Add time to datetime\nmeeting_end = dt1 + timedelta(hours=1, minutes=30)\nprint(f'Meeting ends: {meeting_end.time()}')\n\n# Time range check\ndef is_business_hours(check_time):\n    start = time(9, 0)\n    end = time(17, 0)\n    return start <= check_time <= end\n\ntest_times = [time(8, 30), time(12, 0), time(17, 30)]\nfor t in test_times:\n    print(f'{t} in business hours: {is_business_hours(t)}')",
    hint: "Convert to datetime for arithmetic, or use timedelta with datetime.combine()"
  },
  {
    Id: "py_dt_21",
    topicId: "py_datetime",
    question: "Convert between timezone-aware and naive datetime.",
    mathSolution: "Use zoneinfo (Python 3.9+) or pytz for timezone handling",
    codeSolution: "from datetime import datetime, timezone, timedelta\nfrom zoneinfo import ZoneInfo  # Python 3.9+\n\n# Naive datetime (no timezone)\nnaive = datetime.now()\nprint(f'Naive: {naive}')\n\n# Make timezone-aware\nutc_aware = naive.replace(tzinfo=timezone.utc)\nprint(f'UTC aware: {utc_aware}')\n\n# Create with specific timezone\nny_tz = ZoneInfo('America/New_York')\nny_time = datetime.now(ny_tz)\nprint(f'New York: {ny_time}')\n\n# Convert between timezones\nlondon_tz = ZoneInfo('Europe/London')\nlondon_time = ny_time.astimezone(london_tz)\nprint(f'London time: {london_time}')\n\n# Get UTC offset\nprint(f'NY offset: {ny_time.utcoffset()}')\nprint(f'London offset: {london_time.utcoffset()}')",
    hint: "Use zoneinfo.ZoneInfo for IANA timezone names"
  },
  {
    Id: "py_dt_22",
    topicId: "py_datetime",
    question: "Handle daylight saving time transitions.",
    mathSolution: "Timezone-aware datetime handles DST automatically",
    codeSolution: "from datetime import datetime, timedelta\nfrom zoneinfo import ZoneInfo\n\n# DST transition dates for US Eastern Time\nny_tz = ZoneInfo('America/New_York')\n\n# Spring forward (March 10, 2024 at 2am becomes 3am)\nspring_forward = datetime(2024, 3, 10, 1, 30, tzinfo=ny_tz)\nprint(f'Before DST: {spring_forward}')\none_hour_later = spring_forward + timedelta(hours=1)\nprint(f'1 hour later: {one_hour_later}')  # Jumps to 3:30\n\n# Fall back (November 3, 2024 at 1am happens twice)\nfall_back = datetime(2024, 11, 3, 0, 30, tzinfo=ny_tz)\nprint(f'\\nBefore fall back: {fall_back}')\nfor i in range(4):\n    print(f'{i} hour later: {fall_back + timedelta(hours=i)}')\n\n# Check if DST is active\nprint(f'\\nMarch 1 DST: {ny_tz.dst(datetime(2024, 3, 1, tzinfo=ny_tz))}')\nprint(f'June 1 DST: {ny_tz.dst(datetime(2024, 6, 1, tzinfo=ny_tz))}')",
    hint: "Timedelta arithmetic respects DST transitions"
  },
  {
    Id: "py_dt_23",
    topicId: "py_datetime",
    question: "Get current time in different timezones.",
    mathSolution: "Use zoneinfo to get time for different zones",
    codeSolution: "from datetime import datetime\nfrom zoneinfo import ZoneInfo\nfrom zoneinfo import available_timezones\n\n# Get current time in major cities\ncities = {\n    'New York': 'America/New_York',\n    'London': 'Europe/London',\n    'Tokyo': 'Asia/Tokyo',\n    'Sydney': 'Australia/Sydney',\n    'Dubai': 'Asia/Dubai',\n    'Moscow': 'Europe/Moscow'\n}\n\nprint('Current time in major cities:')\nfor city, tz_name in cities.items():\n    tz = ZoneInfo(tz_name)\n    city_time = datetime.now(tz)\n    print(f'{city:10}: {city_time.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\n\n# Get all timezones for a country\nus_zones = [tz for tz in available_timezones() if tz.startswith('US/')]\nprint(f'\\nUS timezones: {us_zones}')",
    hint: "Use available_timezones() to list all IANA timezone names"
  },
  {
    Id: "py_dt_24",
    topicId: "py_datetime",
    question: "Convert between datetime and timestamp.",
    mathSolution: "timestamp() converts to Unix time, fromtimestamp() converts back",
    codeSolution: "from datetime import datetime, timezone\n\n# Current timestamp\nnow = datetime.now()\ntimestamp = now.timestamp()\nprint(f'Datetime: {now}')\nprint(f'Timestamp: {timestamp}')\n\n# Convert back\nback_to_dt = datetime.fromtimestamp(timestamp)\nprint(f'Back to datetime: {back_to_dt}')\n\n# UTC timestamp\nutc_now = datetime.now(timezone.utc)\nutc_timestamp = utc_now.timestamp()\nutc_back = datetime.fromtimestamp(utc_timestamp, tz=timezone.utc)\nprint(f'\\nUTC: {utc_now}')\nprint(f'UTC timestamp: {utc_timestamp}')\nprint(f'UTC back: {utc_back}')\n\n# Epoch\nepoch = datetime.fromtimestamp(0)\nprint(f'\\nEpoch: {epoch}')\n\n# Timestamp arithmetic\ntomorrow = datetime.fromtimestamp(timestamp + 86400)\nprint(f'Tomorrow: {tomorrow}')",
    hint: "Timestamp is seconds since 1970-01-01 UTC"
  },
  {
    Id: "py_dt_25",
    topicId: "py_datetime",
    question: "Parse ISO format datetime strings.",
    mathSolution: "fromisoformat() parses ISO 8601 strings",
    codeSolution: "from datetime import datetime, date, time\n\n# ISO format strings\niso_strings = [\n    '2024-01-15',\n    '2024-01-15T14:30:00',\n    '2024-01-15T14:30:00.123456',\n    '2024-01-15T14:30:00+05:30',\n    '2024-W03-1',  # Week date\n    '2024-045'      # Ordinal date\n]\n\nfor s in iso_strings:\n    try:\n        parsed = datetime.fromisoformat(s)\n        print(f'\"{s}\" -> {parsed}')\n    except ValueError as e:\n        print(f'\"{s}\" -> Error: {e}')\n\n# Convert to ISO format\nnow = datetime.now()\niso_format = now.isoformat()\nprint(f'\\nCurrent ISO: {iso_format}')\n\n# With timespec\nprint(f'Seconds: {now.isoformat(timespec=\"seconds\")}')\nprint(f'Minutes: {now.isoformat(timespec=\"minutes\")}')\nprint(f'Hours: {now.isoformat(timespec=\"hours\")}')",
    hint: "fromisoformat() handles most ISO 8601 formats automatically"
  },
  {
    Id: "py_dt_26",
    topicId: "py_datetime",
    question: "Calculate business days between two dates (excluding weekends).",
    mathSolution: "Count days excluding Saturday and Sunday",
    codeSolution: "from datetime import date, timedelta\n\ndef business_days(start, end):\n    days = 0\n    current = start\n    while current <= end:\n        if current.weekday() < 5:  # Monday=0 to Friday=4\n            days += 1\n        current += timedelta(days=1)\n    return days\n\nstart = date(2024, 1, 1)\nend = date(2024, 1, 31)\n\nbdays = business_days(start, end)\nprint(f'Business days between {start} and {end}: {bdays}')\n\n# Using numpy if available\ntry:\n    import numpy as np\n    bdays_np = np.busday_count(start, end + timedelta(days=1))\n    print(f'With numpy: {bdays_np}')\nexcept ImportError:\n    print('numpy not available')\n\n# Add business days to a date\ndef add_business_days(start, days):\n    current = start\n    added = 0\n    while added < days:\n        current += timedelta(days=1)\n        if current.weekday() < 5:\n            added += 1\n    return current\n\nprint(f'10 business days from {start}: {add_business_days(start, 10)}')",
    hint: "Weekdays are Monday=0 through Friday=4"
  },
  {
    Id: "py_dt_27",
    topicId: "py_datetime",
    question: "Calculate age in years with decimal precision.",
    mathSolution: "Age = (today - birth) / 365.2425 (accounting for leap years)",
    codeSolution: "from datetime import date\n\ndef precise_age(birth_date):\n    today = date.today()\n    \n    # Calculate years as float\n    age_years = today.year - birth_date.year\n    \n    # Adjust for current year\n    if today.month < birth_date.month or (today.month == birth_date.month and today.day < birth_date.day):\n        age_years -= 1\n        # Calculate days until birthday\n        next_birthday = date(today.year, birth_date.month, birth_date.day)\n        if next_birthday < today:\n            next_birthday = date(today.year + 1, birth_date.month, birth_date.day)\n        days_until = (next_birthday - today).days\n        days_in_year = 366 if calendar.isleap(today.year) else 365\n        fraction = (days_in_year - days_until) / days_in_year\n    else:\n        # Birthday already passed\n        next_birthday = date(today.year + 1, birth_date.month, birth_date.day)\n        days_since = (today - date(today.year, birth_date.month, birth_date.day)).days\n        days_in_year = 366 if calendar.isleap(today.year) else 365\n        fraction = days_since / days_in_year\n    \n    return age_years + fraction\n\nimport calendar\nbirth = date(1990, 5, 15)\nage = precise_age(birth)\nprint(f'Birth date: {birth}')\nprint(f'Precise age: {age:.6f} years')\n\n# Alternative using total days\ntotal_days = (date.today() - birth).days\napprox_age = total_days / 365.2425\nprint(f'Approximate age: {approx_age:.6f} years')",
    hint: "Use 365.2425 days per year for average including leap years"
  },
  {
    Id: "py_dt_28",
    topicId: "py_datetime",
    question: "Find all dates with specific weekday in a year.",
    mathSolution: "Iterate through year and collect matching weekdays",
    codeSolution: "from datetime import date, timedelta\n\ndef find_all_weekdays(year, target_weekday):\n    \"\"\"target_weekday: 0=Monday, 6=Sunday\"\"\"\n    dates = []\n    current = date(year, 1, 1)\n    while current.year == year:\n        if current.weekday() == target_weekday:\n            dates.append(current)\n        current += timedelta(days=1)\n    return dates\n\nweekday_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']\n\nfor i, name in enumerate(weekday_names):\n    dates = find_all_weekdays(2024, i)\n    print(f'All {name}s in 2024: {len(dates)} days')\n    print(f'  First: {dates[0]}, Last: {dates[-1]}\\n')\n\n# Find all Fridays the 13th\nfriday_13ths = []\nfor month in range(1, 13):\n    d = date(2024, month, 13)\n    if d.weekday() == 4:  # Friday\n        friday_13ths.append(d)\nprint(f'Friday the 13ths in 2024: {friday_13ths}')",
    hint: "Use weekday() to check day of week"
  },
  {
    Id: "py_dt_29",
    topicId: "py_datetime",
    question: "Calculate time elapsed between two times (with date handling).",
    mathSolution: "Convert to datetime for time arithmetic across days",
    codeSolution: "from datetime import datetime, time, timedelta\n\ndef time_elapsed(start_time, end_time, start_date=None, end_date=None):\n    if start_date is None:\n        start_date = datetime.today().date()\n    if end_date is None:\n        end_date = datetime.today().date()\n    \n    start_dt = datetime.combine(start_date, start_time)\n    end_dt = datetime.combine(end_date, end_time)\n    \n    if end_dt < start_dt:\n        end_dt += timedelta(days=1)  # Assume next day\n    \n    return end_dt - start_dt\n\n# Same day\nstart = time(9, 30)\nend = time(17, 45)\nelapsed = time_elapsed(start, end)\nprint(f'Work hours: {elapsed}')\nprint(f'Hours: {elapsed.total_seconds() / 3600:.2f}')\n\n# Overnight shift\nstart_shift = time(22, 0)\nend_shift = time(6, 30)\nelapsed_overnight = time_elapsed(start_shift, end_shift)\nprint(f'Overnight shift: {elapsed_overnight}')\n\n# With specific dates\ndate1 = date(2024, 1, 15)\ndate2 = date(2024, 1, 16)\nelapsed_cross = time_elapsed(start_shift, end_shift, date1, date2)\nprint(f'With dates: {elapsed_cross}')",
    hint: "Use datetime.combine() to combine date and time"
  },
  {
    Id: "py_dt_30",
    topicId: "py_datetime",
    question: "Get the week number of a date (ISO and US formats).",
    mathSolution: "isocalendar() returns (ISO year, ISO week, ISO weekday)",
    codeSolution: "from datetime import date\n\ndates = [\n    date(2024, 1, 1),\n    date(2024, 12, 31),\n    date(2025, 1, 1),\n    date.today()\n]\n\nfor d in dates:\n    # ISO week (Monday-based, weeks start on Monday, week 1 has Jan 4)\n    iso_year, iso_week, iso_weekday = d.isocalendar()\n    \n    # US week (Sunday-based, weeks start on Sunday)\n    us_week = d.strftime('%U')  # Week number (Sunday as first day)\n    \n    # European week (Monday-based, simple)\n    eu_week = d.strftime('%W')  # Week number (Monday as first day)\n    \n    print(f'Date: {d}')\n    print(f'  ISO: Year {iso_year}, Week {iso_week}, Day {iso_weekday}')\n    print(f'  US format (Sun): Week {us_week}')\n    print(f'  EU format (Mon): Week {eu_week}\\n')\n\n# Get all dates in a specific week\ndef dates_in_week(year, week):\n    start = date.fromisocalendar(year, week, 1)  # Monday\n    return [start + timedelta(days=i) for i in range(7)]\n\nfrom datetime import timedelta\nweek_dates = dates_in_week(2024, 1)\nprint('Week 1 of 2024:')\nfor d in week_dates:\n    print(f'  {d.strftime(\"%A %Y-%m-%d\")}')",
    hint: "isocalendar() gives ISO week, strftime('%U') for Sunday-based, '%W' for Monday-based"
  },
  {
    Id: "py_dt_31",
    topicId: "py_datetime",
    question: "Find the date of Easter Sunday for a given year.",
    mathSolution: "Easter date using Computus algorithm",
    codeSolution: "from datetime import date\n\ndef easter_date(year):\n    \"\"\"Calculate Easter Sunday date using Butcher's algorithm\"\"\"\n    a = year % 19\n    b = year // 100\n    c = year % 100\n    d = b // 4\n    e = b % 4\n    f = (b + 8) // 25\n    g = (b - f + 1) // 3\n    h = (19 * a + b - d - g + 15) % 30\n    i = c // 4\n    k = c % 4\n    l = (32 + 2 * e + 2 * i - h - k) % 7\n    m = (a + 11 * h + 22 * l) // 451\n    month = (h + l - 7 * m + 114) // 31\n    day = ((h + l - 7 * m + 114) % 31) + 1\n    return date(year, month, day)\n\nfor year in [2023, 2024, 2025, 2026]:\n    easter = easter_date(year)\n    print(f'Easter {year}: {easter.strftime(\"%B %d\")}')\n\n# Easter range\nprint('\\nEaster dates 2020-2030:')\nfor year in range(2020, 2031):\n    easter = easter_date(year)\n    print(f'{year}: {easter.strftime(\"%b %d\")}', end=' | ')",
    hint: "Easter falls between March 22 and April 25"
  },
  {
    Id: "py_dt_32",
    topicId: "py_datetime",
    question: "Calculate moon phase for a given date (simplified).",
    mathSolution: "Moon phase based on days since known new moon",
    codeSolution: "from datetime import date, timedelta\n\ndef moon_phase(date_obj):\n    # Known new moon: 2000-01-06\n    known_new_moon = date(2000, 1, 6)\n    days_since = (date_obj - known_new_moon).days\n    \n    # Lunar cycle is about 29.53 days\n    lunations = days_since / 29.53058867\n    phase_index = lunations % 1  # Fractional part\n    \n    phases = [\n        (0, 'New Moon'),\n        (0.25, 'First Quarter'),\n        (0.5, 'Full Moon'),\n        (0.75, 'Last Quarter')\n    ]\n    \n    # Find closest phase\n    closest = min(phases, key=lambda p: min(abs(phase_index - p[0]), 1 - abs(phase_index - p[0])))\n    return closest[1]\n\n# Test dates\ntest_dates = [\n    date(2024, 1, 11),  # New Moon approx\n    date(2024, 1, 18),  # First Quarter\n    date(2024, 1, 25),  # Full Moon\n    date(2024, 2, 2),   # Last Quarter\n    date.today()\n]\n\nfor d in test_dates:\n    phase = moon_phase(d)\n    print(f'{d}: {phase}')\n\n# Simple illumination percentage\nfrom math import sin, pi\ndef moon_illumination(date_obj):\n    known_new_moon = date(2000, 1, 6)\n    days_since = (date_obj - known_new_moon).days\n    angle = (days_since % 29.53) / 29.53 * 2 * pi\n    return (1 + sin(angle - pi/2)) / 2 * 100\n\nprint(f'\\nIllumination today: {moon_illumination(date.today()):.1f}%')",
    hint: "Lunar cycle is approximately 29.53 days"
  },
  {
    Id: "py_dt_33",
    topicId: "py_datetime",
    question: "Calculate sunrise and sunset times (simplified).",
    mathSolution: "Approximate sunrise/sunset based on latitude and day of year",
    codeSolution: "from datetime import datetime, timedelta\nimport math\n\ndef sunrise_sunset(latitude, longitude, date_obj):\n    # Simplified calculation - not accurate for all locations\n    # Based on solar declination and equation of time\n    \n    # Day of year\n    doy = date_obj.timetuple().tm_yday\n    \n    # Solar declination (approximate)\n    declination = 23.45 * math.sin(math.radians(360/365 * (doy - 81)))\n    \n    # Hour angle at sunrise/sunset\n    lat_rad = math.radians(latitude)\n    dec_rad = math.radians(declination)\n    \n    cos_ha = -math.tan(lat_rad) * math.tan(dec_rad)\n    \n    if cos_ha > 1 or cos_ha < -1:\n        return None, None  # Polar day/night\n    \n    ha = math.degrees(math.acos(cos_ha))\n    \n    # Equation of time (approximate)\n    eot = 0.17 * math.sin(math.radians(4 * (doy - 80))) - 0.129 * math.sin(math.radians(2 * (doy - 8)))\n    \n    # Solar noon\n    solar_noon = 12 + (4 * longitude - eot) / 60\n    \n    sunrise = solar_noon - ha / 15\n    sunset = solar_noon + ha / 15\n    \n    # Convert to time objects\n    def hour_to_time(hour):\n        h = int(hour)\n        m = int((hour - h) * 60)\n        return datetime.combine(date_obj, datetime.min.time()) + timedelta(hours=h, minutes=m)\n    \n    return hour_to_time(sunrise), hour_to_time(sunset)\n\n# New York City (approx)\nny_lat, ny_lon = 40.71, -74.01\n\ntoday = datetime.now().date()\nsunrise, sunset = sunrise_sunset(ny_lat, ny_lon, today)\n\nprint(f'Location: New York City')\nprint(f'Date: {today}')\nif sunrise and sunset:\n    print(f'Sunrise: {sunrise.strftime(\"%H:%M\")}')\n    print(f'Sunset: {sunset.strftime(\"%H:%M\")}')\n    print(f'Day length: {sunset - sunrise}')\nelse:\n    print('Polar day/night')\n\n# Check different dates\nprint('\\nDay length through the year:')\nfor month in [1, 4, 7, 10]:\n    d = date(today.year, month, 15)\n    sr, ss = sunrise_sunset(ny_lat, ny_lon, d)\n    if sr and ss:\n        length = ss - sr\n        print(f'{d.strftime(\"%B\"):10}: {length}')",
    hint: "Sunrise/sunset calculations depend on latitude and day of year"
  },
  {
    Id: "py_dt_34",
    topicId: "py_datetime",
    question: "Create a countdown timer using datetime.",
    mathSolution: "Calculate time remaining until target datetime",
    codeSolution: "from datetime import datetime, timedelta\nimport time\n\ndef countdown(target_datetime):\n    while True:\n        now = datetime.now()\n        remaining = target_datetime - now\n        \n        if remaining.total_seconds() <= 0:\n            print(\"\\nCountdown finished!\")\n            break\n        \n        # Format remaining time\n        days = remaining.days\n        hours, remainder = divmod(remaining.seconds, 3600)\n        minutes, seconds = divmod(remainder, 60)\n        \n        print(f'\\rTime remaining: {days}d {hours:02d}:{minutes:02d}:{seconds:02d}', end='')\n        time.sleep(1)\n\n# Set target (e.g., New Year)\ntarget = datetime(datetime.now().year + 1, 1, 1, 0, 0, 0)\nprint(f'Countdown to {target.strftime(\"%Y-%m-%d %H:%M:%S\")}')\n\n# Uncomment to run (will loop)\n# countdown(target)\n\n# Calculate without running\ndef time_until(target):\n    now = datetime.now()\n    remaining = target - now\n    \n    days = remaining.days\n    hours, remainder = divmod(remaining.seconds, 3600)\n    minutes, seconds = divmod(remainder, 60)\n    \n    return days, hours, minutes, seconds\n\nd, h, m, s = time_until(target)\nprint(f'Time until {target.strftime(\"%Y-%m-%d %H:%M:%S\")}: {d}d {h:02d}:{m:02d}:{s:02d}')",
    hint: "Use timedelta to get time difference"
  },
  {
    Id: "py_dt_35",
    topicId: "py_datetime",
    question: "Generate random dates within a range.",
    mathSolution: "Random date = start + random days within range",
    codeSolution: "from datetime import date, timedelta\nimport random\n\ndef random_date(start_date, end_date):\n    days_between = (end_date - start_date).days\n    random_days = random.randint(0, days_between)\n    return start_date + timedelta(days=random_days)\n\nstart = date(2024, 1, 1)\nend = date(2024, 12, 31)\n\nprint(f'Random dates between {start} and {end}:')\nfor i in range(5):\n    rand_date = random_date(start, end)\n    print(f'  {i+1}: {rand_date.strftime(\"%Y-%m-%d (%A)\")}')\n\n# Generate multiple random dates\nrandom_dates = [random_date(start, end) for _ in range(10)]\nprint(f'\\nSorted random dates:')\nfor d in sorted(random_dates):\n    print(f'  {d}')\n\n# Random time within a day\ndef random_time_on_date(base_date):\n    random_seconds = random.randint(0, 86399)  # Seconds in a day\n    return datetime.combine(base_date, datetime.min.time()) + timedelta(seconds=random_seconds)\n\nrand_dt = random_time_on_date(date.today())\nprint(f'\\nRandom time today: {rand_dt.strftime(\"%Y-%m-%d %H:%M:%S\")}')",
    hint: "Convert date difference to days and add random days to start"
  },
  {
    Id: "py_dt_36",
    topicId: "py_datetime",
    question: "Find overlapping date ranges between two periods.",
    mathSolution: "Overlap starts at max(start1, start2), ends at min(end1, end2)",
    codeSolution: "from datetime import date\n\ndef date_range_overlap(start1, end1, start2, end2):\n    \"\"\"Returns (overlap_start, overlap_end) or None if no overlap\"\"\"\n    latest_start = max(start1, start2)\n    earliest_end = min(end1, end2)\n    \n    if latest_start <= earliest_end:\n        return (latest_start, earliest_end)\n    return None\n\n# Test cases\nranges = [\n    (date(2024, 1, 1), date(2024, 1, 31)),\n    (date(2024, 1, 15), date(2024, 2, 15)),\n    (date(2024, 2, 1), date(2024, 2, 28)),\n    (date(2024, 3, 1), date(2024, 3, 31))\n]\n\nfor i in range(len(ranges)):\n    for j in range(i+1, len(ranges)):\n        overlap = date_range_overlap(ranges[i][0], ranges[i][1], ranges[j][0], ranges[j][1])\n        print(f'Range {i+1}: {ranges[i][0]} to {ranges[i][1]}')\n        print(f'Range {j+1}: {ranges[j][0]} to {ranges[j][1]}')\n        if overlap:\n            print(f'  Overlap: {overlap[0]} to {overlap[1]}')\n            print(f'  Duration: {(overlap[1] - overlap[0]).days + 1} days')\n        else:\n            print('  No overlap')\n        print()\n\n# Check if date is in range\ndef date_in_range(check_date, start, end):\n    return start <= check_date <= end\n\ncheck = date(2024, 2, 14)\nprint(f'Is {check} in Feb 1-28? {date_in_range(check, date(2024,2,1), date(2024,2,28))}')",
    hint: "Overlap exists if max(start) <= min(end)"
  },
  {
    Id: "py_dt_37",
    topicId: "py_datetime",
    question: "Calculate working hours between two timestamps (excluding weekends and holidays).",
    mathSolution: "Count hours during work days, excluding specified breaks",
    codeSolution: "from datetime import datetime, timedelta, time\n\ndef working_hours(start, end, work_start=time(9,0), work_end=time(17,0), holidays=None):\n    if holidays is None:\n        holidays = []\n    \n    total_hours = 0\n    current = start\n    \n    while current.date() <= end.date():\n        # Skip weekends and holidays\n        if current.weekday() >= 5 or current.date() in holidays:\n            current = datetime.combine(current.date() + timedelta(days=1), time(0,0))\n            continue\n        \n        # Work day boundaries\n        day_start = datetime.combine(current.date(), work_start)\n        day_end = datetime.combine(current.date(), work_end)\n        \n        # Clip to actual start/end times\n        effective_start = max(current, day_start)\n        effective_end = min(end, day_end) if end.date() == current.date() else day_end\n        \n        if effective_start < effective_end:\n            hours = (effective_end - effective_start).total_seconds() / 3600\n            total_hours += hours\n        \n        # Move to next day\n        current = datetime.combine(current.date() + timedelta(days=1), time(0,0))\n    \n    return total_hours\n\n# Example\nstart = datetime(2024, 1, 15, 14, 30)\nend = datetime(2024, 1, 17, 11, 0)\nholidays = [date(2024, 1, 16)]  # Holiday on Tuesday\n\nhours = working_hours(start, end, holidays=holidays)\nprint(f'Working hours between {start} and {end}: {hours:.2f}')\n\n# Different work hours\neurope_hours = working_hours(start, end, time(8,0), time(16,0))\nprint(f'European hours (8-16): {europe_hours:.2f}')\n\n# Full week calculation\nweek_start = datetime(2024, 1, 22, 0, 0)\nweek_end = datetime(2024, 1, 26, 17, 0)\nweek_hours = working_hours(week_start, week_end)\nprint(f'Full week hours: {week_hours:.2f} (expected 5*8=40)')",
    hint: "Handle each day separately and clip to working hours"
  },
  {
    Id: "py_dt_38",
    topicId: "py_datetime",
    question: "Create a recurring event scheduler (daily, weekly, monthly).",
    mathSolution: "Generate next occurrence based on recurrence pattern",
    codeSolution: "from datetime import date, timedelta\nfrom dateutil.relativedelta import relativedelta\n\ndef next_occurrence(start_date, pattern, interval=1):\n    \"\"\"pattern: 'daily', 'weekly', 'monthly', 'yearly'\"\"\"\n    today = date.today()\n    \n    if pattern == 'daily':\n        next_date = start_date\n        while next_date < today:\n            next_date += timedelta(days=interval)\n    elif pattern == 'weekly':\n        next_date = start_date\n        while next_date < today:\n            next_date += timedelta(weeks=interval)\n    elif pattern == 'monthly':\n        next_date = start_date\n        while next_date < today:\n            # Handle month boundaries\n            try:\n                next_date = next_date.replace(year=next_date.year + (next_date.month + interval - 1) // 12,\n                                            month=(next_date.month + interval - 1) % 12 + 1)\n            except ValueError:\n                # Handle invalid dates (e.g., Jan 31 + 1 month)\n                next_date = next_date + timedelta(days=30)\n    elif pattern == 'yearly':\n        next_date = start_date\n        while next_date < today:\n            try:\n                next_date = next_date.replace(year=next_date.year + interval)\n            except ValueError:\n                next_date = next_date + timedelta(days=365)\n    else:\n        return None\n    \n    return next_date\n\n# Examples\nstart = date(2024, 1, 1)\npatterns = ['daily', 'weekly', 'monthly', 'yearly']\n\nfor pattern in patterns:\n    next_date = next_occurrence(start, pattern)\n    print(f'Next {pattern} from {start}: {next_date}')\n\n# Birthday calculation\nbirthday = date(1990, 5, 15)\nnext_birthday = next_occurrence(birthday, 'yearly')\nage = next_birthday.year - birthday.year\nprint(f'\\nNext birthday: {next_birthday.strftime(\"%B %d, %Y\")} (age {age})')\n\n# Payday (15th of each month)\ndef next_payday():\n    today = date.today()\n    payday = date(today.year, today.month, 15)\n    if payday < today:\n        if today.month == 12:\n            payday = date(today.year + 1, 1, 15)\n        else:\n            payday = date(today.year, today.month + 1, 15)\n    return payday\n\nprint(f'Next payday: {next_payday()}')",
    hint: "Use dateutil.relativedelta for more accurate month arithmetic"
  },
  {
    Id: "py_dt_39",
    topicId: "py_datetime",
    question: "Format duration in human-readable format (e.g., '2 days, 3 hours').",
    mathSolution: "Convert seconds to appropriate units",
    codeSolution: "from datetime import timedelta\n\ndef format_duration(delta):\n    seconds = int(delta.total_seconds())\n    \n    periods = [\n        ('year', 365 * 24 * 3600),\n        ('month', 30 * 24 * 3600),\n        ('week', 7 * 24 * 3600),\n        ('day', 24 * 3600),\n        ('hour', 3600),\n        ('minute', 60),\n        ('second', 1)\n    ]\n    \n    parts = []\n    for period_name, period_seconds in periods:\n        if seconds >= period_seconds:\n            period_value, seconds = divmod(seconds, period_seconds)\n            if period_value > 0:\n                parts.append(f'{period_value} {period_name}{\"s\" if period_value > 1 else \"\"}')\n    \n    if not parts:\n        return '0 seconds'\n    \n    if len(parts) == 1:\n        return parts[0]\n    \n    return ', '.join(parts[:-1]) + ' and ' + parts[-1]\n\ndurations = [\n    timedelta(seconds=45),\n    timedelta(minutes=5, seconds=30),\n    timedelta(hours=2, minutes=15),\n    timedelta(days=1, hours=3, minutes=30),\n    timedelta(weeks=2, days=3, hours=12),\n    timedelta(days=365)\n]\n\nfor delta in durations:\n    print(f'{delta} -> \"{format_duration(delta)}\"')\n\n# Age in human-readable format\nfrom datetime import date\nbirth = date(1990, 5, 15)\nage_delta = date.today() - birth\nprint(f'\\nAge: {format_duration(age_delta)}')",
    hint: "Break down seconds into largest to smallest units"
  },
  {
    Id: "py_dt_40",
    topicId: "py_datetime",
    question: "Parse dates in multiple formats using dateutil.parser.",
    mathSolution: "dateutil.parser handles many date formats automatically",
    codeSolution: "from dateutil import parser\n\ndate_strings = [\n    '2024-01-15',\n    '15/01/2024',\n    'January 15, 2024',\n    'Jan 15, 2024',\n    '15 Jan 2024',\n    '2024.01.15',\n    '01/15/2024',  # US format\n    '2024-01-15 14:30:00',\n    '2024-01-15T14:30:00Z',\n    'Yesterday',\n    'Today',\n    'Tomorrow',\n    'Next Monday',\n    'Last Friday'\n]\n\nprint('Parsing various date formats:')\nfor s in date_strings:\n    try:\n        parsed = parser.parse(s, fuzzy=True)\n        print(f'\"{s:25}\" -> {parsed.strftime(\"%Y-%m-%d %H:%M:%S\")}')\n    except Exception as e:\n        print(f'\"{s:25}\" -> Error: {e}')\n\n# With default date for missing parts\nparsed = parser.parse('14:30', default=datetime.now())\nprint(f'\\n\"14:30\" with default -> {parsed}')\n\n# Fuzzy parsing (ignores non-date text)\ntext = 'Meeting on January 15th at 2:30pm'\nparsed = parser.parse(text, fuzzy=True)\nprint(f'\"{text}\" -> {parsed}')",
    hint: "Install dateutil: pip install python-dateutil"
  },
  {
    Id: "py_dt_41",
    topicId: "py_datetime",
    question: "Calculate date of Chinese New Year for a given year.",
    mathSolution: "Chinese New Year falls between Jan 21 and Feb 20",
    codeSolution: "from datetime import date, timedelta\nimport math\n\ndef chinese_new_year(year):\n    \"\"\"Simplified calculation - not 100% accurate for all years\"\"\"\n    # Based on astronomical calculations\n    # Reference: 2024 Chinese New Year is Feb 10\n    \n    # Known reference\n    ref_year = 2024\n    ref_date = date(2024, 2, 10)\n    \n    # Lunar cycle is about 29.53 days, 12 months per year\n    lunar_year_days = 29.53058867 * 12\n    \n    years_diff = year - ref_year\n    days_diff = years_diff * lunar_year_days\n    \n    # Adjust for leap months\n    leap_correction = 0\n    for y in range(min(year, ref_year), max(year, ref_year)):\n        if has_leap_month(y):\n            leap_correction += 29.53 if y < ref_year else -29.53\n    \n    total_diff = days_diff + leap_correction\n    \n    return ref_date + timedelta(days=round(total_diff))\n\ndef has_leap_month(year):\n    # Simplified: leap years in Chinese calendar cycle\n    leap_years = [2020, 2023, 2025, 2028, 2031, 2033, 2036]\n    return year in leap_years\n\nfor year in [2023, 2024, 2025, 2026, 2027, 2028]:\n    cny = chinese_new_year(year)\n    animal = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', \n              'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']\n    animal_index = (year - 4) % 12  # 2024 is Dragon (index 4)\n    print(f'Chinese New Year {year}: {cny} ({cny.strftime(\"%A\")}) - Year of the {animal[animal_index]}')",
    hint: "Chinese New Year is based on lunisolar calendar"
  },
  {
    Id: "py_dt_42",
    topicId: "py_datetime",
    question: "Calculate Islamic (Hijri) date from Gregorian date.",
    mathSolution: "Hijri calendar based on lunar months",
    codeSolution: "from datetime import date\nimport math\n\ndef gregorian_to_hijri(gregorian_date):\n    \"\"\"Simplified conversion - approximate only\"\"\"\n    # Reference: 2024-01-01 ≈ 1445-06-19\n    ref_greg = date(2024, 1, 1)\n    ref_hijri = (1445, 6, 19)  # Year, month, day\n    \n    # Days difference\n    days_diff = (gregorian_date - ref_greg).days\n    \n    # Lunar month is ~29.53 days\n    months_diff = days_diff / 29.53058867\n    \n    hijri_year = ref_hijri[0]\n    hijri_month = ref_hijri[1]\n    hijri_day = ref_hijri[2] + days_diff\n    \n    # Adjust months\n    while hijri_day > 30:\n        if hijri_month in [1, 3, 5, 7, 9, 11]:  # Full months (30 days)\n            if hijri_day > 30:\n                hijri_day -= 30\n                hijri_month += 1\n        else:  # Hollow months (29 days)\n            if hijri_day > 29:\n                hijri_day -= 29\n                hijri_month += 1\n        \n        if hijri_month > 12:\n            hijri_month = 1\n            hijri_year += 1\n    \n    return hijri_year, hijri_month, int(hijri_day)\n\nmonth_names = [\n    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',\n    'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Shaban',\n    'Ramadan', 'Shawwal', 'Dhu al-Qadah', 'Dhu al-Hijjah'\n]\n\ntoday = date.today()\nhijri = gregorian_to_hijri(today)\nprint(f'Gregorian: {today}')\nprint(f'Hijri: {hijri[0]} {month_names[hijri[1]-1]} {hijri[2]}')\n\n# Ramadan dates\nprint('\\nRamadan start dates (approx):')\nfor year in range(2024, 2029):\n    ramadan_start = gregorian_to_hijri(date(year, 1, 1))\n    # Adjust to find Ramadan (month 9)\n    print(f'{year}: Ramadan starts around...')",
    hint: "Hijri calendar has 354 or 355 days per year"
  },
  {
    Id: "py_dt_43",
    topicId: "py_datetime",
    question: "Calculate Jewish (Hebrew) date from Gregorian date.",
    mathSolution: "Hebrew calendar lunisolar with leap months",
    codeSolution: "from datetime import date\nimport math\n\ndef gregorian_to_hebrew(gregorian_date):\n    \"\"\"Simplified conversion - approximate only\"\"\"\n    # Reference: 2024-01-01 ≈ 5784-04-19 (Tevet)\n    ref_greg = date(2024, 1, 1)\n    ref_hebrew = (5784, 4, 19)  # Year, month, day (Tevet=4)\n    \n    month_names = [\n        'Nisan', 'Iyar', 'Sivan', 'Tammuz', 'Av', 'Elul',\n        'Tishrei', 'Cheshvan', 'Kislev', 'Tevet', 'Shevat', 'Adar'\n    ]\n    \n    # Days difference\n    days_diff = (gregorian_date - ref_greg).days\n    \n    hebrew_year = ref_hebrew[0]\n    hebrew_month = ref_hebrew[1]\n    hebrew_day = ref_hebrew[2] + days_diff\n    \n    # Simple month adjustment\n    while hebrew_day > 30:\n        hebrew_day -= 30\n        hebrew_month += 1\n        if hebrew_month > 12:\n            hebrew_month = 1\n            hebrew_year += 1\n    \n    return hebrew_year, month_names[hebrew_month-1], hebrew_day\n\ntoday = date.today()\nhebrew = gregorian_to_hebrew(today)\nprint(f'Gregorian: {today}')\nprint(f'Hebrew: {hebrew[0]} {hebrew[1]} {hebrew[2]}')\n\n# Jewish holidays (simplified)\nholidays = [\n    ('Rosh Hashanah', 7, 1),  # Tishrei 1\n    ('Yom Kippur', 7, 10),     # Tishrei 10\n    ('Sukkot', 7, 15),         # Tishrei 15\n    ('Hanukkah', 9, 25),       # Kislev 25\n    ('Purim', 12, 14),         # Adar 14\n    ('Passover', 1, 15),       # Nisan 15\n    ('Shavuot', 3, 6)          # Sivan 6\n]\n\nprint('\\nUpcoming Jewish holidays:')\nfor name, month, day in holidays:\n    print(f'  {name}: {month_names[month-1]} {day}')",
    hint: "Hebrew months: Nisan (1) through Adar (12)"
  },
  {
    Id: "py_dt_44",
    topicId: "py_datetime",
    question: "Calculate planetary hours for a given date and location.",
    mathSolution: "Planetary hours based on sunrise/sunset and planetary order",
    codeSolution: "from datetime import datetime, timedelta\nimport math\n\ndef planetary_hours(date_obj, latitude, longitude):\n    # Get sunrise/sunset (simplified)\n    def sunrise_sunset_simple(date_obj, lat, lon):\n        # Simplified - just for demonstration\n        doy = date_obj.timetuple().tm_yday\n        declination = 23.45 * math.sin(math.radians(360/365 * (doy - 81)))\n        ha = math.degrees(math.acos(-math.tan(math.radians(lat)) * math.tan(math.radians(declination))))\n        solar_noon = 12 + (4 * lon) / 60\n        sunrise = solar_noon - ha / 15\n        sunset = solar_noon + ha / 15\n        \n        def hour_to_time(hour):\n            h = int(hour)\n            m = int((hour - h) * 60)\n            return datetime.combine(date_obj, datetime.min.time()) + timedelta(hours=h, minutes=m)\n        \n        return hour_to_time(sunrise), hour_to_time(sunset)\n    \n    sunrise, sunset = sunrise_sunset_simple(date_obj, latitude, longitude)\n    next_sunrise = sunrise + timedelta(days=1)\n    \n    # Day and night lengths\n    day_length = sunset - sunrise\n    night_length = next_sunrise - sunset\n    \n    # Planetary hours (approx 1/12 of day/night)\n    day_hour = day_length / 12\n    night_hour = night_length / 12\n    \n    # Planetary rulers (Chaldean order)\n    planets = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon']\n    \n    # Start first hour of day with Sun (for Sunday)\n    day_offset = date_obj.weekday()\n    \n    print(f'Date: {date_obj}')\n    print(f'Sunrise: {sunrise.strftime(\"%H:%M\")}')\n    print(f'Sunset: {sunset.strftime(\"%H:%M\")}')\n    print(f'Day length: {day_length}')\n    print(f'Night length: {night_length}')\n    \n    print('\\nPlanetary hours:')\n    current = sunrise\n    for i in range(12):\n        planet = planets[(i + day_offset) % 7]\n        end = current + day_hour\n        print(f'  Day hour {i+1}: {current.strftime(\"%H:%M\")} - {end.strftime(\"%H:%M\")}: {planet}')\n        current = end\n    \n    print('\\nNight hours:')\n    for i in range(12):\n        planet = planets[(i + day_offset + 6) % 7]\n        end = current + night_hour\n        print(f'  Night hour {i+1}: {current.strftime(\"%H:%M\")} - {end.strftime(\"%H:%M\")}: {planet}')\n        current = end\n\n# Example for New York\nny_lat, ny_lon = 40.71, -74.01\ntoday = date.today()\nplanetary_hours(today, ny_lat, ny_lon)",
    hint: "Planetary hours divide day and night into 12 equal parts"
  },
  {
    Id: "py_dt_45",
    topicId: "py_datetime",
    question: "Calculate dog years (and other animal years) from human years.",
    mathSolution: "Different animals age at different rates",
    codeSolution: "from datetime import date, timedelta\n\ndef human_to_animal_years(birth_date, animal='dog'):\n    today = date.today()\n    days_old = (today - birth_date).days\n    years_old = days_old / 365.2425\n    \n    conversions = {\n        'dog': lambda y: 15 + (y-1)*9 if y <= 2 else 24 + (y-2)*4,\n        'cat': lambda y: 15 + (y-1)*9 if y <= 2 else 24 + (y-2)*4,\n        'horse': lambda y: 3.5 + y*2.5,\n        'rabbit': lambda y: y * 8,\n        'hamster': lambda y: y * 25,\n        'turtle': lambda y: y * 0.5,\n        'parrot': lambda y: y * 0.3,\n    }\n    \n    results = {}\n    for animal, formula in conversions.items():\n        if animal == 'dog' and years_old <= 2:\n            results[animal] = formula(years_old)\n        else:\n            results[animal] = formula(years_old)\n    \n    return results\n\nbirth = date(2020, 1, 1)\nages = human_to_animal_years(birth)\n\nprint(f'Human birth date: {birth}')\nprint(f'Human age: {(date.today() - birth).days / 365.2425:.2f} years')\nprint('\\nAnimal ages:')\nfor animal, age in ages.items():\n    print(f'  {animal.capitalize():8}: {age:.1f} years')\n\n# Animal to human years\ndef animal_to_human_years(animal_age, animal='dog'):\n    conversions = {\n        'dog': lambda a: 1 + (a-1)/9 if a <= 24 else 2 + (a-24)/4,\n        'cat': lambda a: 1 + (a-1)/9 if a <= 24 else 2 + (a-24)/4,\n        'horse': lambda a: (a - 3.5) / 2.5,\n        'rabbit': lambda a: a / 8,\n        'hamster': lambda a: a / 25,\n        'turtle': lambda a: a / 0.5,\n        'parrot': lambda a: a / 0.3,\n    }\n    return conversions.get(animal, lambda a: a)(animal_age)\n\nprint('\\n10 dog years in human years:')\ndog_10 = animal_to_human_years(10, 'dog')\nprint(f'  10 dog years = {dog_10:.1f} human years')",
    hint: "Dog aging: 15 years first year, 9 years second, 4 years each after"
  },
  {
    Id: "py_dt_46",
    topicId: "py_datetime",
    question: "Calculate zodiac sign and Chinese zodiac from birth date.",
    mathSolution: "Zodiac based on date ranges, Chinese zodiac on year",
    codeSolution: "from datetime import date\n\ndef get_zodiac_sign(birth_date):\n    month, day = birth_date.month, birth_date.day\n    \n    signs = [\n        (('Capricorn', 12, 22), ('Aquarius', 1, 20)),\n        (('Aquarius', 1, 21), ('Pisces', 2, 19)),\n        (('Pisces', 2, 20), ('Aries', 3, 20)),\n        (('Aries', 3, 21), ('Taurus', 4, 20)),\n        (('Taurus', 4, 21), ('Gemini', 5, 21)),\n        (('Gemini', 5, 22), ('Cancer', 6, 21)),\n        (('Cancer', 6, 22), ('Leo', 7, 22)),\n        (('Leo', 7, 23), ('Virgo', 8, 23)),\n        (('Virgo', 8, 24), ('Libra', 9, 23)),\n        (('Libra', 9, 24), ('Scorpio', 10, 23)),\n        (('Scorpio', 10, 24), ('Sagittarius', 11, 22)),\n        (('Sagittarius', 11, 23), ('Capricorn', 12, 21)),\n    ]\n    \n    for (sign1, m1, d1), (sign2, m2, d2) in signs:\n        if (month == m1 and day >= d1) or (month == m2 and day <= d2):\n            return sign1\n    return 'Unknown'\n\ndef get_chinese_zodiac(birth_date):\n    animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake',\n               'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']\n    \n    # 2024 is Dragon (index 4 if 2000 is Dragon?)\n    year = birth_date.year\n    if birth_date < date(year, 2, 4):  # Before Chinese New Year\n        year -= 1\n    \n    # 2000 was Dragon (index 4)\n    index = (year - 2000) % 12\n    return animals[index]\n\nbirth_dates = [\n    date(1990, 5, 15),\n    date(2000, 1, 1),\n    date(2024, 2, 10),\n    date.today()\n]\n\nfor bd in birth_dates:\n    zodiac = get_zodiac_sign(bd)\n    chinese = get_chinese_zodiac(bd)\n    print(f'{bd.strftime(\"%B %d, %Y\")}: {zodiac} (Western), {chinese} (Chinese)')",
    hint: "Chinese zodiac changes at Chinese New Year, not Jan 1"
  },
  {
    Id: "py_dt_47",
    topicId: "py_datetime",
    question: "Calculate time until next birthday and display countdown.",
    mathSolution: "Next birthday is today's date with birth month/day, adjusted for future",
    codeSolution: "from datetime import date, datetime, timedelta\n\ndef next_birthday(birth_date):\n    today = date.today()\n    \n    # Birthday this year\n    next_bd = date(today.year, birth_date.month, birth_date.day)\n    \n    # If already passed, next year\n    if next_bd < today:\n        next_bd = date(today.year + 1, birth_date.month, birth_date.day)\n    \n    return next_bd\n\ndef birthday_countdown(birth_date):\n    next_bd = next_birthday(birth_date)\n    today = date.today()\n    \n    days_until = (next_bd - today).days\n    \n    # Calculate age at next birthday\n    age_at_next = next_bd.year - birth_date.year\n    \n    # Calculate in weeks, months\n    weeks = days_until // 7\n    remaining_days = days_until % 7\n    \n    months = days_until // 30\n    approx_months_remaining = days_until - (months * 30)\n    \n    return {\n        'next_birthday': next_bd,\n        'days': days_until,\n        'weeks': weeks,\n        'weeks_days': f'{weeks} weeks, {remaining_days} days',\n        'months': f'{months} months, {approx_months_remaining} days (approx)',\n        'age': age_at_next,\n        'weekday': next_bd.strftime('%A')\n    }\n\nbirth = date(1990, 5, 15)\ncountdown = birthday_countdown(birth)\n\nprint(f'Birth date: {birth.strftime(\"%B %d, %Y\")}')\nprint(f'Next birthday: {countdown[\"next_birthday\"].strftime(\"%B %d, %Y\")} ({countdown[\"weekday\"]})')\nprint(f'You will be: {countdown[\"age\"]} years old')\nprint(f'Time until birthday:')\nprint(f'  Days: {countdown[\"days\"]}')\nprint(f'  Weeks: {countdown[\"weeks_days\"]}')\nprint(f'  Approx months: {countdown[\"months\"]}')\n\n# Multiple birthdays\nbirthdays = [\n    date(1990, 5, 15),\n    date(1985, 12, 25),\n    date(2000, 1, 1)\n]\n\nprint('\\n' + '='*40)\nfor bd in birthdays:\n    cd = birthday_countdown(bd)\n    print(f'{bd.strftime(\"%b %d\")}: {cd[\"days\"]} days until age {cd[\"age\"]}')",
    hint: "Handle Feb 29 birthdays specially (use March 1 in non-leap years)"
  },
  {
    Id: "py_dt_48",
    topicId: "py_datetime",
    question: "Calculate phase of the moon for a given date (more accurate).",
    mathSolution: "Moon phase based on julian day and lunar cycle",
    codeSolution: "from datetime import datetime, timedelta\nimport math\n\ndef moon_phase_accurate(date_obj):\n    \"\"\"Calculate moon phase using more accurate algorithm\"\"\"\n    \n    # Convert to Julian day (simplified)\n    def to_julian_day(dt):\n        a = (14 - dt.month) // 12\n        y = dt.year + 4800 - a\n        m = dt.month + 12 * a - 3\n        jd = dt.day + (153 * m + 2) // 5 + 365 * y + y // 4 - y // 100 + y // 400 - 32045\n        # Add time fraction\n        jd += (dt.hour - 12) / 24 + dt.minute / 1440 + dt.second / 86400\n        return jd\n    \n    # Known new moon (2000-01-06 18:14 UTC)\n    new_moon_jd = 2451550.1  # Approximate\n    lunar_cycle = 29.530588853  # Synodic month\n    \n    jd = to_julian_day(date_obj)\n    \n    # Days since known new moon\n    days_since = jd - new_moon_jd\n    \n    # Current phase in cycle (0 to 1)\n    phase = (days_since % lunar_cycle) / lunar_cycle\n    \n    # Phase names\n    if phase < 0.03 or phase > 0.97:\n        name = 'New Moon'\n        icon = '🌑'\n    elif phase < 0.22:\n        name = 'Waxing Crescent'\n        icon = '🌒'\n    elif phase < 0.28:\n        name = 'First Quarter'\n        icon = '🌓'\n    elif phase < 0.47:\n        name = 'Waxing Gibbous'\n        icon = '🌔'\n    elif phase < 0.53:\n        name = 'Full Moon'\n        icon = '🌕'\n    elif phase < 0.72:\n        name = 'Waning Gibbous'\n        icon = '🌖'\n    elif phase < 0.78:\n        name = 'Last Quarter'\n        icon = '🌗'\n    else:\n        name = 'Waning Crescent'\n        icon = '🌘'\n    \n    # Illumination percentage\n    illumination = (1 - math.cos(phase * 2 * math.pi)) / 2 * 100\n    \n    return {\n        'name': name,\n        'icon': icon,\n        'phase': phase,\n        'illumination': illumination,\n        'days_to_next_new': (1 - phase) * lunar_cycle if phase < 1 else 0\n    }\n\n# Test dates\ntest_dates = [\n    date(2024, 1, 11),  # New Moon\n    date(2024, 1, 18),  # First Quarter\n    date(2024, 1, 25),  # Full Moon\n    date(2024, 2, 2),   # Last Quarter\n    date.today()\n]\n\nfor d in test_dates:\n    phase = moon_phase_accurate(d)\n    print(f'{d}: {phase[\"icon\"]} {phase[\"name\"]:20} {phase[\"illumination\"]:.1f}% illuminated')",
    hint: "Use Julian day for accurate astronomical calculations"
  },
  {
    Id: "py_dt_49",
    topicId: "py_datetime",
    question: "Create a timezone-aware datetime from UTC offset.",
    mathSolution: "Create timezone with fixed offset using timezone(timedelta)",
    codeSolution: "from datetime import datetime, timezone, timedelta\n\ndef create_timezone_from_offset(hours, minutes=0, name=None):\n    offset = timedelta(hours=hours, minutes=minutes)\n    if name is None:\n        sign = '+' if offset.total_seconds() >= 0 else '-'\n        hours = abs(int(offset.total_seconds() // 3600))\n        minutes = abs(int((offset.total_seconds() % 3600) // 60))\n        name = f'UTC{sign}{hours:02d}:{minutes:02d}'\n    return timezone(offset, name)\n\n# Create different timezones\ntz_ny = create_timezone_from_offset(-5, name='EST')\ntz_london = create_timezone_from_offset(0, name='GMT')\ntz_tokyo = create_timezone_from_offset(9, name='JST')\ntz_ist = create_timezone_from_offset(5, 30, name='IST')  # India\n\n# Current time in UTC\nutc_now = datetime.now(timezone.utc)\nprint(f'UTC: {utc_now.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\n\n# Convert to different timezones\nny_now = utc_now.astimezone(tz_ny)\nlondon_now = utc_now.astimezone(tz_london)\ntokyo_now = utc_now.astimezone(tz_tokyo)\nist_now = utc_now.astimezone(tz_ist)\n\nprint(f'New York: {ny_now.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\nprint(f'London: {london_now.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\nprint(f'Tokyo: {tokyo_now.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\nprint(f'India: {ist_now.strftime(\"%Y-%m-%d %H:%M:%S %Z\")}')\n\n# Create datetime with specific offset\ndt_with_offset = datetime(2024, 1, 15, 14, 30, tzinfo=tz_ny)\nprint(f'\\nCreated with offset: {dt_with_offset}')\nprint(f'UTC equivalent: {dt_with_offset.astimezone(timezone.utc)}')",
    hint: "timezone(offset, name) creates fixed offset timezone"
  },
  {
    Id: "py_dt_50",
    topicId: "py_datetime",
    question: "Calculate the date of Easter using the Anonymous Gregorian algorithm.",
    mathSolution: "Computus algorithm calculates Easter date",
    codeSolution: "from datetime import date\n\ndef easter_date_accurate(year):\n    \"\"\"Calculate Easter Sunday using Anonymous Gregorian algorithm\"\"\"\n    # Gauss algorithm\n    a = year % 19\n    b = year // 100\n    c = year % 100\n    d = b // 4\n    e = b % 4\n    f = (b + 8) // 25\n    g = (b - f + 1) // 3\n    h = (19 * a + b - d - g + 15) % 30\n    i = c // 4\n    k = c % 4\n    l = (32 + 2 * e + 2 * i - h - k) % 7\n    m = (a + 11 * h + 22 * l) // 451\n    month = (h + l - 7 * m + 114) // 31\n    day = ((h + l - 7 * m + 114) % 31) + 1\n    \n    return date(year, month, day)\n\n# Calculate for multiple years\nprint('Easter dates 2020-2030:')\neaster_dates = []\nfor year in range(2020, 2031):\n    easter = easter_date_accurate(year)\n    easter_dates.append(easter)\n    print(f'{year}: {easter.strftime(\"%B %d\")}')\n\n# Find earliest and latest Easter\nearliest = min(easter_dates, key=lambda d: d.timetuple().tm_yday)\nlatest = max(easter_dates, key=lambda d: d.timetuple().tm_yday)\nprint(f'\\nEarliest Easter: {earliest.strftime(\"%B %d, %Y\")}')\nprint(f'Latest Easter: {latest.strftime(\"%B %d, %Y\")}')\n\n# Calculate Orthodox Easter (Julian calendar)\ndef orthodox_easter(year):\n    \"\"\"Simplified Orthodox Easter (Julian calculation)\"\"\"\n    a = year % 4\n    b = year % 7\n    c = year % 19\n    d = (19 * c + 15) % 30\n    e = (2 * a + 4 * b - d + 34) % 7\n    month = 3 + (d + e + 21) // 31\n    day = ((d + e + 21) % 31) + 1\n    \n    # Convert Julian to Gregorian (add 13 days for 20th-21st century)\n    orthodox = date(year, month, day)\n    return orthodox + timedelta(days=13)\n\nprint('\\nOrthodox Easter 2024:')\north = orthodox_easter(2024)\nprint(f'Orthodox: {orth.strftime(\"%B %d, %Y\")}')\nprint(f'Western: {easter_date_accurate(2024).strftime(\"%B %d, %Y\")}')",
    hint: "Western Easter uses Gregorian calendar, Orthodox uses Julian"
  }
);