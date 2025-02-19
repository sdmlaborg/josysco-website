"use server";

export async function submitContactForm(formData: FormData) {
	const data = Object.fromEntries(formData);

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			},
		);

		const result = await response.json();

		return { success: !!result.success, message: result.message };
	} catch (error) {
		console.error("Error submitting form:", error);
		return {
			success: false,
			message:
				"お問い合わせの送信中にエラーが発生しました。しばらくしてから再度お試しください。",
		};
	}
}
