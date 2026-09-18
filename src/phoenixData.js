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

const field = (key, label, type = 'text', required = false, options) => [key, label, type, required, options]
const master = (id, name, description, fields, records) => ({ id, name, description, fields, records })
const moduleById = (id) => PHOENIX_MODULES.find((module) => module.id === id)
const replaceMasters = (moduleId, removeIds, additions) => {
  const module = moduleById(moduleId)
  module.masters = [...module.masters.filter((item) => !removeIds.includes(item.id)), ...additions]
}

Object.assign(moduleById('operations'), { name: 'Operational Locations & Resources', short: 'Locations & Resources' })
Object.assign(moduleById('partners'), { name: 'Business Partners', short: 'Business Partners' })
Object.assign(moduleById('items'), { name: 'Item, Material & Grade References', short: 'Items & Grades' })
Object.assign(moduleById('equipment'), { name: 'Assets & Equipment', short: 'Assets & Equipment' })
Object.assign(moduleById('processes'), { name: 'Manufacturing & Quality References', short: 'Process & Quality' })
Object.assign(moduleById('configuration'), { name: 'Enterprise Configuration', short: 'Configuration' })
Object.assign(moduleById('security'), { name: 'Identity, Access & Data Governance', short: 'Access & Governance' })

// Normalized and missing master registers identified during the Phase 1 application review.
replaceMasters('organization', [], [
  master('employees', 'Employees / Responsible Persons', 'People referenced as owners, approvers and responsible persons; this can later be supplied by an HR integration.', [
    field('code', 'Employee Code', 'text', true), field('name', 'Employee Name', 'text', true), field('department', 'Department', 'select', true, ['Production', 'Quality', 'Stores', 'Administration']),
    field('designation', 'Designation', 'text', true), field('email', 'Email', 'email'), field('phone', 'Phone'), field('reportsTo', 'Reports To'), field('effectiveDate', 'Effective Date', 'date', true), field('status', 'Status', 'status', true),
  ], [
    { id: 'EMP-001', code: 'EMP-001', name: 'Sample Plant Head', department: 'Administration', designation: 'Plant Head', email: 'plant.head@example.com', phone: '+91 90000 30001', reportsTo: 'Managing Director', effectiveDate: '2026-04-01', status: 'Active' },
    { id: 'EMP-002', code: 'EMP-002', name: 'Sample Quality Head', department: 'Quality', designation: 'Quality Head', email: 'quality.head@example.com', phone: '+91 90000 30002', reportsTo: 'Sample Plant Head', effectiveDate: '2026-04-01', status: 'Active' },
  ]),
  master('cost-centres', 'Cost Centres', 'Financial responsibility references used for departmental and operational cost reporting.', [
    field('code', 'Cost Centre Code', 'text', true), field('name', 'Cost Centre Name', 'text', true), field('company', 'Company', 'select', true, ['PFS']), field('plant', 'Plant', 'select', true, ['PLT-01', 'PLT-02']),
    field('department', 'Department', 'text', true), field('effectiveFrom', 'Effective From', 'date', true), field('status', 'Status', 'status', true),
  ], [{ id: 'CC-001', code: 'CC-MELT', name: 'Melting Cost Centre', company: 'PFS', plant: 'PLT-01', department: 'Production', effectiveFrom: '2026-04-01', status: 'Active' }]),
])

replaceMasters('operations', [], [
  master('bins-racks', 'Bins & Racks', 'Optional granular locations within a storage location.', [
    field('code', 'Bin / Rack Code', 'text', true), field('name', 'Bin / Rack Name', 'text', true), field('storageLocation', 'Storage Location', 'select', true, ['RM-A01 — Alloy Storage A01', 'RM-Q01 — Incoming Quarantine']),
    field('type', 'Location Type', 'select', true, ['Bin', 'Rack', 'Bay', 'Floor']), field('capacity', 'Capacity'), field('capacityUom', 'Capacity UOM', 'select', false, ['KG', 'NOS', 'LTR']), field('status', 'Status', 'status', true),
  ], [{ id: 'BIN-001', code: 'RACK-A01', name: 'Alloy Rack A01', storageLocation: 'RM-A01 — Alloy Storage A01', type: 'Rack', capacity: '5000', capacityUom: 'KG', status: 'Active' }]),
  master('resource-groups', 'Resource Groups & Capacity', 'Groups work centres and production resources for planning and capacity checks.', [
    field('code', 'Resource Group Code', 'text', true), field('name', 'Resource Group Name', 'text', true), field('plant', 'Plant', 'select', true, ['PLT-01', 'PLT-02']), field('department', 'Department', 'text', true),
    field('workCentres', 'Mapped Work Centres', 'textarea', true), field('dailyCapacity', 'Daily Capacity', 'number'), field('capacityUom', 'Capacity UOM'), field('calendar', 'Calendar', 'select', true, ['CAL-01 — Standard Manufacturing']), field('status', 'Status', 'status', true),
  ], [{ id: 'RES-001', code: 'RG-MELT', name: 'Melting Resources', plant: 'PLT-01', department: 'Production', workCentres: 'WC-MELT-01', dailyCapacity: '12000', capacityUom: 'KG', calendar: 'CAL-01 — Standard Manufacturing', status: 'Active' }]),
])

replaceMasters('partners', ['customers', 'suppliers'], [
  master('business-partners', 'Business Partners', 'One shared identity for customers, suppliers and subcontractors, preventing duplicate names, addresses and tax records.', [
    field('code', 'Partner Code', 'text', true), field('name', 'Legal / Trading Name', 'text', true), field('roles', 'Partner Roles', 'text', true), field('category', 'Category', 'select', true, ['Domestic', 'Export', 'Inter-company']),
    field('taxId', 'GST / Tax ID'), field('currency', 'Default Currency', 'select', true, ['INR', 'USD', 'EUR']), field('paymentTerms', 'Payment Terms', 'select', false, ['PT-30 — Net 30 Days', 'PT-45 — Net 45 Days', 'ADV — Advance']),
    field('approvedSupplier', 'Approved Supplier', 'boolean'), field('creditDays', 'Credit Days', 'number'), field('status', 'Status', 'status', true),
  ], [
    { id: 'BP-001', code: 'BP-001', name: 'Aster Process Controls', roles: 'Customer', category: 'Domestic', taxId: '33BBBBB1111B1Z6', currency: 'INR', paymentTerms: 'PT-30 — Net 30 Days', approvedSupplier: false, creditDays: '30', status: 'Active' },
    { id: 'BP-002', code: 'BP-002', name: 'Vertex Alloy Traders', roles: 'Supplier, Subcontractor', category: 'Domestic', taxId: '33CCCCC2222C1Z7', currency: 'INR', paymentTerms: 'PT-30 — Net 30 Days', approvedSupplier: true, creditDays: '30', status: 'Active' },
  ]),
  master('partner-sites', 'Partner Sites & Contacts', 'Multiple billing, delivery, plant, contact and communication records belonging to a business partner.', [
    field('code', 'Site Code', 'text', true), field('partner', 'Business Partner', 'select', true, ['BP-001 — Aster Process Controls', 'BP-002 — Vertex Alloy Traders']), field('siteType', 'Site Type', 'select', true, ['Registered', 'Billing', 'Delivery', 'Plant', 'Subcontract']),
    field('address', 'Address', 'textarea', true), field('country', 'Country', 'select', true, ['India', 'United States']), field('state', 'State'), field('contactPerson', 'Contact Person'), field('email', 'Email', 'email'), field('phone', 'Phone'), field('isDefault', 'Default Site', 'boolean'), field('status', 'Status', 'status', true),
  ], [
    { id: 'BPS-001', code: 'AST-BILL', partner: 'BP-001 — Aster Process Controls', siteType: 'Billing', address: 'Sample Industrial Estate, Chennai', country: 'India', state: 'Tamil Nadu', contactPerson: 'Sample Buyer 01', email: 'buyer01@example.com', phone: '+91 90000 40001', isDefault: true, status: 'Active' },
    { id: 'BPS-002', code: 'VTX-PLANT', partner: 'BP-002 — Vertex Alloy Traders', siteType: 'Plant', address: 'Sample Industrial Area, Coimbatore', country: 'India', state: 'Tamil Nadu', contactPerson: 'Sample Supplier Contact', email: 'supplier01@example.com', phone: '+91 90000 40002', isDefault: true, status: 'Active' },
  ]),
])

replaceMasters('items', [], [
  master('item-categories', 'Item Groups & Categories', 'Controlled classification used for planning, procurement, inventory and reporting.', [
    field('code', 'Category Code', 'text', true), field('name', 'Category Name', 'text', true), field('parentCategory', 'Parent Category'), field('itemType', 'Applicable Item Type', 'select', true, ['Raw Material', 'Consumable', 'Casting', 'Finished Good', 'Tooling']), field('status', 'Status', 'status', true),
  ], [{ id: 'CAT-001', code: 'RM-ALLOY', name: 'Ferro Alloys', parentCategory: 'Raw Materials', itemType: 'Raw Material', status: 'Active' }]),
  master('uom-conversions', 'UOM Conversions', 'Item or material-specific conversion between purchasing, stocking and production units.', [
    field('code', 'Conversion Code', 'text', true), field('itemOrMaterial', 'Item / Material', 'text', true), field('fromUom', 'From UOM', 'select', true, ['KG', 'MT', 'NOS', 'LTR']), field('toUom', 'To UOM', 'select', true, ['KG', 'MT', 'NOS', 'LTR']), field('factor', 'Conversion Factor', 'number', true), field('effectiveFrom', 'Effective From', 'date', true), field('status', 'Status', 'status', true),
  ], [{ id: 'CNV-001', code: 'MT-KG', itemOrMaterial: 'All weight-based raw materials', fromUom: 'MT', toUom: 'KG', factor: '1000', effectiveFrom: '2026-04-01', status: 'Active' }]),
  master('tracking-policies', 'Item Tracking Policies', 'Defines whether an item requires heat, batch, serial, shelf-life or inspection traceability.', [
    field('code', 'Policy Code', 'text', true), field('name', 'Policy Name', 'text', true), field('heatTracking', 'Heat Tracking', 'boolean'), field('batchTracking', 'Batch Tracking', 'boolean'), field('serialTracking', 'Serial Tracking', 'boolean'), field('shelfLifeDays', 'Shelf Life Days', 'number'), field('inspectionRequired', 'Incoming Inspection Required', 'boolean'), field('status', 'Status', 'status', true),
  ], [{ id: 'TRK-001', code: 'HEAT-BATCH', name: 'Heat and Batch Controlled', heatTracking: true, batchTracking: true, serialTracking: false, shelfLifeDays: '', inspectionRequired: true, status: 'Active' }]),
])

replaceMasters('equipment', ['machines', 'furnaces', 'inspection-equipment'], [
  master('assets-equipment', 'Assets & Equipment', 'Shared identity for machines, melting furnaces, heat-treatment furnaces, inspection equipment and gauges.', [
    field('code', 'Equipment Code', 'text', true), field('name', 'Equipment Name', 'text', true), field('equipmentType', 'Equipment Type', 'select', true, ['Machine', 'Melting Furnace', 'Heat Treatment Furnace', 'Inspection Equipment', 'Gauge']),
    field('category', 'Category', 'text', true), field('plant', 'Plant', 'select', true, ['PLT-01', 'PLT-02']), field('workCentre', 'Work Centre'), field('manufacturer', 'Manufacturer'), field('model', 'Model'), field('serialNo', 'Serial Number'),
    field('commissionedOn', 'Commissioned On', 'date'), field('criticality', 'Criticality', 'select', true, ['Low', 'Medium', 'High', 'Critical']), field('maintenanceRequired', 'Maintenance Required', 'boolean'), field('calibrationRequired', 'Calibration Required', 'boolean'), field('status', 'Status', 'status', true),
  ], [
    { id: 'AST-001', code: 'IF-01', name: 'Induction Furnace 01', equipmentType: 'Melting Furnace', category: 'Induction', plant: 'PLT-01', workCentre: 'WC-MELT-01', manufacturer: 'Demo Engineering', model: 'IF-2000', serialNo: 'DEMO-IF-2000', commissionedOn: '2022-06-15', criticality: 'Critical', maintenanceRequired: true, calibrationRequired: true, status: 'Active' },
    { id: 'AST-002', code: 'OES-01', name: 'Optical Emission Spectrometer', equipmentType: 'Inspection Equipment', category: 'Chemical Test', plant: 'PLT-01', workCentre: 'Laboratory', manufacturer: 'Demo Instruments', model: 'OES-X', serialNo: 'OES-DEMO-01', commissionedOn: '2023-02-10', criticality: 'High', maintenanceRequired: true, calibrationRequired: true, status: 'Active' },
  ]),
  master('equipment-capabilities', 'Equipment Capabilities', 'Type-specific capacity, range, energy and process capability linked to an equipment record.', [
    field('code', 'Capability Code', 'text', true), field('equipment', 'Equipment', 'select', true, ['IF-01 — Induction Furnace 01', 'OES-01 — Optical Emission Spectrometer']), field('capabilityType', 'Capability Type', 'select', true, ['Production Capacity', 'Measurement Range', 'Energy Source', 'Process Capability']),
    field('value', 'Capability Value', 'text', true), field('uom', 'UOM'), field('effectiveFrom', 'Effective From', 'date', true), field('status', 'Status', 'status', true),
  ], [{ id: 'CAP-001', code: 'IF01-CAP', equipment: 'IF-01 — Induction Furnace 01', capabilityType: 'Production Capacity', value: '2000', uom: 'KG/heat', effectiveFrom: '2026-04-01', status: 'Active' }]),
  master('calibration-profiles', 'Calibration Profiles', 'Calibration applicability and interval only; calibration schedules and results belong to the Calibration process.', [
    field('code', 'Profile Code', 'text', true), field('equipment', 'Equipment', 'select', true, ['IF-01 — Induction Furnace 01', 'OES-01 — Optical Emission Spectrometer']), field('frequencyDays', 'Frequency (days)', 'number', true), field('range', 'Calibration Range'),
    field('acceptanceCriteria', 'Acceptance Criteria', 'textarea'), field('internalExternal', 'Calibration Source', 'select', true, ['Internal', 'External', 'Both']), field('nextDueDate', 'Next Due Date', 'date'), field('status', 'Status', 'status', true),
  ], [{ id: 'CALP-001', code: 'OES-CAL', equipment: 'OES-01 — Optical Emission Spectrometer', frequencyDays: '180', range: 'Fe/Ni base', acceptanceCriteria: 'As per approved laboratory procedure', internalExternal: 'External', nextDueDate: '2026-12-15', status: 'Active' }]),
])

replaceMasters('processes', [], [
  master('reason-codes', 'Reason & Cause Codes', 'Controlled hold, release, rejection, repair, rework and scrap reasons used by Production and Quality.', [
    field('code', 'Reason Code', 'text', true), field('name', 'Reason Name', 'text', true), field('type', 'Reason Type', 'select', true, ['Defect Cause', 'Hold', 'Release', 'Repair', 'Rework', 'Scrap']), field('department', 'Owning Department', 'text', true), field('approvalRequired', 'Approval Required', 'boolean'), field('status', 'Status', 'status', true),
  ], [{ id: 'RSN-001', code: 'HOLD-QA', name: 'Awaiting Quality Review', type: 'Hold', department: 'Quality', approvalRequired: true, status: 'Active' }]),
  master('test-methods', 'Inspection & Test Methods', 'Reusable visual, dimensional, laboratory and NDT method references.', [
    field('code', 'Method Code', 'text', true), field('name', 'Method Name', 'text', true), field('category', 'Category', 'select', true, ['Visual', 'Dimensional', 'Chemical', 'Mechanical', 'NDT', 'Pressure']), field('standard', 'Applicable Standard'), field('equipmentCategory', 'Equipment Category'), field('qualificationRequired', 'Qualified Personnel Required', 'boolean'), field('status', 'Status', 'status', true),
  ], [{ id: 'TST-001', code: 'RT-FILM', name: 'Radiographic Testing — Film', category: 'NDT', standard: 'Approved customer / code requirement', equipmentCategory: 'Radiography', qualificationRequired: true, status: 'Active' }]),
])

replaceMasters('configuration', [], [
  master('fiscal-periods', 'Fiscal Years & Periods', 'Financial and reporting periods used by numbering, costing and statutory reporting.', [
    field('code', 'Fiscal Year Code', 'text', true), field('name', 'Fiscal Year Name', 'text', true), field('startDate', 'Start Date', 'date', true), field('endDate', 'End Date', 'date', true), field('periodStatus', 'Period Status', 'select', true, ['Open', 'Closed', 'Future']), field('status', 'Status', 'status', true),
  ], [{ id: 'FY-001', code: 'FY26-27', name: 'Financial Year 2026–27', startDate: '2026-04-01', endDate: '2027-03-31', periodStatus: 'Open', status: 'Active' }]),
  master('tax-codes', 'Tax & Statutory Codes', 'Reusable GST/tax classification and HSN/SAC references.', [
    field('code', 'Tax Code', 'text', true), field('name', 'Tax Name', 'text', true), field('taxType', 'Tax Type', 'select', true, ['GST', 'IGST', 'CGST', 'SGST', 'TDS', 'Other']), field('rate', 'Rate %', 'number'), field('hsnSac', 'HSN / SAC'), field('effectiveFrom', 'Effective From', 'date', true), field('status', 'Status', 'status', true),
  ], [{ id: 'TAX-001', code: 'GST18', name: 'GST 18%', taxType: 'GST', rate: '18', hsnSac: 'Business-specific', effectiveFrom: '2026-04-01', status: 'Active' }]),
  master('payment-terms', 'Payment Terms', 'Controlled commercial payment conditions used by partners, quotations, orders and invoices.', [
    field('code', 'Payment Term Code', 'text', true), field('name', 'Payment Term Name', 'text', true), field('dueDays', 'Due Days', 'number', true), field('advancePercent', 'Advance %', 'number'), field('description', 'Description', 'textarea'), field('status', 'Status', 'status', true),
  ], [{ id: 'PAY-001', code: 'PT-30', name: 'Net 30 Days', dueDays: '30', advancePercent: '0', description: 'Payment due 30 days from invoice date', status: 'Active' }]),
  master('delivery-terms', 'Delivery Terms & Transport Modes', 'Commercial delivery responsibility and standard transportation methods.', [
    field('code', 'Delivery Term Code', 'text', true), field('name', 'Delivery Term Name', 'text', true), field('type', 'Type', 'select', true, ['Delivery Term', 'Incoterm', 'Transport Mode']), field('description', 'Description', 'textarea'), field('status', 'Status', 'status', true),
  ], [{ id: 'DEL-001', code: 'ROAD', name: 'By Road', type: 'Transport Mode', description: 'Domestic road transportation', status: 'Active' }]),
  master('document-types', 'Document Types', 'Controlled business document identities referenced by workflows and number series.', [
    field('code', 'Document Type Code', 'text', true), field('name', 'Document Type Name', 'text', true), field('businessArea', 'Business Area', 'select', true, ['Sales', 'Procurement', 'Inventory', 'Production', 'Quality', 'Dispatch']), field('approvalRequired', 'Approval Required', 'boolean'), field('numberSeries', 'Default Number Series'), field('status', 'Status', 'status', true),
  ], [{ id: 'DOC-001', code: 'WORK-ORDER', name: 'Work Order', businessArea: 'Production', approvalRequired: true, numberSeries: 'Work Order Series', status: 'Active' }]),
])

replaceMasters('security', [], [
  master('user-role-assignments', 'User–Role Assignments', 'Many-to-many role assignment with validity and approval, instead of storing one role directly on a user.', [
    field('code', 'Assignment Code', 'text', true), field('user', 'User', 'select', true, ['USR-001 — Phoenix Administrator', 'USR-002 — Quality User']), field('role', 'Role', 'select', true, ['Phoenix Administrator', 'Master Data Manager', 'Quality User', 'Production User']), field('validFrom', 'Valid From', 'date', true), field('validTo', 'Valid To', 'date'), field('approvedBy', 'Approved By', 'text', true), field('status', 'Status', 'status', true),
  ], [{ id: 'URA-001', code: 'URA-001', user: 'USR-002 — Quality User', role: 'Quality User', validFrom: '2026-04-01', validTo: '', approvedBy: 'Plant Head', status: 'Active' }]),
  master('data-scopes', 'Data Access Scopes', 'Limits a user or role to approved companies, plants, departments and locations.', [
    field('code', 'Scope Code', 'text', true), field('name', 'Scope Name', 'text', true), field('company', 'Company', 'select', true, ['PFS']), field('plants', 'Plants', 'text', true), field('departments', 'Departments'), field('locations', 'Locations'), field('status', 'Status', 'status', true),
  ], [{ id: 'SCP-001', code: 'PFS-PLT1-QA', name: 'Plant 1 Quality Scope', company: 'PFS', plants: 'PLT-01', departments: 'Quality', locations: 'All quality locations', status: 'Active' }]),
  master('approval-matrix', 'Approval Matrix & Delegation', 'Defines who reviews and approves master-data and access requests by type and threshold.', [
    field('code', 'Rule Code', 'text', true), field('requestType', 'Request Type', 'select', true, ['Master Data', 'User Access', 'Role Assignment', 'Deactivation']), field('businessArea', 'Business Area', 'text', true), field('reviewerRole', 'Reviewer Role', 'text', true), field('approverRole', 'Approver Role', 'text', true), field('delegateRole', 'Delegate Role'), field('effectiveFrom', 'Effective From', 'date', true), field('status', 'Status', 'status', true),
  ], [{ id: 'APR-001', code: 'APR-MASTER', requestType: 'Master Data', businessArea: 'All core masters', reviewerRole: 'Master Data Manager', approverRole: 'Business Owner', delegateRole: 'Plant Head', effectiveFrom: '2026-04-01', status: 'Active' }]),
])

export const PHOENIX_MODULE_GUIDANCE = {
  organization: {
    purpose: 'Defines the legal, physical and responsibility hierarchy used to scope every Phoenix transaction.',
    sunEvidence: ['COMPANY', 'DEPARTMENT MASTER', 'EMPLOYEE MASTER'],
    yesEvidence: ['Company Master', 'Company Unit Master', 'Department Master', 'Department Employee Master', 'Responsible Person', 'Employee Master'],
    futureUse: ['All areas: company/plant data separation', 'Sales and Procurement document headers', 'Production and Quality responsibility', 'Costing and departmental reporting', 'Identity and approval assignment'],
    boundary: 'Company Unit maps to Plant. Employee may come from HR later; Phoenix should retain only the reference needed for responsibility and approval.',
  },
  operations: {
    purpose: 'Defines where material is stored, where work is performed and when capacity is available.',
    sunEvidence: ['UNIT MASTER', 'ITEM MASTER — Storage Area', 'PATTERN LOCATION', 'MACHINE MASTER — Location'],
    yesEvidence: ['Pattern/Core locations with Plant, Location and Rack', 'Furnace and Department mapping'],
    futureUse: ['Inventory receipts, issues and transfers', 'Production scheduling and capacity checks', 'WIP movement', 'Pattern and tooling storage', 'Quality quarantine and rejected stock'],
    boundary: 'Warehouse and work centre are different: one stores stock; the other performs operations. Bin/rack tracking remains configurable.',
  },
  partners: {
    purpose: 'Maintains one organization identity with customer, supplier and subcontractor roles and reusable sites/contacts.',
    sunEvidence: ['CUSTOMER', 'SUPPLIER MASTER', 'SUBCONTRACT / VENDOR'],
    yesEvidence: ['Customer Master', 'End Customer Master', 'Delivery Customer Master', 'Vendor/Subcontractor', 'Delivery address of Subcontract (Customer)'],
    futureUse: ['Enquiry, quotation and sales order', 'Purchase requisition and purchase order', 'Subcontract orders and material movement', 'Dispatch, invoicing and tax documents', 'Supplier approval and performance'],
    boundary: 'Customer and supplier screens may remain as filtered views, but their common name, tax, address and contact data must come from one Business Partner record.',
  },
  items: {
    purpose: 'Defines shared item, material and grade identities plus classification, UOM and traceability policies.',
    sunEvidence: ['ITEM MASTER', 'PRODUCTMASTER', 'GRADE', 'GRADE STANDARDS CHEMICAL PROPERTIES'],
    yesEvidence: ['Product Master', 'Part Master', 'Grade Master', 'Grade Master — Chemical Properties'],
    futureUse: ['Engineering specifications and BOM', 'Procurement and inventory', 'Production material consumption', 'Heat/batch traceability', 'Quality inspection and certification'],
    boundary: 'Core Setup holds identity and classification only. Chemical/mechanical limits, casting weights, drawings and revision-controlled specifications belong to Product Engineering.',
  },
  equipment: {
    purpose: 'Provides one asset identity and type-specific capabilities for production, maintenance, calibration and quality.',
    sunEvidence: ['MACHINE MASTER', 'EQUIPMENT MASTER'],
    yesEvidence: ['Crucible / Heat Treatment Furnace', 'NDE Master and test details'],
    futureUse: ['Production capacity and scheduling', 'Melting and heat-treatment execution', 'Preventive maintenance', 'Calibration planning and results', 'Inspection/test equipment traceability'],
    boundary: 'Maintenance orders and calibration results are transactions in their respective processes; this area stores only the asset and governing profile.',
  },
  processes: {
    purpose: 'Controls standard process/operation references separately from quality defect, cause and disposition references.',
    sunEvidence: ['CASTING PROCESS MASTER', 'INTERNAL REJECTION TABLE', 'CUSTOMER REJECTION TABLE'],
    yesEvidence: ['Contractor’s Process Master', 'Sub Process Master', 'Rejection Reasons', 'RT Repair Reason Master', 'Hold Reason / Hold Release'],
    futureUse: ['Engineering routing', 'Work-centre scheduling', 'Production stage reporting', 'Inspection plans and NCR', 'Rework, repair, salvage and scrap decisions'],
    boundary: 'Production owns Process/Operation; Quality owns Defect/Cause/Disposition/Test Method. Access and approvals must reflect that separation.',
  },
  configuration: {
    purpose: 'Provides reusable enterprise codes, statutory references, commercial terms and controlled numbering.',
    sunEvidence: ['UNIT MASTER', 'TAX', 'GENERAL / OTHER MASTERS', 'RUNNING SERIAL NO CONTROL'],
    yesEvidence: ['Currency Master', 'Tax Master', 'General Masters', 'Priority / Lead Time / RT Type references'],
    futureUse: ['All documents and integrations', 'Tax and invoice calculation', 'Commercial terms', 'Fiscal reporting and numbering reset', 'Standardized dropdown values'],
    boundary: 'Separate business-friendly screens can share a generic reference-value table internally. Company/Plant are numbering scopes, not document types.',
  },
  security: {
    purpose: 'Controls identity, role permissions, data scope and governed master-data/access approvals.',
    sunEvidence: ['USER RIGHT', 'MENUMASTER', 'EMPLOYEE MASTER'],
    yesEvidence: ['Responsible Person', 'Employee Master', 'Department Employee Master'],
    futureUse: ['Every screen and transaction', 'Role-based approvals', 'Company/plant/department data separation', 'Audit trail and compliance', 'Master-data change governance'],
    boundary: 'Passwords must be managed by authentication/SSO and never stored as ordinary master fields. Master Data Request is a workflow record, not a reference master.',
  },
}

const MASTER_LEGACY_EVIDENCE = {
  companies: { sun: 'COMPANY', yes: 'Company Master', level: 'confirmed' },
  plants: { sun: 'COMPANY / UNIT MASTER', yes: 'Company Unit Master', level: 'related' },
  departments: { sun: 'DEPARTMENT MASTER', yes: 'Department Master', level: 'confirmed' },
  sections: { sun: 'Department/location references', yes: 'Department and division references', level: 'related' },
  employees: { sun: 'EMPLOYEE MASTER', yes: 'Employee Master / Responsible Person', level: 'confirmed' },
  'cost-centres': {},
  warehouses: { sun: 'Stores Master and storage-area references', yes: 'Inventory locations', level: 'related' },
  'storage-locations': { sun: 'ITEM MASTER — Storage Area / PATTERN LOCATION', yes: 'Pattern/Core Plant, Location and Rack', level: 'related' },
  'work-centres': { sun: 'MACHINE MASTER — Location / CASTING PROCESS MASTER', yes: 'Department, Furnace and Process references', level: 'related' },
  calendars: {}, shifts: {},
  'bins-racks': { sun: 'PATTERN LOCATION', yes: 'Pattern/Core Rack and Location', level: 'related' },
  'resource-groups': {},
  'business-partners': { sun: 'CUSTOMER / SUPPLIER MASTER / SUBCONTRACT-VENDOR', yes: 'Customer Master / Vendor-Subcontractor', level: 'related' },
  'partner-sites': { sun: 'Customer/Supplier addresses and contacts', yes: 'Customer sites and Delivery Customer', level: 'related' },
  items: { sun: 'ITEM MASTER / PRODUCTMASTER', yes: 'Product Master / Part Master', level: 'related' },
  materials: { sun: 'ITEM MASTER — Material Type / GRADE', yes: 'Product and Grade material fields', level: 'related' },
  grades: { sun: 'GRADE', yes: 'Grade Master', level: 'confirmed' },
  'item-categories': { sun: 'GROUP MASTER / ITEM MASTER', yes: 'General Masters and item grouping', level: 'related' },
  'uom-conversions': { sun: 'UNIT MASTER', yes: 'Unit fields in Product/Pattern/Core', level: 'related' },
  'tracking-policies': { sun: 'ITEM MASTER — Test Required / PRODUCTMASTER traceability', yes: 'Product Master — Furnace Track / Traceability', level: 'related' },
  'assets-equipment': { sun: 'MACHINE MASTER / EQUIPMENT MASTER', yes: 'Crucible / Heat Treatment Furnace / NDE Master', level: 'related' },
  'equipment-capabilities': { sun: 'MACHINE MASTER — Capacity / EQUIPMENT MASTER — Range', yes: 'Furnace Capacity and test-equipment fields', level: 'related' },
  'calibration-profiles': { sun: 'EQUIPMENT MASTER — Frequency, Range, Acceptance', yes: 'Equipment/NDE references', level: 'related' },
  processes: { sun: 'CASTING PROCESS MASTER', yes: 'Casting Process / Contractor’s Process Master', level: 'confirmed' },
  operations: { sun: 'CASTING PROCESS MASTER', yes: 'Sub Process Master', level: 'related' },
  defects: { sun: 'INTERNAL/CUSTOMER REJECTION TABLE', yes: 'Rejection Reasons', level: 'confirmed' },
  dispositions: { sun: 'Rejection and repair transactions', yes: 'Hold Release / repair-reason references', level: 'related' },
  'reason-codes': { sun: 'Rejection tables', yes: 'Rejection Reasons / Hold Reason / RT Repair Reason', level: 'related' },
  'test-methods': { sun: 'Quality/Lab test screens', yes: 'NDE Master and Test Details', level: 'related' },
  geographies: { sun: 'COMPANY/CUSTOMER address fields', yes: 'Company/Customer country and state', level: 'related' },
  currencies: { sun: 'CUSTOMER — Currency', yes: 'Currency Master', level: 'related' },
  uoms: { sun: 'UNIT MASTER', yes: 'Unit fields across Product/Pattern/Core', level: 'related' },
  'reference-types': { sun: 'GENERAL / OTHER MASTERS', yes: 'General Masters', level: 'related' },
  'number-series': { sun: 'RUNNING SERIAL NO CONTROL', yes: 'Document prefix and numbering fields', level: 'related' },
  'fiscal-periods': {},
  'tax-codes': { sun: 'TAX and customer/supplier tax fields', yes: 'Tax Master', level: 'confirmed' },
  'payment-terms': { sun: 'CUSTOMER/SUPPLIER — Payment Terms', yes: 'Customer Master — Payment Terms', level: 'confirmed' },
  'delivery-terms': { sun: 'CUSTOMER/SUPPLIER delivery and dispatch fields', yes: 'Customer delivery/transport fields', level: 'related' },
  'document-types': { sun: 'Menu/document references', yes: 'General Masters and document screens', level: 'related' },
  users: { sun: 'USER RIGHT / EMPLOYEE MASTER', yes: 'Responsible Person / Employee Master', level: 'related' },
  roles: { sun: 'USER RIGHT', yes: 'Responsible Person designations', level: 'related' },
  'master-requests': {},
  'user-role-assignments': { sun: 'USER RIGHT', yes: 'Responsible Person and employee responsibility', level: 'related' },
  'data-scopes': { sun: 'USER RIGHT and company/unit scope', yes: 'Company/department responsibility', level: 'related' },
  'approval-matrix': {},
}

const VERIFIED_FIELD_ALIASES = {
  companies: {
    code: ['Company Code', 'Company Code'], name: ['Company Name', 'Company Name'], tradingName: ['Short Name', 'Short Name'],
    address: ['Factory Addr1–Address4', 'Factory Addr1–Address4'], country: [null, null], state: [null, 'State'],
    taxId: ['GST No / statutory identifiers', 'GST No / PAN / TAN'], email: ['Email1 / Email2', 'Email / Email2'], phone: ['Phone', 'Phone'],
    currency: [null, null], timezone: [null, null], effectiveDate: [null, 'QD Effect Date'], status: [null, null],
  },
  plants: {
    code: ['UNITCODE in SSA transaction/source tables', 'Unit Code'],
    name: ['Name in Unit Master', 'Unit Name'],
    company: ['COMPCODE in SSA transaction/source tables', 'Company Code'],
    address: [null, null], responsibleRole: [null, null], calendar: [null, null], effectiveDate: [null, null], status: [null, null],
  },
}

function futureUseForField(fieldName, moduleId) {
  const value = fieldName.toLowerCase()
  if (/time\s*zone/.test(value)) return 'Determines the local date and time used for transaction timestamps, approval history, scheduled activities, shift reporting and audit logs.'
  if (/^status$|account status|period status/.test(value)) return 'Controls whether this record can be selected in newly created documents. Inactive or closed records remain visible in historical transactions and audit reports.'
  if (/effective|valid from|valid to|start date|end date/.test(value)) return 'Defines when this configuration is valid for document creation, validations, approvals and reporting while preserving its historical usage.'
  if (/currency/.test(value)) return 'Defaults the currency in quotations, sales orders, purchase orders, invoices and financial reports; authorized users can change it where permitted.'
  if (/company|plant|department|section|location|warehouse|work centre|scope/.test(value)) return 'Transaction ownership, access scope, approvals and organization-wise reporting across all Phoenix areas.'
  if (/address|country|state|city|pin|contact|email|phone/.test(value)) return 'Partner communication and printed Purchase Order, Invoice, Delivery Challan, Certificate and statutory documents.'
  if (/tax|gst|pan|hsn|sac|statutory/.test(value)) return 'Tax determination, supplier/customer compliance, invoicing and statutory reporting.'
  if (/payment|credit|delivery term|transport/.test(value)) return 'Quotation, Sales Order, Purchase Order, Invoice, payment follow-up and dispatch planning.'
  if (/item|material|grade|uom|unit|tracking|batch|heat|serial|shelf/.test(value)) return 'Engineering, procurement, inventory, production consumption, traceability, inspection and certification.'
  if (/machine|equipment|furnace|capacity|range|calibration|maintenance|energy/.test(value)) return 'Capacity planning, shop-floor execution, maintenance, calibration and equipment-linked quality results.'
  if (/process|operation|defect|disposition|reason|method|inspection|test|severity/.test(value)) return 'Routing, production reporting, inspection plans, NCR, rework/repair, rejection and quality analytics.'
  if (/user|role|permission|access|approv|review|request|delegate/.test(value)) return 'Authentication, authorization, approval workflow, segregation of duties and audit trail.'
  if (/number|prefix|suffix|increment|reset|document type/.test(value)) return 'Controlled document generation for orders, receipts, work orders, heats, inspections, certificates and dispatch.'
  if (/date|active|inactive|valid/.test(value)) return 'Controls the applicable record lifecycle period while retaining previous usage for operational history and audit reporting.'
  if (/code/.test(value)) return 'Unique lookup, integration key, document reference and reporting dimension.'
  if (/name|description|remarks/.test(value)) return 'User-readable dropdowns, document descriptions, searches and reports.'
  return PHOENIX_MODULE_GUIDANCE[moduleId]?.futureUse.slice(0, 2).join(' ') ?? 'Used by downstream Phoenix transactions and reporting after stakeholder validation.'
}

export function getPhoenixFieldMapping(moduleId, masterDefinition) {
  const evidence = MASTER_LEGACY_EVIDENCE[masterDefinition.id] ?? {}
  return masterDefinition.fields.map(([key, label]) => {
    const aliases = VERIFIED_FIELD_ALIASES[masterDefinition.id]?.[key] ?? [null, null]
    const sunConfirmed = Boolean(aliases[0])
    const yesConfirmed = Boolean(aliases[1])
    const level = sunConfirmed && yesConfirmed ? 'confirmed' : (sunConfirmed || yesConfirmed ? 'partial' : 'proposed')
    return {
      key, label, level,
      sun: aliases[0] ?? (evidence.sun ? `Not confirmed for this field in ${evidence.sun} — Phoenix proposed` : 'Not confirmed in supplied SUN’s evidence — Phoenix proposed'),
      yes: aliases[1] ?? (evidence.yes ? `Not confirmed for this field in ${evidence.yes} — Phoenix proposed` : 'Not confirmed in supplied YES’s evidence — Phoenix proposed'),
      futureUse: futureUseForField(label, moduleId),
    }
  })
}

// Full BRD roadmap used by the Phoenix sidebar. Only Phase 1 is implemented;
// later phases are deliberately navigation labels until their requirements are validated.
export const PHOENIX_PHASES = [
  { id: 'phase-1', number: 1, name: 'Enterprise Setup & Master Data', status: 'Available', modules: PHOENIX_MODULES.map((module) => ({ id: module.id, name: module.name, available: true })) },
  { id: 'phase-2', number: 2, name: 'Sales, CRM & Order Management', status: 'Planned', modules: [
    'Customer Requirement / Enquiry', 'Evaluation & Quotation', 'Customer Purchase Order & Sales Order', 'Order Acceptance', 'Work Order Initiation',
  ].map((name) => ({ name })) },
  { id: 'phase-3', number: 3, name: 'Product Engineering & Technical Data', status: 'Planned', modules: [
    'Product Definition & Specification', 'Drawing, Revision & Issue Control', 'Material Grade Specification & Casting Weight', 'BOM & Process Routing', 'Inspection & Test Requirements',
  ].map((name) => ({ name })) },
  { id: 'phase-4', number: 4, name: 'Costing, Sourcing & Procurement', status: 'Planned', modules: [
    'Cost Estimation & Profitability', 'Material Requirement & Purchase Requisition', 'Supplier Quotation, Purchase Order & Tracking', 'Vendor Rating & Quality Performance',
  ].map((name) => ({ name })) },
  { id: 'phase-5', number: 5, name: 'Inventory, Stores & Material Control', status: 'Planned', modules: [
    'Goods Receipt & Incoming Inspection', 'Inventory & Material Movement', 'Scrap Management',
  ].map((name) => ({ name })) },
  { id: 'phase-6', number: 6, name: 'Pattern, Tooling & Core Management', status: 'Planned', modules: [
    'Pattern & Core Box Register — Issue & Return', 'Pattern Inspection, Repair & History', 'Sample & Trial Casting', 'Pattern Order & Charging',
  ].map((name) => ({ name })) },
  { id: 'phase-7', number: 7, name: 'Foundry Production & Shop Floor', status: 'Planned', modules: [
    'Production & Pouring Plan', 'Capacity & Material Availability Check', 'Work Order Scheduling & Re-planning',
    'Sand Preparation, Testing & Reclamation', 'Core Production', 'Mould Preparation, Inspection & Closing',
    'Charge Mix, Melting & Furnace Recording', 'Chemical Sampling, Analysis & Heat Approval',
    'Ladle Preparation, Mould & Heat Allocation, Pouring', 'Cooling, Solidification & Casting Identification',
    'Knockout, Decoring & Runner / Riser Removal', 'Heat Treatment Planning & Furnace Loading',
    'Heat Treatment Execution, Furnace Chart & PWHT', 'Cutting, Grinding & Cleaning', 'Repair Welding & Salvage',
    'Acid Pickling, Passivation & Finishing', 'Stage Movement & WIP Tracking', 'Production Completion & Output Recording',
    'Production Rejection & Defect Recording',
  ].map((name) => ({ name })) },
  { id: 'phase-8', number: 8, name: 'Quality, Laboratory & Certification', status: 'Planned', modules: [
    'Stage, Dimensional & Final Inspection', 'Chemical, Mechanical & Metallurgical Testing',
    'NDT & Pressure Testing — UT, DPT, MPI, RT, Hydro', 'Non-Conformance, CAPA & Customer Complaints', 'Test & Inspection Certificate',
  ].map((name) => ({ name })) },
  { id: 'phase-9', number: 9, name: 'Subcontracting & External Processing', status: 'Planned', modules: [
    'Subcontract Requirement & Order', 'Material Issue, Receipt & Reconciliation', 'Subcontract Tracking, Costing & Billing',
  ].map((name) => ({ name })) },
  { id: 'phase-10', number: 10, name: 'Logistics, Dispatch & Billing', status: 'Planned', modules: [
    'Finished Goods Receipt & Dispatch Allocation', 'Dispatch Planning & Clearance', 'Packing & Marking', 'Delivery Challan & Transportation', 'Sales Invoice & Tax Document',
  ].map((name) => ({ name })) },
  { id: 'phase-11', number: 11, name: 'Production Costing & Workforce', status: 'Planned', modules: [
    'Actual Production Cost Capture', 'Cost, Variance & Margin Analysis', 'Labour Settlement & Pattern Cost Recovery',
  ].map((name) => ({ name })) },
  { id: 'phase-12', number: 12, name: 'Traceability, Analytics & Integration', status: 'Planned', modules: [
    'Forward & Backward Traceability', 'Document Search & Retrieval', 'Role-Based Dashboards & KPI Monitoring',
    'Management & Statutory Reports', 'Ad-hoc Reporting, Data Export & Integration',
  ].map((name) => ({ name })) },
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
