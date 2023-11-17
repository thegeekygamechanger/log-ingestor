import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class LogSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      filter: {
        level: '',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        'metadata.parentResourceId': ''
      }
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  handleFilterChange = (event) => {
    this.setState({
      filter: {
        ...this.state.filter,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
    this.props.onFilterChange(this.state.filter);
  }

  render() {
    // Your code goes here
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="searchQuery">Search Query</Label>
          <Input type="text" name="searchQuery" id="searchQuery" placeholder="Enter search query" value={this.state.searchQuery} onChange={this.handleSearchChange} />
        </FormGroup>
        <FormGroup>
          <Label for="level">Filter by Level</Label>
          <Input type="text" name="level" id="level" placeholder="Enter level" value={this.state.filter.level} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Filter by Message</Label>
          <Input type="text" name="message" id="message" placeholder="Enter message" value={this.state.filter.message} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="resourceId">Filter by Resource ID</Label>
          <Input type="text" name="resourceId" id="resourceId" placeholder="Enter resource ID" value={this.state.filter.resourceId} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="timestamp">Filter by Timestamp</Label>
          <Input type="text" name="timestamp" id="timestamp" placeholder="Enter timestamp" value={this.state.filter.timestamp} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="traceId">Filter by Trace ID</Label>
          <Input type="text" name="traceId" id="traceId" placeholder="Enter trace ID" value={this.state.filter.traceId} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="spanId">Filter by Span ID</Label>
          <Input type="text" name="spanId" id="spanId" placeholder="Enter span ID" value={this.state.filter.spanId} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="commit">Filter by Commit</Label>
          <Input type="text" name="commit" id="commit" placeholder="Enter commit" value={this.state.filter.commit} onChange={this.handleFilterChange} />
        </FormGroup>
        <FormGroup>
          <Label for="metadata.parentResourceId">Filter by Parent Resource ID</Label>
          <Input type="text" name="metadata.parentResourceId" id="metadata.parentResourceId" placeholder="Enter parent resource ID" value={this.state.filter['metadata.parentResourceId']} onChange={this.handleFilterChange} />
        </FormGroup>
        <Button type="submit">Search</Button>
      </Form>
    );
  }
}

export default LogSearch;