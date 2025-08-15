#!/bin/sh

docker rm $(docker ps -a -q --filter "name=^ory")