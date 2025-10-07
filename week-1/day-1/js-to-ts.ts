// 1️⃣ Static typing
let username: string = "Tam";
let age: number = 25;
let isDev: boolean = true;

// 2️⃣ Union types
let userStatus: "loading" | "success" | "error";
userStatus = "loading";

// 3️⃣ Type alias
type User = { id: number; name: string };
const user: User = { id: 1, name: "Tam" };

// 4️⃣ Interface (có thể mở rộng)
interface Product {
  id: number;
  name: string;
}
interface SaleProduct extends Product {
  discount: number;
}

// Explanation
// Type is used for grouping small logic, while interface is used when you want inheritance and extension (OOP-style).
