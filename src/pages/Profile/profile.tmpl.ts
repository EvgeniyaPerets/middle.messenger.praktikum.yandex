export default `
  {{> button buttonContext }}
  <div class="profile_wrapper">
    <div class="profile_avatar">
      <div class="avatar">
        <img src="{{ src_avatar }}" />
      </div>
      <h3>{{ display_name }}</h3>
    </div>

    <ul class="profile">
      <li class="profile_item">
        <span>Почта</span>
        <span>{{ email }}</span>
      </li>
      <li class="profile_item">
        <span>Логин</span>
        <span>{{ login }}</span>
      </li>
      <li class="profile_item">
        <span>Имя</span>
        <span>{{ first_name }}</span>
      </li>
      <li class="profile_item">
        <span>Фамилия</span>
        <span>{{ second_name }}</span>
      </li>
      <li class="profile_item">
        <span>Имя в чате</span>
        <span>{{ display_name }}</span>
      </li>
      <li class="profile_item">
        <span>Телефон</span>
        <span>{{ phone }}</span>
      </li>
    </ul>

    <ul class="profile_nav">
      <li class="profile_nav_item">
        {{> link settingsProfileContext }}
      </li>
      <li class="profile_nav_item">
        {{> link settingsPasswordContext }}
      </li>
      <li class="profile_nav_item">
        {{> link outContext }}
      </li>
    </ul>
  </div>
`
