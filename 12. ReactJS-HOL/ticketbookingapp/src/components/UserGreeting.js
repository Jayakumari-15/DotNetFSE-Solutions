function UserGreeting() {
  return (
    <div>
      <h2>Welcome Back!</h2>

      <h3>Flight Booking</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Route</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Delhi → Mumbai</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Bhubaneswar → Bangalore</td>
            <td>
              <button>Book Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserGreeting;