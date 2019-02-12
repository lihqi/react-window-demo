import React, { Component } from "react";
import "./App.css";
import { FixedSizeList as List } from "react-window";
// import http from "./http";
import ListItem from "./ListItem";
import testData from "./data.json";
let tmpData = JSON.parse(JSON.stringify(testData));

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        let data = tmpData.data;
        this.setState({
            data
        });
        // http({
        //     url: "/apii"
        // }).then(res => {

        // });
    }
    render() {
        let { data } = this.state;
        return (
            <List
                height={450}
                itemCount={data.length}
                itemSize={74}
                width={300}
                itemData={data}
            >
                {ListItem}
            </List>
        );
    }
}

export default App;
