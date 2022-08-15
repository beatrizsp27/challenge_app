import React from 'react';
import {logo, search} from "../../assets";
import s from "../../strings";

const SearchComponent = ({ handleChange, arrayListProduct }) => {
    return (
        <>
            <div className={'screens_details_header'} >
                <div>
                    <img className={'box_img_mel'} src={logo}/>
                </div>
                <input
                    className="box_input_text"
                    type="search"
                    placeholder={s.search}
                    onChange={handleChange}
                />
                <div className={'box_search_icon'}>
                    <img  className={'box_img'}  src={search} alt={''}/>
                </div>
            </div>
            {arrayListProduct && arrayListProduct.length > 0 && (
                <div className={'screens_title_header'}>
                    <label  className={'screens_title_body_header'}>{'Electronica > audio > video > iphone'} </label>
                </div>
            )}
        </>
    )
};

export default SearchComponent;
