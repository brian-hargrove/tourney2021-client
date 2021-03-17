import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/calendar.css';
const Calendar = props => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div>
      <Table className="calendarTable">
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>March 14</td>
            <td>March 15</td>
            <td>March 16</td>
            <td>March 17</td>
            <td>
              <Link to="/march18" className="calendarLink">
                March 18
              </Link>
            </td>
            <td>
              <Link to="/march19" className="calendarLink">
                March 19
              </Link>
            </td>
            <td>
              <Link to="/march20" className="calendarLink">
                March 20
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/march21" className="calendarLink">
                March 21
              </Link>
            </td>
            <td>
              <Link to="/march22" className="calendarLink">
                March 22
              </Link>
            </td>
            <td>March 23</td>
            <td>March 24</td>
            <td>March 25</td>
            <td>March 26</td>
            <td>
              <Link to="/march27" className="calendarLink">
                March 27
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/march28" className="calendarLink">
                March 28
              </Link>
            </td>
            <td>
              <Link to="/march29" className="calendarLink">
                March 29
              </Link>
            </td>
            <td>
              <Link to="/march30" className="calendarLink">
                March 30
              </Link>
            </td>
            <td>March 31</td>
            <td>April 1</td>
            <td>April 2</td>
            <td>
              <Link to="/april03" className="calendarLink">
                April 3
              </Link>
            </td>
          </tr>
          <tr>
            <td>April 4</td>
            <td>
              <Link to="/april05" className="calendarLink">
                April 5
              </Link>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Calendar;
