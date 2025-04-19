import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);
const domain = process.env.NEXT_PUBLIC_APP_URL;

// Todo: Modify and Complete this
export async function sendTwoFactorTokenEmail(email: string, token: string) {
    //const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Your Two-Factor Authentication Code",
        html: `<p>Here is your secure code for login:</p><h2>${token}</h2><p>Please copy and enter this code to complete your sign-in.</p>`,
    })
}

export async function sendPasswordResetEmail(email: string, token: string) {
    const resetLink = `${domain}/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    })
}

export async function sendVerificationEmail(email: string, token: string) {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email.</p>`,
    })
}