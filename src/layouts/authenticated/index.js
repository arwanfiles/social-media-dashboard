import Header from 'components/header';
import Sidebar from 'components/sidebar';

const LayoutAuthenticated = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Header />
            <Sidebar />
            <main className="main">
                {children}
            </main>
        </div>
    );
};

export default LayoutAuthenticated;
