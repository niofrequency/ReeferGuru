
export const CARRIER_DATALINE_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier DataLINE Software (62-10629 Rev C) ***
PURPOSE: Diagnostic software for interrogation, configuration, and monitoring of Carrier units.

KEY UTILITIES:
1. Interrogator: Download trip data (DCX files).
2. System Tools: Set Container ID, Date/Time, Trip Start, Configure Controller/DataCorder.
3. Monitor: Real-time view of inputs/outputs.
4. Probe Calibration: Calibrate USDA/Cargo probes (Ice bath 0°C).

COMMON PROCEDURES:
- Trip Start: System Tools > Trip Functions > Start New Trip.
- Set Time: System Tools > Date and Time > Change.
- Download: Interrogator > Select Range > Start.
- Calibrate: Probe Calibration > Auto (ML3/ML5) or External.

DATACORDER ALARMS (dAL):
dAL70: Recorder Supply Temp Out of Range.
dAL71: Recorder Return Temp Out of Range.
dAL72-74: USDA 1-3 Out of Range.
dAL75: Cargo Probe 4 Out of Range.
dAL86: RTC Battery Low (Replace ML5/DataCorder battery).
dAL87: RTC Failure (Invalid time).
dAL88: EEPROM Failure.
dAL89: Flash Memory Error.
dAL90: Future Expansion.
dAL91: Alarm List Full.

DATACORDER CODES (dC):
dC1: Recorder Supply Temp.
dC2: Recorder Return Temp.
dC3-5: USDA 1-3 Temps.
dC6-13: Network Data Points.
dC14: Cargo Probe 4.
dC19: Battery Check.
dC20-24: Sensor Calibration Offsets.
dC28: Minimum Days Left.
dC29: Days Stored.
dC30: Date of Last Trip Start.
dC31: Battery Test Results.
dC32: Time.
dC33: Date.
`;

export const CARRIER_LYNX_FLEET_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier Lynx Fleet User Manual (62-12232 Rev 7.1) ***
PLATFORM: https://container.lynxfleet.carrier.com
BROWSERS: Chrome, Firefox, MS Edge (IE not supported).
LOGIN: User ID is Email Address. Password sent via email on creation.

DASHBOARD:
- Sidebar Menu: Map, Widgets.
- Map: Google Maps based. Clusters show number of units. Click cluster to zoom/list. Double click for quick status.
- Widgets (Top Right to Toggle):
  1. Power (On/Off/NR): NR = Not Reporting > 2 hours.
  2. Reporting Status: <1 Day, 1 Day-1 Wk, >1 Month (Dead battery or no coverage).
  3. Alarms: Critical (Red) vs Non-Critical (Yellow).
  4. TripWise: Pass, Check, Off, Expired.
  5. TripWise Expiring < 3 Days.
  6. Cargo Type: Frozen vs Perishable.
  7. Container Model Type.
  8. Controller Software.
  9. Device Firmware.
  10. Manufacturers.

CONTAINER STATUS SCREEN:
- Grid view of all assets.
- Customizable columns (Gear icon > Open Column Chooser).
- Filters: Fleet, Date Range, Geofence, or individual column filters.
- Save Grid Settings available.
- Export: Print, Excel, PDF.
- Container Details: Click Container ID to open.

CONTAINER DETAILS SCREEN:
Tabs: History, Breadcrumb Trail, Commands, Alarms, TripWise, PTI, CA PreTrip.
1. HISTORY:
   - Data Subsets: Device Details, Historic Analysis, ISO Unit Data (Voltage/Freq), Temp Charts, Location, Controller Params, Sensors, Alarms, Operating Modes, Analog Inputs.
   - Export: PDF or Excel.
2. BREADCRUMB TRAIL: Map plot of location history.
3. COMMANDS (2-Way Control):
   - Actions: New Container ID, Setpoint, Defrost Interval, Null Mode, Quest Mode, Reboot, Initiate Defrost, Trip Start, Initiate Pretrip, Configure RTC.
   - Micro Software Upgrade: Remote firmware update.
   - DCX DOWNLOAD: Request data download (30/60/90 days). Data returned in DCX format (viewable in DataLINE).
   - Command History: Audit trail of sent commands.
4. ALARMS:
   - Critical: Codes 15, 17, 20-27.
   - Non-Critical: Code 70.
   - Action > Troubleshoot: Opens guidance window.
5. TRIPWISE:
   - Status: Pass, Check, Off (Cd65), Expired.
   - Shows individual test results.
6. PTI / CA PRETRIP: Historical results of P-tests.

GEOFENCE:
- Setup: Create virtual boundaries (Rectangle, Circle, Polygon).
- Usage: Notifications (Entry/Exit/Dwell), Map filtering, Widget filtering.

NOTIFICATIONS:
- Setup: Menu > Notifications > Notification Template.
- Triggers: Alarms (Critical/Non-Critical), TripWise Status, Geofence (Arrival/Departure/Dwell), Setpoint Variance (Temp deviation over time), CO2/O2 variance, Power OFF period.
- Delivery: Email or Web Portal.
- Subscription: "My Setups" to manage personal subscriptions.

CONTAINER MANAGEMENT:
- Fleets: Create groups of reefers for easier filtering/reporting.
- User Management (Admin): Add users, assign Roles.
- Companies: Manage sub-companies.

REPORTS:
1. Operating Hours: Power ON duration (Daily/Monthly).
2. Cumulative Hours: Total run time in user-defined bins.
3. ISO Unit Data: Power quality (Frequency/Voltage) analysis.
`;
