# Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md
# Source: https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md#signout

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
