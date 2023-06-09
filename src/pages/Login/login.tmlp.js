export default `
<div class='wrapper'>
  <h3 class='title'>{{ title }}</h3>
  <form>
    {{> input loginContext }}
    {{> input passwordContext }}
    {{> button buttonContext}}
  </form>

  {{> link linkContext }}
</div>
`