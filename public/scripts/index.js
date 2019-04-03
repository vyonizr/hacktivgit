$(document).ready(() => {
  $("#starred-page").hide()

  $(".navbar-brand").on("click", () => {
    $("#starred-page").hide()
    $("#home-page").show()
  })

  $("#starred-page-a").on("click", () => {
    $("#home-page").hide()
    $("#starred-page").show()

  })

  $("#home-page-a").on("click", () => {
    $("#starred-page").hide()
    $("#home-page").show()
  })

  $("#submit-search-repo-button").on("click", () => {
    $.ajax({
      url: "http://localhost:3000/api/repos/starred?",
      method: "GET",
      data: {
        q: search-repo-input
      }
    })
    .done(function(foundRepos) {
      foundRepos.forEach(foundRepos => {
        $("search-stared-repos-result-tbody").append(
          `<tr>
              <td>
                <a href="#" id="toggle-status">
                  <strong>${foundRepos.full_name}</strong><br>
                  <small>by ${foundRepos.owner.login}</small>
                  <p>${foundRepos.description}</p>
                </a>
              </td>
          </tr>`
        )
      })
    })
    .fail(function(jqXHR, textStatus) {
      console.log("request failed", textStatus);
    })
  })

  $.ajax({
    url: "http://localhost:3000/api/repos/starred",
    method: "GET"
  })
  .done(function(starredRepos) {
    starredRepos.forEach(starredRepo => {
      $("#starred-repos-tbody").append(
        `<tr>
            <td>
              <a href="#" id="toggle-status">
                <strong>${starredRepo.full_name}</strong><br>
                <small>by ${starredRepo.owner.login}</small>
                <p>${starredRepo.description}</p>
              </a>
            </td>
        </tr>`
      )
    })
  })
  .fail(function(jqXHR, textStatus) {
    console.log("request failed", textStatus);
  })

  $.ajax({
    url: "http://localhost:3000/api/repos",
    method: "GET"
  })
  .done(function(repos) {
    repos.forEach(repo => {
      $("#owned-repos-tbody").append(
        `<tr>
            <td>
              <a href="#">
                <strong>${repo.full_name}</strong><br>
              </a>
            </td>
        </tr>`
      )
    })
  })
  .fail(function(jqXHR, textStatus) {
    console.log("request failed", textStatus);
  })

  $.ajax({
    url: "http://localhost:3000/api/",
    method: "GET"
  })
  .done(function(profile) {
    $("#github-profile").prepend(`
    <li class="nav-item">
      <a class="nav-link" href="#">${profile.login}</a>
    </li>`)
    $("#github-profile").prepend(`
    <li class="nav-item">
      <img src="${profile.avatar_url}" role="img" width="30" height="30" alt="">
    </li>`)
  })
  .fail(function(jqXHR, textStatus) {
    console.log("request failed", textStatus);
  })
})