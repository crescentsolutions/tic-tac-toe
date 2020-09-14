# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authentication.md
# Source: https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
