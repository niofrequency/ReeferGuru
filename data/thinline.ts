
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
Cd62: High Speed Evap Fan Setting.
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

export const CARRIER_T246_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT20-274, 69NT40-441/444/454 (T-246-10) ***
SYSTEM: ThinLINE with Micro-Link 1 or 2 (CC-EC).
COMPRESSOR: 06DR (Reciprocating).
REFRIGERANT: R-12 (some units converted to R-22).
OIL: Mineral (Cryol 150, Suniso 3GS, Capella WF32).

ALARM CODES (Table 1-5):
AL20 Control Circuit Fuse Open (6A).
AL21 Evaporator Fan Motor IP Open.
AL22 Auto Transformer IP Open.
AL23 Compressor Motor IP Open.
AL24 Condenser Fan Motor IP Open.
AL25 Compressor High Pressure Safety (HPS).
AL26 All Supply/Return Sensor Failure.
AL27 Probe Circuit Calibration Failure.
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Main Voltage Sensor Failure (Low Voltage).
AL54 Primary Supply Sensor (STS) Failure.
AL55 Secondary Supply Sensor (SRS) Failure.
AL56 Primary Return Sensor (RTS) Failure.
AL57 Secondary Return Sensor (RRS) Failure.
AL58 Ambient Sensor Failure.
AL59 Heat Termination Thermostat (HTT) Failure.
AL60 Defrost Termination Thermostat (DTS) Failure (Closed).
AL61 Defrost Termination Thermostat (DTS) Failure (Open).
AL62 Heaters Failure (Amperage).
AL63 Compressor Motor Failure (Amperage).
AL64 DataCORDER Low Battery.
AL65 Current Over Limit.
TP00 DataCORDER Memory Full (Approaching).
TP01 DataCORDER Overwriting Data.
ERR # Internal Microprocessor Failure (0-4).
LO Low Main Voltage (>20% drop).

FUNCTION CODES (Table 1-4):
Cd00: Alarm List.
Cd01: Suction Modulation Valve (SMV) % Open.
Cd02: Quench Valve (Open/Closed).
Cd03: Suction Solenoid Valve (SSV) (Open/Closed).
Cd04: Line Current Phase A.
Cd05: Line Current Phase B.
Cd06: Line Current Phase C.
Cd07: Supply Voltage.
Cd08: Supply Frequency.
Cd09: Ambient Air Temp.
Cd10: Compressor Suction Temp.
Cd11: Compressor Discharge Temp.
Cd12: Saturated Condenser Temp.
Cd13: Compressor Discharge Pressure (Calculated).
Cd16: Compressor Motor Hour Meter.
Cd17: Hours Since Last Trip Start.
Cd18: Software Revision.
Cd19: Serial # (First 4).
Cd20: Serial # (Second 4).
Cd21: USDA #1 Probe Temp.
Cd22: USDA #2 Probe Temp.
Cd23: Secondary Return Air Temp (USDA).
Cd24: Secondary Supply Air Temp.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Interval (3, 6, 12, 24 hr).
Cd27: Temp Units (C/F).
Cd28: Failure Action (A=Full Cool, B=Partial, C=Evap Fan, D=Shutdown).
Cd29: In-Range Tolerance.
Cd30: Stagger Start Offset.
Cd31: Current Limit.
Cd32: Dehumidification Control.

PRE-TRIP TESTS (Section 1.13.6):
P: Pre-Trip Initiated (Lights Check).
P1-0: Heaters On.
P1-1: Heaters Off.
P2-0: Preheaters Checked (If Equipped).
P3-0: Low Speed Condenser Fan On.
P3-1: Low Speed Condenser Fan Off.
P3-2: High Speed Condenser Fan On.
P3-3: Condenser Fan Off.
P4-0: Low Speed Evap Fan On.
P4-1: Evap Fan Off.
P4-2: High Speed Evap Fan On.
P4-3: Evap Fan Off.
P5-0: Return/Supply Probe Test.
P5-1: Primary/Secondary Probe Test.
P6-0: Compressor Started (45 sec check).
P6-1: SMV Opening.
P6-2: Quench Valve Test.
P6-3: SMV Closed.
P6-4: Suction Solenoid Valve (SSV) Test.

TORQUE VALUES (Table 4-2):
Suction/Discharge Service Valves: 20-30 ft-lb (2.77-4.15 mkg).
Pump End Bearing Head: 40-50 ft-lb (5.5-6.9 mkg).
Bottom Plate: 40-50 ft-lb (5.5-6.9 mkg).
Motor End Cover: 55-60 ft-lb (7.6-8.3 mkg).
Connecting Rod Cap Screw: 10-12 ft-lb (1.38-1.66 mkg).
Sight Glass: 35-45 ft-lb (4.8-6.2 mkg).

PRESSURE SWITCHES:
High Pressure (HPS): Cutout 350 +/- 10 psig (25 kg/cm2). Cut-in 250 +/- 10 psig.
Water Pressure (WP): Cut-in 7 +/- 3 psig. Cutout 22 +/- 5 psig.
`;

export const CARRIER_T259_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT40-489 (T-259 Rev F) ***
SYSTEM: ThinLINE with Micro-Link 2 Controller.
COMPRESSOR: 06DR (Reciprocating).
REFRIGERANT: R-134a.
OIL: Castrol Icematic SW20 (POE) (3.6 liters / 7.6 U.S. pints).

ALARM CODES (Table 1-7):
AL20 Control Circuit Fuse Open (24 VAC).
AL21 Micro Circuit Fuse Open (18 VAC).
AL22 Evaporator Fan Motor Safety.
AL23 Auto Transformer Safety.
AL24 Compressor Motor Safety.
AL25 Condenser Fan Motor Safety.
AL26 All Supply and Return Air Sensor Failure.
AL27 Probe Circuit Calibration Failure.
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Mains Voltage Sensor Failure.
AL54 Primary Supply Air Sensor Failure.
AL55 Secondary Supply Air Sensor Failure.
AL56 Primary Return Air Sensor Failure.
AL57 Ambient Temperature Sensor Failure.
AL58 Compressor High Pressure Safety.
AL59 Heat Termination Thermostat (HTT) Safety.
AL60 Defrost Termination Sensor Failure (DTS).
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit (>154°C/310°F for 3 mins or >177°C/350°F).
AL65 Discharge Pressure or Condenser Pressure (CPC) Sensor Failure.
AL66 Suction Pressure Sensor Failure.
AL67 Humidity Sensor Failure.
ERR # Internal Microprocessor Failure.
LO Low Mains Voltage.
VENT VENT mode (CA option).
P-CA Pre-Trip mode (CA option).

DATACORDER ALARMS (Table 1-10):
AL70 Recorder Supply Temperature Out of Range.
AL71 Recorder Return Temperature Out of Range.
AL72-74 USDA Temperature Out of Range.
AL75 Cargo Probe Out of Range.
AL76, 77 Voltage Sensors 1-2 Out of Range.
AL78-85 Network Sensors 1-3 Out of Range.
AL86-90 Errors 1-5 Out of Range.
AL91 DataCorder Alarm Queue Full.

FUNCTION CODES (Table 1-6):
Cd01: Modulation Valve Opening (%).
Cd02: Future Expansion.
Cd03: Suction Solenoid Valve (Open/Closed).
Cd04: Line Current, Phase A.
Cd05: Line Current, Phase B.
Cd06: Line Current, Phase C.
Cd07: Mains Power Voltage.
Cd08: Mains Power Frequency.
Cd09: Ambient Temperature.
Cd10: Compressor Suction Temperature.
Cd11: Compressor Discharge Temperature.
Cd12: Compressor Suction Pressure.
Cd13: Compressor Discharge Pressure or Condenser Pressure.
Cd14: Future Expansion.
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity (%).
Cd18: Software Revision #.
Cd19: Battery Check.
Cd20: Configuration ID.
Cd24: Secondary Supply Air Temperature.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Termination Sensor Temperature.
Cd27: Defrost Interval (Hours).
Cd28: Temperature Units (C or F).
Cd29: Failure Action Code (A=Full Cool, B=Partial Cool, C=Evap Fan Only, D=Shutdown).
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset Time.
Cd32: Current Limit (Amperes).
Cd33: Dehumidification Control.
Cd34: Economy Mode.
Cd35: Bulb Mode Select.
Cd36: Fan speed Select.
Cd37: Defrost Termination Sensor Setting.

PRE-TRIP TESTS (Table 1-8):
P: Pre-Trip Initiated.
P1-0: Heaters Turned On.
P1-1: Heaters Turned Off.
P2-0: Condenser Fan On.
P2-1: Condenser Fan Off.
P3-0: Low Speed Evaporator Fan Motors On.
P3-1: Low Speed Evaporator Fan Motors Off.
P4-0: High Speed Evaporator Fan Motors On.
P4-1: High Speed Evaporator Fan Motors Off.
P5-0: Probe Test.
P5-1: Probe Test.
P6-0: Compressor Started.
P6-2: Suction Modulation Valve (Open).
P6-4: Suction Modulation Valve (Closed).
P6-5: Suction Solenoid Valve.
P7-0: High Pressure Switch Closed.
P7-1: High Pressure Switch Open.
P8-0: Perishable Mode Heat Test.
P8-1: Perishable Mode Pull Down Test.
P8-2: Perishable Mode Maintain Temperature Test.
P9-0: Defrost Test.
P10-0: Frozen Mode (Setup) Test.
P10-1: Frozen Mode (Pull Down) Test.
P10-2: Frozen Mode Maintain Temperature Test.

TORQUE VALUES (Table 4-3, 4-5):
Suction/Discharge Service Valves: 20-30 ft-lb (2.77-4.15 mkg).
Pump End Bearing Head: 40-50 ft-lb.
Bottom Plate: 40-50 ft-lb.
Motor End Cover: 55-60 ft-lb.
Connecting Rod: 10-12 ft-lb.
Sight Glass: 35-45 ft-lb.
Oil Pump Drive Segment: 4-6 ft-lb.
Crankshaft: 25-30 ft-lb.

PRESSURE SWITCHES:
High Pressure (HPS): Cutout 350 +/- 10 psig (25 kg/cm2). Cut-in 250 +/- 10 psig (18 kg/cm2).
`;

export const CARRIER_T257_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT40-449, 69NT40-459 (T-257-03) ***
SYSTEM: ThinLINE with Computer Control - Electronics Center (CC-EC) / Microprocessor.
COMPRESSOR: 06DR (Reciprocating).
REFRIGERANT: R-134a.
OIL: Castrol Icematic SW20 (POE) (3.6 liters / 7.6 U.S. pints).

ALARM CODES (Table 1-5):
AL20 Control Circuit Fuse Open (6A).
AL21 Evaporator Fan Motor Internal Protector.
AL22 Auto Transformer Internal Protector.
AL23 Compressor Motor Internal Protector.
AL24 Condenser Fan Motor Internal Protector.
AL25 Compressor High Pressure Limit Safety.
AL26 All Supply and Return Air Sensor Failure.
AL27 Probe Circuit Calibration Failure.
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Main Voltage Sensor Failure.
AL54 Primary Supply Air Sensor Failure.
AL55 Secondary Supply Air Sensor Failure.
AL56 Primary Return Air Sensor Failure.
DAL57 Secondary Return Air Sensor Failure (DataCORDER).
AL58 Ambient Temperature Sensor Failure.
AL59 Heat Termination Thermostat Failure.
AL60 Defrost Termination Thermostat Failure (Closed).
AL61 Defrost Termination Thermostat Failure (Open).
AL62 Heaters Failure.
AL63 Compressor Motor Failure.
DAL64 DataCORDER Low Battery.
AL65 Current Over Limit.
DTP00 Approaching DataCORDER Memory Overwrite.
DTP01 DataCORDER Overwriting Data.
ERR # Internal Microprocessor Failure (0-4).
LO Low Main Voltage (>20% drop).

FUNCTION CODES (Table 1-4):
Cd00: Alarm List.
Cd01: Suction Modulation Valve Opening (%).
DCd02: Quench Valve (Open - Closed).
Cd03: Suction Solenoid Valve (Open - Closed).
Cd04: Line Current, Phase A.
Cd05: Line Current, Phase B.
Cd06: Line Current, Phase C.
Cd07: Supply Voltage.
Cd08: Supply Frequency.
Cd09: Ambient Air Temperature.
Cd10: Compressor Suction Temperature.
DCd11: Compressor Discharge Temperature.
DCd12: Saturated Condenser Temperature.
DCd13: Compressor Discharge Pressure.
Cd14: Future Expansion.
Cd15: Future Expansion.
Cd16: Compressor Motor Hour Meter.
DCd17: Hours Since Last Trip Start.
Cd18: Software Revision Number.
DCd19: Serial # (First 4 of 8).
DCd20: Serial # (Second 4 of 8).
DCd21: USDA #1 Probe Temperature.
DCd22: USDA #2 Probe Temperature.
DCd23: Secondary Return Air Temperature (USDA).
Cd24: Secondary Supply Air Temperature.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Interval.
Cd27: Temperature Units (C or F).
Cd28: Failure Action.
Cd29: In-Range Tolerance.
Cd30: Stagger Start Offset Time.
Cd31: Current Limit.
Cd32: Dehumidification Control (Optional).

PRE-TRIP TESTS (1.11.6):
P: Pre-Trip Initiated.
P1-0: Heaters Turned On.
P1-1: Heaters Turned Off.
P2-0: Preheaters Checked (If so Equipped).
P3-0: Low Speed Condenser Fan On.
P3-1: Low Speed Condenser Fan Off.
P3-2: High Speed Condenser Fan On.
P3-3: Condenser Fan Off.
P4-0: Low Speed Evaporator Motor Turned On.
P4-1: Evaporator Motor Off.
P4-2: High Speed Evaporator Motor Turned On.
P4-3: Evaporator Motor Off.
P5-0: Return/Supply Probe Test.
P5-1: Primary/Secondary Probe Test.
P6-0: Compressor Started And Runs for 45 Seconds.
P6-1: Suction Modulation Valve Opening.
P6-2: Quench Valve Test.
P6-3: Suction Modulation Valve (Closed).
P6-4: Suction Solenoid Valve.

TORQUE VALUES (Table 4-2, 4-5):
Suction/Discharge Service Valves: 20-30 ft-lb (2.77-4.15 mkg).
Pump End Bearing Head: 40-50 ft-lb.
Bottom Plate: 40-50 ft-lb.
Motor End Cover: 55-60 ft-lb.
Connecting Rod: 10-12 ft-lb.
Sight Glass: 35-45 ft-lb.
Oil Pump Drive Segment: 4-6 ft-lb.
Crankshaft: 25-30 ft-lb.

PRESSURE SWITCHES:
High Pressure (HPS): Cutout 350 +/- 10 psig (25 kg/cm2). Cut-in 250 +/- 10 psig.
Water Pressure (WP): Cut-in 7 +/- 3 psig. Cutout 22 +/- 5 psig.
`;

export const CARRIER_T252_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier ThinLINE 69NT20-284, 69NT40-461, 69NT40-464 (T-252-05) ***
SYSTEM: ThinLINE with Micro-Link 1 (or similar early electronics).
COMPRESSOR: 06DR (Reciprocating).
REFRIGERANT: R-12 (Convertible to R-22).
OIL: Mineral (Cryol 150, Suniso 3GS, Capella WF32).

ALARM CODES (Table 1-5):
AL20 Control Circuit Fuse Open (6A).
AL21 Evaporator Fan Motor Internal Protector.
AL22 Auto Transformer Internal Protector.
AL23 Compressor Motor Internal Protector.
AL24 Condenser Fan Motor Internal Protector.
AL25 Compressor High Pressure Limit Safety.
AL26 All Supply and Return Air Sensor Failure.
AL27 Probe Circuit Calibration Failure.
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Main Voltage Sensor Failure.
AL54 Primary Supply Sensor (STS) Failure.
AL55 Secondary Supply Sensor (SRS) Failure.
AL56 Primary Return Sensor (RTS) Failure.
DAL57 Secondary Return Sensor (RRS) Failure.
AL58 Ambient Sensor Failure.
AL59 Heat Termination Thermostat (HTT) Failure.
AL60 Defrost Termination Thermostat (DTT) Failure (Closed).
AL61 Defrost Termination Thermostat (DTT) Failure (Open).
AL62 Heaters Failure.
AL63 Compressor Motor Failure.
DAL64 DataCORDER Low Battery.
AL65 Current Over Limit.

FUNCTION CODES (Table 1-4):
Cd01: Suction Modulation Valve Opening (%).
DCd02: Quench Valve (Open - Closed).
Cd03: Suction Solenoid Valve (Open - Closed).
Cd04: Line Current Phase A.
Cd05: Line Current Phase B.
Cd06: Line Current Phase C.
Cd07: Supply Voltage.
Cd08: Supply Frequency.
Cd09: Ambient Air Temperature.
Cd10: Compressor Suction Temperature.
DCd11: Compressor Discharge Temperature.
DCd12: Saturated Condenser Temperature.
DCd13: Compressor Discharge Pressure.
Cd14: Future Expansion.
Cd16: Compressor Motor Hour Meter.
DCd17: Hours Since Last Trip Start.
Cd18: Software Revision Number.
DCd19: Serial # (First 4 of 8).
DCd20: Serial # (Second 4 of 8).
DCd21: USDA #1 Probe Temperature.
DCd22: USDA #2 Probe Temperature.
DCd23: Secondary Return Air Temperature (USDA).
Cd24: Secondary Supply Air Temperature.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Interval.
Cd27: Temperature Units (C or F).
Cd28: Failure Action.
Cd29: In-Range Tolerance.
Cd30: Stagger Start Offset Time.
Cd31: Current Limit.
Cd32: Dehumidification Control.

PRE-TRIP TESTS (1.13.6):
P: Pre-Trip Initiated.
P1-0: Heaters Turned On.
P1-1: Heaters Turned Off.
P2-0: Preheaters Checked (If so Equipped).
P3-0: Low Speed Condenser Fan On.
P3-1: Low Speed Condenser Fan Off.
P3-2: High Speed Condenser Fan On.
P3-3: Condenser Fan Off.
P4-0: Low Speed Evaporator Motor Turned On.
P4-1: Evaporator Motor Off.
P4-2: High Speed Evaporator Motor Turned On.
P4-3: Evaporator Motor Off.
P5-0: Return/Supply Probe Test.
P5-1: Primary/Secondary Probe Test.
P6-0: Compressor Started.
P6-1: Suction Modulation Valve Opening.
P6-2: Quench Valve Test.
P6-3: Suction Modulation Valve (Closed).
P6-4: Suction Solenoid Valve.

TORQUE VALUES (Table 4-2, 4-5):
Suction/Discharge Service Valves: 20-30 ft-lb (2.77-4.15 mkg).
Pump End Bearing Head: 40-50 ft-lb.
Bottom Plate: 40-50 ft-lb.
Motor End Cover: 55-60 ft-lb.
Connecting Rod: 10-12 ft-lb.
Sight Glass: 35-45 ft-lb.
Oil Pump Drive Segment: 4-6 ft-lb.
Crankshaft: 25-30 ft-lb.

PRESSURE SWITCHES:
High Pressure (HPS): Cutout 350 +/- 10 psig (25 kg/cm2). Cut-in 250 +/- 10 psig.
Water Pressure (WP): Cut-in 7 +/- 3 psig. Cutout 22 +/- 5 psig.
`;
