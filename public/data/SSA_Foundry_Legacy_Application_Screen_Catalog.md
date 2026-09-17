# SSA Foundry Legacy Application — Detailed Screen Catalogue

## Document control

| Item | Value |
|---|---|
| Document purpose | Current-application screen inventory and field-discovery reference |
| Source | 208 screenshots supplied from the SSA Foundry legacy application |
| Source folder | `C:\Users\Kaviya\Documents\Projects\Unwita\Phonenix\phoenix\screenshots_SSA_Foundry_app\screenshots` |
| Prepared date | 2026-09-17 |
| Status | Working discovery document — requires business walkthrough validation |
| Intended use | BRD gap analysis, phase-wise LLD preparation, field mapping, report inventory and migration discovery |

## Important interpretation rules

- This catalogue records information visible in screenshots; it does not prove database column names or implementation behavior.
- A visible label is not automatically a mandatory field or an approved Phoenix requirement.
- OCR-derived labels may contain spelling differences. Important fields must be confirmed during a live application walkthrough.
- Hidden validations, calculations, permissions, defaults, approvals, delete behavior and integrations cannot be confirmed from screenshots alone.
- Sample business values, people and transaction data have intentionally not been catalogued as requirements.

## Application-wide observations

- The legacy application is organized into separate master, entry, edit/view, enquiry, report and print screens.
- `F9` is repeatedly used as a lookup/help mechanism for customers, products, equipment, orders, GRNs and other references.
- Core traceability identifiers include Customer PO, OA/Work Order, Product, Grade, Pattern, Heat, GRN, Pouring, Test, Dispatch and Invoice references.
- The screenshots include operational maintenance and calibration capabilities in addition to the main foundry lifecycle.
- Menu rights appear to be assigned per option; action-level Create/View/Edit/Approve/Cancel rights require validation.

## Module summary

| Module | Screenshot count | Subgroups | Description |
|---|---:|---|---|
| Calibration | 5 | — | Equipment/instrument master, calibration entry, due dates, approvals, history and reports. |
| Customer Master | 32 | all module screens | Customer, company, general reference, commercial, product, grade, tax, user-rights and related masters. |
| Enquiry Master | 3 | — | Foundry-status enquiry and enquiry/MIS reporting. |
| Heat Status Master | 2 | — | Consolidated heat, order, casting-process, chemistry and NDT status enquiry. |
| Lab Master | 17 | — | Chemical and mechanical testing, grade standards, heat treatment, test certificates and laboratory reports. |
| Main Screen | 1 | — | Top-level application navigation and logged-in user context. |
| Maintanence | 9 | machine master | Machine/equipment definition, preventive checks, breakdowns, spares, generator and equipment history. |
| Marketing Master | 6 | — | Order-booking reports, monthly pouring plan, PO hold and marketing MIS. |
| Onscreen Master | 13 | — | Read-only operational enquiry screens for customers, products, orders, heats, casting, dispatch and NDT. |
| Order Master | 10 | — | Order Acceptance/work order entry, amendment, printing, commitment, conversion, invoice and export utilities. |
| Product Master | 8 | — | Product, pattern, drawing, planning, location, sample and pattern-inspection functions. |
| Production Master | 11 | — | Monthly/daily planning, mould production, melting charge, pouring, contracts and production reports. |
| Quality Master | 19 | — | NDT, stage inspection, internal/customer rejection, NCR and rejection analysis. |
| Sales Mater | 14 | — | Dispatch planning, advice, stopping, invoicing, supplementary/other invoices and sales reports. |
| Stores Master | 33 | issues, master, material rejection, purchase, receipt, stock report | Stores reference masters, purchase, receipt, issue/return, material rejection and stock reporting. |
| Subcontract Master | 13 | — | External-process offering, receipt, reconciliation, billing, payment, pending and reporting. |
| System Master | 12 | — | System control tables, serial/format controls and direct operational edit/view utilities. |

## Detailed screen inventory

## Calibration

Equipment/instrument master, calibration entry, due dates, approvals, history and reports.

### Visible submodules/options

- EQUIPMENT MASTER
- EQUIPMENT ENTRY
- CALIBRATION ENTRY
- CALIBRATION REPORT

### LEG-001 — calibration entry

- **Module:** Calibration
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for calibration entry.
- **Screenshot:** `calibration\calibration entry.PNG`
- **Resolution:** 884 × 514

#### Visible labels and candidate field names

- Calibration
- Instrument Code
- Name OF Instrument
- Instruction
- Frequency
- Reference
- Accuracy
- Entry
- requency
- Allowable
- Calibrated On
- Result
- Calibration Due On
- Master Equipment Used
- Master Equipment Ualid Upto
- Location
- Reuiewd & Approved By
- Calibrated By
- Error

#### Visible actions

- Delete
- History Report
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-002 — calibration reports

- **Module:** Calibration
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy calibration reports output.
- **Screenshot:** `calibration\calibration reports.PNG`
- **Resolution:** 521 × 534

#### Visible labels and candidate field names

- Calibration Reports
- Next Calibration List
- From Date
- To Date
- 36,' ß9,'2ß26
- Next Calibration During Period
- Calibration Failed Equipments

#### Visible actions

- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-003 — equipement entry - calibration master entry

- **Module:** Calibration
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for equipement entry - calibration master entry.
- **Screenshot:** `calibration\equipement entry - calibration master entry.PNG`
- **Resolution:** 902 × 519

#### Visible labels and candidate field names

- Instrument Code
- Manufacture No
- Frequency
- Allowable Error
- Department
- Remarks
- Calibration Master Entry
- Instrument Name
- Accuracy
- FRE . WORDS
- In-House External
- Condition
- History
- approved
- vendor

#### Visible actions

- DELETE
- Clear
- Report
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-004 — equipement master - calibration master list

- **Module:** Calibration
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for equipement master - calibration master list.
- **Screenshot:** `calibration\equipement master - calibration master list.PNG`
- **Resolution:** 866 × 486

#### Visible labels and candidate field names

- Code
- Name
- UNVERSAL TESTING MACHINE
- Calibration Master
- Frequency
- Saue
- List
- Range
- 400 KN
- Acceptance Type
- Int
- History

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-005 — sub modules

- **Module:** Calibration
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the calibration functions visible in the legacy application.
- **Screenshot:** `calibration\sub modules.PNG`
- **Resolution:** 920 × 663

#### Visible submodules/menu options

- EQUIPMENT MASTER
- EQUIPMENT ENTRY
- CALIBRATION ENTRY
- CALIBRATION REPORT

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Customer Master

Customer, company, general reference, commercial, product, grade, tax, user-rights and related masters.

### Visible submodules/options

- COMPANY
- CUSTOMER
- PRODUCTMASTER
- GRADE
- SUBCONTRACT / VENDOR
- TAX
- SPECIAL / QUALITY REQUIREMENTS
- GENERAL / OTHER MASTERS
- pc RATE MASTER
- KG RATE MASTER
- CASTING PROCESS MASTER
- BILL OF MATERIAL
- EMPLOYEE MASTER
- USER RIGHT
- MENUMASTER

### LEG-006 — sub modules

- **Module:** Customer Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the customer master functions visible in the legacy application.
- **Screenshot:** `customer master\sub modules.PNG`
- **Resolution:** 965 × 685

#### Visible submodules/menu options

- COMPANY
- CUSTOMER
- PRODUCTMASTER
- GRADE
- SUBCONTRACT / VENDOR
- TAX
- SPECIAL / QUALITY REQUIREMENTS
- GENERAL / OTHER MASTERS
- pc RATE MASTER
- KG RATE MASTER
- CASTING PROCESS MASTER
- BILL OF MATERIAL
- EMPLOYEE MASTER
- USER RIGHT
- MENUMASTER

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-007 — bill of material master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for bill of material master.
- **Screenshot:** `customer master\all module screens\bill of material master.PNG`
- **Resolution:** 821 × 494

#### Visible labels and candidate field names

- Grade
- 4Å (60K)
- 4C (60K)
- 41) (75K)
- Å148 Gr_105-85
- Å148 Gr_80-50
- Å148 Gr_90-60
- Å240 TYPE 304
- Å27 Gr_70-36
- "87 Gr_CÅ15
- API GR 60K PSL2
- ASME CF3
- ASME CF8C
- Bill Of Material Master
- Bill of Material For Grade
- Material Name
- PER TONS
- Quantity
- T otal

#### Visible actions

- Copy to Grade

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-008 — castig process master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for castig process master.
- **Screenshot:** `customer master\all module screens\castig process master.PNG`
- **Resolution:** 794 × 457

#### Visible labels and candidate field names

- Casting
- Name
- Process
- Master
- SINO
- Older
- Mand
- atory
- Allow <
- Pour Qty
- BEND REMOVAL-I
- GAS CUTTING
- RC CUTTING
- SHOT BLASTING -l
- HEAT TREATMENT
- HEAT TREATMENT- TEMPERING
- FETTLING
- SHOT BLASTING -II
- RADIOGRAPHY
- MAGNETIC PARTICLE TEST
- DYE PENETRANT TEST
- ULTRASONIC TEST
- TESTING PURPOSE
- Code

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-009 — Company

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for Company.
- **Screenshot:** `customer master\all module screens\Company.PNG`
- **Resolution:** 806 × 541

#### Visible labels and candidate field names

- MIS Cons... >
- Company Master
- Company Code
- Company Name
- Shon Name
- Factory Addll •
- Address2
- Address3
- Address4
- Pincode
- Stax No Date
- Cstax No Date
- Ecc No
- GST N
- Contactpersonl
- Contactperson2
- CEC No & Dt
- IEC No
- Bank
- For Help/List <
- CASTINGS INDIA PRIVATE LIMITED
- PLOT NO. go-c. COSMAFAN FOUNDRY
- CLUSTER PARK-I
- ARASUR
- COIMBATORE - 641407
- AAKCS9336[XM001
- 33AAKCS9336CIZC
- KARTHIK_R
- V_RAJENDRAN
- Phone
- Emaill
- mkt@ssacastings.com
- Emai12
- Admn Adil
- IO-C.VAIGAI STREET
- Admn Ad12
- SRI KAMADHENU NAGAR
- Admn Ad13
- AVARAMPALAYAM
- Admn Ad14
- COIMBATORE
- Admn Pincode
- Admn Phone
- Admn Fax
- Range
- Foundry Type
- Division

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-010 — Customer screen1

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for Customer screen1.
- **Screenshot:** `customer master\all module screens\Customer screen1.PNG`
- **Resolution:** 794 × 560

#### Visible labels and candidate field names

- Addrs/Contact
- CUSTOMER MASTER
- Code
- Name
- Shon
- Desp Name
- Address
- [Customer]
- Order Terms/Report Options
- ADDRESS,'CONTRCT
- OA Instruction
- Export Details
- City
- TIN No
- CST No
- ECC No
- Licence
- PAN No
- GST No
- Repon
- Contact Person
- Attention Person
- Phone
- E-mail
- Web
- Vendor Code
- Ward No
- Is cation
- Division
- Range
- TCS

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-011 — customer screen2

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customer screen2.
- **Screenshot:** `customer master\all module screens\customer screen2.PNG`
- **Resolution:** 785 × 546

#### Visible labels and candidate field names

- Addrs/Contact
- Customers Master
- STForm
- Payment Terms
- Credit Days
- Destination
- Transporter
- Doc Through
- Delivery
- [Customer]
- Order Terms/Report Options
- OA Instruction
- Export Details
- Invoice Related Details
- Radiography Unit
- Co Rate / unit
- Currency
- Customer Type
- MP' Flag
- Acid Pickling
- Order Acceptence Details
- Packing
- Despatch Mode
- Insurance
- Inspection
- Freight
- Testing
- Bank Address
- DP Flag
- Visual Insp

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-012 — customer screen4

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customer screen4.
- **Screenshot:** `customer master\all module screens\customer screen4.PNG`
- **Resolution:** 796 × 561

#### Visible labels and candidate field names

- Addrs/Contact
- Pre-Carriage ay
- Carrier Receipt At
- Port Loading
- Port Deischarge
- Destination
- T ra nsport
- Contract No
- Rate's Term
- Good s Desc
- Buyer
- Payment
- [Customer]
- Order Terms/Report Options
- OA Instruction
- Export Details

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-013 — customerscreen3

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customerscreen3.
- **Screenshot:** `customer master\all module screens\customerscreen3.PNG`
- **Resolution:** 794 × 556

#### Visible labels and candidate field names

- Addrs/Contact
- Customers Master
- O.A Instruction
- [Customer]
- Order Terms/Report Options
- OA Instruction
- Export Details

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-014 — employee mater

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for employee mater.
- **Screenshot:** `customer master\all module screens\employee mater.PNG`
- **Resolution:** 817 × 729

#### Visible labels and candidate field names

- Code
- EBM
- B_MURUGAN
- [Other Masters]
- Name
- Working
- Status
- WORKIN
- RESIGNI
- Password
- Responsible Person
- / Save

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-015 — general master department

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for general master department.
- **Screenshot:** `customer master\all module screens\general master department.PNG`
- **Resolution:** 962 × 539

#### Visible labels and candidate field names

- Code
- [Other Masters]
- Department
- MELTING
- MOULDING
- MAINTENANCE
- PATTERN SHOP
- FETTLING
- LAB
- OFFICE
- OTHERS
- CIVIL
- POWER
- PACKING
- POURING
- CLOSING
- Machine Shop
- urnace
- Rejection
- Currency
- Part Master
- Contractor's Process
- Product Group

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-016 — general master part # master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for general master part # master.
- **Screenshot:** `customer master\all module screens\general master part # master.PNG`
- **Resolution:** 966 × 538

#### Visible labels and candidate field names

- [Other Masters]
- Grade Wise Part Number IBR
- Product
- BLOOOII
- BL0002
- BL00021
- BL0004
- BL00041
- CT 0052
- FL00031
- FLOOI 41
- FLOOI 51
- KB00021
- KB00031
- KB00041
- KB0007
- Name
- BODY
- IBR Description
- 2k" 1500 BODY
- Body 2k" 1500 Class
- Grade
- wcc
- WCB
- ASME WCB
- WCS
- WEB-KSB
- Drg Master
- Part Number
- IBR Drawing
- 1-20-001-001 go
- 2-v-G01 4-1 501B
- 2000000522 Rev
- 10000322344 Re
- LIGI
- LIGI 8271080000
- Material Code Fl
- NB VALVE BODY
- Valve Body (Casting) 2k" (
- NB VV VALVE BODY
- 3±00 BODY
- 2k" 3500 BODY
- Body 2k" 3500 Class
- NG BRACKET
- BEARING BRACKET
- ori
- BODY # 300 x
- BODY DNIOO/150 300 X
- BODY 150<1
- Furnace
- Department
- Rejection
- Currency
- Part # Master
- Contractor's Process
- Product Group
- 3" GTV BW RB BODY
- 300 CHK FL BODY
- 8" CHK co.'ER
- 3" 2500 GTV BW RB BOD
- 800 GLV BODY
- 800 CHK COVER
- Group No Reguyrt

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-017 — general master product group

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for general master product group.
- **Screenshot:** `customer master\all module screens\general master product group.PNG`
- **Resolution:** 970 × 536

#### Visible labels and candidate field names

- Product Group Master
- Code
- [Other Masters]
- Furnace
- Department
- Rejection
- Currency
- Part Master
- Contractor's Process
- Product Group

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-018 — general master1 contractor's process

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for general master1 contractor's process.
- **Screenshot:** `customer master\all module screens\general master1 contractor's process.PNG`
- **Resolution:** 983 × 539

#### Visible labels and candidate field names

- [Other Masters]
- Coda
- EffDate
- Subcontract
- Cotractor•s
- Name
- Process
- Master
- Like Mould
- Core
- Furnace
- Department
- Rejection
- Currency
- Part Master
- Contractor's Process
- Product Group
- FINAL CLEARANCE
- Subcontract Category
- ade
- Cust
- Product
- Rate
- wt<15 Wt=15
- Rate/ kg Rate/ Kg
- Va Wes
- Engineerin
- Valves
- Alloy
- LOW ALLOY
- CARaoN STi
- ALLOY STEE •
- Description

#### Visible actions

- Copy To

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-019 — general mastercurrency

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for general mastercurrency.
- **Screenshot:** `customer master\all module screens\general mastercurrency.PNG`
- **Resolution:** 969 × 515

#### Visible labels and candidate field names

- [Other Masters]
- Code
- Currency Name
- Currency
- Short
- Master
- Symbol
- Furnace
- Department
- Rejection
- Part Master
- Contractor's Process
- Product Group

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-020 — genral mater1 furnace

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for genral mater1 furnace.
- **Screenshot:** `customer master\all module screens\genral mater1 furnace.PNG`
- **Resolution:** 963 × 532

#### Visible labels and candidate field names

- Code
- [Other Masters]
- CRUCIBLE HEATTRERTMENT FURNACE
- Name
- Capacity
- Calb
- in Kg
- Date
- 28/01 no
- Due
- 27/01 no
- Melting
- Furnace
- nthil Engg works
- HTF S
- Electric
- Department
- Rejection
- Currency
- Part Master
- Contractor's Process
- Product Group

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-021 — genral mater1 rejection

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for genral mater1 rejection.
- **Screenshot:** `customer master\all module screens\genral mater1 rejection.PNG`
- **Resolution:** 965 × 532

#### Visible labels and candidate field names

- Code
- SHRINKAGE
- PIN HOLES
- BLOW HOLES
- MISMATCH
- HORT POUR
- [Other Masters]
- Rejection
- Name
- Reason's
- Dumy
- Ch em
- Mech
- Dim dv
- Furnace
- Department
- Currency
- Part Master
- Contractor's Process
- Product Group
- MOULD LEAKAGE
- CRACK
- HOT TEAR
- CHEMICAL COMP FAILED
- MECHANICAL COM
- DIMENSION DEVIATION
- COLD LAYER
- ND INCLUSION

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-022 — grade master1

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master1.
- **Screenshot:** `customer master\all module screens\grade master1.PNG`
- **Resolution:** 816 × 489

#### Visible labels and candidate field names

- Grade and Heat Details
- Chemical Properties
- Chemical Master
- Heat
- No of
- Heat Cycles
- Treatment 2
- Cycle Details3
- Printed in
- Test-certificates
- Specification
- Tc Grade
- IBR TC Grade
- Treat
- El gn
- Redn
- TC-Remarks
- Value Convertion Mas
- GRADE MASTER
- Grade
- Standard
- Grade Group
- Production Cost/Kg
- Retn Rate
- Melting Loss Z
- T ap T emp
- Casting Type
- Cutting Type
- Mechanical Properties
- YSI
- B end
- T reatmen
- Impact
- Fetl Before Heat Treatment
- MPA
- TSI
- Hard
- Repon

#### Visible actions

- Save
- Delete

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-023 — grade master2

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master2.
- **Screenshot:** `customer master\all module screens\grade master2.PNG`
- **Resolution:** 810 × 496

#### Visible labels and candidate field names

- Grade and Heat Details
- Grade Master
- Chemical Properties
- Chemical Master
- TC-Remarks
- Value Convertion Maf
- Chemical
- Cancel
- Composition
- Max
- Text Min Text Max

#### Visible actions

- Save
- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-024 — grade master3

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master3.
- **Screenshot:** `customer master\all module screens\grade master3.PNG`
- **Resolution:** 808 × 500

#### Visible labels and candidate field names

- Grade and Heat Details
- Code
- Chemical Properties
- Chemical Master
- TC-Remarks
- Value Convertion Maf
- Name
- Short
- Show

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-025 — grade master4

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master4.
- **Screenshot:** `customer master\all module screens\grade master4.PNG`
- **Resolution:** 800 × 492

#### Visible labels and candidate field names

- Grade and Heat Details
- Chemical Properties
- Chemical Master
- TC-Remarks
- Value Convertion Maf
- Remarks
- no cellifcate UPTC
- asting confirms to MIUCP707/SS001 REV 18
- heoretical Weight
- ctual Weight
- aroon Steel fully killed
- astings are visually inspected in accordance with MSS-SP-55 and found acceptable
- NFIRMS TO INDIAN STANDARD IS 1030-lgge GR230-450W
- NFIRMS TO as 3100 GrA2
- NFIRMST08S3100 GrA5
- NFIRMS TOASTM 4.217 Gr CS

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-026 — grade master5

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master5.
- **Screenshot:** `customer master\all module screens\grade master5.PNG`
- **Resolution:** 804 × 488

#### Visible labels and candidate field names

- Chemical Properties
- Chemical Master
- TC-Remarks
- Method
- g. 806650
- Value Convertion Master
- PAGE45g
- Title
- O era te

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-027 — grade master6

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master6.
- **Screenshot:** `customer master\all module screens\grade master6.PNG`
- **Resolution:** 813 × 499

#### Visible labels and candidate field names

- Chemical Master
- TC-Remarks
- Grade
- Value Convertion Master
- Standard
- Rem
- PAGE45g

#### Visible actions

- SAVE

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-028 — kg rate master testing charge

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for kg rate master testing charge.
- **Screenshot:** `customer master\all module screens\kg rate master testing charge.PNG`
- **Resolution:** 825 × 488

#### Visible labels and candidate field names

- [Other Masters]
- Rate Master - Kg
- Customer Wise Testing Charge Master
- Testing Charge
- Customer
- Unit Of
- Mesurement
- Char e

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-029 — kg rate master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for kg rate master.
- **Screenshot:** `customer master\all module screens\kg rate master.PNG`
- **Resolution:** 822 × 489

#### Visible labels and candidate field names

- [Other Masters]
- Rate Master - Kg
- Customer
- Grade
- Testing Charge
- Grade With Suffi
- Rate For
- Date

#### Visible actions

- Copy to Customer

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-030 — menu master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for menu master.
- **Screenshot:** `customer master\all module screens\menu master.PNG`
- **Resolution:** 834 × 704

#### Visible labels and candidate field names

- MENU MASTER
- LABELNRME
- CODE
- Aki 1
- Aki 2
- Aki 3
- Aki 5
- "CODE
- FILENAME
- FOUNDRY
- MASTERS
- USTOMER
- PRODUCTMASTER
- GRADE
- UBCONTRACT / VE
- OMPMAST
- RADE
- STM
- PECIAL / QUALITY R SPECIAL
- GENERAL / OTHERM THERMAST
- pc RATE MASTER
- KG RATE MASTER
- TING PROCESS
- BILL OF MATERIAL
- EMPLOYEE MASTER
- MARKETING MANGE
- PCRATEMASTER
- TEMASTER
- STINGPROCESS
- EMPMAST
- Marketing Mangement
- MONTHLY POURING F MONTHLYPOURINGPLA Marketing Mangement
- EEKLY POURING P
- EEKLYPOURPLAN
- RDER PO HOLD
- OLDPO

#### Visible actions

- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-031 — piece rate master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for piece rate master.
- **Screenshot:** `customer master\all module screens\piece rate master.PNG`
- **Resolution:** 817 × 484

#### Visible labels and candidate field names

- Piece Rate Master
- Product
- Nev
- Grade
- Drawin
- Revising Date
- Stand wt K
- Rate
- Pc Rate
- Remark
- Revised Date
- Std wt
- Kg Rate
- Name / Drawing
- Exi t

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-032 — product master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for product master.
- **Screenshot:** `customer master\all module screens\product master.PNG`
- **Resolution:** 824 × 506

#### Visible labels and candidate field names

- PRODUCT
- Same As
- Old Job No
- Customer
- Pat_Sl No
- Category
- MASTER
- Name
- IBR
- Pattem
- ENTRY
- Group
- Core
- suRES*Kuvg
- Internal Hol
- Hold
- Drawing
- Pattem AYI
- Mate rial
- a tern Cn
- Material
- Section Thick
- Hand Mold
- Sleeve Req
- Sprue Size in Dia
- Grade
- Sleeve Excel Conv
- Patn Lose Pcs
- Core Lose Pcs
- Pcs Per Comp
- Finish Wt Liquid Wt
- Reg WT List
- PO wt
- Remarks
- Patn Hold List
- ProfM/c wt
- Full Wc wt
- Apron
- Patn List
- Method Image Cust Patn List Q raning Master Weight Piff
- Cust Hold
- List
- Random
- RT Qty
- Insp Qty

#### Visible actions

- Delete
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-033 — special requirements

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for special requirements.
- **Screenshot:** `customer master\all module screens\special requirements.PNG`
- **Resolution:** 808 × 490

#### Visible labels and candidate field names

- Code
- Special
- Name
- Requirments
- Display
- Shon
- BORE DIA
- BEND
- BEND TEST
- Chemical
- DPT
- RT Invoice
- BE
- CA
- CE
- cs
- CT
- DP
- ITNESS POURING
- S CAST REDD
- BEND REMOVAL
- CHEMICAL SPEC
- Colour Coading req
- CE MARKING
- CERTIFICATION
- CARBON STEEL MUST BE CERTIFIED IN
- Charpy Test
- DIMENSIONAL INSPECTION
- DYE PENATRANT TEST
- Refresh
- Beport

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-034 — sub contract

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for sub contract.
- **Screenshot:** `customer master\all module screens\sub contract.PNG`
- **Resolution:** 817 × 481

#### Visible labels and candidate field names

- UENDOR
- SUBCONTRACT
- MASTER
- Code
- Name
- Shon
- Addl
- TIN No
- GST No
- Phone
- Telex
- CST No
- In/0ut

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-035 — tax master

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for tax master.
- **Screenshot:** `customer master\all module screens\tax master.PNG`
- **Resolution:** 1014 × 642

#### Visible labels and candidate field names

- Tax Master
- Cast
- Tax & Casting Types
- Duty & Tax Percentage Master
- Code
- RUN
- Cess Add. Cess Tax
- charge
- CGST
- SGST
- IGST

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-036 — tax master2

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for tax master2.
- **Screenshot:** `customer master\all module screens\tax master2.PNG`
- **Resolution:** 1022 × 652

#### Visible labels and candidate field names

- Master S
- Tax Master
- re Solution
- Tax & Casting Types
- Description
- Local
- Central
- Short
- RUN
- Shon Name
- A. Code
- Chapter No
- O,hapter Suh
- Code
- Cust - Alloy
- Ilead•ng

#### Visible actions

- Report Desc
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-037 — user rights

- **Module:** Customer Master
- **Subgroup:** all module screens
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for user rights.
- **Screenshot:** `customer master\all module screens\user rights.PNG`
- **Resolution:** 1048 × 656

#### Visible labels and candidate field names

- User
- Users
- m
- ee
- Code
- Mcode
- Option Name
- Menu Group
- ISTORELOLLLKKP
- Access
- Riots
- r All

#### Visible actions

- Save
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Enquiry Master

Foundry-status enquiry and enquiry/MIS reporting.

### Visible submodules/options

- MISREPORT
- STATUS

### LEG-038 — misreport - enquiry report

- **Module:** Enquiry Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy misreport - enquiry report output.
- **Screenshot:** `enquiry master\misreport - enquiry report.PNG`
- **Resolution:** 1050 × 650

#### Visible labels and candidate field names

- Casting Status
- Customer
- From Date
- WIP Product/Heat Wise
- Po No Heat Wise WIP
- Po No Wise WIP -RT
- CustGroup
- Enquiry Report
- Grade
- H eatwise Despatc
- Product
- Heat
- No
- cust W/o
- & WIF
- Covering Letter
- J RT Casting Poured Details
- Product Poured Details -I
- Product Despatch Details
- Heat Details Heat Selected
- Manual
- Customer Net Production
- Stock Details Order Details
- Prod
- II sched
- Cust .Grade Plan(Sumrnary)
- Q Cust .Grade Prod(Sumrnary)
- Cust .Grade D esp(Sumrnary)
- With &
- Daynise Prod(Againest Sub',wt)
- WIP REPORT(POURING DATE)
- Order Shon Close Repot
- Grade Wise WIP - Period
- Month Wise Production
- Delivery Analysis
- Delivery Analysis In Detail
- ND Of Heats Poured
- ND Of Melts/ Linning
- Balance Orders Commitment
- Grade Wise Pend Ords(Surn)
- Yet To Be Poured
- Heat Details WIP
- Despatch Advice Rep
- Order Bal with Value
- PRD REPORT
- Reiection Analysis(D efect)
- Reiection Analysis(Product)
- Reiection Analysis(Grade)
- Heat Details Offering
- CASTWT >
- Despatch Pie Graph
- Month Wise Line Graph
- Excess Castings As on
- Excess
- Select
- RT Casti
- OA Wi
- Order B
- Excess WIP Actual PO
- All
- Final Inspection
- Non Doc
- Sub Cont Pending
- Salvage WIP
- Production Daynise
- If you want any Selection
- Excess PO WIP
- Actual PO WIP
- Cust/Grade Pend Ords(Surn)
- Grade TOPOUR
- CL Order Bal Product Oa wise
- Month Wise Order Balance Repot
- Cust/Grade WIP Details
- Product Wise To Pour Items
- Pending Orders
- E Pending Orders with RT Req
- Pending Product Summary
- Day Wise Performance
- Delivery Commitments
- Month"ise Power Consumption
- WIP REPORT
- Order Corng List 3rder Comp BH
- W
- Z
- WIP Casting Status

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-039 — status - fountry status

- **Module:** Enquiry Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays status - fountry status information for operational enquiry.
- **Screenshot:** `enquiry master\status - fountry status.PNG`
- **Resolution:** 807 × 550

#### Visible labels and candidate field names

- FOUNDRY STATUS
- From Date
- 91 / 69,'2026 To Date
- 15,' 69/2026
- Weight in Kgs
- Qty in Nos
- Despa tch
- Pending Order
- Non D«ument
- Despatch SS
- 3818g.gao

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-040 — sub modules

- **Module:** Enquiry Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the enquiry master functions visible in the legacy application.
- **Screenshot:** `enquiry master\sub modules.PNG`
- **Resolution:** 921 × 674

#### Visible submodules/menu options

- MISREPORT
- STATUS

#### Visible actions

- REPORT
- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Heat Status Master

Consolidated heat, order, casting-process, chemistry and NDT status enquiry.

### Visible submodules/options

- HEATS DETAILS
- PRODUCT DET

### LEG-041 — heat details

- **Module:** Heat Status Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays heat details information for operational enquiry.
- **Screenshot:** `heat status master\heat details.PNG`
- **Resolution:** 854 × 789

#### Visible labels and candidate field names

- Heat Status
- Product Nam e
- MAGNETIC
- HEAT
- DETAILS
- OA.NO
- PROCESS DETAILS
- Description
- awing No
- Cast Wt
- Recv Qty
- ORDER
- OA.SNO
- PO.No
- CHEMICAL
- ANALYSIS
- CASTING
- Subcon actor
- TEST
- Send Qty
- Chemical Min
- Actual
- PARTICLE
- RADIOGRAPHY TEST
- Sqin Ir
- Sqin Co
- Betatron
- Requ
- New Volume (F:)
- HP V220W
- DVD RW Drive
- Network
- PRO MGR
- QUALITYI

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-042 — sub modules

- **Module:** Heat Status Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the heat status master functions visible in the legacy application.
- **Screenshot:** `heat status master\sub modules.PNG`
- **Resolution:** 916 × 676

#### Visible submodules/menu options

- HEATS DETAILS
- PRODUCT DET

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Lab Master

Chemical and mechanical testing, grade standards, heat treatment, test certificates and laboratory reports.

### Visible submodules/options

- CHEMICAL PROPERTIES ENTRY
- HEAT TREATMENT ENTRY
- STRESS RELIVING
- MECHANICAL PROPERTIES ENTRY
- GRADE STANDARDS CHEMCIALS PROPERTIES
- REGULAR TC
- TEST CERTIFICATE
- CHEMICAL PROPERTIES VIEW
- HEAT TREATMENT VIEW/EDIT
- HEAT CYCLE VIEW
- MECHANICAL PROPERTIES EDIT/VIEW
- GRADE MASTER VIEW
- REGUAL TC VIEW
- LAB REPORTS
- CHEMICAL ,MECHANICAL REGISTER
- RAW MATERIAL INSPECTION REPORT

### LEG-043 — checmical properties view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays checmical properties view information for operational enquiry.
- **Screenshot:** `lab master\checmical properties view.PNG`
- **Resolution:** 830 × 505

#### Visible labels and candidate field names

- Chemdate
- Heatno
- Grade
- Chemcial Entry Edit
- Code Chemcial Name
- Value

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-044 — chemical properties entry

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for chemical properties entry.
- **Screenshot:** `lab master\chemical properties entry.PNG`
- **Resolution:** 854 × 562

#### Visible labels and candidate field names

- Heat No
- Code
- [CHEMENT]
- Heat # Wise Chemical Results Entry
- Grade
- Name
- Standard
- Minimum
- REMARKS
- Actual
- Analysis Date
- M aximum
- Beport
- T ext

#### Visible actions

- Copy to > >
- Copy

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-045 — chemical-mechanical register

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy chemical-mechanical register output.
- **Screenshot:** `lab master\chemical-mechanical register.PNG`
- **Resolution:** 840 × 488

#### Visible labels and candidate field names

- FRO M
- CHEMICAL COMPOSITION AND MECHANICAL PROPERTY
- Heat No For Graph
- Heatno Chk
- Impact Parameter
- 01 '08/2028
- select your Grade
- Standard
- Grade wise Repot
- Grade Stand
- Remarks THE ABOVE GRADE MEET THE REO
- Date
- Heat Treat I
- Heat Treat 2
- Heat Wise Repot
- Y (Max)
- Y (Min)
- Heat No FROM
- Heat No To
- Mech Graph

#### Visible actions

- REPORT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-046 — grade master edit view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for grade master edit view.
- **Screenshot:** `lab master\grade master edit view.PNG`
- **Resolution:** 832 × 502

#### Visible labels and candidate field names

- Grade
- Standard
- Grade Edit
- Tc Grade And Standard

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-047 — grade standard chemical properties

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for grade standard chemical properties.
- **Screenshot:** `lab master\grade standard chemical properties.PNG`
- **Resolution:** 846 × 514

#### Visible labels and candidate field names

- Chemical Copy
- Code
- Grade Charges
- Standard
- Name
- F9 For Help
- T ext
- Grade

#### Visible actions

- Copy To

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-048 — heat cycle view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays heat cycle view information for operational enquiry.
- **Screenshot:** `lab master\heat cycle view.PNG`
- **Resolution:** 947 × 496

#### Visible labels and candidate field names

- Heatno
- Customer
- Cycle
- No Cycle
- Heat Treatment Entry Help
- Process / Soaking Temp / Soaking Hrs
- Hdate
- Grade
- First Desp Date

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-049 — heat treatment edit view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of heat treatment edit view information.
- **Screenshot:** `lab master\heat treatment edit view.PNG`
- **Resolution:** 817 × 521

#### Visible labels and candidate field names

- Cycle Cy No
- HEATNO
- Heat Treatment
- H-date
- Ccode Heatno
- Grade
- Cyc
- Hdate
- TC date
- Cyclel

#### Visible actions

- Edit VIEW
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-050 — heat treatment entry

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for heat treatment entry.
- **Screenshot:** `lab master\heat treatment entry.PNG`
- **Resolution:** 924 × 571

#### Visible labels and candidate field names

- cycle u
- Heat u
- Pour Date
- sto
- Cycles Req
- Cycle No
- Send
- Furnace
- Operator
- Before WO
- Sok Temp
- Heat Treatment Entry
- Cyc
- esc
- eatnc
- Max. Thickness
- C cle Details
- rc uct
- rc
- n ty
- Weight Kg
- Quench Speed
- Chloride Content
- Hardness Value
- PH Value
- Type Of Cool
- From Date
- To Date
- Refresh
- Beport
- Chan
- Begister
- Fumace Begister

#### Visible actions

- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-051 — lab report

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy lab report output.
- **Screenshot:** `lab master\lab report.PNG`
- **Resolution:** 823 × 488

#### Visible labels and candidate field names

- From Date
- To Date
- Grade
- ILRB REPORTS
- PENDING HEAT
- FOR
- HEATTRERTMENTS
- 15,' 69/2026
- IBR Poured Details
- Poured Heats
- Furnace & Grade Wise Heattreat Tonnage
- Furnace &Alloy Wise Heattreat Tonnage
- M
- C
- N
- GradeWise
- Heatno Wise
- Cycle Wise
- Pending Tc Cust Wise
- Mechanical BEND
- Customer
- N Pending For chem
- Q Pending Mech

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-052 — mechanical properties edit view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of mechanical properties edit view information.
- **Screenshot:** `lab master\mechanical properties edit view.PNG`
- **Resolution:** 833 × 484

#### Visible labels and candidate field names

- Mechanical
- Heatno
- "date
- Elon
- Redu
- Properties Edit
- Hardl Hard2 T esttem
- 1m I
- 1m 2
- 1m 3
- Bend

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-053 — mechanical properties entry

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for mechanical properties entry.
- **Screenshot:** `lab master\mechanical properties entry.PNG`
- **Resolution:** 844 × 504

#### Visible labels and candidate field names

- Heatno
- [MECHENT]
- Heat # Wise Mechanical Test Results Entry
- Grade
- Poured On
- Minimum
- Y_SI
- Elong
- Reduc
- Hard
- Actual
- Mech_AnaIysis Date
- M aximum
- Impact
- T emp
- Shear Z
- Inclusion
- Pending Heats For Mechanical Test
- Last Cycle Date
- Lateral (mm)

#### Visible actions

- Copy to > > >
- Copy

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-054 — raw material inspectuion report

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy raw material inspectuion report output.
- **Screenshot:** `lab master\raw material inspectuion report.PNG`
- **Resolution:** 868 × 513

#### Visible labels and candidate field names

- [MIS]
- Name
- MIR No
- IR No
- IR Date
- Item ID
- INSPECTION ENTRY
- Bill Date
- UOMShape RefNo Qtysupl
- Qtyrcd
- Supplier Name
- Qtyacct Qtyrej
- Actuall
- Con 1
- Actua12
- Con2
- Visual
- Remarks
- Unitname
- Consessionally Accept
- Reject
- TEST MASTER
- IIR Note

#### Visible actions

- Report
- Clear
- Delete

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-055 — regular tc view

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays regular tc view information for operational enquiry.
- **Screenshot:** `lab master\regular tc view.PNG`
- **Resolution:** 862 × 547

#### Visible labels and candidate field names

- Heatno
- TCDate
- Test Certificate No Uiew
- Amnd TC No
- Grou
- Chem Mech
- Heat
- Cust
- Code
- Name
- Des atch Date

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-056 — regular tc

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for regular tc.
- **Screenshot:** `lab master\regular tc.PNG`
- **Resolution:** 854 × 577

#### Visible labels and candidate field names

- HeatNo
- Strength I
- Heat Treatment
- Details
- IBR
- Head
- Rem
- RmB
- Cust F 9
- T.C Dat
- Strength 2
- MPa
- GL mm
- T.C Printing
- Special
- Advicen
- 4.F9
- g _ 80665
- ASCII Text Format for AUDCO Group
- Path
- Cust
- Others
- BR DES
- GCT Practice
- Standar
- Heat Treatmernt
- Log Data
- Impact CVN 2mm 450
- pour Qty
- Despatch Qty
- AGENT NA
- Ksa-MTC
- Part No
- HEAD OA

#### Visible actions

- Generate
- Screen
- Report
- Clear Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-057 — stress reliving

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for stress reliving.
- **Screenshot:** `lab master\stress reliving.PNG`
- **Resolution:** 840 × 505

#### Visible labels and candidate field names

- Cycle No
- Stress Relieving
- Date
- Cycle Desc
- F,'C Name
- Type OF Cooling
- F,'C start Date
- Soaking Hrs
- Temp Reached At
- F,'C OFF Date
- F,'C OFF At
- Gen Remarks
- Heat No
- Product
- Qty
- F,'C start At
- Operator Name
- Start unit
- Grade
- Name
- Third Party
- Remarks
- URESHKUMRR .S-SERUER-15,'
- Blank
- Chart
- End unit

#### Visible actions

- Clear
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-058 — sub modules

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the lab master functions visible in the legacy application.
- **Screenshot:** `lab master\sub modules.PNG`
- **Resolution:** 930 × 679

#### Visible submodules/menu options

- CHEMICAL PROPERTIES ENTRY
- HEAT TREATMENT ENTRY
- STRESS RELIVING
- MECHANICAL PROPERTIES ENTRY
- GRADE STANDARDS CHEMCIALS PROPERTIES
- REGULAR TC
- TEST CERTIFICATE
- CHEMICAL PROPERTIES VIEW
- HEAT TREATMENT VIEW/EDIT
- HEAT CYCLE VIEW
- MECHANICAL PROPERTIES EDIT/VIEW
- GRADE MASTER VIEW
- REGUAL TC VIEW
- LAB REPORTS
- CHEMICAL ,MECHANICAL REGISTER
- RAW MATERIAL INSPECTION REPORT

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-059 — test certificate

- **Module:** Lab Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for test certificate.
- **Screenshot:** `lab master\test certificate.PNG`
- **Resolution:** 837 × 533

#### Visible labels and candidate field names

- Regular
- Export
- r DIN EN
- r Heat Wise
- T ested
- Inspection
- Inspected By
- Customer - OA
- Standard
- Wise
- Test
- Certificate Printing
- Heading EN 10204 - 3.1
- T.C Grade & Standard
- S ecification
- lechinical Help
- Conditions
- Hardness
- Manufacturers
- Mark
- O.A Standard
- Max
- Hardness Insp
- Hardness Report
- Hardness Rep LF
- F9 For Select
- Single Impact
- Avg Impact
- Despatch Qty
- Poured Qty
- Ualuosider
- Cameron
- T emp
- C+Mn/6 Max
- TC Remarks
- r Prmt
- isual Inspection
- Prmt
- Impact
- T ensile
- Heading
- Satisfactory. according to "SS-SP 55
- Dimensional Inspection Satisfactory
- Quality level DIN 1690 Pan-2 S3 V4 Satisfactory. Quality level D as per DIN 169
- Chemical composition and Mechanical properties also meet the requirements of
- Chem
- mech
- Ualuosider CF8M Customer
- Cer of Conformance

#### Visible actions

- Report
- Print
- Print CE
- Screen
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Main Screen

Top-level application navigation and logged-in user context.

### Visible submodules/options

- S.S.A. CASTINGS INDIA PRIVATE LIMITED
- CUSTOMER
- PRODUCT
- MARKETING
- ORDERS
- PRODUCTION
- LAB
- SUBCONTRACT
- QUALITY
- SALES
- ON SCREEN
- ENQUIRY
- HEAT STATUS
- SYSTEM
- STORES
- MAINTENANCE
- CALIBRATION
- USER NAVIE : SURESHKUVIAR.S

### LEG-060 — mainscreen

- **Module:** Main Screen
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the main screen functions visible in the legacy application.
- **Screenshot:** `main screen\mainscreen.PNG`
- **Resolution:** 1587 × 828

#### Visible submodules/menu options

- S.S.A. CASTINGS INDIA PRIVATE LIMITED
- CUSTOMER
- PRODUCT
- MARKETING
- ORDERS
- PRODUCTION
- LAB
- SUBCONTRACT
- QUALITY
- SALES
- ON SCREEN
- ENQUIRY
- HEAT STATUS
- SYSTEM
- STORES
- MAINTENANCE
- CALIBRATION
- USER NAVIE : SURESHKUVIAR.S

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Maintanence

Machine/equipment definition, preventive checks, breakdowns, spares, generator and equipment history.

### Visible submodules/options

- MACHINE MASTER
- BREAKDOWN
- GENERATOR
- EHISTORY
- PREVENTIVE REPORT

### LEG-061 — breakdown entry

- **Module:** Maintanence
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for breakdown entry.
- **Screenshot:** `maintanence\breakdown entry.PNG`
- **Resolution:** 863 × 538

#### Visible labels and candidate field names

- Department
- Down time
- Nature
- Root Cause Details
- Action
- Workstart Date
- Work finish Date
- Total Hours
- Serviced ay
- Spare Details
- FS
- BREAK
- Equipment
- DOWN
- Work start Time
- Ork Finish Tme
- Sg:are Code F9
- INTIMATION ENTRY
- Down Date
- Repon
- Shift

#### Visible actions

- Report No
- Report date
- Report time
- Delete
- Save
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-062 — generator

- **Module:** Maintanence
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for generator.
- **Screenshot:** `maintanence\generator.PNG`
- **Resolution:** 822 × 557

#### Visible labels and candidate field names

- Time
- KWH
- OFF
- end
- Mult
- Tank
- Dies. lit
- [MIS]
- Name
- Time On
- KWH start
- Uolts
- GENERATOR
- LOGBOOK
- ENTRY
- Code
- SNO
- Fact
- Hours Run
- Units
- Water Temp
- %leck Hours
- Run Hours
- From Date 61/99,'2026
- Oil
- Add
- Oil Temp
- Dies .Endlit
- Diesel
- Remarks
- To Date
- Generator Log Book
- power Consumption
- GENE

#### Visible actions

- Delete
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-063 — preventive report - machine master report

- **Module:** Maintanence
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy preventive report - machine master report output.
- **Screenshot:** `maintanence\preventive report - machine master report.PNG`
- **Resolution:** 895 × 578

#### Visible labels and candidate field names

- WINDOWI
- Machine Master Reports
- Date
- A. Daily Report
- B. Weekly Report
- C. Fortnightly Report
- p. Monthly Report
- E. Querterly Report
- E. Half Yearly Report
- E Yearly Report
- X. E&xit

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-064 — sub modules

- **Module:** Maintanence
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the maintanence functions visible in the legacy application.
- **Screenshot:** `maintanence\sub modules.PNG`
- **Resolution:** 924 × 670

#### Visible submodules/menu options

- MACHINE MASTER
- BREAKDOWN
- GENERATOR
- EHISTORY
- PREVENTIVE REPORT

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-065 — daily checklist

- **Module:** Maintanence
- **Subgroup:** machine master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for daily checklist.
- **Screenshot:** `maintanence\machine master\daily checklist.PNG`
- **Resolution:** 813 × 449

#### Visible labels and candidate field names

- Win dow
- Machine Details
- Machine Spares
- Daily Check List
- Weekly Check List
- Monthly Check List
- Quaterly Check L
- Daily Preventive Check List

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-066 — machine details

- **Module:** Maintanence
- **Subgroup:** machine master
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays machine details information for operational enquiry.
- **Screenshot:** `maintanence\machine master\machine details.PNG`
- **Resolution:** 859 × 484

#### Visible labels and candidate field names

- Win dow
- Machine Details
- Machine Spares
- Daily Check List
- Weekly Check List
- Details
- Monthly Check List
- Quaterly Check L
- Equipment Details
- Code
- Name
- Model Year of Purchase
- Location
- Date of Installation
- Running No
- Capacity
- Generator Details
- Multplying Fact
- T ank Fact
- Diesel Rate
- Oil Rate
- B Check Hours
- Hours Run
- Service
- Person
- Contact
- Preventive Maintenace
- D aily
- Weekly
- Monthly
- Quarterly
- Half-yearly
- Yearly
- History Card
- Break Down Details
- e;ort

#### Visible actions

- Clear All
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-067 — machine spares

- **Module:** Maintanence
- **Subgroup:** machine master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for machine spares.
- **Screenshot:** `maintanence\machine master\machine spares.PNG`
- **Resolution:** 842 × 477

#### Visible labels and candidate field names

- Win dow
- Machine Details
- Spare Details
- S are Code
- Machine Spares
- Item Descri yon
- Daily Check List
- Specification
- / Brand Name
- Weekly Check List
- Monthly Check List
- Available Address
- Contace and Ph ND
- Quaterly Check L
- Stock

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-068 — overall page

- **Module:** Maintanence
- **Subgroup:** machine master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for overall page.
- **Screenshot:** `maintanence\machine master\overall page.PNG`
- **Resolution:** 831 × 472

#### Visible labels and candidate field names

- Win dow
- Weekly Check List Monthly Check List
- Monthly Preventive Check List
- Quaterly Check List
- Half Year Check List
- Yearly Check List
- rrr

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-069 — weekly check list

- **Module:** Maintanence
- **Subgroup:** machine master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for weekly check list.
- **Screenshot:** `maintanence\machine master\weekly check list.PNG`
- **Resolution:** 860 × 478

#### Visible labels and candidate field names

- Win dow
- Machine Details
- Machine Spares
- Daily Check List
- Weekly Check List
- Monthly Check List
- Quaterly Check L
- Weekly Preventive Check List

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Marketing Master

Order-booking reports, monthly pouring plan, PO hold and marketing MIS.

### Visible submodules/options

- MONTHLY POURING PLAN
- ORDER / PO HOLD
- CUSTOMER WISEORDER BOOKING / SALES ANALYSIS
- GRADE WISE ORDER BOOKING / SALES ANALYSIS
- MISREPORTS

### LEG-070 — customer wiseorder booking

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customer wiseorder booking.
- **Screenshot:** `marketing master\customer wiseorder booking.PNG`
- **Resolution:** 832 × 522

#### Visible labels and candidate field names

- Contribution Analysis
- Booking Details
- Despatch Details
- Customer
- From Date
- Quantity (Qnty)
- Wt.MT
- To Date
- wt.\Pc Val.Rs
- Rate/ K
- GRADE
- Val.Rs
- Re port
- Rate/ Kg

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-071 — grade wise order booking

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for grade wise order booking.
- **Screenshot:** `marketing master\grade wise order booking.PNG`
- **Resolution:** 852 × 494

#### Visible labels and candidate field names

- Contribution Analysis
- Booking Details
- G rade
- From Date
- Quantity (Qnty)
- Rate/K
- Cu stomer
- Despatch Details
- Val. Rs
- Re port
- Rate/ Kg
- To Date
- wt.\Pc Val.Rs

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-072 — misreport

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy misreport output.
- **Screenshot:** `marketing master\misreport.PNG`
- **Resolution:** 833 × 520

#### Visible labels and candidate field names

- Date From
- M.I.S
- Selection
- Customer
- Product
- Grade
- Clea, All
- Production Yield Z & Reiection Z
- Reports
- Grade,Product Wise Orders
- Product,Grade Wise Orders
- Alloy Wise Booking
- Product,Grade Wise Despatch
- Jumover (Only Casting Value) (Grade)
- T umover Unly Casting Value) (Alloy)
- Product,Grade Wise Despatch Comparision
- Customer-Alloy Wise Booking
- Customemise Despatch Comparision
- Despatch & Advice Weight Alloy wise
- Difference In Wt and Val
- Average Prod,Desp, Wt,Rate
- Cust/Product Wise Yield Pend Ords
- DHIRA CNC PRODUCT PRIVATE LIMITED
- KRASH GEARS & DRIVES
- QUA SYSTEMS
- droit Dies and Moulds (P) Ltd
- lex Grinders PVT LTD
- 81JLL AGRO IMPLEMENTS
- Best & Crompton Enqq. Limited
- Bharat Heavy Electricals Limited
- Blackhawk Engineering India Pvt. LtcL
- CASTING INDIA
- Charam Techno Chemical & Equipments Pvt Ltd
- Circor Flow Technology India Pvt Ltd

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-073 — monthly pouring plan

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for monthly pouring plan.
- **Screenshot:** `marketing master\monthly pouring plan.PNG`
- **Resolution:** 1052 × 676

#### Visible labels and candidate field names

- Delivery
- Product
- Any Date of Month
- Monthly Pouring Plan
- Grade
- Liquid
- Casting
- wt
- Commitments Between
- Desc
- No
- From Date
- To Date
- Grade Wise Repon
- Cust Wise Report
- Plan us Pour
- Monthly • Deviation
- Raw Mat R eq
- SLEEVE REQ
- PDF
- SLEEVE PENDING

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-074 — order po hold

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for order po hold.
- **Screenshot:** `marketing master\order po hold.PNG`
- **Resolution:** 863 × 507

#### Visible labels and candidate field names

- Silno Product
- Po Help
- Description
- Hold O.A For Despatch & Pouring
- Productio
- Desp
- Hold
- Older
- Despatch
- Remarks

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-075 — sub modules

- **Module:** Marketing Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the marketing master functions visible in the legacy application.
- **Screenshot:** `marketing master\sub modules.PNG`
- **Resolution:** 909 × 674

#### Visible submodules/menu options

- MONTHLY POURING PLAN
- ORDER / PO HOLD
- CUSTOMER WISEORDER BOOKING / SALES ANALYSIS
- GRADE WISE ORDER BOOKING / SALES ANALYSIS
- MISREPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Onscreen Master

Read-only operational enquiry screens for customers, products, orders, heats, casting, dispatch and NDT.

### Visible submodules/options

- POURED DETAILS VIEW
- DESPATCH DETAILS VIEW
- ORDER VIEW
- HEATWEIGHT INFOMATION
- CASTING STATUS
- CASTING PROCESS VIEW
- MELT CHARGE VIEW
- RT VIEW
- UT VIEW
- MP VIEW
- PRODUCT VIEWI
- CUSTOMER VIEW

### LEG-076 — casting status

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays casting status information for operational enquiry.
- **Screenshot:** `onscreen master\casting status.PNG`
- **Resolution:** 865 × 523

#### Visible labels and candidate field names

- Poured Date
- Heat No
- Product
- Date From
- Casting Status
- Des
- Only Stock
- IMITæn
- o. A sr Qty

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-077 — customer view - customer master edit

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for customer view - customer master edit.
- **Screenshot:** `onscreen master\customer view - customer master edit.PNG`
- **Resolution:** 866 × 563

#### Visible labels and candidate field names

- Customer
- Master Edit
- Old Code
- Name
- Customer Code / Name
- Address 1

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-078 — dispatched details view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays dispatched details view information for operational enquiry.
- **Screenshot:** `onscreen master\dispatched details view.PNG`
- **Resolution:** 831 × 529

#### Visible labels and candidate field names

- Advice N
- Advice Dat
- Ccode Heatno
- Despatch View
- Grade
- Product

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-079 — heat weight details

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays heat weight details information for operational enquiry.
- **Screenshot:** `onscreen master\heat weight details.PNG`
- **Resolution:** 838 × 521

#### Visible labels and candidate field names

- Code
- Pour_Dt
- Heatwise Weight Details
- Charge Liquid Casting Reiect_ Despatch Desp_Dt
- Grade
- Date To
- Fetl_Dt
- Heat_Dt
- Yield Z
- Yield Z__
- Process Status
- Charge Wt Kgs
- Liquid Wt Kgs
- Cast Wt Kgs

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-080 — internal-sub-control intranel casting process table

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for internal-sub-control intranel casting process table.
- **Screenshot:** `onscreen master\internal-sub-control intranel casting process table.PNG`
- **Resolution:** 872 × 509

#### Visible labels and candidate field names

- D.CNo
- D.cot
- Intrnel I Sub-Contract Casting Process Table
- Alloy Mac
- S-Con Process
- Sub Contract
- Remar
- Heat No

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-081 — melt charge view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays melt charge view information for operational enquiry.
- **Screenshot:** `onscreen master\melt charge view.PNG`
- **Resolution:** 870 × 543

#### Visible labels and candidate field names

- Date
- From Date
- To Date
- Heat u
- Grade
- Code
- Melt Charge view
- Material
- Charge
- G_Rtt

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-082 — MP view -  magnetic particle test view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays MP view -  magnetic particle test view information for operational enquiry.
- **Screenshot:** `onscreen master\MP view -  magnetic particle test view.PNG`
- **Resolution:** 889 × 483

#### Visible labels and candidate field names

- Magneic Pamc/e Test View
- Reportno
- Heatno
- Product
- Description
- Mpno
- DC Date
- WO # Srlno Charge UniOate of Test
- Drawing No

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-083 — oreder acceptance view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays oreder acceptance view information for operational enquiry.
- **Screenshot:** `onscreen master\oreder acceptance view.PNG`
- **Resolution:** 840 × 537

#### Visible labels and candidate field names

- O.A No
- spLReq
- s
- Cust
- Order
- P.o.No
- OA Date
- acceptance Edit
- P.O. Seq Product Description
- Product
- Description
- G rade
- Grade
- Qty
- Desp
- Baln Clos

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-084 — poured-heat details view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays poured-heat details view information for operational enquiry.
- **Screenshot:** `onscreen master\poured-heat details view.PNG`
- **Resolution:** 831 × 502

#### Visible labels and candidate field names

- HEAT DETAILS UIEW
- S.R. CASTINGS INDIA PRIURTE LIMITED
- Plan Pour Re Des cfialance Cast Wt Cast Wt L Wt
- Only Stock
- OA No
- Test aar
- sr
- Qty
- SPECIAL REQUIREMENTS

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-085 — product - product aster view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays product - product aster view information for operational enquiry.
- **Screenshot:** `onscreen master\product - product aster view.PNG`
- **Resolution:** 906 × 504

#### Visible labels and candidate field names

- CC0de
- Product
- Item Descri yon
- Master
- Same As
- List
- Drawin
- Pcs Cast Wt
- Li uid Wt

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-086 — RT view - special requirements master edit

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for RT view - special requirements master edit.
- **Screenshot:** `onscreen master\RT view - special requirements master edit.PNG`
- **Resolution:** 868 × 544

#### Visible labels and candidate field names

- Special Requirment Master Edit
- Heatno
- Ccode
- Product
- Desc
- Entry Date
- RLN0
- 82 sqi
- COSO sqi
- Desp Date

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-087 — sub modules

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the onscreen master functions visible in the legacy application.
- **Screenshot:** `onscreen master\sub modules.PNG`
- **Resolution:** 906 × 672

#### Visible submodules/menu options

- POURED DETAILS VIEW
- DESPATCH DETAILS VIEW
- ORDER VIEW
- HEATWEIGHT INFOMATION
- CASTING STATUS
- CASTING PROCESS VIEW
- MELT CHARGE VIEW
- RT VIEW
- UT VIEW
- MP VIEW
- PRODUCT VIEWI
- CUSTOMER VIEW

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-088 — UT view -  ultrasonic test view

- **Module:** Onscreen Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays UT view -  ultrasonic test view information for operational enquiry.
- **Screenshot:** `onscreen master\UT view -  ultrasonic test view.PNG`
- **Resolution:** 942 × 523

#### Visible labels and candidate field names

- Heatno
- P roduct
- U/frasonic Test View
- Description
- DC Date
- WO # Srlno Charge Unit Date of Test Last Modified
- Drawing No
- grade

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Order Master

Order Acceptance/work order entry, amendment, printing, commitment, conversion, invoice and export utilities.

### Visible submodules/options

- ORDER ACCEPTANCE ENTRY
- PROFORMA INVOICE PRODUCT
- PROFORMA INVOICE
- PRODUCT CONVERSION
- PENDING ORDER COMITMENT
- ORDER TERMS AND CONDITIONS EDIT
- ORDER ACCEPTANCE EDIT
- ORDER ACCEPTANCE PRINT
- O.A. REPORTS
- Excel Conversion

### LEG-089 — excel conversion

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for excel conversion.
- **Screenshot:** `order master\excel conversion.PNG`
- **Resolution:** 1484 × 838

#### Visible labels and candidate field names

- TEMPLATE
- SSA
- 15-sep-2026
- Customer
- EXCEL CONVERSION
- Process

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-090 — OA report

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy OA report output.
- **Screenshot:** `order master\OA report.PNG`
- **Resolution:** 845 × 508

#### Visible labels and candidate field names

- Grade
- MARKETING Reports
- Product
- Customer
- O AREGISTER
- a GCT Despatch
- Delivery Analysis
- S ecial Re uirment
- O A NOT APPROVED
- PO REGISTER
- Oa No

#### Visible actions

- Clear All
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-091 — order acceptance edit

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for order acceptance edit.
- **Screenshot:** `order master\order acceptance edit.PNG`
- **Resolution:** 922 × 530

#### Visible labels and candidate field names

- O.A No
- spLReq
- Planned
- Order acceptance Edit
- odeproduæscription
- OA Date
- e no
- G rade
- Qty
- Desp
- Baln Clos Flag Close Qty Close Reason Close Resp.Person Close Date
- Product
- Description
- Poured eatno
- Grade
- ro uct
- Total

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-092 — order acceptance entry

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for order acceptance entry.
- **Screenshot:** `order master\order acceptance entry.PNG`
- **Resolution:** 920 × 493

#### Visible labels and candidate field names

- Customer
- Order Acceptance I Work Order Entry
- Type of Order
- Date
- Standard
- Part No
- WardNo
- Inspection By
- PO Received Date
- Sam
- Cond
- Unit
- Amend No
- Quantity (Qnty)
- Product
- CIA Remarks
- Insurance
- Document Through
- Mode Of Despatch
- T erms of Payment
- Destination
- Contact Person
- Grade
- SSA
- Approved
- ComrmDate ComrmDate Remarks Special
- Internal Hold
- FS Editor
- T erms
- Packing
- CT3
- Cust Omer
- T esting
- Packing Z
- Vien_SpI

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-093 — order acceptance print

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy order acceptance print output.
- **Screenshot:** `order master\order acceptance print.PNG`
- **Resolution:** 834 × 495

#### Visible labels and candidate field names

- No
- Order Acceptance Print
- With Rate
- Order Acceptance
- Work Order
- O A Amendment
- WII Amendment
- OA AMEND

#### Visible actions

- Copy To
- Print Annexure
- Screen

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-094 — order acceptance terms and conditions

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for order acceptance terms and conditions.
- **Screenshot:** `order master\order acceptance terms and conditions.PNG`
- **Resolution:** 833 × 516

#### Visible labels and candidate field names

- OANo
- Order Acceptance Terms And Conditions Edit
- Pono
- Podate C-Code
- Form
- Terms Of Payment

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-095 — pending order commitment

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for pending order commitment.
- **Screenshot:** `order master\pending order commitment.PNG`
- **Resolution:** 830 × 513

#### Visible labels and candidate field names

- Customer
- Description
- O ano
- Pending Orders
- Product
- Odate
- Grade
- Cust
- Commitments
- Delivery
- Date
- Desg
- WIF
- Fl Editior
- With
- Customer Delivery
- Exi t

#### Visible actions

- Screen
- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-096 — performa invoice product

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for performa invoice product.
- **Screenshot:** `order master\performa invoice product.PNG`
- **Resolution:** 840 × 503

#### Visible labels and candidate field names

- Performa No
- Pro-Forma Invoice
- T erms And Conditions
- Product
- Grade
- Qnty Weight/Pc
- Rate
- Tot_Wt Kg
- Extra Charges For
- Qty sq_ln
- Amount
- Chagres
- Wt_Kg
- Advance
- Beport

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-097 — product convertion entry

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for product convertion entry.
- **Screenshot:** `order master\product convertion entry.PNG`
- **Resolution:** 819 × 483

#### Visible labels and candidate field names

- [WIND]
- Heat u
- Product Convertion Entry
- From Product
- Finish Wt Qnty
- Pour
- TO Product
- Finish Wt
- Convert
- Convert ion Type
- *Regular Convertion\
- Salvage Convenion
- Desp
- Rejn
- aaln

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-098 — sub modules

- **Module:** Order Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the order master functions visible in the legacy application.
- **Screenshot:** `order master\sub modules.PNG`
- **Resolution:** 910 × 665

#### Visible submodules/menu options

- ORDER ACCEPTANCE ENTRY
- PROFORMA INVOICE PRODUCT
- PROFORMA INVOICE
- PRODUCT CONVERSION
- PENDING ORDER COMITMENT
- ORDER TERMS AND CONDITIONS EDIT
- ORDER ACCEPTANCE EDIT
- ORDER ACCEPTANCE PRINT
- O.A. REPORTS
- Excel Conversion

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Product Master

Product, pattern, drawing, planning, location, sample and pattern-inspection functions.

### Visible submodules/options

- PATTERN INSPECTION ENTRY
- SAMPLE POURED DETAILS
- MASTER LIST VIEW
- PLANNING DETAILS
- PRODUCT DETAILS
- DRAWING VIEW
- PATTERN LOCATION

### LEG-099 — dreawing view

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays dreawing view information for operational enquiry.
- **Screenshot:** `product master\dreawing view.PNG`
- **Resolution:** 769 × 541

#### Visible labels and candidate field names

- WINDOWI
- Drawi
- Draw Avlbl

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-100 — master pattern listing

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy master pattern listing output.
- **Screenshot:** `product master\master pattern listing.PNG`
- **Resolution:** 836 × 494

#### Visible labels and candidate field names

- *aster
- Pattern
- Listing
- Drawing
- Quail able List
- Not Quail abe List
- Not Quail able List
- Code
- Name
- wise Report
- Customer
- All Patterns
- Pattern Used For
- Pattern Not Used
- Pour
- For Pour
- From Date
- End Date
- Same
- Rs
- 15,' 69/2026
- Pattern Receipt List
- Pattern Issues List

#### Visible actions

- Exit
- Screen

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-101 — pattern inspection entry

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for pattern inspection entry.
- **Screenshot:** `product master\pattern inspection entry.PNG`
- **Resolution:** 876 × 530

#### Visible labels and candidate field names

- WINDOWI
- Date
- Product
- Supplier
- Pattem cont _
- Pattern
- Inspection Entry
- Customer
- Product Description
- Drawing
- Corebox contn_
- Pan Model no
- Srlno
- Dig Dimension M 'Cing Allou Shrinkage Allow T o be Maint
- Shrinkage Z
- Remarks
- Beport
- Actual Dimension

#### Visible actions

- Report No
- Delete
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-102 — pattern location

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for pattern location.
- **Screenshot:** `product master\pattern location.PNG`
- **Resolution:** 825 × 510

#### Visible labels and candidate field names

- Product
- Reports
- Pattern 'Core Location Entry
- pattem
- Block
- Rack
- Pr oduct
- Customer Wise
- Store Wise
- Store
- Block Locaton
- Only Hand Mould
- Only Match Plate
- Only Pattern
- Only Core
- Beport

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-103 — planning details

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays planning details information for operational enquiry.
- **Screenshot:** `product master\planning details.PNG`
- **Resolution:** 631 × 375

#### Visible labels and candidate field names

- WINDOWI
- Planning Details Report
- Plan Date
- Beport

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-104 — product details

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays product details information for operational enquiry.
- **Screenshot:** `product master\product details.PNG`
- **Resolution:** 848 × 512

#### Visible labels and candidate field names

- PRODUCT
- Same As
- Old Job No
- Customer
- Pat_Sl No
- Category
- MASTER
- suRES*Kuvg
- ENTRY
- Internal Hol
- Hold
- Drawing
- Group
- Pattem Avlb
- Name
- IBR
- Pattem
- Material
- Section Thick
- Hand Mold
- Sleeve Req
- Sprue Size in Dia
- Grade
- Sleeve Excel Conv
- Patn Lose Pcs
- Core Lose Pcs
- Pcs Per Comp
- Finish Wt Liquid Wt
- Reg WT List
- Core
- ProfM/c wt
- Full Wc wt
- PO wt
- Remarks
- Patn Hold List
- Apron
- Patn List
- Method Image Cust Patn List Q raning Master Weight Piff
- Cust Hold
- List
- Random
- RT Qty
- Insp Qty

#### Visible actions

- Delete
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-105 — sample product details

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays sample product details information for operational enquiry.
- **Screenshot:** `product master\sample product details.PNG`
- **Resolution:** 876 × 534

#### Visible labels and candidate field names

- Sample Poured Details
- Sample's Like
- Grade
- Product
- SAMPLE
- Customer
- Execute
- Yield Details
- Not To Show

#### Visible actions

- Screen
- Exit
- Clear All

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-106 — sub modules

- **Module:** Product Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the product master functions visible in the legacy application.
- **Screenshot:** `product master\sub modules.PNG`
- **Resolution:** 903 × 664

#### Visible submodules/menu options

- PATTERN INSPECTION ENTRY
- SAMPLE POURED DETAILS
- MASTER LIST VIEW
- PLANNING DETAILS
- PRODUCT DETAILS
- DRAWING VIEW
- PATTERN LOCATION

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Production Master

Monthly/daily planning, mould production, melting charge, pouring, contracts and production reports.

### Visible submodules/options

- DAILY POURING PLANNING
- POURING DETAILS ENTRY
- MELTING CHARGE ENTRY
- MONTHLY PLANNING ENTRY
- MOLDING CONTRACT
- POURING DETAILS VIEW
- PLANNED PRINT FOR MOLDING
- MELTING / POURING LOG PRINT
- MOULD PRODUCTION
- DAILY PLANNING VIEW

### LEG-107 — daily planning view

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays daily planning view information for operational enquiry.
- **Screenshot:** `production master\daily planning view.PNG`
- **Resolution:** 854 × 494

#### Visible labels and candidate field names

- Plandate
- Last Modified
- Product
- Daily Planning View
- Heat No
- Contract
- Grade

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-108 — daily pourong planning

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for daily pourong planning.
- **Screenshot:** `production master\daily pourong planning.PNG`
- **Resolution:** 899 × 509

#### Visible labels and candidate field names

- 15/og/2026
- Plan Date
- Grade Group
- Heat Nc
- Lining #
- Heat #
- DRILY
- Draw Avl
- Mould Weight
- Patn Approved
- Mould HIM
- MELTING
- PLAN ENTRY
- Furnace
- Tapping Temp
- Melt Nc
- OANO
- SNO
- Product
- Drawing
- Contract
- cast wt Mould - Remark
- aty
- Test Bar / Self
- PartNumöer
- Patn
- Last Pou red
- Remark
- Patn Status
- Patn Matrl
- Furnace Capicity
- Planned Wt Kg
- Available WtKg
- Ord Sa In
- Grade Wise Balance Orders
- CustomeL Grade Wise Balance Orders
- Product Grade Wise Balance Orders

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-109 — melting charge entry

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for melting charge entry.
- **Screenshot:** `production master\melting charge entry.PNG`
- **Resolution:** 1044 × 673

#### Visible labels and candidate field names

- Heat # Wise Charge Details Entry
- Heatno
- ItemCode
- From Date
- To Date
- Description
- Amount
- GRN u

#### Visible actions

- Back To Furnace
- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-110 — melting-pouring log view

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays melting-pouring log view information for operational enquiry.
- **Screenshot:** `production master\melting-pouring log view.PNG`
- **Resolution:** 840 × 512

#### Visible labels and candidate field names

- Mel t i ng
- Log
- Pouring Planning Log
- Date
- Pouring
- Sheet
- Grade
- Log Sheet
- Melt_Log
- Refresh
- Pouring Log Sheet(OLD)
- Pouring Log Sheet

#### Visible actions

- Screen

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-111 — monthly pouring entry

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for monthly pouring entry.
- **Screenshot:** `production master\monthly pouring entry.PNG`
- **Resolution:** 1096 × 693

#### Visible labels and candidate field names

- Delivery
- Product
- Any Date of Month
- Monthly Pouring Plan
- Grade
- VW0031 40
- Liquid
- Casting
- wt
- Commitments Between
- Desc
- No
- From Date
- To Date
- Grade Wise Repon
- Cust Wise Report
- Plan us Pour
- Monthly • Deviation
- Raw Mat R eq
- SLEEVE REQ
- PDF
- SLEEVE PENDING

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-112 — mould production

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for mould production.
- **Screenshot:** `production master\mould production.PNG`
- **Resolution:** 838 × 490

#### Visible labels and candidate field names

- • 15 09 2026
- [MIS]
- Shift First
- MOULD
- Heatno
- Summary
- Grade
- Shift
- Product
- Contractor
- PRODUCTION PLAN ENTRY
- set
- Allot Set
- Nos
- Qnt
- Preview

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-113 — moulding contract

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for moulding contract.
- **Screenshot:** `production master\moulding contract.PNG`
- **Resolution:** 865 × 519

#### Visible labels and candidate field names

- Poured Details
- 15/0g/2026
- Production Details
- Process Date
- Heatno
- Grade
- Pourdate
- Production
- Mold Production Entry
- Heat Wise Report I
- Heat Wise Report 2
- Contractor Wise Report
- pate Wise Report
- product Wise Report
- gascutting pending report
- Contract
- labour Charge
- gas Cutting
- Less Advance
- erod&Contractor Wise Report
- Contra ctWise
- Update
- Contractor
- Baln
- Quantity (Qnty)

#### Visible actions

- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-114 — planning print for moulding

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy planning print for moulding output.
- **Screenshot:** `production master\planning print for moulding.PNG`
- **Resolution:** 797 × 501

#### Visible labels and candidate field names

- Date
- Planning Reports
- Melt No
- Daily Production Plan

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-115 — pouring detail entry

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for pouring detail entry.
- **Screenshot:** `production master\pouring detail entry.PNG`
- **Resolution:** 978 × 513

#### Visible labels and candidate field names

- Grade Group
- Fum_ Iin_Con
- Furnace
- Current Lining
- Running Melt"
- Reason for Delay
- StartingT ime
- Sample Time
- T apping T emp
- Pouring Temp
- T apping Time From
- Melt Total Time
- Power
- Pouring Entry
- Fl - Test Bar . F9 Planning Pending
- Poured Date
- Product
- Heat No
- Lining Number
- Descri yon
- Grade
- F_Wt
- Pc'Box
- Order Balance
- WIP
- To Pour
- Box wt
- •c
- L addle
- Pre He. Time
- No of Taps
- Ingot
- ExceMetaI
- Lining Cont
- Melting Incharg
- Mould Superivisor
- Closing Team
- Internal Specification

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-116 — pouring detail view

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays pouring detail view information for operational enquiry.
- **Screenshot:** `production master\pouring detail view.PNG`
- **Resolution:** 848 × 495

#### Visible labels and candidate field names

- HEAT DETAILS UIEW
- S.R. CASTINGS INDIA PRIURTE LIMITED
- Plan Pour Re Des cfialance Cast Wt Cast Wt L Wt
- Only Stock
- OA No
- Test aar
- sr
- Qty
- SPECIAL REQUIREMENTS

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-117 — sub modules

- **Module:** Production Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the production master functions visible in the legacy application.
- **Screenshot:** `production master\sub modules.PNG`
- **Resolution:** 908 × 677

#### Visible submodules/menu options

- DAILY POURING PLANNING
- POURING DETAILS ENTRY
- MELTING CHARGE ENTRY
- MONTHLY PLANNING ENTRY
- MOLDING CONTRACT
- POURING DETAILS VIEW
- PLANNED PRINT FOR MOLDING
- MELTING / POURING LOG PRINT
- MOULD PRODUCTION
- DAILY PLANNING VIEW

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Quality Master

NDT, stage inspection, internal/customer rejection, NCR and rejection analysis.

### Visible submodules/options

- RT NUMBER ENTRY
- MP NUMBER ENTRY
- DP NUMBER ENTRY
- ULTRASONIC TEST ENTRY
- RT EVALUATION REPORT
- DP TEST REPORT
- MP TEST REPORT
- UT TEST REPORT
- STAGE WISE INTERNAL REJECTION ENTRY
- CUSTOMER REJECTIONS
- INTERNAL REJECTION RETRIVE
- NON CONFORMITY REPORT
- RT NUMBER EDIT / VIEW
- MP NUMBER EDIT / VIEW
- DP NUMBER EDIT / VIEW
- ULTRASONIC EDIT / VIEW
- FIRST SECOND STAGE INSPECTION REPORT
- REJECTION ANALYSIS

### LEG-118 — 1st & 2nd stage wise inspection report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy 1st & 2nd stage wise inspection report output.
- **Screenshot:** `quality master\1st & 2nd stage wise inspection report.PNG`
- **Resolution:** 873 × 493

#### Visible labels and candidate field names

- Date
- Heat No
- Stage Wise
- Grade
- Inspection Report
- Eirst Stage
- Final Stage

#### Visible actions

- Screen
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-119 — cating rejection details

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays cating rejection details information for operational enquiry.
- **Screenshot:** `quality master\cating rejection details.PNG`
- **Resolution:** 823 × 511

#### Visible labels and candidate field names

- Date From
- Casting Rejection Details
- Customer
- Selection
- Responsible Department
- Reason / Defect
- Product
- Grade
- Internal Reiection
- Customer Reiection
- Foundry Internal Reiection
- Casting Date Wise Rejm
- Summary By Date
- Defect Wise
- Responsible Qept Wise
- Customer/ßrade Summary
- Relection/Grade Summary
- Customer Rejection
- Defect 'Jse Rejection
- Monthwise production flow
- Customemise Rei
- Gradewise Rei
- KRASH GEARS & DRIVES
- QUA SYSTEMS
- droit Dies and Moulds (P) Ltd
- Departmenuise Rei
- Defecuise Rei

#### Visible actions

- Clear All Selection

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-120 — customer rejection

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customer rejection.
- **Screenshot:** `quality master\customer rejection.PNG`
- **Resolution:** 842 × 492

#### Visible labels and candidate field names

- Customer
- ggag,'26-27
- ReF Dat
- roduc
- End Rejection
- Del
- Beport

#### Visible actions

- Report No

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-121 — DP number edit view - dye penetrant test view

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of DP number edit view - dye penetrant test view information.
- **Screenshot:** `quality master\DP number edit view - dye penetrant test view.PNG`
- **Resolution:** 869 × 520

#### Visible labels and candidate field names

- Dye Penetrant Test View
- Heatno
- P roduct
- Description
- Drawing No
- D pno
- DC Date
- WO # Srlno Charge Date of Test

#### Visible actions

- Report No

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-122 — DP test number entry

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for DP test number entry.
- **Screenshot:** `quality master\DP test number entry.PNG`
- **Resolution:** 839 × 473

#### Visible labels and candidate field names

- Heatno
- Dye Penatrate Test Number Entry
- Grade
- Product
- Description
- DP NUMBER AUTOGENERATE
- Drawing
- DP Vie„
- WIP
- Baln

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-123 — DP- liquid penetrant test inspection report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy DP- liquid penetrant test inspection report output.
- **Screenshot:** `quality master\DP- liquid penetrant test inspection report.PNG`
- **Resolution:** 1151 × 622

#### Visible labels and candidate field names

- Heat No
- T est Standard
- Acceptance Std
- Date of Test
- Method
- Penetrant Type
- Developer Type
- Initial Cleaning Method
- ppyethod for Penerant
- Penetrant Cinell Time
- Liquid Penetrant Test Inspection Report
- Customer
- Area Tested
- State Of Test
- Surface Terng
- Apg Method for Developer
- Development Time
- ( Time start after developer
- Solvent Class
- MPS
- Examination Time
- Final Insp Time
- After Development time elased
- Light Indensity
- Post Cleaning
- No
- Cleaner
- Penetrant
- Developer
- Product
- Description
- Heatno
- OA_No
- Remarks
- Call Generate
- Surface Condition
- Material Thickness
- Material Group
- Control No
- r SIGN
- HITN Repon
- & Customer I
- Reports
- HIT Severon
- Beport
- ALL ACCESSIBLE AREA

#### Visible actions

- Delete
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-124 — internal rejection retrive

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for internal rejection retrive.
- **Screenshot:** `quality master\internal rejection retrive.PNG`
- **Resolution:** 836 × 510

#### Visible labels and candidate field names

- Product
- Rejection Retrieve' Entry
- Heatno
- Reiected
- Quantity

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-125 — MP number edit view -magnetic partical test view

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of MP number edit view -magnetic partical test view information.
- **Screenshot:** `quality master\MP number edit view -magnetic partical test view.PNG`
- **Resolution:** 837 × 546

#### Visible labels and candidate field names

- Magneic Pamc/e Test View
- Reportno
- Heatno
- Product
- Description
- Mpno
- DC Date
- WO # Srlno Charge UniOate of Test
- Drawing No

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-126 — mp test inspecton report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy mp test inspecton report output.
- **Screenshot:** `quality master\mp test inspecton report.PNG`
- **Resolution:** 1210 × 632

#### Visible labels and candidate field names

- Magnetic Particle Test Inspection Report
- Customer
- Specification
- Heat
- Procedure Rei
- T est Standard
- Accptance Std
- Date of Test
- Equipment Type
- Equig Make
- Equig Calibration Due Date
- Magnetisation Type
- Type of Current
- Amperes
- Prod Spacing
- Lifting Power
- Panicle Type
- Panicle Make, Batch No & ExpDt)
- Product
- Area Tested
- Surface Condition
- Material Thickness
- Method
- Equipment ID
- Control No
- Light Indenfl
- Background Darkness
- Type of Indicator
- pie indicator
- Path Concentration Level
- Descri
- yon
- Direction
- Heatno
- Grade
- Remarks
- Observation NO RELEVANT INDICATION
- Panicle Apg Method
- Contrast Paint
- Residual Magnetism
- From Date
- Fl To Date
- Beport
- Non Fluorescent
- Call Gene rate
- Stage of Test
- Surface Temperature
- Examination Method
- MPS No
- Material Group & CSL
- Inspected By
- Desigination_Opr
- Approved by
- Desigination_lncrg

#### Visible actions

- Delete
- REPORT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-127 — mp test number entry

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for mp test number entry.
- **Screenshot:** `quality master\mp test number entry.PNG`
- **Resolution:** 839 × 476

#### Visible labels and candidate field names

- Heatno
- Magnetic Particle Test Number Entry
- Grade
- Product
- Description
- Drawing
- MP View
- WIP
- Baln
- MP NUMBER AUTOGENERATE

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-128 — non confirmative report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy non confirmative report output.
- **Screenshot:** `quality master\non confirmative report.PNG`
- **Resolution:** 1044 × 672

#### Visible labels and candidate field names

- Nc r
- No
- NC Qty
- Non Conformance R eport
- Ncr Date
- Cust. date
- Cause Analysed Date
- Action Da te
- Dispositon
- Reason for Not dosed
- Img
- Product
- Heat No Flag
- Issused dept
- Issue to Dept
- Root Cause Analysed
- Root Cause Analysed By
- Preventve Correctve Acton
- Acton By
- Verificaton
- Verrificaton Date
- Temp_allon
- Close Date
- CAPA Date
- update
- Status
- Approved
- From Date
- NCR Register
- To Date
- NCR Pending
- Excel
- Despatch as on Date

#### Visible actions

- Delete

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-129 — radiography evaluation report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy radiography evaluation report output.
- **Screenshot:** `quality master\radiography evaluation report.PNG`
- **Resolution:** 905 × 578

#### Visible labels and candidate field names

- Reponno
- Shoot
- Grade
- T estdate
- Strength
- T echnique
- Area Coverag
- Rdate
- Radiography Eüaluation Report
- Drawing
- T hickness
- Source Size
- Lead Thickness Front
- Lead Thickness Back
- Exposure Tim
- Evaluation AsPer
- Procedure
- Acceptance
- RT Inspected By
- 101 Designation
- FS Sensitivit SFD
- Stage of Test
- RSS No
- Srlno Location
- Remarks
- Source Film T
- Film Size cm/lnch
- Viewing
- Findin s
- Density
- Min Max
- Approved
- Desigination
- Classification
- Betatron
- RT COMP
- FINAL
- Sevem Rep

#### Visible actions

- Screen
- Copy
- Delete

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-130 — radiography test number entry

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for radiography test number entry.
- **Screenshot:** `quality master\radiography test number entry.PNG`
- **Resolution:** 1078 × 500

#### Visible labels and candidate field names

- RADIOGRAPHY TEST NUNIBER ENTRY
- Entry Date
- RT No
- OAN0
- Rand
- coso
- Heatno
- Grade
- From Date
- Product
- Description
- Drawing
- WIP
- Begister
- aetatron
- Code
- Beport

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-131 — RT number edit view - special requirement master edit

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for RT number edit view - special requirement master edit.
- **Screenshot:** `quality master\RT number edit view - special requirement master edit.PNG`
- **Resolution:** 1326 × 562

#### Visible labels and candidate field names

- Heatno Ccode
- Special Requirment Master Edit
- Product
- Desc
- RLN0
- Fresh RT
- 82 sqi
- COSO sq
- Re Shoot 1
- 182 sq sq
- Re Shoot 2
- 182Sq sq
- Welding Rod
- 5 mm
- 4 mm
- Sup]nvNo
- Desp Date
- HEATNO
- F rom Date
- To Date
- Register

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-132 — stage wise casting rejection entry

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for stage wise casting rejection entry.
- **Screenshot:** `quality master\stage wise casting rejection entry.PNG`
- **Resolution:** 829 × 500

#### Visible labels and candidate field names

- 15,' 69/2026
- Stage
- Des
- Wise
- Baln
- Casting
- s
- Rejection
- Reason
- Entry
- Responsible
- De artrnent
- Grade
- Heatno
- Product
- Poured
- Nam
- Ree
- Person
- Reiecting

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-133 — sub modules

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the quality master functions visible in the legacy application.
- **Screenshot:** `quality master\sub modules.PNG`
- **Resolution:** 957 × 743

#### Visible submodules/menu options

- RT NUMBER ENTRY
- MP NUMBER ENTRY
- DP NUMBER ENTRY
- ULTRASONIC TEST ENTRY
- RT EVALUATION REPORT
- DP TEST REPORT
- MP TEST REPORT
- UT TEST REPORT
- STAGE WISE INTERNAL REJECTION ENTRY
- CUSTOMER REJECTIONS
- INTERNAL REJECTION RETRIVE
- NON CONFORMITY REPORT
- RT NUMBER EDIT / VIEW
- MP NUMBER EDIT / VIEW
- DP NUMBER EDIT / VIEW
- ULTRASONIC EDIT / VIEW
- FIRST SECOND STAGE INSPECTION REPORT
- REJECTION ANALYSIS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-134 — ultra sonic edit view - test view

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of ultra sonic edit view - test view information.
- **Screenshot:** `quality master\ultra sonic edit view - test view.PNG`
- **Resolution:** 997 × 551

#### Visible labels and candidate field names

- Heatno
- P roduct
- U/frasonic Test View
- Description
- DC Date
- WO # Srlno Charge Unit Date of Test Last Modified
- Drawing No
- grade

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-135 — ultra sonic test number entry

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for ultra sonic test number entry.
- **Screenshot:** `quality master\ultra sonic test number entry.PNG`
- **Resolution:** 822 × 492

#### Visible labels and candidate field names

- Heatno
- Ultra Sonic Test Number Entry
- Product
- Description
- UT NUMBER AUTOGENERATE
- Drawing
- UT Vie„
- WIP
- Baln

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-136 — UT test inspection report

- **Module:** Quality Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy UT test inspection report output.
- **Screenshot:** `quality master\UT test inspection report.PNG`
- **Resolution:** 991 × 594

#### Visible labels and candidate field names

- Ultrasonic Test Particle Test Inspection Entry
- Fl,F9 Date
- Customer
- Specification
- Heat.No
- Equipment Make
- Prob Size & Frequency
- Scanning
- Range
- Calibration Standard
- Basic Calibration Block
- Technique
- Couplant
- Su rface Condition
- Thickness
- Procedu re Ref
- Acceptance Standard
- Slno
- Result
- Remark
- Product
- Description
- Drawing
- Date of Insp
- HEAT No Report
- Call Generate
- Heat No
- HEAT No Report - New
- In s pected By [¯y::] Apprcwed By
- NO RECORDABLE INDICATIONS ULTRASONIC TEST
- Des igination
- Sign

#### Visible actions

- Report
- Delete
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Sales Mater

Dispatch planning, advice, stopping, invoicing, supplementary/other invoices and sales reports.

### Visible submodules/options

- DESPATCH ADVICE
- DESPATCH STOPPING
- SALVAGE ADVICE
- INVOICE GENERATION
- SUPPLEMENTRY INVOICE GENERAL
- INVOICE EDIT
- DESPATCH ENTRY VIEW
- INVOICE PRINTING
- SALES REPORT
- OTHER INVOICE
- DESPATCH OFFERING
- DESPATCH OFFERING STOPPING
- INVOICE GENERATION PRODUCT

### LEG-137 — dispatch advice

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for dispatch advice.
- **Screenshot:** `sales mater\dispatch advice.PNG`
- **Resolution:** 870 × 590

#### Visible labels and candidate field names

- Despatch Advise
- Heat no
- R.T No
- Grade
- Cus t oner
- Remark
- Ir192
- spl
- C060
- O.A Desp
- Pour Reje Plan DespReady Baln Qty
- U.T No
- Desp
- Fl
- All
- O.A. No
- O.A Sl spl f
- Grade Adv
- Non Doc
- T ransport
- Advice New
- OespVaIue I Grade Abs

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-138 — dispatch entry view

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for dispatch entry view.
- **Screenshot:** `sales mater\dispatch entry view.PNG`
- **Resolution:** 822 × 521

#### Visible labels and candidate field names

- Advice N
- Advice Dat
- Ccode Heatno
- Despatch View
- Grade
- Product

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-139 — dispatch offering

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for dispatch offering.
- **Screenshot:** `sales mater\dispatch offering.PNG`
- **Resolution:** 960 × 567

#### Visible labels and candidate field names

- Despatch Offering
- Heat no
- R.T No
- Grade
- Cus t oner
- Remark
- Ir192
- spl
- Pour Reje
- Desp
- Plan
- Ready Baln
- Qty
- U.T No
- Wt. Kg
- O.A. No
- O.A Sispl
- Fl
- C060
- FIR
- FIR-Nevv
- T ransport
- Remar

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-140 — dispatch offiring stopping - advice planning stop view

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays dispatch offiring stopping - advice planning stop view information for operational enquiry.
- **Screenshot:** `sales mater\dispatch offiring stopping - advice planning stop view.PNG`
- **Resolution:** 966 × 587

#### Visible labels and candidate field names

- Advice No
- Heat no
- ADVICE PLANNING STOP VIEW
- P roduct
- Grade
- Rtno
- FIR QTY Wei ht
- Pono
- Srln
- Advice Date

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-141 — dispatch stopping

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for dispatch stopping.
- **Screenshot:** `sales mater\dispatch stopping.PNG`
- **Resolution:** 868 × 560

#### Visible labels and candidate field names

- WINDOWI
- Product Heatno
- Advice No
- Advice Date
- Grade
- Despatch Stopping
- Rtno
- D es Wei ht
- Pono
- Oano SrInSto

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-142 — invoice edit

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for invoice edit.
- **Screenshot:** `sales mater\invoice edit.PNG`
- **Resolution:** 826 × 506

#### Visible labels and candidate field names

- Oate
- Cust Acode
- Qty
- Invoice Edit
- Weight
- Value
- Assess value
- RT sq Inch

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-143 — invoice generation report

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy invoice generation report output.
- **Screenshot:** `sales mater\invoice generation report.PNG`
- **Resolution:** 843 × 520

#### Visible labels and candidate field names

- Oano F9 Sr Product
- Extra charge
- Advice Dt
- Customer
- Non Document
- Invoice Generation
- Description
- Heat no
- Desp
- Weight
- Rate
- DA>Date
- Next
- D
- C
- Cust Wise
- Wise
- Genera t e
- Unit
- r All
- Exi t

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-144 — invoice generation

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for invoice generation.
- **Screenshot:** `sales mater\invoice generation.PNG`
- **Resolution:** 826 × 563

#### Visible labels and candidate field names

- Oano F9 Sr Product
- Extra charge
- Advice Dt
- Customer
- Non Document
- Invoice Generation
- Description
- Heat no
- Desp
- Weight
- Rate
- DA>Date
- Next
- D
- C
- Cust Wise
- Wise
- Genera t e
- Unit
- r All
- Exi t

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-145 — invoice printing

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy invoice printing output.
- **Screenshot:** `sales mater\invoice printing.PNG`
- **Resolution:** 735 × 626

#### Visible labels and candidate field names

- Invoice And Delivery Challan
- Date
- To Date
- Cust
- Addres Show
- *alveworks Invoice
- BHEL Invoice
- Customer
- Copies
- Printer
- E-INVOICE - WITH HEATNO
- E-INVOICE-WITH HEATNO ( Kg )
- INVOICE - WITH HEATNO
- mv-WITH HEATNO ( Kg )

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-146 — other invoice

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for other invoice.
- **Screenshot:** `sales mater\other invoice.PNG`
- **Resolution:** 866 × 513

#### Visible labels and candidate field names

- DC_No_
- DC_Date_
- Description
- Goode
- Fom Z
- Assessvalue
- Cess Z
- S]4Cessz
- Freight Amt
- T otal Amt
- OTHER INUOICE
- CustomeL
- Order ND
- Remarks Fl
- T ransport
- Time of Issue
- Time Of Removal
- Rounded Amt
- Valua

#### Visible actions

- Delete
- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-147 — sales report

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy sales report output.
- **Screenshot:** `sales mater\sales report.PNG`
- **Resolution:** 911 × 556

#### Visible labels and candidate field names

- From Date
- Date
- Sales
- 15,' 69/2026
- To
- Customer
- RT Despatch Wt Summary
- Cust,Grade summary value
- Cust,Grade summary Wt,ualue
- Delivery Analysis
- URT Report
- Carbon Steel
- BGI Dailybook Repot
- Sales Beport Alloy wise
- Export Sales Repot Alloy wise
- Sales Repot Customer wise
- Export Sales Repot Customer wise
- T ax Wise Invoice Abstract
- SUPPLEMENTRY
- DC Repot Customer wise
- FORM 10 REGISTER
- SALES TURNOVER
- Cust,Grade Wise Despatch
- Pending Bill Statement
- Steel Wise ADvice Repot
- Qescpatch Advice Details
- Payment Receiving
- Alloys Wise
- Po . No Wise Desp
- BHEL DC Details
- OTHER CUST DC Details
- OTHER Charges Register
- No Wise Despatch Register
- Invoice Type
- File
- CUSTOMER,GRRDE WIP
- Pending Bill Cust Wise
- C-Form Abstract
- Supplementary
- Path
- CUST
- & GRADE
- WISE
- All

#### Visible actions

- Report
- Screen
- Clear
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-148 — salvage advice

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for salvage advice.
- **Screenshot:** `sales mater\salvage advice.PNG`
- **Resolution:** 839 × 489

#### Visible labels and candidate field names

- Salvage Desp. Advise
- customer
- Heat no
- Select All
- age
- O.A Desp
- Desp Ready Baln Qty
- Desp
- Wt. Kg
- O.A.NO O.A Sl forma Bal
- Fl
- Despatch Advise

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-149 — sub modules

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the sales mater functions visible in the legacy application.
- **Screenshot:** `sales mater\sub modules.PNG`
- **Resolution:** 919 × 686

#### Visible submodules/menu options

- DESPATCH ADVICE
- DESPATCH STOPPING
- SALVAGE ADVICE
- INVOICE GENERATION
- SUPPLEMENTRY INVOICE GENERAL
- INVOICE EDIT
- DESPATCH ENTRY VIEW
- INVOICE PRINTING
- SALES REPORT
- OTHER INVOICE
- DESPATCH OFFERING
- DESPATCH OFFERING STOPPING
- INVOICE GENERATION PRODUCT

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-150 — supplementary invoice generation

- **Module:** Sales Mater
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for supplementary invoice generation.
- **Screenshot:** `sales mater\supplementary invoice generation.PNG`
- **Resolution:** 833 × 524

#### Visible labels and candidate field names

- Rate Revision Supplementry
- DCNo
- • 910/26-27
- Date
- Customer
- Alloy
- Remarks
- FS Editor
- Invoice
- Surcharge
- Total
- Rounded Total
- Sava

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Stores Master

Stores reference masters, purchase, receipt, issue/return, material rejection and stock reporting.

### Visible submodules/options

- MASTER
- PURCHASE
- RECEIPT
- ISSUES
- MATERIAL REJECTIONS
- STOCK REPORTS
- ISSUES ENTRY
- ISSUES RETURNS
- ISSUES DETAILS EDIT
- ISSUES REPORTS
- SUPPLIER MASTER
- ITEM MASTER
- DEPARTMENT MASTER
- GROUP MASTER
- OPENING STOCK
- REPORTS
- YEARLY HOUSE KEEPING
- RATE MASTER
- UNIT MASTER
- REJECTION ENTRY
- REJECTION DETAILS EDIT
- REJECTION INVOICE
- REJECTION REPORTS
- P.o. ENTRY
- SUPPLIER RATING
- P.o. DETAILS EDIT
- PO.REPORTS
- RECEIPT ENTRY
- RECEIPT BILL AMOUNT
- RECEIPT DETAILS EDIT
- RECEIPT REPORTS

### LEG-151 — sub modules

- **Module:** Stores Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\sub modules.PNG`
- **Resolution:** 939 × 689

#### Visible submodules/menu options

- MASTER
- PURCHASE
- RECEIPT
- ISSUES
- MATERIAL REJECTIONS
- STOCK REPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-152 — issues details edit-view

- **Module:** Stores Master
- **Subgroup:** issues
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of issues details edit-view information.
- **Screenshot:** `stores master\issues\issues details edit-view.PNG`
- **Resolution:** 855 × 510

#### Visible labels and candidate field names

- Sli
- No
- Issued On
- i am Coda
- Issues Entry Edit Uiew
- iam Desc
- artmant
- Valua
- Sava

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-153 — issues entry

- **Module:** Stores Master
- **Subgroup:** issues
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for issues entry.
- **Screenshot:** `stores master\issues\issues entry.PNG`
- **Resolution:** 1166 × 519

#### Visible labels and candidate field names

- [MIS]
- Issues # 5
- Cu rrent Stock
- Value
- DAüY ISSUES ENTRY
- Department
- Closing Stock
- Item Unit
- Mat Req Entry

#### Visible actions

- Delete
- Screen

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-154 — issues report

- **Module:** Stores Master
- **Subgroup:** issues
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy issues report output.
- **Screenshot:** `stores master\issues\issues report.PNG`
- **Resolution:** 859 × 526

#### Visible labels and candidate field names

- ISSUE REPORTS
- DEPARTMENT
- From Date
- To Date 15/U/2026
- Issues Summary Repot
- Issues Register Repot
- ITEM GROUP
- Issues Return Register Repot

#### Visible actions

- EXIT
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-155 — issues return

- **Module:** Stores Master
- **Subgroup:** issues
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for issues return.
- **Screenshot:** `stores master\issues\issues return.PNG`
- **Resolution:** 855 × 520

#### Visible labels and candidate field names

- [MIS]
- DAILY ISSUES RETURN ENTRY
- Issues #
- Current Stock
- Value
- Closing Stock
- Item Unit
- Department

#### Visible actions

- Exit
- Screen

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-156 — sub module

- **Module:** Stores Master
- **Subgroup:** issues
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\issues\sub module.PNG`
- **Resolution:** 779 × 552

#### Visible submodules/menu options

- ISSUES ENTRY
- ISSUES RETURNS
- ISSUES DETAILS EDIT
- ISSUES REPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-157 — department master

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for department master.
- **Screenshot:** `stores master\master\department master.PNG`
- **Resolution:** 747 × 601

#### Visible labels and candidate field names

- Code
- DEPARTMENT
- Name
- MASTER
- MELTING
- MOULDING
- MAINTENANCE
- PATTERN SHOP
- OFFICE
- OTHERS
- CVL
- POWER
- PACKING
- POURING
- Short
- MELT
- MOULD
- MAINTEN
- PATSHOP
- OFF

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-158 — group master delivery delay

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for group master delivery delay.
- **Screenshot:** `stores master\master\group master delivery delay.PNG`
- **Resolution:** 770 × 618

#### Visible labels and candidate field names

- GROUP MASTER
- Vendor Rating Delivery Delay Values Entry
- From Days To Days
- MELTING MATERIALS
- MOULDING MATERIALS
- PROCESS MATERIALS
- CONSUMAaLE MATERA
- MACHINERY MATERIALS
- FETING MATERIALS
- PATTERN SHOP
- OTHERS
- MASTER
- Name
- RAO ALLOYS
- LI NORY RETURNS
- FRACTORY SLEEVES
- Delivery
- Delay
- Days
- Ualue
- LTING OTHERS
- TERN SHOP OTHERS
- Entry

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-159 — group master

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for group master.
- **Screenshot:** `stores master\master\group master.PNG`
- **Resolution:** 761 × 596

#### Visible labels and candidate field names

- GROUP MASTER
- ITEM GROUP
- Short
- Entry
- SUBGROUP
- MASTER
- Name
- MELTING MATERIALS
- MOULDING MATERIALS
- PROCESS MATERIALS
- CONSUMAaLE MATERIALS
- MACHINERY MATERIALS
- FETING MATERIALS
- PATTERN SHOP
- OTHERS
- FERRO ALLOYS
- FOUNDRY RETURNS
- REFRACTORY SLEEVES
- MELTING OTHERS
- PATTERN SHOP OTHERS
- Delivery
- Delay
- Days
- Ualue

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-160 — item master

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for item master.
- **Screenshot:** `stores master\master\item master.PNG`
- **Resolution:** 721 × 508

#### Visible labels and candidate field names

- Fl,F9
- Item Code
- Name
- Shon
- Department
- Matl Type
- Item Group
- tem SubGroup
- Shelf Life Days
- ITEM MASTER
- Unit
- Re-order
- Maximum
- Minmum
- Code
- Per Day
- (IfReturns) Rate
- CHeading
- MIR r
- INSPECTION MASTER

#### Visible actions

- Delete
- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-161 — opening stock

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for opening stock.
- **Screenshot:** `stores master\master\opening stock.PNG`
- **Resolution:** 784 × 583

#### Visible labels and candidate field names

- Opening Stock
- Opening
- Enter the year Opening Date
- LOING ROO 7018-1 NICKEL SPL 40 MM
- Stock
- Details
- Opening Qty
- ooo
- Press Fl or Fg for Help
- Rate IUnit Opening Value
- Code
- FE005
- FE006
- FEOII
- FE012
- FE013
- FE018
- FE019
- FE022
- FE030
- FE031
- FE033
- Item Name
- ing Gringing Wheel SF
- eel Shots Shots Type-I
- uching Rod 9mm
- ucing Rod 8mm
- rc Cutting Rod -S mm
- eding Holder
- VyolAnti Rust OW 173 Oil
- using Torch
- utter E-1224
- utter aal-1022
- utter Kure k -1220
- LOING ROO -7018
- 40 MM wca
- so MM wca
- 13500 oo
- 8:13
- 1&40
- 14S&00
- SIS200

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-162 — rate master

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for rate master.
- **Screenshot:** `stores master\master\rate master.PNG`
- **Resolution:** 867 × 738

#### Visible labels and candidate field names

- Rate Master
- Supplier
- Item code
- Rate
- Detail
- Item Name
- Saue
- Execute
- Approved. Date
- Allow

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-163 — reports

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy reports output.
- **Screenshot:** `stores master\master\reports.PNG`
- **Resolution:** 804 × 561

#### Visible labels and candidate field names

- SUPPLIER
- From Date
- To Date 15/U/2026
- MASTER
- Yendor Approved List
- Item Master
- Minimum Level
- REPORTS
- DEPARTMENT
- ITEM GROUP
- Supplier List
- Group Wise Item Master
- Out of Self life Item
- Reorder Level
- Self life Item

#### Visible actions

- Clear
- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-164 — sub modules

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\master\sub modules.PNG`
- **Resolution:** 775 × 558

#### Visible submodules/menu options

- SUPPLIER MASTER
- ITEM MASTER
- DEPARTMENT MASTER
- GROUP MASTER
- OPENING STOCK
- REPORTS
- YEARLY HOUSE KEEPING
- RATE MASTER
- UNIT MASTER

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-165 — supplier

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for supplier.
- **Screenshot:** `stores master\master\supplier.PNG`
- **Resolution:** 875 × 508

#### Visible labels and candidate field names

- code
- Name
- Address
- City
- E-mail
- Credit Days
- GST No
- Ecc No
- Transpon
- Payment
- Tax Details
- Service App
- Range
- Postal Add
- [MIS]
- Press Fl or Fg for help
- Pincode
- Tele
- SUPPLIER
- MASTER
- Shon
- Contact Person
- State
- Supplier Type
- Issue Dept
- Phone
- CST No
- Desp Mode
- Delivery Cond
- Document
- Packing
- Status
- Remarks 1
- Approval Basis
- Division
- Cus.House
- Menu/Delar
- Vendor appr

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-166 — unit master

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for unit master.
- **Screenshot:** `stores master\master\unit master.PNG`
- **Resolution:** 582 × 609

#### Visible labels and candidate field names

- WINDOWI
- Unit Master
- Name
- INDIA PRIVATE LIMITEC
- Short

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-167 — yearly house keeping

- **Module:** Stores Master
- **Subgroup:** master
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for yearly house keeping.
- **Screenshot:** `stores master\master\yearly house keeping.PNG`
- **Resolution:** 700 × 538

#### Visible labels and candidate field names

- JK
- HOUSEKEEPING
- Stock
- Carry
- Forward
- Process
- Enter
- Yearly
- Opening
- Date

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-168 — rejection entry

- **Module:** Stores Master
- **Subgroup:** material rejection
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for rejection entry.
- **Screenshot:** `stores master\material rejection\rejection entry.PNG`
- **Resolution:** 853 × 516

#### Visible labels and candidate field names

- D.C. No
- P.o. No
- Descritpion
- B.E.D%
- Tax type
- Payment
- Doc. Through
- Iss Time
- Sale Tax
- Total Quantity
- Total Amount
- [MIS]
- MATERIAL REJECTION ENTRY
- Date
- Cess&h.cess %
- Tax %
- Value
- Rmv Time
- Trans
- Sub Total Amt
- Net Total
- G.R. No
- Other Charges %
- (T rtmgJP&F)
- Transport
- Packing
- Remarks
- Amount

#### Visible actions

- Exit
- Delete

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-169 — rejection invoice

- **Module:** Stores Master
- **Subgroup:** material rejection
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for rejection invoice.
- **Screenshot:** `stores master\material rejection\rejection invoice.PNG`
- **Resolution:** 534 × 459

#### Visible labels and candidate field names

- Rejection Print
- DC u

#### Visible actions

- Screen
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-170 — rejection report

- **Module:** Stores Master
- **Subgroup:** material rejection
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy rejection report output.
- **Screenshot:** `stores master\material rejection\rejection report.PNG`
- **Resolution:** 763 × 507

#### Visible labels and candidate field names

- SUPPLIER
- From Date
- To Date 15/U/2026
- REJECTION REPORTS
- Rejection Register

#### Visible actions

- Clear
- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-171 — sub modules

- **Module:** Stores Master
- **Subgroup:** material rejection
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\material rejection\sub modules.PNG`
- **Resolution:** 757 × 559

#### Visible submodules/menu options

- REJECTION ENTRY
- REJECTION DETAILS EDIT
- REJECTION INVOICE
- REJECTION REPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-172 — po details edit

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays po details edit information for operational enquiry.
- **Screenshot:** `stores master\purchase\po details edit.PNG`
- **Resolution:** 852 × 518

#### Visible labels and candidate field names

- PONo
- P O Data
- iam Coda SI
- Item Desc
- Receiva
- Ad •ust
- Baln
- Supplier
- P O Data From
- Sava

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-173 — po edit 2

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for po edit 2.
- **Screenshot:** `stores master\purchase\po edit 2.PNG`
- **Resolution:** 834 × 537

#### Visible labels and candidate field names

- PONo
- P O Data
- iam Coda SI
- Receiva
- Ad ust
- Baln
- Ddat
- TC SL
- Supplier
- P O Data From
- Sava

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-174 — po master

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for po master.
- **Screenshot:** `stores master\purchase\po master.PNG`
- **Resolution:** 834 × 519

#### Visible labels and candidate field names

- 0073/26-27'
- Supplier
- [MIS]
- PURCHASE ORDER
- ENTRY
- Fl press Notepad
- PO. Date
- our Ret
- Your Ret
- Delv Date Tolerance Base
- Disc
- Qty
- Amen
- Value
- F4 PRODUCT MATERIAL Fl Editor
- Item spec SNO Remarks
- Quotation No
- SGST
- GST
- Packing
- Insurance
- Transpon
- Other Rem
- Impon Repon
- Freight
- Payment
- Fl Remarks
- Validity Days
- Repon
- PO Type
- Remarks Repoll Sack

#### Visible actions

- Report
- Delete
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-175 — po reports

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy po reports output.
- **Screenshot:** `stores master\purchase\po reports.PNG`
- **Resolution:** 827 × 499

#### Visible labels and candidate field names

- SUPPLIER
- Po Type
- O Indent Register
- From Date
- Pending Repot
- Pending Item Wise
- To Date 15/0g/2026
- PURCHASE REPORTS
- DEPARTMENT
- ITEM GROUP
- O Register
- Type wise Register

#### Visible actions

- Clear
- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-176 — sub modules

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\purchase\sub modules.PNG`
- **Resolution:** 766 × 570

#### Visible submodules/menu options

- P.o. ENTRY
- SUPPLIER RATING
- P.o. DETAILS EDIT
- PO.REPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-177 — suppliar rating - vendor rating form

- **Module:** Stores Master
- **Subgroup:** purchase
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for suppliar rating - vendor rating form.
- **Screenshot:** `stores master\purchase\suppliar rating - vendor rating form.PNG`
- **Resolution:** 1057 × 727

#### Visible labels and candidate field names

- WINDOWI
- VENDOR RATING FORM
- From
- Vendor Name
- aty
- Accepted
- Reje cted
- O rdered
- atyord
- Received
- Qualtr,6
- Delivery %

#### Visible actions

- Generate
- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-178 — receipt bill amount

- **Module:** Stores Master
- **Subgroup:** receipt
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for receipt bill amount.
- **Screenshot:** `stores master\receipt\receipt bill amount.PNG`
- **Resolution:** 863 × 530

#### Visible labels and candidate field names

- MR Date
- Material
- Supplier
- Receipt Bill Amount Edit
- DCDate
- Bill Date
- Bill Amount
- RG Pati
- RG Pat2
- _YA_EJ

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-179 — receipt entry

- **Module:** Stores Master
- **Subgroup:** receipt
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for receipt entry.
- **Screenshot:** `stores master\receipt\receipt entry.PNG`
- **Resolution:** 820 × 548

#### Visible labels and candidate field names

- Item Master Supplier Master
- Delv Date
- P.O.No
- GOODS
- Date
- RECEIPT ENTRY
- PcType
- GRN #
- PO Balance
- sr
- % Base
- Qty Supl
- Qty Recv
- Rate
- E.Bill #
- Amount
- E.B Date
- TCNO
- Insp No
- Ek Type
- Supplied
- ManuDate
- Descri tpion
- Direct Dealer
- Supplier
- IndSno
- P & F others
- Excise Added to
- Bill Amount
- Cess / SH.Cess Added
- Bill Amount & Landcost
- Taxccde UAT
- Tax Type
- Order
- Amen
- Bill Date
- Round off %
- Transport
- Charge
- Receipt
- PO Delv.Date
- Balance
- aill Amt
- GRN A mount
- PO %Base
- Purchase Copy
- Accounts Copy
- Extra Copy
- Lab Copy

#### Visible actions

- Amendment Dedif Note
- Delete
- Screen
- Clear

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-180 — receipt report

- **Module:** Stores Master
- **Subgroup:** receipt
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy receipt report output.
- **Screenshot:** `stores master\receipt\receipt report.PNG`
- **Resolution:** 847 × 511

#### Visible labels and candidate field names

- SUPPLIER
- From Date
- To Date 15/032026
- Supp Type
- cise Type
- Purchase Bill Repon
- EO Wise Material Repon
- PURCHASE REPORTS
- Receipt Register Repon
- Receipt Summary Repon
- PurchaseAnalysis
- Excise Value Wise Repon
- Material Wise Landcost Details
- Material Wise Landcost Monthwise
- DEPARTMENT
- ITEM GROUP

#### Visible actions

- Clear
- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-181 — recepit details edit

- **Module:** Stores Master
- **Subgroup:** receipt
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays recepit details edit information for operational enquiry.
- **Screenshot:** `stores master\receipt\recepit details edit.PNG`
- **Resolution:** 831 × 486

#### Visible labels and candidate field names

- M. R No Su"ier
- Receipt Fr om
- Bill No
- Bill Date
- PIO No
- Material Receipt Details Edit
- Item Descnpbon
- Supplier

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-182 — sub module

- **Module:** Stores Master
- **Subgroup:** receipt
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the stores master functions visible in the legacy application.
- **Screenshot:** `stores master\receipt\sub module.PNG`
- **Resolution:** 787 × 545

#### Visible submodules/menu options

- RECEIPT ENTRY
- RECEIPT BILL AMOUNT
- RECEIPT DETAILS EDIT
- RECEIPT REPORTS

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-183 — stock report

- **Module:** Stores Master
- **Subgroup:** stock report
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy stock report output.
- **Screenshot:** `stores master\stock report\stock report.PNG`
- **Resolution:** 835 × 530

#### Visible labels and candidate field names

- [MIS]
- STORES REPORTS
- SUPPLIER
- DEPARTMENT
- From Date
- To Date 15/U/2026
- Pending Repot
- Pending Item Wise
- Beceipt Register Repot
- Beceipt Summary Repot
- Month"ise Purchase
- Form " C " Register
- Bate Analysis Line Graph
- Comparative Statement
- Bank Stock Suppliers only
- Issues Summary Repot
- Issues Register Repot
- Issues Return Register Repot
- Beiection Register Repot
- pending Bills To Receive
- Supplier Master List
- Item Master List
- Monthly Stock Repot
- Daily Stock Repot
- BIN CARD STOCK
- Minimum Order Level Repot
- GRIR Register Repot
- Current Stock Repot
- Bank Stock Repot
- Issues Summary For Bank Items
- Form " C" Letter
- Sand and Diesel Consumption
- O Indent Register
- Vendor Master
- Form "
- Register

#### Visible actions

- Clear
- EXIT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Subcontract Master

External-process offering, receipt, reconciliation, billing, payment, pending and reporting.

### Visible submodules/options

- CASTING PROCESS ENTRY/REPORT
- SUBCONTRACT RECEIPT
- ARC/GAS CUTTING ENTRY
- CASTING RECEIPT VIEW
- CASTING PROCESS VIEW
- SUB CONT. PENDING
- SUB CONT. INWARD OUTWARD REPORT
- CORE SHOP BILL ENTRY
- SUBCONTRACT PAYMENT
- SUBCONTRACT BILL ENTRY
- JJ FORM
- SUBCONTRACT OFFERING ENTRY

### LEG-184 — ARC-CAS cutting entry

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for ARC-CAS cutting entry.
- **Screenshot:** `subcontract master\ARC-CAS cutting entry.PNG`
- **Resolution:** 1136 × 610

#### Visible labels and candidate field names

- 15,' 69/2026
- Date
- Contractor
- Heat. No
- ARC / GAS CUTTING BILL ENTRY
- Process
- Pending
- srl.No
- aal
- Cutting
- Total W

#### Visible actions

- CLEAR
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-185 — casting process entry

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for casting process entry.
- **Screenshot:** `subcontract master\casting process entry.PNG`
- **Resolution:** 847 × 568

#### Visible labels and candidate field names

- Date
- Heatno
- Product
- Alrea
- Subcontract Code
- Internal Or Sub Contract
- Process
- Name
- Beport
- Grade
- Pour Date
- S ample
- Remarks
- roc_
- Pc_wt
- Dc Raised
- Flag
- WON0
- Dcno
- Code
- Dcdate
- Send
- Commited
- Send Date
- Req_Dt & Remark
- Last D.C u
- Already Sent And Status
- Descri
- tion
- Contract
- Qnt
- Retumed
- None

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-186 — casting process view

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays casting process view information for operational enquiry.
- **Screenshot:** `subcontract master\casting process view.PNG`
- **Resolution:** 807 × 509

#### Visible labels and candidate field names

- Dcdate
- Intrnel I Sub-Contract Casting Process Table
- Con
- Process Alloy M ac Heatn
- Product
- Heat No
- D.CNo
- D.cot
- Sub Contract

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-187 — casting receipt view

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Enquiry/view
- **Purpose:** Retrieves and displays casting receipt view information for operational enquiry.
- **Screenshot:** `subcontract master\casting receipt view.PNG`
- **Resolution:** 819 × 494

#### Visible labels and candidate field names

- Internel / Sub—contract Receipt Edit
- Sco& Prod_Et
- Grd*e Grd*e ny
- OQy
- Rec
- Bal _

#### Visible actions

- Save
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-188 — core shop bill entry

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for core shop bill entry.
- **Screenshot:** `subcontract master\core shop bill entry.PNG`
- **Resolution:** 1028 × 550

#### Visible labels and candidate field names

- 15,' 69/2026
- From Date
- Heat.No
- Subcontractor
- CORE
- To Date
- SHOP
- BILL
- ENTRY
- Core Details
- SAUE

#### Visible actions

- CLEAR
- Delete
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-189 — jj form

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for jj form.
- **Screenshot:** `subcontract master\jj form.PNG`
- **Resolution:** 868 × 555

#### Visible labels and candidate field names

- WINDOWI
- FORM JJ ENTRY
- SUBCONTRACT
- VECHILE NO
- F9 - Subcontractor, Fl Customer
- ORIGINAL
- DUPLICATE
- TRIPLICATE
- QUADRUPLICATE

#### Visible actions

- REPORT

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-190 — sub contract receipt

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for sub contract receipt.
- **Screenshot:** `subcontract master\sub contract receipt.PNG`
- **Resolution:** 794 × 551

#### Visible labels and candidate field names

- Date
- Min No
- Subcontract Receipt
- RT Receive
- Flag
- Sc, _wt
- Bala Rece Rec
- ei t
- Receive
- No n e

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-191 — sub module

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the subcontract master functions visible in the legacy application.
- **Screenshot:** `subcontract master\sub module.PNG`
- **Resolution:** 915 × 669

#### Visible submodules/menu options

- CASTING PROCESS ENTRY/REPORT
- SUBCONTRACT RECEIPT
- ARC/GAS CUTTING ENTRY
- CASTING RECEIPT VIEW
- CASTING PROCESS VIEW
- SUB CONT. PENDING
- SUB CONT. INWARD OUTWARD REPORT
- CORE SHOP BILL ENTRY
- SUBCONTRACT PAYMENT
- SUBCONTRACT BILL ENTRY
- JJ FORM
- SUBCONTRACT OFFERING ENTRY

#### Visible actions

- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-192 — subcontract bill entry

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for subcontract bill entry.
- **Screenshot:** `subcontract master\subcontract bill entry.PNG`
- **Resolution:** 912 × 530

#### Visible labels and candidate field names

- 15,' 69/2026
- Date
- Heat. No
- SUBCONTRACTOR BILL ENTRY
- Contractor
- Total W

#### Visible actions

- CLEAR
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-193 — subcontract inward and outward report

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy subcontract inward and outward report output.
- **Screenshot:** `subcontract master\subcontract inward and outward report.PNG`
- **Resolution:** 584 × 365

#### Visible labels and candidate field names

- Subcontract
- ubContracter
- Processing
- Dcno
- From Date
- Outward Details
- Outward
- Inward
- Details
- To Date
- Inward Details
- Abstract
- Product

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-194 — subcontract payment

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for subcontract payment.
- **Screenshot:** `subcontract master\subcontract payment.PNG`
- **Resolution:** 866 × 492

#### Visible labels and candidate field names

- Customer
- [Contractor DC Wise Abstract]
- Product
- Grade
- Contractor
- Contract Payment Bill
- Contract Balance
- F Contract Offering
- Process
- Contract Payment For Fettling Bill
- Heat Nc
- FROM  TO

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-195 — subcontract pending

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for subcontract pending.
- **Screenshot:** `subcontract master\subcontract pending.PNG`
- **Resolution:** 761 × 536

#### Visible labels and candidate field names

- Subcontract Pedning To Receuied
- Subcontracter
- Processing
- From Days g
- Abstract
- [i¯j-j_
- From Date
- Grade
- Contractor
- Product
- Product wise
- Pending List
- Heat Not Fetl

#### Visible actions

- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-196 — subcontractor offiring entry

- **Module:** Subcontract Master
- **Subgroup:** None
- **Screen type:** Entry/master transaction
- **Purpose:** Captures or maintains information for subcontractor offiring entry.
- **Screenshot:** `subcontract master\subcontractor offiring entry.PNG`
- **Resolution:** 935 × 558

#### Visible labels and candidate field names

- 15,' 69/2026
- Date
- Heat. No
- SUBCONTRACTOR Offering ENTRY
- Contractor
- Total W

#### Visible actions

- CLEAR
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## System Master

System control tables, serial/format controls and direct operational edit/view utilities.

### Visible submodules/options

- RUNNING SERIAL NO CONTROL
- POUR TABLE
- DESPATCH TABLE
- INVOICE AMOUNT TABLE
- INTERNAL REJECTION TABLE
- CUSTOMER REJECTION TABLE
- MP EDIT
- UT EDIT
- DP EDIT
- CUSTOMER TABLE

### LEG-197 — custoer table

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for custoer table.
- **Screenshot:** `system master\custoer table.PNG`
- **Resolution:** 820 × 526

#### Visible labels and candidate field names

- Customer
- Master Edit
- Old Code
- Name
- Customer Code / Name
- Address 1

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-198 — customer rejection table

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for customer rejection table.
- **Screenshot:** `system master\customer rejection table.PNG`
- **Resolution:** 821 × 507

#### Visible labels and candidate field names

- Cdate
- R cod
- Customer Rejection Edit
- Product
- Grade
- Cast

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-199 — dispatch table

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for dispatch table.
- **Screenshot:** `system master\dispatch table.PNG`
- **Resolution:** 831 × 532

#### Visible labels and candidate field names

- Advice N
- Advice Dat
- Ccode Heatno
- Despatch View
- Grade
- Product

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-200 — DP edit - dye penetrant test view

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of DP edit - dye penetrant test view information.
- **Screenshot:** `system master\DP edit - dye penetrant test view.PNG`
- **Resolution:** 842 × 498

#### Visible labels and candidate field names

- Dye Penetrant Test View
- Heatno
- P roduct
- Description
- D pno
- DC Date
- WO # Srlno Charge
- Unit

#### Visible actions

- Report No

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-201 — internal rejection tab;le

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for internal rejection tab;le.
- **Screenshot:** `system master\internal rejection tab;le.PNG`
- **Resolution:** 852 × 516

#### Visible labels and candidate field names

- RS-Date
- DATE
- Code
- Heat
- Product
- Internal Rejection Edit
- Grade
- Cast
- e code

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-202 — invoice amount table

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for invoice amount table.
- **Screenshot:** `system master\invoice amount table.PNG`
- **Resolution:** 829 × 534

#### Visible labels and candidate field names

- Oate
- Cust Acode
- Qty
- Invoice Edit
- Weight
- Value
- Assess value
- RT sq Inch

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-203 — MP edit - magnetic particle test view

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of MP edit - magnetic particle test view information.
- **Screenshot:** `system master\MP edit - magnetic particle test view.PNG`
- **Resolution:** 845 × 493

#### Visible labels and candidate field names

- Magneic Pamc/e Test View
- Reportno
- Heatno
- Product
- Description
- Mpno
- DC Date
- WO # Srlno Charge UniOate of Test
- Drawing No

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-204 — pour table - pouring melting edit

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Application screen
- **Purpose:** Captures or maintains information for pour table - pouring melting edit.
- **Screenshot:** `system master\pour table - pouring melting edit.PNG`
- **Resolution:** 854 × 524

#### Visible labels and candidate field names

- Pourdate
- Product
- Cust
- Pouring Melting EDIT
- Produc
- Grade
- Pour Re- Des ch
- Balance
- O.ANO
- o. A sr Qty
- Only Stock

#### Visible actions

- Save

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-205 — report format no's - format control

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy report format no's - format control output.
- **Screenshot:** `system master\report format no's - format control.PNG`
- **Resolution:** 754 × 587

#### Visible labels and candidate field names

- WINDOWI
- Code
- CA
- DAP
- DPS
- DRG
- EWI
- Fromat # Control
- BREAK DOWN REPORT
- CALIBRATION REGISTER
- CUTTING LOG SHEET
- CONTRACT REVIEW
- DESPATCH ADVICE
- DESPATCH PLAN
- DAILY PLANNING SHEET
- UNMACHINED/PROOF MACHINED/FINAL
- DRAWING REGISTER
- EQUIMENTS REPORT
- REJECTION REPORT
- FINAL INSPECTION REPORT
- HISTORY CARD
- Format
- Beport
- Rey Rey Date

#### Visible actions

- Report Name
- Exit

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-206 — running serial no control -last printed dc

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Report/print
- **Purpose:** Produces or displays the legacy running serial no control -last printed dc output.
- **Screenshot:** `system master\running serial no control -last printed dc.PNG`
- **Resolution:** 858 × 518

#### Visible labels and candidate field names

- Last Printed Dc #
- Code Name
- Shon
- Last Dc u

#### Visible actions

- No action label was reliably detected in the screenshot.

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-207 — sub modules

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Navigation/menu
- **Purpose:** Provides navigation to the system master functions visible in the legacy application.
- **Screenshot:** `system master\sub modules.PNG`
- **Resolution:** 909 × 674

#### Visible submodules/menu options

- RUNNING SERIAL NO CONTROL
- POUR TABLE
- DESPATCH TABLE
- INVOICE AMOUNT TABLE
- INTERNAL REJECTION TABLE
- CUSTOMER REJECTION TABLE
- MP EDIT
- UT EDIT
- DP EDIT
- CUSTOMER TABLE

#### Visible actions

- REPORT FORMAT NO'S
- BACK

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

### LEG-208 — UT edit - ultrasonic test view

- **Module:** System Master
- **Subgroup:** None
- **Screen type:** Edit/view
- **Purpose:** Retrieves and permits authorized maintenance of UT edit - ultrasonic test view information.
- **Screenshot:** `system master\UT edit - ultrasonic test view.PNG`
- **Resolution:** 969 × 524

#### Visible labels and candidate field names

- Heatno
- P roduct
- U/frasonic Test View
- Description
- DC Date
- WO # Srlno Charge Unit Date of Test Last Modified
- Drawing No
- grade

#### Visible actions

- Report

#### Discovery notes

- Confirm which labels represent editable fields, calculated/display-only values, filters, table columns or report parameters.
- Confirm mandatory status, data type, source master, default, validation, permission, approval and audit behavior.
- Map retained fields to the relevant Phoenix phase/module; classify each as Retain, Modify, Add, Remove or Pending.

## Cross-module field-mapping template

Use this register during the application walkthrough:

| Legacy screen ID | Legacy label | Meaning | Data type | Mandatory | Lookup/source | Validation/calculation | Role/permission | Phoenix target | Decision | Evidence/status |
|---|---|---|---|---|---|---|---|---|---|---|
| LEG-___ | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Retain/Modify/Add/Remove/Pending | Pending walkthrough |

## Recommended walkthrough questions

1. What business event opens this screen, and which role performs it?
2. Which fields are mandatory, optional, derived or display-only?
3. What does F9 return, and which master or transaction supplies the values?
4. Which validations, calculations and duplicate checks run when saving?
5. What are the allowed statuses and transitions?
6. Who can create, edit, approve, cancel, delete, reverse, print and export?
7. What downstream records, reports or integrations consume the saved information?
8. What happens when an entry is incorrect after approval or downstream use?
9. Which records and attachments must be migrated to Phoenix?
10. What audit and retention rules apply?
