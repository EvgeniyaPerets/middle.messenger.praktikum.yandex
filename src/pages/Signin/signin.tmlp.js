export default `
<div class='signin_wrapper'>
  <h3 class='title_h3'>{{ title }}</h3>
  <form>
    {{> input emailContext }}
    {{> input signinContext }}
    {{> input nameContext }}
    {{> input surnameContext }}
    {{> input phoneContext }}
    {{> input passwordContext }}
    {{> input secondPasswordContext }}
    {{> button buttonContext}}
  </form>

  {{> link linkContext }}
</div>
`