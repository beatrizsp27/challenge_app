import React from 'react';
import {logo, search} from "../../assets";
import s from "../../strings";

const SearchComponent = ({ handleChange, onAction }) => {
    return (
        <div className={'screens_details_header'}>
            <form onSubmit={onAction}>
                <div className={'screens_details_form'}>
                    <div className={'box_img_search'}>
                        <img className={'box_img'} src={logo}/>
                    </div>
                    <div className={'box_input_icon_search'} >
                        <input
                            autoComplete={'false'}
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
              </div>
            </form>
        </div>
    )
};

export default SearchComponent;
