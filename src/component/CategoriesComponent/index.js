import React from "react";

const CategoriesComponent = ({categoriesArray}) =>{
    return(
        <div className={'screens_component_category'}>
            {
                categoriesArray && categoriesArray.length > 0 && (
                    <>
                        <div  className={'screens_category'}>
                            <div  className={'list_ul'}>
                                {categoriesArray.map((categoryItem, index)=> {
                                    const categoriesArrayLength = categoriesArray.length;
                                    const isOtherFormat = index+1 === categoriesArrayLength;
                                    const sign = ' >'
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <li key={index} >
                                            <span  className={isOtherFormat? 'screens_title_body_header_bold' :'screens_title_body_header'}> {isOtherFormat ? categoryItem : `${categoryItem}${sign}`} </span>
                                        </li>
                                    )})}
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default CategoriesComponent;
