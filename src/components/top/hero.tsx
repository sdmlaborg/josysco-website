import Image from "next/image";
import { memo } from "react";
import { Button } from "../ui/button";

const Hero = () => (
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
);

export default memo(Hero);
