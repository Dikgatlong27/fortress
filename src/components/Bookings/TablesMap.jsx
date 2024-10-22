import React from 'react';

import { TfiAngleDoubleDown } from "react-icons/tfi";

import './TablesMap.css'

const TablesMap = () => {
  return (
    <div className='app__tablesMap'>
      <img src="" alt="" />
      
      <div className='app__tablesMap_p'>
        <label for="tables" className='p__opensans' style={{marginRight: '1rem'}}>Select a Table </label>
        <TfiAngleDoubleDown size={24} color='#eee' />
      </div>
      
      <select id="tables" name="table" className='custom__input'>
          <option value="Any">(floor map coming soon)</option>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          <option value="4">Table 4</option>
          <option value="5">Table 5</option>
          <option value="6">Table 6</option>
          <option value="7">Table 7</option>
          <option value="8">Table 8</option>
          <option value="9">Table 9</option>
          <option value="10">Table 10</option>
          <option value="11">Table 11</option>
          <option value="12">Table 12</option>
          <option value="13">Table 13</option>
          <option value="14">Table 14</option>
          <option value="15">Table 15</option>
          <option value="16">Table 16</option>
          <option value="17">Table 17</option>
          <option value="18">Table 18</option>
          <option value="19">Table 19</option>
          <option value="20">Table 20</option>
          <option value="21">Table 21</option>
          <option value="22">Table 22</option>
          <option value="23">Table 23</option>
          <option value="24">Table 24</option>
          <option value="25">Table 25</option>
          <option value="26">Table 26</option>
          <option value="27">Table 27</option>
          <option value="28">Table 28</option>
          <option value="29">Table 29</option>
          <option value="30">Table 30</option>
          <option value="31">Table 31</option>
          <option value="32">Table 32</option>
          <option value="33">Table 33</option>
          <option value="34">Table 34</option>
          <option value="35">Table 35</option>
          <option value="36">Table 36</option>
      </select>
    </div>
  )
}

export default TablesMap
