
export const CARRIER_OPTIMALINE_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Carrier OptimaLINE 69NT40-701-001 to 099 (T-383 Rev C) ***
SYSTEM: OptimaLINE with Micro-Link 5 (ML5) Controller.
COMPRESSOR: Samsung Variable Speed Scroll (DS4ZB5080FMN).
REFRIGERANT: R-134a (Standard) or R-513A (Ready).
OIL: Idemitsu FW56EA (1300 ml / 44 ounces).

ALARM CODES (Table 4-4):
AL003 Evaporator Superheat Control Failure. AL012 VFD Control Instruction Timeout. AL013 VFD Communication Failure. AL015 Loss of Charge. AL017 Compressor Pressure Delta Failure. AL020 Control Circuit Fuse (F3 / F4) Open. AL021 Micro Circuit Fuse (F1 / F2) Open. AL022 Evaporator Fan IP Open. AL023 Loss of Phase B. AL025 Condenser Fan IP Open. AL026 All Supply and Return Air Sensors Failure. AL027 Analog to Digital Accuracy Failure. AL065 DPT Failure. AL066 Low Pressure Sensor Failure (EPT/SPT). AL072 Control Temperature Out of Range. AL091-094 VFD Alarms. AL098 Chill Injury. AL202 Economizer Superheat Control Fault. AL204 ECT Fault. AL205 ECP Fault. AL253 Backup Battery Pack Fault. AL258 HPS Open. AL259 HTT Open. AL260 DTS Fault. AL264 CPDS Fault. AL267 HS Fault. AL269 ETS1 / ETS2 Fault.

*** SUPPLEMENTARY REFERENCE: Carrier OptimaLINE 69NT40-701-100 to 199 (T-384 Rev A) ***
MODELS: 701-100 to 149 (R-134a/R-513A), 701-150 to 199 (R-1234yf).
REFRIGERANT: R-1234yf (A2L Mildly Flammable). 
CHARGE (R-1234yf): 4.08 kg (9 lbs). 
CHARGE (R-134a): 4.32 kg (9.5 lbs).
OIL: Idemitsu FW56EA (1300 ml).

R-1234yf SAFETY (Section 1.7):
- A2L TRAINING: Prior to using R-1234yf, technician must have A2L refrigerant training.
- AL084/085 ALERT: If triggered, unit shuts down and buzzer sounds (1s on/off).
- ENTRY PROTOCOL: Manually open fresh air vent and back doors. WAIT 10 MINUTES before entering.
- HOT WORK: Reclaim to 20 in HG vacuum and Nitrogen purge required before brazing/welding.

ALARM CODES (Table 4-4):
AL003 Evaporator Superheat Control Failure.
AL012 VFD Control Instruction Timeout.
AL013 VFD Communication Failure.
AL015 Loss of Charge.
AL017 Compressor Pressure Delta Failure (Fails to generate diff pressure).
AL020 Control Circuit Fuse (F3 / F4) Open.
AL021 Micro Circuit Fuse (F1 / F2) Open.
AL084 R-1234yf Refrigerant Leak Detected: High concentration in evaporator. Shut down unit, open doors, wait 10 mins.
AL085 R-1234yf Sensor Internal Fault: Display only.
AL091-094 VFD Faults (Voltage, Internal, Fan, Trip).
AL207 Manual Fresh Air Vent Open: Vent > 0% in frozen mode.
AL208 High Compressor Pressure Ratio.
AL250 Vent Position Sensor (VPS) Fault.
AL253 Backup Battery Pack Fault (Cd19 test).
AL258 Compressor High Pressure Safety (HPS) Open (>1 min).
AL259 Heat Termination Thermostat (HTT) Open.
AL260 Defrost Temperature Sensor (DTS) Fault.
AL264 Discharge Temperature Sensor (CPDS) Fault.
AL267 Humidity Sensor (HS) Fault.
AL269 Evaporator Temperature Sensors (ETS1 / ETS2) Fault.

FUNCTION CODES (Table 4-3):
Cd01 Compressor Capacity % (VFD Speed).
Cd03 Compressor Current (T3 leg).
Cd07 Mains Voltage. Cd08 Frequency.
Cd09 Ambient Temp. Cd10 Evap Temp (ETS). Cd11 Discharge Temp (CPDS).
Cd12 Suction Pressure (EPT/SPT). Cd14 Discharge Pressure (DPT).
Cd16 Hour Meter. Cd17 Humidity %. Cd18 Software Rev.
Cd19 Backup Battery Check (PASS/EOL/FAIL/toor/nobAt).
Cd20 Config/Model # (e.g., 01100 for 701-100).
Cd21 Capacity Mode. Cd22 Compressor State. Cd23 Evap Fan State.
Cd25 Time Until Defrost. Cd27 Defrost Interval. Cd28 Temp Units.
Cd32 Current Limit (15, 17, 19, 21, 23A).
Cd40 Container ID.
Cd44 EverFRESH Values (CO2, O2).
Cd45 Fresh Air Vent Position (0-240).
Cd48 Dehumidification / Bulb Mode.
Cd51 ACT. Cd53 ASC. Cd54 EEV % / Superheat.
Cd63 FuelWise. Cd65 TripWise. Cd71 EverFRESH Mode. Cd75 Pharma Mode.
Cd86 ECV % / Economizer Superheat.

PRE-TRIP TESTS (Table 4-5):
P0-1: R-1234yf Buzzer Test (Must hear audible alarm).
P5-7: Pri vs Sec Evap Temp. P5-9: Pri vs Sec EPT.
P6-7: EEV Test. P6-8: ECV Test.
P7: HPS Test. P8: Perishable. P10: Frozen.

REFRIGERATION SYSTEM DATA (Table 3-1):
HPS Cut-Out: 25 (+/- 1.0) kg/cm2 (350 psig).
HPS Cut-In: 18 (+/- 0.7) kg/cm2 (250 psig).
HTT Opens: 54° (+/- 3) C (130° F).
HTT Closes: 38° (+/- 4) C (100° F).
PRV Opens: 27.6 bar (400 psig).

TORQUE VALUES (Table 9-4 & Section 7.2.1):
Suction Rotalock: 143 to 161 Nm (106-119 ft-lbs).
Discharge Rotalock: 108.5 to 135.5 Nm (80-100 ft-lbs).
Economizer Connection: 108.5 to 135.5 Nm (80-100 ft-lbs).
Compressor Base Bolts: 58 Nm (43 ft-lbs).
Filter Drier: 43-47 Nm (32-35 ft-lbs).
PRV: 113 to 123 Nm (83-91 ft-lbs).
Access Panel: 6.8 Nm (60 in/lbs).
`;
