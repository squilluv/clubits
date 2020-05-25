import { combineReducers } from "redux"
import users from "./users"
import students from "./students"
import place from "./place"
import persons from "./persons"
import employee from "./employee"
import course from "./course"
import courseGroup from "./courseGroup"
import courseItem from "./courseItem"
import courseLiter from "./courseLiter"
import coursePo from "./coursePo"
import teachgroup from "./teachgroup"
import teachgroupstudent from "./teachgroupstudent"
import teachplan from "./teachplan"
import sections from "./sections"
import visited from "./visited"
import visitedstudents from "./visitedstudents"
import contract from './contract'
import message from './message'

import errors from "./errors"
import messages from "./messages"

import auth from "./auth"

export default combineReducers({
    users,
    students,
    place,
    persons,
    employee,
    course,
    courseGroup,
    courseItem,
    courseLiter,
    coursePo,
    teachgroup,
    teachgroupstudent,
    teachplan,
    sections,
    visited,
    visitedstudents,
    contract,
    message,
    errors,
    messages,
    auth
})