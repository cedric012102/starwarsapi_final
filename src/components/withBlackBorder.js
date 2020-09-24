import React from 'react';

const withBlackBorder = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return(
                <div style={{border: '5px black solid'}}>
                    <WrappedComponent />
                </div>
            );
        }
    }
}

export default withBlackBorder;