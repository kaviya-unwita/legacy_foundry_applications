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
- every screenshot is on exactly one page, and every page and field says where it comes from (screenshot or legacy form)

## Evidence and behavior

- **`public/data/legacy_source.json`** is the screen and field source. It was generated from the legacy application:
  - Menu tree: the live `MENUMASTER` table in the Oracle export.
  - Fields: every item that sits on a canvas of the compiled `.fmx` form, on its own tab page or canvas, plus screenshot labels that have no item in the form file. Each field is tagged with where it comes from (see below).
  - Input types and maximum lengths: format masks and the Oracle column definitions.
  - F9 lists, buttons, report names, tables written, delete keys and `CONTROL` document-number codes: the compiled form.
- **`public/data/SUN_Foundry_Legacy_Application_Screen_Catalog.md`** (screenshot OCR) supplies the screenshots and purpose text. It is the field source only for the 5 screens whose legacy form is not available (one of them, the Stores Rate Master, because the only RATEMASTER.fmx in the files is a different Foundry screen). Those screens show an **Unverified** banner.
- **Other copies of a form:** screens analysed from another copy of the form (the live menu target is missing, or the copy in the files does not match the screenshot) show a **Based on another copy of the legacy form** banner that says which file was used and why.
- **Legacy item records:** fields are matched to the item records decoded from each compiled `.fmx`. Each record holds the item name, its own prompt, maximum length, format mask, value list, canvas position, database-item flag and button labels. Matched fields take their exact length, value list (shown as a dropdown), column binding and screen position from the item. A field binds to an item only on strong evidence: the item's own prompt, a label that spells the column or item name, or an item name covering most of the label. Audit-stamp items (`STORED`, `LASTMODIFIED`) are never shown. Every other visible item is added on its own page. An item without a prompt is labelled with its own name. A label taken from nearby form text is used only when the screenshot of that page shows it. Buttons use the exact legacy labels.
- **Required flag:** the compiled forms' own *Required* property is a binary flag that could not be identified without a reference, and no Oracle Forms tools are available to convert the `.fmb` sources. Required stars therefore still come only from NOT NULL columns that the item actually writes.
- **Tabs:** a legacy form with tab pages shows exactly its tab pages, in legacy order and with the legacy labels (for example the eight Machine Master tabs, including Quaterly, Half Year and Yearly Check List behind the scroll arrows). Tabs and field placement come from the decoded `.fmx` layout: each item record points to its block, canvas and tab page. Each screenshot is attached to the tab it shows. A tab without a screenshot is still shown and says it comes from the legacy form only. A tab that is in the form but not in the screenshots' tab strip says so.
- **Canvases and hidden items:** in a form without tab pages, fields on another canvas that no screenshot shows (a pop-up or stacked view) get their own page named after the canvas. Items on no canvas are hidden in the running form, so they are not shown as fields. They are listed under the form instead.
- **Where each field comes from:** every field carries a tag. **Form + screenshot** means the legacy form has the item and a screenshot of that page shows its label. **Legacy form** means the form has the item but its label was not matched in a screenshot. **Screenshot only** means there is no item in the form file. **Screenshot · hidden in form** means the SSA_MSS copy hides the item. **Form label only** means a text in the form names a column but has no input item. Screenshot matching uses the Windows OCR of every image plus the catalogue text, and needs the whole label.
- **Menu options without a screenshot:** if the legacy form is in the files, the option opens a form-only screen with a **No screenshot supplied** banner. If neither exists, the card is disabled and says so.
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
