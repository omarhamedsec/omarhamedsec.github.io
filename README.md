
# Omar Ultrapack (GitHub Pages + Jekyll)

## Quick Start
1. أنشئ الريبو باسم: `omarhamedsec.github.io` (موقع مستخدم).
2. فعّل Pages: Settings → Pages → Source: `Deploy from a branch`, Branch: `main`, Folder: `/`.
3. انسخ الملفات وادفع:
   ```bash
   git init
   git remote add origin git@github.com:omarhamedsec/omarhamedsec.github.io.git
   git add -A && git commit -m "Ultrapack init" && git branch -M main && git push -u origin main
   ```
4. انتظر Action يكمّل، وافتح: https://omarhamedsec.github.io

## Notes
- `/assets` مجلد للأصول فقط (صور/CSS/JS). لا تنشئ صفحة اسمها `/assets` لتفادي تعارض EISDIR.
- استخدم `{{ 'path' | relative_url }}` للروابط.
