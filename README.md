reefer-guru.vercel.app

# ❄️ Reefer Guru
### The Ultimate AI Assistant for Refrigerated Container Technicians

Reefer Guru is a high-performance, expert-level AI diagnostic tool specifically engineered for container technicians servicing **Carrier Transicold** refrigeration units. Built on the Google Gemini 2.5 Flash model, it provides instant access to technical specifications, alarm troubleshooting, and safety protocols extracted from official service manuals.

![Reefer container with Carrier unit](https://refindustry.com/upload/iblock/8f8/8f808ac25154025f4de08f53afec89a5.jpg)

![Full view of reefer container with Carrier PrimeLINE](https://perishablenews.com/wp-content/uploads/2025/05/a-r1-9-1.jpg)

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

---

## 🖼️ Reefer Containers by Major Manufacturers

Here are examples of refrigerated (reefer) containers and their refrigeration units from leading manufacturers:

### Carrier Transicold Models

**PrimeLINE** (Popular for high-efficiency performance)

![Carrier PrimeLINE unit on container](https://refindustry.com/upload/iblock/8f8/8f808ac25154025f4de08f53afec89a5.jpg)

**ThinLINE** (Compact and reliable classic)

![Carrier ThinLINE refrigeration unit](https://www.ravagroupcontainers.com/wp-content/uploads/2020/03/161027_85638-carrier-thin-line-1920x1440.jpg)

**OptimaLINE** (Advanced next-gen unit with R-1234yf support)

![Carrier OptimaLINE unit](https://images.carriercms.com/image/upload/w_600,h_400,c_fill,g_center,q_auto,f_auto/v1716229050/carrier/container-refrigeration/products/container-units/carrier-hero-optimaline-unit-ship-2000x550.jpg)

**NaturaLINE** (Natural refrigerant CO2 system)

![Carrier NaturaLINE unit](https://mma.prnewswire.com/media/733876/Carrier_Transicold_NaturaLINE_unit.jpg?p=facebook)

### Other Major Manufacturers

**Thermo King Magnum Plus**

![Thermo King Magnum Plus unit](https://www.thermoking-globalsolutions.com/wp-content/uploads/2024/02/TK-MagnumPlus_Container_Front_Studio-right-15dg_dark.jpg)

**Daikin Reefer Unit**

![Daikin reefer container](https://seacoglobal.com/wp-content/uploads/2023/07/20-Reefer-Image-Whole-Container-scaled.jpg)

**Star Cool (by Maersk Container Industry)**

![Star Cool reefer unit](https://img.foodlogistics.com/files/base/acbm/scn/image/2024/09/Maersk_Star_Cool_1.1.66d7051003b77.png?auto=format%2Ccompress&fit=max&q=70&w=1200)

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
