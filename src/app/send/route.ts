/**
 * VAULLTCORE SOVEREIGN INTAKE ENGINE
 * Path: /api/send/route.ts
 * Hardened for Jet-Speed Deployment // Zero-Dependency Native Fetch Handshake
 */

import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Destructure the $1B Intake Payload
    const { name, email, company, revenue, problem, timeline } = body;

    // 1. Critical Validation // Ensure telemetry integrity
    if (!email || !name || !problem) {
      return NextResponse.json(
        { error: 'Incomplete Telemetry: name, email, and bottleneck report required.' },
        { status: 400 },
      );
    }

    // 2. Direct API Handshake to Resend Infrastructure
    // We use native fetch to eliminate 'Module Not Found' errors during Turbopack builds.
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Vaulltcore System <system@vaulltcore.com>', // Ensure system@vaulltcore.com is verified in Resend
        to: ['build@vaulltcore.com'],
        subject: `[INTAKE_ALERT] ${name.toUpperCase()} // ${revenue} // ${timeline.toUpperCase()}`,
        headers: {
          'X-Entity-Ref-ID': randomUUID(), // Forces Gmail to treat every lead as a unique, non-threaded entry
        },
        html: `
          <!DOCTYPE html>
          <html lang="en">
            <body style="margin: 0; padding: 0; background-color: #050B14; font-family: 'Courier New', Courier, monospace; color: #F8FAFC;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 40px 0;">
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #0A0F1C; border: 1px solid #D4AF37; border-radius: 4px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                      
                      <tr>
                        <td style="padding: 30px; background-color: #050B14; border-bottom: 1px solid #1E293B;">
                          <h1 style="margin: 0; color: #D4AF37; font-size: 18px; text-transform: uppercase; letter-spacing: 4px; font-weight: 900;">
                            // Incoming_Intake_Payload
                          </h1>
                          <p style="margin: 5px 0 0 0; color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 2px;">
                            Status: Awaiting_Analysis // Priority: High_Value
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 30px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tr>
                              <td style="padding-bottom: 20px;">
                                <div style="color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Operator_Identity:</div>
                                <div style="color: #F8FAFC; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">${name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 20px;">
                                <div style="color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Secure_Uplink:</div>
                                <div style="color: #F8FAFC; font-size: 14px;">${email}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 20px;">
                                <div style="color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Organization:</div>
                                <div style="color: #F8FAFC; font-size: 14px; text-transform: uppercase;">${company || 'UNIDENTIFIED'}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 20px;">
                                <div style="color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Scale_Tier:</div>
                                <div style="color: #D4AF37; font-size: 14px; font-weight: bold;">${revenue} / MO</div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style="color: #64748B; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Deployment_Urgency:</div>
                                <div style="color: #F8FAFC; font-size: 14px; text-transform: uppercase;">${timeline}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 0 30px 30px 30px;">
                          <div style="background-color: #050B14; border: 1px solid #1E293B; border-left: 4px solid #D4AF37; padding: 25px;">
                            <p style="margin: 0 0 15px 0; color: #D4AF37; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">
                              [system_bottleneck_telemetry_report]
                            </p>
                            <p style="margin: 0; color: #F8FAFC; font-size: 13px; line-height: 1.8; white-space: pre-wrap;">
                              ${problem}
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 20px 30px; background-color: #050B14; border-top: 1px solid #1E293B; text-align: center;">
                          <p style="margin: 0; color: #475569; font-size: 9px; text-transform: uppercase; letter-spacing: 2px;">
                            Sovereign_Infrastructure_Matrix // Vaulltcore_Intake_v2.2.1
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      }),
    });

    const data = await resendResponse.json();

    // 3. API Response Logic
    if (!resendResponse.ok) {
      console.error('[RESEND_API_ERROR]:', data);
      return NextResponse.json({ error: data.message || 'API_HANDSHAKE_FAILED' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
      message: 'Intake payload secured and transmitted.'
    });

  } catch (err) {
    console.error('[CRITICAL_SYSTEM_FAIL]:', err);
    return NextResponse.json(
      { error: 'Internal system failure during transmission sequence.' },
      { status: 500 },
    );
  }
}
