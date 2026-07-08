import "./globals.css";
import { Inter, Space_Grotesk, DM_Sans } from "next/font/google";

const inter=Inter({subsets:["latin"],variable:"--font-inter"});
const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
const dm=DM_Sans({subsets:["latin"],weight:["500","600","700"],variable:"--font-dm"});

export const metadata={
  title:"Priyam | Portfolio",
  description:"Creative Portfolio"
};

export default function RootLayout({children}){

return(

<html lang="en" suppressHydrationWarning>

<body className={`${inter.variable} ${space.variable} ${dm.variable} antialiased`}>

{children}

</body>

</html>

);

}