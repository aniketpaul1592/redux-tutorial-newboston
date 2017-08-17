import React from 'react';
import {combineReducers} from'redux';
import Userdetails from './userDetails.js';

const allReducers = combineReducers({
	userDetails:Userdetails
});

export default allReducers;