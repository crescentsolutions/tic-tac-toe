# Source: https://git.generalassemb.ly/daylinjones/jquery-ajax-token-auth
# Source: https://git.generalassemb.ly/ga-wdi-boston/library-api/blob/master/docs/authors.md

curl "https://tic-tac-toe-api-development.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
