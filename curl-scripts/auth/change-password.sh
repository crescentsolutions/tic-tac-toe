# Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "old_password": "'"${OLDPW}"'",
      "new_password": "'"${NEWPW}"'"
    }
  }'

echo
