export default `
  <div class="wrapperError">
    <h1 class="errorStatus">{{ errorStatus }}</h1>
    <span class="errorText">{{ errorText}}</span>
    {{> link linkContext }}
  </div>
`;
