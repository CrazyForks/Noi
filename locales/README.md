# Noi Localization Guide

## Locale Registry

- The locale list is defined in `locales/noi.lang.json`.
- The `locales` array mirrors the order of `Settings → Language` inside Noi—update the file to change how items appear in the menu.
- Each entry uses a language `code` and a human-readable `name`; keep both fields in sync with the corresponding translation file.

## Adding a Language

- Create a new translation file in the `locales` directory that matches the language code (for example, `fr.json`).
- Follow i18n naming conventions. If the code needs a region or script, use a hyphen (`-`) as the separator (e.g., `pt-BR`). Underscores can cause unexpected loader issues and should be avoided.
- Once the file exists, register it in `locales/noi.lang.json` so it becomes available in `Settings → Language`.

## Customizing Translations

- Enable `Settings → Lock Locales Folder` before editing files. This prevents the app from overwriting your customizations.
- To revert to the default translations, disable `Lock Locales Folder` and restart Noi; the original files will be restored.

## Current Language List

- `en`: English
- `zh-Hans`: 简体中文
- `zh-Hant`: 繁體中文
- `es`: Español
- `hi`: हिन्दी
- `ar`: العربية
- `fr`: Français
- `pt`: Português
- `bn`: বাংলা
- `ur`: اردو
- `id`: Bahasa Indonesia
- `ru`: Русский
- `de`: Deutsch
- `ja`: 日本語
- `ko`: 한국어
- `vi`: Tiếng Việt
- `fa`: فارسی
- `th`: ไทย
- `sw`: Kiswahili
- `tr`: Türkçe
- `it`: Italiano
- `ms`: Bahasa Melayu
- `pl`: Polski
- `pa`: ਪੰਜਾਬੀ
- `hu`: Magyar
