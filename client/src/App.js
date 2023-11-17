import React from 'react';
import { Container } from 'reactstrap';
import LogSearch from './components/LogSearch';
import LogTable from './components/LogTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      searchQuery: '',
      filter: {}
    };
  }

  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
  }

  handleFilterChange = (filter) => {
    this.setState({ filter });
  }

  fetchLogs = () => {
    // Fetch logs from the server based on the search query and filter
    // This is a placeholder and should be replaced with actual server call
    const logs = []; // Replace with actual server call
    this.setState({ logs });
  }

  componentDidMount() {
    this.fetchLogs();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery || prevState.filter !== this.state.filter) {
      this.fetchLogs();
    }
  }

  render() {
    return (
      <Container>
        <h1>Log Ingestor System</h1>
        <LogSearch onSearch={this.handleSearch} onFilterChange={this.handleFilterChange} />
        <LogTable logs={this.state.logs} />
      </Container>
    );
  }
}

export default App;
