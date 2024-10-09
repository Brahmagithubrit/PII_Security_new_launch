import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      <h1>Analysis Results</h1>
      {/* Render results */}
      {results.map((result, index) => (
        <div key={index}>
          <p>{result}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
