# 🧠 Frontend Project Structure Guide

## 📁 public/
Directly served files  
- `index.html` → Entry point of the application  
- `favicon.ico` → Browser tab icon  
- `manifest.json` → PWA configuration  
- `robots.txt` → Search engine rules  

---

## 📁 src/
Main development code  
All core frontend logic, styles, and components live here.

---

## 📁 assets/
Static resources  
- Images  
- Icons  
- Fonts  
- Videos  

---

## 📁 css/
Organized styles  

### 🔹 base/
Global styles and resets  
- `reset.css`  
- `variables.css`  
- `typography.css`  

### 🔹 layout/
Structure styles  
- Header  
- Footer  
- Grid system  

### 🔹 components/
Reusable UI styles  
- Buttons  
- Cards  
- Forms  
- Navbar  

### 🔹 pages/
Page-specific styles  
- Home  
- About  
- Contact  

---

## 📁 js/
JavaScript logic  

### 🔹 core/
App setup and configuration  
- App initialization  
- Routing  
- Global config  

### 🔹 components/
UI behavior  
- Header interactions  
- Modals  
- Sliders  

### 🔹 pages/
Page-specific logic  
- Home page scripts  
- Contact page scripts  

### 🔹 utils/
Helper functions  
- API calls  
- Validation  
- Reusable utilities  

---

## 📁 components/
Reusable HTML parts  
- `header.html`  
- `footer.html`  
- `navbar.html`  
- `modal.html`  

---

## 📁 views/
Full pages  
- `home.html`  
- `about.html`  
- `contact.html`  

---

## 📁 data/
Static JSON data (mock API)  
- `users.json`  
- `products.json`  

---

## 📁 dist/
Production build (auto-generated)  
Optimized files for deployment  

---

## 📌 Summary

This structure helps you:
- Keep code organized  
- Reuse components easily  
- Scale projects efficiently  
- Maintain clean separation of concerns  

---