export default `
<div class='settings_profile_wrapper'>
  <h3 class='title_h3'>{{ title }}</h3>
  <form>
    {{> input emailContext }}
    {{> input signinContext }}
    {{> input nameContext }}
    {{> input surnameContext }}
    {{> input displayNameContext }}
    {{> input phoneContext }}
    {{> button buttonContext}}
  </form>
</div>
`
