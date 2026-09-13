import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";
import { getSupabaseAdminClient } from "@/lib/supabase";
import {
  buildLeadConfirmationEmail,
  buildOwnerNotificationEmail,
} from "@/lib/email-templates";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: bots fill every field, humans never see or fill this one.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const supabase = getSupabaseAdminClient();
    const { error: insertError } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      service: data.service || null,
      message: data.message,
      locale: data.locale,
      source_path: data.sourcePath || null,
    });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Could not save your request" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Supabase client error:", err);
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (resendApiKey && toEmail) {
    const resend = new Resend(resendApiKey);
    const ownerEmail = buildOwnerNotificationEmail(data);
    const leadEmail = buildLeadConfirmationEmail(data);
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL ?? "Jardí Verd <onboarding@resend.dev>";

    try {
      await resend.emails.send({
        from: fromAddress,
        to: toEmail,
        replyTo: data.email,
        subject: ownerEmail.subject,
        html: ownerEmail.html,
      });
    } catch (err) {
      console.error("Resend owner notification error:", err);
    }

    try {
      await resend.emails.send({
        from: fromAddress,
        to: data.email,
        subject: leadEmail.subject,
        html: leadEmail.html,
      });
    } catch (err) {
      console.error("Resend lead confirmation error:", err);
    }
  } else {
    console.warn(
      "RESEND_API_KEY or CONTACT_TO_EMAIL not set — skipping email notifications"
    );
  }

  return NextResponse.json({ ok: true });
}
