
export const CARRIER_T320_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier EliteLINE 69NT40-551-001 to 199 (T-320 Rev B) ***
SYSTEM: Scroll Compressor (RSH105) with Micro-Link 3.
REFRIGERANT: R-134a.
OIL: Mobil ST32 (POE).

ALARM CODES (Table 3-6):
AL14 Phase Sequence Failure.
AL15 Loss of Cool.
AL16 Compressor Current High.
AL17 Phase Sequence Failure - Pressure.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Circuit Fuse Open (F3A/F3B).
AL21 Micro Circuit Fuse Open (F1/F2).
AL22 Evaporator Fan Motor Safety (IP-EM).
AL23 Loss of Phase B.
AL24 Compressor Motor Safety (IP-CP/HPS).
AL25 Condenser Fan Motor Safety (IP-CM).
AL26 All Supply/Return Control Sensors Failure.
AL27 A/D Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Fresh Air Position Sensor (VPS).
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Sensor (STS) Failure.
AL55 I/O Failure.
AL56 Primary Return Sensor (RTS) Failure.
AL57 Ambient Sensor Failure.
AL58 Compressor High Pressure Safety.
AL60 Defrost Temperature Sensor Failure.
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit.
AL65 Discharge Pressure Transducer Failure.
AL66 Suction Pressure Transducer Failure.
AL67 Humidity Sensor Failure.
ERR 0 RAM Failure.
ERR 1 Program Memory Failure.
ERR 2 Watchdog Timeout.
ERR 5 A-D Failure.
ERR 6 IO Board Failure.
ERR 7 Controller Failure.
ERR 8 DataCorder Failure.
ERR 9 Controller Failure.

FUNCTION CODES (Table 3-5):
Cd01: SMV % Open.
Cd03: Compressor Motor Current (T3).
Cd04-06: Line Current A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Temperature.
Cd10: Compressor Suction Temp.
Cd11: Compressor Discharge Temp.
Cd12: Compressor Suction Pressure.
Cd14: Compressor Discharge Pressure.
Cd15: Unloader Valve Status.
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity %.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Economizer Valve Status.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Temp Sensor Reading.
Cd27: Defrost Interval.
Cd28: Temperature Units.
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: Current Limit.
Cd33: Dehumidification Control (% RH).
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evaporator Speed Select.
Cd37: Defrost Termination Temp (Bulb Mode).
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override.
Cd42: Oil Return Valve.
Cd45: Fresh Air Vent Position.
Cd49: Days Since Last Pre-trip.

PRE-TRIP TESTS (Table 3-7):
P0-0: Pre-Trip Initiated.
P1-0/1: Heaters On/Off.
P2-0/1: Condenser Fan On/Off.
P3: Low Speed Evap Fan.
P4: High Speed Evap Fan.
P5: Supply/Return Probe Test.
P6: Refrigerant Probes, Comp, Valves.
P7: High Pressure Switch.
P8: Perishable Mode Heat/Pulldown/Maintain.
P9: Defrost Test.
P10: Frozen Mode Heat/Pulldown/Maintain.

REFRIGERATION SYSTEM DATA (Section 2.2):
Compressor Model: RSH105.
Weight: 46.5 kg.
Oil Charge: 2957 ml (100 oz) Mobil ST32.
R-134a Charge: Receiver: 5.22kg (11.5 lbs), Water-Cooled: 5.56 kg (12.25 lbs).
HPS: Cutout 25 kg/cm2 (350 psig).
HTT: Opens 54°C (130°F), Closes 38°C (100°F).
Fusible Plug: 99°C (210°F).
Rupture Disc: 35 kg/cm2 (500 psig).

TORQUE VALUES (Table 6-6 & Text):
Compressor Sight Glass: 1-1/2-18 NEF - 35-45 ft-lb (48-61 Nm).
Fusible Plug/Rupture Disc: 6.2 to 6.9 mkg (45 to 50 ft-lbs).
Compressor Base Resilient Mounts: 6.2 mkg (45 ft-lbs).
Suction/Discharge Valves: 11-13.8 mkg (80-100 ft-lbs).
Economizer Valve: 6.9-8.3 mkg (50-60 ft-lbs).
Oil Return Valve: 1.4-1.66 mkg (10-12 ft-lbs).
Bolt Torques (Table 6-6):
1/4-20: 6.3-6.9 ft-lbs.
5/16-18: 11 ft-lbs.
3/8-16: 20-22 ft-lbs.
`;

export const CARRIER_T322_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier EliteLINE 69NT20-551-300 to 399 (T-322 Rev A) ***
SYSTEM: 20ft Unit. Scroll Compressor (RSH105) with Micro-Link 3.
REFRIGERANT: R-134a.
OIL: Mobil ST32 (POE).

ALARM CODES (Table 3-6):
AL05 Manual Defrost Switch Failure.
AL06 Keypad or Harness Failure.
AL07 Fresh Air Vent Open with Frozen Set Point.
AL08 High Compressor Pressure Ratio.
AL14 Phase Sequence Failure - Electronic.
AL15 Loss of Cooling.
AL16 Compressor Current High.
AL17 Phase Sequence Failure - Pressure.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Circuit Fuse Open (24 VAC) - F3.
AL21 Micro Circuit Fuse Open (18 VAC) - F1/F2.
AL22 Evaporator Fan Motor Safety.
AL23 Loss of Phase B.
AL24 Compressor Motor Safety.
AL25 Condenser Fan Motor Safety.
AL26 All Supply and Return Control Sensors Failure.
AL27 A/D Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Fresh Air Position Sensor (VPS).
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Temperature Sensor Failure (STS).
AL55 I/O Failure.
AL56 Primary Return Temperature Sensor Failure (RTS).
AL57 Ambient Temperature Sensor Failure.
AL58 Compressor High Pressure Safety.
AL59 Heater Termination Thermostat (HTT).
AL60 Defrost Temperature Sensor Failure (DTS).
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit.
AL65 Discharge Pressure Transducer Failure.
AL66 Suction Pressure Transducer Failure.
AL67 Humidity Sensor Failure.
AL68 Condenser Pressure Sensor Fault.
AL69 Suction Pressure Sensor.
ERR 0 RAM failure.
ERR 1 Program Memory failure.
ERR 2 Watchdog time-out.
ERR 3 N/A.
ERR 4 N/A.
ERR 5 A-D failure.
ERR 6 IO Board failure.
ERR 7 Controller failure.
ERR 8 DataCORDER failure.
ERR 9 Controller failure.

FUNCTION CODES (Table 3-5):
Cd01: Suction Modulation Valve Opening (%).
Cd02: Not Applicable.
Cd03: Compressor Motor Current.
Cd04-06: Line Current A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Temperature.
Cd10: Compressor Suction Temperature.
Cd11: Compressor Discharge Temperature.
Cd12: Compressor Suction Pressure.
Cd13: Not Applicable.
Cd14: Compressor Discharge Pressure.
Cd15: Unloader Valve.
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity (%).
Cd18: Software Revision #.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Economizer Valve.
Cd22: Compressor State.
Cd23: Evaporator Fan.
Cd24: Controlled Atmosphere State.
Cd25: Compressor Run Time Remaining Until Defrost.
Cd26: Defrost Temperature Sensor Reading.
Cd27: Defrost Interval.
Cd28: Temperature Units.
Cd29: Failure Action.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset Time.
Cd32: Current Limit.
Cd33: Perishable Mode Dehumidification Control (% RH).
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evaporator Speed Select.
Cd37: Defrost Termination Temperature Setting (Bulb Mode).
Cd38: Secondary Supply Temperature Sensor.
Cd39: Secondary Return Temperature Sensor.
Cd40: Container Identification Number.
Cd41: Valve Override.
Cd42: Oil Return Valve.
Cd45: Fresh Air Vent Position Sensor.
Cd46: Airflow Display Units.
Cd47: Variable Economy Temperature Setting.
Cd48: Dehumidification Parameter Selection.
Cd49: Days Since Last Successful Pre-trip.
Cd51: Automatic Cold Treatment Parameter Selection.
Cd53: Automatic Set point Change Mode Parameter Selection.
Cd54: Suction Superheat.
Cd55: Discharge Superheat.

PRE-TRIP TESTS (Table 3-7):
P0-0: Pre-Trip Initiated.
P1-0: Heaters Turned On.
P1-1: Heaters Turned Off.
P2-0: Condenser Fan On.
P2-1: Condenser Fan Off.
P3: Low Speed Evaporator Fans.
P4: High Speed Evaporator Fan.
P5-0: Supply/Return Probe Test.
P5-1: Supply Probe Test.
P5-2: Return Probe Test.
P6: Refrigerant Probes, Compressor and Refrigeration valves.
P6-0: Discharge Thermistor Test.
P6-1: Suction Thermistor Test.
P6-2: Discharge Pressure Sensor Test.
P6-3: Suction Pressure Sensor Test.
P6-4: Compressor Current Draw Test.
P6-5: Suction Modulation Valve Test.
P6-6: Economizer Valve Test.
P6-7: Unloader Valve Test.
P7-0: High Pressure Switch Open.
P7-1: High Pressure Switch Closed.
P8-0: Perishable Mode Heat Test.
P8-1: Perishable Mode Pull Down Test.
P8-2: Perishable Mode Maintain Temperature Test.
P9-0: Defrost Test.
P10-0: Frozen Mode Heat Test.
P10-1: Frozen Mode Pull Down Test.
P10-2: Frozen Mode Maintain Temperature Test.

REFRIGERATION SYSTEM DATA (Section 2.2):
Compressor Model: RSH105 (Scroll).
Oil Charge: 2957 ml (100 ounces) Mobil ST32.
Refrigerant: R-134a.
Charge (Water Cooled): 5.33 kg (11.75 lbs).
Charge (Receiver): 4.99 kg (11.0 lbs).
HPS Cutout: 25 kg/cm2 (350 psig).
HPS Cut-In: 18 kg/cm2 (250 psig).
HTT Opens: 54°C (130°F), Closes 38°C (100°F).
Fusible Plug: 99°C (210°F).
Rupture Disc: 35 kg/cm2 (500 psig).

TORQUE VALUES (Table 6-6 & Text):
Compressor Mounting (Upper): 2.8 mkg (20 ft-lbs).
Compressor Mounting (Lower): 6.2 mkg (45 ft-lbs).
Service Valve Suction/Discharge: 110 to 140 Nm (80 to 100 ft-lbs).
Economizer Valve: 70 to 85 Nm (50 to 60 ft-lbs).
Oil Return Valve: 14 to 20 Nm (10 to 12 ft-lbs).
Bolt Torques (Table 6-7):
1/4-20: 9.3 Nm (6.9 ft-lbs).
5/16-18: 16.4 Nm (12.1 ft-lbs).
3/8-16: 30 Nm (22.0 ft-lbs).
`;

export const CARRIER_T292_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier EliteLINE 69NT40-531-001 to 199 (T-292 Rev C) ***
SYSTEM: Scroll Compressor (RSH105) with Micro-Link 2i.
REFRIGERANT: R-134a.
OIL: Mobil ST32 (POE).

ALARM CODES (Table 3-6):
AL13 Expansion Module Fault.
AL14 Phase Sequence Failure.
AL15 Loss of Cooling.
AL16 Compressor Current High.
AL17 Phase Sequence Failure - Pressure.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Circuit Fuse Open (F3).
AL21 Micro Circuit Fuse Open (F1/F2).
AL22 Evaporator Fan Motor Safety (IP-EM).
AL23 Loss of Phase B.
AL24 Compressor Motor Safety.
AL25 Condenser Fan Motor Safety (IP-CM).
AL26 All Supply/Return Control Sensors Failure.
AL27 A/D Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Fresh Air Position Sensor (VPS).
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Sensor Failure (STS).
AL55 DataCORDER Failure.
AL56 Primary Return Sensor Failure (RTS).
AL57 Ambient Sensor Failure.
AL58 Compressor High Pressure Safety (HPS).
AL59 Heat Termination Thermostat (HTT).
AL60 Defrost Temperature Sensor Failure (DTS).
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit.
AL65 Discharge Pressure Transducer Failure.
AL66 Suction Pressure Transducer Failure.
AL67 Humidity Sensor Failure.
AL69 Suction Temperature Sensor Failure.
dAL70 Recorder Supply Out of Range.
dAL71 Recorder Return Out of Range.
ERR 0 RAM Failure.
ERR 1 Program Memory Failure.
ERR 2 Watchdog Timeout.
ERR 3 On board timer failure.
ERR 4 Internal counter failure.
ERR 5 A-D failure.

FUNCTION CODES (Table 3-5):
Cd01: SMV % Open.
Cd03: Compressor Motor Current (T3).
Cd04-06: Line Current A, B, C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Temperature.
Cd10: Compressor Suction Temp.
Cd11: Compressor Discharge Temp.
Cd12: Compressor Suction Pressure.
Cd14: Compressor Discharge Pressure.
Cd15: Unloader Valve Status.
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity.
Cd18: Software Revision.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Economizer Valve Status.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd25: Time Remaining Until Defrost.
Cd26: Defrost Temp Sensor Reading.
Cd27: Defrost Interval.
Cd28: Temperature Units.
Cd29: Failure Action Mode.
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset.
Cd32: Current Limit.
Cd33: Dehumidification Control.
Cd34: Economy Mode.
Cd35: Bulb Mode.
Cd36: Evaporator Speed Select.
Cd37: Defrost Termination Temp (Bulb Mode).
Cd38: Secondary Supply Temp.
Cd39: Secondary Return Temp.
Cd40: Container ID.
Cd41: Valve Override (Service).
Cd42: Oil Return Valve.
Cd45: Fresh Air Vent Position.

PRE-TRIP TESTS (Table 3-7):
P0-0 Pre-Trip Initiated.
P1-0 Heaters On.
P1-1 Heaters Off.
P2-0 Condenser Fan On.
P2-1 Condenser Fan Off.
P3-0 Low Speed Evap Fan On.
P3-1 Low Speed Evap Fan Off.
P4-0 High Speed Evap Fan On.
P4-1 High Speed Evap Fan Off.
P5-0 Supply/Return Probe Test.
P5-1 Supply Probe Test.
P5-2 Return Probe Test.
P6 Refrigerant Probes, Comp, Valves.
P6-0 Discharge Thermistor.
P6-1 Suction Thermistor.
P6-2 Discharge Pressure Sensor.
P6-3 Suction Pressure Sensor.
P6-4 Compressor Current Draw.
P6-5 Suction Modulation Valve.
P6-6 Economizer Valve.
P6-7 Unloader Valve.
P7-0 High Pressure Switch Closed.
P7-1 High Pressure Switch Open.
P8-0 Perishable Mode Heat.
P8-1 Perishable Mode Pull Down.
P8-2 Perishable Mode Maintain.
P9-0 Defrost Test.
P10-0 Frozen Mode Heat.
P10-1 Frozen Mode Pull Down.
P10-2 Frozen Mode Maintain.

REFRIGERATION SYSTEM DATA (Section 2.2):
Compressor Model: RSH105 (Scroll).
Oil Charge: 2957 ml (100 oz).
Refrigerant: R-134a.
Charge (Water Cooled): 5.56 kg (12.25 lbs).
Charge (Receiver): 5.22 kg (11.5 lbs).
HPS Cutout: 25 kg/cm2 (350 psig).
HPS Cut-In: 18 kg/cm2 (250 psig).
HTT Opens: 54°C (130°F), Closes 38°C (100°F).
Fusible Plug: 99°C (210°F).
Rupture Disc: 35 kg/cm2 (500 psig).

TORQUE VALUES (Table 6-7):
Compressor Mounting (Upper): 2.8 mkg (20 ft-lbs).
Compressor Mounting (Lower): 6.2 mkg (45 ft-lbs).
Service Valve Suction/Discharge: 11-13.8 mkg (80-100 ft-lbs).
Economizer Valve: 6.9-8.3 mkg (50-60 ft-lbs).
Oil Return Valve: 1.4-1.66 mkg (10-12 ft-lbs).
`;

export const CARRIER_T309_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier EliteLINE 69NT20-531-300 Streamline Scroll (T-309 Rev A) ***
SYSTEM: 20ft Unit. Scroll Compressor (RSH105) with Micro-Link 2i.
REFRIGERANT: R-134a.
OIL: Mobil ST32 (POE).

ALARM CODES (Table 3-6):
AL13 Expansion Module.
AL14 Phase Sequence Failure - Electronic.
AL15 Loss Cooling.
AL16 Compressor Current High.
AL17 Phase Sequence Failure - Pressure.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Circuit Fuse Open (24 vac) - F3.
AL21 Micro Circuit Fuse Open (18 vac) - F1/F2.
AL22 Evaporator Fan Motor Safety.
AL23 Loss of Phase B.
AL24 Compressor Motor Safety.
AL25 Condenser Fan Motor Safety.
AL26 All Supply and Return Temperature Control Sensors Failure.
AL27 A/D Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Fresh Air Position Sensor (VPS).
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Temperature Sensor Failure (STS).
AL55 DataCORDER Failure.
AL56 Primary Return Temperature Sensor Failure (RTS).
AL57 Ambient Temperature Sensor Failure.
AL58 Compressor High Pressure Safety.
AL59 Heat Termination Thermostat.
AL60 Defrost Temperature Sensor Failure.
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit.
AL65 Discharge Pressure Transducer Failure.
AL66 Suction Pressure Transducer Failure.
AL67 Humidity Sensor Failure.
AL69 Suction Temperature Sensor Failure.
ERR 0 RAM failure.
ERR 1 Program Memory failure.
ERR 2 Watchdog time-out.
ERR 3 On board timer failure.
ERR 4 Internal counter failure.
ERR 5 A-D failure.
LO Low Main Voltage.

FUNCTION CODES (Table 3-5):
Cd01: Suction Modulation Valve Opening (%).
Cd02: Not Applicable.
Cd03: Compressor Motor Current.
Cd04: Line Current, Phase A.
Cd05: Line Current, Phase B.
Cd06: Line Current, Phase C.
Cd07: Main Power Voltage.
Cd08: Main Power Frequency.
Cd09: Ambient Temperature.
Cd10: Compressor Suction Temperature.
Cd11: Compressor Discharge Temperature.
Cd12: Compressor Suction Pressure.
Cd13: Not Applicable.
Cd14: Compressor Discharge Pressure.
Cd15: Unloader Valve Status.
Cd16: Compressor Motor Hour Meter.
Cd17: Relative Humidity (%).
Cd18: Software Revision #.
Cd19: Battery Check.
Cd20: Config/Model #.
Cd21: Economizer Valve.
Cd22: Compressor State.
Cd23: Evaporator Fan State.
Cd24: Controlled Atmosphere State (Not used).
Cd25: Compressor Run Time Remaining Until Defrost.
Cd26: Defrost Temperature Sensor Reading.
Cd27: Defrost Interval (Hours).
Cd28: Temperature Units (_C or _F).
Cd29: Failure Action (Mode).
Cd30: In-Range Tolerance.
Cd31: Stagger Start Offset Time (Seconds).
Cd32: Current Limit (Amperes).
Cd33: Perishable Mode Dehumidification Control (% RH).
Cd34: Economy Mode (On-Off).
Cd35: Bulb Mode.
Cd36: Evaporator Speed Select.
Cd37: Defrost Termination Temperature Setting (Bulb Mode).
Cd38: Secondary Supply Temperature Sensor.
Cd39: Secondary Return Temperature Sensor.
Cd40: Container Identification Number.
Cd41: Valve Override (Service).
Cd42: Oil Return Valve.
Cd45: Fresh Air Vent Position Sensor.

PRE-TRIP TESTS (Table 3-7):
P0-0: Pre-Trip Initiated.
P1-0: Heaters Turned On.
P1-1: Heaters Turned Off.
P2-0: Condenser Fan On.
P2-1: Condenser Fan Off.
P3: Low Speed Evaporator Fans.
P3-0: Low Speed Evaporator Fan Motors On.
P3-1: Low Speed Evaporator Fan Motors Off.
P4-0: High Speed Evaporator Fan Motors On.
P4-1: High Speed Evaporator Fan Motors Off.
P5-0: Supply/Return Probe Test.
P5-1: Supply Probe Test.
P5-2: Return Probe Test.
P6: Refrigerant Probes, Compressor and Refrigeration Valves.
P6-0: Discharge Thermistor Test.
P6-1: Suction Thermistor Test.
P6-2: Discharge Pressure Sensor Test.
P6-3: Suction Pressure Sensor Test.
P6-4: Compressor Current Draw Test.
P6-5: Suction Modulation Valve Test.
P6-6: Economizer Valve Test.
P6-7: Unloader Valve Test.
P7-0: High Pressure Switch Closed.
P7-1: High Pressure Switch Open.
P8-0: Perishable Mode Heat Test.
P8-1: Perishable Mode Pull Down Test.
P8-2: Perishable Mode Maintain Temperature Test.
P9-0: Defrost Test.
P10-0: Frozen Mode Heat Test.
P10-1: Frozen Mode Pull Down Test.
P10-2: Frozen Mode Maintain Temperature Test.

REFRIGERATION SYSTEM DATA (Section 2.2):
Compressor Model: RSH105 (Scroll).
Oil Charge: 2957 ml (100 ounces) Mobil ST32.
Refrigerant: R-134a.
Charge (Water Cooled): 5.33 kg (11.75 lbs).
Charge (Receiver): 4.99 kg (11.0 lbs).
HPS Cutout: 25 kg/cm2 (350 psig).
HPS Cut-In: 18 kg/cm2 (250 psig).
HTT Opens: 54°C (130°F), Closes 38°C (100°F).
Fusible Plug: 99°C (210°F).
Rupture Disc: 35 kg/cm2 (500 psig).

TORQUE VALUES (Table 6-6 & Text):
Compressor Upper Mounting (Shoulder Bolt): 2.8 mkg (20 ft-lbs).
Compressor Lower Mounting (Resilient Mount Screws): 6.2 mkg (45 ft-lbs).
Suction/Discharge Service Valves: 11 to 13.8 mkg (80 to 100 ft-lbs).
Economizer Valve: 6.9 to 8.3 mkg (50 to 60 ft-lbs).
Oil Return Valve: 1.4 to 1.66 mkg (10 to 12 ft-lbs).
Unloader Enclosing Tube Locknut: 2.78 mkg (20 ft-lb).
Evaporator Fan Clamp Bolts: 0.81 mkg (70 inch-pounds).
Evaporator Fan Shaft Nut: 40 ft-lbs.
`;

export const CARRIER_T327_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier EliteLINE 69NT40-551-400 to 425 (T-327 Rev C) ***
SYSTEM: Scroll Compressor (RSH105) with Micro-Link 3.
REFRIGERANT: R-134a.
OIL: Mobil 32ST (POE).

ALARM CODES (Table 3-6):
AL05 Manual Defrost Switch Failure.
AL06 Keypad or Harness Failure.
AL07 Fresh Air Vent Open with Frozen Setpoint.
AL08 High Compressor Pressure Ratio.
AL10 CO2 Sensor Failure.
AL14 Phase Sequence Failure.
AL15 Loss of Cool.
AL16 Compressor Current High.
AL17 Phase Sequence Failure - Pressure.
AL18 Discharge Pressure High.
AL19 Discharge Temperature High.
AL20 Control Circuit Fuse Open (24 vac).
AL21 Micro Circuit Fuse Open (18 vac).
AL22 Evaporator Fan Motor Safety.
AL23 Loss of Phase B.
AL24 Compressor Motor Safety.
AL25 Condenser Fan Motor Safety.
AL26 All Supply and Return Control Sensors Failure.
AL27 A/D Accuracy Failure.
AL28 Low Suction Pressure.
AL50 Fresh Air Position Sensor (VPS).
AL51 Alarm List Failure.
AL52 Alarm List Full.
AL53 Battery Pack Failure.
AL54 Primary Supply Temperature Sensor Failure (STS).
AL55 I/O Failure.
AL56 Primary Return Temperature Sensor Failure (RTS).
AL57 Ambient Temperature Sensor Failure.
AL58 Compressor High Pressure Safety.
AL59 Heater Termination Thermostat.
AL60 Defrost Temperature Sensor Failure.
AL61 Heaters Failure.
AL62 Compressor Circuit Failure.
AL63 Current Over Limit.
AL64 Discharge Temperature Over Limit.
AL65 Discharge Pressure Transducer Failure.
AL66 Suction Pressure Transducer Failure.
AL67 Humidity Sensor Failure.
AL68 Condenser Pressure Sensor.
AL69 Suction Pressure Sensor.
ERR 0-9 Controller Failures.
LO Low Main Voltage.

FUNCTION CODES (Table 3-5):
Cd01 Suction Modulation Valve Opening.
Cd03 Compressor Motor Current.
Cd04-06 Line Currents.
Cd07 Main Power Voltage.
Cd08 Main Power Frequency.
Cd09 Ambient Temperature.
Cd10 Compressor Suction Temperature.
Cd11 Compressor Discharge Temperature.
Cd12 Compressor Suction Pressure.
Cd14 Compressor Discharge Pressure.
Cd15 Unloader Valve.
Cd16 Compressor Motor Hour Meter.
Cd17 Relative Humidity.
Cd18 Software Revision.
Cd19 Battery Check.
Cd20 Config/Model.
Cd21 Economizer Valve.
Cd22 Compressor State.
Cd23 Evaporator Fan.
Cd24 Controlled Atmosphere State.
Cd25 Compressor Run Time Remaining Until Defrost.
Cd26 Defrost Temperature Sensor Reading.
Cd27 Defrost Interval.
Cd28 Temperature Units.
Cd29 Failure Action.
Cd30 In-Range Tolerance.
Cd31 Stagger Start Offset Time.
Cd32 Current Limit.
Cd33 Perishable Mode Dehumidification Control.
Cd34 Economy Mode.
Cd35 Bulb Mode.
Cd36 Evaporator Speed Select.
Cd37 Defrost Termination Temperature Setting (Bulb Mode).
Cd38 Secondary Supply Temperature Sensor.
Cd39 Secondary Return Temperature Sensor.
Cd40 Container Identification Number.
Cd41 Valve Override.
Cd42 Oil Return Valve.
Cd45 Fresh Air Vent Position Sensor.
Cd46 Airflow Display Units.
Cd47 Variable Economy Temperature Setting.
Cd48 Dehumidification Parameter Selection.
Cd49 Days Since Last Successful Pre-trip.
Cd51 Automatic Cold Treatment.
Cd53 Automatic Set point Change Mode.
Cd54 Suction Superheat.
Cd55 Discharge Superheat.

PRE-TRIP TESTS (Table 3-7):
P0-0 Pre-Trip Initiated.
P1-0 Heaters Turned On.
P1-1 Heaters Turned Off.
P2-0 Condenser Fan On.
P2-1 Condenser Fan Off.
P3 Low Speed Evaporator Fans.
P4 High Speed Evaporator Fan.
P5-0 Supply/Return Probe Test.
P5-1 Supply Probe Test.
P5-2 Return Probe Test.
P6-0 Discharge Thermistor Test.
P6-1 Suction Thermistor Test.
P6-2 Discharge Pressure Sensor Test.
P6-3 Suction Pressure Sensor Test.
P6-4 Compressor Current Draw Test.
P6-5 Suction Modulation Valve Test.
P6-6 Economizer Valve Test.
P6-7 Unloader Valve Test.
P7-0 High Pressure Switch Open.
P7-1 High Pressure Switch Closed.
P8-0 Perishable Mode Heat Test.
P8-1 Perishable Mode Pull Down Test.
P8-2 Perishable Mode Maintain Temperature Test.
P9-0 Defrost Test.
P10-0 Frozen Mode Heat Test.
P10-1 Frozen Mode Pull Down Test.
P10-2 Frozen Mode Maintain Temperature Test.

REFRIGERATION SYSTEM DATA (Section 2.2):
Compressor: RSH105.
Oil: Mobil 32ST (2957 ml).
R-134a: 5.56 kg (Water Cooled), 5.22 kg (Receiver).
HPS Cutout: 25 kg/cm2 (350 psig).
HTT: Opens 54C (130F), Closes 38C (100F).
Fusible Plug: 99C (210F).
Rupture Disc: 35 kg/cm2 (500 psig).

TORQUE VALUES (Table 6-6, 6-7 & Text):
Compressor Upper Mounting: 2.8 mkg (20 ft-lbs).
Compressor Lower Mounting: 6.2 mkg (45 ft-lbs).
Service Valve Suction/Discharge: 110-140 Nm (80-100 ft-lbs).
Economizer Valve: 70-85 Nm (50-60 ft-lbs).
Oil Return Valve: 14-20 Nm (10-12 ft-lbs).
Unloader Enclosing Tube Locknut: 2.78 mkg (20 ft-lb).
Evaporator Fan Clamp Bolts: 0.81 mkg (70 in-lbs).
Evaporator Fan Shaft Nut: 40 ft-lbs.
`;

export const CARRIER_T342_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier eAutoFresh Technical Supplement (T-342 Rev A) ***
APPLICABILITY: Units equipped with eAutoFresh On-Demand Ventilation System (e.g., 69NT40-551-114).
CONTROLLER: Micro-Link 3.

SYSTEM DESCRIPTION:
The eAutoFresh system moderates atmospheric levels in the container in response to cargo respiration.
Components: Vent slide, Stepper Motor (AF), Stepper Motor Drive (SD), CO2 Sensor (COS), Air Filter.
NOTE: Vent is closed in Frozen mode.

CONFIGURATION:
CnF44: eAutoFresh Enable (Set to "Up" to enable).

ALARM CODES (Section 3.4 & 5.1):
AL10 CO2 Sensor Failure: Reading outside range. Check Sensor/Wiring.
AL29 AutoFresh Failure: CO2 or O2 outside limits (>90 mins after vent full open).
     - Check slide operation (Pre-trip P0).
     - Check CO2 sensor.
     - Check Stepper Drive/Motor.

FUNCTION CODES (Section 3.2.2 & 4):
Cd43: eAutoFresh Mode Select.
      - Modes: OFF, USER, DELAY, TEST, gASLM (Gas Limit).
      - Parameters:
        * FLO: Opening limit (CMH/CFM).
        * tIM: Delay time (1-72 hrs).
        * CO2LM: Max CO2 limit (0-19%).
        * O2LM: Min O2 limit (2-20%).
        * Rtn: Return air temp offset.
Cd44: eAutoFresh Values.
      - Displays: CO2, O2, CO2LM, O2LM.
      - Displays "-----" if sensor not connected or configured.

TROUBLESHOOTING (Section 5):
1. Vent Not Opening:
   - Check Config CNf44.
   - Check Cd43 is not OFF.
   - Check wiring.
   - Check Stepper Drive/Motor.
   - Verify unit is not in Frozen mode.
2. Gas Limit Unavailable:
   - Sensor not enabled/detected.
   - Check CO2 sensor/wiring.
3. Unable to Calibrate CO2:
   - "Enter" key not held long enough (5 sec).
   - CO2 outside acceptable levels.
   - Check Sensor.

SERVICE & CHECKS (Section 6):
1. Maintenance:
   - Inspect rails/slide plate annually.
   - Replace Air Filter element annually.
2. Stepper Motor (AF) Check:
   - Disconnect 4-pin connector.
   - Winding Resistance: 72 to 84 Ohms (Red/Green and White/Black).
   - Infinite/Zero reading = Defective.
3. Drive Module (SD) Check:
   - Input: 24-32 VDC on Pin A (+) and Pin B/TP9 (-).
   - Output to Motor: Zero to 5V logic on Pins C and D (requires harness connected).
4. CO2 Sensor (COS):
   - Located in evaporator section.
   - Calibration: Use "CAL" option in Cd43 (Requires fresh air/vented container).

TORQUE VALUES:
- Motor Cup Screws: 0.29 mkg (25 in-lbs).
- Rail/Grille Screws: 0.29 mkg (25 in-lbs).
`;
