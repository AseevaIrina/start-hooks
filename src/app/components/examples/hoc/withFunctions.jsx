import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => () => {
    const isAuth = localStorage.getItem("user");

    const onLogin = () => {
        localStorage.setItem("user", "login");
    };
    const onLogOut = () => {
        return localStorage.removeItem("user");
    };

    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
