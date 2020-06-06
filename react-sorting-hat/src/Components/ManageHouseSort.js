import React from 'react';
import FormSortHouse from './FormSortHouse';
import SortHouseInfo from './SortHouseInfo';
import {houseValues} from './houseData';

class ManageHouseSort extends React.Component {

   state = {
       students :[]
   }

   handleNewStudentSubmission = (newStudent) => {
    let house = this.handleHouseSelection(newStudent);

    newStudent = {...newStudent, house}
    this.setState({
        students: [...this.state.students, newStudent]
    });
}

   handleHouseSelection = (newStudent) => {
    let housesWithTotals = {}

    const studentAnswers = Object.values(newStudent)
    for (let house in houseValues) {
        let values = houseValues[house]
        let allVals = values.filter(val => {
            return studentAnswers.includes(val)
        })
        housesWithTotals[house] = allVals.length 
    }

    let totals = Object.values(housesWithTotals)
    let max = Math.max(...totals)

    let count = 0;
    totals.forEach(num => {
        if (num === max) {
            count +=1 
        }
    })

    if (count > 1) {
        return this.getRandomInt()
    } else {
        let houseName = Object.keys(housesWithTotals).find(house => housesWithTotals[house] === max)
        return houseName
    }
}

    getRandomInt = () => {
        const houses = Object.keys(houseValues)
        let randomHouseNumber = Math.floor(Math.random() * (4 - 0) + 0)
        return houses[randomHouseNumber]
    }
   
    render() {
        return (
        <>
            <FormSortHouse 
                addStudent={this.handleNewStudentSubmission} 
            />
            {this.state.students.map(student => (
                 <SortHouseInfo
                    key = {student.house} 
                    house = {student.house} 
                />
            ))};
           
        </>
        )
    }
}

export default ManageHouseSort;