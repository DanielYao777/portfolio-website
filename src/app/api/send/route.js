import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Form submission received:", email, subject, message);

  try {
    const data = await resend.emails.send({
      from: fromEmail,             // ✅ 你已驗證過的信箱
      to: fromEmail,               // ✅ 寄給你自己
      reply_to: email,             // ✅ 點「回覆」時會自動填入訪客 email
      subject: subject,
      text: `New message from ${email}\n\nSubject: ${subject}\n\n${message}`, // ✅ 保證信件穩定寄出（純文字）
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
  console.error("Resend API Error:", JSON.stringify(error, null, 2)); // 🔍 印出完整錯誤
  return NextResponse.json({ success: false, error: error.message || error });
  }
}