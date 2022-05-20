import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({
      onLogin,
      onLogOut,
      isAuth
    }) => {
    const [state, setState] = useState(isAuth);

    const toggleState = () => {
        state ? onLogOut() : onLogin();
        setState(prevState => !prevState);
    };

    return (
        <>
            {state
                ? <button className="btn btn-primary"
                          onClick={toggleState}
                >
                    Выйти из системы
                </button>
                : <button className="btn btn-primary"
                          onClick={toggleState}
                >
                    Войти
                </button>
            }
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
