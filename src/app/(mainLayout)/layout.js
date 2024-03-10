const Layout = ({ children }) => {
    return (
        <div>
            <h1>navbar</h1>
            {children}
            <h2>footer</h2>
        </div>
    );
};

export default Layout;