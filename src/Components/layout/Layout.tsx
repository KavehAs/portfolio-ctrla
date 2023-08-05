import Header from "./Header";
import Footer from "./Footer";

function Layout({children} : {children : JSX.Element[] | JSX.Element}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;