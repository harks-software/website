import { Open_Sans, Montserrat, Oswald, Bebas_Neue, Architects_Daughter } from "@next/font/google";

export const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});
export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});
export const oswald = Oswald({
    subsets: ["latin"],
    variable: "--font-oswald",
});
export const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
});
export const archDaughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-architects-daughter",
});
