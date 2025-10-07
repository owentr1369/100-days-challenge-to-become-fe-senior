**Mục tiêu tuần:**

> Hiểu sâu về TypeScript nâng cao, design pattern trong React/Vue, và bắt đầu xây dựng UI Library nhỏ (reusable components).

---

## 🗓 **📅 DAY 1 – TypeScript Mindset: From JS to TS Pro**

**Goal:** Nắm vững type system – hiểu cách types thực sự hoạt động, không chỉ “đoán”.

### 🔹 Học:

- Static typing vs dynamic typing
- Interface vs Type alias
- Utility types (Partial, Pick, Omit, Record)
- Union & Intersection types

### 🧠 Ví dụ:

```tsx
type User = { id: number; name: string };
type Admin = User & { role: "admin" };
type PartialUser = Partial<User>; // all props optional
```

### 🎯 Task:

- Chuyển 1 component React đang viết bằng JS sang TSX.
- Viết type cho props, event handlers, và state.

### 📚 Tài nguyên:

- [TypeScript Handbook - Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Understanding Type Aliases vs Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces)

---

## 🗓 **📅 DAY 2 – Advanced TypeScript Magic**

**Goal:** Làm chủ generics, keyof, infer, mapped types.

### 🔹 Học:

- Generics in functions & components
- `keyof` & indexed access
- `infer` keyword (trích xuất type từ type khác)
- Mapped types + conditional types

### 🧠 Ví dụ:

```tsx
function identity<T>(arg: T): T {
  return arg;
}
type Props<T> = { [K in keyof T]: T[K] };
type ApiResponse<T> = T extends { data: infer U } ? U : never;
```

### 🎯 Task:

- Viết generic function `useLocalStorage<T>()` (save + get item với type-safety).

### 📚 Tài nguyên:

- [TypeScript Generics Explained](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- YouTube: “TypeScript Advanced Tips - Matt Pocock”

---

## 🗓 **📅 DAY 3 – Clean Code for Frontend**

**Goal:** Code dễ đọc, dễ maintain, tư duy như senior.

### 🔹 Học:

- SOLID principles trong FE (đặc biệt S & D)
- DRY, KISS, Composition over inheritance
- Tách logic → hooks, components → pure functions
- Đặt tên biến / hàm rõ nghĩa

### 🎯 Task:

- Refactor 1 component cũ (phức tạp) → chia nhỏ + tách logic ra hook riêng.

### 📚 Tài nguyên:

- Book: _Clean Code (Robert C. Martin)_ – Chương 1–3
- Blog: “Clean Code in React” by Robin Wieruch

---

## 🗓 **📅 DAY 4 – Design Patterns in React/Vue**

**Goal:** Biết cách tái sử dụng logic UI theo nhiều cách khác nhau.

### 🔹 Học:

- **Container-Presenter Pattern**
- **Compound Components Pattern**
- **Render Props Pattern**
- **Custom Hooks Pattern**

### 🧠 Ví dụ (Compound Components):

```tsx
const Tabs = ({ children }) => <div>{children}</div>;
Tabs.Tab = ({ children }) => <button>{children}</button>;
Tabs.Panel = ({ children }) => <div>{children}</div>;
```

### 🎯 Task:

- Tạo `Tabs` hoặc `Accordion` component dùng Compound Components pattern.

### 📚 Tài nguyên:

- [React Patterns](https://reactpatterns.com/)
- YouTube: “Advanced React Component Patterns – Kent C. Dodds”

---

## 🗓 **📅 DAY 5 – Atomic Design & Folder Architecture**

**Goal:** Tư duy component theo hệ thống — không làm UI theo kiểu “random folder”.

### 🔹 Học:

- Atomic Design: atoms → molecules → organisms → templates → pages
- Naming conventions & structure (src/components, src/hooks, src/types, src/utils…)
- Khi nào tách file, khi nào gom nhóm

### 🎯 Task:

- Tạo folder structure chuẩn cho UI Library (atoms, molecules, etc.)
- Setup Storybook để test components.

### 📚 Tài nguyên:

- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Storybook Setup Guide](https://storybook.js.org/docs/react/get-started/install)

---

## 🗓 **📅 DAY 6 – UI Library Mini Project (Part 1)**

**Goal:** Bắt đầu build UI library nhỏ với Tailwind + Storybook + TS.

### 🎯 Tasks:

- Tạo project bằng Vite + React + TypeScript + Tailwind + Storybook
- Code 3 components:
  - `<Button variant="primary|secondary|outline" />`
  - `<Input label="Email" placeholder="Type here..." />`
  - `<Badge color="success|danger" />`

### 📚 Tips:

- Component phải support `className` & `as` prop để dễ extend.
- Viết types cho props rõ ràng, thêm `variant` typing:

```tsx
type Variant = "primary" | "secondary" | "outline";
interface ButtonProps {
  variant?: Variant;
  onClick?: () => void;
}
```

---

## 🗓 **📅 DAY 7 – UI Library Mini Project (Part 2) + Review**

**Goal:** Hoàn thiện và document UI library tuần 1.

### 🎯 Tasks:

- Tạo docs cho từng component trong Storybook.
- Thêm component: `Modal`, `Dropdown` (simple).
- Review lại type safety, props, reuse patterns.
- Viết README.md giới thiệu library: mục tiêu, cách dùng, demo link.

### 🧠 Checklist:

✅ Component clean, typed, reusable

✅ Storybook chạy ổn

✅ Tailwind config tách riêng

✅ Code folder structure chuẩn

---

## 🧭 **🔥 After Week 1**

Bạn sẽ có:

- Một mini **UI Library** có 4–5 components typed bằng TypeScript
- Setup Storybook & Tailwind chuẩn production
- Hiểu sâu hơn về TypeScript, clean code, pattern, và architecture

> Đây là foundation cực mạnh, giúp 13 tuần sau học nhanh gấp đôi và hiểu code như senior global dev.
