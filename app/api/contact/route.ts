import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    // Initialize Resend with API key
    const apiKey = process.env.RESEND_API_KEY || "re_YhAR4SS3_PCCj8r5sVX3a6BgvUPgJxp4e"
    const resend = new Resend(apiKey)
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Send email using Resend
    // The "from" address must be on a domain verified in your Resend account.
    // Set RESEND_FROM_EMAIL once flowstateenvironmental.com is verified in Resend.
    const fromEmail = process.env.RESEND_FROM_EMAIL || "FlowState Contact <onboarding@resend.dev>"
    const toEmail = process.env.RESEND_TO_EMAIL || "info@flowstateenvironmental.com"
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
