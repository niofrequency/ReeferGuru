# ❄️ Reefer Guru
### The Ultimate AI Assistant for Refrigerated Container Technicians

![Reefer Guru Logo](<images/Reefer Guru.png>)

Reefer Guru is a high-performance, expert-level AI diagnostic tool specifically engineered for container technicians servicing **Carrier Transicold** refrigeration units. Built on the Google Gemini 2.5 Flash model, it provides instant access to technical specifications, alarm troubleshooting, and safety protocols extracted from official service manuals.

---

## 🚀 Core Features
- **Expert Carrier Knowledge**: Deep integration of manuals including T-363, T-318, T-340, T-372, T-383, and the new T-384 Rev A.
- **Multimodal Diagnostics**: Support for image uploads. Technicians can photograph controller displays, serial plates, or component failures for immediate AI analysis.
- **R-1234yf & NaturaLINE Safety**: Specialized protocols for mildly flammable refrigerants and high-pressure CO2 systems, including mandatory venting wait times and "hot work" requirements.
- **Technical Library**: Instant lookup for:
  - **Alarm Codes**: Detailed causes and corrective actions.
  - **Function Codes (Cd)**: Descriptions of all Micro-Link 2i, 3, and 5 codes.
  - **Torque Specs**: Critical values for compressors (06DR, Samsung Scroll), Rotalocks, and pressure components.
  - **Sensor Data**: Resistance tables for NTC and CPDS sensors.
- **Persistent Sessions**: Chat history is saved locally, allowing technicians to track ongoing repairs across shifts.
- **Modern UI/UX**: Responsive, mobile-first design with full Dark Mode support for nighttime yard operations.

![Full reefer container with Carrier PrimeLINE unit](https://www.worldcargonews.com/wp-content/uploads/2024/06/ESL-scaled.jpg)
---

## 📚 Integrated Carrier Transicold Manuals

The knowledge base includes the following official Carrier Transicold manuals:

- **T-383 Rev C**: Carrier OptimaLINE 69NT40-701-001 to 099
- **T-384 Rev A**: Carrier OptimaLINE 69NT40-701-100 to 199 (R-1234yf)
- **T-363 Rev E**: Carrier ThinLINE 69NT40-541-500 to 599
- **T-318 Rev D**: Carrier ThinLINE 69NT40-541-300 to 499
- **T-285PL Rev M**: Carrier ThinLINE 69NT40-511-300 to 399 (Service Parts List)
- **T-259 Rev F**: Carrier ThinLINE 69NT40-489
- **T-257 Rev 03**: Carrier ThinLINE 69NT40-449, 69NT40-459
- **T-252 Rev 05**: Carrier ThinLINE 69NT20-284, 69NT40-461, 69NT40-464
- **T-246 Rev 10**: Carrier ThinLINE 69NT20-274, 69NT40-441/444/454
- **T-320 Rev B**: Carrier EliteLINE 69NT40-551-001 to 199
- **T-292 Rev C**: Carrier EliteLINE 69NT40-531-001 to 199 (Micro-Link 2i)
- **T-309 Rev A**: Carrier EliteLINE 69NT20-531-300 Streamline Scroll (Micro-Link 2i)
- **T-322 Rev A**: Carrier EliteLINE 69NT20-551-300 to 399 Streamline Scroll (Micro-Link 3)
- **T-327 Rev C**: Carrier EliteLINE 69NT40-551-400 to 425 (Micro-Link 3)
- **T-342 Rev A**: Carrier eAutoFresh Technical Supplement (EliteLINE/PrimeLINE)
- **T-340 Rev G**: Carrier PrimeLINE 69NT40-561-001 to 199
- **T-359 Rev C**: Carrier PrimeLINE 69NT40-561-019 (Evergreen)
- **T-362 Rev J**: Carrier PrimeLINE 69NT40-561-200/500, 69NT40-565 (PrimeLINE ONE)
- **T-365 Rev D**: Carrier PrimeLINE 69NT40-561-300 to 399 (Edge/XtendFRESH)
- **T-372 Rev F**: Carrier PrimeLINE 69NT40-571-100 to 399 (ML5 Controller)
- **62-10629 Rev C**: Carrier DataLINE Software User Manual
- **62-12119 Rev A**: Carrier NaturaLINE 69NT40-601 Annual Inspection (R-744)
- **62-12232 Rev 7.1**: Carrier Lynx Fleet User Manual

---

## 🖼️ Reefer Guru Dashboard

Visual examples of Reefer Guru in action:





---

## 🛠 Technology Stack
- **Frontend**: React 19 with TypeScript.
- **AI Engine**: Google Gemini 2.5 Flash (via `@google/genai`).
- **Styling**: Tailwind CSS for high-density information display.
- **Icons**: Lucide React.
- **Deployment**: ES6 Module-based structure with Import Maps for optimized loading.

---

## 📦 Project Structure

```text
├── components/ # React components (Header, Sidebar, MessageBubble, etc.)
│   ├── ui/ # Reusable UI components (Input, Textarea)
│   └── hooks/ # Custom React hooks (Auto-resize, File handling)
├── data/ # High-density knowledge base (The "Manuals")
│   ├── thinline.ts # T-363, T-318, T-246, etc.
│   ├── primeline.ts # T-340, T-365, T-372, etc.
│   ├── optimaline.ts # T-383, T-384 (R-1234yf)
│   ├── naturaline.ts # R-744 Inspection specs
│   └── software.ts # DataLINE & Lynx Fleet documentation
├── services/ # Gemini API integration and retry logic
├── constants.ts # System instructions and AI persona configuration
└── types.ts # Global TypeScript interfaces
```

## ⚠️ Safety Disclaimer
**Reefer Guru is a technical assistant and NOT a replacement for official training or the physical service manual.**
Technicians must always:
1. Follow **Lockout/Tagout** procedures before servicing electrical components.
2. Adhere to **A2L safety protocols** when working with R-1234yf.
3. Observe **high-pressure warnings** on NaturaLINE (CO2) units.
4. Verify critical torque values and part numbers against the unit's serial plate.
---
## 🛠 Installation
1. Clone the repository.
2. Ensure your environment variable `API_KEY` is configured with a valid Google Gemini API key.
3. Run `npm install` followed by `npm start`.

*Developed by Mark Antonio Pigome*


