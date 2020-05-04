#!/bin/sh

secrets=true

echo "[SECRETS] creating docker secrets"

if [ $secrets ]
then
    echo "27107" | docker secret create MONGO_PORT -
    echo "danydodson" | docker secret create MONGO_USERNAME -
    echo "IZmJ5l8Qp357l6" | docker secret create MONGO_PASSWORD -
    echo "users_api" | docker secret create MONGO_USERS_DB -
    echo "danydodson" | docker secret create MONGO_INITDB_ROOT_USERNAME -
    echo "IZmJ5l8Qp357l6" | docker secret create MONGO_INITDB_ROOT_PASSWORD -
    echo "danydodson" | docker secret create MONGO_ROOT_USERNAME -
    echo "IZmJ5l8Qp357l6" | docker secret create MONGO_ROOT_PASSWORD -
    echo "danydodson" | docker secret create MONGO_ADMIN_USERNAME -
    echo "IZmJ5l8Qp357l6" | docker secret create MONGO_ADMIN_PASSWORD -
fi