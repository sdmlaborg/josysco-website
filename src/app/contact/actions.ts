"use server"

export async function submitContactForm(formData: FormData) {
  // ここで実際のフォーム送信処理を行います（例：メール送信、データベース保存など）
  // この例ではダミーの処理を行います
  const data = Object.fromEntries(formData)
  console.log("Form submitted:", data)

  // 送信が成功したと仮定
  return { success: true, message: "お問い合わせありがとうございます。担当者より近日中にご連絡いたします。" }
}

