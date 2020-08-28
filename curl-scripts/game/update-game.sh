# Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md
# Source: https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${TURN}"'",
          "value": "'"${LETTER}"'"
        },
        "over": "'"${FINISHED}"'"
  }
}'

echo
