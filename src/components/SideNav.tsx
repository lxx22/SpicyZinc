import React from "react";

export interface Section {
    id: string;
    name: string;
    href?: string;
}

export interface SideNavProp {
    sections: Section[];
    children: JSX.Element;
}

const SideNav = (props: SideNavProp) => {
    const {sections} = props;

    const [stylingConfig, setStylingConfig] = React.useState({
        sideNavWidth: "0px",
        mainMarginLeft: "0px",
        bgColor: ""
    });

    const [sideNavOpen, setSideNavOpen] = React.useState(false);

    const closeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setStylingConfig({
            sideNavWidth: "0px",
            mainMarginLeft: "0px",
            bgColor: "beige"
        });
        setSideNavOpen(false);
    };

    const openNav = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setStylingConfig({
            sideNavWidth: "250px",
            mainMarginLeft: "250px",
            bgColor: "rgba(0,0,0,0.4)"
        });
        setSideNavOpen(true);
    };

    const escapeHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        if (sideNavOpen) {
            setSideNavOpen(false);

            setStylingConfig({
                sideNavWidth: "0px",
                mainMarginLeft: "0px",
                bgColor: "beige"
            });
        }
    };

    return (
        <>
            <div className="sidenav" style={{width : stylingConfig.sideNavWidth}}>
                <a className="closebtn" onClick={closeHandler}>&times;</a>
                {
                    sections.map(({id, name, href}) => {
                        return (
                            <a key={id} href={href}>
                                {name}
                            </a>
                        )
                    })
                }
            </div>

            <div
                id="main"
                style={{marginLeft : stylingConfig.mainMarginLeft, backgroundColor: stylingConfig.bgColor}}
                onClick={escapeHandler}
            >
                <span onClick={openNav}>&#9776;</span>
                {props.children}
            </div>
        </>
    );
};

export default SideNav;