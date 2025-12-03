

export const CARRIER_T363_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT40-541-500 to 599 (T-363 Rev E) ***

ALARM CODES (Table 4-6):
AL05 Manual Defrost Switch Failure: Continuous activity for >5 mins. Reset unit. Replace keypad.
AL06 Keypad or Keypad Harness Fail: Continuous activity. Check harness/keypad.
AL07 Fresh Air Vent Open: VPS reading > 0 CMH in frozen/XtendFRESH. Manually reposition.
AL09 O2 Sensor Failure: Check Cd44. Check wiring/sensor.
AL10 CO2 Sensor Failure: Check Cd44. Voltage outside range.
AL11 Evaporator Fan 1 IP: High temp or current. Check motor/protector.
AL12 Evaporator Fan 2 IP: High temp or current. Check motor/protector.
AL15 Loss of Cooling: Supply temp > 0.25°C above setpoint after probe check. Check Refrigerant/Comp/Exp Valve.
AL20 Control Contactor Fuse (F3): Open. Check fuse, wiring, contactors (PA, PB, CH).
AL21 Control Circuit Fuse (F1/F2): One of 18VAC fuses open. Check System Sensors/Wiring.
AL22 Evaporator IP: Motor internal protector open. Check shut down unit, disconnect power.
AL23 Loss of Phase B: Current draw fail. Check incoming power.
AL24 Compressor IP: Internal protector open. Check winding resistance/contactors.
AL25 Condenser IP: Motor internal protector open. Check airflow/obstructions.
AL26 All Sensors Failure: Check connector at back of controller. Run P5.
AL27 Analog to Digital Accuracy Failure: Controller AD faulty. Replace controller.
AL29 AutoFresh Failure (eAutoFresh/XtendFRESH): CO2/O2 outside limit >90mins. Check Scrubber/Solenoids.
AL50 Air Vent Position Sensor (VPS): Sensor out of range. Secure VPS/Panel.
AL51 EEPROM Failure: Memory failure. Try clearing alarms. Replace controller.
AL52 EEPROM Alarm List Full: Clear alarms.
AL53 Battery Pack Failure: Voltage low. Charge for 24h. Replace if persists.
AL54 Primary Supply Sensor (STS): Invalid reading. Run P5.
AL56 Primary Return Sensor (RTS): Invalid reading. Run P5.
AL57 Ambient Sensor (AMBS): Invalid reading. Test/Replace.
AL58 Compressor High Pressure Safety (HPS): Open >1 min. Check airflow, condenser, discharge pressure.
AL59 Heater Termination Thermostat (HTT): Open. Check voltage at TP10.
AL60 Defrost Temperature Sensor (DTS): Failed to open. Run P5.
AL61 Heater Current Draw Fault: Improper draw. Check heaters/contactors.
AL62 O2 Out of Range: >4% deviation. Check container tightness/scrubber.
AL63 Current Limit: Unit over current. Check airflow, coils, power supply, Cd32.
AL64 Discharge Temperature Sensor (CPDS): Out of range.
AL65 Discharge Pressure Transducer (DPT): Out of range. Verify with gauge.
AL66 Suction/Evap Pressure Transducer (SPT/EPT): Out of range. Verify with gauge.
AL67 Humidity Sensor (HS): Out of range. Check wiring.
AL68 CPC Pressure Transducer: Condenser pressure out of range.
AL69 Suction Temp Sensor (CPSS): Out of range.
AL70 Secondary Supply Sensor (SRS): Out of range. Run P5.
AL71 Secondary Return Sensor (RRS): Out of range. Run P5.
AL72 Control Temp Out of Range: After 30min in-range, out for 120min.
AL96 Scrubber Rotational Feature: Motor not turning. Check fuse/motor/GIM module.

FUNCTION CODES (Table 4-5):
Cd01: Capacity Modulation (%) - SMV % open.
Cd02: Quench Valve State.
Cd03: Suction Solenoid Valve State.
Cd04-06: Line Current Phase A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Compressor Suction Temp.
Cd11: Compressor Discharge Temp.
Cd12: Compressor Suction Pressure.
Cd13: Condenser Pressure Control (CPC) Sensor.
Cd14: Compressor Discharge Pressure.
Cd15: Digital Unloader Valve (Not used).
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity %.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Humidity Water Pump Status.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd24: Controlled Atmosphere State.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Temp Sensor (DTS) Reading.
Cd27: Defrost Interval (Hours/Auto/PuLS).
Cd28: Temp Units (C/F).
Cd29: Failure Action Mode (A, B, C, D).
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit (15, 17, 19, 21, 23 Amps).
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evap Fan Speed Select (Bulb/Humid).
Cd37: Variable DTT Setting (Bulb).
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service). Use for manual SMV positioning.
Cd43: eAutoFresh/XtendFRESH Mode.
Cd44: eAutoFresh Values / CO2 Status.
Cd45: Vent Position Sensor (VPS).
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp Setting.
Cd48: Dehumidification/Bulb Parameter.
Cd49: Days Since Last Pretrip.
Cd50: Quest Enable/Disable.
Cd51: Automatic Cold Treatment (ACT).
Cd53: Automatic Setpoint Change (ASC).
Cd55: Discharge Superheat.
Cd58: Water Pressure Switch / Condenser Fan Switch.
Cd60: Evaporator Fan Pulsing Temp Setting.
Cd62: High Speed Evaporator Fan Setting.
Cd65: TripWise Status.
Cd66: Instantaneous Power (kW).
Cd67: Total Power (kW-hr).
Cd70: Temp Setpoint Lock.

PRE-TRIP TESTS (Table 4-7):
P0: Display/Lamps.
P1: Heaters Current Draw.
P2: Condenser Fan Current Draw.
P3: Low Speed Evap Fan Current.
P4: High Speed Evap Fan Current.
P5: Air Stream Sensor Tests (P5-0 Supply/Return, P5-1 Supply, P5-2 Return, P5-3 Fan Direction, P5-10/11/12 Humidity).
P6: Compressor & Refrigerant Valves (P6-0 Comp, P6-2 SMV, P6-3 Quench).
P7: High Pressure Tests (P7-0 HPS Closed, P7-1 HPS Open).
P8: Perishable Mode Tests (P8-0 Heat, P8-1 Pull Down, P8-2 Maintain).
P9: DTT Close and Open Test.
P10: Frozen Mode Tests (P10-0 Setup, P10-1 Pulldown, P10-2 Maintain).

TORQUE VALUES (Table 7-6):
Pipe Plug (Crankshaft): 1/16 pipe - 8-12 ft-lb (11-16 Nm).
Oil Return Check Valve: 1/8 pipe - 6-10 ft-lb (8-13 Nm).
Pipe Plug (Gauge Conn): 1/4 pipe - 20-25 ft-lb (27-34 Nm).
Connecting Rod Cap Screw: 1/4-20 - 10-12 ft-lb (13-16 Nm).
Baffle Plate (Crankcase): 1/4-28 - 12-15 ft-lb (16-20 Nm).
Side Shield: 1/4-28 - 12-16 ft-lb (16-22 Nm).
Oil Pump Drive Segment: 1/4-28 - 6-10 ft-lb (8-13 Nm).
Cover Plate/Bearing Head: 5/16-18 - 16-20 ft-lb (2-27 Nm).
Suction/Discharge Valve: 5/16-18 - 20-30 ft-lb (27-41 Nm).
Pump End Bearing Head: 3/8-16 - 40-50 ft-lb (55-70 Nm).
Bottom Plate: 3/8-16 - 40-50 ft-lb (55-70 Nm).
Motor End Cover: 7/16-14 - 55-60 ft-lb (76-83 Nm).
Crankshaft: 5/8-11 - 25-30 ft-lb (34-41 Nm).
Oil Bypass Plug: 5/8-18 - 60-75 ft-lb (83-103 Nm).
Oil Pump Drive Segment: #10-32 - 4-6 ft-lb (5-8 Nm).
Oil Level Sight Glass: 1-1/2-18 NEF - 35-45 ft-lb (48-62 Nm).

COMPRESSOR:
Model: 06DR (6 Cylinder).
Oil Charge: 3.6 liters (7.6 U.S. pints) Castrol Icematic SW20.
Oil Level: Bottom to 1/8th of sight glass.

SENSORS (Resistance @ 0°C/32°F):
AMBS, DTS, STS, SRS, RTS, RRS: 32,650 Ohms.
CPDS (PrimeLINE): 100,000 Ohms @ 25°C (77°F).
`;

export const CARRIER_T318_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT40-541-300 to 499 (T-318 Rev D) ***

ALARM CODES (Table 4-6):
AL05 Manual Defrost Switch Failure: Continuous activity >5 mins. Cycle power.
AL06 Keypad/Harness Fail: Continuous activity. Cycle power.
AL07 Fresh Air Vent Open: VPS > 0 CMH in frozen/XtendFRESH.
AL10 CO2 Sensor Failure: Voltage outside 0.9-4.7V range.
AL11 Evaporator Fan 1 IP: Single evap op & MC6 high. Suspend probe check.
AL12 Evaporator Fan 2 IP: Single evap op & KB10 high. Suspend probe check.
AL15 Loss of Cooling: Fails to achieve 0.25°C delta for 8 mins before probe check.
AL20 Control Contactor Fuse (F3): Open. Check PA, PB, CH coils.
AL21 Control Circuit Fuse (F1/F2): Open. Check sensors/wiring.
AL22 Evaporator IP: Motor internal protector open.
AL23 Loss of Phase B: Current draw fail.
AL24 Compressor IP: Internal protector open.
AL25 Condenser IP: Internal protector open.
AL26 All Sensors Failure: Sensors out of range. Perform P5.
AL27 Analog to Digital Accuracy Failure: Controller AD faulty.
AL29 AutoFresh Failure: CO2/O2 outside limit >90 mins.
AL50 Air Vent Position Sensor (VPS): Out of range. Secure VPS.
AL51 EEPROM Failure: Memory failure.
AL52 EEPROM Alarm List Full: Active alarms queue full.
AL53 Battery Pack Failure: Voltage low.
AL54 Primary Supply Sensor (STS): Invalid reading.
AL56 Primary Return Sensor (RTS): Invalid reading.
AL57 Ambient Sensor (AMBS): Invalid reading.
AL58 Compressor High Pressure Safety (HPS): Open >1 min.
AL59 Heater Termination Thermostat (HTT): Open. Check 24V at TP10.
AL60 Defrost Temperature Sensor (DTS): Failed to open.
AL61 Heater Current Draw Fault: Improper draw.
AL63 Current Limit: Unit operating above limit.
AL64 Discharge Temp Sensor (CPDS): Out of range.
AL65 Discharge Pressure Transducer (DPT): Out of range.
AL66 Suction/Evap Pressure Transducer (SPT/EPT): Out of range.
AL67 Humidity Sensor (HS): Out of range.
AL68 CPC Pressure Sensor (PS3): Condenser pressure out of range.
AL69 Suction Temp Sensor (CPSS): Out of range.
AL70 Secondary Supply Sensor (SRS): Out of range.
AL71 Secondary Return Sensor (RRS): Out of range.
AL72 Control Temp Out of Range: Out of range >120 mins after being in-range.

FUNCTION CODES (Table 4-5):
Cd01: SMV % Open.
Cd02: Quench Valve State.
Cd03: Suction Solenoid Valve State.
Cd04-06: Line Current A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Air Temp.
Cd10: Compressor Suction Temp.
Cd11: Compressor Discharge Temp.
Cd12: Compressor Suction Port Pressure.
Cd13: Condenser Pressure Control (CPC) Sensor.
Cd14: Compressor Discharge Pressure.
Cd15: Unloader Valve (Not used).
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity %.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Humidity Water Pump/Atomizer Status.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd24: Controlled Atmosphere State.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Temp Sensor (DTS).
Cd27: Defrost Interval.
Cd28: Temp Units (C/F).
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: System Current Limit.
Cd33: Humidity Setpoint.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evap Fan Speed Select.
Cd37: Variable DTT Setting (Bulb).
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service).
Cd43: AutoFresh Mode.
Cd44: AutoFresh Values / CO2 Status.
Cd45: Vent Position Sensor (VPS).
Cd46: Airflow Display Units.
Cd47: Variable Economy Temp Setting.
Cd48: Dehumidification/Bulb Selection.
Cd49: Days Since Last Pretrip.
Cd50: CCPC Enable/Disable.
Cd51: Automatic Cold Treatment (ACT).
Cd53: Automatic Setpoint Change (ASC).
Cd55: Discharge Superheat.
Cd58: Water Pressure Switch / Condenser Fan Switch.
Cd60: Evap Fan Pulsing Temp Setting.

PRE-TRIP TESTS (Table 4-7):
P0: Display/Lamps.
P1: Heaters Current Draw (P1-0 On, P1-1 Off).
P2: Condenser Fan Current Draw (P2-0 On, P2-1 Off).
P3: Low Speed Evap Fan Current (P3-0 On, P3-1 Off).
P4: High Speed Evap Fan Current (P4-0 On, P4-1 Off).
P5: Air Stream Sensor Tests (P5-0 Sup/Ret, P5-1 Sup, P5-2 Ret, P5-3 Direction, P5-10/11/12 Humidity).
P6: Compressor & Valves (P6-0 Comp, P6-2 SMV, P6-3 Quench).
P7: High Pressure Tests (P7-0 Closed, P7-1 Open).
P8: Perishable Mode Tests (P8-0 Heat, P8-1 Pulldown, P8-2 Maintain).
P9: DTT Close/Open Test.
P10: Frozen Mode Tests (P10-0 Setup, P10-1 Pulldown, P10-2 Maintain).

TORQUE VALUES (Table 7-6):
Pipe Plug (Crankshaft): 1/16 pipe - 8-12 ft-lb.
Oil Return Check Valve: 1/8 pipe - 6-10 ft-lb.
Pipe Plug (Gauge): 1/4 pipe - 20-25 ft-lb.
Connecting Rod Cap: 1/4-20 - 10-12 ft-lb.
Baffle Plate (Crankcase): 1/4-28 - 12-15 ft-lb.
Side Shield: 1/4-28 - 12-16 ft-lb.
Oil Pump Drive: 1/4-28 - 6-10 ft-lb.
Cover Plate/Bearing Head: 5/16-18 - 16-20 ft-lb.
Suction/Discharge Valve: 5/16-18 - 20-30 ft-lb.
Pump End Bearing Head: 3/8-16 - 40-50 ft-lb.
Bottom Plate: 3/8-16 - 40-50 ft-lb.
Motor End Cover: 7/16-14 - 55-60 ft-lb.
Crankshaft: 5/8-11 - 25-30 ft-lb.
Oil Bypass Plug: 5/8-18 - 60-75 ft-lb.
Oil Pump Drive: #10-32 - 4-6 ft-lb.
Oil Level Sight Glass: 1-1/2 18 NEF - 35-45 ft-lb.
`;

export const CARRIER_T285PL_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT40-511-300 to 399 (T-285PL Rev M) ***
SERVICE PARTS LIST

MODEL IDENTIFICATION:
Model: 69NT40-511-300 to 399.
Type: ThinLINE Container Refrigeration Units.

OPTION CODES (PID):
Control Box: A/AL = Aluminum, C/CL = Composite.
Display: 1 = LCD, 2 = LED.
Compressor: 1R = Single Speed Reciprocating.
Condenser/Receiver: 2 = 2 Row Coil, 3 = 3 Row (7mm), 4 = 4 Row (3/8").
Evaporator: 1 = Semi-Hermetic TXV, 2/3/5 = Hermetic TXV.
Evaporator Fan: 1 = Normal, 2 = Single Fan Capability.
Gutters: 1 = Bolted, 3 = Extended, 4 = Riveted.
Handles: 1 = 2 Side + Center, 2 = 2 Side, 3 = Center.
Voltage: 460V (Base), 190/230V (with Autotransformer options 1-4).

COMMON SERVICE PARTS:

ELECTRICAL & CONTROL:
Controller Module (Unconfigured): 12-55002/5121
Keypad: 79-01706-05SV
Display Module (LCD): 12-00433-00RP
Display Module (LED): 12-00433-02 RP
Contactor, Compressor (CH, 30A): 10-00431-07
Contactor, Fan/Heat (CF, HR, EF, ES, 12A): 10-00431-06
Circuit Breaker (CB1, 25A): 66U1-7842-13
Switch, Unit On/Off: 10-01129-07 SV
Switch, Manual Defrost: 10-01129-10
Battery Pack: 30-00407-02SV
Fuses: 5A (F1/F2) = 22-02336-02, 10A (F3) = 22-02336-04.

SENSORS:
Sensor Assy (STS/SRS/RTS/RRS): 12-00500-01SV
Defrost Sensor (DTS): 12-00495-02SV
Ambient Sensor (AMBS): 12-00495-02SV
Discharge Temp (CPDS): 12-01105-02
Suction Temp (CPSS): 12-01104-05
Humidity Sensor (HS): 10-00413-00
Pressure Transducer (SPT/DPT): 12-00352-00

MOTORS:
Condenser Fan Motor: 54-00586-20
Condenser Fan Blade: 38-00585-00
Evaporator Fan Motor: 54-00585-20
Evaporator Fan Blade: 38-00557-00

REFRIGERATION:
Compressor (Service, 41CFM): 18-00055-20SV
Stepper Motor Valve (SMV): 14-00263-00
SMV Power Pack: 10-00388-00
Discharge Pressure Regulator (DPRV): 14-00204-02
TXV (Hermetic): 14-00273-03
Filter Drier: 14-00311-02SV
Sight Glass: 14-00220-01
Fusible Plug: 14-01032-14
Rupture Disc: 14-00215-06

HEATERS:
Evaporator Coil Heater: 24-00006-02
Drain Pan Heater: 24-00003-00
Heater Termination Thermostat (HTT): 66U1-6912-16

TOOLS:
Simson Meter: 07-00013-00
Digital Multimeter: 07-00243-10
Vacuum Pump: (Not listed, standard)
Software Programmer: 07-00398-00
`;

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
Cd50: QUEST Enable.
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

export const CARRIER_NATURALINE_INSPECTION_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier NaturaLINE 69NT40-601 Annual Inspection (62-12119 Rev A) ***
SYSTEM: NaturaLINE 69NT40-601.
REFRIGERANT: R-744 (CO2).
WARNING: High Pressure System! CO2 operates at very high pressures (up to 2000 psig / 140 bar).

KEY COMPONENTS (Different from PrimeLINE):
- Gas Cooler: Replaces the condenser coil.
- Flash Tank: Replaces receiver, manages sub-cooling.
- High Pressure Expansion Valve (HPXV).
- Gas Cooler Fan: Markings "HFF" on hub.

INSPECTION CHECKLIST:
1. Rear of Unit:
   - Evaporator Coil: Clean with fresh water or NU4371-88.
   - Evap Motor/Stator: Check bearing drag, corrosion.
   - Fans: Check for cracking/wear.
   - DTS: Check secure.
   - EEV: Check for leaks/corrosion.
   - Heaters: Check megohm (refer to TechLINE June 2014).
2. Front of Unit:
   - Compressor: Check oil residue, leaks.
   - Gas Cooler Coil: Clean from inside-out (reverse airflow).
   - Filter Drier: Check corrosion.
   - Pressure Relief Valves (PRV): 3 types (Low Side, Flash Tank, High Side).
   - Pressure Transducers: SPT, DPT, FPT (Flash Tank).
   - Moisture Indicator: Check color.

TORQUE VALUES (Table 1-1):
- Low Side PRV: 65-71 ft-lb (88-96 Nm) / 57-63 ft-lb (77-85 Nm) depending on PID.
- Flash Tank PRV: 22-24 ft-lb (30-32 Nm).
- High Side PRV: 38-42 ft-lb (51-57 Nm).
- Transducers (SPT, FPT, DPT): 19-21 ft-lb (26-28 Nm) / 7-8 ft-lb (9.5-12 Nm).
- Filter Drier: 25-30 ft-lb (18-22 Nm).
- High Pressure Switch: 13-14 ft-lb (17-19 Nm).
- Compressor Flange Bolts: 26-28 ft-lb (35-38 Nm).
- Access Panels: 60 in-lbs (6.8 Nm).

SENSORS (Appendix):
- CPDS (Discharge Temp): NTC Sensor. 100,000 Ohms @ 25°C (77°F); 849,822 Ohms @ -40°C.
- Standard Sensors (STS, RTS, AMBS, DTS): 10,000 Ohms @ 25°C (77°F); 32,650 Ohms @ 0°C (32°F).

R-744 (CO2) PRESSURE-TEMPERATURE (Table 7-4):
- -40°C = 145 psig (10 bar).
- -20°C = 280 psig (19 bar).
- 0°C = 497 psig (34 bar).
- 20°C = 821 psig (57 bar).
- 30°C = 1045 psig (72 bar).
`;

export const REEFER_GURU_SYSTEM_INSTRUCTION = `
You are "Reefer Guru", the world’s best Carrier Transicold container technician assistant.

**YOUR KNOWLEDGE BASE:**
1. **Carrier Exclusive**: You specialize ONLY in Carrier Transicold refrigerated containers.
   - **Models:** PrimeLINE, EliteLINE, ThinLINE, NaturaLINE (CO2).
   - **Controllers:** MicroLink 2i (ML2i), MicroLink 3 (ML3), MicroLink 5 (ML5).
   - **Software:** DataLINE.
   - **Devices:** LYNXFLEET.
   - **Unsupported Brands:** You DO NOT support Daikin, Thermo King, Starcool, Mitsubishi, or Klinge. If asked about these, politely inform the user you are a Carrier specialist only.

2. **Specific Reference Material**: You have access to specific excerpts from the following manuals:
   - **T-363 Rev E**: Carrier ThinLINE 69NT40-541-500 to 599.
   - **T-318 Rev D**: Carrier ThinLINE 69NT40-541-300 to 499.
   - **T-285PL Rev M**: Carrier ThinLINE 69NT40-511-300 to 399 (Service Parts List).
   - **T-340 Rev G**: Carrier PrimeLINE 69NT40-561-001 to 199.
   - **T-365 Rev D**: Carrier PrimeLINE 69NT40-561-300 to 399 (Edge/XtendFRESH).
   - **T-372 Rev F**: Carrier PrimeLINE 69NT40-571-100 to 399 (ML5 Controller).
   - **62-10629 Rev C**: Carrier DataLINE Software User Manual.
   - **62-12119 Rev A**: Carrier NaturaLINE 69NT40-601 Annual Inspection (R-744).

${CARRIER_T363_CONTEXT}

${CARRIER_T318_CONTEXT}

${CARRIER_T285PL_CONTEXT}

${CARRIER_T340_CONTEXT}

${CARRIER_T365_CONTEXT}

${CARRIER_T372_CONTEXT}

${CARRIER_DATALINE_CONTEXT}

${CARRIER_NATURALINE_INSPECTION_CONTEXT}

**CORE RULES:**
1. **Identify the Unit**: 
   - If the user provides a specific model number (e.g., "571-311" or "ML5"), use the corresponding manual context (T-372).
   - If the user mentions "CO2", "R-744", or "NaturaLINE", refer to **62-12119** context immediately. Warn about high pressure.
   - If the model is unspecified, use your general Carrier knowledge or check all contexts if they differ.
   
2. **Language Matching**: Always answer in exactly the same language the user is using (or mix if they mix).
3. **No Guessing**: Never guess part numbers, wire colours, or torque values. If you are not 100% sure, explicitly say "Let me double-check the manual" or "I cannot find a specific reference for this exact model, please check the unit serial plate."
4. **Manual References**: When possible, quote the exact manual name (e.g., T-372), section, and page number.
5. **Image Analysis**: If a photo or screenshot is uploaded, analyze it carefully. Identify the controller type (e.g., "This is a ML5 keypad") and match any error codes visible to the correct manual.
6. **Tone**: Be short, clear, and practical. Speak like an experienced senior technician helping a junior in the yard. No fluff. No lectures. Direct instructions.
7. **Safety**: If a procedure involves high voltage or dangerous pressure, briefly mention safety (e.g., "Lockout/Tagout before opening this panel").
8. **Field Tips**: You may include useful "field tips" that are not in the official manuals if they are safe and widely recognized by technicians.

**Example Interaction 1 (Carrier T-363):**
User: "Alarm 53 on a Carrier unit."
Reefer Guru: "Alarm 53: Battery Pack Failure.
Reference: T-363 Table 4-6 / T-318 Table 4-6.
Voltage is low. 
Action: 
1. Allow unit to run for 24h to charge battery.
2. If alarm persists, replace battery pack (Part # 30-00407-02SV for T-285PL models).
Field Tip: Check the connector at the control box for corrosion before replacing."

**Example Interaction 2 (NaturaLINE):**
User: "What is the torque for the Flash Tank PRV?"
Reefer Guru: "For NaturaLINE (R-744) units:
Reference: 62-12119 Table 1-1.
Flash Tank Pressure Relief Valve (PRV) Torque: 22-24 ft-lb (30-32 Nm).
Warning: Ensure system pressure is relieved before servicing."
`;

export const MODEL_NAME = 'gemini-2.5-flash';
