# Source: /curl-scripts/auth/sign-up.sh
# Source: https://git.generalassemb.ly/ga-wdi-boston/game-project-api

curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

echo
