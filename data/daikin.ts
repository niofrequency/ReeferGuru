
export const DAIKIN_LX10F_CONTEXT = `
*** SUPPLEMENTARY REFERENCE: Daikin LX10F11B or later (DECOS Va) Service Manual (TR 13-07) ***
SYSTEM: Daikin Inverter Container Refrigeration Unit.
CONTROLLER: DECOS Va (Type C).
COMPRESSOR: Hermetic Scroll with Inverter (Variable Speed).
REFRIGERANT: R-134a.
OIL: IDEMITSU Daphne Hermetic Oil FVC68D.

SPECIFICATIONS (Section 1.1):
- Power: 3-phase 380-415V (50Hz) / 440-460V (60Hz).
- Control Temp Range:
  - Frozen: -30.0C to -10.0C (-22.0F to +14.0F).
  - Chilled: -9.9C to +30.0C (+14.1F to +86.0F).
- Refrigerant Charge: See unit nameplate.

PROTECTION DEVICES (Section 1.2):
- High Pressure Switch (HPS): OFF 2400kPa (24.47kg/cm2), ON 1900kPa (19.37kg/cm2).
- Pressure Relief Valve (PRV): Open 2450kPa.
- Fusible Plug: 95-100C.
- Circuit Breaker (CB): 30A (100mA).

ALARM CODES (Section 2.5):
F-Alarms (Critical Stop):
F101: HPS Activated (High Pressure). Check airflow, water, HPS.
F109: Low Pressure (LPT drop < -72kPa). Refrigerant shortage, EEV/LSV fail.
F301: Temperature Setting Request.
F401: All Supply/Return Sensors Fail (Chilled).
F405: HPT, DCHS1, DCHS2 all fail.
F407: HPT, LPT both fail.
F409: LPT, DCHS1, DCHS2 all fail.
F701: Abnormal Voltage (High >565V, Low <300V). Or Phase Loss.
F703: Unbalance Power Supply.
F705: Open Phase (R, S, or T).
F707: Fuse F2U Open (I/O Board).
F809: E809 generated twice (Refrigerant Shortage).

E-Alarms (Restart/Backup):
E101: HPS Activated (Restart after 3m).
E105: Compressor Overcurrent (>51A).
E107: DCHS1/DCHS2 High (>135C).
E109: Low Pressure (Restart).
E115: Condenser Fan Motor IP/Lock.
E201: Pumpdown Incomplete.
E202: Auto Pumpdown Fail.
E203: Overcooling Prevention (Chilled).
E207: Defrost Time Over (90 mins).
E303: Humidity Sensor Fail / Setting Req.
E304: Reheat Coil Configuration Error.
E305: Defrost Interval Setting Req.
E307: Calendar Setting Req.
E311: Trip Start Setting Req.
E401: Supply Sensor (SS) Fail.
E402: Data Recorder Supply (DSS) Fail.
E403: Return Sensor (RS) Fail.
E404: Data Recorder Return (DRS) Fail.
E405: Discharge Temp 1 (DCHS1) Fail.
E406: Suction Gas Temp (SGS) Fail.
E407: Evap Inlet Temp (EIS) Fail.
E409: Evap Outlet Temp (EOS) Fail.
E411: Ambient Sensor (AMBS) Fail.
E413: Low Pressure Transducer (LPT) Fail.
E415: High Pressure Transducer (HPT) Fail.
E417: Voltage Sensor (PT) Fail.
E419: Current Sensor (CT) Fail.
E425: USDA 1 Fail.
E427: USDA 2 Fail.
E429: USDA 3 Fail.
E431: Humidity Sensor (HuS) Fail.
E433: Cargo Temp Sensor (CTS) Fail.
E435: Eco Inlet Sensor (ECO IN) Fail.
E437: Eco Outlet Sensor (ECO OUT) Fail.
E439: Discharge Temp 2 (DCHS2) Fail.
E52C: Inverter Board Overheat (>90C).
E531: Unbalanced Power (Inverter).
E532: Voltage Inverter DC Bus (High/Low).
E607: Sheet Key Fail.
E707: Temporary Power Loss.
E801: CPU Battery Fail.
E805: FA Sensor Fail.
E807: Vent Open in Frozen.
E809: Refrigerant Shortage.
E903: Comm Error (CPU-Display).

INVERTER ALARMS (Section 2.5):
F528: Compressor Start Fail (5 times).
E523: Compressor Overcurrent.
E524: Compressor Overload.
E525: Compressor Step-out.
E526: Frequency Mismatch.
E528: Compressor Start Fail.
E536: Current Sensor Offset.
E53C: Charge Fail (Capacitor).

OPERATION MODES (Section 1.4):
- Frozen (Set < -10C): Controls via RS (Return Air).
- Chilled (Set >= -10C): Controls via SS (Supply Air).
- Defrost: Hot gas bypass. Initiates via Timer, Manual, or Frost Detection (EOS < 20C). Terminates when EOS > 20C (and RS check).

AUTOMATIC PUMPDOWN (Section 4.2):
1. Select "Auto P.down" in Service Menu.
2. Steps:
   - Normal op (30s).
   - Close LSV, Comp runs until LPT < -27kPa.
   - Leak check (20s).
   - Pressure Equalize (HSV open, LPT > 0kPa).
   - Terminate (Close HSV when LPT > 0-350kPa, Close EEV).
3. "GOOD" displayed upon completion.

MANUAL CHECK (Section 4.1):
- Access via "Initialize Menu" > "Manual Check".
- Tests:
  - PCC1/2 (Phase Correction).
  - CFH/CFL (Condenser Fan High/Low).
  - EFH/EFL (Evap Fan High/Low).
  - HSV (Hot Gas), RSV (Reheat), LSV (Liquid), ESV (Economizer).
  - EEV, EMV, DMV (Modulating Valves).
  - Sensor Check (SS, RS, etc).

SENSOR CHARACTERISTICS (Section 5.2):
Temp Sensors (SS, RS, DSS, DRS, EIS, EOS, SGS, AMBS):
-20C: 97.4 kOhm
0C: 32.7 kOhm
20C: 12.5 kOhm
40C: 5.2 kOhm

DCHS1/DCHS2 (Discharge):
10C: 479 kOhm
50C: 78.3 kOhm
100C: 11.2 kOhm
120C: 6.4 kOhm

Pressure Sensors (HPT/LPT) (Section 5.3):
Input: DC 5V.
Output:
-500 kPa: -1.03V
0 kPa: 0.50V
1000 kPa: 1.52V
2000 kPa: 2.54V

TORQUE VALUES (Section 5.1):
- Flare Nut 1/4": 15.7 Nm.
- Flare Nut 3/8": 36.3 Nm.
- Flare Nut 1/2": 54.9 Nm.
- Sight Glass: 35-45 ft-lb.
- Coil Resistance (Section 1.1):
  - Solenoids (HSV/LSV/ESV/RSV): 15.2 Ohm.
  - Modulating (EEV/EMV/DMV): 46 Ohm/phase.
`;
