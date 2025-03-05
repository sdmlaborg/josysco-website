import { Check } from "lucide-react";
import { memo } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
}
const ServiceCard = ({ title, description }: ServiceCardProps) => (
    <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-[#e95512] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">
                    {/* 月1回の勉強会（2時間） */}
                    {title}
                </h3>
                <p className="text-slate-600">
                    {/* 大学生が生成AIの最新情報やツールをわかりやすくプレゼンテーション。
                    自社の業務に活用できるヒントを提供します。生成AIの進化に合わせて、定期的な学びの場を設けています。 */}
                    {description}
                </p>
            </div>
        </div>
    </div>
);

export default memo(ServiceCard);
