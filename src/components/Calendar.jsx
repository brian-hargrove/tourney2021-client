const Home = props => {
  const onClick = () => {
    console.log('click');
  };

  return (
    <div>
      <Table>
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
            <td onClick={onClick}>March 14</td>
            <td>March 15</td>
            <td>March 16</td>
            <td>March 17</td>
            <td>March 18</td>
            <td>March 19</td>
            <td>March 20</td>
          </tr>
          <tr>
            <td>March 21</td>
            <td>March 22</td>
            <td>March 23</td>
            <td>March 24</td>
            <td>March 25</td>
            <td>March 26</td>
            <td>March 27</td>
          </tr>
          <tr>
            <td>March 28</td>
            <td>March 29</td>
            <td>March 30</td>
            <td>March 31</td>
            <td>April 1</td>
            <td>April 2</td>
            <td>April 3</td>
          </tr>
          <tr>
            <td>April 4</td>
            <td>April 5</td>
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
export default Home;
