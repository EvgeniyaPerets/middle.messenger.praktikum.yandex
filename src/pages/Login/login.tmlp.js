export default `
<div class='wrapper'>
  <h1 class='title'>{{ title }}</h1>
  <form>
    {{> input loginContext }}
    {{> input passwordContext }}
    {{> button buttonContext}}
  </form>

  {{> link linkContext }}
</div>
`