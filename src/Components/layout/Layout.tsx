import Header from "./Header";
import Footer from "./Footer";

function Layout({children , ref} : {children : JSX.Element[] | JSX.Element , ref : any }) {
    return (
        <div>
            <Header ref={ref}/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;