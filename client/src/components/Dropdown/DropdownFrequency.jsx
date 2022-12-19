export default function DropdownFrequency() {
    return (
      <div>
        <label for="effort">Frequency</label>
        <select name="frequency" id="frequency">
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="two_weeks">every two weeks</option>
          <option value="monthly">monthly</option>
          <option value="two_months">every two months</option>
        </select>
      </div>
    );
  }
  