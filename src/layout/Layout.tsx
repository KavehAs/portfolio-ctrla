import MobileMenu from './MobileMenu';
import Footer from './Footer';
import Header from './Header';

function Layout({children} : {children : JSX.Element[] | JSX.Element}) {
    return (
        <div>
            <Header/>
            {children}
            {/* <Footer /> */}
            <MobileMenu />
        </div>
    );
}

export default Layout;