type User2 = {
  id: number;
  name: string;
  email: string;
};

// Partial = tất cả optional
type UserUpdate = Partial<User2>;

// Pick = chọn vài field
type UserPreview = Pick<User2, "id" | "name">;

// Omit = loại bỏ field
type UserWithoutEmail = Omit<User2, "email">;

// Record = map keys to values
type RoleMap = Record<"admin" | "user", User2>;

// 💬 Mẹo nhớ nhanh:
// Partial → cho phép bỏ trống.
// Pick → chọn.
// Omit → bỏ.
// Record → tạo object type từ key-value.
