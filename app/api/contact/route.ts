import { NextRequest, NextResponse } from "next/server";

const ADMIN_EMAIL = "udyami.infra5757@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, mobile, email, propertyInterest, message } = body;

    if (!name || !mobile || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString("en-IN", {
      day: "2-digit", month: "2-digit", year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("en-IN", {
      hour: "2-digit", minute: "2-digit", hour12: true,
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[Contact API] RESEND_API_KEY is not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>New Enquiry - Udyami Infra Foundation</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background:#0a2342;padding:30px 40px;">
              <h1 style="color:#d4af37;margin:0;font-size:22px;letter-spacing:1px;">UDYAMI INFRA FOUNDATION</h1>
              <p style="color:#ffffff99;margin:6px 0 0;font-size:13px;">New Website Enquiry Received</p>
            </td>
          </tr>
          <!-- Gold bar -->
          <tr><td style="background:linear-gradient(90deg,#d4af37,#f5d06a);height:3px;"></td></tr>
          <!-- Body -->
          <tr>
            <td style="padding:35px 40px;">
              <h2 style="color:#0a2342;margin:0 0 24px;font-size:18px;">Enquiry Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:40%;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Name</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#0a2342;font-size:14px;font-weight:600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Mobile</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#0a2342;font-size:14px;">${mobile}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Email</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#0a2342;font-size:14px;">${email}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Project Interest</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#d4af37;font-size:14px;font-weight:600;">${propertyInterest || "Not specified"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Date</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#0a2342;font-size:14px;">${dateStr}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">Time</span>
                  </td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#0a2342;font-size:14px;">${timeStr}</span>
                  </td>
                </tr>
              </table>
              <!-- Message -->
              <div style="margin-top:24px;background:#f8f9fb;border-left:3px solid #d4af37;border-radius:0 6px 6px 0;padding:16px 20px;">
                <p style="color:#666;font-size:12px;font-weight:bold;text-transform:uppercase;margin:0 0 8px;">Message</p>
                <p style="color:#0a2342;font-size:14px;line-height:1.6;margin:0;">${message.replace(/\n/g, "<br/>")}</p>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fb;padding:20px 40px;border-top:1px solid #eee;">
              <p style="color:#999;font-size:12px;margin:0;text-align:center;">
                Udyami Infra Foundation · Pune, Maharashtra · This is an automated notification from your website.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Udyami Infra Website <onboarding@resend.dev>",
        to: [ADMIN_EMAIL],
        reply_to: email,
        subject: `New Enquiry — ${name} (${propertyInterest || "General"}) — Udyami Infra Foundation`,
        html: emailHtml,
      }),
    });

    if (!resendRes.ok) {
  const errText = await resendRes.text();

  console.error("========== RESEND ERROR ==========");
  console.error(errText);
  console.error("=================================");

  return NextResponse.json(
    {
      success: false,
      error: errText,
    },
    { status: 500 }
  );
}

return NextResponse.json({ success: true }, { status: 200 });

} catch (err) {
  console.error("[Contact API Error]", err);

  return NextResponse.json(
    {
      success: false,
      error: String(err),
    },
    { status: 500 }
  );
}
}
