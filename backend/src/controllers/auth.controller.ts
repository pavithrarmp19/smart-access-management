const users = [
  {
    userId: "admin",
    password: "admin123",
    role: "admin",
    name: "Administrator",
  },
];

export const login = (req, res) => {
  const { userId, password, role } = req.body;

  const user = users.find(
    (u) =>
      u.userId === userId &&
      u.password === password &&
      u.role === role
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User not found"
    });
  }

  return res.json({
    success: true,
    token: "dummy-jwt-token",
    user
  });
};