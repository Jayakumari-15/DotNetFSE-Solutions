function GuestGreeting() {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bhubaneswar</td>
            <td>Bangalore</td>
          </tr>
        </tbody>
      </table>

      <p>Please login to book tickets.</p>
    </div>
  );
}

export default GuestGreeting;