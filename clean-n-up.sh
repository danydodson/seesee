
cd services/users && yarn build && cd ../../ && docker-compose build users_service && \

cd services/profiles && yarn build && cd ../../ && docker-compose build profiles_service && \

cd services/posts && yarn build && cd ../../ && docker-compose build posts_service && \

cd gateway/client && yarn build && cd ../../ && docker-compose build api_gateway_service && \

cd gateway/proxy && yarn build && cd ../../ && docker-compose build proxy_service