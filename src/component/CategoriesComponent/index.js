import React from "react";

const CategoriesComponent = ({categoriesArray}) =>{
    return(
        <div className={'screens_component_category'}>
            {
                categoriesArray && categoriesArray.length > 0 && (
                    <>
                        <div  className={'screens_category'}>
                            {categoriesArray.map((categoryItem, index)=> {
                                const categoriesArrayLength = categoriesArray.length;
                                const isOtherFormat = index+1 === categoriesArrayLength;
                                const sign = '>'
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                        <label key={index}  className={isOtherFormat? 'screens_title_body_header_bold' :'screens_title_body_header'}> {isOtherFormat ? categoryItem : `${categoryItem}${sign}`} </label>
                                )})}
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default CategoriesComponent;
