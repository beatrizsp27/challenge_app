import React from 'react';
import {logo, search} from "../../assets";
import s from "../../strings";

const SearchComponent = ({ handleChange }) => {
    return (
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
    )
};

export default SearchComponent;
