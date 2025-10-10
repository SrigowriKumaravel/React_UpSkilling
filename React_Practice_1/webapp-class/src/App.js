import { Component } from "react";
import { companies } from "./Dataset.js";
import "./App.css";
import Company from "./Component/Company/Company.js";

class App extends Component {
  state = {
    selectedCompany: "Select Company",
  };

  handleCompanySelection = (companyName) => {
    this.setState({ selectedCompany: companyName });
  };

  render() {
    const { selectedCompany } = this.state;

    return (
      <div className="container">
        <h1 className="main-title">{selectedCompany}</h1>
        {companies.map((company) => (
          <Company
            key={company.id}
            companyName={company.companyName}
            details={company.details}
            departments={company.departments}
            onCompanySelect={this.handleCompanySelection}
          />
        ))}
      </div>
    );
  }
}

export default App;
