export default `
<div class='settings_profile_wrapper'>
  <h3 class='title_h3'>{{ title }}</h3>
  <form>
    {{> input oldPasswordContext }}
    {{> input newPasswordContext }}
    {{> button buttonContext}}
  </form>
</div>
`;
