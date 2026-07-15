import accountRoutes from "./routes/accountRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

app.use("/api/account", accountRoutes);

app.use("/api/transactions", transactionRoutes);
