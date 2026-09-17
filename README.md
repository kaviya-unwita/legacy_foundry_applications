# Legacy Foundry Applications — Modern Replica

Independent modern UI replicas of two legacy foundry ERPs, selectable from the **Application** switcher in the top bar: **SUN’s Foundry** (Oracle Forms) and **YES’s Foundry**. For SUN’s Foundry, menus, screens and fields follow the compiled legacy forms and the live legacy menu table. The original screenshot stays beside each modern screen as evidence.

## Run

```powershell
npm.cmd install
npm.cmd run dev
```

## URLs

Each application has its own path, so pages can be bookmarked and shared, and browser Back/Forward and refresh work.

| URL | Page |
|---|---|
| `/` | Redirects to `/sun` |
| `/sun`, `/yes` | Application dashboard |
| `/sun/menu/<module>/<option code>…` | Module menu or sub-menu, e.g. `/sun/menu/Stores%20Master/BB` |
| `/yes/menu/<module>/<submodule>` | e.g. `/yes/menu/Foundry%20Application/Masters` |
| `/sun/screen/<id>`, `/yes/screen/<id>` | Screen, e.g. `/sun/screen/LEG-086` |

Unknown links show a *Page not found* message. `check:coverage` verifies that every screen and menu URL of both applications round-trips.

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
- **`public/data/SUN_Foundry_Legacy_Application_Screen_Catalog.md`** (screenshot OCR) supplies the screenshots and purpose text. It is the field source only for the 6 screens whose legacy form is not available. Those screens show an **Unverified** banner.
- **Older forms:** screens analysed from an older form, because the live menu target is missing, show an **older legacy form** banner.
- **Legacy item records:** fields are matched to the item records decoded from each compiled `.fmx`. Each record holds the item name, its own prompt, maximum length, format mask, value list, canvas position, database-item flag and button labels. Matched fields take their exact length, value list (shown as a dropdown), column binding and screen position from the item. A field binds to an item only on strong evidence: the item's own prompt, a label that spells the column or item name, or an item name covering most of the label. Audit-stamp items (`STORED`, `LASTMODIFIED`) are never shown. Items with their own legacy prompt that were missing are added in canvas order, and buttons use the exact legacy labels.
- **Required flag:** the compiled forms' own *Required* property is a binary flag that could not be identified without a reference, and no Oracle Forms tools are available to convert the `.fmb` sources. Required stars therefore still come only from NOT NULL columns that the item actually writes.
- **Tabs:** screenshots that are pages of one legacy form, such as Customer 1–4 and Grade 1–6, are one screen with tabs and one saved record.
- **Required stars:** shown only where the form writes a NOT NULL column. Hover over a field to see its column, type and evidence.
- **F9:** shows the list-of-values definitions compiled into the legacy form. No rows are shown, because no database is connected.
- **Read-only forms** (no table writes) have no Save action.
- **Reports:** Report and Print actions name the legacy Oracle Reports. They are not executed.
- **Mock data only:** Save writes a local draft in the browser. Document numbers are simulated with a local counter per legacy `CONTROL` code. No production database is connected.

## YES’s Foundry

- **Sources:** `public/data/yes-screens.json` (screens, submodules and field control types from the YES’s discovery workbook) and `public/yes-screens/` (75 screenshots). The screenshot catalogue is `public/data/YES_Foundry_Legacy_Application_Screen_Catalog.md`.
- **Not verified:** YES’s screens have not been checked against YES’s legacy source code. Every screen shows a banner saying so.
- **Field types:** follow the workbook control type (date, numeric, checkbox, otherwise text).
- **Required markers:** shown only where the workbook marks a field mandatory (currently none).
- **F9:** no lists are documented, so none are shown.
- **Pages of one screen:** captures of the same screen (same title) are one screen with tabs. Consolidated captures stay attached to their main screen.
- **Screens without screenshots:** listed in the workbook, shown with a *Screenshot not supplied* banner and no fields.
- **Submodules without screens:** shown disabled.
