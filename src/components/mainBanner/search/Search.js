import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './search.module.css';

function Search() {
    return (
        <div className={style.container_search}>
            <div><input class="form-control" type="text" placeholder="PostCode/Location" /></div>
            <div>
                <select class="form-control">
                    <option>Nationwide</option>
                </select>
            </div>
            <div>
                <select class="form-control">
                    <option>1 Series</option>
                    <option>2 Series</option>
                    <option>3 Series</option>
                    <option>4 Series</option>
                </select>
            </div>
            <div>
                <select class="form-control">
                    <option>Select Model</option>
                </select>
            </div>
            <div>
            <button class="btn btn-primary w-100" type="button" style={{width: '100%'}}>Search</button>
            </div>
        </div>
    );
}

export default Search;
