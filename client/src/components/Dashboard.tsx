import { Component } from 'react';
import React from 'react';
import { ApplicationState } from '../store';
import * as UserStore from '../store/User'
import { connect } from 'react-redux';
import Plot from 'react-plotly.js';
import axios from 'axios';

type UserProps = UserStore.UserState & typeof UserStore.actionCreators 

class Dashboard extends Component<UserProps, { loaded: boolean, chartData: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      loaded: false,
      chartData: null
    }
  }

  getBasicData() {
    axios.get(process.env.REACT_APP_SERVER_URL + 'api?ID=40774').then((result: any) => {
      let data: Array<any> = result.data;
      let x = data.map((value) => value.timestamp);
      let y = data.map((value) => value.respect);
      let title = "";
      if (data.length > 0) title = `${data[0].name} [${data[0].ID}] respect`

      this.setState({
        loaded: true,
        chartData: {
          layout: { width: 1000, height: 500, title },
          data: [
            {
              x, y, type: 'scatter', mode: 'lines+markers', marker: { color: 'red' }
            }
          ]
        }
      })
    });
  }

  renderChart() {
    return this.state.loaded ? <Plot layout={this.state.chartData.layout} data={this.state.chartData.data} /> : null 
  }
  componentDidMount() {
    this.getBasicData();
  }
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>

        <p>Check out this lovely data!</p>
        { this.renderChart() }
      </div>
    )
  }
}

export default connect(
  (state: ApplicationState) => state.user, // Selects which state properties are merged into the component's props
  UserStore.actionCreators // Selects which action creators are merged into the component's props
)(Dashboard as any);