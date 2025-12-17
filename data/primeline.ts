
export const CARRIER_T340_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-561-001 to 199 (T-340 Rev G) ***
SYSTEM: PrimeLINE (Scroll Compressor ZMD26KVE) with Micro-Link 3.

ALARM CODES (Table 4-6):
AL03 Loss of Superheat Control: Superheat below 1.66°C for 5 mins. Check EEV, ETS1/2.
AL05 Manual Defrost Switch Failure: Continuous activity >5 mins.
AL06 Keypad or Keypad Harness Fail: Continuous activity.
AL07 Fresh Air Vent Open: VPS > 0 CMH in frozen.
AL08 High Compressor Pressure Ratio: Discharge/Suction pressure ratio too high. Check DPT/Airflow.
AL10 CO2 Sensor Failure: Voltage outside 0.9-4.7V range.
AL14 Phase Sequence Detect Fault: Check wiring, pressures.
AL16 Compressor Current High: Calculated current too high >10 mins. Check Cd03.
AL17 Compressor Pressure Delta Fault: Fails to generate sufficient diff pressure. Check DPT/SPT.
AL18 Discharge Pressure High: >135°C or high pressure. Check DPT, Water supply, Airflow.
AL19 Discharge Temperature High: >135°C. Check DUV, Liquid Injection, Charge.
AL20 Control Contactor Fuse (F3): Check coils PA, PB, CH, ESV, CF, EF, HR.
AL21 Control Circuit Fuse (F1/F2): Check sensors, wiring.
AL22 Evaporator IP: Motor internal protector.
AL23 Loss of Phase B: Controller fails to detect current draw.
AL24 Compressor IP: Internal protector open. Check resistance.
AL25 Condenser IP: Motor internal protector open.
AL26 All Sensors Failure: Check P5.
AL27 Analog to Digital Accuracy Failure: Controller faulty.
AL28 Low Suction Pressure: Too low for operation. Check SPT, Charge, EEV.
AL29 AutoFresh Failure: CO2/O2 limit error.
AL50 Air Vent Position Sensor (VPS): Out of range.
AL51 EEPROM Failure: Memory failure.
AL52 EEPROM Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Sensor (STS): Invalid.
AL56 Primary Return Sensor (RTS): Invalid.
AL57 Ambient Sensor (AMBS): Invalid.
AL58 Compressor High Pressure Safety (HPS): Open >1 min.
AL59 Heater Termination Thermostat (HTT): Open.
AL60 Defrost Temperature Sensor (DTS): Failed to open.
AL61 Heater Current Draw Fault.
AL63 Current Limit: Unit operating above limit.
AL64 Discharge Temp Sensor (CPDS): Out of range.
AL65 Discharge Pressure Transducer (DPT): Out of range.
AL66 Suction/Evap Pressure Transducer (SPT/EPT): Out of range.
AL67 Humidity Sensor (HS): Out of range.
AL69 Evaporator Temp Sensor (ETS1): Out of range.
AL70 Secondary Supply Sensor (SRS): Out of range.
AL71 Secondary Return Sensor (RRS): Out of range.
AL72 Control Temp Out of Range.
ERR #: Internal Microprocessor Failure.

FUNCTION CODES (Table 4-5):
Cd01: Capacity Modulation (%) (DUV).
Cd03: Compressor Motor Current.
Cd04-06: Line Current A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Comp Suction Temp / Evap Temp.
Cd11: Comp Dome Temp / Discharge Temp.
Cd12: Comp Suction Port Pressure (EPT/SPT).
Cd14: Comp Discharge Pressure (DPT).
Cd15: Digital Unloader Valve Status.
Cd16: Comp Motor Hour Meter.
Cd17: Relative Humidity %.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Capacity Mode (Standard/Economized/Unloaded).
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Temp Sensor (DTS).
Cd27: Defrost Interval.
Cd28: Temp Units.
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit.
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evap Fan Speed Select.
Cd37: Variable DTT Setting.
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service). Manual control of EEV, DUV, ESV.
Cd43: eAutoFresh Mode.
Cd44: eAutoFresh Values.
Cd45: Vent Position Sensor (VPS).
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp Setting.
Cd48: Dehumidification/Bulb Parameter.
Cd49: Days Since Last Pretrip.
Cd50: Quest Enable.
Cd51: Automatic Cold Treatment (ACT).
Cd53: Automatic Setpoint Change (ASC).
Cd54: Suction Port Superheat / EEV %.
Cd55: Discharge Superheat.
Cd58: Water Pressure Switch / Condenser Fan Switch.
Cd59: Pump Down Logic.
Cd60: Evap Fan Pulsing Temp Setting.
Cd62: High Speed Evap Fan Setting.
Cd63: FuelWise.
Cd65: TripWise Setting.
Cd66: Instantaneous Power (kW).
Cd67: Total Power (kW-hr).
Cd70: Temp Setpoint Lock.

TORQUE VALUES (Table 7-6 & Text):
Compressor Suction/Discharge Rotalocks: 108.5 to 135.5 Nm (80 to 100 ft-lbs).
Unloader connection: 24.5 to 27 Nm (18 to 20 ft-lbs).
Economized connection: 32.5 to 35 Nm (24 to 26 ft-lbs).
Compressor Base Mounting Screws: 6.2 mkg (45 ft-lbs).
Evaporator Fan Motor Shaft Nut: 40 ft-lbs.
Evaporator Fan Clamp Bolts: 70 in-lbs (0.81 mkg).
eAutoFresh Motor Cup Screws: 25 in-lbs (0.29 mkg).

COMPRESSOR:
Model: ZMD26KVE-TFD-272 (Scroll).
Oil Charge: 1774 ml (60 oz) Uniqema Emkarate RL-32-3MAF.
Refrigerant: R-134a.
Charge: Water Cooled 5.44 kg (12 lbs), Receiver 4.99 kg (11 lbs).

SENSORS (Resistance):
Standard (NTC): 10,000 Ohms @ 25°C (77°F).
Discharge (CPDS): 86,113 Ohms @ 25°C (77°F); 280,824 Ohms @ 0°C (32°F).
`;

export const CARRIER_T359_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-561-019 (Evergreen) (T-359 Rev C) ***
SYSTEM: PrimeLINE (Scroll Compressor ZMD26KVE-TFD-274) with Micro-Link 3.
REFRIGERANT: R-134a.
OIL: Uniqema Emkarate RL-32-3MAF (1774 ml / 60 oz).

ALARM CODES (Table 4-6):
AL03 Loss of Superheat Control: Superheat < 1.66°C for 5 mins. Check EEV, ETS1/2, Fans.
AL05 Manual Defrost Switch Failure: Continuous activity >5 mins.
AL06 Keypad or Harness Fail.
AL07 Fresh Air Vent Open with Frozen Set Point.
AL08 High Compressor Pressure Ratio.
AL10 CO2 Sensor Failure.
AL14 Phase Sequence Detect Fault.
AL15 Loss of Cooling.
AL16 Compressor Current High.
AL17 Compressor Pressure Delta Fault.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High (>135°C).
AL20 Control Contactor Fuse (F3).
AL21 Control Circuit Fuse (F1/F2).
AL22 Evaporator IP.
AL23 Loss of Phase B.
AL24 Compressor IP.
AL25 Condenser IP.
AL26 All Sensors Failure.
AL27 Analog to Digital Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Air Vent Position Sensor (VPS).
AL51 EEPROM Failure.
AL52 EEPROM Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Sensor (STS).
AL55 I/O Failure.
AL56 Primary Return Sensor (RTS).
AL57 Ambient Sensor (AMBS).
AL58 Compressor High Pressure Safety (HPS).
AL59 Heater Termination Thermostat (HTT).
AL60 Defrost Temperature Sensor (DTS).
AL61 Heaters Failure (Current Draw).
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temp Sensor (CPDS).
AL65 Discharge Pressure Transducer (DPT).
AL66 Suction/Evap Pressure Transducer (SPT/EPT).
AL67 Humidity Sensor (HS).
AL68 Condenser Pressure Sensor Fault.
AL69 Suction Pressure Sensor.
ERR 0-9 Internal Microprocessor Failure.
LO Low Main Voltage.

FUNCTION CODES (Table 4-5):
Cd01: Capacity Modulation (%).
Cd03: Compressor Motor Current.
Cd04-06: Line Currents.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Evaporator Temp Sensor (ETS1).
Cd11: Comp Dome / Discharge Temp.
Cd12: Comp Suction / Evap Pressure.
Cd14: Comp Discharge Pressure.
Cd15: Digital Unloader Valve Status.
Cd16: Hour Meters (Comp/Run).
Cd17: Relative Humidity.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Capacity Mode.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd25: Time to Defrost.
Cd26: Defrost Temp Sensor.
Cd27: Defrost Interval.
Cd28: Temp Units.
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit.
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evap Fan Speed Select.
Cd37: Variable DTT Setting.
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service).
Cd43: eAutoFresh Mode.
Cd44: eAutoFresh Values.
Cd45: VPS Position.
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp.
Cd48: Dehumidification/Bulb Parameter.
Cd49: Days Since Last Pre-trip.
Cd50: Quest Enable/Disable (CCPC).
Cd51: Automatic Cold Treatment (ACT).
Cd53: Automatic Setpoint Change (ASC).
Cd54: Suction Superheat / EEV %.
Cd55: Discharge Superheat.
Cd58: Water Pressure Switch / Condenser Fan Switch.
Cd59: Pump Down Logic.
Cd60: Evap Fan Pulsing Temp Setting.
Cd62: High Speed Evap Fan Setting.
Cd63: FuelWise.
Cd65: TripWise.
Cd66: Instantaneous Power.
Cd67: Total Power.
Cd70: Temp Setpoint Lock.

PRE-TRIP TESTS (Table 4-7):
P0-0: Pre-Trip Initiated.
P1-0/1: Heaters On/Off.
P2-0/1: Condenser Fan On/Off.
P3: Low Speed Evap Fans.
P4: High Speed Evap Fan.
P5: Probe Tests (P5-0 Sup/Ret, P5-1 Supply, P5-2 Return, P5-3 Fan Dir, P5-7 Pri/Sec Evap, P5-8 SPT, P5-9 SPT/EPT, P5-10/11/12 Humidity).
P6: Refrigerant Tests (P6-0 CPDS, P6-1 Suction Therm, P6-2 DPT, P6-3 SPT, P6-4 Comp Current, P6-5 Leak, P6-6 Econ, P6-7 DUV, P6-10 EEV).
P7: High Pressure Tests (P7-0 Open, P7-1 Closed).
P8: Perishable Mode Tests (P8-0 Heat, P8-1 Pull Down, P8-2 Maintain).
P9: Defrost Test.
P10: Frozen Mode Tests (P10-0 Heat, P10-1 Pull Down, P10-2 Maintain).

REFRIGERATION SYSTEM DATA (Section 3.2):
Compressor: ZMD26KVE-TFD-274.
Oil: Uniqema Emkarate RL-32-3MAF (1774 ml).
Refrigerant: R-134a (4.99 kg / 11 lbs receiver).
HPS: Cutout 25 kg/cm2, Cut-In 18 kg/cm2.
Fusible Plug: 99°C.
Rupture Disc: 35 kg/cm2.

TORQUE VALUES (Table 7-4 & Text):
Compressor Upper Mounting: 2.8 mkg (20 ft-lbs).
Compressor Lower Mounting: 6.2 mkg (45 ft-lbs).
Suction/Discharge Rotalocks: 108.5 to 135.5 Nm (80-100 ft-lbs).
Unloader Connection: 24.5 to 27 Nm (18-20 ft-lbs).
Economizer Connection: 32.5 to 35 Nm (24-26 ft-lbs).
`;

export const CARRIER_T365_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-561-300 to 399 (T-365 Rev D) ***
SYSTEM: PrimeLINE (Scroll Compressor ZMD26K2E-TFD-274) with Micro-Link 3.
INCLUDES: Edge Technology, XtendFRESH, FuelWise, TripWise.

ALARM CODES (Table 4-6):
AL03 Loss of Superheat Control: EEV/ETS1/ETS2 issue.
AL05 Manual Defrost Switch Failure.
AL06 Keypad or Keypad Harness Fail.
AL07 Fresh Air Vent Open: XtendFRESH active and vent >0.
AL08 High Compressor Pressure Ratio.
AL09 O2 Sensor Failure: XtendFRESH.
AL10 CO2 Sensor Failure: XtendFRESH.
AL14 Phase Sequence Detect Fault.
AL16 Compressor Current High.
AL17 Compressor Pressure Delta Fault: SPT/DPT differential.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Contactor Fuse (F3).
AL21 Control Circuit Fuse (F1/F2).
AL22 Evaporator IP.
AL23 Loss of Phase B.
AL24 Compressor IP.
AL25 Condenser IP.
AL26 All Sensors Failure.
AL27 Analog to Digital Accuracy Failure.
AL28 Low Suction Pressure.
AL29 Loss of Atmospheric Control (XtendFRESH): CO2/O2 outside limits >60/30 mins.
AL50 Air Vent Position Sensor (VPS).
AL51 EEPROM Failure.
AL52 EEPROM Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Sensor (STS).
AL56 Primary Return Sensor (RTS).
AL57 Ambient Sensor (AMBS).
AL58 Compressor High Pressure Safety (HPS).
AL59 Heater Termination Thermostat (HTT).
AL60 Defrost Temperature Sensor (DTS).
AL61 Heater Current Draw Fault.
AL62 O2 Out of Range (XtendFRESH): Notification alarm only.
AL63 Current Limit.
AL64 Discharge Temp Sensor (CPDS).
AL65 Discharge Pressure Transducer (DPT).
AL66 Suction/Evap Pressure Transducer (SPT/EPT).
AL67 Humidity Sensor (HS).
AL69 Evaporator Temp Sensor (ETS1).
AL70 Secondary Supply Sensor (SRS).
AL71 Secondary Return Sensor (RRS).
AL72 Control Temp Out of Range.
AL96 Scrubber Rotational Failure (XtendFRESH): Motor/Fuse check.
ERR #: Internal Microprocessor Failure.

FUNCTION CODES (Table 4-3):
Cd01: Capacity Modulation (%) (DUV).
Cd03: Compressor Motor Current.
Cd04-06: Line Currents.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Comp Suction Temp.
Cd11: Comp Dome / Discharge Temp.
Cd12: Comp Suction Port Pressure.
Cd14: Comp Discharge Pressure.
Cd15: Digital Unloader Valve.
Cd16: Hour Meters.
Cd17: Relative Humidity.
Cd18: Software Rev.
Cd19: Battery Check.
Cd20: Config/Model.
Cd21: Capacity Mode.
Cd22: Compressor State.
Cd23: Evaporator Fan.
Cd25: Time to Defrost.
Cd26: DTS Reading.
Cd27: Defrost Interval.
Cd28: Temp Units.
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit (15-23A).
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evap Fan Speed Select.
Cd37: Variable DTT Setting.
Cd38: Secondary Supply.
Cd39: Secondary Return.
Cd40: Container ID.
Cd41: Valve Override (Service).
Cd43: XtendFRESH Mode / eAutoFresh Mode.
Cd44: XtendFRESH/eAutoFresh Values (CO2/O2).
Cd45: VPS Position.
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp Setting.
Cd48: Dehumidification/Bulb Parameter.
Cd49: Days Since Last Pretrip.
Cd50: Quest Enable.
Cd51: ACT Parameter Selection.
Cd53: ASC Parameter Selection.
Cd54: Suction Superheat / EEV %.
Cd55: Discharge Superheat.
Cd58: Water Pressure Switch / Condenser Fan Switch.
Cd59: Pump Down Logic.
Cd60: Evap Fan Pulsing Temp Setting.
Cd62: High Speed Evap Fan Setting.
Cd63: FuelWise.
Cd64: Alternative Compressor Selection (Std vs Edge).
Cd65: TripWise Setting.
Cd66: Instantaneous Power.
Cd67: Total Power.
Cd70: Temp Setpoint Lock.

TORQUE VALUES (Table 7-5 & Text):
Suction/Discharge Rotalocks: 80-100 ft-lbs (108-135 Nm).
Unloader/Economizer Connections: 18-20 ft-lbs (24-27 Nm) / 24-26 ft-lbs (32-35 Nm).
Compressor Base Bolts: 45 ft-lbs (6.2 mkg).
Evaporator Fan Motor Shaft Nut: 40 ft-lbs.
Evaporator Fan Clamp Bolts: 70 in-lbs (0.81 mkg).
eAutoFresh Motor Cup Screws: 25 in-lbs (0.29 mkg).
Power Terminals: Check tightness.

COMPRESSOR:
Model: ZMD26K2E-TFD-274 (Scroll).
Oil Charge: 1774 ml (60 oz) Uniqema Emkarate RL-32-3MAF.
Refrigerant: R-134a.
Charge: Receiver 4.54 kg (10 lbs).

SENSORS (Table 7-2):
Standard (NTC): 10,000 Ohms @ 25°C (77°F).
Discharge (CPDS): 86,113 Ohms @ 25°C (77°F); 280,824 Ohms @ 0°C (32°F).
`;

export const CARRIER_T340PL_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-561-001 to 199 (T-340PL Rev H) ***
SERVICE PARTS LIST

MODEL IDENTIFICATION:
Model: 69NT40-561-001 to 199.
Type: PrimeLINE Container Refrigeration Units.

OPTION CODES (PID):
Battery and Controller Kit (Facing View) Codes: R = Rechargeable Cells, S = Secure Location.
Bulkhead Penetration Codes: 1 = Not Installed, 2 = Standard Installed.
Cable and Compressor Guards: 1 = Standard Guard, 460 V Cable, 2 = Standard Guard, Transicord.
Cable Restraint Codes: 2 = Left Bungee Cord Only, 3 = J-Hook, R = Dummy Receptacle.
Compressor Codes: S = Scroll, SS = Scroll with Semi-Hermetic Piping.
Condenser Fan Grille Codes: B = Bolted Grille, H = Hinged Grille.
Condenser Fan Motor Codes: 1 = Single-Phase Condenser Fan Motor, 2 = Three-Phase Condenser Fan Motor.
Control Box Communications Interface Module Codes: 2 = High Data Rate, 4 = Low Data Rate.
Control Box Door Codes: 1 = Aluminum Door, Hinged, 2 = Aluminum Door, Latching, 3 = Aluminum Door, Latching with Heater, 4 = Composite Door, Flat Window, 5 = Composite Door, Latching, 6 = Composite Door, Latching with Heater.
Heater and Sensor Codes: 1 = Standard Heater Arrangement, 2 = 5+1 Heater Arrangement, X = Dehumidification Option.
Interrogator Codes: 1 = Left Straight-Mounted, 2 = Right Straight-Mounted, 3 = Left Angle-Mounted, 4 = Right Angle-Mounted, P = Provisioned for Interrogator.
Rain Gutter Codes: 1 = Standard Length Bolted Gutters, 4 = Riveted Gutters.
Remote Monitoring Receptacle and Switch Panel Codes: 1 = No RM, Start Switch Plate, 2 = No RM, Start Switch Plate with Boot, 3 = No RM, Compressor Fan Switch Plate, 4 = No RM, Manual Defrost (MD) Switch Plate, 5 = No RM, MD Switch Plate with Boot, 6 = No RM, Emergency Bypass (EB) Switch Plate, 7 = No RM, Defrost Light Plate (Red), 8 = RM Internal, 9 = RM and MD Internal, 10 = RM, EB, and Defrost Light (Amber) Internal.

COMMON SERVICE PARTS:

ELECTRICAL & CONTROL:
Controller Module: 12-55009.
Display Module: 12-00433-03RP.
Keypad: NSS (from diagrams, but part not listed; refer to manual).
Switch Label (ST): 62-10914-00.
Boot Toggle Switch: 66U2-1081.
Remote Monitoring Receptacle: 22-02341-01 (Cap and Tether Receptacle Assembly), 22-01604-00 (Receptacle, 4 Connections).
Plate, Switch ST, Defrost Light: 68-14796-02.
Switch Label, ST, EMER, DEFROST: 62-10914-02.
Nut, Hex 15/32-32 Un-2B: 10-01129-20.
Base Pilot Light: 22-00518-01.
Lamp, Incandescent, 24 VDC: 22-00049-01.
Jewel Assembly Pilot Light, Red: 22-00519-01.

SENSORS:
Ambient Sensor (AMBS): 12-00495-02SV.
Compressor Discharge Temperature Sensor (CPDS): 12-00653-00.
Defrost Temperature Sensor (DTS): 12-00495-02SV.
Evaporator Temperature Sensors (ETS1/ETS2): 12-00500-01SV.
Heat Termination Thermostat (HTT): 12-00170-08.
Return Temperature Sensor (RTS): 12-00500-01SV.
Supply Recorder Sensor (RRS): 12-00500-01SV.
USDA Probe: 12-50089-00 (600 Inches Long) or 12-00342-04 (Customer Specific, 600 Inches Long).
Vent Position Sensor (VPS): 10-00455-00.
CO2 Sensor: 10-00398-00.
Rotary Position Sensor: NSS (listed as NSS in some sections).

MOTORS:
Condenser Fan Motor (Single Phase): 54-00586-20.
Condenser Fan Motor (Three Phase): 54-00643-20.
Evaporator Fan Motor (Three Phase): 54-00615-20.
Stepper Motor Powerpack (for EEV): 10-00388-00.

REFRIGERATION:
Compressor: 18-10136-22 (Scroll, Digital Unloader).
Compressor Oil: 07-00418-04 (One Quart).
Transducer (EPT/SPT): 76-00816-00.
Seal, Rotolock (1 1/4-12): 42-00384-02.

HEATERS:
Evaporator Coil Heater: 24-00006-02.
Straight Heater (for 5+1 Arrangement): 24-66602-00.

TOOLS:
Vacuum Pump, Dual Voltage/Dual Frequency: 07-00176-11.
Stepper Motor Drive Tester: 07-00375-00.
Stepper Jumper Assembly: 07-00408-00.
Temperature Tester, 4-Lead: 07-00462-00.
Volt-Ohmmeter, Digital: 07-00477-00.
Gauge Set, Manifold - Fahrenheit/psig: 07-00228-00.
Gauge Set, Manifold - Centigrade/kPa: 07-00228-01.
Gauge Set, Manifold - Centigrade/KPa: 07-00294-00.
Detector, Leak: 07-00295-00.
Extractor, Pin (Fan Motor Plugs): 07-00397-03.
Crimper, Pin (Fan Motor Plugs): 07-00397-02.
Extractor, Pin (Controller Module): 07-00329-00.
Crimper, Pin (Controller Module): 07-00330-00.
Application Gun: 07-00391-00.
Software Card Programmer: 07-00398-00.
`;

export const CARRIER_T362_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-561-200 to 299, 69NT40-561-500 to 599, PrimeLINE ONE 69NT40-565-200 to 299, 69NT40-565-500 to 599 (T-362 Rev J) ***
ALARM CODES (Table 4-5):
AL03 Loss of Superheat Control: Superheat below 1.66°C (3°F) for 5 mins while compressor running. Check EEV, ETS1/ETS2, evaporator fans.
AL05 Manual Defrost Switch Failure: Continuous activity >5 mins. Check keypad, reset unit.
AL06 Keypad or Harness Fail: Continuous key activity. Reset unit, replace keypad/harness.
AL07 Fresh Air Vent Open: Vent open with frozen setpoint or XtendFRESH. Reposition vent, check VPS.
AL08 High Compressor Pressure Ratio: Ratio too high. Check DPT, airflow.
AL09 O2 Sensor Failure: Reading out of range. Check O2 sensor, amplifier, wiring.
AL10 CO2 Sensor Failure: Reading out of range. Check CO2 sensor, voltage, wiring.
AL14 Phase Sequence Detect Fault: Unable to determine phase. Check wiring, power cycle.
AL16 Compressor Current High: Over limit for 10 mins. Check current sensor, power supply, airflow.
AL17 Compressor Pressure Delta Fault: Insufficient differential. Check DPT/SPT.
AL18 Discharge Pressure High: Over max for 10 mins in hour. Check restrictions, filter drier, condenser fan, DPT, non-condensables, refrigerant level.
AL19 Discharge Temperature High: >135°C (275°F) for 10 mins in hour. Check restrictions, airflow, non-condensables.
AL20 Control Contactor Fuse (F3): Open. Check F3A/F3B, coils, ESV.
AL21 Control Circuit Fuse (F1/F2): Open. Check sensors, wiring, controller.
AL22 Evaporator IP: Open. Check evaporator motor IP.
AL23 Loss of Phase B: No current draw. Check power source.
AL24 Compressor IP: Open. Check compressor windings.
AL25 Condenser IP: Open. Check condenser motor IP, airflow.
AL26 All Sensors Failure: Out of range. Run P5.
AL27 Analog to Digital Accuracy Failure: Controller faulty. Replace controller.
AL28 Low Suction Pressure: Too low. Power cycle, check SPT/DPT.
AL29 Loss of Atmospheric Control (XtendFRESH): CO2/O2 out of limits. Check solenoids, fans/scrubber, heater, container tightness.
AL50 Air Vent Position Sensor (VPS): Out of range. Secure/tighten panel, replace VPS.
AL51 EEPROM Failure: Memory failure. Attempt clear, replace controller.
AL52 EEPROM Alarm List Full: Clear alarms.
AL53 Battery Pack Failure: Low voltage. Charge 24h, replace battery.
AL54 Primary Supply Sensor (STS): Invalid. Run P5, replace STS.
AL56 Primary Return Sensor (RTS): Invalid. Run P5, replace RTS.
AL57 Ambient Sensor (AMBS): Invalid. Replace AMBS.
AL58 Compressor High Pressure Safety (HPS): Open >1 min. Test HPS, check airflow.
AL59 Heater Termination Thermostat (HTT): Open. Check voltage at TP10, replace HTT.
AL60 Defrost Temperature Sensor (DTS): Failure to open. Replace DTS.
AL61 Heater Current Draw Fault: Improper draw. Check heaters, contactors.
AL62 O2 Out of Range: >4% above setpoint. Check scrubber, solenoids, container tightness.
AL63 Current Limit: Over limit. Check airflow, power supply, Cd32.
AL64 Discharge Temp Sensor (CPDS): Out of range. Replace CPDS.
AL65 Discharge Pressure Transducer (DPT): Out of range. Replace DPT.
AL66 Suction/Evap Pressure Transducer (SPT/EPT): Out of range. Replace SPT/EPT.
AL67 Humidity Sensor (HS): Out of range. Check connection, wiring, replace HS.
AL69 Evaporator Temp Sensor (ETS1): Out of range. Replace ETS1.
AL70 Secondary Supply Sensor (SRS): Out of range. Run P5, replace SRS.
AL71 Secondary Return Sensor (RRS): Out of range. Run P5, replace RRS.
FUNCTION CODES (Table 4-4):
Cd01 Capacity Modulation (%): DUV % closed.
Cd03 Compressor Motor Current: T3 leg current.
Cd04-06 Line Current Phase A, B, C.
Cd07 Main Power Voltage.
Cd08 Main Power Frequency.
Cd09 Ambient Air Temp.
Cd10 Compressor Suction Temp / Evap Temp.
Cd11 Compressor Dome / Discharge Temp.
Cd12 Compressor Suction Port Pressure (EPT/SPT).
Cd14 Compressor Discharge Pressure (DPT).
Cd15 Digital Unloader Valve Status.
Cd16 Compressor Motor Hour Meter / Unit Run Time.
Cd17 Relative Humidity %.
Cd18 Software Revision.
Cd19 Battery Check.
Cd20 Config/Model #.
Cd21 Capacity Mode.
Cd22 Compressor State.
Cd23 Evaporator Fan State.
Cd25 Time Remaining Until Defrost.
Cd26 Defrost Temp Sensor (DTS).
Cd27 Defrost Interval (Hours/Auto/PuLS).
Cd28 Temp Units (C/F).
Cd29 Failure Action Mode (A/B/C/D).
Cd30 In-Range Tolerance.
Cd31 Stagger Start Offset (Seconds).
Cd32 System Current Limit (15-23 Amps).
Cd33 Humidity Setpoint.
Cd34 Economy Mode (On/Off).
Cd35 Bulb Mode (Nor/bULb).
Cd36 Evap Fan Speed Select (Alt/Lo/Hi).
Cd37 Variable DTT Setting (Bulb).
Cd38 Secondary Supply Temp (SRS).
Cd39 Secondary Return Temp (RRS).
Cd40 Container ID.
Cd41 Valve Override (Service).
Cd43 XtendFRESH Mode (FrESh/OFF/tESt/PUrgE).
Cd44 XtendFRESH Values (CO2SP/CO2/O2SP/O2/O2V).
Cd45 Vent Position Sensor (VPS).
Cd46 Airflow Display Units (CF/CM/bOth).
Cd47 Variable Economy Temp Setting.
Cd48 Dehumidification/Bulb Parameter.
Cd49 Days Since Last Pre-trip.
Cd50 QUEST Enable/Disable (On/Off).
Cd51 Automatic Cold Treatment (ACT) Mode Parameter.
Cd53 Automatic Setpoint Change (ASC) Mode Parameter.
Cd54 Suction Superheat / EEV Status.
Cd55 Discharge Superheat.
Cd58 Water Pressure Switch / Condenser Fan Switch.
Cd59 Pump Down Logic.
Cd60 Evaporator Fan Pulsing Temp Setting.
Cd62 High Speed Evap Fan Setting (On/Off).
Cd63 FuelWise (On/Off).
Cd65 TripWise Setting (On/Off).
Cd66 Instantaneous Power (kW).
Cd67 Total Power (kW-hr).
Cd70 Temp Setpoint Lock (On/Off).
Cd75 Pharma Mode (On/Off/05/20).
PRE-TRIP TESTS (Table 4-6):
P0-0 Pre-Trip Initiated: Config, Lamps, Displays.
P1-0 Heaters On: Current draw check.
P1-1 Heaters Off: Current draw check.
P2-0 Condenser Fan On: Current draw check.
P2-1 Condenser Fan Off: Current draw check.
P3-0 Low Speed Evap Fan On: Current draw check.
P3-1 Low Speed Evap Fan Off: Current draw check.
P4-0 High Speed Evap Fan On: Current draw check.
P4-1 High Speed Evap Fan Off: Current draw check.
P5-0 Supply/Return Probe Test.
P5-1 Supply Probe Test.
P5-2 Return Probe Test.
P5-3 Evaporator Fan Direction Test.
P5-7 Primary vs Secondary Evap Temp Sensor Test.
P5-10 Humidity Sensor Installation Verification.
P5-11 Humidity Sensor Range Check.
P6-0 Discharge Thermistor Test.
P6-1 Evap Temp Sensor (Suction) Test.
P6-2 Discharge Pressure Transducer Test.
P6-3 Suction Pressure Transducer Test.
P6-4 Compressor Current Draw Test.
P6-5 Compressor Leak Test.
P6-6 Economizer Valve Test.
P6-7 Digital Unloader Valve Test.
P6-9 Liquid Injection Valve Test.
P6-10 Electronic Expansion Valve Test.
P7-0 High Pressure Switch Opening Test.
P7-1 High Pressure Switch Closing Test.
P8-0 Perishable Mode Test.
P8-1 Perishable Mode Pull Down Test / CO2 Sensor Calibration.
P8-2 Perishable Mode Maintain Temp Test.
P9-0 DTT Closed and Open Test.
P10-0 Frozen Mode Heat Test.
P10-1 Frozen Mode Pulldown Test.
P10-2 Frozen Mode Maintain Temp Test.
TORQUE VALUES (Table 7-7):
Bolt Diameter | Threads | In-Lb | Ft-Lb | Nm
#4 | 40 | 5.2 | 0.4 | 0.6
#6 | 32 | 9.6 | 0.8 | 1.1
#8 | 32 | 20 | 1.7 | 2.3
#10 | 24 | 23 | 1.9 | 2.6
1/4 | 20 | 75 | 6.3 | 8.5
5/16 | 18 | 132 | 11 | 14.9
3/8 | 16 | 240 | 20 | 27.1
7/16 | 14 | 372 | 31 | 42
1/2 | 13 | 516 | 43 | 58.3
9/16 | 12 | 684 | 57 | 77.3
5/8 | 11 | 1104 | 92 | 124.7
3/4 | 10 | 1488 | 124 | 168.1
Non Free Spinning (Locknuts etc.)
1/4 | 20 | 82.5 | 6.9 | 9.3
5/16 | 18 | 145.2 | 12.1 | 16.4
3/8 | 16 | 264 | 22.0 | 29.8
7/16 | 14 | 409.2 | 34.1 | 46.2
1/2 | 13 | 567.6 | 47.3 | 64.1
9/16 | 12 | 752.4 | 62.7 | 85
5/8 | 11 | 1214.4 | 101.2 | 137.2
3/4 | 10 | 1636.8 | 136.4 | 184.9
COMPRESSOR:
Model: ZMD26KVE-TFD-272
Weight (With Oil): 42.9 kg (95 lb)
Approved Oil: Uniqema Emkarate RL-32-3MAF
Oil Charge: 1774 ml (60 ounces)
Removal/Replacement: Detailed steps including evacuation, torque values for connections (Suction/Discharge Rotalocks 108.5-135.5 Nm, Unloader 24.5-27 Nm, Economized 32.5-35 Nm), base bolts 6.2 mkg (45 ft-lbs).
Process Lines Break-in: Run in full cool 10 mins, pump down to 1 psig, frontseat valves, recover refrigerant.
SENSORS (Table 7-3 Resistance - AMBS, DTS, ETS, RRS, RTS, SRS, STS):
[Full table of °C/°F to OHMS]
SENSORS (Table 7-4 Resistance - CPDS):
[Full table of °C/°F to OHMS]
REFRIGERATION SYSTEM DATA (Table 3-1):
Compressor Model: ZMD26KVE-TFD-272, Weight 42.9 kg, Oil Uniqema Emkarate RL-32-3MAF, Charge 1774 ml.
EEV Superheat: 4.4-6.7°C at -18°C box.
EXV Superheat: 4.4-11.1°C at -18°C box.
HTT: Opens 54±3°C, Closes 38±4°C.
HPS: Cut-Out 25±1 kg/cm², Cut-In 18±0.7 kg/cm².
Refrigerant: R-134a/R-513A.
Charge: Varies by PID and condenser type (4.26-4.99 kg).
Fusible Plug: 99°C, Torque 6.2-6.9 mkg.
Rupture Disc: 35 kg/cm², Torque 6.2-6.9 mkg.
WPS: Cut-In 0.5±0.2 kg/cm², Cut-Out 1.6±0.4 kg/cm².
ELECTRICAL DATA (Table 3-2):
CB-1 25A trips 29A, CB-2 50A trips 62.5A / 70A 87.5A.
CP FLA 13A @460VAC.
CM FLA 0.71/0.72A, HP 0.21/0.36, RPM 1450/1750.
Evap Coil Heaters: 6x750W @230VAC, Resistance 66.8-77.2 ohms.
EM FLA HS 1.07/0.9A, LS 0.47A, HP HS 0.36/0.63, LS 0.05/0.8, RPM HS 2850/3450, LS 1425/1725.
Fuses: F3A/F3B 7.5A, F1/F2 5A, FEB 10A.
VPS: 0.5-4.5V over 90°.
ESV Coils: 7.7 ohms @25°C, 0.7A max.
DUV Coils: 14.8 ohms @20°C, 929mA max.
HS: 5V input, 0-3.3V output (30% 0.99V, 50% 1.65V, 70% 2.31V, 90% 2.97V).
Controller Setpoint: -35 to +30°C.
SAFETY AND PROTECTIVE DEVICES (Table 3-3):
Excessive current: CB-1 29A, CB-2 62.5/87.5A, F3A/F3B 7.5A, F1/F2 5A, FEB 10A.
Motor windings: IP-CM/CP/EM auto reset.
High side: Fusible Plug 99°C, Rupture Disc 35 kg/cm², HPS 25 kg/cm².
`;

export const CARRIER_T372_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier PrimeLINE 69NT40-571-100 to 399 (T-372 Rev F) ***
SYSTEM: PrimeLINE with Micro-Link 5 (ML5) Controller.
MODELS: 571-1xx (Standard), 571-3xx (EDGE).
FEATURES: Wireless (ContainerLINK), Micro USB, TripWise, FuelWise, EverFRESH, Pharma Mode.
REFRIGERANT: R-134a or R-513A.

ALARM CODES (Table 4-4):
AL003 Loss of Superheat Control: EEV/ETS1/ETS2.
AL017 Compressor Pressure Delta Fault: SPT/DPT difference fail.
AL020 Control Contactor Fuse (F3/F4): Check coils.
AL021 Control Circuit Fuse (F1/F2).
AL022 Evaporator IP.
AL023 Loss of Phase B.
AL024 Compressor IP.
AL025 Condenser IP.
AL026 All Sensors Failure.
AL027 Analog to Digital Accuracy Failure: Controller faulty.
AL028 Low Suction Pressure.
AL072 Control Temp Out of Range.
AL098 Chill Injury Alarm: Perishable mode protection.
AL205 Manual Defrost Switch Failure.
AL206 Keypad or Keypad Harness Fail.
AL207 Fresh Air Vent Open with Frozen Setpoint.
AL208 High Compressor Pressure Ratio.
AL214 Phase Sequence Detect Fault.
AL216 Compressor Current High.
AL218 Discharge Pressure High/Low.
AL219 Discharge Temperature High.
AL250 Air Vent Position Sensor (VPS) Fault.
AL251 Data Storage Fault: Memory failure.
AL252 Alarm List Full.
AL253 Battery Pack Failure.
AL254 Primary Supply Sensor (STS).
AL256 Primary Return Sensor (RTS).
AL257 Ambient Sensor (AMBS).
AL258 Compressor High Pressure Safety (HPS).
AL259 Heater Termination Thermostat (HTT).
AL260 Defrost Temperature Sensor (DTS).
AL261 Improper Heater Current.
AL263 Exceed Current Limit Setting.
AL264 Discharge Temp Sensor (CPDS).
AL265 Discharge Pressure Transducer (DPT).
AL266 Suction/Evap Pressure Transducer (SPT/EPT).
AL267 Humidity Sensor (HS).
AL269 Evaporator Temp Sensor (ETS1/ETS2).
AL270 Supply Recorder Sensor (SRS).
AL271 Return Recorder Sensor (RRS).
AL272-274 USDA Temp 1-3 Out of Range.
AL275 Cargo Probe 4 Out of Range.
AL286 RTC Battery Low: Replace ML5 battery.
AL287 RTC Fault.
AL289 Data Storage Fault.
AL907 Manual Fresh Air Vent Open (EverFRESH).
AL909 Oxygen Sensor (O2) Fault.
AL910 Carbon Dioxide Sensor (CO2) Fault.
AL929 Loss of Atmospheric Control.
AL962 Oxygen (O2) Out of Range.
AL976 Air Comp Internal Protector.
AL977 Membrane Pressure Transducer (MPT).
AL978 Air Comp Pressure Low.
AL979 Air Comp Pressure High.
AL980 Fresh Air Valve (EA) Fault.
AL981 Water Drain Valve (WDV) Fault.
AL982 CO2 Injection Failure.
AL983 CO2 Injection Pressure Transducer.
AL996 Scrubber Rotation Failure.

FUNCTION CODES (Table 4-3):
Cd01: Capacity Modulation %.
Cd03: Compressor Motor Current.
Cd04-06: Line Currents.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Evaporator Temp.
Cd11: Discharge Temp.
Cd12: Evap Pressure / Suction Pressure.
Cd14: Discharge Pressure.
Cd15: Digital Unloader/Loader Valve.
Cd16: Hour Meter.
Cd17: Relative Humidity.
Cd18: Software Revision.
Cd19: Backup Battery Check.
Cd20: Config / Model Number.
Cd21: Capacity Mode.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd25: Time to Defrost.
Cd26: Defrost Temp Sensor.
Cd27: Defrost Interval.
Cd28: Temp Units.
Cd29: Failure Action.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit.
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evaporator Fan Speed.
Cd37: Variable DTT Setting.
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service).
Cd43: XtendFRESH Mode.
Cd44: EverFRESH Values.
Cd45: VPS Position.
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp.
Cd48: Dehum/Bulb Parameter.
Cd49: Days Since Last Pre-Trip.
Cd50: Quest Enable.
Cd51: Automatic Cold Treatment (ACT).
Cd53: Automatic Setpoint Change (ASC).
Cd54: Suction Superheat / EEV Status.
Cd55: Discharge Superheat.
Cd56: Enable Comms Mode (USB access).
Cd58: Water Pressure Switch / Override.
Cd59: Pump Down Logic.
Cd62: High Speed Evap Fan Setting.
Cd63: FuelWise.
Cd64: Alternate Compressor (Std vs Edge).
Cd65: TripWise.
Cd66: Instantaneous Power.
Cd67: Energy (kW-hr).
Cd70: Temp Setpoint Lock.
Cd71: EverFRESH Mode.
Cd72: Air Comp Hours.
Cd73: Air Comp Total Hours.
Cd74: Controller Diagnostic.
Cd75: Pharma Mode.
Cd76: CO2 Injection Mode.
Cd77: Baudrate.
Cd78-83: EverFRESH component states.

CONTROLLER SERVICE:
- Micro-Link 5 (ML5) has a Micro USB port for data retrieval/programming.
- Wireless connection available via ContainerLINK app.
- Battery: Rechargeable pack (Part # 79-66081-20).

TORQUE VALUES (Table 7-6):
Same as T-365 (PrimeLINE).
`;
