export default `
<div class='wrapper'>
  <h1 class='title'>{{ title }}</h1>
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