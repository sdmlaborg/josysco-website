import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
	const body = await request.json();
	const { name, email, phone, company, position, service, message } = body;

	const contentUser = `
    お問い合わせありがとうございます。
    以下の内容で承りました。

    お名前: ${name}
    メールアドレス: ${email}
    電話番号: ${phone}
    会社名: ${company}
    役職: ${position}
    お問い合わせ内容: ${service}
    メッセージ: ${message}

    担当者より近日中にご連絡いたします。
  `;

	const contentAdmin = `
    新しいお問い合わせがありました。

    お名前: ${name}
    メールアドレス: ${email}
    電話番号: ${phone}
    会社名: ${company}
    役職: ${position}
    お問い合わせ内容: ${service}
    メッセージ: ${message}
  `;

	const msgUser = {
		to: email,
		from: "noreply@josysco.com",
		subject: "お問い合わせを受け付けました",
		text: contentUser,
	};

	const msgAdmin = {
		to: "Admin@catenas.co.jp",
		from: "noreply@josysco.com",
		subject: "新しいお問い合わせがありました",
		text: contentAdmin,
	};

	try {
		await sgMail.send(msgUser);
		await sgMail.send(msgAdmin);
		return NextResponse.json({
			success: true,
			message:
				"お問い合わせを受け付けました。確認メールをお送りしましたのでご確認ください。",
		});
	} catch (error) {
		console.error("Error sending email", error);
		return NextResponse.json(
			{
				success: false,
				message:
					"お問い合わせの送信中にエラーが発生しました。しばらくしてから再度お試しください。",
			},
			{ status: 500 },
		);
	}
}
