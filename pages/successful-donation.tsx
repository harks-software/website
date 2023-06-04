import { useState } from "react";
import { MainLayout } from "../layouts/main";
import { montserrat } from "../utils/fonts";
import DonateComponent from "../components/donate";
import { PreviousWork } from "../components/donate/previous-work";
import { CounterNumericDisplay } from "../components/home/counter";

const PREVIOUS_WORK_IMAGES = [
    { image: "./assets/donate/HARKS-naynawah.jpg" },
    { image: "./assets/donate/youthday-thumbnail.png" },
];

export default function Donate() {
    const [tab, setTab] = useState(0);

    return (
        <MainLayout bottomPadding={false}>
            <div
                className={`${montserrat.className} font-bold text-3xl text-center py-64 bg-cream `}
            >
                Thank you for your donation
            </div>
        </MainLayout>
    );
}
