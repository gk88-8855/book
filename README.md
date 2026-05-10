[README.md](https://github.com/user-attachments/files/27569184/README.md)
# BookTrack PWA

แอปติดตามหนังสือ — สแกน ISBN, สุ่มหนังสือถัดไป, ใช้บน iPhone ได้

## วิธีติดตั้งบน iPhone

### ตัวเลือก 1: Deploy ขึ้นเว็บ (แนะนำ)

PWA ต้องใช้ HTTPS เพื่อเข้าถึงกล้อง deploy ฟรีได้ที่:

**Netlify Drop (ง่ายสุด):**
1. ไปที่ https://app.netlify.com/drop
2. ลากโฟลเดอร์ทั้งหมดเข้าไป
3. คัดลอก URL ที่ได้ (เช่น https://your-site.netlify.app)

**GitHub Pages:**
1. สร้าง repo ใหม่บน GitHub
2. อัปโหลดไฟล์ทั้งหมด
3. Settings → Pages → Source: main branch → Save
4. รอ 1-2 นาที จะได้ URL: https://username.github.io/repo-name

**Vercel:**
1. ไปที่ https://vercel.com/new
2. Import โปรเจกต์ หรือลากโฟลเดอร์
3. Deploy

### ตัวเลือก 2: Add to Home Screen (iPhone)

1. เปิด URL ที่ deploy ใน **Safari** (ต้อง Safari เท่านั้น ไม่ใช่ Chrome)
2. กดปุ่ม **Share** (ไอคอนสี่เหลี่ยมพร้อมลูกศรชี้ขึ้น)
3. เลื่อนลง → กด **Add to Home Screen**
4. ตั้งชื่อ → กด **Add**
5. ไอคอนแอปจะปรากฏที่หน้าจอหลักเหมือนแอปจริง

## โครงสร้างไฟล์

```
booktracker/
├── index.html       # แอปหลัก
├── manifest.json    # PWA manifest
├── sw.js            # Service worker (ทำงาน offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

## ฟีเจอร์

- **คลังหนังสือ** — ค้นหา, กรองตามสถานะ (อยากอ่าน/กำลังอ่าน/อ่านแล้ว)
- **สแกน ISBN** — ใช้กล้องสแกนบาร์โค้ดด้านหลังหนังสือ (รองรับ iOS Safari)
- **ค้นหาอัตโนมัติ** — ดึงชื่อ/ผู้แต่ง/จำนวนหน้าจาก Open Library
- **ติดตาม progress** — บันทึกหน้าที่อ่านถึง พร้อม progress bar
- **ให้คะแนนและรีวิว** — ดาว 1-5 และโน้ตส่วนตัว
- **สุ่มหนังสือ** — สุ่มหนังสือถัดไปจากรายการ "อยากอ่าน"
- **ใช้ offline ได้** — Service worker cache ไฟล์ไว้
- **Export ข้อมูล** — ดาวน์โหลดเป็น JSON สำรองได้

## ข้อมูล

ข้อมูลเซฟใน `localStorage` ของเบราว์เซอร์ — ไม่หายเมื่อปิดแอป แต่ถ้าล้าง Safari data จะหาย ใช้ปุ่ม Export (ไอคอนซ้ายบน) สำรองได้

## หมายเหตุ

- ต้องใช้ HTTPS เท่านั้น (กล้องไม่ทำงานบน HTTP) — Netlify/Vercel/GitHub Pages ฟรีและให้ HTTPS อัตโนมัติ
- iOS Safari ต้องการให้ผู้ใช้แตะเพื่อเริ่มกล้องครั้งแรก (อนุญาตการใช้กล้อง)
- หากกล้องสแกนไม่ติด ให้พิมพ์ ISBN เองได้ที่ช่องด้านล่าง
