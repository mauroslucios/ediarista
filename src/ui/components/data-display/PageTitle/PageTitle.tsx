import React from 'react';

interface PageTitleProps{
    title: string;
    subTitle:string;
}

const PageTitle: React.FC<PageTitleProps>= (props) => {
    return (
        <div>
            {props.title}
            {props.subTitle}
        </div>
        );
}

export default PageTitle;