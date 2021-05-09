import React from 'react';

export interface ILayoutProps {
    children: any;
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
};

export default Layout