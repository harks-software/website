import { ReactElement } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

interface MainLayoutProps {
    children: ReactElement | ReactElement[];
    bottomPadding?: boolean;
}

export function MainLayout({ children, bottomPadding = true }: MainLayoutProps) {
    return (
        <>
            <Navbar />
            <main className={`${bottomPadding ? "pb-24" : ""} pt-20`}>{children}</main>
            <Footer />
        </>
    );
}
