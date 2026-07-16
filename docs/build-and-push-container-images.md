# Build and push container images

The `hello-kubernetes` container image can be built and pushed to your own container registry. Currently only the `linux/amd64` architecture is supported.

## Prerequisites

- [make](https://www.gnu.org/software/make/)
- [Docker cli](https://www.docker.com/)
- Container registry

If you are using the [VS Code Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) based development environment, all of the prerequisites will be available in the terminal.

## Makefile configuration

The `Makefile` in the root folder of the repo provides the functionality to allow you to build and push your own `hello-kubernetes` container image.

### Environment variables

| Name | Default | Description | 
| ---- | ------- | ----------- |
| REGISTRY | ghcr.io | The container registry to push the images to. |
| REPOSITORY | gmirsky | The repository (or hierarchy) within the container registry where the image will be located. |
| IMAGE_VERSION | the version in src/app/package.json | The image version (label) to use for the built and pushed container images. |

### Targets

| Name | Description |
| ---- | ----------- |
| build-image-linux | Build the `hello-kubernetes` container image for the `linux/amd64` architecture. |
| push-image | Push the `hello-kubernetes` container image to the defined registry. |

## Building a container image

You can build the `hello-kubernetes` container image as follows:

```bash
# Build the ghcr.io/gmirsky/hello-kubernetes:$version image
make build-image-linux

# Build the ghcr.io/gmirsky/hello-kubernetes:$version image
export REGISTRY=ghcr.io
export REPOSITORY=gmirsky
make build-image-linux
```

## Pushing a container image

You can push your built `hello-kubernetes` container image to the defined registry as follows:

```bash
# Push ghcr.io/gmirsky/hello-kubernetes:$version.
# Will tag $majorversion and $majorversion.$minorversion.
#
# Example: The container image will be tagged as follows for $version=1.10.0
#   - ghcr.io/gmirsky/hello-kubernetes:1.10.0
#   - ghcr.io/gmirsky/hello-kubernetes:1.10
#   - ghcr.io/gmirsky/hello-kubernetes:1
make push-image

# REGISTRY=ghcr.io
# REPOSITORY=gmirsky
# Push ghcr.io/gmirsky/hello-kubernetes:$version to ghcr.io.
# Will tag $majorversion and $majorversion.$minorversion.
#
# Example: The container image will be tagged as follows for $version=1.10.0
#   - ghcr.io/gmirsky/hello-kubernetes:1.10.0
#   - ghcr.io/gmirsky/hello-kubernetes:1.10
#   - ghcr.io/gmirsky/hello-kubernetes:1
export REGISTRY=ghcr.io
export REPOSITORY=gmirsky
make push-image
```