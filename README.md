# Log Ingestor System

This project is a log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters. The system is built using Node.js, javascript, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- JavaScript
- MongoDB

### Installing

1. Clone the repository.js`: Defines the schema for the log data and creates an index to improve search performance.
- `client/`: Contains the client-side code for the query interface. It includes components for searching logs and displaying the results.

## Built With

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

```
git clone https://github.com/thegeekygamechanger/log-ingestor.git
```

2. Install dependencies
```
cd log-ingestor-system
npm install
```

3. Start the server
```
npm run start
```

4. Start the client
```
npm run client
```

## Usage

The log ingestor system runs on port `3000` by default. Logs can be ingested by making a POST request to `/api/logs` with the log data in the request body.

The query interface can be accessed by making a GET request to `/api/query` with the desired filters as query parameters.

## Project Structure

- `server.js`: The main server file. It sets up the Express.js server and connects to the MongoDB database.
- `logIngestor.js`: Handles the ingestion of logs. It defines a POST route that saves the incoming log data to the database.
- `queryInterface.js`: Handles querying of logs. It defines a GET route that retrieves logs from the database based on the provided filters.
- `database.js`: Defines the schema for the log data and creates an index to improve search performance.
