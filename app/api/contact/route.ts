import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL || "info@niagaraindians.com";

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ||
  "NIA Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  try {
    // Make sure the Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        {
          error: "Email service is not configured. Please try again later.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Prevent excessively large submissions
    if (
      name.length > 100 ||
      email.length > 254 ||
      phone.length > 50 ||
      subject.length > 100 ||
      message.length > 5000
    ) {
      return Response.json(
        {
          error: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const emailSubject = `NIA Contact: ${subject}`;

    const html = `
      <!DOCTYPE html>
      <html>
        <body
          style="
            margin:0;
            padding:0;
            background:#f8fafc;
            font-family:Arial,sans-serif;
          "
        >
          <div
            style="
              max-width:680px;
              margin:40px auto;
              background:#ffffff;
              border-radius:16px;
              overflow:hidden;
              border:1px solid #e2e8f0;
            "
          >
            <div
              style="
                background:#0B1F3A;
                padding:28px 32px;
              "
            >
              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:24px;
                "
              >
                New Contact Form Message
              </h1>

              <p
                style="
                  margin:8px 0 0;
                  color:#cbd5e1;
                  font-size:14px;
                "
              >
                Niagara Indian Association Website
              </p>
            </div>

            <div style="padding:32px;">
              <table
                style="
                  width:100%;
                  border-collapse:collapse;
                "
              >
                <tr>
                  <td
                    style="
                      padding:10px 0;
                      font-weight:bold;
                      color:#64748b;
                      width:120px;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      color:#0B1F3A;
                    "
                  >
                    ${escapeHtml(name)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      font-weight:bold;
                      color:#64748b;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      color:#0B1F3A;
                    "
                  >
                    ${escapeHtml(email)}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      font-weight:bold;
                      color:#64748b;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      color:#0B1F3A;
                    "
                  >
                    ${escapeHtml(phone || "Not provided")}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:10px 0;
                      font-weight:bold;
                      color:#64748b;
                    "
                  >
                    Subject
                  </td>

                  <td
                    style="
                      padding:10px 0;
                      color:#0B1F3A;
                    "
                  >
                    ${escapeHtml(subject)}
                  </td>
                </tr>
              </table>

              <div style="margin-top:28px;">
                <p
                  style="
                    margin:0 0 10px;
                    font-weight:bold;
                    color:#64748b;
                  "
                >
                  Message
                </p>

                <div
                  style="
                    padding:18px;
                    background:#f8fafc;
                    border-radius:12px;
                    color:#334155;
                    line-height:1.7;
                    white-space:pre-wrap;
                  "
                >
                  ${escapeHtml(message)}
                </div>
              </div>

              <div
                style="
                  margin-top:28px;
                  padding-top:20px;
                  border-top:1px solid #e2e8f0;
                "
              >
                <p
                  style="
                    margin:0;
                    color:#94a3b8;
                    font-size:12px;
                  "
                >
                  This message was submitted through the
                  Niagara Indian Association website.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: emailSubject,
      html,
      text: `
New Contact Form Message

Niagara Indian Association Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}
      `,
    });

    // Resend returned an error
    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error:
            error.message ||
            "Unable to send your message right now.",
        },
        { status: 500 }
      );
    }

    console.log("NIA contact email sent successfully:", data?.id);

    return Response.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}