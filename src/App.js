import React, { Component } from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import { fetchData } from './api'
import Logo from '../src/components/Images/Logo.png'
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state = {
      data: {},
      country: '',
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    return (
      <div className='container'>
        <div className='logo'>
          <img src={ Logo } alt="Logo" />
          <h1>Tracker</h1>
        </div>  
        <br />
        <br />
        <Cards data={ this.state.data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
    )
  }
}

export default App
