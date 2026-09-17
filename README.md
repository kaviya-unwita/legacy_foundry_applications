# SSA Foundry Modern Legacy Replica

Independent modern UI replica of the SSA Foundry legacy application (Oracle Forms). Menus, screens and fields follow the compiled legacy forms and the live legacy menu table. The original screenshot stays beside each modern screen as evidence.

## Run

```powershell
npm.cmd install
npm.cmd run dev
```

## Verify

```powershell
npm.cmd run check:coverage
npm.cmd run build
```

`check:coverage` checks that:

- all 208 screenshots exist
- every LEG id is represented exactly once, as a legacy form or a legacy menu
- every menu option opens a screen that runs the same legacy form
- every screen is reachable from the menu
- every required marker has legacy evidence

## Evidence and behavior

- **`public/data/legacy_source.json`** is the screen and field source. It was generated from the legacy application:
  - Menu tree: the live `MENUMASTER` table in the Oracle export.
  - Fields: prompts compiled into each `.fmx` form. A field is shown only when a screenshot, a format mask or a database column confirms it.
  - Input types and maximum lengths: format masks and the Oracle column definitions.
  - F9 lists, buttons, report names, tables written, delete keys and `CONTROL` document-number codes: the compiled form.
- **`public/data/SSA_Foundry_Legacy_Application_Screen_Catalog.md`** (screenshot OCR) supplies the screenshots and purpose text. It is the field source only for the 6 screens whose legacy form is not available. Those screens show an **Unverified** banner.
- **Older forms:** screens analysed from an older form, because the live menu target is missing, show an **older legacy form** banner.
- **Tabs:** screenshots that are pages of one legacy form, such as Customer 1–4 and Grade 1–6, are one screen with tabs and one saved record.
- **Required stars:** shown only where the form writes a NOT NULL column. Hover over a field to see its column, type and evidence.
- **F9:** shows the list-of-values definitions compiled into the legacy form. No rows are shown, because no database is connected.
- **Read-only forms** (no table writes) have no Save action.
- **Reports:** Report and Print actions name the legacy Oracle Reports. They are not executed.
- **Mock data only:** Save writes a local draft in the browser. Document numbers are simulated with a local counter per legacy `CONTROL` code. No production database is connected.
