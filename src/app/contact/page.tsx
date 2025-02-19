"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import { submitContactForm } from "./actions";

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		position: "",
		service: undefined as string | undefined,
		message: "",
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage("");

		const formData = new FormData(event.currentTarget);
		const result = await submitContactForm(formData);

		setIsSubmitting(false);
		setSubmitMessage(result.message);

		// フォームの内容をクリア
		setFormState({
			name: "",
			email: "",
			phone: "",
			company: "",
			position: "",
			service: undefined,
			message: "",
		});

		// 3秒後にメッセージを非表示にする
		setTimeout(() => setSubmitMessage(""), 3000);
	};

	return (
		<div className="min-h-screen bg-white">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-3 flex justify-between items-center">
					<Link
						href="/"
						className="text-[#e95512] hover:text-[#d64a0f] transition-colors"
					>
						← ホームに戻る
					</Link>
				</div>
			</header>
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-2xl mx-auto text-center mb-12">
					<p className="text-lg text-slate-700 mb-6">
						情シスコは、地元大学生と共に学ぶ中小企業のための生成AI活用支援サービスです。
						サービス申し込みやお問い合わせは以下のフォームからご送信ください。
					</p>
					<h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
						お問い合わせ
					</h1>
				</div>
				<div className="max-w-2xl mx-auto">
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-4">
							<div>
								<Label htmlFor="name">
									担当者氏名 <span className="text-red-500">*</span>
								</Label>
								<Input
									id="name"
									name="name"
									required
									value={formState.name}
									onChange={(e) =>
										setFormState({ ...formState, name: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor="email">
									メールアドレス <span className="text-red-500">*</span>
								</Label>
								<Input
									id="email"
									name="email"
									type="email"
									required
									value={formState.email}
									onChange={(e) =>
										setFormState({ ...formState, email: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor="phone">電話番号</Label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									value={formState.phone}
									onChange={(e) =>
										setFormState({ ...formState, phone: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor="company">
									会社名 <span className="text-red-500">*</span>
								</Label>
								<Input
									id="company"
									name="company"
									required
									value={formState.company}
									onChange={(e) =>
										setFormState({ ...formState, company: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor="position">役職</Label>
								<Input
									id="position"
									name="position"
									value={formState.position}
									onChange={(e) =>
										setFormState({ ...formState, position: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor="service">
									お問い合わせ内容 <span className="text-red-500">*</span>
								</Label>
								<Select
									name="service"
									required
									value={formState.service}
									onValueChange={(value) =>
										setFormState({ ...formState, service: value })
									}
								>
									<SelectTrigger>
										<SelectValue placeholder="選択してください" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="apply">
											"情シスコ"サービスに申し込みたい
										</SelectItem>
										<SelectItem value="inquiry">
											サービス内容についてお問い合わせ
										</SelectItem>
										<SelectItem value="other">その他</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div>
								<Label htmlFor="message">その他、ご要望など</Label>
								<Textarea
									id="message"
									name="message"
									className="min-h-[100px]"
									value={formState.message}
									onChange={(e) =>
										setFormState({ ...formState, message: e.target.value })
									}
								/>
							</div>
							<div className="flex items-start space-x-2">
								<Checkbox id="privacy" name="privacy" required />
								<Label htmlFor="privacy" className="text-sm">
									上記プライバシーポリシーに同意します{" "}
									<span className="text-red-500">*</span>
								</Label>
							</div>
						</div>
						<p className="text-sm text-gray-600 mt-4 mb-2">
							<span className="text-red-500">*</span> は必須項目です
						</p>
						<Button type="submit" className="w-full" disabled={isSubmitting}>
							{isSubmitting ? "送信中..." : "送信する"}
						</Button>
						<div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
							<h3 className="font-bold mb-2">プライバシーポリシー</h3>
							<p>
								当社は、お客様の個人情報を大切に扱い、以下の方針に基づいて取り扱います：
								<br />
								1.
								収集した個人情報は、お問い合わせへの対応およびサービス提供の目的にのみ使用します。
								<br />
								2.
								法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。
								<br />
								3.
								個人情報の管理には万全を期し、不正アクセスや漏洩防止に努めます。
								<br />
								4.
								お客様ご自身の個人情報の開示、訂正、削除のご要望には速やかに対応いたします。
							</p>
						</div>
					</form>
					{submitMessage && (
						<div className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 text-center transition-all duration-500 ease-in-out">
							{submitMessage}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
