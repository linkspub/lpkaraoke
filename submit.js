export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = Object.fromEntries(new URLSearchParams(event.body));
  console.log("Data diterima:", data);

  // TODO: bisa dikembangkan untuk simpan ke database / file JSON / Google Sheets

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Data berhasil diterima!" })
  };
}
