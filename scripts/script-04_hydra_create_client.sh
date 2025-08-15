#!/bin/sh

docker exec -it ory-hydra hydra create client \
  --endpoint http://hydra:4445 \
  --name "my-app" \
  --grant-type authorization_code,refresh_token \
  --response-type code,id_token \
  --scope openid,offline,profile,email \
  --redirect-uri http://localhost:3100/test/callback \
  --post-logout-callback http://localhost:3100/ \
  --token-endpoint-auth-method client_secret_post
