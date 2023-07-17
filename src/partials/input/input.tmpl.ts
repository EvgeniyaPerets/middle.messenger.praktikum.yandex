export default `
  <div class="placeholder-container">
    <input type="{{ type }}" placeholder=" " name={{ name }} value={{ value }}></input>
    <label for={{ name }}>{{ placeholder }}</label>
    <p class='subtitle error--text'>{{errorMessage}}</p>
  </div>
`;
