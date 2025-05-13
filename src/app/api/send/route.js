import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    console.log("Received request:", body);  // ✅ 加入這行

    const data = await resend.emails.send({
      from: "Daniel Yao <hyao014@ucr.edu>",
      to: "hyao014@ucr.edu",
      subject,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    console.log("Email sent:", data);  // ✅ 加入這行

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);  // ✅ 更明確錯誤
    return new Response(JSON.stringify({ error: "Email send failed" }), {
      status: 500,
    });
  }
}