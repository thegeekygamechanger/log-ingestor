import React from 'react';
import { Table } from 'reactstrap';

const LogTable = ({ logs }) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Level</th>
          <th>Message</th>
          <th>Resource ID</th>
          <th>Timestamp</th>
          <th>Trace ID</th>
          <th>Span ID</th>
          <th>Commit</th>
          <th>Parent Resource ID</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.level}</td>
            <td>{log.message}</td>
            <td>{log.resourceId}</td>
            <td>{log.timestamp}</td>
            <td>{log.traceId}</td>
            <td>{log.spanId}</td>
            <td>{log.commit}</td>
            <td>{log.metadata.parentResourceId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LogTable;
