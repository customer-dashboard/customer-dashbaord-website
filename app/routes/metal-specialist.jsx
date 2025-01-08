export async function action({ request }) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Replace '*' with specific origin(s) for better security
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    const body = await request.json();
    console.log("Received data:", body);
    return new Response(JSON.stringify({ message: "Data received successfully!", data: body }), {
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response(JSON.stringify({ error: "Invalid request", details: error.message }), {
      status: 400,
      headers: corsHeaders,
    });
  }
}