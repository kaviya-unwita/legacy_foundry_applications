# SSA Foundry Modern Legacy Replica

Independent modern UI replica of the SSA Foundry legacy application. The application dynamically represents every one of the 208 documented legacy screens and keeps the original screenshot beside each modern screen as source evidence.

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

## Evidence and behavior

- `public/data/SSA_Foundry_Legacy_Application_Screen_Catalog.md` is the screen and field registry.
- `public/legacy-screens/` contains all 208 legacy screenshots.
- Screen actions use mock/local browser data; no production database is connected.
- `F9` opens a local reference lookup on text fields.
- Required-field stars are intentionally evidence-controlled. A field is marked required only after its mandatory status is confirmed from reliable legacy metadata or a validated walkthrough.
- The Oracle dump is retained as supporting discovery evidence; it is not executed or imported by this frontend.
