

# 
cd gateway/client && yarn clean && cd ../../ && \

cd services/users && yarn clean && cd ../../ && \

cd services/profiles && yarn clean && cd ../../ && \

cd services/posts && yarn clean && cd ../../ && \

# 
cd services/users && yarn build && cd ../../ && docker-compose build users_service && \

# cd services/profiles && yarn build && cd ../../ && docker-compose build profiles_service && \

# cd services/posts && yarn build && cd ../../ && docker-compose build posts_service && \

cd gateway/client && yarn build && cd ../../ && docker-compose build gateway_client && \

cd gateway/proxy && docker-compose build gateway_proxy && cd ../../ && \

docker-compose up