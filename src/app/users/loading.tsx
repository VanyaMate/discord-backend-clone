import React from 'react';


export type LoadingProps = {};

const Loading: React.FC<LoadingProps> = (props) => {
    const {} = props;

    return (
        <div>
            Loading..
        </div>
    );
};

export default React.memo(Loading);