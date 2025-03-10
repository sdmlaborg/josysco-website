#!/usr/bin/env sh

set -e -u

cd "$(dirname "$0")" || exit

# shellcheck source=/dev/null
. ".env"
# shellcheck source=/dev/null
. ".env.local"

if [ -z "$AWS_REGION" ]; then
    echo "AWS_REGION is not set" >&2
    exit 1
fi

ecr_domain="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com"
docker_image_name="$ecr_domain/josysco-lp:latest"
image_build="false"

rm_docker_image() {
    if "$image_build"; then
        docker rmi "$docker_image_name"
    fi
}

trap rm_docker_image EXIT INT TERM

if ! docker images --format '{{.Repository}}:{{.Tag }}' | grep -q "$docker_image_name"; then
    image_build="true"
    docker build -t "$docker_image_name" .
    trap rm_docker_image EXIT INT TERM
fi

aws ecr get-login-password --region "$AWS_REGION" |
    docker login --username AWS --password-stdin "$ecr_domain"
docker push "$docker_image_name"
