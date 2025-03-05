import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface TopCardProps {
    title: string;
    description: string;
    icon: ReactNode;
}
export const TopCard = (props: TopCardProps) => (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="pb-2">
            <div className="w-12 h-12 bg-[#e95512] rounded-full flex items-center justify-center mb-4">
                {/* <Calendar className="w-6 h-6 text-white" /> */}
                {props.icon}
            </div>
            <CardTitle className="text-xl">{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-slate-600">{props.description}</p>
        </CardContent>
    </Card>
);
