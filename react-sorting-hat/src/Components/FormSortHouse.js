import React from 'react';
import './form.css'

class FormSortHouse extends React.Component {
    state = {
        student: {
            personalValue: "", 
            animal:"", 
            color: "", 
            enterance: "", 
            element: "", 
            house:""
        }
    }
    
    handlePersonalValue = (event) => {
        const studentValue = {...this.state.student, personalValue: event.target.value} 
        this.setState({student: studentValue})
    }

    handleColor = (event) => {
      const color = {...this.state.student, color: event.target.value}
      this.setState({student:color})
    }

    handleAnimal = (event) => {
      const animal = {...this.state.student, animal: event.target.value}
      this.setState({student: animal})
    }

    handleEnterancePreferance = (event) => {
      const enterancePreferance = {...this.state.student, enterance: event.target.value}
      this.setState({student:enterancePreferance})
    }

    handleElement = (event) => {
      const elementSelection = {...this.state.student, element: event.target.value}
      this.setState({student:elementSelection})
    }


    handleSubmit = (event) => {
        event.preventDefault()

        this.props.addStudent(this.state.student)

        this.setState({
          student: {
            personalValue: "", 
            animal:"", 
            color: "", 
            enterance: "", 
            element: ""
        },

        })
    }
   
    render() {
    
    const {personalValue, color, animal, enterance, element} = this.state.student;

      return (
        <>
        <div className="form-header">
          <h1>Questions for You</h1>
          <p>The answers to the questions below will determine which house you are placed in.</p>
        </div>
       
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div className="get-input">
            <label>
                Which element do you resonate with?
                <select className="dropdown" value={element} onChange={this.handleElement}>
                      <option value=""></option>  
                      <option value="fire">fire</option>
                      <option value="earth">earth</option>
                      <option value="air">air</option>
                      <option value="water">water</option>  
                </select>
              </label>
            </div>

          <div className="get-input">
            <label>
                Enterance Preferance:
                <select className="dropdown" value={enterance} onChange={this.handleEnterancePreferance}>
                      <option value=""></option>  
                      <option value="riddle">riddle</option>
                      <option value="password">password</option>  
                </select>
              </label>
            </div>

            <div className="get-input">
              <label >
                  Favorite animal:
                  <select className="dropdown" value={animal} onChange={this.handleAnimal}>
                        <option value=""></option>  
                        <option value="lion">lion</option>
                        <option value="badger">badger</option>
                        <option value="eagle">eagle</option>
                        <option value="serpant">serpant</option>  
                  </select>
                </label>
              </div>

            <div className="get-input">
              <label>
                  Favorite color:
                  <select className="dropdown" value={color} onChange={this.handleColor}>
                        <option value=""></option>  
                        <option value="red">red</option>
                        <option value="black">black</option>
                        <option value="navy">navy</option>
                        <option value="green">green</option>  
                  </select>
                </label>
              </div>
  
            <div className="get-input">
                <label >
                What do you value?
                <select className="dropdown" value={personalValue} onChange={this.handlePersonalValue}>
                      <option value=""></option>  
                      <option value="leadership">leadership</option>
                      <option value="dedication">dedication</option>
                      <option value="ambition">ambition</option>
                      <option value="resourcefulness">resourcefulness</option>  
                </select>
              </label>
            </div>

          <div className="get-input">
            <input className="button" type="submit" value="Submit" />
          </div>

        </form>
        </>
      )
    }
  }
export default FormSortHouse;