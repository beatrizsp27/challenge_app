import React from 'react';
import {logo, search} from "../../assets";
import s from "../../strings";

const SearchComponent = ({ handleChange, onAction, textSearch }) => {
    return (
        <>
            <form onSubmit={onAction}>
                <div className={'screens_details_header'} >
                <div>
                    <img className={'box_img_mel'} src={logo}/>
                </div>
                <input
                    name={'search'}
                    className="box_input_text"
                    type="search"
                    placeholder={s.search}
                    onChange={handleChange}
                />
                <div className={'box_search_icon'} onClick={onAction}>
                    <img  className={'box_img_mel'}  src={search} alt={''}/>
                </div>
            </div>
            </form>
        </>
    )
};

export default SearchComponent;
