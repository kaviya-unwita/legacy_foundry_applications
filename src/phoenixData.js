export const PHOENIX_MODULES = [
  {
    id: 'organization', name: 'Organization Structure', short: 'Organization', description: 'Legal entities, plants, departments and production sections.',
    masters: [
      { id: 'companies', name: 'Companies', description: 'Legal identity and statutory defaults', fields: [
        ['code', 'Company Code', 'text', true], ['name', 'Legal Company Name', 'text', true], ['tradingName', 'Trading Name', 'text'],
        ['address', 'Registered Address', 'textarea', true], ['country', 'Country', 'select', true, ['India', 'United States', 'United Kingdom']],
        ['state', 'State', 'select', true, ['Tamil Nadu', 'Karnataka', 'Maharashtra']], ['taxId', 'GST / Tax ID', 'text'],
        ['email', 'Email', 'email'], ['phone', 'Phone', 'text'], ['currency', 'Default Currency', 'select', true, ['INR', 'USD', 'EUR']],
        ['timezone', 'Time Zone', 'select', true, ['Asia/Kolkata', 'UTC', 'Europe/London']], ['effectiveDate', 'Effective Date', 'date', true], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'COM-001', code: 'PFS', name: 'Phoenix Foundry Solutions Pvt. Ltd.', tradingName: 'Phoenix Foundry', address: 'Plot 18, Industrial Estate, Coimbatore', country: 'India', state: 'Tamil Nadu', taxId: '33AAAAA0000A1Z5', email: 'admin@phoenix-demo.example', phone: '+91 422 400 0100', currency: 'INR', timezone: 'Asia/Kolkata', effectiveDate: '2026-04-01', status: 'Active' },
      ] },
      { id: 'plants', name: 'Plants', description: 'Manufacturing locations under a company', fields: [
        ['code', 'Plant Code', 'text', true], ['name', 'Plant Name', 'text', true], ['company', 'Parent Company', 'select', true, ['PFS — Phoenix Foundry Solutions']],
        ['address', 'Plant Address', 'textarea', true], ['responsibleRole', 'Responsible Role', 'select', true, ['Plant Head', 'Operations Head']],
        ['calendar', 'Default Calendar', 'select', true, ['CAL-01 — Standard Manufacturing']], ['effectiveDate', 'Effective Date', 'date', true], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'PLT-001', code: 'PLT-01', name: 'Main Foundry Plant', company: 'PFS — Phoenix Foundry Solutions', address: 'Unit 1, Industrial Estate, Coimbatore', responsibleRole: 'Plant Head', calendar: 'CAL-01 — Standard Manufacturing', effectiveDate: '2026-04-01', status: 'Active' },
        { id: 'PLT-002', code: 'PLT-02', name: 'Finishing Plant', company: 'PFS — Phoenix Foundry Solutions', address: 'Unit 2, Industrial Estate, Coimbatore', responsibleRole: 'Operations Head', calendar: 'CAL-01 — Standard Manufacturing', effectiveDate: '2026-04-01', status: 'Active' },
      ] },
      { id: 'departments', name: 'Departments', description: 'Functional departments within a plant', fields: [
        ['code', 'Department Code', 'text', true], ['name', 'Department Name', 'text', true], ['plant', 'Parent Plant', 'select', true, ['PLT-01 — Main Foundry Plant', 'PLT-02 — Finishing Plant']],
        ['description', 'Description', 'textarea'], ['responsibleRole', 'Department Head / Role', 'text', true], ['effectiveDate', 'Effective Date', 'date', true], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'DEP-001', code: 'PRD', name: 'Production', plant: 'PLT-01 — Main Foundry Plant', description: 'Foundry manufacturing operations', responsibleRole: 'Production Head', effectiveDate: '2026-04-01', status: 'Active' },
        { id: 'DEP-002', code: 'QLT', name: 'Quality', plant: 'PLT-01 — Main Foundry Plant', description: 'Inspection, testing and quality assurance', responsibleRole: 'Quality Head', effectiveDate: '2026-04-01', status: 'Active' },
        { id: 'DEP-003', code: 'STR', name: 'Stores', plant: 'PLT-01 — Main Foundry Plant', description: 'Material receipt, storage and issue', responsibleRole: 'Stores Head', effectiveDate: '2026-04-01', status: 'Active' },
      ] },
      { id: 'sections', name: 'Sections / Shops', description: 'Operational sections within departments', fields: [
        ['code', 'Section Code', 'text', true], ['name', 'Section / Shop Name', 'text', true], ['department', 'Parent Department', 'select', true, ['PRD — Production', 'QLT — Quality', 'STR — Stores']],
        ['location', 'Location', 'text'], ['responsibleRole', 'Responsible Role', 'text'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'SEC-001', code: 'MELT', name: 'Melting Shop', department: 'PRD — Production', location: 'Bay A', responsibleRole: 'Melting Supervisor', status: 'Active' },
        { id: 'SEC-002', code: 'FETT', name: 'Fettling Shop', department: 'PRD — Production', location: 'Bay D', responsibleRole: 'Fettling Supervisor', status: 'Active' },
      ] },
    ],
  },
  {
    id: 'operations', name: 'Operation Structure', short: 'Operations', description: 'Warehouses, storage locations, work centres, calendars and shifts.',
    masters: [
      { id: 'warehouses', name: 'Warehouses / Stores', description: 'Material and finished-goods storage facilities', fields: [
        ['code', 'Warehouse Code', 'text', true], ['name', 'Warehouse Name', 'text', true], ['plant', 'Parent Plant', 'select', true, ['PLT-01 — Main Foundry Plant', 'PLT-02 — Finishing Plant']],
        ['type', 'Warehouse Type', 'select', true, ['Raw Material', 'Consumables', 'WIP', 'Finished Goods']], ['location', 'Physical Location', 'text'],
        ['department', 'Responsible Department', 'select', true, ['STR — Stores', 'PRD — Production']], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'WH-001', code: 'RM-01', name: 'Raw Material Store', plant: 'PLT-01 — Main Foundry Plant', type: 'Raw Material', location: 'North Block', department: 'STR — Stores', status: 'Active' },
        { id: 'WH-002', code: 'FG-01', name: 'Finished Goods Store', plant: 'PLT-02 — Finishing Plant', type: 'Finished Goods', location: 'Dispatch Bay', department: 'STR — Stores', status: 'Active' },
      ] },
      { id: 'storage-locations', name: 'Storage Locations', description: 'Controlled locations inside a warehouse', fields: [
        ['code', 'Location Code', 'text', true], ['name', 'Location Name', 'text', true], ['warehouse', 'Parent Warehouse', 'select', true, ['RM-01 — Raw Material Store', 'FG-01 — Finished Goods Store']],
        ['purpose', 'Location Purpose', 'select', true, ['Available', 'Inspection', 'Quarantine', 'Rejected']], ['stockType', 'Permitted Stock Type', 'text'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'LOC-001', code: 'RM-A01', name: 'Alloy Storage A01', warehouse: 'RM-01 — Raw Material Store', purpose: 'Available', stockType: 'Ferro alloys', status: 'Active' },
        { id: 'LOC-002', code: 'RM-Q01', name: 'Incoming Quarantine', warehouse: 'RM-01 — Raw Material Store', purpose: 'Quarantine', stockType: 'Incoming material', status: 'Active' },
      ] },
      { id: 'work-centres', name: 'Work Centres', description: 'Production areas where operations are performed', fields: [
        ['code', 'Work Centre Code', 'text', true], ['name', 'Work Centre Name', 'text', true], ['plant', 'Plant', 'select', true, ['PLT-01 — Main Foundry Plant', 'PLT-02 — Finishing Plant']],
        ['department', 'Department', 'select', true, ['PRD — Production', 'QLT — Quality']], ['type', 'Work Centre Type', 'select', true, ['Melting', 'Moulding', 'Heat Treatment', 'Fettling', 'Inspection']],
        ['operation', 'Mapped Operation', 'select', true, ['OP-MELT — Melting', 'OP-MOULD — Moulding', 'OP-HT — Heat Treatment']], ['shift', 'Applicable Shift', 'select', true, ['SHIFT-A', 'SHIFT-B', 'SHIFT-C']], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'WC-001', code: 'WC-MELT-01', name: 'Melting Line 1', plant: 'PLT-01 — Main Foundry Plant', department: 'PRD — Production', type: 'Melting', operation: 'OP-MELT — Melting', shift: 'SHIFT-A', status: 'Active' },
      ] },
      { id: 'calendars', name: 'Business Calendars', description: 'Working days, holidays and shutdown periods', fields: [
        ['code', 'Calendar Code', 'text', true], ['name', 'Calendar Name', 'text', true], ['scope', 'Applicable Company / Plant', 'text', true],
        ['workingDays', 'Working Days', 'text', true], ['weeklyHoliday', 'Weekly Holiday', 'text'], ['shutdownDates', 'Shutdown Dates', 'textarea'], ['effectiveFrom', 'Effective From', 'date', true], ['effectiveTo', 'Effective To', 'date'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'CAL-001', code: 'CAL-01', name: 'Standard Manufacturing', scope: 'All plants', workingDays: 'Monday–Saturday', weeklyHoliday: 'Sunday', shutdownDates: '2026-08-15, 2026-10-02', effectiveFrom: '2026-04-01', effectiveTo: '2027-03-31', status: 'Active' },
      ] },
      { id: 'shifts', name: 'Shifts', description: 'Plant and department working shifts', fields: [
        ['code', 'Shift Code', 'text', true], ['name', 'Shift Name', 'text', true], ['scope', 'Applicable Plant / Department', 'text', true],
        ['startTime', 'Start Time', 'time', true], ['endTime', 'End Time', 'time', true], ['breakMinutes', 'Break (minutes)', 'number'], ['workingDays', 'Applicable Working Days', 'text'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'SHF-001', code: 'SHIFT-A', name: 'Morning Shift', scope: 'PLT-01 / Production', startTime: '06:00', endTime: '14:00', breakMinutes: '30', workingDays: 'Monday–Saturday', status: 'Active' },
        { id: 'SHF-002', code: 'SHIFT-B', name: 'Evening Shift', scope: 'PLT-01 / Production', startTime: '14:00', endTime: '22:00', breakMinutes: '30', workingDays: 'Monday–Saturday', status: 'Active' },
      ] },
    ],
  },
  {
    id: 'partners', name: 'Business Partner Masters', short: 'Business Partners', description: 'A shared partner register with customer and supplier roles.',
    masters: [
      { id: 'customers', name: 'Customers', description: 'Customer commercial, tax and contact details', fields: [
        ['code', 'Customer Code', 'text', true], ['name', 'Customer Name', 'text', true], ['category', 'Customer Category', 'select', true, ['Domestic', 'Export', 'Inter-company']],
        ['currency', 'Default Currency', 'select', true, ['INR', 'USD', 'EUR']], ['taxId', 'GST / Tax ID', 'text'], ['contactPerson', 'Contact Person', 'text'],
        ['email', 'Email', 'email'], ['phone', 'Phone', 'text'], ['billingAddress', 'Billing Address', 'textarea'], ['creditDays', 'Credit Days', 'number'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'CUS-001', code: 'CUS-001', name: 'Aster Process Controls', category: 'Domestic', currency: 'INR', taxId: '33BBBBB1111B1Z6', contactPerson: 'Arun Kumar', email: 'purchase@aster-demo.example', phone: '+91 90000 10001', billingAddress: 'Chennai, Tamil Nadu', creditDays: '30', status: 'Active' },
        { id: 'CUS-002', code: 'CUS-002', name: 'Northstar Flow Systems', category: 'Export', currency: 'USD', taxId: '', contactPerson: 'Maya Chen', email: 'sourcing@northstar-demo.example', phone: '+1 555 010 0200', billingAddress: 'Houston, United States', creditDays: '45', status: 'Active' },
      ] },
      { id: 'suppliers', name: 'Suppliers', description: 'Supplier capabilities and commercial controls', fields: [
        ['code', 'Supplier Code', 'text', true], ['name', 'Supplier Name', 'text', true], ['category', 'Supplier Category', 'select', true, ['Raw Material', 'Consumable', 'Service', 'Subcontractor']],
        ['currency', 'Transaction Currency', 'select', true, ['INR', 'USD', 'EUR']], ['taxId', 'GST / Tax ID', 'text'], ['contactPerson', 'Contact Person', 'text'],
        ['email', 'Email', 'email'], ['phone', 'Phone', 'text'], ['address', 'Address', 'textarea'], ['paymentTerms', 'Payment Terms', 'text'], ['approved', 'Approved Supplier', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'SUP-001', code: 'SUP-001', name: 'Vertex Alloy Traders', category: 'Raw Material', currency: 'INR', taxId: '33CCCCC2222C1Z7', contactPerson: 'Sample Contact 01', email: 'sales@vertex-demo.example', phone: '+91 90000 20001', address: 'Coimbatore, Tamil Nadu', paymentTerms: '30 days', approved: true, status: 'Active' },
      ] },
    ],
  },
  {
    id: 'items', name: 'Item, Material & Grade Masters', short: 'Items & Grades', description: 'Reusable item identities, materials and grade classifications.',
    masters: [
      { id: 'items', name: 'Items', description: 'Purchased, manufactured and consumable items', fields: [
        ['code', 'Item Code', 'text', true], ['name', 'Item Name', 'text', true], ['type', 'Item Type', 'select', true, ['Raw Material', 'Consumable', 'Casting', 'Finished Good', 'Tooling']],
        ['baseUom', 'Base UOM', 'select', true, ['KG', 'NOS', 'LTR', 'MTR']], ['material', 'Material', 'select', false, ['Carbon Steel', 'Stainless Steel', 'Nickel Alloy']], ['grade', 'Grade', 'select', false, ['ASTM A216 WCB', 'ASTM A351 CF8M', 'ASTM A494 CW6MC']],
        ['description', 'Description', 'textarea'], ['traceability', 'Traceability Required', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'ITM-001', code: 'RM-FECR-01', name: 'Ferro Chrome', type: 'Raw Material', baseUom: 'KG', material: 'Carbon Steel', grade: '', description: 'Charge material for alloy adjustment', traceability: true, status: 'Active' },
        { id: 'ITM-002', code: 'FG-VALVE-01', name: 'Valve Body Casting', type: 'Finished Good', baseUom: 'NOS', material: 'Stainless Steel', grade: 'ASTM A351 CF8M', description: 'Machined valve body casting', traceability: true, status: 'Active' },
      ] },
      { id: 'materials', name: 'Materials', description: 'Material families and classifications', fields: [
        ['code', 'Material Code', 'text', true], ['name', 'Material Name', 'text', true], ['family', 'Material Family', 'select', true, ['Ferrous', 'Non-ferrous', 'Consumable']],
        ['defaultUom', 'Default UOM', 'select', true, ['KG', 'NOS', 'LTR']], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'MAT-001', code: 'MAT-CS', name: 'Carbon Steel', family: 'Ferrous', defaultUom: 'KG', description: 'Carbon steel material family', status: 'Active' },
        { id: 'MAT-002', code: 'MAT-SS', name: 'Stainless Steel', family: 'Ferrous', defaultUom: 'KG', description: 'Corrosion-resistant steel family', status: 'Active' },
      ] },
      { id: 'grades', name: 'Grades', description: 'Grade identity; detailed specifications are versioned in Phase 3', fields: [
        ['code', 'Grade Code', 'text', true], ['name', 'Grade / Standard', 'text', true], ['material', 'Material', 'select', true, ['Carbon Steel', 'Stainless Steel', 'Nickel Alloy']],
        ['standard', 'Standard Organization', 'select', true, ['ASTM', 'EN', 'IS', 'Customer Specification']], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'GRD-001', code: 'A216-WCB', name: 'ASTM A216 WCB', material: 'Carbon Steel', standard: 'ASTM', description: 'Carbon steel casting grade', status: 'Active' },
        { id: 'GRD-002', code: 'A351-CF8M', name: 'ASTM A351 CF8M', material: 'Stainless Steel', standard: 'ASTM', description: 'Austenitic stainless steel casting grade', status: 'Active' },
      ] },
    ],
  },
  {
    id: 'equipment', name: 'Machine, Furnace & Equipment Masters', short: 'Equipment', description: 'Physical production and inspection assets mapped to work centres.',
    masters: [
      { id: 'machines', name: 'Machines', description: 'Production machines and capacity data', fields: [
        ['code', 'Machine Code', 'text', true], ['name', 'Machine Name', 'text', true], ['type', 'Machine Type', 'text', true], ['workCentre', 'Work Centre', 'text', true],
        ['manufacturer', 'Manufacturer', 'text'], ['model', 'Model', 'text'], ['capacity', 'Rated Capacity', 'text'], ['commissionedOn', 'Commissioned On', 'date'], ['critical', 'Critical Equipment', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'MAC-001', code: 'MIX-01', name: 'Sand Mixer 01', type: 'Continuous Mixer', workCentre: 'Moulding Shop', manufacturer: 'Demo Engineering', model: 'CM-500', capacity: '500 kg/batch', commissionedOn: '2022-06-15', critical: true, status: 'Active' },
      ] },
      { id: 'furnaces', name: 'Furnaces', description: 'Melting and heat-treatment furnaces', fields: [
        ['code', 'Furnace Code', 'text', true], ['name', 'Furnace Name', 'text', true], ['furnaceType', 'Furnace Type', 'select', true, ['Induction', 'Electric Arc', 'Heat Treatment']],
        ['workCentre', 'Work Centre', 'text', true], ['capacity', 'Capacity', 'text', true], ['energySource', 'Energy Source', 'select', true, ['Electricity', 'Gas', 'Oil']],
        ['serialNo', 'Serial Number', 'text'], ['calibrationDue', 'Calibration Due', 'date'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'FUR-001', code: 'IF-01', name: 'Induction Furnace 01', furnaceType: 'Induction', workCentre: 'WC-MELT-01', capacity: '2,000 kg', energySource: 'Electricity', serialNo: 'DEMO-IF-2000', calibrationDue: '2027-01-31', status: 'Active' },
      ] },
      { id: 'inspection-equipment', name: 'Inspection Equipment', description: 'Measuring and testing equipment', fields: [
        ['code', 'Equipment Code', 'text', true], ['name', 'Equipment Name', 'text', true], ['category', 'Category', 'select', true, ['Measuring', 'Chemical Test', 'Mechanical Test', 'NDT']],
        ['department', 'Department', 'select', true, ['Quality', 'Laboratory', 'Production']], ['manufacturer', 'Manufacturer', 'text'], ['serialNo', 'Serial Number', 'text'],
        ['range', 'Measurement Range', 'text'], ['calibrationRequired', 'Calibration Required', 'boolean'], ['calibrationDue', 'Calibration Due', 'date'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'EQP-001', code: 'SPM-01', name: 'Optical Emission Spectrometer', category: 'Chemical Test', department: 'Laboratory', manufacturer: 'Demo Instruments', serialNo: 'OES-DEMO-01', range: 'Fe/Ni base', calibrationRequired: true, calibrationDue: '2026-12-15', status: 'Active' },
      ] },
    ],
  },
  {
    id: 'processes', name: 'Process, Operation & Defect Masters', short: 'Processes & Defects', description: 'Standard manufacturing steps, defects and approved dispositions.',
    masters: [
      { id: 'processes', name: 'Processes', description: 'High-level manufacturing processes', fields: [
        ['code', 'Process Code', 'text', true], ['name', 'Process Name', 'text', true], ['sequence', 'Default Sequence', 'number'], ['department', 'Owning Department', 'text', true], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'PRO-001', code: 'PROC-MELT', name: 'Melting', sequence: '30', department: 'Production', description: 'Charge preparation, melting and chemistry adjustment', status: 'Active' },
        { id: 'PRO-002', code: 'PROC-FETT', name: 'Fettling', sequence: '70', department: 'Production', description: 'Cutting, grinding and surface cleaning', status: 'Active' },
      ] },
      { id: 'operations', name: 'Operations', description: 'Executable operations mapped to processes and work centres', fields: [
        ['code', 'Operation Code', 'text', true], ['name', 'Operation Name', 'text', true], ['process', 'Parent Process', 'select', true, ['PROC-MELT — Melting', 'PROC-FETT — Fettling']],
        ['workCentreType', 'Default Work Centre Type', 'text'], ['standardMinutes', 'Standard Time (minutes)', 'number'], ['inspectionRequired', 'Inspection Required', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'OPR-001', code: 'OP-MELT', name: 'Induction Melting', process: 'PROC-MELT — Melting', workCentreType: 'Melting', standardMinutes: '120', inspectionRequired: true, status: 'Active' },
      ] },
      { id: 'defects', name: 'Defects', description: 'Standard production and quality defect catalogue', fields: [
        ['code', 'Defect Code', 'text', true], ['name', 'Defect Name', 'text', true], ['category', 'Defect Category', 'select', true, ['Surface', 'Dimensional', 'Metallurgical', 'Internal']],
        ['detectedAt', 'Typical Detection Stage', 'text'], ['severity', 'Default Severity', 'select', true, ['Minor', 'Major', 'Critical']], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'DEF-001', code: 'DEF-BLOW', name: 'Blow Hole', category: 'Internal', detectedAt: 'Radiography / machining', severity: 'Major', description: 'Gas cavity detected inside casting', status: 'Active' },
        { id: 'DEF-002', code: 'DEF-MISRUN', name: 'Misrun', category: 'Surface', detectedAt: 'Knockout / visual inspection', severity: 'Major', description: 'Incomplete filling of mould cavity', status: 'Active' },
      ] },
      { id: 'dispositions', name: 'Dispositions', description: 'Approved outcomes for non-conforming material', fields: [
        ['code', 'Disposition Code', 'text', true], ['name', 'Disposition Name', 'text', true], ['requiresApproval', 'Approval Required', 'boolean'], ['allowedForCritical', 'Allowed for Critical Defect', 'boolean'], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'DSP-001', code: 'REWORK', name: 'Rework', requiresApproval: true, allowedForCritical: false, description: 'Return to an approved operation for correction', status: 'Active' },
        { id: 'DSP-002', code: 'SCRAP', name: 'Scrap', requiresApproval: true, allowedForCritical: true, description: 'Reject and account as process scrap', status: 'Active' },
      ] },
    ],
  },
  {
    id: 'configuration', name: 'Enterprise Masters & Configuration', short: 'Configuration', description: 'Shared reference values and controlled document numbering.',
    masters: [
      { id: 'geographies', name: 'Geographies', description: 'Country, state and city reference values', fields: [
        ['code', 'Geography Code', 'text', true], ['name', 'Name', 'text', true], ['type', 'Type', 'select', true, ['Country', 'State', 'City']], ['parent', 'Parent Geography', 'text'], ['isoCode', 'ISO Code', 'text'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'GEO-001', code: 'IN', name: 'India', type: 'Country', parent: '', isoCode: 'IN', status: 'Active' },
        { id: 'GEO-002', code: 'IN-TN', name: 'Tamil Nadu', type: 'State', parent: 'India', isoCode: 'TN', status: 'Active' },
      ] },
      { id: 'currencies', name: 'Currencies', description: 'Transaction and reporting currencies', fields: [
        ['code', 'Currency Code', 'text', true], ['name', 'Currency Name', 'text', true], ['symbol', 'Symbol', 'text'], ['decimalPlaces', 'Decimal Places', 'number', true], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'CUR-001', code: 'INR', name: 'Indian Rupee', symbol: '₹', decimalPlaces: '2', status: 'Active' },
        { id: 'CUR-002', code: 'USD', name: 'US Dollar', symbol: '$', decimalPlaces: '2', status: 'Active' },
      ] },
      { id: 'uoms', name: 'Units of Measure', description: 'Standard measurement units', fields: [
        ['code', 'UOM Code', 'text', true], ['name', 'UOM Name', 'text', true], ['dimension', 'Dimension', 'select', true, ['Quantity', 'Weight', 'Length', 'Volume', 'Time']], ['symbol', 'Symbol', 'text'], ['decimalPlaces', 'Decimal Places', 'number'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'UOM-001', code: 'KG', name: 'Kilogram', dimension: 'Weight', symbol: 'kg', decimalPlaces: '3', status: 'Active' },
        { id: 'UOM-002', code: 'NOS', name: 'Numbers', dimension: 'Quantity', symbol: 'Nos', decimalPlaces: '0', status: 'Active' },
      ] },
      { id: 'reference-types', name: 'Reference Types', description: 'Controlled types used across Phoenix', fields: [
        ['code', 'Type Code', 'text', true], ['name', 'Type Name', 'text', true], ['group', 'Reference Group', 'select', true, ['Warehouse Type', 'Location Type', 'Document Type', 'Organization Type']], ['description', 'Description', 'textarea'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'REF-001', code: 'WH-RM', name: 'Raw Material Warehouse', group: 'Warehouse Type', description: 'Stores incoming and approved raw material', status: 'Active' },
        { id: 'REF-002', code: 'LOC-QUAR', name: 'Quarantine Location', group: 'Location Type', description: 'Material pending inspection or disposition', status: 'Active' },
      ] },
      { id: 'number-series', name: 'Number Series', description: 'Company/plant-scoped numbering for business documents', fields: [
        ['code', 'Series Code', 'text', true], ['name', 'Series Name', 'text', true], ['documentType', 'Document Type', 'select', true, ['Purchase Order', 'Goods Receipt', 'Work Order', 'Heat', 'Inspection', 'Certificate', 'Dispatch']],
        ['company', 'Company', 'select', true, ['PFS']], ['plant', 'Plant', 'select', false, ['All Plants', 'PLT-01', 'PLT-02']], ['prefix', 'Prefix', 'text'], ['suffix', 'Suffix', 'text'],
        ['numericLength', 'Numeric Length', 'number', true], ['nextNumber', 'Next Number', 'number', true], ['increment', 'Increment', 'number', true], ['resetRule', 'Year Reset Rule', 'select', true, ['Never', 'Calendar Year', 'Financial Year']], ['automatic', 'Automatic Numbering', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'SER-001', code: 'PO-PFS', name: 'Purchase Order Series', documentType: 'Purchase Order', company: 'PFS', plant: 'All Plants', prefix: 'PO/26-27/', suffix: '', numericLength: '5', nextNumber: '1001', increment: '1', resetRule: 'Financial Year', automatic: true, status: 'Active' },
        { id: 'SER-002', code: 'HEAT-01', name: 'Plant 1 Heat Series', documentType: 'Heat', company: 'PFS', plant: 'PLT-01', prefix: 'H26/', suffix: '', numericLength: '5', nextNumber: '501', increment: '1', resetRule: 'Calendar Year', automatic: true, status: 'Active' },
      ] },
    ],
  },
  {
    id: 'security', name: 'Security & Administration', short: 'Security', description: 'Users, roles, data access and master-data approval governance.',
    masters: [
      { id: 'users', name: 'Users', description: 'Application identities and assigned access', fields: [
        ['code', 'User ID', 'text', true], ['username', 'Username', 'text', true], ['displayName', 'Display Name', 'text', true], ['email', 'Email', 'email', true],
        ['department', 'Department', 'select', true, ['Production', 'Quality', 'Stores', 'Administration']], ['defaultPlant', 'Default Plant', 'select', true, ['PLT-01', 'PLT-02']], ['role', 'Assigned Role', 'select', true, ['Phoenix Administrator', 'Master Data Manager', 'Quality User', 'Production User']],
        ['effectiveDate', 'Effective Date', 'date', true], ['status', 'Account Status', 'select', true, ['Active', 'Locked', 'Inactive']],
      ], records: [
        { id: 'USR-001', code: 'USR-001', username: 'phoenix.admin', displayName: 'Phoenix Administrator', email: 'phoenix.admin@example.com', department: 'Administration', defaultPlant: 'PLT-01', role: 'Phoenix Administrator', effectiveDate: '2026-04-01', status: 'Active' },
        { id: 'USR-002', code: 'USR-002', username: 'quality.user', displayName: 'Quality User', email: 'quality.user@example.com', department: 'Quality', defaultPlant: 'PLT-01', role: 'Quality User', effectiveDate: '2026-04-01', status: 'Active' },
      ] },
      { id: 'roles', name: 'Roles & Permissions', description: 'Functional permissions and company/plant scope', fields: [
        ['code', 'Role Code', 'text', true], ['name', 'Role Name', 'text', true], ['description', 'Role Description', 'textarea'], ['dataScope', 'Company / Plant Scope', 'text', true],
        ['canView', 'View', 'boolean'], ['canCreate', 'Create', 'boolean'], ['canEdit', 'Edit', 'boolean'], ['canApprove', 'Approve', 'boolean'], ['canCancel', 'Cancel', 'boolean'], ['canExport', 'Export / Print', 'boolean'], ['status', 'Status', 'status', true],
      ], records: [
        { id: 'ROL-001', code: 'PHX-ADMIN', name: 'Phoenix Administrator', description: 'Full configuration and security administration', dataScope: 'All companies and plants', canView: true, canCreate: true, canEdit: true, canApprove: true, canCancel: true, canExport: true, status: 'Active' },
        { id: 'ROL-002', code: 'MST-MGR', name: 'Master Data Manager', description: 'Creates and maintains approved master records', dataScope: 'PFS / All plants', canView: true, canCreate: true, canEdit: true, canApprove: false, canCancel: true, canExport: true, status: 'Active' },
      ] },
      { id: 'master-requests', name: 'Master Data Requests', description: 'Governed create, change and deactivation requests', fields: [
        ['code', 'Request Number', 'text', true], ['masterType', 'Master Data Type', 'select', true, ['Customer', 'Supplier', 'Item', 'Grade', 'Equipment', 'Reference Value']], ['requestType', 'Request Type', 'select', true, ['Create', 'Amend', 'Deactivate']],
        ['requestedValue', 'Requested Value', 'text', true], ['justification', 'Business Justification', 'textarea', true], ['requestedBy', 'Requested By', 'text', true], ['requestDate', 'Request Date', 'date', true],
        ['reviewedBy', 'Reviewed By', 'text'], ['approvalStatus', 'Approval Status', 'select', true, ['Draft', 'Submitted', 'Under Review', 'Approved', 'Rejected']], ['approvedBy', 'Approved / Rejected By', 'text'], ['decisionDate', 'Decision Date', 'date'], ['decisionReason', 'Decision / Rejection Reason', 'textarea'],
      ], records: [
        { id: 'MDR-001', code: 'MDR-2026-0012', masterType: 'Supplier', requestType: 'Create', requestedValue: 'Nova Refractory Services', justification: 'New approved lining service provider for Furnace 01', requestedBy: 'Production User', requestDate: '2026-09-15', reviewedBy: 'Master Data Manager', approvalStatus: 'Under Review', approvedBy: '', decisionDate: '', decisionReason: '' },
        { id: 'MDR-002', code: 'MDR-2026-0011', masterType: 'Grade', requestType: 'Create', requestedValue: 'ASTM A217 WC9', justification: 'Required for new export enquiry', requestedBy: 'Quality User', requestDate: '2026-09-12', reviewedBy: 'Quality Head', approvalStatus: 'Approved', approvedBy: 'Plant Head', decisionDate: '2026-09-13', decisionReason: 'Specification verified against customer requirement' },
      ] },
    ],
  },
]

export function buildPhoenixSeed() {
  return Object.fromEntries(PHOENIX_MODULES.flatMap((module) => module.masters.map((master) => [master.id, master.records.map((record) => ({ ...record }))])))
}

export function findPhoenixMaster(id) {
  for (const module of PHOENIX_MODULES) {
    const master = module.masters.find((item) => item.id === id)
    if (master) return { module, master }
  }
  return null
}
