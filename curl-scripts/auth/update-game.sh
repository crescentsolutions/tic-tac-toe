# Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md

curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
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
