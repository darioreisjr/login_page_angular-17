import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Bar from "../components/Bar";

interface IMainLayout{
    children: React.ReactNode
}

const MainLayout = ({children}: IMainLayout) => {
    return (
        <>
            <header>
                <Bar/>
                <Heading/>
            </header>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default MainLayout;