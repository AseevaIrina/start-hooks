import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    // const list = React.Children.map(children, (child) => {
    //     return child;
    // });
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ParentComponent>
                <Component />
                <Component />
                <Component />
            </ParentComponent>
        </CollapseWrapper>
    );
};

const Component = (props) => {
    return <div {...props}>Компонент списка</div>;
};

const ParentComponent = ({ children }) => {
    // return React.Children.map(children, (child) => {
    //     const config = {
    //         ...child.props,
    //         id: children.indexOf(child).toString()
    //     };
    //     return React.cloneElement(child, config);
    // });

    const childrenArray = React.Children.toArray(children);

    return childrenArray.map(child => {
        const config = {
            ...child.props,
            id: childrenArray.indexOf(child).toString()
        };
        return React.cloneElement(child, config);
    });
};

ParentComponent.propTypes = {
    children: PropTypes.node
};

export default ChildrenExercise;
