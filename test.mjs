import postgres from "postgres";

const sql = postgres("postgresql://docker:docker@localhost:5432/agents");

try {
  await sql`SELECT NOW()`.then(console.log);
  console.log("✅ Conectou com sucesso!");
} catch (err) {
  console.error("❌ Erro ao conectar:");
  console.error(err);
}
