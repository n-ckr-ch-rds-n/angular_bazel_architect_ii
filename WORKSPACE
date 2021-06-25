# Bazel workspace created by @bazel/create 0.38.1
# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/master/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "angular_bazel_architect",
)

# Install the nodejs "bootstrap" package
# This provides the basic tools for running and packaging nodejs programs in Bazel
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "0fa2d443571c9e02fcb7363a74ae591bdcce2dd76af8677a95965edf329d778a",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.6.0/rules_nodejs-3.6.0.tar.gz"],
)

_ESBUILD_VERSION = "0.11.14"

http_archive(
    name = "esbuild_darwin",
    build_file_content = """exports_files(["bin/esbuild"])""",
    sha256 = "81c8623c4c03a1fc449c37a90dd630025e334d312420d42106a899f78bd5e3fe",
    strip_prefix = "package",
    urls = [
        "https://registry.npmjs.org/esbuild-darwin-64/-/esbuild-darwin-64-%s.tgz" % _ESBUILD_VERSION,
    ],
)

# The yarn_install rule runs yarn anytime the package.json or yarn.lock file changes.
# It also extracts and installs any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    data = ["//:patches/@angular-devkit+architect-cli+0.1102.2.patch"],
    package_json = "//:package.json",
    # Turn off symlink_node_modules here as it causes extreme flakiness on buildkite
    # macos CI with missing files in node_modules.
    # TODO: track down the root cause of the flakiness; it may be something to
    # do with how the Bazel team has setup their macos virtualization.
    symlink_node_modules = False,
    yarn_lock = "//:yarn.lock",
    args = ["--ignore-engines"]
)
