"use client"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Calendar, Check, CreditCard, Lightbulb, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/Josysco_logo.png"
                alt="Josysco Logo"
                width={200}
                height={43}
                priority
                className="h-auto w-auto"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              生成AIの力で、
              <br className="sm:hidden" />
              ビジネスを進化させる
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              地元大学生と共に学ぶ、
              <br className="sm:hidden" />
              中小企業のための生成AI活用支援サービス
            </p>
            <div className="pt-4">
              <Button
                className="bg-[#e95512] hover:bg-[#d64a0f] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("/contact", "_blank")}
              >
                無料相談を申し込む
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            情シスコが選ばれる<span className="text-[#e95512]">3つの理由</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#e95512] rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">継続的な学習環境</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  月1回の勉強会で、最新の生成AI活用事例やツールを学べます。大学生による分かりやすい説明で、確実に知識が身につきます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#e95512] rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">実践的なサポート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  勉強会を通じて、学生と一緒に自社での具体的な活用方法を検討。プロフェッショナルによる技術的なバックアップ体制も整っています。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-[#e95512] rounded-full flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">地域との繋がり</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  地元の学生との交流を通じて、企業のブランド力向上に貢献。GITYのデジタルサイネージによる情報発信で、地域での認知度も高まります。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* サービス詳細セクション */}
      <section id="services" className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">サービス内容</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#e95512] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">月1回の勉強会（2時間）</h3>
                  <p className="text-slate-600">
                    大学生が生成AIの最新情報やツールをわかりやすくプレゼンテーション。
                    自社の業務に活用できるヒントを提供します。生成AIの進化に合わせて、定期的な学びの場を設けています。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#e95512] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">活用方法の相談</h3>
                  <p className="text-slate-600">
                    勉強会の中で、学生と社員が一緒に自社での活用方法を検討できます。
                    より専門的な内容については、学生がバックアップしているプロのエンジニアやコンサルタントに相談できる体制を整えています。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#e95512] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">広告掲載特典</h3>
                  <p className="text-slate-600">
                    GITY内のデジタルサイネージを活用して企業情報を発信できます。
                    地域の方々への認知度向上や採用活動にお役立てください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金セクション */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">料金プラン</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-[#e95512]">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl font-bold">
                  月額33,000円<span className="text-base font-normal">（税込）</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e95512] flex-shrink-0 mt-1" />
                    <p>月1回2時間の勉強会参加費を含む</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e95512] flex-shrink-0 mt-1" />
                    <p>勉強会は1社あたり最大10名まで参加可能</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e95512] flex-shrink-0 mt-1" />
                    <p>デジタルサイネージ広告の掲載費も含む</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e95512] flex-shrink-0 mt-1" />
                    <p>プロフェッショナルによる技術サポート体制</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 pt-4">
                  ※ 10名を超える参加をご希望の場合は、別途ご相談ください。
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 導入効果セクション */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">導入効果</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Lightbulb className="w-8 h-8 text-[#e95512] mb-2" />
                <CardTitle>最新AI技術の活用を手軽に実現</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  自社の業務効率化や新規事業開発に役立つ情報を提供。定期的な勉強会によって、常に最新のAIトレンドをキャッチアップできます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CreditCard className="w-8 h-8 text-[#e95512] mb-2" />
                <CardTitle>コストを抑えてAIを勉強</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  地元の大学生を活用することで低コストを実現。
                  学生と社員が学び合うことで社内に学び合う風土を取り入れ、リスキリング効果をもたらします。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <Building2 className="w-8 h-8 text-[#e95512] mb-2" />
                <CardTitle>地域でのブランド力向上</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  地域の学生と共にAIを勉強し、デジタルサイネージ広告を出すことで地域社会や就活生へのアピール効果が期待できます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">お問い合わせ</h2>
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <p className="text-lg text-slate-600">
              サービスの詳細や導入についてのご相談は、
              <br className="sm:hidden" />
              お気軽にお問い合わせください。
            </p>
            <div className="space-y-4">
              <div className="font-bold text-xl">株式会社CATENAS</div>
              <div>
                <a
                  href="https://www.catenas.co.jp/"
                  className="text-[#e95512] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.catenas.co.jp/
                </a>
              </div>
            </div>
            <Button
              className="bg-[#e95512] hover:bg-[#d64a0f] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open("/contact", "_blank")}
            >
              お問い合わせフォームへ
            </Button>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">会社概要</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <dl className="space-y-6 text-center">
              <div className="space-y-2">
                <dt className="font-bold text-lg">会社名</dt>
                <dd>株式会社CATENAS</dd>
              </div>
              <div className="space-y-2">
                <dt className="font-bold text-lg">設立</dt>
                <dd>2023年5月</dd>
              </div>
              <div className="space-y-2">
                <dt className="font-bold text-lg">所在地</dt>
                <dd>群馬県前橋市千代田町2丁目2-11 GSレジデンス2階</dd>
              </div>
              <div className="space-y-2">
                <dt className="font-bold text-lg">役員</dt>
                <dd>
                  <table className="mx-auto">
                    <tbody>
                      <tr>
                        <td className="text-right pr-4">代表取締役</td>
                        <td className="text-left">神保 良弘</td>
                      </tr>
                      <tr>
                        <td className="text-right pr-4">取締役CTO</td>
                        <td className="text-left">松下 清隆</td>
                      </tr>
                      <tr>
                        <td className="text-right pr-4">取締役CHRO</td>
                        <td className="text-left">佐藤 三和</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
              <div className="space-y-2">
                <dt className="font-bold text-lg">資本金</dt>
                <dd>¥ 10,000,000</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-4">情シスコで、地域の未来を一緒に創りませんか？</p>
          <p className="text-sm text-slate-400">© 2024 CATENAS Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

