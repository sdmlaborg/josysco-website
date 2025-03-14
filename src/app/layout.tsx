import "./globals.css";

export const metadata = {};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
}
