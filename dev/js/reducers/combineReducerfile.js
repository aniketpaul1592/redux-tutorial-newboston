import React from 'react';
import {combineReducers} from'redux';
import Userdetails from './userDetails.js';
import BrainFunc from './brainReducer.js';

const allReducers = combineReducers({
	userDetails:Userdetails,
	brainFunc:BrainFunc
});

export default allReducers;